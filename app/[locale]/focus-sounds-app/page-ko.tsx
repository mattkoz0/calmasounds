import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "깊은 작업을 위한 집중 소리 앱 | Calma",
  description:
    "비와 갈색 소음으로 몰입형 집중 소리 환경을 구축하세요. Calma는 깊은 작업을 위한 조용한 공간을 만들 수 있도록 도와줍니다.",
  keywords: [
    "집중력 향상 앱",
    "공부 백색소음",
    "업무 집중 소리",
    "독서할때 듣는 소리",
    "딥워크 사운드",
    "칼마 집중 앱",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/focus-sounds-app",
  },
  openGraph: {
    title: "깊은 작업을 위한 집중 소리 앱 | Calma",
    description:
    "비와 갈색 소음으로 몰입형 집중 소리 환경을 구축하세요. Calma는 깊은 작업을 위한 조용한 공간을 만들 수 있도록 도와줍니다.",
    url: "https://www.calmasounds.com/ko/focus-sounds-app",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "깊은 작업을 위한 집중 소리 앱 | Calma",
    description:
    "비와 갈색 소음으로 몰입형 집중 소리 환경을 구축하세요. Calma는 깊은 작업을 위한 조용한 공간을 만들 수 있도록 도와줍니다.",
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
      "name": "집중력 향상 앱",
      "item": "https://www.calmasounds.com/ko/focus-sounds-app"
    }
  ]
};

export default function FocusSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          집중력 향상 앱
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          몰입의 즐거움과 효율적인 업무/공부 환경을 위해
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma는 당신이 업무에 깊이 몰입하고 학습 효율을 극대화할 수 있도록 돕는 
          집중력 사운드 앱입니다. 소음으로부터 당신을 보호하고 최적의 
          오디오 환경을 디자인하여 성과를 높이세요.
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
            <h2 className="text-2xl font-semibold">흔들림 없는 몰입</h2>
            <p className="mt-4 leading-7 text-white/70">
              지속적인 배경 사운드를 통해 주변의 불필요한 소음을 마스킹하고, 
              주의력이 분산되는 것을 효과적으로 방지합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">나만의 집중력 믹스</h2>
            <p className="mt-4 leading-7 text-white/70">
              기성 오디오 트랙이 아닌, 당신에게 가장 잘 어울리는 백색소음과 
              엠비언스 레이어를 조합하여 몰입 환경을 개인화하세요.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">차분한 업무 공간</h2>
            <p className="mt-4 leading-7 text-white/70">
              심플하고 정돈된 인터페이스는 시각적 피로를 줄여주며, 
              당신의 업무 공간이 더욱 의도적이고 차분하게 느껴지도록 돕습니다.
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
            Calma와 함께하는 집중의 순간
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Calma 앱 인터페이스 - 집중 및 학습 카테고리"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Calma 앱 인터페이스 - 공부를 위한 사운드 커스텀"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma 사운드 믹서 - 딥워크를 위한 배경 오디오"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma 앱 인터페이스 - 집중력 향상과 바이노럴 비트"
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
            소리와 집중력의 관계 더 알아보기
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">공부할 때 좋은 최고의 소리</h3>
            <p className="mt-3 text-white/70">
              학습 세션 중 몰입도를 높이고 집중을 유지하는 데 도움이 되는 소리들을 찾아보세요.
            </p>
          </Link>
          <Link
            href="/blog/binaural-beats-for-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">바이노럴 비트의 효과</h3>
            <p className="mt-3 text-white/70">
              특정 주파수가 어떻게 업무 효율과 창의력을 자극할 수 있는지에 대한 간단한 소개.
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            집중력 향상 앱 FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              집중을 위해 왜 사운드 앱이 필요한가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              일정한 배경 소음(백색소음 등)은 갑작스러운 자극으로부터 주의력을 
              보호하여 더 오랫동안 업무와 공부에 몰입할 수 있도록 돕습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              어느 때 Calma를 집중 모드로 사용하나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              공부, 독서, 글쓰기, 기획 작업 등 에너지가 많이 소모되는 
              모든 지적인 활동 중에 사용하면 효과적입니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              나만의 집중 믹스를 저장할 수 있나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네. 당신만의 최적의 소리 조합을 저장해두고 업무를 시작할 때마다 
              빠르게 재생하여 집중 모드로 진입할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            지금 Calma와 함께 몰입의 순간으로
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            앱을 다운로드하고 당신만을 위한 완벽한 생산성 환경을 만들어 보세요.
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
