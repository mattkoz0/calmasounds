import type { MetadataRoute } from "next";
import { pathnamesMapping } from "@/app/utils/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const url = (path: string) => `https://www.calmasounds.com${path}`;

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/sleep-sounds-app", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/relaxing-sounds", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/focus-sounds-app", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/white-noise-app", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/sound-mixer-app", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/bio", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/blog/benefits-of-nature-sounds-for-relaxation", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/rain-sounds-vs-white-noise", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-sounds-for-sleep", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/how-to-build-a-bedtime-routine", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/white-noise-for-sleep", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-sounds-for-studying", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/binaural-beats-for-sleep-and-focus", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/guided-breathing-techniques", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/brown-noise-vs-white-noise-vs-pink-noise", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/rain-sounds-for-better-sleep-and-focus", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/green-noise-for-sleep", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-free-white-noise-app", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-color-noise-for-adhd", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/sounds-for-tinnitus-relief", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/baby-sleep-sounds-app", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/brown-noise-app", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/nature-sounds-app", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/tinnitus-sounds-app", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/offline-sleep-sounds-app", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/best-sleep-sounds-app-without-subscription", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/calma-vs-bettersleep", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/calma-vs-calm", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/white-noise-brown-noise-pink-noise", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/support", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => {
    const getPathForLocale = (loc: string) => {
      const mapping = pathnamesMapping[route.path];
      if (mapping && mapping[loc]) {
        return mapping[loc];
      }
      return route.path;
    };

    return {
      url: url(getPathForLocale("en")),
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          "x-default": url(getPathForLocale("en")),
          en: url(getPathForLocale("en")),
          es: url(`/es${getPathForLocale("es")}`),
          pl: url(`/pl${getPathForLocale("pl")}`),
          de: url(`/de${getPathForLocale("de")}`),
          fr: url(`/fr${getPathForLocale("fr")}`),
          ko: url(`/ko${getPathForLocale("ko")}`),
          ja: url(`/ja${getPathForLocale("ja")}`),
          "pt-BR": url(`/pt-BR${getPathForLocale("pt-BR")}`),
        },
      },
    };
  });
}