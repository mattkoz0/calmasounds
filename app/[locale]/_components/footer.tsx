"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t("sleepSoundsApp"), href: "/sleep-sounds-app" },
    { name: t("relaxingSounds"), href: "/relaxing-sounds" },
    { name: t("focusSoundsApp"), href: "/focus-sounds-app" },
    { name: t("whiteNoiseApp"), href: "/white-noise-app" },
    { name: t("soundMixerApp"), href: "/sound-mixer-app" },
    { name: t("binauralBeats"), href: "/blog/binaural-beats-for-sleep-and-focus" },
  ];

  const guideLinks = [
    { name: t("rainVsWhiteNoise"), href: "/blog/rain-sounds-vs-white-noise" },
    { name: t("bestSoundsForSleep"), href: "/blog/best-sounds-for-sleep" },
    { name: t("bedtimeRoutineGuide"), href: "/blog/how-to-build-a-bedtime-routine" },
    { name: t("whiteNoiseForSleep"), href: "/blog/white-noise-for-sleep" },
    { name: t("bestSoundsForStudying"), href: "/blog/best-sounds-for-studying" },
    { name: t("support"), href: "/support" },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center">
            <Link href="/" aria-label="Calma home">
              <Image
                src="/logo.png"
                alt="Calma logo"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-contain"
              />
            </Link>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-white/60">
            {t("tagline")}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            {t("product")}
          </h4>
          <ul className="mt-4 space-y-3 text-white/70">
            {footerLinks.map((link) => (
              <li key={link.href} className="flex">
                <Link href={link.href} className="transition hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            {t("guides")}
          </h4>
          <ul className="mt-4 space-y-3 text-white/70">
            {guideLinks.map((link) => (
              <li key={link.name} className="flex">
                <Link href={link.href} className="transition hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-white/50 sm:flex-row">
          <p>{t("allRightsReserved", { year: currentYear })}</p>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/" className="transition hover:text-white">
                {t("home")}
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Google Play
              </a>
              <Link href="/bio" className="transition hover:text-white">
                {t("allLinks")}
              </Link>
              <Link href="/privacy-policy" className="transition hover:text-white">
                {t("privacyPolicy")}
              </Link>
              <Link href="/terms-of-service" className="transition hover:text-white">
                {t("termsOfService")}
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-white/40">
              <a
                href="https://www.tiktok.com/@.calma.app"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com/calma.app.official"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@CalmaApp"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580760185966"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
