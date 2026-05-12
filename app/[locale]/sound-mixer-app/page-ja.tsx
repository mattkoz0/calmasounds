import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "睡眠と集中のためのサウンドミキサーアプリ | Calma",
  description:
    "雨やホワイトノイズで落ち着いたオーディオミックスを作成します。Calmaサウンドミキサーでリラックスし、集中しましょう。",
  keywords: [
    "サウンドミキサーアプリ",
    "睡眠音ミキサー",
    "リラクゼーション音ミキサー",
    "集中音ミキサー",
    "パーソナライズされたサウンドスケープ",
    "calmaサウンドミキサー",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/sound-mixer-app",
  },
  openGraph: {
    title: "睡眠と集中のためのサウンドミキサーアプリ | Calma",
    description:
    "雨やホワイトノイズで落ち着いたオーディオミックスを作成します。Calmaサウンドミキサーでリラックスし、集中しましょう。",
    url: "https://www.calmasounds.com/ja/sound-mixer-app",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "睡眠と集中のためのサウンドミキサーアプリ | Calma",
    description:
    "雨やホワイトノイズで落ち着いたオーディオミックスを作成します。Calmaサウンドミキサーでリラックスし、集中しましょう。",
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
      "name": "サウンドミキサーアプリ",
      "item": "https://www.calmasounds.com/ja/sound-mixer-app"
    }
  ]
};

export default function SoundMixerAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          サウンドミキサーアプリ
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          パーソナライズされた睡眠、リラクゼーション、集中のためのサウンドミキサーアプリ
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calmaは、1つの固定されたトラックに依存するのではなく、独自のオーディオ環境を作成できる、美しくシンプルなサウンドミキサーアプリです。就寝時、夕方のリラックス、深い仕事、そしてより穏やかな日常のルーティンのために、パーソナライズされたサウンドスケープを構築します。
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
            <h2 className="text-2xl font-semibold">独自のミックスを作成する</h2>
            <p className="mt-4 leading-7 text-white/70">
              1つの一般的なオーディオトラックに適応するのではなく、気分やルーティンに合わせて音を組み合わせます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">多くの瞬間に1つのアプリを使用する</h2>
            <p className="mt-4 leading-7 text-white/70">
              睡眠、リラクゼーション、集中、そして日常の落ち着きのためのサウンドスケープを、1つのシンプルでまとまりのある体験の中で構築します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">体験をエレガントに保つ</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calmaは明確で暖かく、プレミアムに感じられるように設計されているため、サウンドミックスの構築は技術的ではなく直感的に感じられます。
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
            Calma内のミキサー体験を見る
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="カスタムサウンドミックスを作成するためのCalmaモバイルアプリインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="アンビエントサウンドスケープをカスタマイズするためのCalmaサウンドミキサーインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="パーソナライズされたリラクゼーションのための複数のオーディオレイヤーを表示するCalmaインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="睡眠とフォーカスオーディオのためのCalmaサウンドミキサーコントロール"
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
            サウンドスケープについてさらに学ぶ
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">雨の音 vs ホワイトノイズ</h3>
            <p className="mt-3 text-white/70">
              異なる雰囲気のレイヤーを比較し、それらを混ぜることでどのように完璧な集中や睡眠のオーディオを作成できるかをご覧ください。
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">ノイズの色</h3>
            <p className="mt-3 text-white/70">
              ノイズの色について学び、パーソナルサウンドミキサーでそれらをどのようにバランスさせるかを探ります。
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            サウンドミキサーアプリのよくある質問
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              サウンドミキサーアプリとは何ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              サウンドミキサーアプリは、睡眠、リラクゼーション、集中、または日常の落ち着きのために、異なる音を組み合わせて1つのパーソナライズされたオーディオ環境にするのに役立ちます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calmaは通常のサウンドアプリとどう違いますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calmaはパーソナライズを中心に構築されており、固定された既製のトラックから選ぶだけでなく、独自のミックスを形作ることができます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calmaは睡眠以外にも使用できますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい。Calmaは、カスタマイズ可能なサウンドスケープを通じて、睡眠、リラクゼーション、集中、そしてより柔らかな日常のルーティンをサポートします。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            日常のサウンドミキサーとしてCalmaを試す
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Google PlayでCalmaをダウンロードし、睡眠、リラクゼーション、集中、そして穏やかな日常の瞬間に適したパーソナライズされたサウンドスケープを作成してください。
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
