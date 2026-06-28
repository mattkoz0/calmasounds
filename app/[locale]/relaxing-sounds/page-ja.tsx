import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "日常の落ち着きのためのリラックス音アプリ | Calma",
  description:
    "雨、ホワイトノイズ、自然の音で独自のリラックス音ミックスを作成します。Calmaを使用して平和を見つけストレスを和らげます。",
  keywords: [
    "リラックスできる音アプリ",
    "リラクゼーションの音",
    "落ち着く音アプリ",
    "リラックスできる環境音",
    "calmaリラックスできる音",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ja/relaxing-sounds",
  },
  openGraph: {
    title: "日常の落ち着きのためのリラックス音アプリ | Calma",
    description:
    "雨、ホワイトノイズ、自然の音で独自のリラックス音ミックスを作成します。Calmaを使用して平和を見つけストレスを和らげます。",
    url: "https://www.calmasounds.com/ja/relaxing-sounds",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "日常の落ち着きのためのリラックス音アプリ | Calma",
    description:
    "雨、ホワイトノイズ、自然の音で独自のリラックス音ミックスを作成します。Calmaを使用して平和を見つけストレスを和らげます。",
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
      "name": "リラックスできる音アプリ",
      "item": "https://www.calmasounds.com/ja/relaxing-sounds"
    }
  ]
};

export default function RelaxingSoundsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          リラックスできる音
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          より穏やかな夜とより柔らかい日常のルーティンのためのリラックスできる音アプリ
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calmaは、ペースを落とし、忙しい一日の後にリセットし、必要なときにより平和な環境を作成するのに役立つ、美しくシンプルなリラックスできる音アプリです。リラクゼーション、感情的なバランス、静かな日々の儀式のためにパーソナライズされたサウンドスケープを構築します。
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
            <h2 className="text-2xl font-semibold">より簡単にペースを落とす</h2>
            <p className="mt-4 leading-7 text-white/70">
              仕事モードから抜け出し、精神的な騒音を静め、より穏やかな夜への移行を作成するために落ち着くサウンドスケープを使用します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">独自のリラックスミックスを作成する</h2>
            <p className="mt-4 leading-7 text-white/70">
              個人的で暖かく、周囲に望む雰囲気に合った方法で音を組み合わせます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">より柔らかな日々の儀式を構築する</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calmaは、実際の日常生活にフィットするシンプルでエレガントな方法でリラクゼーションに戻るのを助けます。
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
            Calmaのリラックスできる側面を見る
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              priority
              alt="リラックスできる音のカテゴリーを選択するためのCalmaモバイルアプリのインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="リラックスできるアンビエントサウンドスケープをカスタマイズするためのCalmaインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="自然のテクスチャと落ち着くオーディオレイヤーを表示するCalmaサウンドミキサー"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="パーソナライズされたリラクゼーションサウンドミックスを管理するためのCalmaインターフェース"
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
            リラクゼーションと音についてさらに学ぶ
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">自然の音の利点</h3>
            <p className="mt-3 text-white/70">
              雨や海の波のような自然のサウンドスケープが、リラクゼーションのための自然なグラウンディングとしてどのように機能するかを探ります。
            </p>
          </a>
          <a
            href="/blog/guided-breathing-techniques"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">ガイド付き呼吸法</h3>
            <p className="mt-3 text-white/70">
              より深いリラクゼーションのために環境音と一緒に機能する落ち着く呼吸法を発見してください。
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            リラックスできる音アプリのよくある質問
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              リラックスできる音アプリとは何ですか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              リラックスできる音アプリは、くつろぎ、感情的なリセット、そしてより平和なルーティンをサポートする落ち着くオーディオを再生するのに役立ちます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              いつリラクゼーションのためにCalmaを使用できますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              仕事の後、夕方のリラックス中、読書中、休息中、または周囲により柔らかな背景が必要なときはいつでもCalmaを使用できます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              リラックスできる音をパーソナライズできますか？
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              はい。Calmaは、1つの固定されたトラックのみに依存するのではなく、独自のパーソナライズされたリラックスできるサウンドスケープを作成するように設計されています。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            より穏やかな日常の瞬間にCalmaを試す
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Google PlayでCalmaをダウンロードし、パーソナライズされたリラックスできる音でより平和な雰囲気を作成してください。
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
