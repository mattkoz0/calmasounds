import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "백색 소음, 갈색 소음, 핑크 소음 앱 | Calma",
  description:
    "백색 소음, 갈색 소음, 핑크 소음의 차이점을 알아보세요. Calma는 수면, 집중, ADHD를 위해 모든 색상의 소음을 혼합할 수 있는 프리미엄 수면 소리 앱입니다.",
  keywords: [
    "백색 소음 앱",
    "갈색 소음 앱",
    "핑크 소음 앱",
    "녹색 소음 앱",
    "소음 색상 앱",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/white-noise-brown-noise-pink-noise",
  },
  openGraph: {
    title: "백색 소음, 갈색 소음, 핑크 소음 앱 | Calma",
    description:
      "백색 소음, 갈색 소음, 핑크 소음의 차이점을 알아보세요. Calma는 수면, 집중, ADHD를 위해 모든 색상의 소음을 혼합할 수 있는 프리미엄 수면 소리 앱입니다.",
    url: "https://www.calmasounds.com/ko/white-noise-brown-noise-pink-noise",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "백색 소음, 갈색 소음, 핑크 소음 앱 | Calma",
    description:
      "Calma 앱으로 수면, 집중, ADHD를 위해 모든 색상의 소음을 혼합하세요.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calma에는 백색 소음, 갈색 소음, 핑크 소음이 포함되어 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, Calma에는 고품질의 백색 소음, 갈색 소음, 핑크 소음 및 녹색 소음이 포함되어 있습니다. 비나 파도 같은 다른 자연의 소리와 혼합할 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "백색 소음과 갈색 소음의 차이점은 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "백색 소음은 TV 잡음처럼 귀에 들리는 모든 주파수를 동일하게 포괄합니다. 갈색 소음은 낮은 주파수를 강조하여 멀리서 들리는 폭포수처럼 더 깊은 소리를 냅니다. 갈색 소음은 깊은 집중과 ADHD에 자주 선호됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "어떤 색의 소음이 수면에 가장 좋은가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "핑크 소음은 균형 잡혀 있고 자연스러우며 일정한 비나 바람 같은 소리를 모방하기 때문에 일반적으로 수면에 가장 좋은 것으로 간주됩니다. 백색 소음은 갑작스럽고 큰 소리를 차단하는 데 가장 좋습니다.",
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
      "name": "소음 색상 앱",
      "item": "https://www.calmasounds.com/ko/white-noise-brown-noise-pink-noise"
    }
  ]
};

export default function NoiseColorsAppPageKo() {
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
          소리의 색상
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          백색 소음, 갈색 소음 및 핑크 소음
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma는 모든 필수 소음 색상의 고품질 녹음을 포함하는 포괄적인 사운드 믹서 앱입니다.
          수면, 휴식 또는 ADHD 집중 루틴을 위한 완벽한 주파수를 찾아보세요.
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              백색 소음 (White Noise)
            </div>
            <h3 className="text-xl font-semibold">소음 차단에 완벽함</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              가청 주파수 전체를 고르게 포괄합니다. 갑작스럽고 큰 소리를 차단하고 아기의 수면을 돕는 데 이상적입니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              핑크 소음 (Pink Noise)
            </div>
            <h3 className="text-xl font-semibold">균형 및 자연스러움</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              백색 소음보다 더 깊으며 일정한 비나 바람 같은 소리를 모방합니다. 전반적인 수면의 질을 향상시키는 데 좋습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              갈색 소음 (Brown Noise)
            </div>
            <h3 className="text-xl font-semibold">집중력 및 ADHD 지원</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              멀리서 들리는 폭포수처럼 저주파가 강합니다. 깊은 집중을 원하거나 복잡한 마음을 '진정'시키는 데 점점 인기를 얻고 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              녹색 소음 (Green Noise)
            </div>
            <h3 className="text-xl font-semibold">자연의 조화</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              바스락거리는 숲의 나뭇잎 소리와 유사한 중간 대역 주파수에 중점을 둡니다. 차분하고 자연스러운 분위기에 완벽합니다.
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
              Calma에는 백색 소음, 갈색 소음, 핑크 소음이 포함되어 있나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네, Calma에는 고품질의 백색 소음, 갈색 소음, 핑크 소음 및 녹색 소음이 포함되어 있습니다. 사운드 믹서에서 비나 파도 같은 다른 자연의 소리와 혼합할 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              백색 소음과 갈색 소음의 차이점은 무엇인가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              백색 소음은 TV 잡음과 유사하게 들리는 모든 주파수를 동일하게 덮습니다. 갈색 소음은 낮은 주파수를 강조하여 멀리서 들리는 폭포수처럼 더 깊고 부드럽게 들립니다. 갈색 소음은 깊은 집중과 ADHD에 자주 선호됩니다.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              어떤 색의 소음이 수면에 가장 좋은가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              핑크 소음은 균형 잡혀 있고 자연스러우며 일정한 비나 바람 같은 소리를 모방하기 때문에 일반적으로 수면에 가장 좋은 것으로 간주됩니다. 그러나 갑작스럽고 큰 소리를 특별히 가려야 하는 경우에는 백색 소음이 가장 좋습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
