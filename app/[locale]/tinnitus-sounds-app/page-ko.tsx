import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "수면을 위한 이명 완화 소리 앱 | Calma",
  description:
    "이명 완화 소리 앱을 발견하세요. Calma를 사용하여 더 나은 수면과 휴식을 위한 차분한 오디오 환경을 만드세요.",
  keywords: [
    "백색소음 앱",
    "집중 백색소음",
    "잠잘때 백색소음",
    "브라운 노이즈",
    "핑크 노이즈",
    "칼마 백색소음",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/ko/tinnitus-sounds-app",
  },
  openGraph: {
    title: "수면을 위한 이명 완화 소리 앱 | Calma",
    description:
    "이명 완화 소리 앱을 발견하세요. Calma를 사용하여 더 나은 수면과 휴식을 위한 차분한 오디오 환경을 만드세요.",
    url: "https://www.calmasounds.com/ko/tinnitus-sounds-app",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "수면을 위한 이명 완화 소리 앱 | Calma",
    description:
    "이명 완화 소리 앱을 발견하세요. Calma를 사용하여 더 나은 수면과 휴식을 위한 차분한 오디오 환경을 만드세요.",
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
      "name": "백색소음 앱",
      "item": "https://www.calmasounds.com/ko/tinnitus-sounds-app"
    }
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
              priority
              alt="Calma 앱 인터페이스 - 백색소음 종류 선택"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
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
              이명을 위한 무료 백색 소음 앱이 있습니까?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네, Calma는 밤에 이명을 가리기 위해 차분한 오디오 환경을 찾는 사람들이 자주 사용하는 백색, 핑크 소음을 포함한 무료 소리를 제공합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              이명에는 어떤 색상의 소음이 가장 좋습니까?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              많은 사람들이 귀 울림을 차단하는 데 백색 소음이나 핑크 소음이 가장 효과적이라고 생각합니다. Calma를 사용하면 모든 색상을 테스트할 수 있습니다.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              사운드 마스킹이 밤에 이명에 도움이 될 수 있습니까?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              네. 침묵은 이명을 더 크게 느끼게 할 수 있습니다. 비와 같은 일정한 배경 소음을 만들면 뇌가 집중할 수 있는 대안 오디오가 제공됩니다.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"이명을 위한 무료 백색 소음 앱이 있습니까?","acceptedAnswer":{"@type":"Answer","text":"네, Calma는 밤에 이명을 가리기 위해 차분한 오디오 환경을 찾는 사람들이 자주 사용하는 백색, 핑크 소음을 포함한 무료 소리를 제공합니다."}},{"@type":"Question","name":"이명에는 어떤 색상의 소음이 가장 좋습니까?","acceptedAnswer":{"@type":"Answer","text":"많은 사람들이 귀 울림을 차단하는 데 백색 소음이나 핑크 소음이 가장 효과적이라고 생각합니다. Calma를 사용하면 모든 색상을 테스트할 수 있습니다."}},{"@type":"Question","name":"사운드 마스킹이 밤에 이명에 도움이 될 수 있습니까?","acceptedAnswer":{"@type":"Answer","text":"네. 침묵은 이명을 더 크게 느끼게 할 수 있습니다. 비와 같은 일정한 배경 소음을 만들면 뇌가 집중할 수 있는 대안 오디오가 제공됩니다."}}]}) }}
          />
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
