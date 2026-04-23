"use client";

import { usePathname, useRouter, Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            defaultValue={locale}
            onChange={handleLanguageChange}
            className="rounded-lg border border-white/10 bg-white/5 py-1.5 pl-2 pr-8 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%23ffffff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat"
            aria-label="Select language"
          >
            <option value="en" className="bg-slate-900 text-white">EN</option>
            <option value="es" className="bg-slate-900 text-white">ES</option>
            <option value="pl" className="bg-slate-900 text-white">PL</option>
            <option value="de" className="bg-slate-900 text-white">DE</option>
          </select>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 px-5 py-2 text-sm font-bold text-white shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] active:scale-95"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span className="relative flex items-center gap-1.5">
                {t("getCalma")}
                <svg 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in duration-200">
                <a
                  href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <FaGooglePlay className="h-4 w-4 text-emerald-400" />
                  {t("googlePlay")}
                </a>
                <a
                  href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <FaApple className="h-4 w-4 text-white" />
                  {t("appStore")}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
