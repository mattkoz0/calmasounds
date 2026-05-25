import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs BetterSleep | 최고의 수면 소리 대안",
  description:
    "Calma와 BetterSleep을 비교 중이신가요? BetterSleep은 수면 추적 및 이야기를 제공합니다. 구독 없이 간단한 오프라인 수면 소리 믹서만 원한다면 Calma가 최고의 대안입니다.",
  keywords: [
    "calma vs bettersleep",
    "bettersleep 앱 대안",
    "구독 없는 bettersleep",
    "bettersleep 같은 수면 소리 믹서",
    "relax melodies 대안",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/calma-vs-bettersleep",
  },
  openGraph: {
    title: "Calma vs BetterSleep | 최고의 수면 소리 대안",
    description:
      "Calma와 BetterSleep을 비교 중이신가요? BetterSleep은 수면 추적 및 이야기를 제공합니다. 구독 없이 간단한 오프라인 수면 소리 믹서만 원한다면 Calma가 최고의 대안입니다.",
    url: "https://www.calmasounds.com/ko/calma-vs-bettersleep",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs BetterSleep | 최고의 수면 소리 대안",
    description:
      "Calma와 BetterSleep을 비교 중이신가요? 구독 없는 오프라인 수면 소리를 위한 최고의 대안을 찾아보세요.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calma는 BetterSleep과 같은가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아니요, Calma와 BetterSleep은 다른 앱입니다. BetterSleep은 수면 추적, 광범위한 이야기 라이브러리 및 연간 구독 모델에 중점을 둡니다. Calma는 평생 한 번 결제하여 오프라인 수면 소리 믹서로만 작동하는 데 중점을 둡니다.",
      },
    },
    {
      "@type": "Question",
      name: "구독 없는 최고의 BetterSleep 앱 대안은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "사운드 믹서를 위해 BetterSleep(이전 Relax Melodies)만 사용한다면 Calma가 최고의 대안 중 하나입니다. Calma는 평생 한 번 결제를 제공하므로 값비싼 월간 또는 연간 구독 없이 프리미엄 수면 소리 믹서를 얻을 수 있습니다.",
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
      "name": "Calma vs BetterSleep",
      "item": "https://www.calmasounds.com/ko/calma-vs-bettersleep"
    }
  ]
};

export default function CalmaVsBetterSleepPageKo() {
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
        title="Calma와 BetterSleep의 차이점은 무엇인가요?"
        description="BetterSleep은 구독 모델을 기반으로 수면 추적, 수면 프로필 및 이야기를 제공하는 기능이 풍부한 앱입니다. Calma는 아름답게 디자인된 오프라인 오디오 믹서, 백색 소음 및 빗소리를 평생 한 번 결제로 제공하는 더 단순하고 집중된 대안입니다."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          앱 비교
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs BetterSleep: 나에게 맞는 것은 무엇일까요?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          두 앱 모두 더 나은 수면을 위해 소리를 혼합할 수 있지만, 서로 다른 요구 사항을 충족합니다. 최선의 선택을 하는 데 도움이 되는 사실적인 비교입니다.
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
            <h2 className="text-2xl font-semibold text-white">다음과 같다면 BetterSleep을 선택하세요...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                수면 단계와 코골이를 적극적으로 추적하고 싶습니다.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                지속적으로 업데이트되는 방대한 취침 시간 이야기 라이브러리를 갖는 것을 좋아합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                프리미엄 기능에 대한 액세스를 유지하기 위해 연간 구독료를 지불하는 데 익숙합니다.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">다음과 같다면 Calma를 선택하세요...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                주로 어수선함 없이 나만의 수면 소리(비, 바람, 갈색 소음 등)를 믹스하고 싶습니다.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                구독을 싫어하고 평생 액세스를 위한 단일 결제를 선호합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                100% 오프라인으로 작동하고 계정이 필요 없는 개인 정보 보호 우선 앱이 필요합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                미니멀하고 주의를 산만하게 하지 않는 인터페이스를 선호합니다.
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
              Calma는 BetterSleep 앱과 같은가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              아니요, Calma와 BetterSleep(이전 Relax Melodies)은 다른 회사에서 만든 완전히 다른 앱입니다. BetterSleep은 수면 추적기 및 콘텐츠 플랫폼입니다. Calma는 수면을 추적하지 않고 백색 소음과 자연의 소리에 대한 오프라인 제어를 제공하도록 설계된 전문 사운드 믹서입니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              구독 없는 최고의 BetterSleep 대안은 무엇인가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              사운드 믹서를 위해 BetterSleep을 사용하고 수면 추적이나 이야기를 사용하지 않는다면 Calma가 완벽한 대안입니다. 변경함으로써 반복적인 수수료 지불을 중단하고 프리미엄 오프라인 사운드스케이프 믹서에 대한 평생 잠금 해제를 얻을 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
