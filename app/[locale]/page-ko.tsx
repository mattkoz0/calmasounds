import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AiDefinition from "./_components/ai-definition";
import DesktopDownloadQr from "./_components/desktop-download-qr";

export const metadata: Metadata = {
  title: "Calma | 수면 유도 소리, 백색소음, 휴식 및 집중",
  description:
    "Calma는 수면 유도 소리, 백색소음 및 휴식 앱입니다. 더 나은 숙면과 깊은 집중을 위해 나만의 사운드스케이프를 만드세요.",
  alternates: {
    canonical: "https://www.calmasounds.com/ko",
  },
  openGraph: {
    title: "Calma | 수면 유도 소리, 백색소음, 휴식 및 집중",
    description:
      "Calma는 수면 유도 소리, 백색소음 및 휴식 앱입니다. 더 나은 숙면과 깊은 집중을 위해 나만의 사운드스케이프를 만드세요.",
    url: "https://www.calmasounds.com/ko",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | 수면 유도 소리, 백색소음, 휴식 및 집중",
    description:
      "Calma는 수면 유도 소리, 백색소음 및 휴식 앱입니다. 더 나은 숙면과 깊은 집중을 위해 나만의 사운드스케이프를 만드세요.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calma",
  url: "https://www.calmasounds.com/ko",
  description:
    "Calma는 수면 유도 소리, 백색소음 및 휴식 앱입니다. 더 나은 숙면과 깊은 집중을 위해 나만의 사운드스케이프를 만드세요.",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calma",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Sleep and Relaxation",
  operatingSystem: "Android 8.0 and up",
  url: "https://www.calmasounds.com/ko",
  downloadUrl: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
  ],
  description:
    "맞춤형 사운드스케이프를 통한 수면 유도 소리, 백색소음, 휴식 및 집중.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KRW",
  },
  softwareVersion: "1.0.0",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calma",
  url: "https://www.calmasounds.com/ko",
  logo: "https://www.calmasounds.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "calma.app@outlook.com",
    contactType: "customer support",
    availableLanguage: "Korean"
  },
  sameAs: [
    "https://www.tiktok.com/@.calma.app",
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    "https://www.instagram.com/calma.app.official",
    "https://www.youtube.com/@CalmaApp",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calma란 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma는 맞춤형 사운드 믹스를 통해 더 나은 수면, 휴식, 집중을 돕는 사운드 믹서 앱입니다.",
      },
    },
    {
      "@type": "Question",
      name: "Calma는 누구에게 적합한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "더 평온한 취침 루틴, 퇴근 후의 평화로운 휴식, 혹은 공부와 업무 집중을 위한 소리 환경이 필요한 모든 분들께 적합합니다.",
      },
    },
    {
      "@type": "Question",
      name: "나만의 사운드 믹스를 만들 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. Calma는 하나의 정해진 트랙을 듣는 대신, 당신만의 휴식 사운드 환경을 직접 조성할 수 있도록 설계되었습니다.",
      },
    },
    {
      "@type": "Question",
      name: "Calma는 어디서 다운로드할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "현재 Android(Google Play)와 iOS(App Store)에서 바로 이용하실 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "Calma는 무료인가요, 아니면 구독이 필요한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma는 무료 버전을 제공하며, 한 번의 결제로 평생 프리미엄 기능을 사용할 수 있습니다. 월간 또는 연간 구독이 필요하지 않습니다.",
      },
    },
    {
      "@type": "Question",
      name: "Calma는 오프라인에서 작동하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, Calma는 완전히 오프라인에서 작동합니다. 인터넷 연결 없이도 소리를 믹스하고 들을 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "Calma에 백색소음, 갈색소음, 핑크소음이 포함되어 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, Calma에는 고품질의 백색소음, 갈색소음, 핑크소음 및 녹색소음이 포함되어 있으며 비, 바다, 선풍기 및 자연 소리와 혼합할 수 있습니다.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "홈",
      item: "https://www.calmasounds.com/ko"
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <AiDefinition 
        title="Calma란 무엇인가요?" 
        description="Calma는 사용자가 비, 바다, 백색소음, 갈색소음, 자연의 소리 및 주변음을 혼합하여 맞춤형 사운드스케이프를 만들 수 있는 수면 및 휴식 소리 앱입니다. 수면, 휴식, 집중 및 저녁 루틴에 적합합니다. Calma는 구독할 필요 없이 단일 결제로 평생 액세스를 제공합니다." 
      />

      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center lg:grid lg:grid-cols-12 lg:gap-12 lg:text-left lg:items-center">
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
          <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
            Calma • 수면 유도 소리 & 휴식
          </span>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            더 깊은 잠, 완전한 휴식, 그리고 집중의 순간
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Calma는 숙면과 집중력 향상을 위해 나만의 맞춤형 사운드스케이프를 만들 수 있는 
            심플하고 우아한 도구입니다. 당신의 일상에 평온함을 더해 보세요.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start w-full">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
            >
              지금 시작하기
            </a>

            <a
              href="#features"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              기능 살펴보기
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-white/65">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              맞춤형 사운드 믹스
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              수면 • 휴식 • 집중
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              광고 없는 환경
            </span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 lg:hidden">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
            >
              <Image
                src="/google-play-badge.png"
                alt="Google Play에서 다운로드"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
            >
              <Image
                src="/apple-appstore-badge.png"
                alt="App Store에서 다운로드"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
          <DesktopDownloadQr />
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            주요 기능
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            가장 순수한 형태의 평온함
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">맞춤형 사운드 믹서</h3>
            <p className="mt-4 leading-7 text-white/70">
              빗소리, 바람소리, 백색소음 등을 자유롭게 조합하여 당신에게 
              가장 편안한 소리 환경을 디자인하세요.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">심플한 사용자 경험</h3>
            <p className="mt-4 leading-7 text-white/70">
              복잡한 메뉴 대신 직관적인 인터페이스로 누구나 쉽게 
              나만의 휴식 시간을 가질 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">모든 순간을 위한 동반자</h3>
            <p className="mt-4 leading-7 text-white/70">
              숙면 유도는 물론, 명상, 독서, 요가, 공부 등 일상의 
              모든 집중과 휴식의 순간에 함께합니다.
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
            우아하고 감각적인 디자인
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Calma 앱 인터페이스 - 다양한 사운드 카테고리"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="Calma 앱 인터페이스 - 사운드 믹서 커스터마이징"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma 앱 인터페이스 - 몰입형 오디오 레이어"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma 앱 인터페이스 - 저장된 믹스 관리"
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
            수면과 집중에 대해 더 알아보기
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">빗소리의 효과</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              규칙적인 빗소리가 마음을 진정시키고 숙면을 돕는 이유.
            </p>
          </Link>

          <Link
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">숙면을 위한 소리</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              백색소음, 빗소리, 부드러운 자연의 소리 비교.
            </p>
          </Link>

          <Link
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">공부에 좋은 소리</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              집중력을 극대화하고 소음을 차단하는 최적의 환경.
            </p>
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma란 무엇인가요?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma는 맞춤형 사운드 믹스를 통해 더 나은 수면, 휴식, 집중을 돕는 사운드 믹서 앱입니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma는 누구에게 적합한가요?</h3>
            <p className="mt-3 leading-7 text-white/70">
              더 평온한 취침 루틴, 퇴근 후의 평화로운 휴식, 혹은 공부와 업무 집중을 위한 소리 환경이 필요한 모든 분들께 적합합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">나만의 사운드 믹스를 만들 수 있나요?</h3>
            <p className="mt-3 leading-7 text-white/70">
              네. Calma는 하나의 정해진 트랙을 듣는 대신, 당신만의 휴식 사운드 환경을 직접 조성할 수 있도록 설계되었습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma는 어디서 다운로드할 수 있나요?</h3>
            <p className="mt-3 leading-7 text-white/70">
              현재 Android(Google Play)와 iOS(App Store)에서 바로 이용하실 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma는 무료인가요, 아니면 구독이 필요한가요?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma는 무료 버전을 제공하며, 한 번의 결제로 평생 프리미엄 기능을 사용할 수 있습니다. 월간 또는 연간 구독이 필요하지 않습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma는 오프라인에서 작동하나요?</h3>
            <p className="mt-3 leading-7 text-white/70">
              네, Calma는 완전히 오프라인에서 작동합니다. 인터넷 연결 없이도 소리를 믹스하고 들을 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Calma에 백색소음, 갈색소음, 핑크소음이 포함되어 있나요?</h3>
            <p className="mt-3 leading-7 text-white/70">
              네, Calma에는 고품질의 백색소음, 갈색소음, 핑크소음 및 녹색소음이 포함되어 있으며 비, 바다, 선풍기 및 자연 소리와 혼합할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:text-left lg:items-center">
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Calma로 새로운 일상을 만드세요
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              지금 앱을 다운로드하고 나만의 평온한 순간을 디자인해 보세요.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 lg:hidden">
              <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition hover:scale-[1.02]"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Google Play"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition hover:scale-[1.02]"
              >
                <Image
                  src="/apple-appstore-badge.png"
                  alt="App Store"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
            <DesktopDownloadQr />
          </div>
        </div>
      </section>
    </main>
  );
}
