import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs BetterSleep | 最高の睡眠音の代替アプリ",
  description:
    "CalmaとBetterSleepを比較していますか？BetterSleepには睡眠追跡とストーリーがあります。サブスクリプションなしのシンプルなオフライン睡眠音ミキサーが必要な場合、Calmaが最適な代替手段です。",
  keywords: [
    "calma vs bettersleep",
    "bettersleepアプリの代わり",
    "サブスクリプションなしのbettersleep",
    "bettersleepのような睡眠音ミキサー",
    "relax melodiesの代わり",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/calma-vs-bettersleep",
  },
  openGraph: {
    title: "Calma vs BetterSleep | 最高の睡眠音の代替アプリ",
    description:
      "CalmaとBetterSleepを比較していますか？BetterSleepには睡眠追跡とストーリーがあります。サブスクリプションなしのシンプルなオフライン睡眠音ミキサーが必要な場合、Calmaが最適な代替手段です。",
    url: "https://www.calmasounds.com/ja/calma-vs-bettersleep",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs BetterSleep | 最高の睡眠音の代替アプリ",
    description:
      "CalmaとBetterSleepを比較していますか？サブスクリプションなしのオフライン睡眠音の最適な代替手段を見つけてください。",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "CalmaはBetterSleepと同じですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、CalmaとBetterSleepは異なるアプリです。BetterSleepは、睡眠追跡、ストーリーの広範なライブラリ、および年間サブスクリプションモデルに焦点を当てています。Calmaは、1回の生涯ロック解除を備えたオフラインの睡眠音ミキサーであることに純粋に焦点を当てています。",
      },
    },
    {
      "@type": "Question",
      name: "サブスクリプションなしの最適なBetterSleepアプリの代替手段は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "サウンドミキサーのためだけにBetterSleep（以前のRelax Melodies）を使用している場合、Calmaは最良の選択肢の1つです。Calmaは1回の生涯ロック解除を提供します。つまり、高額な月額または年額のサブスクリプションなしでプレミアムな睡眠音ミキサーを利用できます。",
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
      "name": "Calma vs BetterSleep",
      "item": "https://www.calmasounds.com/ja/calma-vs-bettersleep"
    }
  ]
};

export default function CalmaVsBetterSleepPageJa() {
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
        title="CalmaとBetterSleepの違いは何ですか？"
        description="BetterSleepは、サブスクリプションモデルに基づいて構築された、睡眠追跡、睡眠プロファイル、ストーリーを提供する機能豊富なアプリです。Calmaは、1回の生涯ロック解除で、美しくデザインされたオフラインオーディオミキサー、ホワイトノイズ、雨の音を提供する、よりシンプルで焦点を絞った代替手段です。"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          アプリの比較
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs BetterSleep：どちらがあなたに適していますか？
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          どちらのアプリも、よりよく眠れるように音を混ぜることができますが、異なるニーズを満たします。最良の選択をするのに役立つ事実に基づいた比較をご紹介します。
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
            <h2 className="text-2xl font-semibold text-white">こんな方はBetterSleepを選んでください...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                睡眠段階といびきを積極的に追跡したい。
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                常に更新される膨大な就寝時のストーリーのライブラリがあるのが好き。
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                プレミアム機能へのアクセスを維持するために年間サブスクリプションを支払うことに抵抗がない。
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">こんな方はCalmaを選んでください...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                主に、不要な機能なしで自分の睡眠音（雨、風、ブラウンノイズなど）をミックスしたい。
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                サブスクリプションが嫌いで、生涯アクセスのための1回の支払いを好む。
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                100％オフラインで機能し、アカウントを必要としないプライバシーファーストのアプリが必要。
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                気を散らすことのないミニマルなインターフェースを好む。
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
              CalmaはBetterSleepアプリと同じですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              いいえ、CalmaとBetterSleep（旧Relax Melodies）は、別の会社によって作られた完全に異なるアプリです。BetterSleepは、睡眠トラッカーおよびコンテンツプラットフォームです。Calmaは、睡眠を追跡することなく、ホワイトノイズと自然音をオフラインで制御できるように設計された専用のサウンドミキサーです。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              サブスクリプションなしの最適なBetterSleepの代替手段は何ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              サウンドミキサーのためだけにBetterSleepを使用し、睡眠追跡やストーリーを使用していないことに気付いた場合、Calmaは完璧な代替手段です。切り替えることで、定期的な料金の支払いをやめ、プレミアムなオフラインサウンドスケープミキサーの生涯ロック解除を取得できます。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
