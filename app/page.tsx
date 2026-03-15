export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Calma • Sleep Sounds & Relax
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Relax, sleep and focus with beautifully simple soundscapes
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Calma helps you create calming audio mixes for sleep, relaxation and
          deep focus. Simple, immersive and designed for everyday peace.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#download"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Get Calma on Google Play
          </a>

          <a
            href="#features"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Explore features
          </a>
        </div>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <h2 className="text-xl font-semibold">Sleep better</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Build soothing bedtime mixes with relaxing ambient sounds and a
              calm distraction-free experience.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <h2 className="text-xl font-semibold">Relax daily</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Use peaceful soundscapes to slow down, reset after work and create
              a gentler daily routine.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <h2 className="text-xl font-semibold">Focus deeply</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Create immersive background mixes for concentration, studying and
              focused work sessions.
            </p>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Why Calma?</h2>
            <p className="mt-4 text-white/70 leading-7">
              Calma is designed for people who want a simple and elegant way to
              improve sleep, relax faster and stay focused with personalized
              soundscapes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Built for everyday calm</h2>
            <p className="mt-4 text-white/70 leading-7">
              Whether you need bedtime rain ambience, a peaceful evening reset
              or a deeper focus session, Calma helps you shape your ideal audio
              environment in seconds.
            </p>
          </div>
        </div>
      </section>

      <section
        id="download"
        className="mx-auto max-w-4xl px-6 py-20 text-center"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="text-3xl font-semibold">Start your calmer routine</h2>
          <p className="mt-4 text-white/70 leading-7">
            Discover a beautifully simple app for sleep sounds, relaxation and
            focus. Download Calma and create your perfect soundscape.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Google Play link coming soon
          </a>
        </div>
      </section>
    </main>
  );
}