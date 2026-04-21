import type { MetadataRoute } from "next";

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
    { path: "/baby-sleep-sounds-app", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/support", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: url(route.path),
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        en: url(route.path),
        es: url(`/es${route.path}`),
      },
    },
  }));
}