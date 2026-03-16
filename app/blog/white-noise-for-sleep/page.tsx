import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Noise for Sleep | Calma Blog",
  description:
    "Learn how white noise for sleep works, when it may help create a calmer bedtime environment, and how to choose a softer nighttime sound routine.",
  keywords: [
    "white noise for sleep",
    "white noise sleep",
    "white noise bedtime",
    "sleep sounds white noise",
    "calma blog",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/white-noise-for-sleep",
  },
  openGraph: {
    title: "White Noise for Sleep | Calma Blog",
    description:
      "Learn how white noise for sleep may help create a calmer and more stable bedtime environment.",
    url: "https://www.calmasounds.com/blog/white-noise-for-sleep",
    siteName: "Calma",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Noise for Sleep | Calma Blog",
    description:
      "Learn how white noise for sleep may help create a calmer and more stable bedtime environment.",
  },
};

export default function WhiteNoiseForSleepPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-semibold tracking-wide">
            Calma
          </a>

          <a
            href="/white-noise-app"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Explore white noise page
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Calma Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          White noise for sleep: when can it help?
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/70">
          White noise for sleep is often used to create a more stable and less
          distracting sound environment at bedtime. For some people, it feels
          neutral and protective. For others, it may feel too mechanical unless
          it is combined with a softer nighttime atmosphere. The best approach
          depends on what kind of bedtime environment helps you feel most calm.
        </p>

        <div className="mt-10 space-y-10">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">What white noise does</h2>
            <p className="mt-4 leading-8 text-white/70">
              White noise creates a steady background layer that can make sudden
              external sounds feel less noticeable. That is why many people use
              it at bedtime, especially when they are sensitive to unpredictable
              noise from outside or from inside the home.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Why some people like it for sleep</h2>
            <p className="mt-4 leading-8 text-white/70">
              White noise can feel consistent, simple and reliable. If your goal
              is to create a stable audio background rather than an emotional
              atmosphere, it may feel more effective than softer ambient sounds.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">When it may not feel ideal</h2>
            <p className="mt-4 leading-8 text-white/70">
              Some people prefer bedtime audio that feels warmer, more natural
              and more emotionally calming. In that case, rain sounds or softer
              layered soundscapes may feel easier to relax into than pure white
              noise alone.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">How to make it work better</h2>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>• Keep the sound level gentle rather than aggressive.</li>
              <li>• Use it consistently for a few nights before judging it.</li>
              <li>• Pair it with a calmer evening routine instead of treating it like a magic switch.</li>
              <li>• Notice whether it helps you feel quieter, safer or less reactive.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">White noise vs softer sleep audio</h2>
            <p className="mt-4 leading-8 text-white/70">
              White noise is often more functional, while softer sleep audio
              tends to feel more atmospheric. Neither is automatically better.
              The best choice is the one that helps your evenings feel calmer,
              more repeatable and less mentally noisy.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-semibold">
              Explore sleep soundscapes with Calma
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              Calma helps you explore white-noise-style audio, sleep soundscapes
              and more personalized bedtime environments.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/white-noise-app"
                className="rounded-2xl bg-white px-6 py-3 text-center font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                Explore white noise app
              </a>

              <a
                href="/blog/rain-sounds-vs-white-noise"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
              >
                Read rain vs white noise
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}