import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Free Sound Mixer App for Sleep, Relaxation & Focus | Calma",
  description:
    "Create custom sound mixes with white noise, rain, brown noise & nature sounds. Calma is a free sound mixer app for sleep, relaxation and focus. No subscription, works offline.",
  keywords: [
    "sound mixer app",
    "sleep sound mixer",
    "relaxation sound mixer",
    "focus sound mixer",
    "personalized soundscapes",
    "sound machine app",
    "ambient sound mixer",
    "white noise mixer app",
    "free sound mixer",
    "calma sound mixer",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/sound-mixer-app",
  },
  openGraph: {
    title: "Best Free Sound Mixer App for Sleep, Relaxation & Focus | Calma",
    description:
    "Create custom sound mixes with white noise, rain, brown noise & nature sounds. Free sound mixer app for sleep, relaxation and focus. No subscription.",
    url: "https://www.calmasounds.com/sound-mixer-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Free Sound Mixer App for Sleep & Focus | Calma",
    description:
    "Create custom sound mixes with white noise, rain & nature sounds. Free sound mixer app for sleep, relaxation and focus.",
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
      "name": "Sound Mixer App",
      "item": "https://www.calmasounds.com/sound-mixer-app"
    }
  ]
};

export default function SoundMixerAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sound mixer app
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          A sound mixer app for personalized sleep, relaxation and focus
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple sound mixer app that lets you create
          your own audio environment instead of relying on one fixed track.
          Build personalized soundscapes for bedtime, evening wind-down, deep
          work and calmer everyday routines.
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
            <h2 className="text-2xl font-semibold">Create your own mix</h2>
            <p className="mt-4 leading-7 text-white/70">
              Combine sounds around your mood and routine instead of adapting to
              one generic audio track.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Use one app for many moments</h2>
            <p className="mt-4 leading-7 text-white/70">
              Build soundscapes for sleep, relaxation, focus and everyday calm
              in one simple and cohesive experience.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Keep the experience elegant</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma is designed to feel clear, warm and premium, so building a
              sound mix feels intuitive instead of technical.
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
            See the mixer experience inside Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"

              alt="Calma mobile app interface for creating custom sound mixes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Calma sound mixer interface for customizing ambient soundscapes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma interface showing multiple audio layers for personalized relaxation"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma sound mixer controls for sleep and focus audio"
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
            Learn more about soundscapes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Rain Sounds vs White Noise</h3>
            <p className="mt-3 text-white/70">
              Compare different atmospheric layers and see how mixing them can create the perfect focus or sleep audio.
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">The Colors of Noise</h3>
            <p className="mt-3 text-white/70">
              Learn about noise colors and how to balance them in your personal sound mixer.
            </p>
          </a>
          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Sounds for Sleep</h3>
            <p className="mt-3 text-white/70">
              Explore different sound types and learn which combinations work best for your sleep.
            </p>
          </a>
          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Sounds for Studying</h3>
            <p className="mt-3 text-white/70">
              Discover which background sounds support concentration and deep work sessions.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Sound mixer app FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is a sound mixer app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              A sound mixer app helps you combine different sounds into one
              personalized audio environment for sleep, relaxation, focus or
              everyday calm.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              How is Calma different from a normal sound app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma is built around personalization, letting you shape your own
              mix instead of only choosing from fixed pre-made tracks.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can I use Calma for more than sleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes. Calma supports sleep, relaxation, focus and softer daily
              routines through customizable soundscapes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is the best free sound machine app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              The best free sound machine app lets you mix multiple sounds together rather than just playing one track. Calma offers white noise, brown noise, pink noise, rain, ocean waves, and nature sounds — all mixable with individual volume controls. It's free, works offline, and doesn't require a subscription.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              How many sounds can I mix at once in Calma?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma lets you layer multiple sounds simultaneously, each with its own volume slider. You can combine rain with brown noise, add a touch of crackling fire, and adjust each element independently to create your perfect soundscape.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a sound mixer app?","acceptedAnswer":{"@type":"Answer","text":"A sound mixer app helps you combine different sounds into one personalized audio environment for sleep, relaxation, focus or everyday calm."}},{"@type":"Question","name":"How is Calma different from a normal sound app?","acceptedAnswer":{"@type":"Answer","text":"Calma is built around personalization, letting you shape your own mix instead of only choosing from fixed pre-made tracks."}},{"@type":"Question","name":"Can I use Calma for more than sleep?","acceptedAnswer":{"@type":"Answer","text":"Yes. Calma supports sleep, relaxation, focus and softer daily routines through customizable soundscapes."}},{"@type":"Question","name":"What is the best free sound machine app?","acceptedAnswer":{"@type":"Answer","text":"The best free sound machine app lets you mix multiple sounds together. Calma offers white noise, brown noise, pink noise, rain, ocean waves, and nature sounds — all mixable with individual volume controls. It's free, works offline, and doesn't require a subscription."}},{"@type":"Question","name":"How many sounds can I mix at once in Calma?","acceptedAnswer":{"@type":"Answer","text":"Calma lets you layer multiple sounds simultaneously, each with its own volume slider. You can combine rain with brown noise, add crackling fire, and adjust each element independently."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Try Calma as your everyday sound mixer
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Download Calma on Google Play and create personalized soundscapes
            that fit sleep, relaxation, focus and calmer daily moments.
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