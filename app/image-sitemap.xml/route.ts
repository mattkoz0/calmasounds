import { NextResponse } from "next/server";

const BASE_URL = "https://www.calmasounds.com";

const locales = ["en", "es", "fr", "de", "pl", "pt-BR", "ko", "ja"];

const productPages = [
  "/white-noise-app",
  "/brown-noise-app",
  "/sleep-sounds-app",
  "/nature-sounds-app",
  "/focus-sounds-app",
  "/baby-sleep-sounds-app",
  "/tinnitus-sounds-app",
  "/relaxing-sounds",
  "/sound-mixer-app",
  "/offline-sleep-sounds-app",
  "/best-sleep-sounds-app-without-subscription",
  "/calma-vs-calm",
  "/calma-vs-bettersleep",
  "/white-noise-brown-noise-pink-noise",
];

const screenshots = [
  {
    loc: "/screenshots/1_en.png",
    title: "Calma App - Sound categories for sleep and relaxation",
  },
  {
    loc: "/screenshots/2_en.png",
    title: "Calma App - Customize white noise and brown noise",
  },
  {
    loc: "/screenshots/3_en.png",
    title: "Calma App - Sound mixer for sleep sounds",
  },
  {
    loc: "/screenshots/4_en.png",
    title: "Calma App - Create custom sound mixes",
  },
];

const ogImage = {
  loc: "/og-image.png",
  title: "Calma - Free Sleep Sounds, White Noise & Relaxation App",
};

function buildImageSitemap(): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Homepage with OG image
  for (const locale of locales) {
    const prefix = locale === "en" ? "" : `/${locale}`;
    xml += `  <url>
    <loc>${BASE_URL}${prefix}</loc>
    <image:image>
      <image:loc>${BASE_URL}${ogImage.loc}</image:loc>
      <image:title>${ogImage.title}</image:title>
    </image:image>
  </url>
`;
  }

  // Product pages with screenshots
  for (const page of productPages) {
    for (const locale of locales) {
      const prefix = locale === "en" ? "" : `/${locale}`;
      xml += `  <url>
    <loc>${BASE_URL}${prefix}${page}</loc>
`;
      for (const screenshot of screenshots) {
        xml += `    <image:image>
      <image:loc>${BASE_URL}${screenshot.loc}</image:loc>
      <image:title>${screenshot.title}</image:title>
    </image:image>
`;
      }
      xml += `  </url>
`;
    }
  }

  xml += `</urlset>`;
  return xml;
}

export async function GET() {
  const sitemap = buildImageSitemap();
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
