import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "이명 완화 및 소리 치료를 위한 최고의 소리 | Calma";
const articleDescription = "소리 치료와 백색소음이 이명을 완화하는 방법을 알아보세요. 이명을 마스킹하고 순응하는 방법을 배웁니다.";
const articleUrl = "https://www.calmasounds.com/ko/blog/sounds-for-tinnitus-relief";

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
    locale: "ko",
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
      "headline": "이명 완화를 위한 최고의 소리: 소리 치료 가이드",
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
          "name": "이명에 가장 좋은 소리는 무엇입니까?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "선호는 개인마다 다릅니다. 낮은 볼륨의 화이트 노이즈, 빗소리 또는 다른 부드러운 배경음을 시도하세요."
          }
        },
        {
          "@type": "Question",
          "name": "소리 치료는 어떻게 작용합니까?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "일부 사람에게 대비를 줄이거나 주의를 돌리고 순응을 도울 수 있지만 결과는 다릅니다."
          }
        },
        {
          "@type": "Question",
          "name": "이명을 완전히 마스킹해야 합니까?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "모두에게 맞는 하나의 수준은 없습니다. 큰 소리로 덮지 말고 필요하면 청각 전문가와 상담하세요."
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
      topLinkHref="/ko/tinnitus-sounds-app"
      topLinkLabel="무료 이명 앱 다운로드"
      title="이명 완화를 위한 최고의 소리: 소리 치료 가이드"
      intro="이명은 조용한 곳에서 더 크게 느껴질 수 있습니다. 낮은 배경음이 일부 사람에게 마스킹, 주의 전환 또는 순응을 도울 수 있지만 치료법은 아니며 반응은 개인마다 다릅니다."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="무료 이명 앱 다운로드"
      secondaryCtaHref="/ko/tinnitus-sounds-app"
      secondaryCtaLabel="앱에 대해 더 알아보기"
      tableOfContents={[
        { id: "what-is-sound-therapy", title: "소리 치료의 원리" },
        { id: "white-noise", title: "백색소음" },
        { id: "brown-noise", title: "브라운 노이즈" },
        { id: "nature-sounds", title: "자연의 소리" },
        { id: "habituation", title: "순응: 그 비밀" },
        { id: "faq", title: "FAQ" },
      ]}
      relatedArticles={[]}
    >
      <ArticleSection id="what-is-sound-therapy" title="소리 치료의 원리">
        <p className="mt-4 leading-8 text-white/70">
          침묵과 이명 사이의 대비를 줄이는 중립적인 배경 소리를 제공합니다.
        </p>
      </ArticleSection>

      <ArticleSection id="white-noise" title="백색소음">
        <p className="mt-4 leading-8 text-white/70">
          고음의 이명을 마스킹하는 데 탁월합니다.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="White Noise" 
          description=""
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="brown-noise" title="브라운 노이즈">
        <p className="mt-4 leading-8 text-white/70">
          수면을 취할 때 매우 편안한 깊은 소음입니다.
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="자연의 소리">
        <p className="mt-4 leading-8 text-white/70">
          비와 바다의 파도는 뇌를 자연스럽게 분산시킵니다.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Steady Rain" 
          description=""
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="habituation" title="순응: 그 비밀">
        <p className="mt-4 leading-8 text-white/70">
          장기적인 목표는 순응입니다. 이명 소리보다 약간 낮게 볼륨을 설정하십시오.
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
            <h3 className="font-semibold text-lg text-emerald-400">이명에 가장 좋은 소리는 무엇입니까?</h3>
            <p className="mt-2 leading-7 text-white/70">선호는 개인마다 다릅니다. 낮은 볼륨의 화이트 노이즈, 빗소리 또는 다른 부드러운 배경음을 시도하세요.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">소리 치료는 어떻게 작용합니까?</h3>
            <p className="mt-2 leading-7 text-white/70">일부 사람에게 대비를 줄이거나 주의를 돌리고 순응을 도울 수 있지만 결과는 다릅니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">이명을 완전히 마스킹해야 합니까?</h3>
            <p className="mt-2 leading-7 text-white/70">모두에게 맞는 하나의 수준은 없습니다. 큰 소리로 덮지 말고 필요하면 청각 전문가와 상담하세요.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
