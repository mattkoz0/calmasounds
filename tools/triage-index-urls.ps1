<#
  Triage dla raportu "Indeksowanie stron" z Google Search Console.

  Wejście: pliki CSV wyeksportowane z GSC (Indeksowanie stron -> przyczyna ->
  Eksportuj -> arkusz "Tabela"). Skrypt czyta pierwszą kolumnę zawierającą URL.

  Wyjście: podział adresów na kategorie, które decydują o tym, czy jest co
  naprawiać (patrz CONTENT_PLAN.md §5.2.3):
    - InSitemap    -> prawdziwy problem, do Inspekcji URL
    - EnPrefix     -> /en/* , przekierowanie z localePrefix 'as-needed' - szum
    - Apex         -> calmasounds.com bez www - przekierowanie 301 - szum
    - NoindexRoute -> /bio /privacy-policy /terms-of-service /support /download
                      - zamierzony noindex z P0 - szum
    - Other        -> stare slugi, parametry, /_next/* - obejrzeć ręcznie

  Przykład:
    npm run seo:triage -- -Csv gsc_data/2026-09-09/indeksowanie/urls/*.csv
#>
param(
  [Parameter(Mandatory = $true)]
  [string[]]$Csv,

  [string]$SitemapUrl = "https://www.calmasounds.com/sitemap.xml"
)

$ErrorActionPreference = "Stop"

$noindexRoutes = @("bio", "privacy-policy", "terms-of-service", "support", "download")
$locales = @("en", "es", "pl", "de", "fr", "ko", "ja", "pt-BR")

Write-Output "Pobieram sitemap: $SitemapUrl"
[xml]$sitemapXml = (Invoke-WebRequest -UseBasicParsing $SitemapUrl).Content
$sitemapUrls = [System.Collections.Generic.HashSet[string]]::new(
  [string[]]@($sitemapXml.urlset.url.loc),
  [System.StringComparer]::OrdinalIgnoreCase
)
Write-Output "Sitemap zawiera $($sitemapUrls.Count) URL-i."
Write-Output ""

$files = @()
foreach ($pattern in $Csv) {
  $files += @(Get-ChildItem -Path $pattern -File)
}
if ($files.Count -eq 0) {
  throw "Nie znaleziono żadnego pliku CSV dla wzorca: $($Csv -join ', ')"
}

$rows = foreach ($file in $files) {
  $lines = Get-Content -Path $file.FullName -Encoding UTF8
  foreach ($line in $lines) {
    $match = [regex]::Match($line, 'https?://[^\s",]+')
    if (-not $match.Success) { continue }
    $url = $match.Value.TrimEnd('/')
    if ($url -match '\.xml$') { continue }

    $uri = [uri]$url
    $path = $uri.AbsolutePath.Trim('/')
    $firstSegment = ($path -split '/')[0]

    $category =
      if ($sitemapUrls.Contains($url) -or $sitemapUrls.Contains("$url/")) { "InSitemap" }
      elseif ($uri.Host -notlike "www.*") { "Apex" }
      elseif ($firstSegment -eq "en") { "EnPrefix" }
      elseif ($noindexRoutes -contains $firstSegment) { "NoindexRoute" }
      elseif ($locales -contains $firstSegment -and
              $noindexRoutes -contains (($path -split '/')[1])) { "NoindexRoute" }
      else { "Other" }

    [pscustomobject]@{
      Source   = $file.Name
      Url      = $url
      Category = $category
    }
  }
}

$rows = @($rows | Sort-Object Url -Unique)

Write-Output "Wczytano $($rows.Count) unikalnych adresów z $($files.Count) plików."
Write-Output ""
$rows | Group-Object Category |
  Sort-Object Count -Descending |
  Format-Table @{ N = "Kategoria"; E = { $_.Name } }, Count -AutoSize |
  Out-String |
  Write-Output

$actionable = @($rows | Where-Object { $_.Category -in @("InSitemap", "Other") })

if ($actionable.Count -eq 0) {
  Write-Output "Brak adresów wymagających pracy - wszystko jest znanym szumem."
  Write-Output "Zapisz ten wynik w CONTENT_PLAN.md §5.2.3 i zamknij temat."
} else {
  Write-Output "Do sprawdzenia w Inspekcji URL ($($actionable.Count)):"
  $actionable |
    Format-Table Category, Url, Source -AutoSize |
    Out-String -Width 200 |
    Write-Output
}
