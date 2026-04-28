import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";

export const metadata: Metadata = {
  title: "취침 루틴을 만드는 법 | Calma 블로그",
  description:
    "차분하고 현실적이며 반복하기 쉬운 취침 루틴을 만드는 방법을 알아보세요.",
  keywords: [
    "취침 루틴 만드는 법",
    "저녁 루틴",
    "수면 팁",
    "더 나은 취침 루틴",
    "차분한 저녁 리듬",
    "칼마 블로그",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/blog/how-to-build-a-bedtime-routine",
  },
  openGraph: {
    title: "취침 루틴을 만드는 법 | Calma 블로그",
    description:
      "차분하고 현실적이며 반복하기 쉬운 취침 루틴을 만드는 방법을 알아보세요.",
    url: "https://www.calmasounds.com/ko/blog/how-to-build-a-bedtime-routine",
    siteName: "Calma",
    locale: "ko_KR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "취침 루틴을 만드는 법 | Calma 블로그",
    description:
      "차분하고 현실적이며 반복하기 쉬운 취침 루틴을 만드는 방법을 알아보세요.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "취침 루틴을 만드는 법",
  description:
    "차분하고 현실적이며 반복하기 쉬운 취침 루틴을 만드는 방법을 알아보세요.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage:
    "https://www.calmasounds.com/ko/blog/how-to-build-a-bedtime-routine",
  datePublished: "2026-03-25",
  dateModified: "2026-03-30",
};

export default function BedtimeRoutineArticlePage() {
  return (
    <ArticlePage
      slug="how-to-build-a-bedtime-routine"
      jsonLd={articleJsonLd}
      title="실제로 차분함을 주는 취침 루틴을 만드는 방법"
      intro="좋은 취침 루틴은 복잡하거나 완벽할 필요가 없습니다. 가장 중요한 것은 그것이 현실적이고, 반복 가능하며, 몸과 마음이 하루의 긴장에서 벗어날 수 있을 만큼 충분히 차분하게 느껴져야 한다는 것입니다. 단 한 번만 따라 하는 거창한 루틴보다 작고 꾸준한 신호들이 더 효과적으로 작용합니다."
      topLinkHref="/sleep-sounds-app"
      topLinkLabel="수면 페이지 둘러보기"
      ctaHref="/sleep-sounds-app"
      ctaLabel="수면 유도 소리 앱 살펴보기"
      secondaryCtaHref="/blog/best-sounds-for-sleep"
      secondaryCtaLabel="숙면을 위한 최고의 소리 읽기"
      ctaTitle="Calma와 함께 취침 루틴을 만들어보세요"
      ctaText="Calma는 개인화된 수면 사운드스케이프, 차분한 오디오, 그리고 평화로운 저녁 분위기를 통해 당신이 더 부드러운 취침 루틴을 만들 수 있도록 돕습니다."
      relatedArticles={[
        {
          href: "/blog/best-sounds-for-sleep",
          title: "숙면을 위한 최고의 소리",
          description:
            "어떤 수면 소리 스타일이 사람마다 휴식과 이완에 어떻게 도움이 되는지 살펴보세요.",
        },
        {
          href: "/blog/white-noise-for-sleep",
          title: "수면을 위한 백색소음",
          description:
            "백색소음이 언제 더 차분한 취침 환경을 만드는 데 도움이 되는지 알아보세요.",
        },
      ]}
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">생각보다 일찍 시작하세요</h2>
        <p className="mt-4 leading-8 text-white/70">
          취침 루틴은 머리가 베개에 닿는 순간 시작되는 것이 아닙니다. 그것은 저녁을 마무리하는 방식에서 시작됩니다. 
          잠들기 전 아주 짧은 전이 시간만으로도 신경계가 더 차분한 모드로 전환되는 데 도움이 될 수 있습니다.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">자극을 점진적으로 줄이세요</h2>
        <p className="mt-4 leading-8 text-white/70">
          목표는 단 1초 만에 침묵을 만드는 것이 아니라 자극을 부드럽게 낮추는 것입니다. 
          더욱 은은한 조명, 줄어든 정신적 입력, 그리고 더 차분한 오디오가 모두 수면으로의 자연스러운 
          전이를 도울 수 있습니다.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">일관된 신호를 사용하세요</h2>
        <p className="mt-4 leading-8 text-white/70">
          반복이 중요합니다. 저녁마다 동일한 차분한 신호가 반복되면, 당신의 뇌는 이를 수면 과정의 일부로 인식하기 
          시작합니다. 이는 매일 밤 똑같은 사운드스케이프, 똑같은 활동 순서, 혹은 똑같은 작은 리추얼이 될 수 있습니다.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">루틴을 단순하게 유지하세요</h2>
        <p className="mt-4 leading-8 text-white/70">
          최고의 취침 루틴은 당신이 실제로 반복할 수 있는 루틴입니다. 두세 가지의 차분한 단계로 구성된 
          루틴이 숙제처럼 느껴지는 복잡한 과정보다 종종 더 강력한 힘을 발휘합니다.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">소리는 분위기를 형성하는 데 도움이 됩니다</h2>
        <p className="mt-4 leading-8 text-white/70">
          차분한 오디오는 취침 시간을 더욱 의도적으로 느끼게 해줍니다. 어떤 사람들은 빗소리에 가장 잘 반응하고, 
          다른 사람들은 백색소음을 선호하며, 또 다른 사람들은 부드러운 앰비언트 사운드스케이프를 좋아합니다. 
          중요한 것은 하나의 정답을 강요하는 것이 아니라 당신이 정서적으로 안전하고 조용함을 느낄 수 있는 
          환경을 만드는 것입니다.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">심플한 루틴의 예시</h2>
        <ul className="mt-4 space-y-3 text-white/70">
          <li>• 조명을 어둡게 하고 능동적인 입력을 줄입니다.</li>
          <li>• 하나의 차분한 사운드스케이프나 수면 오디오 믹스를 선택합니다.</li>
          <li>• 매일 저녁 동일한 작은 단계들을 반복합니다.</li>
          <li>• 소리를 지극히 완벽하게 하려 하기보다 부드러운 톤을 유지하세요.</li>
        </ul>
      </section>
    </ArticlePage>
  );
}
