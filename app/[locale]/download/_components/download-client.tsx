"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function DownloadClient() {
  const t = useTranslations("Download");
  const [statusText, setStatusText] = useState<string>("");
  const [detectedPlatform, setDetectedPlatform] = useState<"ios" | "android" | "desktop" | null>(null);
  const [urls, setUrls] = useState({
    appStore: "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    googlePlay: "https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
  });

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const searchParams = new URLSearchParams(window.location.search);
    
    const utmSource = searchParams.get("utm_source") || "website";
    const utmMedium = searchParams.get("utm_medium") || "qr";
    const utmCampaign = searchParams.get("utm_campaign") || "desktop_download";
    const utmContent = searchParams.get("utm_content") || "";

    const isIos = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isMacIpados = /Macintosh/.test(userAgent) && navigator.maxTouchPoints > 0;
    const isAndroid = /Android/i.test(userAgent);

    const appStoreParams = new URLSearchParams();
    appStoreParams.set("pt", "127453443");
    appStoreParams.set("ct", utmCampaign);
    appStoreParams.set("utm_source", utmSource);
    appStoreParams.set("utm_medium", utmMedium);
    appStoreParams.set("utm_campaign", utmCampaign);
    if (utmContent) appStoreParams.set("utm_content", utmContent);

    const referrerParts = [
      `utm_source=${encodeURIComponent(utmSource)}`,
      `utm_medium=${encodeURIComponent(utmMedium)}`,
      `utm_campaign=${encodeURIComponent(utmCampaign)}`
    ];
    if (utmContent) {
      referrerParts.push(`utm_content=${encodeURIComponent(utmContent)}`);
    }
    const referrer = referrerParts.join("&");

    const appStoreUrl = `https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923?${appStoreParams.toString()}`;
    const googlePlayUrl = `https://play.google.com/store/apps/details?id=pl.mitysoft.calma&referrer=${encodeURIComponent(referrer)}`;

    setUrls({
      appStore: appStoreUrl,
      googlePlay: googlePlayUrl
    });

    if (isIos || isMacIpados) {
      setDetectedPlatform("ios");
      setStatusText(t("redirectingAppStore"));
      window.location.href = appStoreUrl;
    } else if (isAndroid) {
      setDetectedPlatform("android");
      setStatusText(t("redirectingGooglePlay"));
      window.location.href = googlePlayUrl;
    } else {
      setDetectedPlatform("desktop");
    }
  }, [t]);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[80px] pointer-events-none" />

      <section className="relative z-10 mx-auto max-w-xl text-center flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Calma logo"
          width={120}
          height={120}
          className="h-[120px] w-[120px] object-contain mb-8 animate-pulse"
          priority
        />

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
          {t("title")}
        </h1>

        <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
          {t("description")}
        </p>

        {detectedPlatform && detectedPlatform !== "desktop" ? (
          <div className="mt-12 flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin" />
            </div>
            
            <p className="text-emerald-400 font-medium animate-pulse text-lg">
              {statusText}
            </p>
            
            <p className="mt-8 text-xs text-slate-500 max-w-xs leading-normal">
              {t("fallbackText")}
            </p>
            
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center w-full">
              {detectedPlatform === "ios" ? (
                <a
                  href={urls.appStore}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl transition hover:scale-[1.02] hover:bg-slate-100"
                >
                  <FaApple className="h-5 w-5" />
                  {t("appStore")}
                </a>
              ) : (
                <a
                  href={urls.googlePlay}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.02] hover:bg-emerald-400"
                >
                  <FaGooglePlay className="h-4.5 w-4.5" />
                  {t("googlePlay")}
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-12 w-full">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={urls.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl transition duration-300 hover:scale-[1.03] hover:shadow-white/10"
              >
                <FaApple className="h-5 w-5" />
                {t("appStore")}
              </a>

              <a
                href={urls.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.03] hover:bg-white/10"
              >
                <FaGooglePlay className="h-4.5 w-4.5 text-emerald-400" />
                {t("googlePlay")}
              </a>
            </div>
            
            <a
              href="/"
              className="mt-8 inline-block text-xs text-slate-500 hover:text-slate-300 transition underline underline-offset-4"
            >
              Back to homepage
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
