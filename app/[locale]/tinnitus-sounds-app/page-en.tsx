import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Tinnitus Sound Masking App for Sleep (Free) | Calma",
  description:
    "Looking for the best app for ringing in ears? Calma lets you mix white noise, pink noise, and nature sounds to mask tinnitus. Free, works offline, no subscription.",
  keywords: [
    "tinnitus sounds app",
    "tinnitus sound masking app",
    "best app for ringing in ears",
    "does white noise help tinnitus",
    "best sounds for tinnitus",
    "tinnitus relief app",
    "tinnitus sleep app",
    "free tinnitus app",
    "calma tinnitus",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/tinnitus-sounds-app",
  },
  openGraph: {
    title: "Best Tinnitus Sound Masking App for Sleep & Relief",
    description:
      "Looking for a tinnitus relief app? Calma lets you mix white noise, pink noise, and nature sounds to mask ringing in your ears. Free, works offline.",
    url: "https://www.calmasounds.com/tinnitus-sounds-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tinnitus Sound Masking App for Sleep & Relief",
    description:
      "Mix white noise and nature sounds to mask ringing in your ears. Free, works offline.",
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
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      }
    },
    {
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
          "name": "Tinnitus Relief App",
          "item": "https://www.calmasounds.com/tinnitus-sounds-app"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there a free white noise app for tinnitus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Calma provides free soundscapes including white, pink, and brown noise, which are often used by individuals seeking a calming audio environment to mask tinnitus at night."
          }
        },
        {
          "@type": "Question",
          "name": "What sounds are best for tinnitus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many people find high-frequency white noise or balanced pink noise most effective for masking ringing in the ears. However, personal preference varies, so Calma allows you to test and mix all color noises."
          }
        },
        {
          "@type": "Question",
          "name": "Does white noise help tinnitus at night?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Silence can make tinnitus seem louder. Creating a continuous background layer of ambient sound, like a gentle stream or white noise, provides your brain with alternative audio input to focus on, helping you sleep."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best app for ringing in ears?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best tinnitus app should let you customize your own sound mix, because every person's tinnitus is different. Calma lets you blend white noise, pink noise, brown noise, and nature sounds to find the exact combination."
          }
        },
        {
          "@type": "Question",
          "name": "Does tinnitus sound therapy actually work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sound therapy is one of the most widely recommended approaches for tinnitus management. By providing your brain with alternative audio input, background sounds can reduce the perceived loudness of tinnitus and support habituation."
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
          Tinnitus relief app
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">\n          Tinnitus Sounds App for Sleep and Calm\n        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple tinnitus relief sounds app that helps you create a
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
              Tinnitus relief can help create a more stable sound background for
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
              helping tinnitus relief sounds feel like part of a daily routine instead of a
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
              priority
              alt="Calma mobile app interface showing a list of sleep sounds and relaxation categories"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="Calma tinnitus relief sounds app interface for customizing tinnitus relief sounds for sleep and focus"
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
              alt="Calma sound mixer interface for creating custom tinnitus relief sounds mixes"
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
            Learn more about tinnitus relief sounds
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/sounds-for-tinnitus-relief"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sounds for Tinnitus Relief</h3>
            <p className="mt-3 text-white/70">
              Learn which sounds and sound therapy techniques are most effective for managing tinnitus symptoms.
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
            Tinnitus relief app FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Is there a free white noise app for tinnitus?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes, Calma provides free soundscapes including white, pink, and brown noise, which are often used by individuals seeking a calming audio environment to mask tinnitus at night.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What color noise is best for tinnitus?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Many people find high-frequency white noise or balanced pink noise most effective for masking ringing in the ears. However, personal preference varies, so Calma allows you to test and mix all color noises.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can sound masking help with tinnitus at night?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes. Silence can make tinnitus seem louder. Creating a continuous background layer of ambient sound, like a gentle stream or rain, provides your brain with alternative audio input to focus on.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is the best app for ringing in ears?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              The best tinnitus app should let you customize your own sound mix, because every person's tinnitus is different. Calma lets you blend white noise, pink noise, brown noise, and nature sounds to find the exact combination that masks your specific tinnitus frequency.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Does tinnitus sound therapy actually work?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sound therapy is one of the most widely recommended approaches for tinnitus management. By providing your brain with alternative audio input, background sounds can reduce the perceived loudness of tinnitus. Over time, this can also support habituation — where your brain learns to filter out the ringing.
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
            with tinnitus relief sounds and personalized soundscapes.
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