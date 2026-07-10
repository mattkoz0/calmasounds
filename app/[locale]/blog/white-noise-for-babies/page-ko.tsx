import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "아기를 위한 백색 소음: 수면을 돕는 완벽 가이드 | Calma",
  description: "백색 소음과 핑크 소음이 아기 수면에 도움이 되는 이유와 안전한 사용 방법을 알아보세요.",
  keywords: [
    "white noise for babies",
    "baby sleep sounds",
    "pink noise for babies",
    "calma app",
    "sleep sounds app"
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/white-noise-for-babies",
  },
  openGraph: {
    title: "아기를 위한 백색 소음: 수면을 돕는 완벽 가이드 | Calma",
    description: "백색 소음과 핑크 소음이 아기 수면에 도움이 되는 이유와 안전한 사용 방법을 알아보세요.",
    url: "https://www.calmasounds.com/blog/white-noise-for-babies",
    siteName: "Calma",
    locale: "ko",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "아기를 위한 백색 소음: 수면 가이드",
  description: "백색 소음과 핑크 소음이 아기 수면에 도움이 되는 이유와 안전한 사용 방법을 알아보세요.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/blog/white-noise-for-babies",
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
};

export default function WhiteNoiseForBabiesPage() {
  return (
    <ArticlePage
      slug="white-noise-for-babies"
      jsonLd={articleJsonLd}
      topLinkHref="/baby-sleep-sounds-app"
      topLinkLabel="아기 수면 앱"
      title="아기를 위한 백색 소음: 수면 가이드"
      intro="백색 소음은 자궁의 친숙하고 시끄러운 환경을 모방하여 아기의 자연스러운 진정 반사를 유도합니다."
      ctaHref="/baby-sleep-sounds-app"
      ctaLabel="무료 앱 다운로드"
      secondaryCtaHref="/white-noise-app"
      secondaryCtaLabel="백색 소음 앱"
      tableOfContents={[
  {
    "id": "why-it-works",
    "title": "아기가 백색 소음을 좋아하는 이유"
  },
  {
    "id": "white-vs-pink",
    "title": "백색 소음 vs 핑크 소음"
  },
  {
    "id": "safety",
    "title": "안전 가이드라인"
  },
  {
    "id": "routine",
    "title": "수면 루틴 만들기"
  },
  {
    "id": "faq",
    "title": "자주 묻는 질문"
  }
]}
      relatedArticles={[
  {
    "href": "/ko/blog/white-noise-for-sleep",
    "title": "수면을 위한 백색 소음",
    "description": "수면의 질을 높이세요."
  },
  {
    "href": "/ko/blog/how-to-build-a-bedtime-routine",
    "title": "수면 루틴 만들기",
    "description": "좋은 수면 루틴."
  }
]}
    >
      <ArticleSection id="why-it-works" title="아기가 백색 소음을 좋아하는 이유">
        <p>자궁은 조용한 곳이 아닙니다. 백색 소음은 주변 소음을 차단하고 안정감을 줍니다.</p>
      </ArticleSection>

      <ArticleSection id="white-vs-pink" title="백색 소음 vs 핑크 소음">
        <p>핑크 소음은 더 깊고 부드러워 아기의 귀에 덜 거슬립니다.</p>
      </ArticleSection>

      <ArticleSection id="safety" title="안전 최우선: 볼륨 및 거리">
        <ul className="mt-4 list-disc pl-5 space-y-2"><li><strong>낮은 볼륨:</strong> 50데시벨을 초과하지 않도록.</li><li><strong>거리 유지:</strong> 아기 침대에서 최소 2m 떨어져.</li></ul>
      </ArticleSection>

      <ArticleSection id="routine" title="견고한 수면 루틴 만들기">
        <p><strong>Calma</strong> 앱을 사용하여 일관된 취침 시간을 만드세요.</p>
      </ArticleSection>

      <ArticleSection id="faq" title="자주 묻는 질문">
        <div className="mt-6 space-y-6">
          <div><h3 className="font-semibold text-lg text-emerald-400">밤새 백색 소음을 틀어놓는 것이 안전합니까?</h3><p className="mt-2 leading-7 text-white/70">네, 볼륨이 안전한 수준(약 50데시벨)이고 최소 2미터 떨어져 있다면 안전합니다.</p></div>
<div><h3 className="font-semibold text-lg text-emerald-400">아기에게 가장 좋은 소음은 무엇입니까?</h3><p className="mt-2 leading-7 text-white/70">많은 부모가 더 부드러운 핑크 소음을 선호합니다.</p></div>
<div><h3 className="font-semibold text-lg text-emerald-400">언제 백색 소음 사용을 중단해야 합니까?</h3><p className="mt-2 leading-7 text-white/70">엄격한 연령 제한은 없으며, 서서히 볼륨을 낮춰 중단할 수 있습니다.</p></div>
        </div>
      </ArticleSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
          {
                    "@type": "Question",
                    "name": "밤새 백색 소음을 틀어놓는 것이 안전합니까?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "네, 볼륨이 안전한 수준(약 50데시벨)이고 최소 2미터 떨어져 있다면 안전합니다."
                    }
          },
          {
                    "@type": "Question",
                    "name": "아기에게 가장 좋은 소음은 무엇입니까?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "많은 부모가 더 부드러운 핑크 소음을 선호합니다."
                    }
          },
          {
                    "@type": "Question",
                    "name": "언제 백색 소음 사용을 중단해야 합니까?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "엄격한 연령 제한은 없으며, 서서히 볼륨을 낮춰 중단할 수 있습니다."
                    }
          }
]
          })
        }}
      />
    </ArticlePage>
  );
}
