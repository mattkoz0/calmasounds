import type { MetadataRoute } from "next";
import { pathnamesMapping } from "@/app/utils/seo";

const BASE_URL = "https://www.calmasounds.com";
const locales = ["en", "es", "pl", "de", "fr", "ko", "ja", "pt-BR"] as const;

const routes = [
  "",
  "/blog",
  "/sleep-sounds-app",
  "/relaxing-sounds",
  "/focus-sounds-app",
  "/white-noise-app",
  "/sound-mixer-app",
  "/bio",
  "/press",
  "/blog/benefits-of-nature-sounds-for-relaxation",
  "/blog/rain-sounds-vs-white-noise",
  "/blog/best-sounds-for-sleep",
  "/blog/how-to-build-a-bedtime-routine",
  "/blog/white-noise-for-sleep",
  "/blog/best-sounds-for-studying",
  "/blog/binaural-beats-for-sleep-and-focus",
  "/blog/guided-breathing-techniques",
  "/blog/brown-noise-vs-white-noise-vs-pink-noise",
  "/blog/rain-sounds-for-better-sleep-and-focus",
  "/blog/green-noise-for-sleep",
  "/blog/best-free-white-noise-app",
  "/blog/best-color-noise-for-adhd",
  "/blog/sounds-for-tinnitus-relief",
  "/blog/white-noise-for-babies",
  "/baby-sleep-sounds-app",
  "/brown-noise-app",
  "/nature-sounds-app",
  "/tinnitus-sounds-app",
  "/offline-sleep-sounds-app",
  "/best-sleep-sounds-app-without-subscription",
  "/calma-vs-bettersleep",
  "/calma-vs-calm",
  "/white-noise-brown-noise-pink-noise",
  "/privacy-policy",
  "/terms-of-service",
  "/support",
] as const;

function localizedPath(route: string, locale: string) {
  const translatedPath = pathnamesMapping[route]?.[locale] ?? route;
  return locale === "en" ? translatedPath : `/${locale}${translatedPath}`;
}

function languageAlternates(route: string) {
  return {
    "x-default": `${BASE_URL}${localizedPath(route, "en")}`,
    ...Object.fromEntries(
      locales.map((locale) => [
        locale,
        `${BASE_URL}${localizedPath(route, locale)}`,
      ])
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${BASE_URL}${localizedPath(route, locale)}`,
      alternates: {
        languages: languageAlternates(route),
      },
    }))
  );
}
