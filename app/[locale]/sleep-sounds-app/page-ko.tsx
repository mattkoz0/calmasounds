import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "더 나은 수면을 위한 수면 소리 앱 | Calma",
  description:
    "최고의 수면 소리와 자연의 소리를 발견하세요. Calma와 함께 맞춤형 수면 믹스를 만들어 더 빨리 잠들고 개운하게 일어나세요.",
  keywords: [
    "수면 유도 소리 앱",
    "숙면 소리",
    "잠잘때 듣는 소리",
    "빗소리 앱",
    "백색소음 수면",
    "칼마 수면 앱",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/sleep-sounds-app",
  },
  openGraph: {
    title: "더 나은 수면을 위한 수면 소리 앱 | Calma",
    description:
    "최고의 수면 소리와 자연의 소리를 발견하세요. Calma와 함께 맞춤형 수면 믹스를 만들어 더 빨리 잠들고 개운하게 일어나세요.",
    url: "https://www.calmasounds.com/ko/sleep-sounds-app",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "더 나은 수면을 위한 수면 소리 앱 | Calma",
    description:
    "최고의 수면 소리와 자연의 소리를 발견하세요. Calma와 함께 맞춤형 수면 믹스를 만들어 더 빨리 잠들고 개운하게 일어나세요.",
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
      "name": "수면 유도 소리 앱",
      "item": "https://www.calmasounds.com/ko/sleep-sounds-app"
    }
  ]
};

export default function SleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          수면 유도 소리 앱
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          더 깊은 잠과 평온한 취침 루틴을 위한 선택
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma는 당신의 숙면을 돕기 위해 설계된 우아한 수면 사운드 앱입니다. 
          따뜻한 빗소리부터 평온한 자연의 소리까지, 나만의 맞춤형 믹스를 통해 
          매일 밤 더 깊은 휴식을 경험하세요.
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
            <h2 className="text-2xl font-semibold">나만의 수면 믹스</h2>
            <p className="mt-4 leading-7 text-white/70">
              천편일률적인 트랙 대신, 당신의 취향과 그날의 기분에 맞는 소리들을 
              자유롭게 레이어링하여 완벽한 밤을 만드세요.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">평온한 밤을 향한 전이</h2>
            <p className="mt-4 leading-7 text-white/70">
              안정적인 오디오 환경은 뇌가 수면 상태로 전환되는 것을 돕고 
              외부 소음을 차단하여 자다 깨는 것을 방지합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">심플함의 미학</h2>
            <p className="mt-4 leading-7 text-white/70">
              취침 전 복잡한 조작은 수면을 방해할 수 있습니다. Calma는 
              가장 직관적이고 빠르게 사운드를 재생할 수 있도록 돕습니다.
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
            Calma와 함께하는 수면 경험
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              priority
              alt="Calma 수면 앱 인터페이스 - 수면 유도 소리 리스트"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="Calma 수면 앱 인터페이스 - 나만의 믹스 커스터마이징"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma 사운드 믹서 - 다양한 오디오 레이어 조합"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma 앱 인터페이스 - 맞춤형 수면 사운드 관리"
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
            수면에 대한 유용한 정보
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">최고의 수면 사운드 가이드</h3>
            <p className="mt-3 text-white/70">
              빗소리, 백색소음, 핑크 노이즈 등 나에게 맞는 소리를 찾는 방법.
            </p>
          </Link>
          <Link
            href="/blog/how-to-build-a-bedtime-routine"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">올바른 취침 루틴 만들기</h3>
            <p className="mt-3 text-white/70">
              자연스러운 숙면을 유도하는 저녁 시간 활용 팁.
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            수면 유도 소리 FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              수면 유도 소리 앱이란 무엇인가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              심리적 안정과 외부 소음 차단을 돕는 특정 소리를 재생하여 더 빠르고 
              깊게 잠들 수 있도록 돕는 도구입니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma는 다른 앱과 어떻게 다른가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              단순히 트랙을 재생하는 것을 넘어, 사용자가 직접 수십 가지 소리를 
              믹스하여 자신만의 완벽한 사운드를 만들 수 있다는 점이 특징입니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              오프라인에서도 사용 가능한가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네. 앱 설치 후 원하는 소리들을 다운로드하면 인터넷 연결이 없는 
              비행기 안이나 야외에서도 평온한 사운드를 즐길 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            오늘 밤부터 Calma와 함께하세요
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            앱을 다운로드하고 당신만을 위한 완벽한 수면 환경을 디자인하세요.
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
