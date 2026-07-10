import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";

export const metadata: Metadata = {
  title: "브라운노이즈 vs 백색소음 vs 핑크노이즈 비교 | Calma 블로그",
  description:
    "백색소음, 핑크노이즈, 브라운노이즈의 차이점을 자세히 알아보세요. 수면, 집중, 그리고 ADHD 완화에 어떤 색상의 소음이 가장 적합한지 확인해 보세요.",
  keywords: [
    "브라운노이즈 vs 백색소음",
    "핑크노이즈 vs 백색소음",
    "그린노이즈 vs 백색소음",
    "집중에 가장 좋은 노이즈",
    "ADHD를 위한 소리",
    "소리 색상 차이",
    "칼마 블로그",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "브라운노이즈 vs 백색소음 vs 핑크노이즈 비교 | Calma 블로그",
    description:
      "백색소음, 핑크노이즈, 브라운노이즈의 차이점을 자세히 알아보세요. 수면, 집중, 그리고 ADHD 완화에 어떤 색상의 소음이 가장 적합한지 확인해 보세요.",
    url: "https://www.calmasounds.com/ko/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "ko_KR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "브라운노이즈 vs 백색소음 vs 핑크노이즈 비교 | Calma 블로그",
    description:
      "백색소음, 핑크노이즈, 브라운노이즈의 차이점을 상세히 비교 분석합니다.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "브라운소음 vs 백색소음 vs 핑크소음 vs 그린소음",
  description:
    "그린소음을 포함하여 각 소음 색상의 고유한 특징과 수면, 집중력 및 이완 효과를 알아보기 위한 가이드.",
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/ko/blog/brown-noise-vs-white-noise-vs-pink-noise",
  datePublished: "2026-04-13",
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/ko/white-noise-app"
      topLinkLabel="백색소음 페이지 둘러보기"
      title="브라운노이즈 vs 백색소음 vs 핑크노이즈 vs 그린노이즈"
      intro="우리가 흔히 말하는 '백색소음'이 모두 진짜 백색은 아닙니다. 음향학 분야에서는 소리의 주파수 분포에 따라 소리의 '색상'을 분류합니다. 백색, 핑크, 브라운, 그리고 그린노이즈의 과학적 차이점을 이해하면 숙면, 더 깊은 공부 집중, 혹은 ADHD 증상 제어를 위한 최적의 배경 소음을 찾을 수 있습니다."
      ctaHref="/ko/white-noise-app"
      ctaLabel="백색소음 앱 체험하기"
      secondaryCtaHref="/ko/sound-mixer-app"
      secondaryCtaLabel="사운드 믹서 앱 체험하기"
      tableOfContents={[
        { id: "video", title: "동영상: 소리의 색상별 특징 설명" },
        { id: "white-noise", title: "백색소음: 소음 차단의 만능 벽" },
        { id: "pink-noise", title: "핑크노이즈: 자연을 닮은 부드러운 선택" },
        { id: "brown-noise", title: "브라운노이즈: 낮고 묵직한 고요함" },
        { id: "green-noise", title: "그린노이즈: 심신을 달래는 자연의 조화" },
        { id: "adhd-noise", title: "ADHD 집중에는 어떤 소음 색상이 좋을까요?" },
        { id: "summary", title: "나에게 맞는 소리 색상 선택법" },
        { id: "comparison-table", title: "비교 표: 소리 색상(컬러 노이즈)별 특징" },
        { id: "faq", title: "자주 묻는 질문" },
      ]}
      relatedArticles={[
        {
          href: "/ko/blog/white-noise-for-sleep",
          title: "수면을 위한 백색소음",
          description:
            "백색소음이 어떻게 수면 중 돌발 소음을 효과적으로 차단하고 깊은 잠을 돕는지 알아보세요.",
        },
        {
          href: "/ko/blog/best-sounds-for-sleep",
          title: "숙면을 위한 최고의 소리",
          description:
            "핑크소음부터 파도 소리까지 내 수면 타입에 맞는 최고의 사운드를 찾아봅니다.",
        },
      ]}
    >
      <ArticleSection id="video" title="동영상: 소리의 색상별 특징 설명">
        <p className="mb-6">
          YouTube Shorts 가이드를 보며 각 노이즈 색상의 실제 청각적 차이를 직접 듣고 자신에게 맞는 스타일을 골라 보세요.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <YouTubeEmbed
                    videoId="MlJNs1K66xc"
                    title="소리의 색상: 백색소음, 핑크소음, 브라운소음, 그린소음"
                />
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="백색소음: 소음 차단의 만능 벽">
        <p className="mt-4 leading-8 text-white/70">
          백색소음(White Noise)은 사람이 들을 수 있는 모든 주파수 대역을 동일한 강도로 내는 소리입니다. TV 지지직 소리나 일정하게 쉬- 하는 소리와 비슷합니다. 모든 주파수를 고르게 덮어 주기 때문에 문이 쾅 닫히거나 자동차 경적 같은 갑작스러운 주변 방해 소음을 가리는 데 매우 뛰어납니다.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="백색소음 샘플" 
          description="모든 주파수 대역을 고르게 은폐해 주는 규칙적이고 일정한 백색소음입니다."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>가장 추천하는 분들:</strong> 생활 소음 차단을 원하는 분, 우는 아기를 재워야 하는 부모, 시끄러운 사무실의 중립적인 배경음이 필요한 분.
        </p>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="핑크노이즈: 자연을 닮은 부드러운 선택">
        <p className="mt-4 leading-8 text-white/70">
          핑크노이즈(Pink Noise)은 백색소음과 비슷하지만 저주파 음역대의 에너지가 더 강합니다. 덕분에 백색소음 특유의 귀를 찌르는 듯한 날카로움이 덜하고, 한층 더 부드럽고 균형 잡힌 느낌을 줍니다. 일정한 빗소리나 나뭇잎을 스치는 부드러운 바람 소리를 상상하시면 됩니다.
        </p>
        <AudioPlayer 
          src="/pink_noise.m4a" 
          title="핑크노이즈 샘플" 
          description="인간의 귀에 더욱 친숙하게 들리는 잔잔한 빗소리 형태의 소리입니다."
          colorClass="bg-pink-500/20 text-pink-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>가장 추천하는 분들:</strong> 수면의 질 개선이 필요하신 분, 백색소음의 기계적인 거친 소리가 싫으신 분, 장시간 집중을 유지하고 싶은 분.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="브라운노이즈: 낮고 묵직한 고요함">
        <p className="mt-4 leading-8 text-white/70">
          브라운노이즈(Brown Noise, 또는 Red Noise)는 핑크노이즈보다 한 발짝 더 나아가 저주파 베이스 음을 아주 두껍게 강조한 소리입니다. 깊게 낮게 깔리는 웅웅거림, 먼 폭포의 낙수음, 혹은 비행기 기내 소음과 비슷합니다.
        </p>
        <AudioPlayer 
          src="/brown_noise.m4a" 
          title="브라운노이즈 샘플" 
          description="머릿속의 잡념을 묻어 버리는 데 제격인 깊고 묵직한 저주파 소리입니다."
          colorClass="bg-orange-500/20 text-orange-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          최근 브라운노이즈는 ADHD(주의력결핍 과잉행동장애)가 있는 분들 사이에서 폭발적인 지지를 받고 있습니다. 저음의 아늑하고 몰입감 있는 주파수가 고음역대 소리보다 머릿속의 복잡한 생각들을 가라앉히는 데 훨씬 직관적인 도움을 주기 때문입니다.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>가장 추천하는 분들:</strong> ADHD 환자분들의 학업 및 업무 집중, 깊은 이완 및 스트레스 해소, 높은 피치 소리에 예민한 분.
        </p>
      </ArticleSection>

      <ArticleSection id="green-noise" title="그린노이즈: 심신을 달래는 자연의 조화">
        <p className="mt-4 leading-8 text-white/70">
          그린노이즈(Green Noise)는 자연의 순수한 배경음으로 묘사되곤 합니다. 숲속이나 조용한 계곡물 소리와 같이 중주파 대역에 집중하여 사운드를 냅니다. 백색소음만큼 거칠지 않고 브라운소음만큼 무겁지 않은, 아늑하고 쾌적한 중간 타협점을 제공합니다.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>가장 추천하는 분들:</strong> 마인드 컨트롤과 안정이 필요하신 분, 둔탁한 저음이 부담스러우신 분, 자연스러운 소리 풍경을 선호하는 분.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd-noise" title="ADHD 집중에는 어떤 소음 색상이 좋을까요?">
        <p className="mt-4 leading-8 text-white/70">
          집중이 힘든 분들이 자주 묻는 질문은 바로 <strong>ADHD에는 어떤 소음 색상이 제일 좋은가?</strong>입니다. 뇌마다 반응하는 패턴은 다르지만, 대다수가 <strong>브라운노이즈</strong>를 압도적 1위로 꼽습니다.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          브라운노이즈는 주파수가 낮고 백색소음의 쨍한 금속음이 배제되어 있어, 마치 머리에 얹어 둔 '두껍고 무거운 이불'처럼 질주하는 생각의 체인을 차분하게 잡아 줍니다. 뇌가 원하고 찾게 되는 불필요한 주의(감각 자극)를 충분히 상쇄해 주기 때문에, 전두엽이 외부 환경의 방해나 잡념에 흔들리지 않고 당장 마주한 태스크에 안착하게 유도합니다.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          만약 <em>ADHD를 위한 브라운소음과 백색소음의 효과</em>를 비교해 보고 싶다면, 집에서 공부나 컴퓨터 작업을 시작할 때 브라운노이즈를 먼저 청취해 보시기를 권장합니다.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="나에게 맞는 소리 색상 선택법">
        <p className="mt-4 leading-8 text-white/70">
          가장 탁월한 소리의 색깔은 100% 나에게 달려 있습니다. 특정한 날카로운 외부 소음을 강력하게 차단하고 싶다면 백색소음으로 시작하시되, '쉬-' 하는 소리가 거슬리거나 피로감이 느껴지신다면 핑크소음이나 브라운소음으로 바꾸어 시험해 보세요.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>Calma</strong>에서는 굳이 하나의 소리만 고집할 필요가 없습니다. 백색소음 위에 자연의 빗소리나 아늑한 바람 소리를 믹싱하여 내 뇌파에 딱 맞춰 반응하는 세상에 하나뿐인 나만의 사운드를 디자인할 수 있습니다.
        </p>
      </ArticleSection>
    
      <ArticleSection id="comparison-table" title="비교 표: 소리 색상(컬러 노이즈)별 특징">
        <div className="overflow-x-auto mt-6 rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">소음 색상</th>
                <th className="px-4 py-3 font-semibold">소리 특징</th>
                <th className="px-4 py-3 font-semibold">추천 용도</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-3 font-medium text-white">백색소음</td>
                <td className="px-4 py-3">라디오 잡음, TV 지직음, 팬 소리</td>
                <td className="px-4 py-3">돌발 소음 차단, 사무실 배경 소음, 아기 수면 유도</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">핑크노이즈</td>
                <td className="px-4 py-3">일정한 빗소리, 나뭇잎 스치는 바람</td>
                <td className="px-4 py-3">깊은 수면 유도, 꾸준한 집중, 긴장 완화</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">브라운노이즈</td>
                <td className="px-4 py-3">낮은 천둥 소리, 웅웅대는 폭포 소리</td>
                <td className="px-4 py-3">ADHD 마인드 컨트롤, 깊은 휴식, 공부 및 업무</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">그린노이즈</td>
                <td className="px-4 py-3">숲속의 공기음, 잔잔한 시냇물</td>
                <td className="px-4 py-3">스트레스 이완, 명상 및 요가, 자연음 매니아</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="자주 묻는 질문">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">백색소음이 정말 잠드는 데 도움이 되나요?</h3>
            <p className="mt-2 leading-7 text-white/70">네, 그렇습니다. 백색소음은 자동차 경적이나 층간 소음처럼 깊은 잠을 방해하는 갑작스러운 소음을 묻어 버리는 소음 마스킹 효과를 제공하고, 일정한 리듬을 통해 뇌에 '안전한 환경'임을 인지시켜 숙면을 유도합니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">백색소음과 핑크소음은 무엇이 다른가요?</h3>
            <p className="mt-2 leading-7 text-white/70">백색소음은 모든 주파수 강도가 똑같아 다소 거친 쉿 소리로 들립니다. 핑크소음은 상대적으로 저주파를 강조하여 내추럴하고 귀에 한층 부드러운 빗소리 같은 느낌을 줍니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">잠잘 때 브라운소음과 백색소음 중 어떤 것이 나을까요?</h3>
            <p className="mt-2 leading-7 text-white/70">많은 사용자들이 숙면 용도로는 브라운소음을 선호합니다. 낮고 웅웅거리는 묵직한 베이스 톤이 뇌파를 완만하게 자극하고 백색소음의 날카로운 톤보다 청각 피로감이 훨씬 덜하기 때문입니다.</p>
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
                "name": "백색소음이 정말 잠드는 데 도움이 되나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "네, 그렇습니다. 백색소음은 자동차 경적이나 층간 소음처럼 깊은 잠을 방해하는 갑작스러운 소음을 묻어 버리는 소음 마스킹 효과를 제공하고, 일정한 리듬을 통해 뇌에 '안전한 환경'임을 인지시켜 숙면을 유도합니다."
                }
              },
              {
                "@type": "Question",
                "name": "백색소음과 핑크소음은 무엇이 다른가요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "백색소음은 모든 주파수 강도가 똑같아 다소 거친 쉿 소리로 들립니다. 핑크소음은 상대적으로 저주파를 강조하여 내추럴하고 귀에 한층 부드러운 빗소리 같은 느낌을 줍니다."
                }
              },
              {
                "@type": "Question",
                "name": "잠잘 때 브라운소음과 백색소음 중 어떤 것이 나을까요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "많은 사용자들이 숙면 용도로는 브라운소음을 선호합니다. 낮고 웅웅거리는 묵직한 베이스 톤이 뇌파를 완만하게 자극하고 백색소음의 날카로운 톤보다 청각 피로감이 훨씬 덜하기 때문입니다."
                }
              }
            ]
          })
        }}
      />
      
      <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 font-bold text-xl">CT</div>
        <div>
          <p className="font-semibold text-white">Calma 팀 작성</p>
          <p className="text-sm text-white/60">더 조용하고 건강한 수면 습관 및 사운드 테라피 가이드를 제공하는 수면 위생 전문가 팀입니다.</p>
        </div>
      </div>
    </ArticlePage>
  );
}
