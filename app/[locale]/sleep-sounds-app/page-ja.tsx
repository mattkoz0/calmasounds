import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "より良い睡眠のための睡眠音アプリ | Calma",
  description:
    "最高の睡眠音と自然の音を発見してください。Calmaでカスタマイズされた睡眠ミックスを作成し、早く眠りにつきましょう。",
  keywords: [
    "睡眠音アプリ",
    "睡眠アプリ",
    "睡眠のためのリラックスできる音",
    "就寝時の音アプリ",
    "calma睡眠音",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/sleep-sounds-app",
  },
  openGraph: {
    title: "より良い睡眠のための睡眠音アプリ | Calma",
    description:
    "最高の睡眠音と自然の音を発見してください。Calmaでカスタマイズされた睡眠ミックスを作成し、早く眠りにつきましょう。",
    url: "https://www.calmasounds.com/ja/sleep-sounds-app",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "より良い睡眠のための睡眠音アプリ | Calma",
    description:
    "最高の睡眠音と自然の音を発見してください。Calmaでカスタマイズされた睡眠ミックスを作成し、早く眠りにつきましょう。",
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
      "name": "睡眠音アプリ",
      "item": "https://www.calmasounds.com/ja/sleep-sounds-app"
    }
  ]
};

export default function SleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          睡眠音アプリ
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          より穏やかな夜とより良い就寝時のルーティンのための睡眠音アプリ
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calmaは、就寝時、夕方のリラックス、より深い休息のためにパーソナライズされたサウンドスケープを作成できる、美しくシンプルな睡眠音アプリです。リラックスできる音をミックスし、独自の雰囲気を構築して、夜のルーティンをより柔らかく一貫性のあるものにします。
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
            <h2 className="text-2xl font-semibold">独自の就寝時ミックスを作成する</h2>
            <p className="mt-4 leading-7 text-white/70">
              1つの一般的なトラックを聴く代わりに、夕方や気分に合った音環境を構築できます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">睡眠前にリラックスする</h2>
            <p className="mt-4 leading-7 text-white/70">
              忙しい一日の後にペースを落とし、睡眠へのより平和な移行を作成するために、落ち着くサウンドスケープを使用します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">ルーティンをシンプルに保つ</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calmaは、明確でエレガントであり、摩擦や圧倒されることなく毎晩簡単に戻ることができるように設計されています。
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
            Calma内の睡眠体験を見る
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
              alt="就寝時のオーディオをカスタマイズするためのCalma睡眠音アプリインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="さまざまなアンビエントサウンドレイヤーを表示するCalma睡眠音ミキサー"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="カスタム睡眠ミックスを作成するためのCalmaサウンドミキサーインターフェース"
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
            睡眠音についてさらに学ぶ
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">睡眠に最適な音</h3>
            <p className="mt-3 text-white/70">
              雨、ホワイトノイズ、そして就寝時のより柔らかな睡眠サウンドスケープに関する実践的なガイド。
            </p>
          </a>
          <a
            href="/blog/how-to-build-a-bedtime-routine"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">就寝時のルーティンの作り方</h3>
            <p className="mt-3 text-white/70">
              自然で一貫した睡眠をサポートする、より穏やかな夜のリズムを作成する簡単な方法。
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            睡眠音アプリのよくある質問
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              睡眠音アプリとは何ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              睡眠音アプリは、就寝時のルーティン、リラクゼーション、そして睡眠前のより静かな精神状態をサポートするように設計された落ち着くオーディオを再生するのに役立ちます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calmaは他の睡眠アプリとどう違いますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calmaは、複雑すぎるレイヤーであなたを圧倒するのではなく、パーソナライズされたサウンドスケープ、シンプルなインターフェース、そして落ち着いたプレミアムな感触に焦点を当てています。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              独自の睡眠ミックスを構築できますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい。Calmaは、1つの固定されたトラックを選択するだけでなく、独自のリラックスできるオーディオミックスを作成するように設計されています。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            夜のルーティンにCalmaを試す
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Google PlayでCalmaをダウンロードし、パーソナライズされた睡眠音でより平和な就寝体験を作成してください。
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
