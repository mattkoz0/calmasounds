import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

const articleTitle = "수면을 위한 백색소음 (2026년 가이드) | Calma 블로그";
const articleDescription =
  "수면을 위한 백색소음이 어떻게 주변 소음을 차단하고, 깊은 잠을 유도하며, 아기의 빠른 입면을 돕는지 과학적 원리를 통해 알아보세요.";
const articleUrl = "https://www.calmasounds.com/ko/blog/white-noise-for-sleep";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "수면을 위한 백색소음",
    "백색소음 수면",
    "백색소음 밤",
    "수면 소리 백색소음",
    "does white noise help you sleep",
    "칼마 블로그",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "Calma",
    locale: "ko_KR",
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
  "@type": "Article",
  headline: "수면을 위한 백색소음: 사운드 마스킹의 과학",
  description: articleDescription,
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: articleUrl,
  datePublished: "2026-03-25",
  dateModified: new Date().toISOString().split('T')[0],
};

const relatedArticles = [
  {
    href: "/ko/blog/rain-sounds-vs-white-noise",
    title: "빗소리 vs 백색소음",
    description:
      "자연스러운 빗소리와 인위적인 백색소음이 지닌 정서적 편안함과 실질적인 차이점을 비교 분석합니다.",
  },
  {
    href: "/ko/blog/best-sounds-for-sleep",
    title: "숙면을 위한 최고의 소리",
    description:
      "핑크노이즈부터 파도 소리까지 다양한 수면 소리의 유형을 살펴보고 나에게 꼭 맞는 스타일을 찾아보세요.",
  },
];

export default function WhiteNoiseForSleepPage() {
  return (
    <ArticlePage
      slug="white-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/ko/white-noise-app"
      topLinkLabel="백색소음 앱 둘러보기"
      title="수면을 위한 백색소음: 실제로 숙면에 도움이 될까요?"
      intro="수면을 위해 백색소음을 듣는 것은 이제 전 세계적인 트렌드가 되었습니다. 소음이 많은 도시에 사는 현대인부터 밤새 우는 신생아를 달래려는 부모까지, 수백만 명의 사람들이 잠들기 위해 일정하게 쉿 하는 백색소음에 의존합니다. 그렇다면 백색소음은 실제로 어떻게 작용할까요? 정말 깊은 잠의 질을 개선하는 것일까요, 아니면 그저 옆 사람의 코골이를 차단해 주는 도구에 불과할까요?"
      ctaHref="/ko/white-noise-app"
      ctaLabel="백색소음 청취하기"
      secondaryCtaHref="/ko/blog/rain-sounds-vs-white-noise"
      secondaryCtaLabel="빗소리 vs 백색소음 읽기"
      tableOfContents={[
        { id: "what-is-it", title: "백색소음이란 정확히 무엇인가요?" },
        { id: "how-it-works", title: "사운드 마스킹이 수면을 개선하는 원리" },
        { id: "for-babies", title: "아기들이 백색소음을 좋아하는 이유" },
        { id: "best-practices", title: "백색소음을 안전하게 사용하는 법" },
        { id: "faq", title: "자주 묻는 질문 (FAQ)" },
      ]}
      relatedArticles={relatedArticles}
    >
      <ArticleSection id="what-is-it" title="백색소음이란 정확히 무엇인가요?">
        <p className="mt-4 leading-8 text-white/70">
          물리학에서 백색소음(White Noise)은 인간의 가청 주파수 대역(20Hz ~ 20,000Hz) 전체에 해당하는 모든 주파수를 동일한 강도로 동시에 재생하는 소리를 뜻합니다. 모든 주파수가 균일하게 포함되어 있기 때문에, 신호가 없는 TV의 지직거리는 소리, 주파수가 맞지 않는 라디오, 혹은 웅웅거리는 선풍기 소리와 유사한 일정하게 '쉿-' 하는 소리로 들리게 됩니다.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="순수 백색소음" 
          description="일정하고 균일한 주파수 스펙트럼의 백색소음입니다."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          이름에 '백색(White)'이 붙은 이유는 모든 가시광선 파장이 결합되어 만들어지는 '백색광'에서 유래했습니다. 빛과 동일한 원리로, 모든 음향적 '색상'이 결합된 소리가 바로 백색소음입니다.
        </p>
      </ArticleSection>

      <ArticleSection id="how-it-works" title="사운드 마스킹이 수면을 개선하는 원리">
        <p className="mt-4 leading-8 text-white/70">
          백색소음은 단순히 큰 소리로 다른 소리를 덮어버리는 것이 아닙니다. 이는 <strong>사운드 마스킹(Sound Masking, 소음 차단 효과)</strong>이라는 청각적 현상을 통해 기능합니다. 우리가 깊이 잠들어 있을 때도 뇌는 주변의 위험을 경계하기 위해 청각 정보를 계속해서 처리합니다. 잠에서 깨어나는 원인은 단순히 소리의 크기(문이 쾅 닫히는 소리 등) 때문이 아니라, 정적 속에서 발생하는 '갑작스러운 소리의 변화'입니다.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          백색소음은 모든 주파수를 머금고 있어 주변의 미세한 빈틈(무음 영역)을 가득 채워 줍니다. 평상시의 배경 소음 기준선을 일정 수준 올려 둠으로써 도로 소음, 개 짖는 소리, 혹은 파트너의 코골이 같은 돌발적인 소음이 배경에 자연스럽게 묻히도록 만듭니다. 결과적으로 뇌가 돌발 소음에 깨어나는 각성 반응을 일으키지 않게 하여 가장 깊고 편안한 피로 회복 단계를 유지하도록 돕습니다.
        </p>
      </ArticleSection>

      <ArticleSection id="for-babies" title="아기들이 백색소음을 좋아하는 이유">
        <p className="mt-4 leading-8 text-white/70">
          만약 울음을 그치지 않는 신생아를 재우려 해본 적이 있다면, 거칠게 '쉬-' 하고 내는 소리의 놀라운 힘을 경험해 보셨을 것입니다. 백색소음이 영아들에게 유독 큰 효과를 발휘하는 이유는 엄마의 뱃속 음향 환경과 매우 유사하기 때문입니다.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          태아는 뱃속에서 엄마의 심장박동과 혈관을 흐르는 혈류의 지속적이고 꽤 큰 소리를 매일 들으며 성장합니다. 이 소리는 저주파가 강조된 묵직한 백색소음이나 브라운노이즈와 매우 흡사합니다. 아기방에 백색소음을 틀어 주는 것은 아기에게 익숙하고 안전한 환경에 있음을 상기시켜 뇌의 안정 반사를 즉각적으로 유도합니다.
        </p>
      </ArticleSection>

      <ArticleSection id="best-practices" title="백색소음을 안전하게 사용하는 법">
        <p className="mt-4 leading-8 text-white/70">
          백색소음은 훌륭한 도구이지만, 청각 피로를 예방하고 소리 없이 잠들지 못하는 과도한 의존을 방지하려면 올바르게 사용해야 합니다:
        </p>
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li><strong>안전한 볼륨 준수하기:</strong> 소리가 너무 도드라지지 않고 잔잔한 배경음으로 느껴져야 합니다. 볼륨은 50~60데시벨 이하(낮은 속삭임이나 샤워기에서 물이 흘러내리는 소리 정도)로 유지하세요.</li>
          <li><strong>적절한 거리 배치하기:</strong> 스마트폰이나 백색소음 기기를 아기나 본인의 머리맡에 바로 밀착해 두어서는 안 됩니다. 최소 2미터 이상 떨어진 방 건너편에 기기를 배치하는 것이 바람직합니다.</li>
          <li><strong>다양한 노이즈 색상 테스트하기:</strong> 순수한 백색소음이 너무 날카롭고 시끄럽게 느껴진다면, 주파수가 조금 더 낮고 부드러운 핑크소음(빗소리)나 한층 깊고 아늑한 브라운소음(묵직한 폭포 소리)을 사용해 보세요.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="faq" title="자주 묻는 질문 (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">백색소음을 들으며 자는 버릇도 중독이 되나요?</h3>
            <p className="mt-2 leading-7 text-white/70">신체적인 중독 현상은 일어나지 않지만, 심리적으로 강력한 습관이 될 수 있습니다. 뇌가 특정 소리를 수면의 신호로 인식하기 때문입니다(클래식 조건화). 사용을 멈추고 싶다면 갑자기 끄기보다 몇 주에 걸쳐 볼륨을 점진적으로 줄여 나가는 방식이 가장 좋습니다.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">잠잘 때는 백색소음과 핑크소음 중 무엇이 더 효과적인가요?</h3>
            <p className="mt-2 leading-7 text-white/70">많은 연구에서 주파수 밸런스가 사람의 귀에 한층 부드러운 핑크소음(잔잔한 빗소리 등)이 깊은 서파 수면의 질을 유도하는 데 더 유리하다고 지적합니다. 그러나 갑작스럽게 들리는 날카롭고 찢어지는 듯한 고주파 돌발 소음을 완벽히 차단하는 능력은 일반적인 백색소음이 더 뛰어납니다.</p>
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
                "name": "백색소음을 들으며 자는 버릇도 중독이 되나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "신체적인 중독 현상은 일어나지 않지만, 심리적으로 강력한 습관이 될 수 있습니다. 뇌가 특정 소리를 수면의 신호로 인식하기 때문입니다. 사용을 멈추고 싶다면 갑자기 끄기보다 몇 주에 걸쳐 볼륨을 점진적으로 줄여 나가는 방식이 가장 좋습니다."
                }
              },
              {
                "@type": "Question",
                "name": "잠잘 때는 백색소음과 핑크소음 중 무엇이 더 효과적인가요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "많은 연구에서 주파수 밸런스가 사람의 귀에 한층 부드러운 핑크소음이 깊은 서파 수면의 질을 유도하는 데 더 유리하다고 지적합니다. 그러나 갑작스럽게 들리는 날카롭고 찢어지는 듯한 고주파 돌발 소음을 완벽히 차단하는 능력은 일반적인 백색소음이 더 뛰어납니다."
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
          <p className="text-sm text-white/60">과학적으로 증명된 건강한 수면 루틴과 사운드 요법을 연구하는 수면 위생 가이드 전문가 팀입니다.</p>
        </div>
      </div>
    </ArticlePage>
  );
}
