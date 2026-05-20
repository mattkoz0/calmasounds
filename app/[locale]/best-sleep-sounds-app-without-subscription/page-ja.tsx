import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "サブスクリプションなしの最高の睡眠音アプリ | Calma",
  description:
    "高額なサブスクリプションのない睡眠音アプリをお探しですか？Calmaは、パーソナライズされた睡眠音とホワイトノイズを1回払いの生涯アクセスで提供します。",
  keywords: [
    "サブスクリプションなしの睡眠音アプリ",
    "サブスクなしの睡眠アプリ",
    "1回払いの睡眠アプリ",
    "無料の睡眠音アプリ",
    "生涯アクセスの睡眠アプリ",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/best-sleep-sounds-app-without-subscription",
  },
  openGraph: {
    title: "サブスクリプションなしの最高の睡眠音アプリ | Calma",
    description:
      "高額なサブスクリプションのない睡眠音アプリをお探しですか？Calmaは、パーソナライズされた睡眠音とホワイトノイズを1回払いの生涯アクセスで提供します。",
    url: "https://www.calmasounds.com/ja/best-sleep-sounds-app-without-subscription",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "サブスクリプションなしの最高の睡眠音アプリ | Calma",
    description:
      "高額なサブスクリプションのない睡眠音アプリをお探しですか？Calmaは、パーソナライズされた睡眠音を1回払いで提供します。",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "サブスクリプションなしの睡眠アプリはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、Calmaはサブスクリプションを必要としないプレミアムな睡眠音アプリです。無料版と、完全アクセスのための1回払いの生涯アクセスを提供しています。",
      },
    },
    {
      "@type": "Question",
      name: "睡眠アプリは月額料金を払う価値がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "多くの睡眠アプリは高額な月額または年額の料金を請求します。Calmaを使用すると、生涯アクセスのための1回の支払いを選択することで、継続的な料金を完全に回避できます。",
      },
    },
    {
      "@type": "Question",
      name: "Calmaはオフラインで機能しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、Calmaは完全にオフラインで機能するため、旅行中や夜間にWi-Fiを切りたいときに最適なサブスクリプションなしの睡眠アプリです。",
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
      "name": "サブスクリプションなしの睡眠音",
      "item": "https://www.calmasounds.com/ja/best-sleep-sounds-app-without-subscription"
    }
  ]
};

export default function BestSleepAppNoSubscriptionPageJa() {
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
          サブスクリプション不要
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          サブスクリプションなしの最高の睡眠音アプリ
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          リラクゼーションを「レンタル」するのに疲れましたか？Calmaは、<strong>1回払いの生涯アクセス</strong>で就寝用のパーソナライズされたサウンドスケープを作成するのに役立つ、美しくシンプルな睡眠音アプリです。 
          月額料金も年次更新もありません。ただ穏やかなだけです。
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
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">一度支払えば、ずっとあなたのもの</h2>
            <p className="mt-4 leading-7 text-white/70">
              睡眠のためにお金を払い続けるのはやめましょう。当社の生涯アクセスにより、継続的なサブスクリプションなしで、すべてのプレミアムサウンド、Brainwave Labの機能、および将来のアップデートへのフルアクセスが得られます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">100% オフライン対応</h2>
            <p className="mt-4 leading-7 text-white/70">
              ダウンロード後、Calmaは完全にオフラインで機能します。飛行機、旅行、または夜間にスマートフォンを機内モードにするのに最適です。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">プレミアムサウンドミキサー</h2>
            <p className="mt-4 leading-7 text-white/70">
              高品質の雨、海の波、ホワイトノイズ、ブラウンノイズをミックスして、完璧なパーソナライズされたサウンドスケープを作成します。
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
              サブスクリプションなしの睡眠アプリはありますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい、Calmaはサブスクリプションを必要としないプレミアムな睡眠音アプリです。無料版と、完全アクセスのための1回払いの生涯アクセスを提供しています。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              睡眠アプリは月額料金を払う価値がありますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              多くの睡眠アプリは、サーバーコストや新しいコンテンツのために高額な月額または年額の料金を請求します。Calmaを使用すると、プレミアムオフラインミキサーへのアクセスのために1回の支払いを選択することで、継続的な料金を完全に回避できます。
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calmaはオフラインで機能しますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい、Calmaは完全にオフラインで機能するため、旅行中や、気を散らさないように夜間にWi-Fiを切りたいときに最適な、サブスクリプション不要の睡眠アプリです。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
