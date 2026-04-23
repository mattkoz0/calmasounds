import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Calma | Przewodniki po snu, białym szumie i koncentracji",
  description:
    "Eksploruj przewodniki Calmy o dźwiękach do snu, białym szumie, wieczornych rutynach i pejzażach dźwiękowych sprzyjających skupieniu.",
  alternates: {
    canonical: "https://www.calmasounds.com/pl/blog",
  },
  openGraph: {
    title: "Blog Calma | Przewodniki po snu, białym szumie i koncentracji",
    description:
      "Eksploruj przewodniki Calmy o dźwiękach do snu, białym szumie, wieczornych rutynach i pejzażach dźwiękowych sprzyjających skupieniu.",
    url: "https://www.calmasounds.com/pl/blog",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Calma | Przewodniki po snu, białym szumie i koncentracji",
    description:
      "Eksploruj przewodniki Calmy o dźwiękach do snu, białym szumie, wieczornych rutynach i pejzażach dźwiękowych sprzyjających skupieniu.",
  },
};

const articles = [
  {
    href: "/blog/benefits-of-nature-sounds-for-relaxation",
    title: "Dźwięki natury dla głębokiego relaksu",
    description:
      "Dowiedz się, jak naturalne pejzaże dźwiękowe, takie jak deszcz i fale oceanu, mogą działać jako naturalny biały szum wzbogacający Twoją wieczorną rutynę.",
  },
  {
    href: "/blog/best-sounds-for-sleep",
    title: "Najlepsze dźwięki do snu",
    description:
      "Praktyczny przewodnik po deszczu, białym szumie i łagodnych pejzażach dźwiękowych ułatwiających zasypianie.",
  },
  {
    href: "/blog/white-noise-for-sleep",
    title: "Biały szum do snu",
    description:
      "Kiedy biały szum może pomóc i jak zbudować spokojniejsze otoczenie wieczorem.",
  },
  {
    href: "/blog/rain-sounds-vs-white-noise",
    title: "Dźwięki deszczu vs Biały Szum",
    description:
      "Porównanie komfortu emocjonalnego, maskowania dźwięków i atmosfery przed snem.",
  },
  {
    href: "/blog/how-to-build-a-bedtime-routine",
    title: "Jak zbudować wieczorną rutynę",
    description:
      "Proste sposoby na stworzenie spokojniejszego rytmu wieczoru, który wspiera zdrowy sen.",
  },
  {
    href: "/blog/best-sounds-for-studying",
    title: "Najlepsze dźwięki do nauki",
    description:
      "Znajdź rodzaje dźwięków, które mogą pomóc w koncentracji i głębszym skupieniu.",
  },
  {
    href: "/blog/binaural-beats-for-sleep-and-focus",
    title: "Dudnienia binauralne dla snu i koncentracji",
    description:
      "Proste wprowadzenie do tego, jak dudnienia binauralne mogą wspierać spokój i skupienie.",
  },
  {
    href: "/blog/guided-breathing-techniques",
    title: "Techniki prowadzonego oddychania",
    description:
      "Poznaj kojące metody oddychania dla relaksu, balansu, snu i koncentracji.",
  },
  {
    href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
    title: "Szum brązowy vs biały vs różowy",
    description:
      "Poznaj różnice między kolorami szumu i dowiedz się, który jest najlepszy dla Twojego skupienia lub snu.",
  },
  {
    href: "/blog/rain-sounds-for-better-sleep-and-focus",
    title: "Dlaczego dźwięki deszczu to sekret lepszego snu i koncentracji",
    description: "Odkryj, dlaczego jednostajne dźwięki deszczu są idealne do uspokajania umysłu, walki z bezsennością i utrzymania skupienia.",
  },
  {
    href: "/blog/green-noise-for-sleep",
    title: "Zielony szum do snu: naturalny sposób na odpoczynek",
    description: "Dowiedz się, czym jest zielony szum i dlaczego jego naturalne częstotliwości mogą być idealnym tłem do spania.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog Calma",
  url: "https://www.calmasounds.com/pl/blog",
  description:
    "Przewodniki o dźwiękach do snu, białym szumie, dźwiękach do koncentracji i wyciszających rutynach.",
  hasPart: articles.map(article => ({
    "@type": "Article",
    headline: article.title,
    url: `https://www.calmasounds.com/pl${article.href}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.calmasounds.com/pl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.calmasounds.com/pl/blog"
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
          Blog Calma
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Przewodniki po snu, białym szumie i koncentracji
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Eksploruj praktyczne artykuły o dźwiękach do snu, wieczornych rutynach,
          białym szumie, relaksacji i głębokim skupieniu.
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
          <h2 className="text-2xl font-semibold">Odkryj Calmę</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/sleep-sounds-app"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950"
            >
              Aplikacja do snu
            </a>
            <a
              href="/white-noise-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              Aplikacja biały szum
            </a>
            <a
              href="/focus-sounds-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              Aplikacja koncentracja
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
