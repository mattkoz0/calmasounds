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
    "Encuentra Calma en Google Play y explora nuestros canales sociales oficiales.",
  alternates: {
    canonical: "https://www.calmasounds.com/bio",
  },
  openGraph: {
    title: "Calma | Links",
    description:
      "Encuentra Calma en Google Play y explora nuestros canales sociales oficiales.",
    url: "https://www.calmasounds.com/bio",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | Links",
    description:
      "Encuentra Calma en Google Play y explora nuestros canales sociales oficiales.",
  },
};

export default function BioPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <a href="/" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Calma Sounds logo - Sleep & Relax App"
            width={120}
            height={120}
            className="h-[120px] w-[120px] object-contain"
            priority
          />
        </a>

        <p className="mt-2 text-center text-sm italic tracking-[0.08em] text-white/60">
          Tu calma, por diseño
        </p>

        <p className="mt-4 max-w-sm text-center leading-7 text-white/70">
          Duerme, relájate y concéntrate con paisajes sonoros personalizados 
          y rituales de calma diarios.
        </p>
        <div className="mt-8 flex w-full flex-col gap-4">
            <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar Calma en Google Play Store (abre en nueva ventana)"
                className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
                <FaGooglePlay className="text-lg" />
                <span>Descargar en Google Play</span>
            </a>

            <a
                href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar Calma en Apple App Store (abre en nueva ventana)"
                className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
                <FaAppStore className="text-lg" />
                <span>Descargar en App Store</span>
            </a>

            <a
                href="/"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaGlobe className="text-lg" />
                <span>Visita calmasounds.com</span>
            </a>

            <a
                href="https://www.tiktok.com/@.calma.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Calma en TikTok (abre en nueva ventana)"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaTiktok className="text-lg" />
                <span>TikTok</span>
            </a>

            <a
                href="https://www.instagram.com/calma.app.official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Calma en Instagram (abre en nueva ventana)"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaInstagram className="text-lg" />
                <span>Instagram</span>
            </a>

            <a
                href="https://www.youtube.com/@CalmaApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Calma en YouTube (abre en nueva ventana)"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaYoutube className="text-lg" />
                <span>YouTube</span>
            </a>

            <a
                href="https://www.facebook.com/profile.php?id=61580760185966"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Calma en Facebook (abre en nueva ventana)"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-white/10 to-slate-800/40 px-6 py-4 text-center font-medium text-white shadow-lg shadow-black/20 transition hover:border-white/30 hover:from-violet-500/30 hover:via-white/15 hover:to-slate-700/50"
            >
                <FaFacebookF className="text-lg" />
                <span>Facebook</span>
            </a>
            </div>
        <p className="mt-8 text-center text-sm text-white/50">
          Enlaces oficiales de Calma
        </p>
      </div>
    </main>
  );
}