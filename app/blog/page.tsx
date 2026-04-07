import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calma Blog | Sleep, White Noise and Focus Guides",
  description:
    "Explore Calma guides about sleep sounds, white noise, bedtime routines and focus-friendly soundscapes.",
  alternates: {
    canonical: "https://www.calmasounds.com/blog",
  },
  openGraph: {
    title: "Calma Blog | Sleep, White Noise and Focus Guides",
    description:
      "Explore Calma guides about sleep sounds, white noise, bedtime routines and focus-friendly soundscapes.",
    url: "https://www.calmasounds.com/blog",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma Blog | Sleep, White Noise and Focus Guides",
    description:
      "Explore Calma guides about sleep sounds, white noise, bedtime routines and focus-friendly soundscapes.",
  },
};

const articles = [
  {
    href: "/blog/benefits-of-nature-sounds-for-relaxation",
    title: "Nature Sounds for Deep Relaxation",
    description:
      "Explore how natural soundscapes like rain and ocean waves can act as natural white noise to enhance your bedtime routine.",
  },
  {
    href: "/blog/best-sounds-for-sleep",
    title: "Best Sounds for Sleep",
    description:
      "A practical guide to rain, white noise and softer sleep soundscapes.",
  },
  {
    href: "/blog/white-noise-for-sleep",
    title: "White Noise for Sleep",
    description:
      "When white noise can help and how to build a calmer bedtime environment.",
  },
  {
    href: "/blog/rain-sounds-vs-white-noise",
    title: "Rain Sounds vs White Noise",
    description:
      "Compare emotional comfort, masking and bedtime atmosphere.",
  },
  {
    href: "/blog/how-to-build-a-bedtime-routine",
    title: "How to Build a Bedtime Routine",
    description:
      "Simple ways to create a calmer evening rhythm that supports sleep.",
  },
  {
    href: "/blog/best-sounds-for-studying",
    title: "Best Sounds for Studying",
    description:
      "Find the kinds of sounds that may help concentration and deeper focus.",
  },
  {
    href: "/blog/binaural-beats-for-sleep-and-focus",
    title: "Binaural Beats for Sleep and Focus",
    description:
      "A simple introduction to how binaural beats may support calm and focus.",
  },
  {
    href: "/blog/guided-breathing-techniques",
    title: "Guided Breathing Techniques",
    description:
      "Explore calming breathing methods for relaxation, balance, sleep and focus.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Calma Blog",
  url: "https://www.calmasounds.com/blog",
  description:
    "Guides about sleep sounds, white noise, focus sounds and calming routines.",
  hasPart: [
    {
      "@type": "Article",
      headline: "Nature Sounds for Deep Relaxation",
      url: "https://www.calmasounds.com/blog/benefits-of-nature-sounds-for-relaxation",
    },
    {
      "@type": "Article",
      headline: "Best Sounds for Sleep",
      url: "https://www.calmasounds.com/blog/best-sounds-for-sleep",
    },
    {
      "@type": "Article",
      headline: "White Noise for Sleep",
      url: "https://www.calmasounds.com/blog/white-noise-for-sleep",
    },
    {
      "@type": "Article",
      headline: "Rain Sounds vs White Noise",
      url: "https://www.calmasounds.com/blog/rain-sounds-vs-white-noise",
    },
    {
      "@type": "Article",
      headline: "How to Build a Bedtime Routine",
      url: "https://www.calmasounds.com/blog/how-to-build-a-bedtime-routine",
    },
    {
      "@type": "Article",
      headline: "Best Sounds for Studying",
      url: "https://www.calmasounds.com/blog/best-sounds-for-studying",
    },
    {
      "@type": "Article",
      headline: "Binaural Beats for Sleep and Focus",
      url: "https://www.calmasounds.com/blog/binaural-beats-for-sleep-and-focus",
    },
    {
      "@type": "Article",
      headline: "Guided Breathing Techniques",
      url: "https://www.calmasounds.com/blog/guided-breathing-techniques",
    },
  ],
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Calma logo"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-contain"
                priority
              />
            </Link>

            <p className="hidden text-sm italic tracking-[0.08em] text-white/60 lg:block">
              Your calm, by design
            </p>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Get Calma
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Calma Blog
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Sleep, white noise and focus guides
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Explore practical articles about sleep sounds, bedtime routines,
          white noise, relaxation and deeper focus.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-4 leading-7 text-white/70">
                {article.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Explore Calma</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/sleep-sounds-app"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950"
            >
              Sleep sounds app
            </a>
            <a
              href="/white-noise-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              White noise app
            </a>
            <a
              href="/focus-sounds-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              Focus sounds app
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}