import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

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
  const enrichedJsonLd = {
    ...jsonLd,
    "author": {
      "@type": "Person",
      "name": "Calma Team",
      "url": "https://www.calmasounds.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calma",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.calmasounds.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": slug ? `https://www.calmasounds.com/blog/${slug}` : "https://www.calmasounds.com/blog"
    }
  };

  const breadcrumbJsonLd = slug ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.calmasounds.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.calmasounds.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://www.calmasounds.com/blog/${slug}`
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

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Calma logo"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-contain"
                priority
              />
            </Link>

            <p className="hidden text-sm italic tracking-[0.08em] text-white/60 lg:block">
              Your calm, by design
            </p>
          </div>

          <a
            href={topLinkHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${topLinkLabel} (opens in a new window)`}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            {topLinkLabel}
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Calma Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">{intro}</p>

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

        <section className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20">
          <h2 className="text-2xl font-semibold">{ctaTitle}</h2>
          <p className="mt-4 leading-8 text-white/70">{ctaText}</p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href={ctaHref}
              className="rounded-2xl bg-white px-6 py-3 text-center font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              {ctaLabel}
            </a>
            <a
              href={secondaryCtaHref}
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
            >
              {secondaryCtaLabel}
            </a>
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Related articles</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
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