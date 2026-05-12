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
  title: "Calma公式リンクとソーシャルメディア | Calma",
  description:
    "Calmaの公式リンクを見つけ、Google Playでアプリをダウンロードし、ソーシャルメディアでつながりましょう。",
  alternates: {
    canonical: "https://www.calmasounds.com/ja/bio",
  },
  openGraph: {
    title: "Calma公式リンクとソーシャルメディア | Calma",
    description:
    "Calmaの公式リンクを見つけ、Google Playでアプリをダウンロードし、ソーシャルメディアでつながりましょう。",
    url: "https://www.calmasounds.com/ja/bio",
    siteName: "Calma",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma公式リンクとソーシャルメディア | Calma",
    description:
    "Calmaの公式リンクを見つけ、Google Playでアプリをダウンロードし、ソーシャルメディアでつながりましょう。",
  },
};

export default function BioPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <a href="/ja" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Calma Sounds ロゴ - 睡眠＆リラックスアプリ"
            width={120}
            height={120}
            className="h-[120px] w-[120px] object-contain"
            priority
          />
        </a>

        <p className="mt-2 text-center text-sm italic tracking-[0.08em] text-white/60">
          あなたの落ち着きをデザインする
        </p>

        <p className="mt-4 max-w-sm text-center leading-7 text-white/70">
          パーソナライズされたサウンドスケープと落ち着く毎日の儀式で、睡眠、リラックス、集中を。
        </p>
        <div className="mt-8 flex w-full flex-col gap-4">
            <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Play StoreからCalmaをダウンロード（新しいウィンドウで開きます）"
                className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
                <FaGooglePlay className="text-lg" />
                <span>Google Playでダウンロード</span>
            </a>

            <a
                href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apple App StoreからCalmaをダウンロード（新しいウィンドウで開きます）"
                className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
                <FaAppStore className="text-lg" />
                <span>App Storeでダウンロード</span>
            </a>

            <a
                href="/ja"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaGlobe className="text-lg" />
                <span>calmasounds.comにアクセス</span>
            </a>

            <a
                href="https://www.tiktok.com/@.calma.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTokでCalmaをフォロー（新しいウィンドウで開きます）"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaTiktok className="text-lg" />
                <span>TikTok</span>
            </a>

            <a
                href="https://www.instagram.com/calma.app.official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="InstagramでCalmaをフォロー（新しいウィンドウで開きます）"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaInstagram className="text-lg" />
                <span>Instagram</span>
            </a>

            <a
                href="https://www.youtube.com/@CalmaApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTubeでCalmaをフォロー（新しいウィンドウで開きます）"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaYoutube className="text-lg" />
                <span>YouTube</span>
            </a>

            <a
                href="https://www.facebook.com/profile.php?id=61580760185966"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FacebookでCalmaをフォロー（新しいウィンドウで開きます）"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaFacebookF className="text-lg" />
                <span>Facebook</span>
            </a>
            </div>
        <p className="mt-8 text-center text-sm text-white/50">
          Calmaの公式リンク
        </p>
      </div>
    </main>
  );
}
