import type { Metadata } from "next";
import Image from "next/image";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "White Noise, Brown Noise, and Pink Noise App | Calma",
  description:
    "Discover the difference between white noise, brown noise, and pink noise. Calma is a premium sleep sounds app that lets you mix all colors of noise for sleep, focus, and ADHD.",
  keywords: [
    "white noise app",
    "brown noise app",
    "pink noise app",
    "green noise app",
    "noise colors app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/white-noise-brown-noise-pink-noise",
  },
  openGraph: {
    title: "White Noise, Brown Noise, and Pink Noise App | Calma",
    description:
      "Discover the difference between white noise, brown noise, and pink noise. Calma is a premium sleep sounds app that lets you mix all colors of noise for sleep, focus, and ADHD.",
    url: "https://www.calmasounds.com/white-noise-brown-noise-pink-noise",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Noise, Brown Noise, and Pink Noise App | Calma",
    description:
      "Mix all colors of noise for sleep, focus, and ADHD with the Calma app.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Calma include white noise, brown noise, and pink noise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Calma includes high-quality white noise, brown noise, pink noise, and green noise. You can mix these with other natural sounds like rain and ocean waves.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between white noise and brown noise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White noise covers all audible frequencies equally, like TV static. Brown noise emphasizes lower frequencies, sounding deeper like a distant waterfall. Brown noise is often preferred for deep focus and ADHD.",
      },
    },
    {
      "@type": "Question",
      name: "Which color noise is best for sleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pink noise is generally considered the best for sleep because it is balanced and natural, mimicking sounds like steady rain or wind. White noise is best for masking sudden loud sounds.",
      },
    }
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.calmasounds.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Noise Colors App",
      "item": "https://www.calmasounds.com/white-noise-brown-noise-pink-noise"
    }
  ]
};

export default function NoiseColorsAppPageEn() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AiDefinition />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          The Colors of Sound
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          White Noise, Brown Noise, and Pink Noise
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a comprehensive sound mixer app that includes high-quality recordings of all the essential noise colors. 
          Discover the perfect frequency for your sleep, relaxation, or ADHD focus routine.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Calma on Google Play Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download on Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Calma on Apple App Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download on App Store
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              White Noise
            </div>
            <h3 className="text-xl font-semibold">Perfect for masking</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Covers all audible frequencies equally. Ideal for blocking out sudden loud sounds and supporting infant sleep.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Pink Noise
            </div>
            <h3 className="text-xl font-semibold">Balanced & natural</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Deeper than white noise, mimicking sounds like steady rain or wind. Great for improving overall sleep quality.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Brown Noise
            </div>
            <h3 className="text-xl font-semibold">Focus & ADHD support</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Heavy on low frequencies, like a distant waterfall. Increasingly popular for deep focus and 'quieting' a busy mind.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Green Noise
            </div>
            <h3 className="text-xl font-semibold">Nature Harmony</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Focuses on mid-range frequencies, similar to rustling forest leaves. Perfect for a calming, natural atmosphere.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Does Calma include white noise, brown noise, and pink noise?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes, Calma includes high-quality white noise, brown noise, pink noise, and green noise. You can mix these with other natural sounds like rain and ocean waves in the sound mixer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is the difference between white noise and brown noise?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              White noise covers all audible frequencies equally, similar to TV static. Brown noise emphasizes lower frequencies, sounding deeper and softer, like a distant waterfall. Brown noise is often preferred for deep focus and ADHD.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Which color noise is best for sleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Pink noise is generally considered the best for sleep because it is balanced and natural, mimicking sounds like steady rain or wind. However, white noise is best if you specifically need to mask sudden, loud sounds.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
