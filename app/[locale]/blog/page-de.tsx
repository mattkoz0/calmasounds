import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";

type BlogHref = ComponentProps<typeof Link>["href"];

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
  {
    href: "/blog/best-free-white-noise-app",
    title: "Die beste kostenlose White-Noise-App für den Schlaf",
    description: "Suchen Sie nach kostenlosen Schlafgeräuschen? Entdecken Sie, warum Calma die perfekte Wahl für beruhigende Klänge ist.",
  },
  {
    href: "/blog/best-color-noise-for-adhd",
    title: "Rauschfarben und ADHS: Was die Forschung zeigt",
    description: "Vergleiche weißes, rosa und braunes Rauschen samt Grenzen der aktuellen Evidenz.",
  },
  {
    href: "/blog/sounds-for-tinnitus-relief",
    title: "Klänge zur Tinnitus-Maskierung",
    description: "Vergleiche sanfte Hintergrundklänge, sicheres Hören und Hinweise für fachlichen Rat.",
  },
  {
    href: "/blog/white-noise-for-babies",
    title: "Weißes Rauschen für Babys: vorsichtige Anwendung",
    description: "Hinweise zu Lautstärke, Abstand und Dauer für eine sicherere Schlafroutine.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Calma Blog",
  url: "https://www.calmasounds.com/de/blog",
  description:
    "Ratgeber zu Schlafklängen, weißem Rauschen, Fokus-Sounds und beruhigenden Routinen.",
  hasPart: articles.map(article => {
    const mapping = pathnamesMapping[article.href];
    const localizedPath = (mapping && mapping["de"]) || article.href;
    return {
      "@type": "Article",
      headline: article.title,
      url: `https://www.calmasounds.com/de${localizedPath}`,
    };
  }),
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
            <Link
              key={article.href}
              href={article.href as BlogHref}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-4 leading-7 text-white/70">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Calma entdecken</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/sleep-sounds-app"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 hover:scale-[1.02] transition"
            >
              Schlaf-App
            </Link>
            <Link
              href="/white-noise-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Weißes Rauschen App
            </Link>
            <Link
              href="/focus-sounds-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Fokus-App
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
