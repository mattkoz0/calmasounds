param(
  [int]$Port = 3124
)

$ErrorActionPreference = "Stop"
$workspace = Split-Path -Parent $PSScriptRoot
$baseUrl = "http://localhost:$Port"
$nextCli = Join-Path $workspace "node_modules\next\dist\bin\next"

$server = Start-Process `
  -FilePath node `
  -ArgumentList $nextCli, "start", "-p", $Port `
  -WorkingDirectory $workspace `
  -WindowStyle Hidden `
  -PassThru

try {
  Start-Sleep -Seconds 3

  [xml]$sitemap = (Invoke-WebRequest -UseBasicParsing "$baseUrl/sitemap.xml").Content
  $urls = @($sitemap.urlset.url.loc | Sort-Object -Unique)
  $results = foreach ($url in $urls) {
    $path = ([uri]$url).PathAndQuery

    try {
      $response = Invoke-WebRequest -UseBasicParsing "$baseUrl$path"
      $canonical = [regex]::Match(
        $response.Content,
        '<link rel="canonical" href="([^"]+)"'
      ).Groups[1].Value
      $robots = [regex]::Match(
        $response.Content,
        '<meta name="robots" content="([^"]+)"'
      ).Groups[1].Value

      [pscustomobject]@{
        Path = $path
        Status = [int]$response.StatusCode
        Canonical = $canonical
        Robots = $robots
      }
    }
    catch {
      [pscustomobject]@{
        Path = $path
        Status = [int]$_.Exception.Response.StatusCode
        Canonical = ""
        Robots = ""
      }
    }
  }

  $non200 = @($results | Where-Object Status -ne 200)
  $noindex = @($results | Where-Object Robots -match "noindex")
  $missingCanonical = @($results | Where-Object { -not $_.Canonical })
  $duplicateCanonical = @(
    $results |
      Where-Object Canonical |
      Group-Object Canonical |
      Where-Object Count -gt 1
  )

  Write-Output "Sitemap URLs: $($results.Count)"
  Write-Output "Non-200: $($non200.Count)"
  Write-Output "Noindex in sitemap: $($noindex.Count)"
  Write-Output "Missing canonical: $($missingCanonical.Count)"
  Write-Output "Duplicate canonical: $($duplicateCanonical.Count)"

  if ($non200.Count -gt 0) {
    $non200 | Format-Table -AutoSize
  }
  if ($noindex.Count -gt 0) {
    $noindex | Format-Table -AutoSize
  }
  if ($missingCanonical.Count -gt 0) {
    $missingCanonical | Format-Table -AutoSize
  }
  if ($duplicateCanonical.Count -gt 0) {
    $duplicateCanonical | Select-Object Count, Name | Format-Table -AutoSize
  }

  if (
    $non200.Count -gt 0 -or
    $noindex.Count -gt 0 -or
    $missingCanonical.Count -gt 0 -or
    $duplicateCanonical.Count -gt 0
  ) {
    exit 1
  }
}
finally {
  Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
}
