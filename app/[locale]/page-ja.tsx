import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AiDefinition from "./_components/ai-definition";
import DesktopDownloadQr from "./_components/desktop-download-qr";

export const metadata: Metadata = {
  title: "Calma | リラクゼーション、ホワイトノイズ、集中のための睡眠音アプリ",
  description:
    "Calmaは、より良い睡眠、穏やかな夜、深い集中のためにパーソナライズされたオーディオミックスを作成できる、睡眠音とリラクゼーションのアプリです。",
  alternates: {
    canonical: "https://www.calmasounds.com/ja",
  },
  openGraph: {
    title: "Calma | リラクゼーション、ホワイトノイズ、集中のための睡眠音アプリ",
    description:
      "Calmaは、より良い睡眠、穏やかな夜、深い集中のためにパーソナライズされたオーディオミックスを作成できる、睡眠音とリラクゼーションのアプリです。",
    url: "https://www.calmasounds.com/ja",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | リラクゼーション、ホワイトノイズ、集中のための睡眠音アプリ",
    description:
      "Calmaは、より良い睡眠、穏やかな夜、深い集中のためにパーソナライズされたオーディオミックスを作成できる、睡眠音とリラクゼーションのアプリです。",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calma",
  url: "https://www.calmasounds.com/ja",
  description:
    "Calmaは、より良い睡眠、穏やかな夜、深い集中のためにパーソナライズされたオーディオミックスを作成できる、睡眠音とリラクゼーションのアプリです。",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calma App",
  sameAs: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    "https://www.youtube.com/@CalmaApp",
    "https://www.tiktok.com/@.calma.app",
    "https://www.instagram.com/calma.app.official",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ],
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Sleep and Relaxation",
  operatingSystem: "Android 8.0 and up",
  url: "https://www.calmasounds.com/ja",
  downloadUrl: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
  ],
  description:
    "睡眠音、ホワイトノイズ、パーソナライズされたサウンドスケープを備えたリラクゼーションと集中のためのアプリ。",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  softwareVersion: "1.0.0",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calma",
  url: "https://www.calmasounds.com/ja",
  logo: "https://www.calmasounds.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "calma.app@outlook.com",
    contactType: "customer support",
    availableLanguage: "Japanese"
  },
  sameAs: [
    "https://www.tiktok.com/@.calma.app",
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    "https://www.instagram.com/calma.app.official",
    "https://www.youtube.com/@CalmaApp",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calmaとは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calmaは、パーソナライズされたオーディオミックスでより良い睡眠、リラクゼーション、集中をサポートするために設計されたサウンドミキサーアプリです。",
      },
    },
    {
      "@type": "Question",
      name: "Calmaは誰向けですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calmaは、穏やかな就寝前のルーティン、仕事後の平和なリセット、または勉強や深い仕事のための集中できる背景を求めているすべての人向けです。",
      },
    },
    {
      "@type": "Question",
      name: "独自のサウンドミックスを作成できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。Calmaは、固定されたトラックを1つだけ聴くのではなく、独自のラックスできる音の環境を作成するというアイデアを中心に構築されています。",
      },
    },
    {
      "@type": "Question",
      name: "Calmaは現在利用可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CalmaはAndroidおよびiOS（App Store）で利用可能であり、今後さらに改善とプラットフォームの拡大が予定されています。",
      },
    },
    {
      "@type": "Question",
      name: "Calmaは無料ですか、それともサブスクリプションが必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calmaは無料バージョンと、1回限りの支払いで利用できる生涯プレミアムアンロックを提供しています。月額または年額のサブスクリプションは必要ありません。",
      },
    },
    {
      "@type": "Question",
      name: "Calmaはオフラインで機能しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、Calmaは完全にオフラインで機能します。インターネットに接続せずに音をミックスして聴くことができます。",
      },
    },
    {
      "@type": "Question",
      name: "Calmaにはホワイトノイズ、ブラウンノイズ、ピンクノイズが含まれていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、Calmaには高品質のホワイト、ブラウン、ピンク、グリーンノイズが含まれており、雨、海、扇風機、自然の音と組み合わせることができます。",
      },
    },
  ],
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Calmaアプリデモ",
  description: "睡眠、リラクゼーション、集中のために設計された、没入型サウンドミキシングからプレミアムウェルネス機能まで、実際の使用感をご覧ください。",
  thumbnailUrl: "https://www.calmasounds.com/screenshots/3_en.png",
  uploadDate: "2026-03-30T09:00:00Z",
  duration: "PT34S",
  contentUrl: "https://www.calmasounds.com/demo.mp4",
  embedUrl: "https://www.calmasounds.com/demo.mp4"
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://www.calmasounds.com/ja"
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(softwareAppJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(videoJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbJsonLd),
              }}
            />

      <AiDefinition 
        title="Calmaとは何ですか？" 
        description="Calmaは、ユーザーが雨、海、ホワイトノイズ、ブラウンノイズ、自然の音、アンビエントを混ぜてパーソナライズされたサウンドスケープを作成できる睡眠とリラクゼーションのアプリです。睡眠、リラックス、集中、そして夜のルーティンに最適です。Calmaはサブスクリプション不要の1回払いで生涯アクセスを提供します。" 
      />

      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center lg:grid lg:grid-cols-12 lg:gap-12 lg:text-left lg:items-center">
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
          <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
            Calma • 睡眠音＆リラックス
          </span>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            パーソナライズされたサウンドスケープで、より良い睡眠、深いリラックス、そして集中を
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Calmaは、より良い睡眠、穏やかな夜、そして深い集中のためのパーソナライズされたオーディオミックスの作成をサポートする、美しくシンプルな睡眠音とリラクゼーションのアプリです。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start w-full">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play StoreからCalmaアプリをダウンロード（新しいウィンドウで開きます）"
              className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
            >
              無料のルーティンを始める
            </a>

            <a
              href="#features"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              機能を探索する
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-white/65">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              パーソナライズされたミックス
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              睡眠 • リラックス • 集中
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              サブスクリプションのプレッシャーなし
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 lg:hidden">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
            >
              <Image
                src="/google-play-badge.png"
                alt="Google Playで手に入れよう"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
            >
              <Image
                src="/apple-appstore-badge.png"
                alt="App Storeからダウンロード"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
          <DesktopDownloadQr />
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 text-center">
        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              より良い睡眠
            </p>
            <h2 className="mt-3 text-xl font-semibold">パーソナライズされた睡眠音と雨の雰囲気</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              雨の音、アンビエントテクスチャ、心地よい背景レイヤーを使用して、自然にリラックスできる就寝時のサウンドミックスを作成します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              深いリラックス
            </p>
            <h2 className="mt-3 text-xl font-semibold">深い休息のための自然のリラックス音</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              心をリセットし、周囲の騒音を減らし、より穏やかな夜のルーティンを構築するために、落ち着くサウンドスケープを使用します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              ADHDと集中
            </p>
            <h2 className="mt-3 text-xl font-semibold">ADHDのためのブラウンノイズと集中音</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              気を散らす視覚的な要素やごちゃごちゃしたものを排除し、勉強、読書、深い作業のための独自のバックグラウンドオーディオを構築します。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            ビデオデモ
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Calmaのアクションを見る
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            没入型のサウンドミキシングから、睡眠、リラクゼーション、集中のために設計されたプレミアムウェルネス機能まで、実際の使用感をご覧ください。
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20">
          <video
            className="h-auto w-full rounded-[1.5rem]"
            controls
            preload="metadata"
            playsInline
            poster="/screenshots/3_en.png"
            title="Calmaアプリデモ動画"
            aria-label="Calmaアプリデモ動画"
          >
            <source src="/demo.mp4" type="video/mp4" />
            お使いのブラウザは動画タグをサポートしていません。
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            アプリプレビュー
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Calmaの実際の動作
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calmaの美しくシンプルなインターフェースを探索し、アプリが睡眠、リラクゼーション、集中のための落ち着くサウンドスケープの構築をどのようにサポートするかをご覧ください。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="睡眠音とリラクゼーションのカテゴリーのリストを表示するCalmaモバイルアプリのインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="睡眠と集中のためにホワイトノイズをカスタマイズするCalmaサウンドミキサーインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/5_en.png"
              alt="Calmaアプリスクリーンショット 3"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/7_en.png"
              alt="カスタムホワイトノイズミックスを作成するためのCalmaサウンドミキサーインターフェース"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            シグネチャー機能
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            単なる睡眠音以上のもの
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calmaは、あなたのルーティンをよりパーソナルで、落ち着き、記憶に残るものにするために設計された没入型の機能を備え、単なる再生アプリの枠を超えています。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              脳波ラボ
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              没入型のオーディオ実験で状態を調整する
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              睡眠、集中、より深い精神的なリセットのために設計されたサウンド体験で、より高度な落ち着きの側面を探ります。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              ガイド付き呼吸
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              より柔らかなリズムで呼吸する
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              穏やかな視覚的な呼吸ガイダンスは、アプリを単なる受動的なオーディオプレーヤーではなく、落ち着く儀式に変えるのに役立ちます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              夜空の儀式
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              静かな発見の瞬間
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              日々の落ち着きをより意味のある、遊び心のある、そして感情的にやりがいのあるものにする機能で、ルーティンに驚きの感覚を加えましょう。
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Calmaが選ばれる理由
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            意図を持って設計された、より穏やかな体験
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calmaは、エレガントで焦点が定まり、感情的に軽く感じられるように構築されています。ごちゃごちゃ感、摩擦、または視覚的なノイズなしで、より良い音環境を作成するのに役立ちます。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">独自の雰囲気を作成する</h3>
            <p className="mt-4 leading-7 text-white/70">
              気分、ルーティン、その瞬間に応じて音をミックスします。Calmaは、画一的なオーディオアプリよりもパーソナルな体験を提供します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">圧倒されることなく、落ち着きを感じる</h3>
            <p className="mt-4 leading-7 text-white/70">
              インターフェースは気を散らすのではなく、落ち着きをサポートするように設計されています。すべての画面は、シンプルで没入感があり、毎日戻りたくなるように感じられることを目指しています。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">1つのアプリで、複数の毎日の儀式</h3>
            <p className="mt-4 leading-7 text-white/70">
              睡眠前、夕方のリラックス中、仕事中、または一日に単により柔らかい背景が必要なときにCalmaを使用します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">プレミアムで温かみのある感触に構築</h3>
            <p className="mt-4 leading-7 text-white/70">
              Calmaは洗練された外観と穏やかな感情的なトーンを組み合わせ、アプリが戻ってきたい場所のように感じられるようサポートします。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            さらに探索
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            意図によるCalmaの発見
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            睡眠、リラクゼーション、集中のための専用ページを探索して、あなたのルーティンに最適なCalmaの側面を見つけてください。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/sleep-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              睡眠
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              睡眠音アプリ
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Calmaが穏やかな夜、就寝前のルーティン、パーソナライズされた睡眠サウンドスケープをどのようにサポートするかを探ります。
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              睡眠ページを見る →
            </span>
          </a>

          <a
            href="/relaxing-sounds"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              リラックス
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              リラックスできる音
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              平和な夜、感情的なリセット、心を落ち着かせる毎日の儀式のために構築されたCalmaのより柔らかな側面を発見してください。
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              リラックスページを見る →
            </span>
          </a>

          <a
            href="/focus-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              集中
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              集中音アプリ
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Calmaが深い仕事、集中、勉強のセッションのためにより穏やかな環境を作成するのにどのように役立つかをご覧ください。
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              集中ページを見る →
            </span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            ガイド
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            睡眠と集中のガイドを読む
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            睡眠音、ホワイトノイズ、勉強、より穏やかな就寝前のルーティンに関する実践的な読み物を探索してください。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">睡眠と集中のための雨の音</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              一定の雨の音が心を落ち着かせるのに最適な理由。
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">睡眠に最適な音</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              雨、ホワイトノイズ、就寝時のより柔らかなサウンドスケープ。
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">勉強に最適な音</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              集中力とフォーカスを高める可能性のある音の種類を見つけましょう。
            </p>
          </a>
        </div>
      </section>
      
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            音の知識
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            ノイズの色を理解する
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            ノイズに色があることを知っていましたか？気を散らすものをマスクすることから、集中やADHDのサポートまで、異なる周波数は異なるニーズに役立ちます。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              ホワイトノイズ
            </div>
            <h3 className="text-xl font-semibold">マスキングに最適</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              すべての可聴周波数を均等にカバーします。突然の大きな音を遮断し、乳児の睡眠をサポートするのに最適です。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              ピンクノイズ
            </div>
            <h3 className="text-xl font-semibold">バランスが取れて自然</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              ホワイトノイズよりも低く、一定の雨や風のような音を模倣します。全体的な睡眠の質の向上に最適です。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              ブラウンノイズ
            </div>
            <h3 className="text-xl font-semibold">集中とADHDのサポート</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              遠くの滝のように、低周波数が多いです。深い集中と忙しい心を「静める」ためにますます人気が高まっています。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              グリーンノイズ
            </div>
            <h3 className="text-xl font-semibold">自然の調和</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              森の木の葉のざわめきに似た中音域の周波数に焦点を当てています。落ち着いた自然な雰囲気に最適です。
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            ノイズの色の完全なガイドを読む
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            よくある質問
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calmaとは何ですか？</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calmaは、パーソナライズされたオーディオミックスでより良い睡眠、リラクゼーション、集中をサポートするために設計されたサウンドミキサーアプリです。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calmaは誰向けですか？</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calmaは、穏やかな就寝前のルーティン、仕事後の平和なリセット、または勉強や深い仕事のための集中できる背景を求めているすべての人向けです。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">独自のサウンドミックスを作成できますか？</h3>
            <p className="mt-3 leading-7 text-white/70">
              はい。Calmaは、固定されたトラックを1つだけ聴くのではなく、独自のリラックスできる音の環境を作成するというアイデアを中心に構築されています。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calmaは現在利用可能ですか？</h3>
            <p className="mt-3 leading-7 text-white/70">
              CalmaはAndroidおよびiOS（App Store）で利用可能であり、今後さらに改善とプラットフォームの拡大が予定されています。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calmaは無料ですか、それともサブスクリプションが必要ですか？</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calmaは無料バージョンと、1回限りの支払いで利用できる生涯プレミアムアンロックを提供しています。月額または年額のサブスクリプションは必要ありません。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calmaはオフラインで機能しますか？</h3>
            <p className="mt-3 leading-7 text-white/70">
              はい、Calmaは完全にオフラインで機能します。インターネットに接続せずに音をミックスして聴くことができます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calmaにはホワイトノイズ、ブラウンノイズ、ピンクノイズが含まれていますか？</h3>
            <p className="mt-3 leading-7 text-white/70">
              はい、Calmaには高品質のホワイト、ブラウン、ピンク、グリーンノイズが含まれており、雨、海、扇風機、自然の音と組み合わせることができます。
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:text-left lg:items-center">
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              今すぐ始める
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Calmaをダウンロードして、より柔らかな毎日のルーティンを構築しましょう
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              日常的に使用するために設計された美しくシンプルなアプリで、より良い睡眠、より穏やかな夜、そしてより深い集中のためのパーソナライズされたサウンドスケープを作成します。
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 lg:hidden">
              <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition hover:scale-[1.02]"
                aria-label="Google PlayでCalmaアプリをダウンロード"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Google Playで手に入れよう"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition hover:scale-[1.02]"
                aria-label="Apple App StoreでCalmaアプリをダウンロード"
              >
                <Image
                  src="/apple-appstore-badge.png"
                  alt="App Storeからダウンロード"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
            <DesktopDownloadQr />
          </div>
        </div>
        <p className="mt-4 text-sm text-white/60">
          専用の睡眠ページをお探しですか？{" "}
          <a
            href="/sleep-sounds-app"
            className="text-white underline underline-offset-4 transition hover:text-white/80"
          >
            睡眠音アプリのページを見る
          </a>
        </p>

        <p className="mt-3 text-sm text-white/60">
          就寝時のアイデアをさらに探していますか？{" "}
          <a
            href="/blog/best-sounds-for-sleep"
            className="text-white underline underline-offset-4 transition hover:text-white/80"
          >
            睡眠に最適な音のガイドを読む
          </a>
        </p>
        <p className="mt-3 text-sm text-white/60">
          ノイズの色についてもっと知りたいですか？{" "}
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="text-white underline underline-offset-4 transition hover:text-white/80"
          >
            ホワイトノイズ、ピンクノイズ、ブラウンノイズの違いを読む
          </a>
        </p>
      </section>
    </main>
  );
}
