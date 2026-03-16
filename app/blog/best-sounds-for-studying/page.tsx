import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Sounds for Studying | Calma Blog",
  description:
    "Discover some of the best sounds for studying, focusing and deeper concentration, including softer background mixes and calmer audio environments.",
  keywords: [
    "best sounds for studying",
    "study sounds",
    "best sounds for focus",
    "concentration sounds",
    "focus sounds for studying",
    "calma blog",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/best-sounds-for-studying",
  },
  openGraph: {
    title: "Best Sounds for Studying | Calma Blog",
    description:
      "Discover some of the best sounds for studying, focusing and deeper concentration.",
    url: "https://www.calmasounds.com/blog/best-sounds-for-studying",
    siteName: "Calma",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sounds for Studying | Calma Blog",
    description:
      "Discover some of the best sounds for studying, focusing and deeper concentration.",
  },
};

export default function BestSoundsForStudyingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-wide">
            Calma
          </a>

          <a
            href="/focus-sounds-app"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Explore focus page
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Calma Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Best sounds for studying: what helps you focus better?
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">
          The best sounds for studying are usually the ones that help you stay
          mentally steady without pulling attention away from the task itself.
          Some people focus best with neutral background layers, while others
          prefer softer ambient soundscapes that make the environment feel less
          noisy and more immersive.
        </p>

        <div className="mt-10 space-y-10">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Neutral background sounds</h2>
            <p className="mt-4 leading-8 text-white/70">
              Neutral sound layers can work well for studying because they do
              not ask for much emotional attention. They help create a stable
              environment and may reduce the impact of distracting sounds around
              you.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Soft ambient soundscapes</h2>
            <p className="mt-4 leading-8 text-white/70">
              Some people study better when the environment feels softer and
              more immersive. Gentle ambient soundscapes can support focus
              without making the room feel empty or harsh.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">What usually does not help</h2>
            <p className="mt-4 leading-8 text-white/70">
              Sounds that are too dramatic, too lyrical or too attention-grabbing
              can make studying harder instead of easier. The goal is not to
              entertain the mind, but to reduce friction around concentration.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">How to choose the right study sound</h2>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>• Choose audio that fades into the background instead of dominating it.</li>
              <li>• Keep the volume gentle and steady.</li>
              <li>• Test the same sound across a few sessions before judging it.</li>
              <li>• Notice whether it helps you stay in the task longer.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">A more personal approach often works best</h2>
            <p className="mt-4 leading-8 text-white/70">
              The best study audio is often personal. A custom mix that feels
              calm, stable and non-intrusive may work better than any one-size-fits-all
              track because it fits the way you actually focus.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-semibold">
              Explore focus soundscapes with Calma
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              Calma helps you create softer focus environments, study-friendly
              audio backgrounds and personalized sound mixes for concentration.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/focus-sounds-app"
                className="rounded-2xl bg-white px-6 py-3 text-center font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                Explore focus sounds app
              </a>

              <a
                href="/sound-mixer-app"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
              >
                Explore sound mixer app
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}