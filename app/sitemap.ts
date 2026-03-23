import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.calmasounds.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.calmasounds.com/sleep-sounds-app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.calmasounds.com/relaxing-sounds",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.calmasounds.com/focus-sounds-app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.calmasounds.com/white-noise-app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.calmasounds.com/sound-mixer-app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.calmasounds.com/blog/rain-sounds-vs-white-noise",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/best-sounds-for-sleep",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/how-to-build-a-bedtime-routine",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/white-noise-for-sleep",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/best-sounds-for-studying",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
    url: "https://www.calmasounds.com/blog/binaural-beats-for-sleep-and-focus",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  ];
}