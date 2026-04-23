import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "White Noise App | Calma",
  description:
    "Discover Calma, a beautifully simple white noise app for sleep, relaxation and building a calmer audio environment.",
  keywords: [
    "white noise app",
    "white noise for sleep",
    "sleep white noise app",
    "calming white noise",
    "calma white noise",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/white-noise-app",
  },
  openGraph: {
    title: "White Noise App | Calma",
    description:
      "Discover a beautifully simple white noise app for sleep, relaxation and calmer daily routines.",
    url: "https://www.calmasounds.com/white-noise-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Noise App | Calma",
    description:
      "Discover a beautifully simple white noise app for sleep, relaxation and calmer daily routines.",
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
      "name": "White Noise App",
      "item": "https://www.calmasounds.com/white-noise-app"
    }
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          White noise app
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          A white noise app for better sleep and a calmer audio environment
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple white noise app that helps you create a
          softer, more controlled sound environment for sleep, relaxation and
          everyday calm. Use it to support bedtime routines, reduce distracting
          noise and build a more peaceful atmosphere around you.
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
            <h2 className="text-2xl font-semibold">Support better sleep</h2>
            <p className="mt-4 leading-7 text-white/70">
              White noise can help create a more stable sound background for
              bedtime and a gentler transition into sleep.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Reduce distracting noise</h2>
            <p className="mt-4 leading-7 text-white/70">
              Use a controlled audio layer to soften sudden sounds and create a
              calmer environment around you.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Keep it simple and calm</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma is designed to feel elegant, clear and emotionally light,
              helping white noise feel like part of a daily routine instead of a
              technical tool.
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
            See the calming experience inside Calma
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
              alt="Calma white noise app interface for customizing white noise for sleep and focus"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma sleep sounds mixer interface"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma sound mixer interface for creating custom white noise mixes"
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
            Learn more about white noise
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">White Noise for Sleep</h3>
            <p className="mt-3 text-white/70">
              Discover how white noise can help create a stable bedtime environment and improve your rest.
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Noise Colors Explained</h3>
            <p className="mt-3 text-white/70">
              Explore the differences between white, pink, brown, and green noise to find your ideal sound.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            White noise app FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is a white noise app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              A white noise app helps create a steady background sound that can
              support sleep, relaxation and a calmer sound environment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can white noise help with sleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Many people use white noise to make bedtime feel calmer and reduce
              the impact of distracting sounds in the environment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Is Calma only for white noise?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No. Calma also supports sleep sounds, relaxing soundscapes and
              focus-oriented audio mixes, so you can shape the experience to your
              needs.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Try Calma for sleep and everyday calm
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Download Calma on Google Play and create a calmer sound environment
            with white noise and personalized soundscapes.
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