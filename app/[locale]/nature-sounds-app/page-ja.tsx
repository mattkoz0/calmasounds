import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "リラクゼーションのための自然の音アプリ | Calma",
  description:
    "自然の音、雨、森の音で落ち着いた睡眠ミックスを作成します。Calmaを使用してリラックスし、睡眠ルーティンを作りましょう。",
  keywords: [
    "自然の音アプリ",
    "睡眠のための自然の音",
    "睡眠自然の音アプリ",
    "落ち着く自然の音",
    "calma自然の音",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/nature-sounds-app",
  },
  openGraph: {
    title: "リラクゼーションのための自然の音アプリ | Calma",
    description:
    "自然の音、雨、森の音で落ち着いた睡眠ミックスを作成します。Calmaを使用してリラックスし、睡眠ルーティンを作りましょう。",
    url: "https://www.calmasounds.com/ja/nature-sounds-app",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "リラクゼーションのための自然の音アプリ | Calma",
    description:
    "自然の音、雨、森の音で落ち着いた睡眠ミックスを作成します。Calmaを使用してリラックスし、睡眠ルーティンを作りましょう。",
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
      "name": "自然の音アプリ",
      "item": "https://www.calmasounds.com/ja/nature-sounds-app"
    }
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          自然の音アプリ
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          より良い睡眠とより穏やかなオーディオ環境のための自然の音アプリ
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calmaは、睡眠、リラクゼーション、そして日常の落ち着きのために、より柔らかく制御された音環境を作成するのに役立つ、美しくシンプルな自然の音アプリです。就寝時のルーティンをサポートし、気を散らすノイズを減らし、あなたの周りにより平和な雰囲気を構築するために使用してください。
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
            <h2 className="text-2xl font-semibold">より良い睡眠をサポートする</h2>
            <p className="mt-4 leading-7 text-white/70">
              自然の音は、就寝時により安定した音の背景を作成し、睡眠へのより穏やかな移行をサポートするのに役立ちます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">気を散らすノイズを減らす</h2>
            <p className="mt-4 leading-7 text-white/70">
              制御されたオーディオレイヤーを使用して、突然の音を和らげ、周囲により穏やかな環境を作成します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">シンプルで落ち着いた状態を保つ</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calmaは、エレガントで明確、そして感情的に軽く感じられるように設計されており、自然の音が技術的なツールではなく、日常のルーティンの一部のように感じられるようにサポートします。
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
            Calma内の落ち着く体験を見る
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="睡眠音とリラクゼーションのカテゴリーのリストを表示するCalmaモバイルアプリのインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="睡眠と集中のために自然の音をカスタマイズするためのCalma自然の音アプリインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma睡眠音ミキサーインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="カスタム自然の音ミックスを作成するためのCalmaサウンドミキサーインターフェース"
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
            自然の音についてさらに学ぶ
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">睡眠のための自然の音</h3>
            <p className="mt-3 text-white/70">
              自然の音が安定した就寝環境を作成し、休息を改善するのにどのように役立つかを発見してください。
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">ノイズの色の解説</h3>
            <p className="mt-3 text-white/70">
              自然の音、ピンクノイズ、ブラウンノイズ、グリーンノイズの違いを探り、理想的な音を見つけてください。
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            自然の音アプリのよくある質問
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              自然の音アプリとは何ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              自然の音アプリは、睡眠、リラクゼーション、そしてより穏やかな音環境をサポートできる一定の背景音を作成するのに役立ちます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              自然の音は睡眠に役立ちますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              多くの人が自然の音を使用して、就寝時をより穏やかに感じ、環境内の気を散らす音の影響を軽減しています。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calmaは自然の音専用ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              いいえ。Calmaは睡眠音、リラックスできるサウンドスケープ、集中指向のオーディオミックスもサポートしているため、ニーズに合わせて体験を形作ることができます。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            睡眠と日常の落ち着きにCalmaを試す
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Google PlayでCalmaをダウンロードし、自然の音とパーソナライズされたサウンドスケープでより穏やかな音環境を作成してください。
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
