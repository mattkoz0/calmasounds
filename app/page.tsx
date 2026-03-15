export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-wide">
            Calma
          </a>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="#download" className="transition hover:text-white">
              Download
            </a>
          </nav>

          <a
            href="#download"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Get Calma
          </a>
        </div>
      </header>

      <section className="mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Calma • Sleep Sounds & Relax
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Sleep better, relax deeper and focus with personalized soundscapes
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple app that helps you create calming audio
          mixes for sleep, relaxation and deep focus. Build your perfect sound
          environment in seconds.
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

        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Sleep
            </p>
            <h2 className="mt-3 text-xl font-semibold">Fall asleep in a calmer way</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Create bedtime sound mixes with rain, ambient textures and soothing
              background layers that help you unwind naturally.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Relax
            </p>
            <h2 className="mt-3 text-xl font-semibold">Slow down after busy days</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Use calming soundscapes to reset your mind, reduce noise around you
              and build a gentler evening routine.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Focus
            </p>
            <h2 className="mt-3 text-xl font-semibold">Stay immersed and productive</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Build your own background audio for studying, reading and deep work
              without distracting visuals or clutter.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            A simple routine in three steps
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-3xl font-bold text-white/30">01</div>
            <h3 className="mt-6 text-xl font-semibold">Choose your mood</h3>
            <p className="mt-3 leading-7 text-white/70">
              Start with the feeling you want: sleep, relaxation or focus.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-3xl font-bold text-white/30">02</div>
            <h3 className="mt-6 text-xl font-semibold">Build your mix</h3>
            <p className="mt-3 leading-7 text-white/70">
              Combine calming sounds into a personalized soundscape that fits your
              moment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-3xl font-bold text-white/30">03</div>
            <h3 className="mt-6 text-xl font-semibold">Press play and reset</h3>
            <p className="mt-3 leading-7 text-white/70">
              Let the mix support better sleep, a quieter evening or a more
              focused session.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Features
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Why people use Calma
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Personalized sound mixes</h3>
            <p className="mt-4 leading-7 text-white/70">
              Create your own relaxing environment instead of relying on a single
              generic track. Calma is built around flexibility and simplicity.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Designed for daily routines</h3>
            <p className="mt-4 leading-7 text-white/70">
              Whether it is bedtime, a short evening reset or deep work, Calma
              fits naturally into everyday moments.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Simple, immersive interface</h3>
            <p className="mt-4 leading-7 text-white/70">
              No clutter, no overwhelm, no noisy experience. Just a calm and
              polished space focused on audio and atmosphere.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Sleep, relax and focus in one app</h3>
            <p className="mt-4 leading-7 text-white/70">
              Calma is not limited to one use case. It supports restful nights,
              peaceful evenings and productive work sessions.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">What is Calma?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma is a sound mixer app designed to help you sleep better, relax
              more easily and stay focused with personalized audio mixes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Who is Calma for?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma is for anyone who wants a calmer bedtime routine, a more
              peaceful reset after work or a focused background for studying and
              deep work.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Can I create my own sound mix?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes. Calma is built around the idea of creating your own relaxing
              sound environment instead of listening to only one fixed track.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Is Calma available now?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma is available on Android, with more improvements and future
              platform expansion planned over time.
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Start now
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Start building your calmer routine today
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Discover a beautifully simple app for sleep sounds, daily relaxation
            and deep focus. Create your own soundscape with Calma.
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