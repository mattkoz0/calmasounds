import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "매일의 평온을 위한 휴식 소리 앱 | Calma",
  description:
    "비, 백색 소음, 자연의 소리로 나만의 휴식 소리 믹스를 만드세요. Calma를 사용하여 평화를 찾고 스트레스를 해소하세요.",
  keywords: [
    "휴식 사운드 앱",
    "힐링 소리",
    "마음이 편해지는 소리",
    "자연의 소리 앱",
    "스트레스 해소 음악",
    "칼마 휴식 사운드",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/relaxing-sounds",
  },
  openGraph: {
    title: "매일의 평온을 위한 휴식 소리 앱 | Calma",
    description:
    "비, 백색 소음, 자연의 소리로 나만의 휴식 소리 믹스를 만드세요. Calma를 사용하여 평화를 찾고 스트레스를 해소하세요.",
    url: "https://www.calmasounds.com/ko/relaxing-sounds",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "매일의 평온을 위한 휴식 소리 앱 | Calma",
    description:
    "비, 백색 소음, 자연의 소리로 나만의 휴식 소리 믹스를 만드세요. Calma를 사용하여 평화를 찾고 스트레스를 해소하세요.",
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
      "name": "휴식 사운드",
      "item": "https://www.calmasounds.com/ko/relaxing-sounds"
    }
  ]
};

export default function RelaxingSoundsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          휴식 사운드
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          지친 하루 끝, 당신을 위한 가장 부드러운 위로
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma는 복잡한 일상에서 잠시 벗어나 나만의 평온한 공간을 만들 수 있도록 
          돕는 힐링 사운드 앱입니다. 자연의 소리와 평온한 텍스처를 믹스하여 
          심리적 안정과 균형을 되찾으세요.
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
            <h2 className="text-2xl font-semibold">일상 속의 작은 쉼표</h2>
            <p className="mt-4 leading-7 text-white/70">
              업무 사이의 짧은 휴식이나 퇴근 후의 완만한 전이 시간에 사용하세요. 
              정신적인 소음을 줄이고 마음의 여유를 선사합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">나만의 힐링 믹스</h2>
            <p className="mt-4 leading-7 text-white/70">
              당신이 좋아하는 소리들을 직접 조합하세요. 나에게 가장 따뜻하게 
              느껴지는 소리들로 공간을 채울 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">부드러운 데일리 리추얼</h2>
            <p className="mt-4 leading-7 text-white/70">
              매일의 루틴에 Calma를 더해 보세요. 복잡한 현대 사회에서 
              가장 단순하고 우아하게 평온함을 유지하는 법을 제안합니다.
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
            Calma의 차분한 이면
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"

              alt="Calma 앱 인터페이스 - 휴식 사운드 카테고리 선택"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Calma 앱 인터페이스 - 앰비언트 사운드스케이프 커스텀"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma 사운드 믹서 - 자연의 질감과 차분한 오디오 레이어"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma 앱 인터페이스 - 개인 맞춤형 휴식 믹스 관리"
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
            휴식과 소리에 대해 더 알아보기
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">자연의 소리가 주는 이점</h3>
            <p className="mt-3 text-white/70">
              빗소리와 파도 소리가 어떻게 마음을 안정시키고 스트레스를 완화하는지 알아보세요.
            </p>
          </Link>
          <Link
            href="/blog/guided-breathing-techniques"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">마음챙김 호흡 가이드</h3>
            <p className="mt-3 text-white/70">
              주변 소리와 함께하면 더 효과적인, 깊은 휴식을 위한 호흡법을 소개합니다.
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            휴식 사운드 FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              휴식 사운드 앱은 언제 사용하면 좋은가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              정서적 안정이 필요할 때, 명상할 때, 독서할 때, 혹은 단순히 
              주변 소음으로부터 벗어나고 싶을 때 언제든 사용하실 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma의 사운드는 특별한가요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma는 인위적이지 않은 자연스러운 고음질 사운드를 제공하며, 
              사용자가 각 소리의 볼륨을 세밀하게 조절하여 직접 믹스할 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              아이들과 함께 들어도 되나요?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네. 부드러운 자연의 소리와 자장가 같은 앰비언트 사운드는 
              아이들의 정서적 안정과 낮잠 시간에도 매우 효과적입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            지금 Calma로 마음의 여유를 찾으세요
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            앱을 다운로드하고 당신만을 위한 가장 차분한 공간을 만들어 보세요.
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
