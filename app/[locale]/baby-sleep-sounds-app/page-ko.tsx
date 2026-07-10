import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "아기 수면 소리 및 백색 소음 앱 | Calma",
  description:
    "백색 소음과 부드러운 아기 수면 소리로 차분한 수면 믹스를 만드세요. Calma를 사용하여 아기가 밤새 푹 잘 수 있도록 도와주세요.",
  keywords: [
    "아기 수면 소리",
    "아기 백색소음 앱",
    "신생아 자장가",
    "아기 숙면 소리",
    "아기 수면 유도",
    "칼마 베이비 수면",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/baby-sleep-sounds-app",
  },
  openGraph: {
    title: "아기 수면 소리 및 백색 소음 앱 | Calma",
    description:
    "백색 소음과 부드러운 아기 수면 소리로 차분한 수면 믹스를 만드세요. Calma를 사용하여 아기가 밤새 푹 잘 수 있도록 도와주세요.",
    url: "https://www.calmasounds.com/ko/baby-sleep-sounds-app",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "아기 수면 소리 및 백색 소음 앱 | Calma",
    description:
    "백색 소음과 부드러운 아기 수면 소리로 차분한 수면 믹스를 만드세요. Calma를 사용하여 아기가 밤새 푹 잘 수 있도록 도와주세요.",
  },
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
      "name": "아기 수면 유도 소리",
      "item": "https://www.calmasounds.com/ko/baby-sleep-sounds-app"
    }
  ]
};

export default function BabySleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          아기 수면 유도 소리
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          우리 아기의 평온한 밤과 달콤한 꿈을 위해
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma는 아기가 더 쉽고 편안하게 잠들 수 있도록 돕는 프리미엄 사운드 앱입니다. 
          신뢰할 수 있는 백색소음과 부드러운 자연의 소리, 낮고 따뜻한 주파수를 통해 
          아기에게 엄마 뱃속 같은 안락함을 선물하세요.
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
            <h2 className="text-2xl font-semibold">갑작스러운 소음 차단</h2>
            <p className="mt-4 leading-7 text-white/70">
              아기들은 작은 생활 소음에도 쉽게 깰 수 있습니다. 지속적인 
              백색소음은 외부 소리를 마스킹하여 아기의 잠을 방해받지 않도록 보호합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">엄마 뱃속 같은 익숙함</h2>
            <p className="mt-4 leading-7 text-white/70">
              낮고 웅웅거리는 브라운 노이즈와 심장 박동 소리는 아기가 엄마 뱃속에서 
              들었던 환경과 유사하여 신생아에게 심리적인 안정감을 줍니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">부드러운 환경 설정</h2>
            <p className="mt-4 leading-7 text-white/70">
              아기마다 좋아하는 소리가 다릅니다. Calma의 믹서 기능을 사용해 
              아기가 가장 빨리 진정되는 소리 조합을 직접 찾아보세요.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            아기 수면 유도 소리 FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              백색소음이 아기에게 안전한가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네, 적절한 볼륨(일상 대화 정도)과 아기로부터 충분한 거리를 
              유지한다면 백색소음은 소아과 의사들이 추천하는 매우 안전하고 효과적인 수면 도구입니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              어떤 소리가 아기에게 가장 좋나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              많은 아기들이 화이트 노이즈에 잘 반응하지만, 브라운 노이즈나 
              부드러운 팬 소리가 주는 낮은 울림이 아기를 진정시키는 데 더 효과적인 경우가 많습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              앱에 자장가도 포함되어 있나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma는 전통적인 멜로디의 자장가보다는 아기의 뇌가 깊은 수면 상태로 
              자연스럽게 진입하도록 돕는 앰비언트적인 수면 사운드에 더 초점을 맞추고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            아기에게 더 건강한 잠을 선물하세요
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            지금 앱을 다운로드하고 Calma와 함께 아기와 부모 모두 행복한 밤을 만드세요.
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
