import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brown Noise App: Mix 190+ Sleep & Focus Sounds | Calma",
  description:
    "Mix brown noise with rain, pink noise and nature sounds. Explore 190+ sounds, offline playback and a free 3-layer mixer in Calma.",
  keywords: [
    "brown noise app",
    "brown noise for sleep",
    "brown noise ADHD",
    "best brown noise app",
    "brown noise app free",
    "brown noise for studying",
    "brown noise generator app",
    "deep brown noise",
    "brown noise focus",
    "calma brown noise",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/brown-noise-app",
  },
  openGraph: {
    title: "Brown Noise App: Mix 190+ Sleep & Focus Sounds | Calma",
    description:
    "Mix brown noise with rain, pink noise and nature sounds. Explore 190+ sounds, offline playback and a free 3-layer mixer.",
    url: "https://www.calmasounds.com/brown-noise-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brown Noise App: Mix 190+ Sounds | Calma",
    description:
    "Build a personal brown-noise soundscape with a free mixer, offline playback and 190+ sounds.",
  },
};

const combinedJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Calma - Sleep Sounds & Relax",
      "applicationCategory": "HealthAndFitnessApplication",
      "operatingSystem": "ANDROID, IOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
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
      "name": "Brown Noise App",
      "item": "https://www.calmasounds.com/brown-noise-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is a brown noise app?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A brown noise app generates deep, low-frequency sound similar to a strong waterfall or distant thunder. It emphasizes lower frequencies, making it sound deeper and more soothing than white noise."
            }
        },
        {
            "@type": "Question",
            "name": "Can brown noise help with sleep?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many people use brown noise to make bedtime feel calmer and reduce the impact of distracting sounds in the environment."
            }
        },
        {
            "@type": "Question",
            "name": "Is Calma only for brown noise?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Calma also supports white noise, pink noise, nature sounds, sleep soundscapes and focus-oriented audio mixes."
            }
        },
        {
            "@type": "Question",
            "name": "Does brown noise help with ADHD?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Responses vary. Research has found a small task-performance benefit from white and pink noise in some young people with ADHD, but the review found no eligible brown-noise studies. Brown noise is not an ADHD treatment."
            }
        },
        {
            "@type": "Question",
            "name": "Brown noise vs white noise — what's the difference?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "White noise has equal energy per frequency and sounds brighter. Brown noise reduces energy as frequency rises, so it sounds deeper and warmer. Which feels more comfortable is a personal preference."
            }
        }
    ]
}
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Brown noise app
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          A brown noise app for better sleep and a calmer audio environment
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple brown noise app that helps you create a
          softer, more controlled sound environment for sleep, relaxation and
          everyday calm. Whether you are searching for the <strong>best sound to go to sleep to</strong> or the <strong>best noise for studying</strong>, use Calma to support bedtime routines, reduce distracting
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
              Brown noise can help create a more stable sound background for
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
              helping brown noise feel like part of a daily routine instead of a
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

              alt="Calma brown noise app interface for customizing brown noise for sleep and focus"
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
              alt="Calma sound mixer interface for creating custom brown noise mixes"
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
            Learn more about brown noise
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Brown vs White vs Pink Noise</h3>
            <p className="mt-3 text-white/70">
              Learn the key differences between noise colors and which is best for sleep, focus, or ADHD.
            </p>
          </a>
          <a
            href="/blog/best-color-noise-for-adhd"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Color Noise for ADHD</h3>
            <p className="mt-3 text-white/70">
              Why brown noise is the most popular choice for ADHD focus and concentration.
            </p>
          </a>
          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Sounds for Sleep</h3>
            <p className="mt-3 text-white/70">
              Explore why brown noise is one of the top-rated sounds for deep, uninterrupted sleep.
            </p>
          </a>
          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Sounds for Studying</h3>
            <p className="mt-3 text-white/70">
              How to use brown noise as a study aid for deeper concentration.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Brown noise app FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is a brown noise app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              A brown noise app generates deep, low-frequency sound similar to a strong waterfall, distant thunder, or a powerful fan. It's called "brown" noise after Robert Brown (Brownian motion), not the color. Brown noise emphasizes lower frequencies much more than white noise, making it sound deeper and more soothing.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can brown noise help with sleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Many people use brown noise to make bedtime feel calmer and reduce
              the impact of distracting sounds in the environment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Is Calma only for brown noise?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No. Calma also supports white noise, pink noise, nature sounds, sleep soundscapes and
              focus-oriented audio mixes, so you can shape the experience to your
              needs.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Does brown noise help with ADHD?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes — brown noise has become one of the most popular tools in the ADHD community. Its deep, consistent frequency provides enough background stimulation to satisfy the brain's need for input, without being distracting. This helps reduce the urge to seek out other stimuli (like checking your phone or switching tasks).
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Brown noise vs white noise — what's the difference?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              White noise contains all frequencies at equal volume, producing a bright "static" or "hiss" sound. Brown noise rolls off steeply at higher frequencies, sounding much deeper and warmer — like the rumble of a waterfall or heavy rain on a window. Most adults prefer brown noise for sleep because it's less harsh on the ears during long exposure.
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
            with brown noise and personalized soundscapes.
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
