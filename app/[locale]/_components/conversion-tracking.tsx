"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function compactLabel(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 60);
}

function getLinkLocation(anchor: HTMLAnchorElement) {
  if (anchor.dataset.ctaLocation) return anchor.dataset.ctaLocation;
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  if (anchor.closest("article")) return "article";
  return "page";
}

export default function ConversionTracking() {
  useEffect(() => {
    const trackConversionClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const destination = new URL(anchor.href, window.location.href);
      const isGooglePlay = destination.hostname === "play.google.com";
      const isAppStore = destination.hostname === "apps.apple.com";
      const linkText = compactLabel(anchor.textContent || anchor.getAttribute("aria-label") || "cta");
      const pagePath = window.location.pathname;
      const content = compactLabel(`${pagePath}_${linkText}`);
      const linkLocation = getLinkLocation(anchor);
      const isDownloadPage = destination.origin === window.location.origin && /\/download\/?$/.test(destination.pathname);

      if (anchor.dataset.ctaLocation || isDownloadPage) {
        window.gtag?.("event", "cta_click", {
          page_path: pagePath,
          link_text: linkText,
          link_location: linkLocation,
          link_url: destination.pathname,
        });
      }

      if (!isGooglePlay && !isAppStore) return;

      const store = isGooglePlay ? "google_play" : "app_store";

      if (isGooglePlay && !destination.searchParams.has("referrer")) {
        const referrer = new URLSearchParams({
          utm_source: "website",
          utm_medium: "organic_landing",
          utm_campaign: "seo",
          utm_content: content,
        });
        destination.searchParams.set("referrer", referrer.toString());
      }

      if (isAppStore) {
        destination.searchParams.set("pt", "127453443");
        destination.searchParams.set("ct", content || "seo");
      }

      anchor.href = destination.toString();
      window.gtag?.("event", "store_click", {
        store,
        page_path: pagePath,
        link_text: linkText,
        link_location: linkLocation,
      });
    };

    document.addEventListener("click", trackConversionClick, { capture: true });
    return () => document.removeEventListener("click", trackConversionClick, { capture: true });
  }, []);

  return null;
}
