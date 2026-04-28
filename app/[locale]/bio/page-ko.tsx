import type { Metadata } from "next";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaGooglePlay,
  FaAppStore,
  FaGlobe,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Calma | 공식 링크",
  description:
    "Google Play와 App Store에서 Calma를 만나보고 공식 소셜 채널을 살펴보세요.",
  alternates: {
    canonical: "https://www.calmasounds.com/ko/bio",
  },
  openGraph: {
    title: "Calma | 링크",
    description:
      "Google Play에서 Calma를 만나보고 공식 소셜 채널을 살펴보세요.",
    url: "https://www.calmasounds.com/ko/bio",
    siteName: "Calma",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | 링크",
    description:
      "Google Play에서 Calma를 만나보고 공식 소셜 채널을 살펴보세요.",
  },
};

export default function BioPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <a href="/ko" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Calma Sounds 로고 - 수면 및 휴식 앱"
            width={120}
            height={120}
            className="h-[120px] w-[120px] object-contain"
            priority
          />
        </a>

        <p className="mt-2 text-center text-sm italic tracking-[0.08em] text-white/60">
          당신만의 평온함, 디자인되다
        </p>

        <p className="mt-4 max-w-sm text-center leading-7 text-white/70">
          개인화된 사운드스케이프와 차분한 일상 리추얼로 수면, 휴식, 그리고 집중을 경험하세요.
        </p>

        <div className="mt-8 flex w-full flex-col gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play 스토어에서 Calma 다운로드"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
          >
            <FaGooglePlay className="text-lg" />
            <span>Google Play에서 다운로드</span>
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple App Store에서 Calma 다운로드"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
          >
            <FaAppStore className="text-lg" />
            <span>App Store에서 다운로드</span>
          </a>

          <a
            href="/ko"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
          >
            <FaGlobe className="text-lg" />
            <span>calmasounds.com 방문하기</span>
          </a>

          <a
            href="https://www.tiktok.com/@.calma.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok에서 Calma 팔로우"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
          >
            <FaTiktok className="text-lg" />
            <span>TikTok</span>
          </a>

          <a
            href="https://www.instagram.com/calma.app.official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram에서 Calma 팔로우"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
          >
            <FaInstagram className="text-lg" />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/@CalmaApp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube에서 Calma 팔로우"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
          >
            <FaYoutube className="text-lg" />
            <span>YouTube</span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61580760185966"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook에서 Calma 팔로우"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
          >
            <FaFacebookF className="text-lg" />
            <span>Facebook</span>
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-white/50">
          Calma 공식 링크
        </p>
      </div>
    </main>
  );
}
