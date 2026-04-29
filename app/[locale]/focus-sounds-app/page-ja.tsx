import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "集中音アプリ | Calma",
  description:
    "深い作業、勉強、パーソナライズされた集中のサウンドスケープのための、美しくシンプルな集中音アプリであるCalmaを発見してください。",
  keywords: [
    "集中音アプリ",
    "集中アプリ",
    "集中力アップ音アプリ",
    "深い集中の音",
    "勉強の音アプリ",
    "calma集中音",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/focus-sounds-app",
  },
  openGraph: {
    title: "集中音アプリ | Calma",
    description:
      "深い作業、勉強、集中のための、美しくシンプルな集中音アプリを発見してください。",
    url: "https://www.calmasounds.com/ja/focus-sounds-app",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "集中音アプリ | Calma",
    description:
      "深い作業、勉強、集中のための、美しくシンプルな集中音アプリを発見してください。",
  },
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
      "name": "集中音アプリ",
      "item": "https://www.calmasounds.com/ja/focus-sounds-app"
    }
  ]
};

export default function FocusSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          集中音アプリ
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          より深い作業、勉強、そして落ち着いた集中のための集中音アプリ
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calmaは、深い仕事、読書、勉強、そして静かな集中のためのパーソナライズされたオーディオ環境を作成するのに役立つ、美しくシンプルな集中音アプリです。独自のサウンドスケープを構築し、視覚的なごちゃごちゃ感や気を散らすノイズなしで没入感を維持します。
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play StoreからCalmaをダウンロード（新しいウィンドウで開きます）"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Google Playでダウンロード
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple App StoreからCalmaをダウンロード（新しいウィンドウで開きます）"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            App Storeでダウンロード
          </a>

          <a
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            ホームページに戻る
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">より長く没入し続ける</h2>
            <p className="mt-4 leading-7 text-white/70">
              仕事や勉強のセッション中に気を散らすものを減らし、より一貫した集中をサポートする背景サウンドスケープを使用します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">独自の集中ミックスを作成する</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calmaを使用すると、1つの一般的な集中トラックに依存するのではなく、より個人的なオーディオ環境を形作ることができます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">より落ち着いた方法で働く</h2>
            <p className="mt-4 leading-7 text-white/70">
              アプリはシンプルでエレガント、そして感情的に軽く感じられるように設計されており、ワークスペースの騒音を減らし、より意図的なものに感じられるようサポートします。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            アプリプレビュー
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Calmaの集中の側面を見る
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="集中と集中力のカテゴリーを表示するCalmaモバイルアプリのインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="勉強のための集中サウンドスケープをカスタマイズするためのCalmaインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="深い仕事のバックグラウンドオーディオのためのCalmaサウンドミキサーインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="集中音とバイノーラルビートのためのCalmaインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            ガイドと知識
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            音と集中についてさらに学ぶ
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">勉強に最適な音</h3>
            <p className="mt-3 text-white/70">
              勉強セッション中の集中力とより深いフォーカスを助ける可能性のある音の種類を見つけてください。
            </p>
          </a>
          <a
            href="/blog/binaural-beats-for-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">バイノーラルビートの解説</h3>
            <p className="mt-3 text-white/70">
              バイノーラルビートが日々の仕事における落ち着きと集中をどのようにサポートするかの簡単な紹介。
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            集中音アプリのよくある質問
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              集中音アプリとは何ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              集中音アプリは、集中をサポートし、気を散らすものを減らし、仕事や勉強をより没入感のあるものに感じるオーディオ背景を作成するのに役立ちます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              集中のためにCalmaをいつ使用できますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              勉強中、読書中、執筆中、仕事中、またはより穏やかで制御された集中環境が必要なときはいつでもCalmaを使用できます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              集中サウンドミックスをパーソナライズできますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい。Calmaは独自のパーソナライズされたミックスを構築するように設計されているため、あなたの集中環境はより自然で有用に感じられます。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            深い仕事と勉強のためにCalmaを試す
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Google PlayでCalmaをダウンロードし、パーソナライズされたサウンドスケープでより集中できる環境を作成してください。
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play StoreからCalmaをダウンロード（新しいウィンドウで開きます）"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple App StoreからCalmaをダウンロード（新しいウィンドウで開きます）"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              App Store
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
