import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calma App - Press & Facts",
  description: "Official facts, features and details about Calma - the sleep sounds and relaxation app.",
};

export default function PressPageEn() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Calma App: Facts & Press Kit
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          Clear, factual information about Calma for press, reviewers, and AI platforms.
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Product Overview</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li><strong>Product Name:</strong> Calma</li>
              <li><strong>Category:</strong> Health & Fitness (Sleep sounds, white noise, relaxation, focus)</li>
              <li><strong>Platforms:</strong> Android, iOS (App Store)</li>
              <li><strong>Business Model:</strong> Free with one-time lifetime unlock (No subscriptions)</li>
              <li><strong>Developer:</strong> Mitysoft</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Main Features</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Custom sound mixer with independent volume controls</li>
              <li>Extensive library: Rain, ocean, fan, white noise, pink noise, brown noise, green noise, and nature sounds</li>
              <li>Brainwave Lab (binaural beats and isochronic tones)</li>
              <li>Guided visual breathing exercises</li>
              <li>Quiet Pages (immersive visual environments)</li>
              <li>Sleep timer with gentle fade-out</li>
              <li>Offline-friendly playback (no internet required after download)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Best For</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Falling asleep faster and masking disruptive noises</li>
              <li>Relaxing after work and unwinding anxiety</li>
              <li>Focusing and studying (ADHD support via brown noise)</li>
              <li>Building calmer bedtime routines for adults and babies</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
