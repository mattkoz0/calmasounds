import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "이명 완화를 위한 최고의 소리 | Calma Blog",
  description: "소리 치료가 이명 완화에 어떻게 도움이 되는지 알아보세요.",
  keywords: ["이명 소리", "이명 완화", "백색 소음 이명"],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
  },
  openGraph: {
    title: "이명 완화를 위한 최고의 소리 | Calma Blog",
    description: "소리 치료가 이명 완화에 어떻게 도움이 되는지 알아보세요.",
    url: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
    siteName: "Calma",
    locale: "ko",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "이명 완화를 위한 최고의 소리",
  description: "소리 치료가 이명 완화에 어떻게 도움이 되는지 알아보세요.",
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
      topLinkLabel="이명 소리 앱 둘러보기"
      title="이명 완화를 위한 최고의 소리"
      intro="이명과 함께 사는 것은 쉽지 않습니다. 소리 치료는 이명을 관리하는 가장 효과적인 방법 중 하나입니다."
      ctaHref="/tinnitus-sounds-app"
      ctaLabel="이명 소리 앱 둘러보기"
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
      <ArticleSection title="백색 소음">
        <p className="mt-4 leading-8 text-white/70">고음의 이명을 가리는 데 아주 효과적입니다.</p>
      </ArticleSection>
      <ArticleSection title="갈색 소음">
        <p className="mt-4 leading-8 text-white/70">더 깊은 소리로 수면 시 편안함을 줍니다.</p>
      </ArticleSection>
      <ArticleSection title="자연의 소리">
        <p className="mt-4 leading-8 text-white/70">빗소리나 파도 소리는 자연스럽게 주의를 분산시킵니다.</p>
      </ArticleSection>
      <ArticleSection title="핑크 노이즈">
        <p className="mt-4 leading-8 text-white/70">청각 전문가들이 자주 추천하는 균형 잡힌 소리입니다.</p>
      </ArticleSection>
      <ArticleSection title="소리 치료 사용법">
        <p className="mt-4 leading-8 text-white/70">이명 소리보다 약간 낮게 볼륨을 설정하세요.</p>
      </ArticleSection>
    </ArticlePage>
  );
}
