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
  title: "Calma | Links",
  description:
    "Finde Calma bei Google Play und im App Store und besuche unsere offiziellen Social-Media-Kanäle.",
  alternates: {
    canonical: "https://www.calmasounds.com/bio",
  },
  openGraph: {
    title: "Calma | Links",
    description:
      "Finde Calma bei Google Play und im App Store und besuche unsere offiziellen Social-Media-Kanäle.",
    url: "https://www.calmasounds.com/bio",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | Links",
    description:
      "Finde Calma bei Google Play und im App Store und besuche unsere offiziellen Social-Media-Kanäle.",
  },
};

export default function BioPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <a href="/" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Calma Sounds Logo - Schlaf & Entspannung App"
            width={120}
            height={120}
            className="h-[120px] w-[120px] object-contain"
            priority
          />
        </a>

        <p className="mt-2 text-center text-sm italic tracking-[0.08em] text-white/60">
          Deine Ruhe, mit Absicht
        </p>

        <p className="mt-4 max-w-sm text-center leading-7 text-white/70">
          Schlafe, entspanne und konzentriere dich mit personalisierten Klanglandschaften 
          und beruhigenden täglichen Ritualen.
        </p>
        <div className="mt-8 flex w-full flex-col gap-4">
            <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Calma im Google Play Store herunterladen (öffnet in neuem Fenster)"
                className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
                <FaGooglePlay className="text-lg" />
                <span>Bei Google Play laden</span>
            </a>

            <a
                href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Calma im Apple App Store herunterladen (öffnet in neuem Fenster)"
                className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
                <FaAppStore className="text-lg" />
                <span>Im App Store laden</span>
            </a>

            <a
                href="/"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaGlobe className="text-lg" />
                <span>calmasounds.com besuchen</span>
            </a>

            <a
                href="https://www.tiktok.com/@.calma.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Calma auf TikTok folgen (öffnet in neuem Fenster)"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaTiktok className="text-lg" />
                <span>TikTok</span>
            </a>

            <a
                href="https://www.instagram.com/calma.app.official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Calma auf Instagram folgen (öffnet in neuem Fenster)"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaInstagram className="text-lg" />
                <span>Instagram</span>
            </a>

            <a
                href="https://www.youtube.com/@CalmaApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Calma auf YouTube folgen (öffnet in neuem Fenster)"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaYoutube className="text-lg" />
                <span>YouTube</span>
            </a>

            <a
                href="https://www.facebook.com/profile.php?id=61580760185966"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Calma auf Facebook folgen (öffnet in neuem Fenster)"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaFacebookF className="text-lg" />
                <span>Facebook</span>
            </a>
            </div>
        <p className="mt-8 text-center text-sm text-white/50">
          Offizielle Calma-Links
        </p>
      </div>
    </main>
  );
}
