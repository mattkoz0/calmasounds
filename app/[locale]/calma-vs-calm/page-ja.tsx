import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs Calm | 最高の睡眠音の代替アプリ",
  description:
    "CalmaとCalmを比較していますか？Calmはガイド付き瞑想やストーリーに最適です。サブスクリプションなしのシンプルなオフライン睡眠音ミキサーが必要な場合、Calmaが最適な代替手段です。",
  keywords: [
    "calma vs calm",
    "calmアプリの代わり",
    "サブスクリプションなしのcalm",
    "calmのような睡眠音ミキサー",
    "calmアプリより良い",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/calma-vs-calm",
  },
  openGraph: {
    title: "Calma vs Calm | 最高の睡眠音の代替アプリ",
    description:
      "CalmaとCalmを比較していますか？Calmはガイド付き瞑想やストーリーに最適です。サブスクリプションなしのシンプルなオフライン睡眠音ミキサーが必要な場合、Calmaが最適な代替手段です。",
    url: "https://www.calmasounds.com/ja/calma-vs-calm",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs Calm | 最高の睡眠音の代替アプリ",
    description:
      "CalmaとCalmを比較していますか？サブスクリプションなしのオフライン睡眠音の最適な代替手段を見つけてください。",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "CalmaはCalmアプリと同じですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、CalmaとCalmは異なるアプリです。Calmは、ガイド付き瞑想、有名人の睡眠ストーリー、年間サブスクリプションのコースに重点を置いています。Calmaは、1回の生涯ロック解除を備えたオフラインの睡眠音ミキサーであることに純粋に焦点を当てています。",
      },
    },
    {
      "@type": "Question",
      name: "サブスクリプションなしの最適なCalmアプリの代替品は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calmを睡眠音やホワイトノイズのためだけに使用している場合、Calmaは最良の選択肢の1つです。Calmaは1回の生涯ロック解除を提供します。つまり、高額な月額または年額のサブスクリプションなしでプレミアムな睡眠音を利用できます。",
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
      "name": "Calma vs Calm",
      "item": "https://www.calmasounds.com/ja/calma-vs-calm"
    }
  ]
};

export default function CalmaVsCalmPageJa() {
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

      <AiDefinition 
        title="CalmaとCalmの違いは何ですか？"
        description="Calmは、定期的なサブスクリプションモデルを備えたガイド付き瞑想コースと有名人の睡眠ストーリーに焦点を当てた業界をリードするアプリです。Calmaは、サブスクリプションの代わりに簡単な1回の生涯ロック解除でオフラインオーディオミキサー、ホワイトノイズ、雨の音を提供する、高度に焦点を絞った睡眠音の代替手段です。"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          アプリの比較
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs Calm：どちらがあなたに適していますか？
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          どちらのアプリも、リラックスしてよりよく眠れるようにすることを目的としていますが、アプローチは大きく異なります。夜のルーティンに最適なものを選ぶのに役立つ、正直で事実に基づいた比較をご紹介します。
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play ストアでCalmaをダウンロード"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Calmaを無料で試す
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">こんな方はCalmを選んでください...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                充実したガイド付き瞑想コースを希望する。
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                有名人の声優が物語を読み上げるのを聞きながら眠りにつくのが好き。
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                常に更新されるコンテンツのライブラリに年間サブスクリプションを支払うことを気にしない。
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">こんな方はCalmaを選んでください...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                主に高品質の睡眠音（雨やブラウンノイズなど）をミックスしたい。
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                サブスクリプションが嫌いで、1回の買い切りを好む。
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                100％オフラインで機能し、プライバシーを尊重するアプリが必要。
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                カスタムサウンドスケープだけに焦点を当てたシンプルなインターフェースが必要。
              </li>
            </ul>
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
              CalmaはCalmアプリと同じですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              いいえ、CalmaとCalmは別の会社によって作られた完全に異なるアプリです。Calmは、ガイド付き瞑想と睡眠ストーリーを備えた幅広いメンタルウェルネスプラットフォームです。Calmaは、ホワイトノイズと自然音をオフラインで制御できるように設計された専用のサウンドミキサーです。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              サブスクリプションなしの最適なCalmの代替手段は何ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              基本的な睡眠音とホワイトノイズのためだけにCalmを使用している場合、Calmaは強力な代替手段です。切り替えることで、定期的な料金の支払いをやめ、代わりにプレミアムオフラインミキサーの生涯ロック解除を取得できます。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
