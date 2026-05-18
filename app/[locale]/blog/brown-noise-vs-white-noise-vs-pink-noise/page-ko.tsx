import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "브라운 노이즈 vs 화이트 노이즈 vs 핑크 노이즈 | Calma 블로그",
  description:
    "화이트, 핑크, 브라운 노이즈의 차이점을 알아보세요. 수면, 집중, 또는 ADHD 관리에 가장 적합한 소리를 찾아보세요.",
  keywords: [
    "브라운 노이즈 vs 화이트 노이즈",
    "핑크 노이즈 vs 화이트 노이즈",
    "소음의 색상 설명",
    "집중에 좋은 소음",
    "ADHD를 위한 소음",
    "칼마 블로그",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "브라운 노이즈 vs 화이트 노이즈 vs 핑크 노이즈 | Calma 블로그",
    description:
      "화이트, 핑크, 브라운 노이즈의 차이점을 알아보세요. 수면, 집중, 또는 ADHD 관리에 가장 적합한 소리를 찾아보세요.",
    url: "https://www.calmasounds.com/ko/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "ko_KR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "브라운 노이즈 vs 화이트 노이즈 vs 핑크 노이즈 | Calma 블로그",
    description:
      "화이트, 핑크, 브라운 노이즈의 차이점을 알아보세요. 수면, 집중, 또는 ADHD 관리에 가장 적합한 소리를 찾아보세요.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "브라운 노이즈 vs 화이트 노이즈 vs 핑크 노이즈 vs 그린 노이즈",
  description:
    "그린 노이즈를 포함한 소음의 색상과 수면, 집중, 휴식을 위한 각각의 고유한 이점을 이해하기 위한 종합 가이드입니다.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/ko/blog/brown-noise-vs-white-noise-vs-pink-noise",
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/white-noise-app"
      topLinkLabel="백색소음 페이지 둘러보기"
      title="브라운 노이즈 vs 화이트 노이즈 vs 핑크 노이즈 vs 그린 노이즈"
      intro="모든 '백색소음'이 실제로 흰색인 것은 아닙니다. 오디오 세계에서 소리는 주파수 분포에 따라 '색상'으로 분류됩니다. 화이트, 핑크, 브라운, 그린 노이즈의 차이를 이해하면 더 나은 수면, 깊은 집중력 향상, 또는 ADHD 증상 관리를 위해 적절한 배경음을 선택하는 데 도움이 됩니다."
      ctaHref="/white-noise-app"
      ctaLabel="백색소음 앱 살펴보기"
      secondaryCtaHref="/sound-mixer-app"
      secondaryCtaLabel="사운드 믹서 앱 살펴보기"
      tableOfContents={[
        { id: "video", title: "비디오: 소음 색상 설명" },
        { id: "white-noise", title: "화이트 노이즈 (백색소음)" },
        { id: "pink-noise", title: "핑크 노이즈 (분홍색소음)" },
        { id: "brown-noise", title: "브라운 노이즈 (갈색소음)" },
        { id: "green-noise", title: "그린 노이즈 (초록색소음)" },
        { id: "summary", title: "어떤 것을 선택해야 할까요?" },
        { id: "comparison-table", title: "소음 색상 비교표" },
        { id: "faq", title: "자주 묻는 질문" },
      ]}
      relatedArticles={[
        {
          href: "/blog/white-noise-for-sleep",
          title: "수면을 위한 백색소음",
          description:
            "백색소음이 어떻게 더 빨리 잠들고 더 오래 수면을 유지하도록 돕는지 알아보세요.",
        },
        {
          href: "/blog/best-sounds-for-studying",
          title: "공부에 좋은 최고의 소리",
          description:
            "어떤 배경음이 집중력 향상에 가장 효과적인지 확인해 보세요.",
        },
      ]}
    >
      <ArticleSection id="video" title="시청: 소음의 색상 설명">
        <p className="mb-6">
          YouTube Shorts에서 빠른 가이드를 확인하여 차이점을 직접 들어보고 어떤 색상이 당신의 취향인지 확인해 보세요.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/4SXR34eNAmY"
                    title="소음의 색상: 화이트, 핑크, 브라운, 그린"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="화이트 노이즈: 다목적 소음">
        <p>
          화이트 노이즈(백색소음)는 모든 가청 주파수를 동일한 강도로 포함합니다. TV의 '치-' 소리나 라디오 주파수가 맞지 않을 때의 소리와 비슷합니다. 모든 주파수를 덮기 때문에 문 닫는 소리나 경적 소리 같은 갑작스러운 소음을 마스킹하는 데 매우 뛰어납니다.
        </p>
        <p className="mt-4">
          <strong>추천 상황:</strong> 주변 소음 마스킹, 영유아 수면 유도, 시끄러운 사무실의 중립적 배경음.
        </p>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="핑크 노이즈: 자연스러운 선택">
        <p>
          핑크 노이즈는 화이트 노이즈와 비슷하지만 저주파 에너지가 더 많습니다. 이는 순수 백색소음의 날카로움보다 더 부드럽고 균형 잡힌 소리를 만들어냅니다. 일정한 빗소리나 잎사귀 사이로 부는 바람 소리를 떠올려 보세요.
        </p>
        <p className="mt-4">
          <strong>추천 상황:</strong> 수면의 질 향상, 날카롭지 않은 휴식 사운드, 장시간 집중 유지.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="브라운 노이즈: 깊은 평온함">
        <p>
          브라운 노이즈(레드 노이즈라고도 함)는 핑크 노이즈보다 더 저주파 베이스에 집중합니다. 깊은 웅웅거림, 먼 폭포 소리, 또는 항공기 기내의 낮은 소음처럼 들립니다.
        </p>
        <p className="mt-4">
          최근 브라운 노이즈는 ADHD 커뮤니티에서 큰 인기를 얻고 있습니다. 많은 사람들이 이 깊고 몰입감 있는 품질이 고주파 사운드보다 복잡한 마음을 더 효과적으로 '진정'시킨다고 느낍니다.
        </p>
        <p className="mt-4">
          <strong>추천 상황:</strong> ADHD 관리, 깊은 집중력, 강도 높은 휴식, 고주파음이 거슬리는 분들.
        </p>
      </ArticleSection>

      <ArticleSection id="green-noise" title="그린 노이즈: 자연의 조화">
        <p>
          그린 노이즈는 종종 자연의 배경음으로 묘사됩니다. 숲속이나 조용한 개울가에서 들을 수 있는 것과 유사한 중간 주파수에 집중합니다.
        </p>
        <p className="mt-4">
          <strong>추천 상황:</strong> 평화로운 분위기 조성, 베이스가 너무 강하지 않은 휴식, 자연스러운 사운드스케이프를 선호하는 분들.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="어떤 것을 선택해야 할까요?">
        <p>
          가장 좋은 색상은 전적으로 개인의 취향입니다. 특정 소음을 차단해야 한다면 화이트 노이즈로 시작해 보시고, 화이트 노이즈가 너무 날카롭게 느껴진다면 핑크나 브라운 노이즈로 바꿔 보시는 것을 추천합니다.
        </p>
        <p className="mt-4">
          <strong>Calma</strong>와 함께라면 하나만 선택할 필요가 없습니다. 다양한 노이즈 층을 섞고 자연의 질감을 더해 당신의 뇌에 딱 맞는 나만의 사운드스케이프를 만들 수 있습니다.
        </p>
      </ArticleSection>
    
      <ArticleSection id="comparison-table" title="소음 색상 비교표">
        <div className="overflow-x-auto mt-6 rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">소음 색상</th>
                <th className="px-4 py-3 font-semibold">소리 특징</th>
                <th className="px-4 py-3 font-semibold">가장 좋은 용도</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-3 font-medium text-white">백색 소음</td>
                <td className="px-4 py-3">TV 잡음, 선풍기 소리</td>
                <td className="px-4 py-3">큰 소음 차단, 아기 수면</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">핑크 소음</td>
                <td className="px-4 py-3">일정한 비, 나뭇잎 소리</td>
                <td className="px-4 py-3">깊은 수면, 집중, 휴식</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">갈색 소음</td>
                <td className="px-4 py-3">먼 천둥, 폭우</td>
                <td className="px-4 py-3">ADHD 집중, 깊은 휴식, 공부</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">녹색 소음</td>
                <td className="px-4 py-3">숲, 잔잔한 개울</td>
                <td className="px-4 py-3">스트레스 완화, 명상</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="자주 묻는 질문">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">백색 소음이 수면에 도움이 됩니까?</h3>
            <p className="mt-2 leading-7 text-white/70">네, 백색 소음은 주변 소음을 차단하고 뇌를 이완시키는 일정한 오디오 환경을 제공하여 수면을 돕습니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">백색 소음과 핑크 소음의 차이는 무엇입니까?</h3>
            <p className="mt-2 leading-7 text-white/70">백색 소음은 모든 주파수를 포함하여 날카롭게 들립니다. 핑크 소음은 낮은 주파수를 강조하여 비처럼 더 부드럽게 들립니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">수면에는 갈색 소음과 백색 소음 중 어느 것이 더 좋습니까?</h3>
            <p className="mt-2 leading-7 text-white/70">많은 사람들에게 갈색 소음이 수면에 더 좋습니다. 깊고 낮은 주파수의 소리가 백색 소음보다 더 편안하고 귀에 덜 거슬리기 때문입니다.</p>
          </div>
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
                "name": "백색 소음이 수면에 도움이 됩니까?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "네, 백색 소음은 주변 소음을 차단하고 뇌를 이완시키는 일정한 오디오 환경을 제공하여 수면을 돕습니다."
                }
              },
              {
                "@type": "Question",
                "name": "백색 소음과 핑크 소음의 차이는 무엇입니까?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "백색 소음은 모든 주파수를 포함하여 날카롭게 들립니다. 핑크 소음은 낮은 주파수를 강조하여 비처럼 더 부드럽게 들립니다."
                }
              },
              {
                "@type": "Question",
                "name": "수면에는 갈색 소음과 백색 소음 중 어느 것이 더 좋습니까?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "많은 사람들에게 갈색 소음이 수면에 더 좋습니다. 깊고 낮은 주파수의 소리가 백색 소음보다 더 편안하고 귀에 덜 거슬리기 때문입니다."
                }
              }
            ]
          })
        }}
      />
    </ArticlePage>
  );
}
