import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "耳鳴り緩和のための最高の音と音響療法 | Calma";
const articleDescription = "音響療法とホワイトノイズがどのように耳鳴りを緩和するかを発見してください。耳鳴りをマスキングし、順応する方法を学びます。";
const articleUrl = "https://www.calmasounds.com/ja/blog/sounds-for-tinnitus-relief";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "tinnitus", "sound therapy", "masking", "relief"
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "Calma",
    locale: "ja",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "耳鳴り緩和のための最高の音：音響療法ガイド",
      "description": articleDescription,
      "author": { "@type": "Organization", "name": "Calma Team" },
      "publisher": { "@type": "Organization", "name": "Calma" },
      "mainEntityOfPage": articleUrl,
      "datePublished": "2026-05-09",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "耳鳴りに最適な音は何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "鋭い耳鳴りには高周波のホワイトノイズ、リラックスには自然音が最適です。"
          }
        },
        {
          "@type": "Question",
          "name": "音響療法はどのように機能しますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "静寂と耳鳴りのコントラストを減らし、脳が順応するのを助けます。"
          }
        },
        {
          "@type": "Question",
          "name": "耳鳴りを完全にマスキングするべきですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "いいえ、専門家は部分的なマスキングを推奨しています。"
          }
        }
      ]
    }
  ]
};

export default function SoundsForTinnitusReliefPage() {
  return (
    <ArticlePage
      slug="sounds-for-tinnitus-relief"
      jsonLd={articleJsonLd}
      topLinkHref="/ja/tinnitus-sounds-app"
      topLinkLabel="無料の耳鳴りアプリをダウンロード"
      title="耳鳴り緩和のための最高の音：音響療法ガイド"
      intro="音響療法は、耳鳴りを管理するための最も効果的な方法の1つです。背景音を導入することで、耳鳴りをマスキングし、脳を訓練して無視することができます。"
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="無料の耳鳴りアプリをダウンロード"
      secondaryCtaHref="/ja/tinnitus-sounds-app"
      secondaryCtaLabel="アプリの詳細"
      tableOfContents={[
        { id: "what-is-sound-therapy", title: "音響療法の仕組み" },
        { id: "white-noise", title: "ホワイトノイズ" },
        { id: "brown-noise", title: "ブラウンノイズ" },
        { id: "nature-sounds", title: "自然音" },
        { id: "habituation", title: "順応：その秘密" },
        { id: "faq", title: "FAQ" },
      ]}
      relatedArticles={[]}
    >
      <ArticleSection id="what-is-sound-therapy" title="音響療法の仕組み">
        <p className="mt-4 leading-8 text-white/70">
          静寂と耳鳴りのコントラストを減らすニュートラルな背景音を提供します。
        </p>
      </ArticleSection>

      <ArticleSection id="white-noise" title="ホワイトノイズ">
        <p className="mt-4 leading-8 text-white/70">
          高音の耳鳴りをマスキングするのに優れています。
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="White Noise" 
          description=""
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="brown-noise" title="ブラウンノイズ">
        <p className="mt-4 leading-8 text-white/70">
          睡眠時に非常に心地よい、深みのあるノイズ。
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="自然音">
        <p className="mt-4 leading-8 text-white/70">
          雨や海の波は、自然に脳の気を散らします。
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Steady Rain" 
          description=""
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="habituation" title="順応：その秘密">
        <p className="mt-4 leading-8 text-white/70">
          長期的な目標は順応です。耳鳴りの音量より少し低く設定してください。
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
          >
            <Image
              src="/google-play-badge.png"
              alt="Download Calma App for Free"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="FAQ">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">耳鳴りに最適な音は何ですか？</h3>
            <p className="mt-2 leading-7 text-white/70">鋭い耳鳴りには高周波のホワイトノイズ、リラックスには自然音が最適です。</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">音響療法はどのように機能しますか？</h3>
            <p className="mt-2 leading-7 text-white/70">静寂と耳鳴りのコントラストを減らし、脳が順応するのを助けます。</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">耳鳴りを完全にマスキングするべきですか？</h3>
            <p className="mt-2 leading-7 text-white/70">いいえ、専門家は部分的なマスキングを推奨しています。</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
