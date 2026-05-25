import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "ホワイトノイズ、ブラウンノイズ、ピンクノイズアプリ | Calma",
  description:
    "ホワイトノイズ、ブラウンノイズ、ピンクノイズの違いを発見してください。Calmaは、睡眠、集中力、ADHDのためにすべてのノイズカラーをミックスできるプレミアム睡眠音アプリです。",
  keywords: [
    "ホワイトノイズアプリ",
    "ブラウンノイズアプリ",
    "ピンクノイズアプリ",
    "グリーンノイズアプリ",
    "ノイズカラーアプリ",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/white-noise-brown-noise-pink-noise",
  },
  openGraph: {
    title: "ホワイトノイズ、ブラウンノイズ、ピンクノイズアプリ | Calma",
    description:
      "ホワイトノイズ、ブラウンノイズ、ピンクノイズの違いを発見してください。Calmaは、睡眠、集中力、ADHDのためにすべてのノイズカラーをミックスできるプレミアム睡眠音アプリです。",
    url: "https://www.calmasounds.com/ja/white-noise-brown-noise-pink-noise",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ホワイトノイズ、ブラウンノイズ、ピンクノイズアプリ | Calma",
    description:
      "Calmaアプリで睡眠、集中力、ADHDのためにすべてのノイズカラーをミックスします。",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calmaにはホワイトノイズ、ブラウンノイズ、ピンクノイズが含まれていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、Calmaには高品質のホワイトノイズ、ブラウンノイズ、ピンクノイズ、グリーンノイズが含まれています。これらを雨や海の波などの他の自然音とミックスできます。",
      },
    },
    {
      "@type": "Question",
      name: "ホワイトノイズとブラウンノイズの違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ホワイトノイズは、テレビの砂嵐のように、すべての可聴周波数を均等にカバーします。ブラウンノイズは低周波数を強調し、遠くの滝のように深く聞こえます。ブラウンノイズは、深い集中力やADHDによく好まれます。",
      },
    },
    {
      "@type": "Question",
      name: "睡眠に最適なノイズカラーは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ピンクノイズはバランスが取れて自然であり、一定の雨や風のような音を模倣するため、一般的に睡眠に最適と考えられています。ホワイトノイズは、突然の大きな音を隠すのに最適です。",
      },
    }
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ホーム",
      "item": "https://www.calmasounds.com/ja"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "ノイズカラーアプリ",
      "item": "https://www.calmasounds.com/ja/white-noise-brown-noise-pink-noise"
    }
  ]
};

export default function NoiseColorsAppPageJa() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AiDefinition />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          音の色
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          ホワイトノイズ、ブラウンノイズ、ピンクノイズ
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calmaは、すべての重要なノイズカラーの高品質な録音を含む、包括的なサウンドミキサーアプリです。
          睡眠、リラクゼーション、またはADHDの集中ルーチンに最適な周波数を見つけてください。
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play ストアでCalmaをダウンロード"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Google Playでダウンロード
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple App StoreでCalmaをダウンロード"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            App Storeでダウンロード
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              ホワイトノイズ
            </div>
            <h3 className="text-xl font-semibold">マスキングに最適</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              すべての可聴周波数を均等にカバーします。突然の大きな音を遮断し、乳児の睡眠をサポートするのに最適です。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              ピンクノイズ
            </div>
            <h3 className="text-xl font-semibold">バランスと自然</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              ホワイトノイズよりも深く、一定の雨や風のような音を模倣します。全体的な睡眠の質を向上させるのに最適です。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              ブラウンノイズ
            </div>
            <h3 className="text-xl font-semibold">集中力とADHDのサポート</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              遠くの滝のように、低周波数が多用されています。深い集中力と、忙しい心を「静める」ためにますます人気が高まっています。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              グリーンノイズ
            </div>
            <h3 className="text-xl font-semibold">自然の調和</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              森の葉がカサカサ音を立てるのと似た、中音域の周波数に焦点を当てています。落ち着いた自然な雰囲気に最適です。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            よくある質問
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calmaにはホワイトノイズ、ブラウンノイズ、ピンクノイズが含まれていますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい、Calmaには高品質のホワイトノイズ、ブラウンノイズ、ピンクノイズ、グリーンノイズが含まれています。サウンドミキサーで雨や海の波などの他の自然音とミックスできます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ホワイトノイズとブラウンノイズの違いは何ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              ホワイトノイズは、テレビの砂嵐と同様に、すべての可聴周波数を均等にカバーします。ブラウンノイズは低周波数を強調し、遠くの滝のように深く柔らかく聞こえます。ブラウンノイズは、深い集中力やADHDによく好まれます。
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              睡眠に最適なノイズカラーは何ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              ピンクノイズはバランスが取れて自然であり、一定の雨や風のような音を模倣するため、一般的に睡眠に最適と考えられています。ただし、突然の大きな音を特に隠す必要がある場合は、ホワイトノイズが最適です。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
