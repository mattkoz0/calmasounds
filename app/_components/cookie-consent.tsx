"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md">
      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl transition hover:border-white/20">
        <h2 className="text-lg font-semibold text-white">We use cookies</h2>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Calma uses cookies to understand how you use our site and to improve
          your experience. By clicking "Accept", you agree to our use of cookies
          for analytics.{" "}
          <Link
            href="/privacy-policy"
            className="text-white underline underline-offset-4 hover:text-white/80"
          >
            Read our Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={acceptCookies}
            className="w-full rounded-2xl bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:scale-[1.02] active:scale-95"
          >
            Accept
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 active:scale-95"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
