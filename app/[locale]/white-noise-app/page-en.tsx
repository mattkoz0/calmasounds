import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free White Noise App for Sleep & Focus | Calma",
  description:
    "Mix white, brown and pink noise with rain and nature sounds. Calma works offline on iOS and Android, with a free tier and no required subscription.",
  keywords: [
    "white noise app",
    "white noise for sleep",
    "best white noise app",
    "free white noise app",
    "white noise machine app",
    "whitenoise app",
    "white noise app for babies",
    "white noise app free",
    "white noise generator app",
    "sleep white noise app",
    "calma white noise",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/white-noise-app",
  },
  openGraph: {
    title: "Free White Noise App for Sleep & Focus",
    description:
    "Mix white, brown and pink noise with rain. Works offline on iOS and Android with no required subscription.",
    url: "https://www.calmasounds.com/white-noise-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free White Noise App for Sleep & Focus | Calma",
    description:
    "Mix white, brown and pink noise with rain. Free tier, offline playback and no required subscription.",
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
      "name": "White Noise App",
      "item": "https://www.calmasounds.com/white-noise-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the best free white noise app?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Calma offers a free tier for mixing white noise with nature sounds, works offline, and does not require a monthly or annual subscription. An optional one-time unlock adds premium features."
            }
        },
        {
            "@type": "Question",
            "name": "Does white noise help you sleep?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. White noise acts as an acoustic blanket that masks sudden background noises like traffic or dogs barking, helping your brain relax and stay in deep sleep."
            }
        },
        {
            "@type": "Question",
            "name": "How to use a white noise app for studying?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For studying, try a quiet, steady layer of white or brown noise and adjust it so it masks distractions without becoming distracting itself. Individual responses vary."
            }
        },
        {
            "@type": "Question",
            "name": "Is white noise safe for babies?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For a baby, sound should be kept low and the device placed away from the crib. Ask a pediatric or hearing professional for guidance appropriate to your child."
            }
        },
        {
            "@type": "Question",
            "name": "White noise vs brown noise — which is better for sleep?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "White noise is better at masking high-pitched sounds. Brown noise has a deeper, rumbling quality that many adults find more soothing. With Calma, you can mix both together."
            }
        },
        {
            "@type": "Question",
            "name": "Can I use a white noise app instead of a sound machine?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Modern white noise apps like Calma offer the same or better sound quality as dedicated sound machines, plus custom soundscapes, sleep timers, and offline support. Calma is free."
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
          White noise app
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          A white noise app for better sleep and a calmer audio environment
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple white noise app that helps you create a
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

          <Link
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Back to homepage
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mix noise colors and nature</h2>
            <p className="mt-4 leading-7 text-white/70">
              Layer white, pink or brown noise with rain and nature sounds, then
              adjust each sound to build a personal mix.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Works offline</h2>
            <p className="mt-4 leading-7 text-white/70">
              Play and mix sounds without an internet connection on iOS and Android,
              including while travelling or using airplane mode.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">No required subscription</h2>
            <p className="mt-4 leading-7 text-white/70">
              Start with the free tier. Premium features use an optional one-time
              lifetime unlock instead of a monthly or annual plan.
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
          <Link
            href="/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">White Noise for Sleep</h3>
            <p className="mt-3 text-white/70">
              Discover how white noise can help create a stable bedtime environment and improve your rest.
            </p>
          </Link>
          <Link
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Noise Colors Explained</h3>
            <p className="mt-3 text-white/70">
              Explore the differences between white, pink, brown, and green noise to find your ideal sound.
            </p>
          </Link>
          <Link
            href="/blog/best-free-white-noise-app"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Free White Noise Apps Compared</h3>
            <p className="mt-3 text-white/70">
              See how Calma compares to other white noise apps in features, sound quality, and value.
            </p>
          </Link>
          <Link
            href="/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Rain Sounds vs White Noise</h3>
            <p className="mt-3 text-white/70">
              Which is better for your sleep: organic rain sounds or constant white noise?
            </p>
          </Link>
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
              What is the best free white noise app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma offers a free tier for mixing white noise with nature sounds, works offline, and does not require a monthly or annual subscription. An optional one-time unlock adds premium features.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Does white noise help you sleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes. White noise acts as an acoustic blanket that masks sudden background noises like traffic or dogs barking, helping your brain relax and stay in deep sleep.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              How to use a white noise app for studying?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Try a quiet, steady layer of white or brown noise and adjust it so it masks distractions without becoming distracting itself. Individual responses vary.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Is white noise safe for babies?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              For a baby, keep sound low, place the device away from the crib, and ask a pediatric or hearing professional for guidance appropriate to your child.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              White noise vs brown noise — which is better for sleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              White noise is better at masking high-pitched sounds like alarms, voices, or barking dogs. Brown noise has a deeper, rumbling quality (like distant thunder) that many adults find more soothing for falling asleep. With Calma, you can mix both together to get the best of both worlds.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can I use a white noise app instead of a sound machine?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Absolutely. Modern white noise apps like Calma offer the same (or better) sound quality as dedicated sound machines, plus the ability to mix custom soundscapes, set sleep timers, and work offline. You also save money since Calma is free.
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
