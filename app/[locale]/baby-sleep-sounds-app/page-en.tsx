import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Baby Sleep Sounds App | Calma",
  description:
    "Discover Calma, a baby sleep sounds app with soothing white noise, gentle rain, and calming atmospheres designed to help your newborn or toddler sleep peacefully.",
  keywords: [
    "baby sleep sounds app",
    "white noise for babies",
    "infant sleep app",
    "baby sleep music",
    "calming sounds for newborn",
    "baby bedtime sounds",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/baby-sleep-sounds-app",
  },
  openGraph: {
    title: "Baby Sleep Sounds App | Calma",
    description:
      "A beautifully simple app to help your baby calm down and fall asleep with personalized, gentle soundscapes.",
    url: "https://www.calmasounds.com/baby-sleep-sounds-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Sleep Sounds App | Calma",
    description:
      "A beautifully simple app to help your baby calm down and fall asleep with personalized, gentle soundscapes.",
  },
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
      "name": "Baby Sleep Sounds App",
      "item": "https://www.calmasounds.com/baby-sleep-sounds-app"
    }
  ]
};

export default function BabySleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Baby sleep sounds
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Soothing sounds to help your little one sleep peacefully
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is an elegant, easy-to-use baby sleep sounds app offering consistent white noise, 
          gentle rain, and womb-like low frequencies. Quickly calm a crying infant, establish a 
          comforting naptime routine, and build soundscapes that mask sudden noises.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Calma on Google Play Store (opens in a new window)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download on Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Calma on Apple App Store (opens in a new window)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download on App Store
          </a>

          <a
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Back to homepage
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mask disturbing sounds</h2>
            <p className="mt-4 leading-7 text-white/70">
              Babies are easily startled by sudden household noises. Continuous, rhythmic white noise from Calma creates an acoustic blanket that helps babies sleep longer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mimic the womb</h2>
            <p className="mt-4 leading-7 text-white/70">
              The womb was a loud, whooshing space. Low-frequency brown noise, heartbeats, and deep water sounds remind your newborn of that safe environment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Customizable mix</h2>
            <p className="mt-4 leading-7 text-white/70">
              Every baby is different. With Calma, easily mix a humming fan with gentle rain to find the exact frequency that instantly calms your baby.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Baby sleep sounds FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Is white noise safe for babies?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes, white noise is generally considered very safe and effective for babies, provided that the volume is kept at a comfortable, conversational level (around 50-60 decibels) and the device is placed a safe distance from the crib.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Which color of noise is best for newborns?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Many babies respond well to standard white noise, but pink noise and brown noise (which emphasize deeper, lower frequencies) can also be perfect for simulating the muffled sounds of the womb.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Does Calma require internet to play offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma works offline. Once you have the app installed, you don&apos;t need an active internet connection to play your baby&apos;s favorite sleep mix.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Help your baby sleep soundly
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Download Calma on Google Play and create the perfect audio environment for naptime and bedtime.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Calma on Google Play Store (opens in a new window)"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Calma on Apple App Store (opens in a new window)"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              App Store
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
