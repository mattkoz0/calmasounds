import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calma Blog | Ratgeber zu Schlaf, weißem Rauschen und Fokus",
  description:
    "Erfahre mehr über Schlafklänge, weißes Rauschen, Abendroutinen und fokusrelevante Klanglandschaften im Calma Blog.",
  alternates: {
    canonical: "https://www.calmasounds.com/de/blog",
  },
  openGraph: {
    title: "Calma Blog | Ratgeber zu Schlaf, weißem Rauschen und Fokus",
    description:
      "Erfahre mehr über Schlafklänge, weißes Rauschen, Abendroutinen und fokusrelevante Klanglandschaften im Calma Blog.",
    url: "https://www.calmasounds.com/de/blog",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma Blog | Ratgeber zu Schlaf, weißem Rauschen und Fokus",
    description:
      "Erfahre mehr über Schlafklänge, weißes Rauschen, Abendroutinen und fokusrelevante Klanglandschaften im Calma Blog.",
  },
};

const articles = [
  {
    href: "/blog/benefits-of-nature-sounds-for-relaxation",
    title: "Naturklänge für tiefe Entspannung",
    description:
      "Erfahre, wie natürliche Soundscapes wie Regen und Meereswellen als natürliches weißes Rauschen deine Abendroutine verbessern können.",
  },
  {
    href: "/blog/best-sounds-for-sleep",
    title: "Beste Sounds zum Einschlafen",
    description:
      "Ein praktischer Guide zu Regen, weißem Rauschen und sanften Schlaf-Klanglandschaften.",
  },
  {
    href: "/blog/white-noise-for-sleep",
    title: "Weißes Rauschen zum Schlafen",
    description:
      "Wann weißes Rauschen helfen kann und wie du eine ruhigere Umgebung für die Nacht schaffst.",
  },
  {
    href: "/blog/rain-sounds-vs-white-noise",
    title: "Regenklänge vs. Weißes Rauschen",
    description:
      "Vergleiche emotionalen Komfort, Maskierung und die Atmosphäre vor dem Schlafengehen.",
  },
  {
    href: "/blog/how-to-build-a-bedtime-routine",
    title: "Wie man eine Abendroutine aufbaut",
    description:
      "Einfache Wege zu einem ruhigeren Abendrhythmus, der den Schlaf unterstützt.",
  },
  {
    href: "/blog/best-sounds-for-studying",
    title: "Beste Sounds zum Lernen",
    description:
      "Finde heraus, welche Klänge die Konzentration und den Deep Focus fördern können.",
  },
  {
    href: "/blog/binaural-beats-for-sleep-and-focus",
    title: "Binaurale Beats für Schlaf und Fokus",
    description:
      "Eine einfache Einführung, wie binaurale Beats Ruhe und Fokus unterstützen können.",
  },
  {
    href: "/blog/guided-breathing-techniques",
    title: "Geführte Atemtechniken",
    description:
      "Entdecke beruhigende Atemmethoden für Entspannung, Balance, Schlaf und Fokus.",
  },
  {
    href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
    title: "Braunes vs. Weißes vs. Pinkes Rauschen",
    description:
      "Erfahre die Unterschiede zwischen den Rauschfarben und finde heraus, welche am besten für dich passt.",
  },
  {
    href: "/blog/rain-sounds-for-better-sleep-and-focus",
    title: "Warum Regenklänge das Geheimnis für besseren Schlaf und Fokus sind",
    description: "Entdecke, warum stetiges Regenrauschen ideal zum Beruhigen deines Geistes oder bei Schlaflosigkeit ist.",
  },
  {
    href: "/blog/green-noise-for-sleep",
    title: "Grünes Rauschen zum Schlafen: Der natürliche Weg zur Ruhe",
    description: "Was ist grünes Rauschen und warum sind naturähnliche Frequenzen die perfekte Klanglandschaft für den Schlaf?",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Calma Blog",
  url: "https://www.calmasounds.com/de/blog",
  description:
    "Ratgeber zu Schlafklängen, weißem Rauschen, Fokus-Sounds und beruhigenden Routinen.",
  hasPart: [
    {
      "@type": "Article",
      headline: "Naturklänge für tiefe Entspannung",
      url: "https://www.calmasounds.com/de/blog/benefits-of-nature-sounds-for-relaxation",
    },
    {
      "@type": "Article",
      headline: "Beste Sounds zum Einschlafen",
      url: "https://www.calmasounds.com/de/blog/best-sounds-for-sleep",
    },
    {
      "@type": "Article",
      headline: "Weißes Rauschen zum Schlafen",
      url: "https://www.calmasounds.com/de/blog/white-noise-for-sleep",
    },
    {
      "@type": "Article",
      headline: "Regenklänge vs. Weißes Rauschen",
      url: "https://www.calmasounds.com/de/blog/rain-sounds-vs-white-noise",
    },
    {
      "@type": "Article",
      headline: "Wie man eine Abendroutine aufbaut",
      url: "https://www.calmasounds.com/de/blog/how-to-build-a-bedtime-routine",
    },
    {
      "@type": "Article",
      headline: "Beste Sounds zum Lernen",
      url: "https://www.calmasounds.com/de/blog/best-sounds-for-studying",
    },
    {
      "@type": "Article",
      headline: "Binaurale Beats für Schlaf und Fokus",
      url: "https://www.calmasounds.com/de/blog/binaural-beats-for-sleep-and-focus",
    },
    {
      "@type": "Article",
      headline: "Geführte Atemtechniken",
      url: "https://www.calmasounds.com/de/blog/guided-breathing-techniques",
    },
    {
      "@type": "Article",
      headline: "Braunes vs. Weißes vs. Pinkes Rauschen",
      url: "https://www.calmasounds.com/de/blog/brown-noise-vs-white-noise-vs-pink-noise",
    },
    {
      "@type": "Article",
      headline: "Warum Regenklänge das Geheimnis für besseren Schlaf und Fokus sind",
      url: "https://www.calmasounds.com/de/blog/rain-sounds-for-better-sleep-and-focus",
    },
    {
      "@type": "Article",
      headline: "Grünes Rauschen zum Schlafen: Der natürliche Weg zur Ruhe",
      url: "https://www.calmasounds.com/de/blog/green-noise-for-sleep",
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.calmasounds.com/de"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.calmasounds.com/de/blog"
    }
  ]
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />



      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Calma Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Ratgeber zu Schlaf, weißem Rauschen und Fokus
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Entdecke praktische Artikel über Schlafklänge, Abendroutinen,
          weißes Rauschen, Entspannung und Deep Focus.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-4 leading-7 text-white/70">
                {article.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Calma entdecken</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/sleep-sounds-app"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950"
            >
              Schlaf-App
            </a>
            <a
              href="/white-noise-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              Weißes Rauschen App
            </a>
            <a
              href="/focus-sounds-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              Fokus-App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
