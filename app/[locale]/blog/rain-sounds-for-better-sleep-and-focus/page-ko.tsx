import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";

export const metadata: Metadata = {
  title: "빗소리가 더 나은 수면과 집중력을 위한 궁극적인 비밀인 이유 | Calma 블로그",
  description:
    "일정한 빗소리가 마음을 진정시키고 불면증을 이겨내며 깊은 작업을 하는 동안 집중력을 유지하는 데 왜 완벽한지 알아보세요. 그 뒤에 숨겨진 과학을 알아보세요.",
  alternates: {
    canonical: "https://www.calmasounds.com/ko/blog/rain-sounds-for-better-sleep-and-focus",
  },
  openGraph: {
    title: "빗소리가 더 나은 수면과 집중력을 위한 궁극적인 비밀인 이유",
    description:
      "일정한 빗소리가 마음을 진정시키고 불면증을 이겨내며 집중력을 유지하는 데 완벽한 이유를 알아보세요.",
    url: "https://www.calmasounds.com/ko/blog/rain-sounds-for-better-sleep-and-focus",
    siteName: "Calma",
    locale: "ko_KR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "빗소리가 더 나은 수면과 집중력을 위한 궁극적인 비밀인 이유",
  description:
    "일정한 빗소리가 마음을 진정시키고 불면증을 이겨내며 깊은 작업을 하는 동안 집중력을 유지하는 데 왜 완벽한지 알아보세요.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
    logo: {
      "@type": "ImageObject",
      url: "https://www.calmasounds.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.calmasounds.com/ko/blog/rain-sounds-for-better-sleep-and-focus",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "홈",
      item: "https://www.calmasounds.com/ko",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "블로그",
      item: "https://www.calmasounds.com/ko/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "수면과 집중을 위한 빗소리",
      item: "https://www.calmasounds.com/ko/blog/rain-sounds-for-better-sleep-and-focus",
    },
  ],
};

export default function RainSoundsBlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          >
            ← 블로그로 돌아가기
          </Link>
        </div>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          빗소리가 더 나은 수면과 집중력을 위한 궁극적인 비밀인 이유
        </h1>
        
        <div className="mt-8">
          {/* YouTube Shorts Embed */}
          <div className="flex justify-center mb-8">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <YouTubeEmbed
                videoId="ds-fFkoWBUo"
                title="YouTube 비디오 플레이어"
              />
            </div>
          </div>

          <p className="mt-6 text-lg leading-8 text-white/80">
            창문을 때리는 빗방울의 꾸준한 후두둑 소리가 유난히 편안한 분위기를 자아낸다는 것은 보편적으로 인정되는 사실입니다. 하지만 아늑함을 느끼는 것을 넘어서 <strong>빗소리</strong>의 이점을 뒷받침하는 실제 과학이 있습니다. 밤에 잠들기 위해 고군분투하든, 공부하려고 할 때 산만함을 느끼든, 자연의 사운드스케이프를 통합하면 일상을 깊이 향상시킬 수 있습니다.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">수면 소리 이면의 마법</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            우리 뇌는 자연스럽게 패턴을 찾습니다. 떨어지는 비의 리드미컬하고 위협적이지 않은 소리는 종종 핑크 소음과 비교되는 지속적인 소리 담요를 만듭니다. 이 음향 담요는 (갑작스러운 교통 체증, 개 짖는 소리 또는 시끄러운 이웃과 같이) 당신을 깜짝 놀라 깨울 수 있는 방해되는 배경 소음을 차단합니다. 진짜 비 루프를 기반으로 구축된 <strong>수면 소리</strong>는 뇌가 안전함을 느끼게 하여 깊은 수면 주기로 부드럽게 이완되도록 돕습니다.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">집중 소리가 당신을 몰입하게 하는 이유</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            침묵이 집중력에 이상적으로 보일 수 있지만, 완전히 조용한 방은 아이러니하게도 아주 작은 배경 소음을 훨씬 더 산만하게 만들 수 있습니다. <strong>집중 소리</strong>를 소개합니다. 비는 능동적인 마스크 역할을 합니다. 폭풍우의 섬세하고 꾸준한 분위기를 들으면 갑작스러운 방해에 대한 뇌의 경계심을 줄일 수 있습니다. 공부, 독서 또는 오랜 시간 일하는 개인, 특히 ADHD를 관리하는 사람들에게 부드러운 이슬비는 의식적인 주의를 끌지 않고 지속적인 집중을 촉진하는 일관된 청각적 닻입니다.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">나만의 의식 만들기</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            모든 비 녹음이 동일하게 생성되는 것은 아닙니다. 어떤 사람들은 심하고 극적인 뇌우를 선호하는 반면, 다른 사람들은 나뭇잎을 때리는 부드러운 빗소리에 쉽게 잠듭니다. 현대 사운드 믹서 앱의 장점은 환경을 계층화할 수 있다는 것입니다. 고품질의 <strong>빗소리</strong>를 선택하고 이를 부드러운 바람이나 부드러운 피아노와 혼합하여 정확한 편안함 영역을 선별할 수 있습니다.
          </p>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">수면과 집중력을 업그레이드할 준비가 되셨나요?</h3>
            <p className="mt-4 leading-7 text-white/70">
              Calma 앱은 개인화된 백색 소음 레이어와 함께 정교하게 제작된 비 혼합을 제공합니다. 맞춤형 사운드스케이프를 구축하고 오디오 환경을 제어하십시오.
            </p>
            <div className="mt-6 flex justify-center sm:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="Google Play에서 Calma 앱 다운로드"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Google Play에서 다운로드"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
