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
      "dateModified": new Date().toISOString().split('T')[0],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "이명에 가장 좋은 소리는 무엇입니까?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "날카로운 울림에는 백색소음, 휴식에는 자연의 소리가 좋습니다."
          }
        },
        {
          "@type": "Question",
          "name": "소리 치료는 어떻게 작용합니까?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "침묵과 이명 사이의 대비를 줄여 뇌가 순응하도록 돕습니다."
          }
        },
        {
          "@type": "Question",
          "name": "이명을 완전히 마스킹해야 합니까?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "아니요, 전문가들은 부분적인 마스킹을 권장합니다."
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
      intro="소리 치료는 이명을 관리하는 가장 효과적인 방법 중 하나입니다. 배경 소음을 도입하여 이명을 마스킹하고 뇌가 이를 무시하도록 훈련시킬 수 있습니다."
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
            <p className="mt-2 leading-7 text-white/70">날카로운 울림에는 백색소음, 휴식에는 자연의 소리가 좋습니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">소리 치료는 어떻게 작용합니까?</h3>
            <p className="mt-2 leading-7 text-white/70">침묵과 이명 사이의 대비를 줄여 뇌가 순응하도록 돕습니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">이명을 완전히 마스킹해야 합니까?</h3>
            <p className="mt-2 leading-7 text-white/70">아니요, 전문가들은 부분적인 마스킹을 권장합니다.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
