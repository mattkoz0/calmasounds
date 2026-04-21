"use client";

import { usePathname, useRouter, Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center" aria-label="Calma home - sleep sounds app">
            <Image
              src="/logo.png"
              alt="Calma Sounds logo - Sleep & Relax App"
              width={100}
              height={100}
              className="h-[100px] w-[100px] object-contain"
              priority
            />
          </Link>

          <p className="hidden text-sm italic tracking-[0.08em] text-white/60 lg:block">
            {t("subtitle")}
          </p>
        </div>

        <nav className="hidden gap-6 text-sm text-white/70 md:flex" aria-label="Main navigation">
          <Link href="/#features" className="transition hover:text-white">
            {t("features")}
          </Link>
          <Link href="/#faq" className="transition hover:text-white">
            {t("faq")}
          </Link>
          <Link href="/blog" className="transition hover:text-white">
            {t("blog")}
          </Link>
          <Link href="/support" className="transition hover:text-white">
            {t("support")}
          </Link>
          <Link href="/#download" className="transition hover:text-white">
            {t("download")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <select
            value={locale}
            onChange={handleLanguageChange}
            className="bg-white/5 border border-white/10 rounded-md px-2 py-1 text-sm text-white/80 focus:outline-none focus:ring-1 focus:ring-white/30"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Calma on Google Play Store (opens in a new window)"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 px-5 py-2 text-sm font-bold text-white shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] active:scale-95"
          >
            <span className="relative flex items-center gap-1.5">
              {t("getCalma")}
              <svg 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
