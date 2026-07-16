import type { ReactNode } from "react";
import Link from "next/link";
import Script from "next/script";
import { getLocale } from "next-intl/server";
import { pathnamesMapping } from "@/app/utils/seo";
import DesktopDownloadQr from "../../_components/desktop-download-qr";
import MoreApps from "../../_components/more-apps";

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

const articleUiTranslations: Record<string, { published: string; updated: string; contents: string; related: string; topicPath: string }> = {
  en: { published: "Published", updated: "Updated", contents: "In this guide", related: "Related articles", topicPath: "Topic path" },
  pl: { published: "Opublikowano", updated: "Zaktualizowano", contents: "W tym poradniku", related: "Powiązane artykuły", topicPath: "Ścieżka tematyczna" },
  es: { published: "Publicado", updated: "Actualizado", contents: "En esta guía", related: "Artículos relacionados", topicPath: "Ruta temática" },
  de: { published: "Veröffentlicht", updated: "Aktualisiert", contents: "In diesem Ratgeber", related: "Ähnliche Artikel", topicPath: "Themenpfad" },
  fr: { published: "Publié", updated: "Mis à jour", contents: "Dans ce guide", related: "Articles associés", topicPath: "Parcours thématique" },
  ko: { published: "게시일", updated: "업데이트", contents: "이 가이드의 내용", related: "관련 글", topicPath: "주제별 가이드" },
  ja: { published: "公開日", updated: "更新日", contents: "このガイドの内容", related: "関連記事", topicPath: "トピックガイド" },
  "pt-BR": { published: "Publicado", updated: "Atualizado", contents: "Neste guia", related: "Artigos relacionados", topicPath: "Trilha temática" },
};

const topicTranslations: Record<string, { clusters: string[]; titles: Record<string, string> }> = {
  en: {
    clusters: ["Sleep sounds and routines", "Noise colors explained", "Focus sounds and ADHD", "Nature sounds and relaxation", "Tinnitus and sound enrichment"],
    titles: {},
  },
  pl: {
    clusters: ["Dźwięki snu i wieczorne rutyny", "Kolory szumu bez tajemnic", "Dźwięki do skupienia i ADHD", "Dźwięki natury i relaks", "Szumy uszne i wzbogacanie dźwięku"],
    titles: {
      "Best Sounds for Sleep": "Najlepsze dźwięki do snu", "White Noise for Sleep": "Biały szum do snu", "Build a Bedtime Routine": "Jak zbudować wieczorną rutynę", "White Noise for Babies": "Biały szum dla niemowląt", "Rain vs White Noise": "Deszcz a biały szum", "Brown vs White vs Pink Noise": "Szum brązowy, biały i różowy", "Green Noise Explained": "Czym jest zielony szum", "Choosing a White Noise App": "Jak wybrać aplikację z białym szumem", "Best Sounds for Studying": "Najlepsze dźwięki do nauki", "Color Noise and ADHD": "Kolory szumu i ADHD", "Binaural Beats: Evidence & Limits": "Dudnienia różnicowe: dowody i ograniczenia", "Benefits of Nature Sounds": "Korzyści z dźwięków natury", "Rain for Sleep and Focus": "Deszcz do snu i skupienia", "Guided Breathing Techniques": "Techniki oddechu prowadzonego", "Tinnitus Sound Enrichment Guide": "Dźwięk przy szumach usznych — poradnik", "White Noise: How Masking Works": "Biały szum: jak działa maskowanie", "Compare Noise Colors": "Porównaj kolory szumu",
    },
  },
  es: {
    clusters: ["Sonidos para dormir y rutinas", "Los colores del ruido explicados", "Sonidos para concentrarse y TDAH", "Sonidos de la naturaleza y relajación", "Tinnitus y enriquecimiento sonoro"],
    titles: {
      "Best Sounds for Sleep": "Mejores sonidos para dormir", "White Noise for Sleep": "Ruido blanco para dormir", "Build a Bedtime Routine": "Crear una rutina para dormir", "White Noise for Babies": "Ruido blanco para bebés", "Rain vs White Noise": "Lluvia frente a ruido blanco", "Brown vs White vs Pink Noise": "Ruido marrón, blanco y rosa", "Green Noise Explained": "Qué es el ruido verde", "Choosing a White Noise App": "Cómo elegir una app de ruido blanco", "Best Sounds for Studying": "Mejores sonidos para estudiar", "Color Noise and ADHD": "Colores de ruido y TDAH", "Binaural Beats: Evidence & Limits": "Ritmos binaurales: evidencia y límites", "Benefits of Nature Sounds": "Beneficios de los sonidos naturales", "Rain for Sleep and Focus": "Lluvia para dormir y concentrarse", "Guided Breathing Techniques": "Técnicas de respiración guiada", "Tinnitus Sound Enrichment Guide": "Guía de sonido para el tinnitus", "White Noise: How Masking Works": "Ruido blanco: cómo funciona el enmascaramiento", "Compare Noise Colors": "Comparar los colores del ruido",
    },
  },
  de: {
    clusters: ["Schlafgeräusche und Routinen", "Rauschfarben erklärt", "Klänge für Fokus und ADHS", "Naturklänge und Entspannung", "Tinnitus und Klangbereicherung"],
    titles: {
      "Best Sounds for Sleep": "Die besten Geräusche zum Schlafen", "White Noise for Sleep": "Weißes Rauschen zum Schlafen", "Build a Bedtime Routine": "Eine Abendroutine aufbauen", "White Noise for Babies": "Weißes Rauschen für Babys", "Rain vs White Noise": "Regen oder weißes Rauschen", "Brown vs White vs Pink Noise": "Braunes, weißes und rosa Rauschen", "Green Noise Explained": "Grünes Rauschen erklärt", "Choosing a White Noise App": "Eine App für weißes Rauschen wählen", "Best Sounds for Studying": "Die besten Klänge zum Lernen", "Color Noise and ADHD": "Rauschfarben und ADHS", "Binaural Beats: Evidence & Limits": "Binaurale Beats: Evidenz und Grenzen", "Benefits of Nature Sounds": "Vorteile von Naturklängen", "Rain for Sleep and Focus": "Regen für Schlaf und Fokus", "Guided Breathing Techniques": "Geführte Atemtechniken", "Tinnitus Sound Enrichment Guide": "Klangbereicherung bei Tinnitus", "White Noise: How Masking Works": "Weißes Rauschen: So funktioniert Maskierung", "Compare Noise Colors": "Rauschfarben vergleichen",
    },
  },
  fr: {
    clusters: ["Sons pour dormir et routines", "Les couleurs du bruit expliquées", "Sons pour la concentration et TDAH", "Sons de la nature et relaxation", "Acouphènes et enrichissement sonore"],
    titles: {
      "Best Sounds for Sleep": "Meilleurs sons pour dormir", "White Noise for Sleep": "Bruit blanc pour dormir", "Build a Bedtime Routine": "Créer une routine du coucher", "White Noise for Babies": "Bruit blanc pour les bébés", "Rain vs White Noise": "Pluie ou bruit blanc", "Brown vs White vs Pink Noise": "Bruits brun, blanc et rose", "Green Noise Explained": "Le bruit vert expliqué", "Choosing a White Noise App": "Choisir une application de bruit blanc", "Best Sounds for Studying": "Meilleurs sons pour étudier", "Color Noise and ADHD": "Couleurs de bruit et TDAH", "Binaural Beats: Evidence & Limits": "Battements binauraux : preuves et limites", "Benefits of Nature Sounds": "Bienfaits des sons de la nature", "Rain for Sleep and Focus": "Pluie pour le sommeil et la concentration", "Guided Breathing Techniques": "Techniques de respiration guidée", "Tinnitus Sound Enrichment Guide": "Guide sonore pour les acouphènes", "White Noise: How Masking Works": "Bruit blanc : le fonctionnement du masquage", "Compare Noise Colors": "Comparer les couleurs du bruit",
    },
  },
  ko: {
    clusters: ["수면 소리와 취침 루틴", "소음 색깔 이해하기", "집중력과 ADHD를 위한 소리", "자연의 소리와 휴식", "이명과 소리 보강"],
    titles: {
      "Best Sounds for Sleep": "수면에 좋은 소리", "White Noise for Sleep": "수면을 위한 백색소음", "Build a Bedtime Routine": "취침 루틴 만들기", "White Noise for Babies": "아기를 위한 백색소음", "Rain vs White Noise": "빗소리와 백색소음 비교", "Brown vs White vs Pink Noise": "갈색·백색·분홍색 소음 비교", "Green Noise Explained": "녹색소음 알아보기", "Choosing a White Noise App": "백색소음 앱 선택법", "Best Sounds for Studying": "공부에 좋은 소리", "Color Noise and ADHD": "소음 색깔과 ADHD", "Binaural Beats: Evidence & Limits": "바이노럴 비트: 근거와 한계", "Benefits of Nature Sounds": "자연의 소리가 주는 이점", "Rain for Sleep and Focus": "수면과 집중을 위한 빗소리", "Guided Breathing Techniques": "호흡 가이드 기법", "Tinnitus Sound Enrichment Guide": "이명을 위한 소리 보강 가이드", "White Noise: How Masking Works": "백색소음의 마스킹 원리", "Compare Noise Colors": "소음 색깔 비교",
    },
  },
  ja: {
    clusters: ["睡眠サウンドと就寝ルーティン", "ノイズの色を理解する", "集中力とADHDのための音", "自然音とリラクゼーション", "耳鳴りとサウンドエンリッチメント"],
    titles: {
      "Best Sounds for Sleep": "睡眠に適した音", "White Noise for Sleep": "睡眠のためのホワイトノイズ", "Build a Bedtime Routine": "就寝ルーティンの作り方", "White Noise for Babies": "赤ちゃんのためのホワイトノイズ", "Rain vs White Noise": "雨音とホワイトノイズの比較", "Brown vs White vs Pink Noise": "ブラウン・ホワイト・ピンクノイズ", "Green Noise Explained": "グリーンノイズとは", "Choosing a White Noise App": "ホワイトノイズアプリの選び方", "Best Sounds for Studying": "勉強に適した音", "Color Noise and ADHD": "ノイズの色とADHD", "Binaural Beats: Evidence & Limits": "バイノーラルビート：根拠と限界", "Benefits of Nature Sounds": "自然音のメリット", "Rain for Sleep and Focus": "睡眠と集中のための雨音", "Guided Breathing Techniques": "ガイド付き呼吸法", "Tinnitus Sound Enrichment Guide": "耳鳴りのための音響ガイド", "White Noise: How Masking Works": "ホワイトノイズのマスキング原理", "Compare Noise Colors": "ノイズの色を比較する",
    },
  },
  "pt-BR": {
    clusters: ["Sons para dormir e rotinas", "As cores do ruído explicadas", "Sons para foco e TDAH", "Sons da natureza e relaxamento", "Zumbido e enriquecimento sonoro"],
    titles: {
      "Best Sounds for Sleep": "Melhores sons para dormir", "White Noise for Sleep": "Ruído branco para dormir", "Build a Bedtime Routine": "Criar uma rotina para dormir", "White Noise for Babies": "Ruído branco para bebês", "Rain vs White Noise": "Chuva ou ruído branco", "Brown vs White vs Pink Noise": "Ruído marrom, branco e rosa", "Green Noise Explained": "Entenda o ruído verde", "Choosing a White Noise App": "Como escolher um app de ruído branco", "Best Sounds for Studying": "Melhores sons para estudar", "Color Noise and ADHD": "Cores de ruído e TDAH", "Binaural Beats: Evidence & Limits": "Batidas binaurais: evidências e limites", "Benefits of Nature Sounds": "Benefícios dos sons da natureza", "Rain for Sleep and Focus": "Chuva para dormir e focar", "Guided Breathing Techniques": "Técnicas de respiração guiada", "Tinnitus Sound Enrichment Guide": "Guia sonoro para zumbido", "White Noise: How Masking Works": "Ruído branco: como funciona o mascaramento", "Compare Noise Colors": "Comparar as cores do ruído",
    },
  },
};

const editorialDates: Record<string, { published: string; modified: string }> = {
  "benefits-of-nature-sounds-for-relaxation": { published: "2026-04-07", modified: "2026-07-10" },
  "best-color-noise-for-adhd": { published: "2026-05-04", modified: "2026-07-16" },
  "best-free-white-noise-app": { published: "2026-05-04", modified: "2026-07-16" },
  "best-sounds-for-sleep": { published: "2026-03-16", modified: "2026-07-16" },
  "best-sounds-for-studying": { published: "2026-03-16", modified: "2026-07-10" },
  "binaural-beats-for-sleep-and-focus": { published: "2026-03-23", modified: "2026-05-12" },
  "brown-noise-vs-white-noise-vs-pink-noise": { published: "2026-04-13", modified: "2026-07-10" },
  "green-noise-for-sleep": { published: "2026-04-19", modified: "2026-07-10" },
  "guided-breathing-techniques": { published: "2026-03-30", modified: "2026-05-12" },
  "how-to-build-a-bedtime-routine": { published: "2026-03-16", modified: "2026-04-21" },
  "rain-sounds-for-better-sleep-and-focus": { published: "2026-04-17", modified: "2026-07-16" },
  "rain-sounds-vs-white-noise": { published: "2026-03-16", modified: "2026-07-16" },
  "sounds-for-tinnitus-relief": { published: "2026-05-09", modified: "2026-07-16" },
  "white-noise-for-babies": { published: "2026-05-18", modified: "2026-07-10" },
  "white-noise-for-sleep": { published: "2026-03-16", modified: "2026-07-16" },
};

const articleTopicClusters = [
  {
    name: "Sleep sounds and routines",
    slugs: ["best-sounds-for-sleep", "white-noise-for-sleep", "how-to-build-a-bedtime-routine", "white-noise-for-babies"],
    links: [
      { href: "/blog/best-sounds-for-sleep", title: "Best Sounds for Sleep" },
      { href: "/blog/white-noise-for-sleep", title: "White Noise for Sleep" },
      { href: "/blog/how-to-build-a-bedtime-routine", title: "Build a Bedtime Routine" },
      { href: "/blog/white-noise-for-babies", title: "White Noise for Babies" },
    ],
  },
  {
    name: "Noise colors explained",
    slugs: ["rain-sounds-vs-white-noise", "brown-noise-vs-white-noise-vs-pink-noise", "green-noise-for-sleep", "best-free-white-noise-app"],
    links: [
      { href: "/blog/rain-sounds-vs-white-noise", title: "Rain vs White Noise" },
      { href: "/blog/brown-noise-vs-white-noise-vs-pink-noise", title: "Brown vs White vs Pink Noise" },
      { href: "/blog/green-noise-for-sleep", title: "Green Noise Explained" },
      { href: "/blog/best-free-white-noise-app", title: "Choosing a White Noise App" },
    ],
  },
  {
    name: "Focus sounds and ADHD",
    slugs: ["best-sounds-for-studying", "best-color-noise-for-adhd", "binaural-beats-for-sleep-and-focus"],
    links: [
      { href: "/blog/best-sounds-for-studying", title: "Best Sounds for Studying" },
      { href: "/blog/best-color-noise-for-adhd", title: "Color Noise and ADHD" },
      { href: "/blog/binaural-beats-for-sleep-and-focus", title: "Binaural Beats: Evidence & Limits" },
    ],
  },
  {
    name: "Nature sound and relaxation",
    slugs: ["benefits-of-nature-sounds-for-relaxation", "rain-sounds-for-better-sleep-and-focus", "guided-breathing-techniques"],
    links: [
      { href: "/blog/benefits-of-nature-sounds-for-relaxation", title: "Benefits of Nature Sounds" },
      { href: "/blog/rain-sounds-for-better-sleep-and-focus", title: "Rain for Sleep and Focus" },
      { href: "/blog/guided-breathing-techniques", title: "Guided Breathing Techniques" },
    ],
  },
  {
    name: "Tinnitus and sound enrichment",
    slugs: ["sounds-for-tinnitus-relief"],
    links: [
      { href: "/blog/sounds-for-tinnitus-relief", title: "Tinnitus Sound Enrichment Guide" },
      { href: "/blog/white-noise-for-sleep", title: "White Noise: How Masking Works" },
      { href: "/blog/brown-noise-vs-white-noise-vs-pink-noise", title: "Compare Noise Colors" },
    ],
  },
] as const;

export async function ArticlePage({
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
  const locale = await getLocale();
  const ui = articleUiTranslations[locale] ?? articleUiTranslations.en;
  const dates = slug ? editorialDates[slug] : undefined;
  const topicCluster = slug
    ? articleTopicClusters.find((cluster) => (cluster.slugs as readonly string[]).includes(slug))
    : undefined;
  const topicCopy = topicTranslations[locale] ?? topicTranslations.en;
  const topicClusterIndex = topicCluster ? articleTopicClusters.indexOf(topicCluster) : -1;
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric" }).format(
      new Date(`${date}T12:00:00Z`)
    );

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
    if (href.startsWith("#")) return href;
    if (/^https?:\/\//.test(href)) {
      const destination = new URL(href);
      const isStore = destination.hostname === "play.google.com" || destination.hostname === "apps.apple.com";
      if (!isStore) return href;
      const prefix = locale === "en" ? "" : `/${locale}`;
      const content = slug ?? "article";
      return `${prefix}/download?utm_source=website&utm_medium=article&utm_campaign=organic_conversion&utm_content=${encodeURIComponent(content)}`;
    }

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
    ...(dates ? { datePublished: dates.published, dateModified: dates.modified } : {}),
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

        {dates && (
          <p className="mt-4 text-sm text-white/60">
            {ui.published}: <time dateTime={dates.published}>{formatDate(dates.published)}</time>
            {dates.modified !== dates.published && (
              <> · {ui.updated}: <time dateTime={dates.modified}>{formatDate(dates.modified)}</time></>
            )}
            {" · "}Calma Editorial Team
          </p>
        )}

        <Link
          href={getLocalizedHref(topLinkHref)}
          data-cta-location="article_top"
          className="mt-6 inline-flex items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/15"
        >
          {topLinkLabel} <span aria-hidden="true" className="ml-2">→</span>
        </Link>

        {topicCluster && (
          <nav className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5" aria-label="Related topic path">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{ui.topicPath}</p>
            <p className="mt-2 font-semibold text-white">{topicCopy.clusters[topicClusterIndex] ?? topicCluster.name}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {topicCluster.links.map((link) => {
                const isCurrent = link.href === `/blog/${slug}`;
                return isCurrent ? (
                  <span key={link.href} aria-current="page" className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-950">
                    {topicCopy.titles[link.title] ?? link.title}
                  </span>
                ) : (
                  <Link key={link.href} href={link.href} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/75 transition hover:bg-white/10 hover:text-white">
                    {topicCopy.titles[link.title] ?? link.title}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}

        {tableOfContents.length > 0 && (
          <nav className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6" aria-label="Table of contents">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">{ui.contents}</p>
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
              <Link
                href={getLocalizedHref(ctaHref)}
                data-cta-location="article_end"
                className="rounded-2xl bg-white px-6 py-3 text-center font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                {ctaLabel}
              </Link>
              <Link
                href={getLocalizedHref(secondaryCtaHref)}
                data-cta-location="article_end_secondary"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
            <DesktopDownloadQr />
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">{ui.related}</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <Link
                  key={article.href}
                  href={getLocalizedHref(article.href)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <h3 className="text-lg font-medium">{article.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
      <MoreApps locale={locale} variant="compact" />
    </main>
  );
}
