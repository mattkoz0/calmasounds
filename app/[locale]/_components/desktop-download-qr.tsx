import { useTranslations } from "next-intl";
import Image from "next/image";

export default function DesktopDownloadQr() {
  const t = useTranslations("Download");

  return (
    <div className="hidden lg:flex flex-col items-center rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md w-full max-w-[260px] transition duration-300 hover:border-white/20 hover:bg-slate-900/50">
      <div className="relative rounded-2xl bg-white p-3 shadow-lg">
        <Image
          src="/calma-download-qr.png"
          alt="Scan QR code to download Calma"
          width={130}
          height={130}
          className="rounded-xl"
          priority
        />
      </div>

      <p className="mt-4 text-center text-sm font-semibold text-white">
        {t("scanToDownload")}
      </p>

      <p className="mt-1.5 text-center text-xs text-white/50 leading-relaxed max-w-[200px]">
        {t("scanSubtitle")}
      </p>
      
      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
        <span>App Store</span>
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span>Google Play</span>
      </div>
    </div>
  );
}
