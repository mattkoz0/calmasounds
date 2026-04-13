import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: "https://www.calmasounds.com",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.calmasounds.com/blog",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.calmasounds.com/sleep-sounds-app",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.calmasounds.com/relaxing-sounds",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.calmasounds.com/focus-sounds-app",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.calmasounds.com/white-noise-app",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.calmasounds.com/sound-mixer-app",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.calmasounds.com/bio",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.calmasounds.com/blog/benefits-of-nature-sounds-for-relaxation",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/rain-sounds-vs-white-noise",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/best-sounds-for-sleep",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/how-to-build-a-bedtime-routine",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/white-noise-for-sleep",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/best-sounds-for-studying",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/binaural-beats-for-sleep-and-focus",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/guided-breathing-techniques",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/blog/brown-noise-vs-white-noise-vs-pink-noise",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.calmasounds.com/privacy-policy",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://www.calmasounds.com/terms-of-service",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://www.calmasounds.com/support",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}