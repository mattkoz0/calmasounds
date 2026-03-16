import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sound Mixer App | Calma",
  description:
    "Discover Calma, a beautifully simple sound mixer app for sleep, relaxation, focus and personalized audio routines.",
  keywords: [
    "sound mixer app",
    "sleep sound mixer",
    "relaxation sound mixer",
    "focus sound mixer",
    "personalized soundscapes",
    "calma sound mixer",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/sound-mixer-app",
  },
  openGraph: {
    title: "Sound Mixer App | Calma",
    description:
      "Discover a beautifully simple sound mixer app for sleep, relaxation, focus and personalized soundscapes.",
    url: "https://www.calmasounds.com/sound-mixer-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sound Mixer App | Calma",
    description:
      "Discover a beautifully simple sound mixer app for sleep, relaxation, focus and personalized soundscapes.",
  },
};

export default function SoundMixerAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-wide">
            Calma
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Download on Google Play
          </a>
        </div>
      </header>

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
              alt="Calma sound mixer app screenshot 1"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Calma sound mixer app screenshot 2"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma sound mixer app screenshot 3"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma sound mixer app screenshot 4"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
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

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download on Google Play
          </a>
        </div>
      </section>
    </main>
  );
}