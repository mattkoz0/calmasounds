import Image from "next/image";

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

      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Calma • Sleep Sounds & Relax
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Sleep better, relax deeper and focus with personalized soundscapes
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Calma is a beautifully simple sleep sounds and relaxation app that helps
          you create personalized audio mixes for better sleep, calmer evenings and
          deeper focus.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download on Google Play
          </a>

          <a
            href="#features"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Explore features
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/65">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Personalized mixes
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Sleep • Relax • Focus
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Beautifully simple experience
          </span>
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

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
          <Image
            src="/hero-banner.png"
            alt="Calma app banner"
            width={1024}
            height={500}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Video demo
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Watch Calma in motion
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            See how Calma looks and feels in real use, from immersive sound mixing
            to premium wellness features designed for sleep, relaxation and focus.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20">
          <video
            className="h-auto w-full rounded-[1.5rem]"
            controls
            preload="metadata"
            playsInline
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            App preview
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            See Calma in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explore the beautifully simple interface of Calma and see how the app
            helps you build calming soundscapes for sleep, relaxation and focus.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma app screenshot 1"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma app screenshot 2"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/5_en.png"
              alt="Calma app screenshot 3"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/7_en.png"
              alt="Calma app screenshot 4"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
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

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Why Calma
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            A calmer experience, designed with intention
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calma is built to feel elegant, focused and emotionally light. It helps
            you create a better sound environment without clutter, friction or visual
            noise.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Create your own atmosphere</h3>
            <p className="mt-4 leading-7 text-white/70">
              Mix sounds based on your mood, your routine and your moment. Calma gives
              you a more personal experience than one-size-fits-all audio apps.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Feel calmer, not overwhelmed</h3>
            <p className="mt-4 leading-7 text-white/70">
              The interface is designed to support calm, not distraction. Every screen
              aims to feel simple, immersive and easy to return to daily.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">One app, multiple daily rituals</h3>
            <p className="mt-4 leading-7 text-white/70">
              Use Calma before sleep, during evening wind-down, while working or when
              you simply need a softer background for your day.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Built to feel premium and warm</h3>
            <p className="mt-4 leading-7 text-white/70">
              Calma combines a polished look with a gentle emotional tone, helping the
              app feel like a place you want to come back to.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Explore more
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Discover Calma by intention
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explore dedicated pages for sleep, relaxation and focus to find the side
            of Calma that fits your routine best.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/sleep-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Sleep
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Sleep sounds app
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Explore how Calma supports calmer nights, bedtime routines and
              personalized sleep soundscapes.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explore sleep page →
            </span>
          </a>

          <a
            href="/relaxing-sounds"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Relax
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Relaxing sounds
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Discover a softer side of Calma built for peaceful evenings, emotional
              reset and calming daily rituals.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explore relaxing page →
            </span>
          </a>

          <a
            href="/focus-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Focus
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Focus sounds app
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              See how Calma helps create a calmer environment for deep work,
              concentration and study sessions.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explore focus page →
            </span>
          </a>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
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

      <section id="download" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Start now
          </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Download Calma and build a softer daily routine
            </h2>
            <p className="mt-4 leading-7 text-white/70">
            Create personalized soundscapes for better sleep, calmer evenings and deeper
            focus with a beautifully simple app designed for everyday use.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download Calma on Google Play
          </a>
          <p className="mt-4 text-sm text-white/60">
            Looking for a dedicated sleep page?{" "}
            <a
              href="/sleep-sounds-app"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Explore our sleep sounds app page
            </a>
          </p>
          <p className="mt-3 text-sm text-white/60">
            Want something softer for daily unwind?{" "}
            <a
              href="/relaxing-sounds"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Explore our relaxing sounds page
            </a>
          </p>
          <p className="mt-3 text-sm text-white/60">
            Need a calmer environment for work or study?{" "}
            <a
              href="/focus-sounds-app"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Explore our focus sounds app page
            </a>
          </p>
          <p className="mt-3 text-sm text-white/60">
            Looking for a softer background for sleep and calm?{" "}
            <a
              href="/white-noise-app"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Explore our white noise app page
            </a>
          </p>
          <p className="mt-3 text-sm text-white/60">
            Want to build your own personalized soundscape?{" "}
            <a
              href="/sound-mixer-app"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Explore our sound mixer app page
            </a>
          </p>
          <p className="mt-3 text-sm text-white/60">
            Want a practical sleep guide?{" "}
            <a
              href="/blog/rain-sounds-vs-white-noise"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Read our article on rain sounds vs white noise
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}