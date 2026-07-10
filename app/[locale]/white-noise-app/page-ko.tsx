import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "수면과 집중을 위한 백색 소음 앱 | Calma",
  description:
    "백색 소음과 갈색 소음으로 차분한 수면 믹스를 만드세요. Calma를 사용하여 긴장을 풀고 집중하며 취침 루틴을 만드세요.",
  keywords: [
    "백색소음 앱",
    "집중 백색소음",
    "잠잘때 백색소음",
    "브라운 노이즈",
    "핑크 노이즈",
    "칼마 백색소음",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/white-noise-app",
  },
  openGraph: {
    title: "수면과 집중을 위한 백색 소음 앱 | Calma",
    description:
    "백색 소음과 갈색 소음으로 차분한 수면 믹스를 만드세요. Calma를 사용하여 긴장을 풀고 집중하며 취침 루틴을 만드세요.",
    url: "https://www.calmasounds.com/ko/white-noise-app",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "수면과 집중을 위한 백색 소음 앱 | Calma",
    description:
    "백색 소음과 갈색 소음으로 차분한 수면 믹스를 만드세요. Calma를 사용하여 긴장을 풀고 집중하며 취침 루틴을 만드세요.",
  },
};

const combinedJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Calma - Sleep Sounds & Relax",
      "applicationCategory": "HealthAndFitnessApplication",
      "operatingSystem": "ANDROID, IOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
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
      "name": "백색소음 앱",
      "item": "https://www.calmasounds.com/ko/white-noise-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "최고의 무료 백색 소음 앱은 무엇입니까?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Calma는 방해되는 광고 없이 백색 소음과 자연의 소리를 믹스할 수 있는 간단하고 차분한 환경을 제공합니다."
            }
        },
        {
            "@type": "Question",
            "name": "백색 소음이 수면에 도움이 됩니까?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "네. 백색 소음은 교통 소음이나 개 짖는 소리 같은 갑작스러운 배경 소음을 차단하는 오디오 담요 역할을 하여 뇌가 이완되도록 돕습니다."
            }
        },
        {
            "@type": "Question",
            "name": "공부할 때 백색 소음을 어떻게 사용합니까?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "공부할 때는 백색 또는 갈색 소음의 기본 설정에 가벼운 비 소리를 섞는 것이 좋습니다. 이는 집중력을 유지하는 데 도움이 됩니다."
            }
        }
    ]
}
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />


      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          백색소음 앱
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          가장 편안한 주파수와 빈틈없는 소음 차단
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma는 엄선된 백색소음과 다양한 주파수의 색상 노이즈를 통해 당신의 일상에 
          평온함을 선사합니다. 집충을 위해 혹은 숙면을 위해, 당신에게 가장 
          맞는 백색소음을 디자인하세요.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Google Play에서 받기
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            App Store에서 받기
          </a>

          <Link
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">완벽한 소음 마스킹</h2>
            <p className="mt-4 leading-7 text-white/70">
              일정한 백색소음은 외부의 갑작스러운 소음을 덮어주어, 수면 중 깨거나 
              공부 중 집중이 흩어지는 것을 효과적으로 방지합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">색상 노이즈의 발견</h2>
            <p className="mt-4 leading-7 text-white/70">
              일반적인 백색소음 외에도 부드러운 핑크 노이즈와 깊은 울림의 
              브라운 노이즈를 통해 당신에게 가장 편안한 소리층을 찾으세요.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">언제 어디서나 함께</h2>
            <p className="mt-4 leading-7 text-white/70">
              사무실, 기차, 비행기 혹은 집 안 어디서나 Calma를 켜는 순간 
              당신만의 완벽한 사적인 오디오 공간이 펼쳐집니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            앱 미리보기
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            가장 우아한 백색소음 도구
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"

              alt="Calma 앱 인터페이스 - 백색소음 종류 선택"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Calma 앱 인터페이스 - 백색소음과 자연 소리 믹스"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma 사운드 믹서 - 주파수 대역별 커스텀 사움드"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma 앱 인터페이스 - 저장된 백색소음 믹스 관리"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">가이드</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            백색소음의 과학 더 알아보기
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">빗소리 vs 백색소음</h3>
            <p className="mt-3 text-white/70">
              둘의 차이점과 상황에 따라 어떤 소리가 더 효과적인지 가이드를 확인하세요.
            </p>
          </Link>
          <Link
            href="/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">수면을 위한 백색소음 활용법</h3>
            <p className="mt-3 text-white/70">
              올바른 볼륨 조절과 기기 배치를 통해 수면의 질을 극대화하는 법.
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            백색소음 FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              최고의 무료 백색 소음 앱은 무엇입니까?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma는 방해되는 광고 없이 백색 소음과 자연의 소리를 믹스할 수 있는 간단하고 차분한 환경을 제공합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              백색 소음이 수면에 도움이 됩니까?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네. 백색 소음은 교통 소음이나 개 짖는 소리 같은 갑작스러운 배경 소음을 차단하는 오디오 담요 역할을 하여 뇌가 이완되도록 돕습니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              공부할 때 백색 소음을 어떻게 사용합니까?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              공부할 때는 백색 또는 갈색 소음의 기본 설정에 가벼운 비 소리를 섞는 것이 좋습니다. 이는 집중력을 유지하는 데 도움이 됩니다.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            가장 진화된 백색소음 경험을 시작하세요
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            앱을 다운로드하고 당신만을 위한 완벽한 노이즈 믹스를 디자인하세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              App Store
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
