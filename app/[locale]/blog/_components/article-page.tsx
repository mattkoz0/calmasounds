"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Script from "next/script";
import { useParams } from "next/navigation";
import { pathnamesMapping } from "@/app/utils/seo";
import DesktopDownloadQr from "../../_components/desktop-download-qr";

type RelatedArticle = {
  href: string;
  title: string;
  description: string;
};

type ArticlePageProps = {
  jsonLd: Record<string, unknown>;
  ctaHref: string;
  ctaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  topLinkHref: string;
  topLinkLabel: string;
  title: string;
  intro: string;
  children: ReactNode;
  relatedArticles?: RelatedArticle[];
  ctaTitle?: string;
  ctaText?: string;
  slug?: string;
};

const homeTranslations: Record<string, string> = {
  en: "Home",
  pl: "Strona główna",
  es: "Inicio",
  de: "Startseite",
  fr: "Accueil",
  ko: "홈",
  ja: "ホーム",
  "pt-BR": "Início",
};

export function ArticlePage({
  jsonLd,
  ctaHref,
  ctaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
  topLinkHref,
  topLinkLabel,
  title,
  intro,
  children,
  relatedArticles = [],
  ctaTitle = "Explore sleep soundscapes with Calma",
  ctaText = "Calma helps you explore calming audio, sleep soundscapes and more personalized bedtime environments.",
  slug,
  tableOfContents = [],
}: ArticlePageProps & { tableOfContents?: { id: string; title: string }[] }) {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const getLocalizedUrl = (path: string, currentLocale: string) => {
    let cleanPath = path;
    const mapping = pathnamesMapping[path];
    if (mapping && mapping[currentLocale]) {
      cleanPath = mapping[currentLocale];
    }
    const prefix = currentLocale === "en" ? "" : `/${currentLocale}`;
    return `https://www.calmasounds.com${prefix}${cleanPath}`;
  };

  const getLocalizedHref = (href: string) => {
    if (/^https?:\/\//.test(href) || href.startsWith("#")) return href;

    const cleanPath = href.replace(
      /^\/(?:en|es|pl|de|fr|ko|ja|pt-BR)(?=\/|$)/,
      ""
    ) || "/";
    const mappedPath = pathnamesMapping[cleanPath]?.[locale] ?? cleanPath;
    return locale === "en" ? mappedPath : `/${locale}${mappedPath}`;
  };

  const articleUrl = slug
    ? getLocalizedUrl(`/blog/${slug}`, locale)
    : getLocalizedUrl("/blog", locale);
  const rawEntities = Array.isArray(jsonLd["@graph"])
    ? (jsonLd["@graph"] as Record<string, unknown>[])
    : [jsonLd];
  const entities = rawEntities.map((entity) => {
    const { "@context": _context, ...rest } = entity;
    void _context;
    return rest;
  });
  const articleTypes = new Set(["Article", "BlogPosting", "NewsArticle"]);
  const hasArticleEntity = entities.some((entity) =>
    articleTypes.has(String(entity["@type"]))
  );
  const articleIdentity = {
    author: {
      "@type": "Organization",
      name: "Calma",
      url: "https://www.calmasounds.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Calma",
      logo: {
        "@type": "ImageObject",
        url: "https://www.calmasounds.com/logo.png",
      },
    },
    image: "https://www.calmasounds.com/og-image.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
  const enrichedEntities = hasArticleEntity
    ? entities.map((entity) =>
        articleTypes.has(String(entity["@type"]))
          ? { ...entity, ...articleIdentity }
          : entity
      )
    : [
        {
          "@type": "BlogPosting",
          headline: title,
          description: intro,
          url: articleUrl,
          ...articleIdentity,
        },
        ...entities,
      ];
  const enrichedJsonLd = {
    "@context": "https://schema.org",
    "@graph": enrichedEntities,
  };

  const breadcrumbJsonLd = slug ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": homeTranslations[locale] || "Home",
        "item": getLocalizedUrl("", locale)
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": getLocalizedUrl("/blog", locale)
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": getLocalizedUrl(`/blog/${slug}`, locale)
      }
    ]
  } : null;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedJsonLd) }}
      />
      {breadcrumbJsonLd && (
        <Script
          id="breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}



      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Calma Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">{intro}</p>

        <Link
          href={getLocalizedHref(topLinkHref)}
          className="mt-6 inline-flex items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/15"
        >
          {topLinkLabel} <span aria-hidden="true" className="ml-2">→</span>
        </Link>

        {tableOfContents.length > 0 && (
          <nav className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6" aria-label="Table of contents">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40">In this guide</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-white/70 transition hover:text-white hover:underline underline-offset-4"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-10 space-y-10">{children}</div>

        <section className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20 lg:grid lg:grid-cols-12 lg:gap-8 lg:text-left lg:items-center">
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl font-semibold">{ctaTitle}</h2>
            <p className="mt-4 leading-8 text-white/70">{ctaText}</p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row w-full lg:justify-start">
              <a
                href={getLocalizedHref(ctaHref)}
                data-cta-location="article_end"
                className="rounded-2xl bg-white px-6 py-3 text-center font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                {ctaLabel}
              </a>
              <a
                href={getLocalizedHref(secondaryCtaHref)}
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </a>
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
            <DesktopDownloadQr />
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Related articles</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <a
                  key={article.href}
                  href={getLocalizedHref(article.href)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <h3 className="text-lg font-medium">{article.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {article.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
