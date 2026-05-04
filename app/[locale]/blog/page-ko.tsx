import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calma 블로그 | 수면, 백색소음 및 집중 가이드",
  description:
    "수면 유도 소리, 백색소음, 취침 루틴 및 집중력 향상을 위한 사운드스케이프에 대한 Calma 가이드를 살펴보세요.",
  alternates: {
    canonical: "https://www.calmasounds.com/ko/blog",
  },
  openGraph: {
    title: "Calma 블로그 | 수면, 백색소음 및 집중 가이드",
    description:
      "수면 유도 소리, 백색소음, 취침 루틴 및 집중력 향상을 위한 사운드스케이프에 대한 Calma 가이드를 살펴보세요.",
    url: "https://www.calmasounds.com/ko/blog",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma 블로그 | 수면, 백색소음 및 집중 가이드",
    description:
      "수면 유도 소리, 백색소음, 취침 루틴 및 집중력 향상을 위한 사운드스케이프에 대한 Calma 가이드를 살펴보세요.",
  },
};

const articles = [
  {
    href: "/blog/benefits-of-nature-sounds-for-relaxation",
    title: "깊은 휴식을 위한 자연의 소리",
    description:
      "빗소리와 파도 소리 같은 자연의 사운드스케이프가 어떻게 천연 백색소음 역할을 하여 취침 루틴을 개선하는지 알아보세요.",
  },
  {
    href: "/blog/best-sounds-for-sleep",
    title: "숙면을 위한 최고의 소리",
    description:
      "빗소리, 백색소음 및 부드러운 수면 사운드스케이프에 대한 실용적인 가이드.",
  },
  {
    href: "/blog/white-noise-for-sleep",
    title: "수면을 위한 백색소음",
    description:
      "백색소음이 도움이 되는 경우와 더 평온한 취침 환경을 만드는 방법.",
  },
  {
    href: "/blog/rain-sounds-vs-white-noise",
    title: "빗소리 vs 백색소음",
    description:
      "정서적 편안함, 소음 마스킹 및 취침 분위기를 비교해 보세요.",
  },
  {
    href: "/blog/how-to-build-a-bedtime-routine",
    title: "취침 루틴을 만드는 법",
    description:
      "수면을 돕는 더 차분한 저녁 리듬을 만드는 간단한 방법들.",
  },
  {
    href: "/blog/best-sounds-for-studying",
    title: "공부에 좋은 최고의 소리",
    description:
      "집중력 향상과 깊은 몰입에 도움이 되는 소리의 종류를 찾아보세요.",
  },
  {
    href: "/blog/binaural-beats-for-sleep-and-focus",
    title: "수면과 집중을 위한 바이노럴 비트",
    description:
      "바이노럴 비트가 평온함과 집중을 어떻게 돕는지에 대한 간단한 소개.",
  },
  {
    href: "/blog/guided-breathing-techniques",
    title: "마음챙김 호흡법 가이드",
    description:
      "휴식, 균형, 수면 및 집중을 위한 차분한 호흡법을 살펴보세요.",
  },
  {
    href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
    title: "브라운 노이즈 vs 화이트 노이즈 vs 핑크 노이즈",
    description:
      "노이즈 색상 간의 차이점을 알아보고 집중이나 수면에 가장 적합한 것을 찾아보세요.",
  },
  {
    href: "/blog/rain-sounds-for-better-sleep-and-focus",
    title: "빗소리가 숙면과 집중의 비결인 이유",
    description: "일정한 빗소리가 마음을 진정시키고 불면증을 물리치며 집중력을 유지하는 데 완벽한 이유를 알아보세요.",
  },
  {
    href: "/blog/green-noise-for-sleep",
    title: "수면을 위한 그린 노이즈: 자연스러운 휴식 방법",
    description: "그린 노이즈가 무엇인지, 왜 그 자연스러운 주파수가 수면에 완벽한 사운드스케이프가 될 수 있는지 알아보세요.",
  },
  {
    href: "/blog/best-free-white-noise-app",
    title: "최고의 무료 백색 소음 수면 앱",
    description: "무료 수면 소리를 찾고 계신가요? Calma가 부드러운 수면 소리를 위한 완벽한 선택인 이유를 알아보세요.",
  },
  {
    href: "/blog/best-color-noise-for-adhd",
    title: "ADHD에 가장 좋은 소음 색깔은? 갈색 소음 vs 백색 소음",
    description: "ADHD, 집중력, 과잉 자극에 갈색 소음이 종종 선호되는 이유를 알아보세요.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Calma 블로그
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          수면, 백색소음 및 집중 가이드
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          수면 유도 소리, 취침 루틴, 백색소음, 휴식 및 집중력 향상에 대한 
          실용적인 기사들을 살펴보세요.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-4 leading-7 text-white/70">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
