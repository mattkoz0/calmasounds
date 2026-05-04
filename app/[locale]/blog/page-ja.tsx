import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calmaブログ | 睡眠、ホワイトノイズ、集中のガイド",
  description:
    "睡眠音、ホワイトノイズ、就寝時のルーティン、集中しやすいサウンドスケープに関するCalmaのガイドを探索してください。",
  alternates: {
    canonical: "https://www.calmasounds.com/ja/blog",
  },
  openGraph: {
    title: "Calmaブログ | 睡眠、ホワイトノイズ、集中のガイド",
    description:
      "睡眠音、ホワイトノイズ、就寝時のルーティン、集中しやすいサウンドスケープに関するCalmaのガイドを探索してください。",
    url: "https://www.calmasounds.com/ja/blog",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calmaブログ | 睡眠、ホワイトノイズ、集中のガイド",
    description:
      "睡眠音、ホワイトノイズ、就寝時のルーティン、集中しやすいサウンドスケープに関するCalmaのガイドを探索してください。",
  },
};

const articles = [
  {
    href: "/ja/blog/benefits-of-nature-sounds-for-relaxation",
    title: "深いリラクゼーションのための自然の音",
    description:
      "雨や海の波のような自然のサウンドスケープが、就寝時のルーティンを強化する自然なホワイトノイズとしてどのように機能するかを探ります。",
  },
  {
    href: "/ja/blog/best-sounds-for-sleep",
    title: "睡眠に最適な音",
    description:
      "雨、ホワイトノイズ、より柔らかな睡眠サウンドスケープへの実践的なガイド。",
  },
  {
    href: "/ja/blog/white-noise-for-sleep",
    title: "睡眠のためのホワイトノイズ",
    description:
      "ホワイトノイズがいつ役立つか、そしてより穏やかな就寝環境を構築する方法。",
  },
  {
    href: "/ja/blog/rain-sounds-vs-white-noise",
    title: "雨の音 vs ホワイトノイズ",
    description:
      "感情的な快適さ、マスキング、就寝時の雰囲気を比較します。",
  },
  {
    href: "/ja/blog/how-to-build-a-bedtime-routine",
    title: "就寝時のルーティンの作り方",
    description:
      "睡眠をサポートするより穏やかな夜のリズムを作成する簡単な方法。",
  },
  {
    href: "/ja/blog/best-sounds-for-studying",
    title: "勉強に最適な音",
    description:
      "集中力とより深いフォーカスを助ける可能性のある音の種類を見つけます。",
  },
  {
    href: "/ja/blog/binaural-beats-for-sleep-and-focus",
    title: "睡眠と集中のためのバイノーラルビート",
    description:
      "バイノーラルビートが落ち着きと集中をどのようにサポートするかの簡単な紹介。",
  },
  {
    href: "/ja/blog/guided-breathing-techniques",
    title: "ガイド付き呼吸法",
    description:
      "リラクゼーション、バランス、睡眠、集中のための落ち着く呼吸法を探ります。",
  },
  {
    href: "/ja/blog/brown-noise-vs-white-noise-vs-pink-noise",
    title: "ブラウンノイズ vs ホワイトノイズ vs ピンクノイズ",
    description:
      "ノイズの色による違いを探り、集中や睡眠に最適なものを見つけます。",
  },
  {
    href: "/ja/blog/rain-sounds-for-better-sleep-and-focus",
    title: "雨の音がより良い睡眠と集中のための究極の秘密である理由",
    description: "絶え間ない雨の音が、心を落ち着かせ、不眠症を克服し、集中力を維持するのに最適な理由を発見してください。",
  },
  {
    href: "/ja/blog/green-noise-for-sleep",
    title: "睡眠のためのグリーンノイズ：自然な休息の方法",
    description: "グリーンノイズとは何か、そしてその自然のような周波数が睡眠に最適なサウンドスケープである理由を発見してください。",
  },
  {
    href: "/blog/best-free-white-noise-app",
    title: "睡眠のための最高の無料ホワイトノイズアプリ",
    description: "無料の睡眠音をお探しですか？Calmaが心地よい睡眠音のための完璧な選択である理由をご覧ください。",
  },
  {
    href: "/blog/best-color-noise-for-adhd",
    title: "ADHDに最適なノイズの色は？ブラウンノイズ vs ホワイトノイズ",
    description: "ADHD、集中力、過剰刺激に対してブラウンノイズがしばしば好まれる理由をご覧ください。",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Calmaブログ",
  url: "https://www.calmasounds.com/ja/blog",
  description:
    "睡眠音、ホワイトノイズ、集中音、落ち着くルーティンに関するガイド。",
  hasPart: [
    {
      "@type": "Article",
      headline: "深いリラクゼーションのための自然の音",
      url: "https://www.calmasounds.com/ja/blog/benefits-of-nature-sounds-for-relaxation",
    },
    {
      "@type": "Article",
      headline: "睡眠に最適な音",
      url: "https://www.calmasounds.com/ja/blog/best-sounds-for-sleep",
    },
    {
      "@type": "Article",
      headline: "睡眠のためのホワイトノイズ",
      url: "https://www.calmasounds.com/ja/blog/white-noise-for-sleep",
    },
    {
      "@type": "Article",
      headline: "雨の音 vs ホワイトノイズ",
      url: "https://www.calmasounds.com/ja/blog/rain-sounds-vs-white-noise",
    },
    {
      "@type": "Article",
      headline: "就寝時のルーティンの作り方",
      url: "https://www.calmasounds.com/ja/blog/how-to-build-a-bedtime-routine",
    },
    {
      "@type": "Article",
      headline: "勉強に最適な音",
      url: "https://www.calmasounds.com/ja/blog/best-sounds-for-studying",
    },
    {
      "@type": "Article",
      headline: "睡眠と集中のためのバイノーラルビート",
      url: "https://www.calmasounds.com/ja/blog/binaural-beats-for-sleep-and-focus",
    },
    {
      "@type": "Article",
      headline: "ガイド付き呼吸法",
      url: "https://www.calmasounds.com/ja/blog/guided-breathing-techniques",
    },
    {
      "@type": "Article",
      headline: "ブラウンノイズ vs ホワイトノイズ vs ピンクノイズ",
      url: "https://www.calmasounds.com/ja/blog/brown-noise-vs-white-noise-vs-pink-noise",
    },
    {
      "@type": "Article",
      headline: "雨の音がより良い睡眠と集中のための究極の秘密である理由",
      url: "https://www.calmasounds.com/ja/blog/rain-sounds-for-better-sleep-and-focus",
    },
    {
      "@type": "Article",
      headline: "睡眠のためのグリーンノイズ：自然な休息の方法",
      url: "https://www.calmasounds.com/ja/blog/green-noise-for-sleep",
    },
    {
      "@type": "Article",
      headline: "睡眠のための最高の無料ホワイトノイズアプリ",
      url: "https://www.calmasounds.com/ja/blog/best-free-white-noise-app",
    },
    {
      "@type": "Article",
      headline: "ADHDに最適なノイズの色は？ブラウンノイズ vs ホワイトノイズ",
      url: "https://www.calmasounds.com/ja/blog/best-color-noise-for-adhd",
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
      name: "ホーム",
      item: "https://www.calmasounds.com/ja"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ブログ",
      item: "https://www.calmasounds.com/ja/blog"
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
          Calmaブログ
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          睡眠、ホワイトノイズ、集中のガイド
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          睡眠音、就寝時のルーティン、ホワイトノイズ、リラクゼーション、より深い集中に関する実践的な記事を探求してください。
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
          <h2 className="text-2xl font-semibold">Calmaを探索する</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/ja/sleep-sounds-app"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950"
            >
              睡眠音アプリ
            </a>
            <a
              href="/ja/white-noise-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              ホワイトノイズアプリ
            </a>
            <a
              href="/ja/focus-sounds-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              集中音アプリ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
