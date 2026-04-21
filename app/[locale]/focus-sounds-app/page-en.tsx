import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Focus Sounds App | Calma",
  description:
    "Discover Calma, a beautifully simple focus sounds app for deep work, studying and personalized concentration soundscapes.",
  keywords: [
    "focus sounds app",
    "focus app",
    "concentration sounds app",
    "deep focus sounds",
    "study sounds app",
    "calma focus sounds",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/focus-sounds-app",
  },
  openGraph: {
    title: "Focus Sounds App | Calma",
    description:
      "Discover a beautifully simple focus sounds app for deep work, studying and concentration.",
    url: "https://www.calmasounds.com/focus-sounds-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Sounds App | Calma",
    description:
      "Discover a beautifully simple focus sounds app for deep work, studying and concentration.",
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
      "name": "Focus Sounds App",
      "item": "https://www.calmasounds.com/focus-sounds-app"
    }
  ]
};

export default function FocusSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Focus sounds app
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          A focus sounds app for deeper work, studying and calmer concentration
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple focus sounds app that helps you create
          personalized audio environments for deep work, reading, studying and
          quiet concentration. Build your own soundscape and stay immersed
          without visual clutter or distracting noise.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Calma on Google Play Store (opens in a new window)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download Calma on Google Play
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
            <h2 className="text-2xl font-semibold">Stay immersed longer</h2>
            <p className="mt-4 leading-7 text-white/70">
              Use background soundscapes that help reduce distraction and support
              more consistent concentration during work or study sessions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Create your own focus mix</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma lets you shape a more personal audio environment instead of
              relying on one generic focus track.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Work in a calmer way</h2>
            <p className="mt-4 leading-7 text-white/70">
              The app is designed to feel simple, elegant and emotionally light,
              helping your workspace feel less noisy and more intentional.
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
            See the focus side of Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Calma mobile app interface showing focus and concentration categories"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Calma interface for customizing focus soundscapes for studying"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma sound mixer interface for deep work background audio"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma interface for concentration sounds and binaural beats"
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
            Learn more about sound and focus
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Best Sounds for Studying</h3>
            <p className="mt-3 text-white/70">
              Find the kinds of sounds that may help concentration and deeper focus during your study sessions.
            </p>
          </a>
          <a
            href="/blog/binaural-beats-for-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Binaural Beats Explained</h3>
            <p className="mt-3 text-white/70">
              A simple introduction to how binaural beats may support calm and focus in your daily work.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Focus sounds app FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is a focus sounds app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              A focus sounds app helps create an audio background that supports
              concentration, reduces distraction and makes work or study feel more
              immersive.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              When can I use Calma for focus?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              You can use Calma while studying, reading, writing, working or any
              time you want a calmer and more controlled focus environment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can I personalize the focus sound mix?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes. Calma is designed around building your own personalized mix so
              your focus environment feels more natural and useful to you.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Try Calma for deep work and study
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Download Calma on Google Play and create a more focused environment
            with personalized soundscapes.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Calma on Google Play Store (opens in a new window)"
            className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download on Google Play
          </a>
        </div>
      </section>
    </main>
  );
}