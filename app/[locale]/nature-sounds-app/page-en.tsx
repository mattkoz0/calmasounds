import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nature Sounds App for Sleep — Free & Offline | Calma",
  description:
    "Mix rain, ocean, forest and other nature sounds for sleep or relaxation. Calma works offline and offers a free version without a subscription.",
  keywords: [
    "nature sounds app",
    "nature sounds for sleep",
    "sleep nature sounds app",
    "calming nature sounds",
    "rain sounds app",
    "forest sounds app",
    "ocean sounds for sleep",
    "free nature sounds app",
    "relaxing nature sounds",
    "calma nature sounds",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/nature-sounds-app",
  },
  openGraph: {
    title: "Free Nature Sounds App for Sleep & Relaxation | Calma",
    description:
    "Relax with nature sounds — rain, forest, ocean waves, birds & more. Calma is a free nature sounds app for sleep, relaxation and calm. No subscription.",
    url: "https://www.calmasounds.com/nature-sounds-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Nature Sounds App for Sleep & Relaxation | Calma",
    description:
    "Relax with nature sounds — rain, forest, ocean & birds. Free nature sounds app for sleep and calm. No subscription.",
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
      "name": "Nature Sounds App",
      "item": "https://www.calmasounds.com/nature-sounds-app"
    }
  ]
};

export default function NatureSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Nature sounds app
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          A nature sounds app for sleep and relaxation
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Mix steady rain, ocean waves, forest ambience and other nature sounds
          into a soundscape that fits your bedtime or relaxation routine. Calma
          works offline, lets you control each layer separately and offers a free
          version without a monthly subscription.
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
            <h2 className="text-2xl font-semibold">Mix nature sounds your way</h2>
            <p className="mt-4 leading-7 text-white/70">
              Combine rain, ocean, forest and other ambient layers, then adjust
              each sound independently instead of relying on one fixed track.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Listen completely offline</h2>
            <p className="mt-4 leading-7 text-white/70">
              Once the app is installed, your sounds remain available without
              Wi-Fi or mobile data—useful at bedtime, while travelling or in
              airplane mode.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Avoid another subscription</h2>
            <p className="mt-4 leading-7 text-white/70">
              Start with the free version. If you want premium features, Calma
              offers a one-time lifetime unlock instead of a monthly or annual
              payment.
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

              alt="Calma nature sounds app interface for customizing nature sounds for sleep and focus"
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
              alt="Calma sound mixer interface for creating custom nature sounds mixes"
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
            Learn more about nature sounds
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Rain Sounds for Sleep & Focus</h3>
            <p className="mt-3 text-white/70">
              Discover why rain sounds are one of the most effective nature sounds for calming your mind.
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
          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Sounds for Sleep</h3>
            <p className="mt-3 text-white/70">
              From rain to ocean waves — explore which nature sounds work best for different sleep needs.
            </p>
          </a>
          <a
            href="/blog/green-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Green Noise for Sleep</h3>
            <p className="mt-3 text-white/70">
              Learn about green noise — the "nature frequency" that mimics forest and stream sounds.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Nature sounds app FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is a nature sounds app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              A nature sounds app helps create a steady background sound that can
              support sleep, relaxation and a calmer sound environment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can nature sounds help with sleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Many people use nature sounds to make bedtime feel calmer and reduce
              the impact of distracting sounds in the environment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Is Calma only for nature sounds?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No. Calma also supports sleep sounds, relaxing soundscapes and
              focus-oriented audio mixes, so you can shape the experience to your
              needs.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What are the best nature sounds for sleeping?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Common options include steady rain, gentle ocean waves, flowing
              water and soft wind through trees. A consistent recording may make
              sudden environmental sounds less noticeable, but there is no single
              best choice for every listener.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Why do nature sounds help with relaxation?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Familiar, steady nature recordings can feel pleasant and may mask
              distracting changes in the room. Responses vary, so treat them as
              an optional part of a calming routine rather than a treatment or a
              guaranteed way to improve sleep.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a nature sounds app?","acceptedAnswer":{"@type":"Answer","text":"A nature sounds app helps create a steady background sound that can support sleep, relaxation and a calmer sound environment."}},{"@type":"Question","name":"Can nature sounds help with sleep?","acceptedAnswer":{"@type":"Answer","text":"Many people use nature sounds to make bedtime feel calmer and reduce the impact of distracting sounds in the environment."}},{"@type":"Question","name":"Is Calma only for nature sounds?","acceptedAnswer":{"@type":"Answer","text":"No. Calma also supports sleep sounds, relaxing soundscapes and focus-oriented audio mixes."}},{"@type":"Question","name":"What are the best nature sounds for sleeping?","acceptedAnswer":{"@type":"Answer","text":"Common options include steady rain, gentle ocean waves, flowing water and soft wind through trees. A consistent recording may make sudden environmental sounds less noticeable, but there is no single best choice for every listener."}},{"@type":"Question","name":"Why do nature sounds help with relaxation?","acceptedAnswer":{"@type":"Answer","text":"Familiar, steady nature recordings can feel pleasant and may mask distracting changes in the room. Responses vary, so they are best treated as an optional part of a calming routine rather than a treatment."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Try Calma for sleep and everyday calm
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Download Calma on Google Play and create a calmer sound environment
            with nature sounds and personalized soundscapes.
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
