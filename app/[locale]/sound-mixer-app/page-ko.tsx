import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "수면과 집중을 위한 소리 믹서 앱 | Calma",
  description:
    "비, 백색 소음, 자연의 소리로 차분한 오디오 믹스를 만드세요. Calma 소리 믹서를 사용하여 긴장을 풀고 집중하세요.",
  keywords: [
    "사운드 믹서 앱",
    "나만의 소리 만들기",
    "백색소음 믹스",
    "수면유도 사운드 믹서",
    "ASMR 믹서",
    "칼마 믹싱 앱",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/sound-mixer-app",
  },
  openGraph: {
    title: "수면과 집중을 위한 소리 믹서 앱 | Calma",
    description:
    "비, 백색 소음, 자연의 소리로 차분한 오디오 믹스를 만드세요. Calma 소리 믹서를 사용하여 긴장을 풀고 집중하세요.",
    url: "https://www.calmasounds.com/ko/sound-mixer-app",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "수면과 집중을 위한 소리 믹서 앱 | Calma",
    description:
    "비, 백색 소음, 자연의 소리로 차분한 오디오 믹스를 만드세요. Calma 소리 믹서를 사용하여 긴장을 풀고 집중하세요.",
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
      "name": "사운드 믹서 앱",
      "item": "https://www.calmasounds.com/ko/sound-mixer-app"
    }
  ]
};

export default function SoundMixerAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          사운드 믹서 앱
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          당신만의 오디오 세계를 디자인하세요
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma는 단순히 정해진 소리를 듣는 것이 아닌, 당신이 직접 소리의 창조자가 
          되는 경험을 제공합니다. 빗소리, 바람, 새소리, 그리고 백색소음을 
          자유롭게 레이어링하여 가장 완벽한 평온을 찾으세요.
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
            <h2 className="text-2xl font-semibold">동시 다발적 멀티 믹스</h2>
            <p className="mt-4 leading-7 text-white/70">
              최대 수십 가지의 소리를 동시에 재생하면서 각 트랙마다 세밀하게 
              볼륨을 조절할 수 있습니다. 세상에 하나뿐인 나만의 믹스가 탄생합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">개인 저장소 & 즐겨찾기</h2>
            <p className="mt-4 leading-7 text-white/70">
              찾아낸 최적의 조합을 저장해두세요. 취침 전, 집중이 필요할 때, 
              혹은 요가할 때 버튼 하나로 당신만의 공간을 바로 불러올 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">고음질 오디오 경험</h2>
            <p className="mt-4 leading-7 text-white/70">
              전문적으로 녹음되고 마스터링된 사운드 소스들을 통해 인위적인 
              느낌 없는 가장 자연스러운 앰비언스를 경험하세요.
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
            가장 직관적인 사운드 믹싱
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Calma 앱 인터페이스 - 믹싱 가능한 사운드 라이브러리"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Calma 앱 인터페이스 - 실시간 볼륨 믹서 컨트롤"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma 사운드 믹서 - 다층적인 오디오 조합 예시"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma 앱 인터페이스 - 나만의 프리셋 세이브 및 로드"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            세상에 하나뿐인 나만의 소리를 만드세요
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            앱을 다운로드하고 Calma가 선사하는 무한한 사운드 믹싱의 즐거움을 경험하세요.
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
