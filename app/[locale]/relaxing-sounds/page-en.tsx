import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Free Relaxing Sounds App for Stress Relief & Anxiety | Calma",
  description:
    "Feeling stressed? Create your own relaxing soundscape with rain, ocean waves, crackling fire & white noise. Calma is a free relaxation app that helps you unwind. No subscription, works offline.",
  keywords: [
    "relaxing sounds app",
    "relaxation sounds",
    "calming sounds app",
    "relaxing ambient sounds",
    "relaxing sounds for anxiety",
    "calming sounds for stress",
    "stress relief sounds app",
    "free relaxation app",
    "ambient sounds for relaxation",
    "calma relaxing sounds",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/relaxing-sounds",
  },
  openGraph: {
    title: "Free Relaxing Sounds App for Stress Relief & Anxiety | Calma",
    description:
    "Feeling stressed? Create your own relaxing soundscape with rain, ocean waves, crackling fire & white noise. Free relaxation app. No subscription.",
    url: "https://www.calmasounds.com/relaxing-sounds",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Relaxing Sounds App for Stress Relief | Calma",
    description:
    "Feeling stressed? Create relaxing soundscapes with rain, ocean waves & white noise. Free relaxation app. No subscription.",
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
      "name": "Relaxing Sounds App",
      "item": "https://www.calmasounds.com/relaxing-sounds"
    }
  ]
};

export default function RelaxingSoundsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Relaxing sounds
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          A relaxing sounds app for calmer evenings and softer daily routines
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple relaxing sounds app that helps you slow
          down, reset after busy days and create a more peaceful environment
          whenever you need it. Build personalized soundscapes for relaxation,
          emotional balance and quiet daily rituals.
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
            <h2 className="text-2xl font-semibold">Slow down more easily</h2>
            <p className="mt-4 leading-7 text-white/70">
              Use calming soundscapes to ease out of work mode, quiet mental
              noise and create a gentler evening transition.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Create your own relaxing mix</h2>
            <p className="mt-4 leading-7 text-white/70">
              Combine sounds in a way that feels personal, warm and aligned with
              the atmosphere you want around you.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Build a softer daily ritual</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma helps you come back to relaxation in a simple, elegant way
              that fits real everyday life.
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
            See the relaxing side of Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"

              alt="Calma mobile app interface for choosing relaxing sound categories"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Calma interface for customizing relaxing ambient soundscapes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma sound mixer showing natural textures and calming audio layers"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma interface for managing personalized relaxation sound mixes"
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
            Learn more about relaxation and sound
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Benefits of Nature Sounds</h3>
            <p className="mt-3 text-white/70">
              Explore how natural soundscapes like rain and ocean waves can act as natural grounding for relaxation.
            </p>
          </a>
          <a
            href="/blog/guided-breathing-techniques"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Guided Breathing Techniques</h3>
            <p className="mt-3 text-white/70">
              Discover calming breathing methods that work alongside ambient sounds for deeper relaxation.
            </p>
          </a>
          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Sounds for Sleep</h3>
            <p className="mt-3 text-white/70">
              Learn which calming sounds help you relax into deeper, more restful sleep.
            </p>
          </a>
          <a
            href="/blog/how-to-build-a-bedtime-routine"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Build a Bedtime Routine</h3>
            <p className="mt-3 text-white/70">
              Create a calmer evening ritual using relaxing sounds and simple habits.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Relaxing sounds app FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is a relaxing sounds app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              A relaxing sounds app helps you play calming audio that supports
              unwinding, emotional reset and more peaceful routines.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              When can I use Calma for relaxation?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              You can use Calma after work, during evening wind-down, while
              reading, resting or anytime you want a softer background around you.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can I personalize the relaxing sounds?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes. Calma is designed around creating your own personalized
              relaxing soundscape instead of relying on only one fixed track.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What are the best relaxing sounds for anxiety?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              For anxiety relief, soft rain sounds, gentle ocean waves, and low-frequency brown noise tend to work best. These sounds activate the parasympathetic nervous system, helping to lower heart rate and cortisol. Combining them with slow, deep breathing can amplify the calming effect.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              How long should I listen to relaxing sounds?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Even 15–20 minutes of relaxing sounds can help reduce stress and lower cortisol levels. For sleep, many people set a timer for 30–60 minutes so the sounds play while they fall asleep and then stop automatically. Calma includes a built-in sleep timer for this purpose.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a relaxing sounds app?","acceptedAnswer":{"@type":"Answer","text":"A relaxing sounds app helps you play calming audio that supports unwinding, emotional reset and more peaceful routines."}},{"@type":"Question","name":"When can I use Calma for relaxation?","acceptedAnswer":{"@type":"Answer","text":"You can use Calma after work, during evening wind-down, while reading, resting or anytime you want a softer background around you."}},{"@type":"Question","name":"Can I personalize the relaxing sounds?","acceptedAnswer":{"@type":"Answer","text":"Yes. Calma is designed around creating your own personalized relaxing soundscape instead of relying on one fixed track."}},{"@type":"Question","name":"What are the best relaxing sounds for anxiety?","acceptedAnswer":{"@type":"Answer","text":"For anxiety relief, soft rain sounds, gentle ocean waves, and low-frequency brown noise tend to work best. These sounds activate the parasympathetic nervous system, helping to lower heart rate and cortisol."}},{"@type":"Question","name":"How long should I listen to relaxing sounds?","acceptedAnswer":{"@type":"Answer","text":"Even 15-20 minutes of relaxing sounds can help reduce stress. For sleep, set a timer for 30-60 minutes. Calma includes a built-in sleep timer for this purpose."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Try Calma for calmer daily moments
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Download Calma on Google Play and create a more peaceful atmosphere
            with personalized relaxing sounds.
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