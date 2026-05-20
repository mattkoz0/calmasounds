import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "구독 없는 최고의 수면 소리 앱 | Calma",
  description:
    "비싼 구독료 없는 수면 소리 앱을 찾고 계신가요? Calma는 맞춤형 수면 소리와 백색소음을 한 번의 결제로 평생 제공합니다.",
  keywords: [
    "구독 없는 수면 소리 앱",
    "구독 없는 수면 앱",
    "단일 결제 수면 앱",
    "무료 수면 소리 앱",
    "평생 잠금 해제 수면 앱",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/best-sleep-sounds-app-without-subscription",
  },
  openGraph: {
    title: "구독 없는 최고의 수면 소리 앱 | Calma",
    description:
      "비싼 구독료 없는 수면 소리 앱을 찾고 계신가요? Calma는 맞춤형 수면 소리와 백색소음을 한 번의 결제로 평생 제공합니다.",
    url: "https://www.calmasounds.com/ko/best-sleep-sounds-app-without-subscription",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "구독 없는 최고의 수면 소리 앱 | Calma",
    description:
      "비싼 구독료 없는 수면 소리 앱을 찾고 계신가요? Calma는 맞춤형 수면 소리를 한 번의 결제로 평생 제공합니다.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "구독이 없는 수면 앱이 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, Calma는 구독이 필요 없는 프리미엄 수면 소리 앱입니다. 무료 버전과 전체 액세스를 위한 한 번의 평생 잠금 해제 결제를 제공합니다.",
      },
    },
    {
      "@type": "Question",
      name: "월 사용료를 내는 수면 앱이 그만한 가치가 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "많은 수면 앱이 높은 월별 또는 연간 요금을 청구합니다. Calma를 사용하면 평생 액세스를 위해 단 한 번의 결제만으로 반복되는 요금을 피할 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "Calma는 오프라인에서 작동하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, Calma는 완전히 오프라인에서 작동하므로 여행 중이거나 밤에 Wi-Fi를 끄고 싶을 때 완벽한 무구독 수면 앱입니다.",
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
      "name": "구독 없는 수면 소리",
      "item": "https://www.calmasounds.com/ko/best-sleep-sounds-app-without-subscription"
    }
  ]
};

export default function BestSleepAppNoSubscriptionPageKo() {
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

      <AiDefinition />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          구독 불필요
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          구독 없는 최고의 수면 소리 앱
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          휴식을 빌려 쓰는 데 지치셨나요? Calma는 <strong>한 번의 결제로 평생 잠금 해제</strong>하여 취침 시간을 위한 맞춤형 사운드스케이프를 만들 수 있도록 돕는 아름답고 단순한 수면 소리 앱입니다. 
          월간 수수료나 연간 갱신 없이, 오직 평온함만 누리세요.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play 스토어에서 Calma 다운로드"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Google Play에서 다운로드
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple App Store에서 Calma 다운로드"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            App Store에서 다운로드
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">한 번의 결제로 평생 소유</h2>
            <p className="mt-4 leading-7 text-white/70">
              수면을 위해 매달 돈을 지불하지 마세요. 평생 잠금 해제를 통해 반복적인 구독 없이 모든 프리미엄 사운드, Brainwave Lab 기능 및 향후 업데이트에 대한 전체 액세스 권한을 얻으세요.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">100% 오프라인 지원</h2>
            <p className="mt-4 leading-7 text-white/70">
              다운로드한 후에는 Calma가 완전히 오프라인에서 작동합니다. 비행기나 여행 중, 또는 밤에 휴대전화를 비행기 모드로 유지하는 데 완벽합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">프리미엄 사운드 믹서</h2>
            <p className="mt-4 leading-7 text-white/70">
              고품질의 비, 파도, 백색소음 및 갈색소음을 혼합하여 나만의 완벽한 맞춤형 사운드스케이프를 만드세요.
            </p>
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
              구독이 없는 수면 앱이 있나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네, Calma는 구독이 필요 없는 프리미엄 수면 소리 앱입니다. 무료 버전과 전체 액세스를 위한 한 번의 평생 잠금 해제 결제를 제공합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              월 사용료를 내는 수면 앱이 그만한 가치가 있나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              많은 수면 앱이 서버 비용 및 새로운 콘텐츠를 위해 높은 월별 또는 연간 요금을 청구합니다. Calma를 사용하면 평생 프리미엄 오프라인 믹서에 액세스하기 위해 단 한 번의 결제로 반복되는 요금을 전면 피할 수 있습니다.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma는 오프라인에서 작동하나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네, Calma는 완전히 오프라인에서 작동하므로 여행 중이거나 밤에 방해 요소를 줄이기 위해 Wi-Fi를 끄고 싶을 때 완벽한 무구독 수면 앱입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
