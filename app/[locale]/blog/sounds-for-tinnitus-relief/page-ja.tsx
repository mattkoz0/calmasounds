import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "耳鳴り緩和に最適な音 | Calma Blog",
  description: "音響療法が耳鳴りの緩和にどのように役立つかをご紹介します。",
  keywords: ["耳鳴り 音", "耳鳴り 緩和", "ホワイトノイズ 耳鳴り"],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
  },
  openGraph: {
    title: "耳鳴り緩和に最適な音 | Calma Blog",
    description: "音響療法が耳鳴りの緩和にどのように役立つかをご紹介します。",
    url: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
    siteName: "Calma",
    locale: "ja",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "耳鳴り緩和に最適な音",
  description: "音響療法が耳鳴りの緩和にどのように役立つかをご紹介します。",
  author: { "@type": "Organization", name: "Calma" },
  publisher: { "@type": "Organization", name: "Calma" },
  mainEntityOfPage: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
};

export default function SoundsForTinnitusReliefPage() {
  return (
    <ArticlePage
      slug="sounds-for-tinnitus-relief"
      jsonLd={articleJsonLd}
      topLinkHref="/tinnitus-sounds-app"
      topLinkLabel="耳鳴りアプリを見る"
      title="耳鳴り緩和に最適な音"
      intro="耳鳴りと共に生活するのは困難です。音響療法は、耳鳴りを管理する最も効果的な方法の一つです。"
      ctaHref="/tinnitus-sounds-app"
      ctaLabel="耳鳴りアプリを見る"
      secondaryCtaHref="/blog/white-noise-for-sleep"
      secondaryCtaLabel="Read about white noise"
      relatedArticles={[
        {
          href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
          title: "Noise Colors Explained",
          description: "Explore differences between white, pink, brown noises."
        }
      ]}
    >
      <ArticleSection title="ホワイトノイズ">
        <p className="mt-4 leading-8 text-white/70">高音の耳鳴りをマスキングするのに最適です。</p>
      </ArticleSection>
      <ArticleSection title="ブラウンノイズ">
        <p className="mt-4 leading-8 text-white/70">より深い音で、睡眠時にリラックスできます。</p>
      </ArticleSection>
      <ArticleSection title="自然の音">
        <p className="mt-4 leading-8 text-white/70">雨や波の音は、自然に注意をそらしてくれます。</p>
      </ArticleSection>
      <ArticleSection title="ピンクノイズ">
        <p className="mt-4 leading-8 text-white/70">聴覚専門家によってよく推奨されるバランスの取れた音です。</p>
      </ArticleSection>
      <ArticleSection title="音響療法の使い方">
        <p className="mt-4 leading-8 text-white/70">耳鳴りの音量より少し低めに設定してください。</p>
      </ArticleSection>
    </ArticlePage>
  );
}
