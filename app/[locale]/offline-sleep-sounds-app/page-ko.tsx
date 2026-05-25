import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "여행 및 개인 정보 보호를 위한 오프라인 수면 소리 앱 | Calma",
  description:
    "인터넷 없이 작동하는 수면 소리 앱을 찾고 계신가요? Calma는 100% 오프라인으로 작동합니다. 비행기 모드, 비행 중, 여행 시 맞춤형 사운드스케이프를 즐기세요.",
  keywords: [
    "오프라인 수면 소리 앱",
    "인터넷 없는 수면 소리 앱",
    "비행기 모드 수면 앱",
    "여행 수면 소리",
    "수면 소리 와이파이 없음",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/offline-sleep-sounds-app",
  },
  openGraph: {
    title: "여행 및 개인 정보 보호를 위한 오프라인 수면 소리 앱 | Calma",
    description:
      "인터넷 없이 작동하는 수면 소리 앱을 찾고 계신가요? Calma는 100% 오프라인으로 작동합니다. 비행기 모드, 비행 중, 여행 시 맞춤형 사운드스케이프를 즐기세요.",
    url: "https://www.calmasounds.com/ko/offline-sleep-sounds-app",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "여행 및 개인 정보 보호를 위한 오프라인 수면 소리 앱 | Calma",
    description:
      "인터넷 없이 작동하는 수면 소리 앱을 찾고 계신가요? Calma는 100% 오프라인으로 작동합니다.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calma는 오프라인에서 작동하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, 한 번 다운로드하면 Calma는 완전히 오프라인에서 작동합니다. 수면 소리를 믹스하고 듣기 위해 Wi-Fi나 셀룰러 연결이 필요하지 않습니다.",
      },
    },
    {
      "@type": "Question",
      name: "비행기에서 Calma를 사용할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "물론입니다. Calma는 버퍼링이나 로딩 화면 없이 비행기 모드에서 완벽하게 작동하므로 비행에 이상적입니다.",
      },
    },
    {
      "@type": "Question",
      name: "데이터를 사용하지 않는 수면 소리 앱이 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, Calma는 오디오를 스트리밍하지 않는 개인 정보 보호 우선 수면 소리 앱입니다. 모든 소리는 기기에서 로컬로 처리되므로 재생 중에 모바일 데이터를 소모하지 않습니다.",
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
      "name": "오프라인 수면 소리 앱",
      "item": "https://www.calmasounds.com/ko/offline-sleep-sounds-app"
    }
  ]
};

export default function OfflineSleepAppPageKo() {
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
          비행기 모드 친화적
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          어디서나 깊은 휴식을 위한 오프라인 수면 소리 앱
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Wi-Fi를 끄고 세상과 단절하세요. Calma는 <strong>100% 오프라인</strong>으로 작동하므로 방해 요소, 데이터 사용 또는 버퍼링 없이 맞춤형 사운드스케이프를 즐길 수 있습니다.
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
            <h2 className="text-2xl font-semibold">여행에 완벽함</h2>
            <p className="mt-4 leading-7 text-white/70">
              장거리 비행, 기차 여행, 또는 Wi-Fi 환경이 좋지 않은 호텔에 머무를 때, Calma의 오프라인 기능은 수면 소리를 항상 준비된 상태로 유지합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">데이터 사용 제로</h2>
            <p className="mt-4 leading-7 text-white/70">
              스트리밍 앱과 달리 Calma는 모바일 데이터를 사용하지 않습니다. 소리는 기기에서 직접 믹스됩니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">개인 정보 보호 최우선</h2>
            <p className="mt-4 leading-7 text-white/70">
              지속적인 추적에 대해 걱정할 필요가 없습니다. 휴대폰을 비행기 모드로 설정하여 EMF 노출을 줄이고 평화롭게 잠드세요.
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
              Calma는 오프라인에서 작동하나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네, 한 번 다운로드하면 Calma는 완전히 오프라인에서 작동합니다. 수면 소리를 믹스하고 듣기 위해 Wi-Fi나 셀룰러 연결이 필요하지 않습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              비행기에서 Calma를 사용할 수 있나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              물론입니다. Calma는 버퍼링이나 로딩 화면 없이 비행기 모드에서 완벽하게 작동하므로 비행에 이상적입니다.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              데이터를 사용하지 않는 수면 소리 앱이 있나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네, Calma는 오디오를 스트리밍하지 않는 개인 정보 보호 우선 수면 소리 앱입니다. 모든 소리는 기기에서 로컬로 처리되므로 재생 중에 모바일 데이터를 소모하지 않습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
