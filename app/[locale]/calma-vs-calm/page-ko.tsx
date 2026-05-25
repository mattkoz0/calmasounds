import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs Calm | 최고의 수면 소리 대안",
  description:
    "Calma와 Calm을 비교 중이신가요? Calm은 가이드 명상과 이야기에 좋습니다. 구독 없이 오프라인 수면 소리 믹서만 원한다면 Calma가 최고의 대안입니다.",
  keywords: [
    "calma vs calm",
    "calm 앱 대안",
    "구독 없는 calm",
    "calm 같은 수면 소리 믹서",
    "calm 앱보다 나은",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/calma-vs-calm",
  },
  openGraph: {
    title: "Calma vs Calm | 최고의 수면 소리 대안",
    description:
      "Calma와 Calm을 비교 중이신가요? Calm은 가이드 명상과 이야기에 좋습니다. 구독 없이 오프라인 수면 소리 믹서만 원한다면 Calma가 최고의 대안입니다.",
    url: "https://www.calmasounds.com/ko/calma-vs-calm",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs Calm | 최고의 수면 소리 대안",
    description:
      "Calma와 Calm을 비교 중이신가요? 구독 없는 오프라인 수면 소리를 위한 최고의 대안을 찾아보세요.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calma는 Calm 앱과 같은가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아니요, Calma와 Calm은 다른 앱입니다. Calm은 연간 구독을 통해 가이드 명상, 유명인의 수면 이야기 및 코스에 크게 중점을 둡니다. Calma는 평생 한 번 결제하여 오프라인 수면 소리 믹서로만 작동하는 데 중점을 둡니다.",
      },
    },
    {
      "@type": "Question",
      name: "구독 없는 최고의 Calm 앱 대안은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "수면 소리와 백색 소음을 위해 Calm을 사용한다면 Calma가 최고의 대안 중 하나입니다. Calma는 평생 한 번 결제를 제공하므로 값비싼 월간 또는 연간 구독 없이 프리미엄 수면 소리를 얻을 수 있습니다.",
      },
    }
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "홈",
      "item": "https://www.calmasounds.com/ko"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Calma vs Calm",
      "item": "https://www.calmasounds.com/ko/calma-vs-calm"
    }
  ]
};

export default function CalmaVsCalmPageKo() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AiDefinition 
        title="Calma와 Calm의 차이점은 무엇인가요?"
        description="Calm은 반복 구독 모델을 사용하여 가이드 명상 코스와 유명인의 수면 이야기에 중점을 둔 업계 최고의 앱입니다. Calma는 구독 대신 간단한 평생 한 번 결제로 오프라인 오디오 믹서, 백색 소음 및 빗소리를 제공하는 고도로 집중된 수면 소리 대안입니다."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          앱 비교
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs Calm: 나에게 맞는 것은 무엇일까요?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          두 앱 모두 긴장을 풀고 더 잘 수면을 취하도록 돕는 것을 목표로 하지만 접근 방식은 매우 다릅니다. 야간 루틴에 가장 적합한 것을 선택하는 데 도움이 되는 솔직하고 사실적인 비교입니다.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play 스토어에서 Calma 다운로드"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Calma 무료 체험
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">다음과 같다면 Calm을 선택하세요...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                광범위한 가이드 명상 코스를 원합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                유명 성우가 읽어주는 이야기를 들으며 잠드는 것을 좋아합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                지속적으로 업데이트되는 콘텐츠 라이브러리에 대해 연간 구독료를 지불하는 것을 꺼리지 않습니다.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">다음과 같다면 Calma를 선택하세요...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                주로 고품질의 수면 소리(비와 갈색 소음 등)를 믹스하고 싶습니다.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                구독을 싫어하고 단일, 평생 결제를 선호합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                100% 오프라인으로 작동하고 개인 정보를 존중하는 앱이 필요합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                맞춤형 사운드스케이프에만 초점을 맞춘 단순한 인터페이스를 원합니다.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma는 Calm 앱과 같은가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              아니요, Calma와 Calm은 다른 회사에서 만든 완전히 다른 앱입니다. Calm은 가이드 명상과 수면 이야기를 갖춘 광범위한 정신 건강 플랫폼입니다. Calma는 백색 소음과 자연의 소리에 대한 오프라인 제어를 제공하도록 설계된 전문 사운드 믹서입니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              구독 없는 최고의 Calm 대안은 무엇인가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              기본적인 수면 소리와 백색 소음을 위해 Calm을 사용한다면 Calma가 강력한 대안입니다. 변경함으로써 반복적인 수수료 지불을 중단하고 대신 프리미엄 오프라인 믹서에 대한 평생 잠금 해제를 얻을 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
