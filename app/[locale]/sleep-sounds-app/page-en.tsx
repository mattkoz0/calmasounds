import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Free Sleep Sounds App | White Noise & Nature Sounds | Calma",
  description:
    "Looking for the best sleep sounds app? Mix white noise, rain, brown noise & nature sounds to build a personalized bedtime routine. Free, offline, no subscription. Download Calma now.",
  keywords: [
    "sleep sounds app",
    "sleep app",
    "relaxing sounds for sleep",
    "bedtime sounds app",
    "sleep sounds app free",
    "best app for sleeping sounds",
    "free sleep sounds",
    "white noise sleep app",
    "nature sounds for sleep app",
    "calma sleep sounds",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/sleep-sounds-app",
  },
  openGraph: {
    title: "Best Free Sleep Sounds App | White Noise & Nature Sounds | Calma",
    description:
    "Looking for the best sleep sounds app? Mix white noise, rain, brown noise & nature sounds to build a personalized bedtime routine. Free, offline, no subscription.",
    url: "https://www.calmasounds.com/sleep-sounds-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Free Sleep Sounds App | White Noise & Nature Sounds | Calma",
    description:
    "Looking for the best sleep sounds app? Mix white noise, rain & nature sounds for a personalized bedtime routine. Free, offline.",
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
      "name": "Sleep Sounds App",
      "item": "https://www.calmasounds.com/sleep-sounds-app"
    }
  ]
};

export default function SleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sleep sounds app
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          A sleep sounds app for calmer nights and better bedtime routines
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple sleep sounds app that helps you create
          personalized soundscapes for bedtime, evening wind-down and deeper
          rest. Mix relaxing sounds, build your own atmosphere and make your
          nightly routine feel softer and more consistent.
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
            <h2 className="text-2xl font-semibold">Create your own bedtime mix</h2>
            <p className="mt-4 leading-7 text-white/70">
              Instead of listening to one generic track, you can build a sound
              environment that feels right for your evening and your mood.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Relax before sleep</h2>
            <p className="mt-4 leading-7 text-white/70">
              Use calming soundscapes to slow down after busy days and create a
              more peaceful transition into sleep.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Keep your routine simple</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma is designed to feel clear, elegant and easy to come back to
              every night without friction or overwhelm.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            App preview
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            See the sleep experience inside Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"

              alt="Calma mobile app interface showing a list of sleep sounds and relaxation categories"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Calma sleep sounds app interface for customizing audio for bedtime"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma sleep sounds mixer showing various ambient sound layers"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma sound mixer interface for creating custom sleep mixes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Guides & Knowledge
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Learn more about sleep sounds
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Sounds for Sleep</h3>
            <p className="mt-3 text-white/70">
              A practical guide to rain, white noise and softer sleep soundscapes for your bedtime.
            </p>
          </a>
          <a
            href="/blog/how-to-build-a-bedtime-routine"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">How to Build a Bedtime Routine</h3>
            <p className="mt-3 text-white/70">
              Simple ways to create a calmer evening rhythm that supports natural and consistent sleep.
            </p>
          </a>
          <a
            href="/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">White Noise for Sleep</h3>
            <p className="mt-3 text-white/70">
              Learn how white noise masks distractions and helps you stay in deeper sleep stages.
            </p>
          </a>
          <a
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Rain Sounds for Sleep & Focus</h3>
            <p className="mt-3 text-white/70">
              Why rain sounds are a top choice for calming your mind before sleep.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Sleep sounds app FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is a sleep sounds app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              A sleep sounds app helps you play calming audio designed to support
              bedtime routines, relaxation and a quieter mental state before sleep.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              How is Calma different from other sleep apps?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma focuses on personalized soundscapes, a simple interface and a
              calm premium feel instead of overwhelming you with too many layers
              of complexity.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can I build my own sleep mix?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes. Calma is designed around creating your own relaxing audio mix
              rather than only choosing one fixed track.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is the best free sleep sounds app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              The best free sleep sounds app lets you customize your own sound mixes rather than playing a single fixed track. Calma offers a generous free tier with white noise, brown noise, rain, and nature sounds — all without ads that wake you up. It works completely offline and doesn't require a subscription.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Are sleep sound apps safe to use every night?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes, sleep sound apps are safe for nightly use as long as the volume stays below 60 dB (about the level of a quiet conversation). Over time, your brain associates the sound with sleep, making it easier to fall asleep quickly. Keep your phone at least 2 meters from your head.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a sleep sounds app?","acceptedAnswer":{"@type":"Answer","text":"A sleep sounds app helps you play calming audio designed to support bedtime routines, relaxation and a quieter mental state before sleep."}},{"@type":"Question","name":"How is Calma different from other sleep apps?","acceptedAnswer":{"@type":"Answer","text":"Calma focuses on personalized soundscapes, a simple interface and a calm premium feel instead of overwhelming you with too many layers of complexity."}},{"@type":"Question","name":"Can I build my own sleep mix?","acceptedAnswer":{"@type":"Answer","text":"Yes. Calma is designed around creating your own relaxing audio mix rather than only choosing one fixed track."}},{"@type":"Question","name":"What is the best free sleep sounds app?","acceptedAnswer":{"@type":"Answer","text":"The best free sleep sounds app lets you customize your own sound mixes. Calma offers a generous free tier with white noise, brown noise, rain, and nature sounds without ads. It works offline and doesn't require a subscription."}},{"@type":"Question","name":"Are sleep sound apps safe to use every night?","acceptedAnswer":{"@type":"Answer","text":"Yes, sleep sound apps are safe for nightly use as long as the volume stays below 60 dB. Over time, your brain associates the sound with sleep, making it easier to fall asleep quickly."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Try Calma for your evening routine
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Download Calma on Google Play and create a more peaceful bedtime
            experience with personalized sleep sounds.
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