import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "赤ちゃんの睡眠音アプリ | Calma",
  description:
    "新生児や幼児が安らかに眠れるように設計された、落ち着くホワイトノイズ、穏やかな雨、リラックスできる雰囲気を備えた赤ちゃんの睡眠音アプリであるCalmaを発見してください。",
  keywords: [
    "赤ちゃんの睡眠音アプリ",
    "赤ちゃんのためのホワイトノイズ",
    "乳児の睡眠アプリ",
    "赤ちゃんの睡眠音楽",
    "新生児のための落ち着く音",
    "赤ちゃんの就寝時の音",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/baby-sleep-sounds-app",
  },
  openGraph: {
    title: "赤ちゃんの睡眠音アプリ | Calma",
    description:
      "パーソナライズされた穏やかなサウンドスケープで、赤ちゃんが落ち着き、眠りにつくのを助ける美しくシンプルなアプリです。",
    url: "https://www.calmasounds.com/ja/baby-sleep-sounds-app",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "赤ちゃんの睡眠音アプリ | Calma",
    description:
      "パーソナライズされた穏やかなサウンドスケープで、赤ちゃんが落ち着き、眠りにつくのを助ける美しくシンプルなアプリです。",
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
      "name": "赤ちゃんの睡眠音アプリ",
      "item": "https://www.calmasounds.com/ja/baby-sleep-sounds-app"
    }
  ]
};

export default function BabySleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          赤ちゃんの睡眠音
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          あなたの小さな子供が安らかに眠れるように助ける落ち着く音
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calmaは、一定のホワイトノイズ、穏やかな雨、子宮のような低周波数を提供する、エレガントで使いやすい赤ちゃんの睡眠音アプリです。泣いている乳児をすばやく落ち着かせ、快適なお昼寝のルーティンを確立し、突然のノイズをマスクするサウンドスケープを構築します。
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
            <h2 className="text-2xl font-semibold">不快な音をマスクする</h2>
            <p className="mt-4 leading-7 text-white/70">
              赤ちゃんは突然の家庭の騒音に簡単に驚きます。Calmaからの継続的でリズミカルなホワイトノイズは、赤ちゃんがより長く眠るのを助ける音響的なブランケットを作成します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">子宮を模倣する</h2>
            <p className="mt-4 leading-7 text-white/70">
              子宮は大きくてシューという音がする空間でした。低周波のブラウンノイズ、心拍音、深海の音は、新生児にその安全な環境を思い出させます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">カスタマイズ可能なミックス</h2>
            <p className="mt-4 leading-7 text-white/70">
              すべての赤ちゃんは異なります。Calmaを使用すると、ハム音を立てる扇風機と穏やかな雨を簡単に混ぜて、赤ちゃんを瞬時に落ち着かせる正確な周波数を見つけることができます。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            赤ちゃんの睡眠音のよくある質問
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ホワイトノイズは赤ちゃんにとって安全ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい、ホワイトノイズは一般的に赤ちゃんにとって非常に安全で効果的であると考えられています。ただし、音量が快適な会話レベル（約50〜60デシベル）に保たれ、デバイスがベビーベッドから安全な距離に配置されていることが条件です。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              新生児にはどの色のノイズが最適ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              多くの赤ちゃんは標準的なホワイトノイズによく反応しますが、ピンクノイズとブラウンノイズ（より深く低い周波数を強調する）も、子宮のくぐもった音をシミュレートするのに最適です。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calmaはオフラインで再生するためにインターネットが必要ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calmaはオフラインで機能します。アプリをインストールしたら、赤ちゃんのお気に入りの睡眠ミックスを再生するためにアクティブなインターネット接続は必要ありません。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            赤ちゃんがぐっすり眠れるように助ける
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Google PlayでCalmaをダウンロードし、お昼寝や就寝時に最適なオーディオ環境を作成してください。
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
