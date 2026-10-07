import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import * as jsxRuntime from "react/jsx-runtime";

const base = process.argv[2] || "http://localhost:3126";

// Exercise the actual click handler: acquisition labels must not misclassify
// every visitor as organic, and existing campaign links must stay intact.
const source = readFileSync(new URL("../app/[locale]/_components/conversion-tracking.tsx", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const events = [];
let clickHandler;
const context = {
  exports: {}, URL, URLSearchParams,
  require: name => {
    assert.equal(name, "react");
    return { useEffect: effect => effect() };
  },
  window: { location: { href: `${base}/brown-noise-app`, origin: base, pathname: "/brown-noise-app" }, gtag: (...args) => events.push(args) },
  document: { addEventListener: (name, callback) => { assert.equal(name, "click"); clickHandler = callback; }, removeEventListener: () => {} },
};
vm.runInNewContext(compiled, context);
context.exports.default();
function click(href) {
  const anchor = { href, textContent: "Download", dataset: { ctaLocation: "hero" }, closest: () => null, getAttribute: () => null };
  clickHandler({ target: { closest: () => anchor } });
  return new URL(anchor.href);
}
const play = click("https://play.google.com/store/apps/details?id=pl.mitysoft.calma");
const referrer = new URLSearchParams(play.searchParams.get("referrer"));
assert.equal(referrer.get("utm_medium"), "referral");
assert.equal(referrer.get("utm_campaign"), "website_download");
assert.equal(events.at(-1)[1], "store_click");
assert.equal(events.at(-1)[2].store, "google_play");
assert.equal(events.at(-1)[2].link_location, "hero");
const attributed = "https://play.google.com/store/apps/details?id=pl.mitysoft.calma&referrer=utm_source%3Dnewsletter";
assert.equal(click(attributed).searchParams.get("referrer"), "utm_source=newsletter");
const apple = click("https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923?pt=123&ct=newsletter");
assert.equal(apple.searchParams.get("pt"), "123");
assert.equal(apple.searchParams.get("ct"), "newsletter");
assert.equal(events.at(-1)[2].store, "app_store");
console.log("PASS: store click attribution and existing campaign parameters.");

// Changing language from an English-only landing must lead to an existing page.
let currentPath;
const navigation = [];
const headerSource = readFileSync(new URL("../app/[locale]/_components/header.tsx", import.meta.url), "utf8");
const headerContext = {
  exports: {},
  require: name => {
    if (name === "react/jsx-runtime") return jsxRuntime;
    if (name === "react") return { useState: value => [value, () => {}], useRef: () => ({ current: null }), useEffect: () => {} };
    if (name === "@/i18n/routing") return { usePathname: () => currentPath, useRouter: () => ({ replace: (...args) => navigation.push(args) }), Link: () => null };
    if (name === "next-intl") return { useLocale: () => "en", useTranslations: () => key => key };
    if (name === "next/image") return { default: () => null };
    if (name === "react-icons/fa") return { FaGooglePlay: () => null, FaApple: () => null };
    throw new Error(`Unexpected Header dependency: ${name}`);
  },
};
vm.runInNewContext(ts.transpileModule(headerSource, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText, headerContext);
function findSelect(element) {
  if (!element || typeof element !== "object") return undefined;
  if (element?.type === "select") return element;
  return [element?.props?.children].flat(Infinity).map(findSelect).find(Boolean);
}
for (currentPath of ["/rain-sounds-app", "/pink-noise-app", "/brown-noise-app"]) {
  findSelect(headerContext.exports.default()).props.onChange({ target: { value: "pl" } });
  assert.equal(navigation.at(-1)[0], currentPath === "/brown-noise-app" ? currentPath : "/");
  assert.equal(navigation.at(-1)[1].locale, "pl");
}
console.log("PASS: language selection avoids untranslated landing pages.");

for (const path of ["/rain-sounds-app", "/pink-noise-app", "/brown-noise-app", "/white-noise-app"]) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.ok(html.includes(`rel="canonical" href="https://www.calmasounds.com${path}"`), `canonical: ${path}`);
  assert.ok(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html), `indexable: ${path}`);
  assert.ok(html.includes('data-cta-location="hero"'), `hero tracking: ${path}`);
  assert.ok(html.includes('data-cta-location="end"'), `end tracking: ${path}`);
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const entities = schemas.flatMap(schema => schema["@graph"] ?? [schema]);
  const faq = entities.find(entity => entity["@type"] === "FAQPage");
  assert.ok(faq, `FAQ schema: ${path}`);
  assert.ok(faq.mainEntity.some(item => /offline/i.test(item.acceptedAnswer.text)), `offline FAQ: ${path}`);
  for (const item of faq.mainEntity.filter(item => /offline|without Wi-Fi|included in the free|free pink|free rain/i.test(item.name))) {
    const visible = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    assert.ok(visible.includes(item.name), `visible FAQ question: ${path}`);
    assert.ok(visible.includes(item.acceptedAnswer.text), `visible FAQ answer: ${path}`);
  }
  if (path === "/rain-sounds-app" || path === "/pink-noise-app") {
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `one H1: ${path}`);
    assert.ok(html.includes('preload="none"'), `audio loads on demand: ${path}`);
    assert.ok(!html.includes('hrefLang="pl"') && !html.includes('hrefLang="es"'), `English alternates only: ${path}`);
  }
}
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
for (const path of ["/rain-sounds-app", "/pink-noise-app"]) {
  assert.ok(sitemap.includes(`<loc>https://www.calmasounds.com${path}</loc>`), `sitemap: ${path}`);
  assert.ok(!sitemap.includes(`/es${path}`) && !sitemap.includes(`/pl${path}`), `no untranslated sitemap entries: ${path}`);
  assert.equal((await fetch(base + "/es" + path)).status, 404, `untranslated route: ${path}`);
}
for (const path of ["/blog/rain-sounds-for-better-sleep-and-focus", "/pl/blog/rain-sounds-for-better-sleep-and-focus"]) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const cta = html.slice(html.indexOf('href="https://apps.apple.com'), html.indexOf('data-cta-location="article_end_secondary"'));
  assert.ok(cta.includes('data-cta-location="article_end"'), `App Store CTA: ${path}`);
  assert.ok(cta.includes('href="https://play.google.com'), `Google Play CTA: ${path}`);
}
for (const sound of ["rain", "pink_noise", "brown_noise", "white_noise"]) {
  assert.equal((await fetch(`${base}/${sound}.m4a`, { method: "HEAD" })).status, 200, `audio file: ${sound}`);
}
console.log("PASS: landing metadata, FAQ consistency, language routing, sitemap, store buttons and audio files.");
