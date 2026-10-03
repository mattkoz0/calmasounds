import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

const aiAudit = process.argv.includes('--ai');
const appId = 'https://www.calmasounds.com/#app';
const organizationId = 'https://www.calmasounds.com/#organization';
const locales = ['en', 'es', 'pl', 'de', 'fr', 'ko', 'ja', 'pt-BR'];
const counts = { jsonLd: 0, articles: 0, appPages: 0, botRequests: 0, pagesWithoutJsonLd: 0 };
const fetchPage = (url, options = {}) => fetch(url, { signal: AbortSignal.timeout(15000), ...options });

const base = process.env.SEO_BASE_URL || 'http://localhost:3124';
const server = process.env.SEO_BASE_URL ? null : spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3124'], { stdio: 'ignore' });
try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    try { if ((await fetchPage(`${base}/robots.txt`)).ok) { ready = true; break; } } catch {}
    await delay(500);
  }
  if (!ready) throw new Error(`Server unavailable: ${base}`);
  const sitemap = await (await fetchPage(`${base}/sitemap.xml`)).text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  if (!urls.length) throw new Error('Empty sitemap');
  const failures = [];
  if (aiAudit) {
    const robots = await (await fetchPage(`${base}/robots.txt`)).text();
    // The current policy is one wildcard group; fail if that policy changes so
    // new per-bot restrictions receive an explicit review.
    const agents = [...robots.matchAll(/^User-Agent:\s*(.+)$/gim)].map(m => m[1].trim());
    if (agents.length !== 1 || agents[0] !== '*' || /^Disallow:\s*\//im.test(robots)) {
      failures.push('robots.txt: wildcard crawling policy changed; review AI crawler access');
    }
    if (!/Sitemap: https:\/\/www\.calmasounds\.com\/sitemap\.xml/i.test(robots)) {
      failures.push('robots.txt: missing sitemap');
    }
  }
  for (const url of urls) {
    const response = await fetchPage(`${base}${new URL(url).pathname}`, { redirect: 'manual' });
    const html = await response.text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    const checks = [
      [response.status === 200, `HTTP ${response.status}`],
      [canonical === url, `canonical ${canonical}`],
      [h1 === 1, `${h1} H1 headings`],
      [/<meta name="description" content="[^"]+"/.test(html), 'missing description'],
      [!/<meta name="robots" content="[^"]*noindex/.test(html), 'noindex'],
      [(html.match(/hrefLang=/gi) || []).length >= 9, 'missing language alternates'],
    ];
    if (aiAudit) {
      const path = new URL(url).pathname;
      const locale = locales.find(l => l !== 'en' && (path === `/${l}` || path.startsWith(`/${l}/`))) ?? 'en';
      const route = locale === 'en' ? path : path.slice(locale.length + 1) || '/';
      const entities = [];
      const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      for (const match of html.matchAll(/<script\b[^>]*\btype="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
        counts.jsonLd++;
        try {
          const data = JSON.parse(match[1]);
          entities.push(...(Array.isArray(data['@graph']) ? data['@graph'] : [data]));
        } catch { failures.push(`${path}: invalid server-rendered JSON-LD`); }
      }
      if (!entities.length) counts.pagesWithoutJsonLd++;
      const apps = entities.filter(e => e['@type'] === 'SoftwareApplication' && /calma/i.test(e.name ?? ''));
      if (apps.length) {
        counts.appPages++;
        if (apps.length !== 1) failures.push(`${path}: ${apps.length} Calma application entities`);
        for (const app of apps) {
          if (app['@id'] !== appId || app.name !== 'Calma' || app.publisher?.['@id'] !== organizationId) {
            failures.push(`${path}: inconsistent Calma identity`);
          }
          if (!app.operatingSystem.includes('Android') || !app.operatingSystem.includes('iOS') || app.downloadUrl?.length !== 2) {
            failures.push(`${path}: missing platforms or store links`);
          }
        }
      }
      if (route === '/') {
        if (apps.length !== 1 || !/<dl\b/.test(html)) failures.push(`${path}: missing product facts`);
        const visibleDecoded = visible.replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16))).replace(/&#([0-9]+);/g, (_, value) => String.fromCodePoint(Number(value))).replace(/&amp;/g, '&').replace(/&quot;/g, '"');
        for (const fact of apps[0]?.featureList ?? []) {
          if (!visibleDecoded.includes(fact)) failures.push(`${path}: structured product fact missing from visible content`);
        }
        if (!visible.includes('Android') || !visible.includes('iOS')) failures.push(`${path}: missing visible platforms`);
      }
      if (route.startsWith('/blog/')) {
        counts.articles++;
        const article = entities.find(e => ['Article', 'BlogPosting', 'NewsArticle'].includes(e['@type']));
        if (!article) failures.push(`${path}: article schema unavailable without JavaScript`);
        else {
          if (article.inLanguage !== locale || article.publisher?.['@id'] !== organizationId) failures.push(`${path}: missing article language or publisher identity`);
          if (article.mainEntityOfPage?.['@id'] !== url) failures.push(`${path}: article canonical mismatch`);
          if (!article.datePublished || !article.dateModified) failures.push(`${path}: missing article dates`);
        }
      }
    }
    for (const [ok, reason] of checks) if (!ok) failures.push(`${new URL(url).pathname}: ${reason}`);
  }
  if (aiAudit) {
    const bots = ['Googlebot', 'bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot'];
    for (const locale of locales) {
      const path = locale === 'en' ? '/' : `/${locale}`;
      for (const bot of bots) {
        const response = await fetchPage(`${base}${path}`, { headers: { 'User-Agent': bot }, redirect: 'manual' });
        const html = await response.text();
        counts.botRequests++;
        if (response.status !== 200 || !/<h1[\s>]/.test(html) || /<meta name="robots" content="[^"]*(?:noindex|nosnippet)/.test(html) || /(?:noindex|nosnippet)/i.test(response.headers.get('x-robots-tag') ?? '')) {
          failures.push(`${path}: content unavailable for simulated ${bot} request`);
        }
      }
    }
    console.log(`AI audit: ${counts.jsonLd} JSON-LD blocks, ${counts.articles} article pages, ${counts.appPages} product pages, ${counts.botRequests} simulated bot requests.`);
    console.log(`${counts.pagesWithoutJsonLd} pages have no JSON-LD (informational; markup is not mandatory).`);
    console.log('Bot requests test HTTP behaviour only; they do not verify crawler IP access, indexing or citations.');
  }
  console.log(`Checked ${urls.length} sitemap URLs; ${failures.length} issues.`);
  failures.forEach(f => console.error(f));
  process.exitCode = failures.length ? 1 : 0;
} finally { server?.kill(); }
