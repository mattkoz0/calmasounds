import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "旅行やプライバシーのためのオフライン睡眠音アプリ | Calma",
  description:
    "インターネットなしで機能する睡眠音アプリをお探しですか？Calmaは100%オフラインで機能します。機内モード、フライト中、旅行中にパーソナライズされたサウンドスケープをお楽しみください。",
  keywords: [
    "オフライン睡眠音アプリ",
    "インターネットなしの睡眠音アプリ",
    "機内モード睡眠アプリ",
    "旅行睡眠音",
    "睡眠音Wi-Fiなし",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/offline-sleep-sounds-app",
  },
  openGraph: {
    title: "旅行やプライバシーのためのオフライン睡眠音アプリ | Calma",
    description:
      "インターネットなしで機能する睡眠音アプリをお探しですか？Calmaは100%オフラインで機能します。機内モード、フライト中、旅行中にパーソナライズされたサウンドスケープをお楽しみください。",
    url: "https://www.calmasounds.com/ja/offline-sleep-sounds-app",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "旅行やプライバシーのためのオフライン睡眠音アプリ | Calma",
    description:
      "インターネットなしで機能する睡眠音アプリをお探しですか？Calmaは100%オフラインで機能します。",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calmaはオフラインで機能しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ダウンロード後、Calmaは完全にオフラインで機能します。睡眠音をミックスして聴くために、Wi-Fiやセルラー接続は必要ありません。",
      },
    },
    {
      "@type": "Question",
      name: "飛行機でCalmaを使用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "もちろんです。Calmaは、バッファリングや読み込み画面なしに機内モードで完全に機能するため、フライトに最適です。",
      },
    },
    {
      "@type": "Question",
      name: "データを使用しない睡眠音アプリはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、Calmaはオーディオをストリーミングしない、プライバシー重視の睡眠音アプリです。すべての音はデバイス上でローカルに処理されるため、再生中にモバイルデータを消費することはありません。",
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
      "name": "オフライン睡眠音アプリ",
      "item": "https://www.calmasounds.com/ja/offline-sleep-sounds-app"
    }
  ]
};

export default function OfflineSleepAppPageJa() {
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
          機内モード対応
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          どこでも深い休息をとるためのオフライン睡眠音アプリ
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Wi-Fiをオフにして、世界から切り離しましょう。Calmaは<strong>100%オフライン</strong>で機能するため、気を散らすもの、データ使用量、バッファリングなしでパーソナライズされたサウンドスケープを楽しむことができます。
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
            <h2 className="text-2xl font-semibold">旅行に最適</h2>
            <p className="mt-4 leading-7 text-white/70">
              長時間のフライト、電車での移動、Wi-Fi環境の悪いホテルへの滞在など、Calmaのオフライン機能により、睡眠音がいつでも準備万端であることを保証します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">データ使用量ゼロ</h2>
            <p className="mt-4 leading-7 text-white/70">
              ストリーミングアプリとは異なり、Calmaはモバイルデータを消費しません。音はデバイス上で直接ミックスされます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">プライバシー第一</h2>
            <p className="mt-4 leading-7 text-white/70">
              継続的な追跡について心配する必要はありません。スマートフォンを機内モードにして、EMFの被ばくを減らし、安らかに眠りましょう。
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
              Calmaはオフラインで機能しますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい、ダウンロード後、Calmaは完全にオフラインで機能します。睡眠音をミックスして聴くために、Wi-Fiやセルラー接続は必要ありません。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              飛行機でCalmaを使用できますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              もちろんです。Calmaは、バッファリングや読み込み画面なしに機内モードで完全に機能するため、フライトに最適です。
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              データを使用しない睡眠音アプリはありますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい、Calmaはオーディオをストリーミングしない、プライバシー重視の睡眠音アプリです。すべての音はデバイス上でローカルに処理されるため、再生中にモバイルデータを消費することはありません。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
