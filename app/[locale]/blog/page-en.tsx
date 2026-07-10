import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";

type BlogHref = ComponentProps<typeof Link>["href"];

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
  {
    href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
    title: "Brown Noise vs White Noise vs Pink Noise",
    description:
      "Explore differences between noise colors and find which one is best for your focus or sleep.",
  },
  {
    href: "/blog/rain-sounds-for-better-sleep-and-focus",
    title: "Why Rain Sounds Are the Ultimate Secret to Better Sleep and Focus",
    description: "Discover why steady rain sounds are perfect for calming your mind, beating insomnia, and keeping you focused.",
  },
  {
    href: "/blog/green-noise-for-sleep",
    title: "Green Noise for Sleep: The Natural Way to Rest",
    description: "Discover what green noise is and why its nature-like frequencies might be the perfect soundscape for sleep.",
  },
  {
    href: "/blog/best-free-white-noise-app",
    title: "The Best Free White Noise App for Sleep",
    description: "Looking for free sleeping sounds? Discover why Calma is the perfect choice for white noise.",
  },
  {
    href: "/blog/best-color-noise-for-adhd",
    title: "What Color Noise is Best for ADHD?",
    description: "Explore why brown noise is often preferred over white noise for ADHD, focus, and overstimulation.",
  },
  {
    href: "/blog/sounds-for-tinnitus-relief",
    title: "Sound Enrichment for Tinnitus",
    description: "Learn how background sound may make tinnitus less noticeable and where the evidence remains limited.",
  },
  {
    href: "/blog/white-noise-for-babies",
    title: "White Noise for Babies: A Safer-Use Guide",
    description: "Practical precautions for using steady background sound around babies and young children.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Calma Blog",
  url: "https://www.calmasounds.com/blog",
  description:
    "Guides about sleep sounds, white noise, focus sounds and calming routines.",
  hasPart: articles.map(article => {
    const mapping = pathnamesMapping[article.href];
    const localizedPath = (mapping && mapping["en"]) || article.href;
    return {
      "@type": "Article",
      headline: article.title,
      url: `https://www.calmasounds.com${localizedPath}`,
    };
  }),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.calmasounds.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.calmasounds.com/blog"
    }
  ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />



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
            <Link
              key={article.href}
              href={article.href as BlogHref}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-4 leading-7 text-white/70">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Explore Calma</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/sleep-sounds-app"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 hover:scale-[1.02] transition"
            >
              Sleep sounds app
            </Link>
            <Link
              href="/white-noise-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              White noise app
            </Link>
            <Link
              href="/focus-sounds-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Focus sounds app
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
