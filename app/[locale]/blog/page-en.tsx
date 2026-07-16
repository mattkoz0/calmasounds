import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";

type BlogHref = ComponentProps<typeof Link>["href"];

export const metadata: Metadata = {
  title: "Sleep Sound Guides: White Noise, Focus & Tinnitus | Calma",
  description:
    "Explore evidence-aware guides to sleep sounds, noise colors, focus, ADHD, nature sound and tinnitus, organized into practical topic paths.",
  alternates: {
    canonical: "https://www.calmasounds.com/blog",
  },
  openGraph: {
    title: "Sleep Sound Guides: White Noise, Focus & Tinnitus | Calma",
    description:
      "Evidence-aware guides organized into practical paths for sleep, focus, noise colors, nature sound and tinnitus.",
    url: "https://www.calmasounds.com/blog",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleep Sound Guides: White Noise, Focus & Tinnitus | Calma",
    description:
      "Practical topic paths for sleep sounds, noise colors, focus, nature sound and tinnitus.",
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
    title: "Binaural Beats: Evidence and Limits",
    description:
      "Understand how binaural beats are produced and why research findings remain mixed.",
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
    title: "Rain Sounds for Sleep and Focus",
    description: "Separate masking, personal comfort and early research from claims that rain treats insomnia or ADHD.",
  },
  {
    href: "/blog/green-noise-for-sleep",
    title: "Green Noise for Sleep: Meaning and Limits",
    description: "Learn what marketers call green noise, how it differs from standard noise colors and what evidence is missing.",
  },
  {
    href: "/blog/best-free-white-noise-app",
    title: "How to Choose a Free White Noise App",
    description: "Compare apps, machines and streaming with a checklist for offline audio, loops, timers and pricing.",
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

const clusters = [
  {
    id: "sleep",
    label: "Sleep better",
    title: "Sleep sounds and bedtime routines",
    description: "Start with the comparison guide, then explore masking, bedtime habits and safer use for children.",
    articleHrefs: [
      "/blog/best-sounds-for-sleep",
      "/blog/white-noise-for-sleep",
      "/blog/how-to-build-a-bedtime-routine",
      "/blog/white-noise-for-babies",
    ],
  },
  {
    id: "noise-colors",
    label: "Understand the sound",
    title: "White, pink, brown and green noise",
    description: "Learn what the colors mean acoustically, where evidence exists and how apps compare with other playback options.",
    articleHrefs: [
      "/blog/rain-sounds-vs-white-noise",
      "/blog/brown-noise-vs-white-noise-vs-pink-noise",
      "/blog/green-noise-for-sleep",
      "/blog/best-free-white-noise-app",
    ],
  },
  {
    id: "focus",
    label: "Work and study",
    title: "Focus sounds and ADHD",
    description: "Compare background sound for study with the more limited clinical evidence concerning ADHD and binaural beats.",
    articleHrefs: [
      "/blog/best-sounds-for-studying",
      "/blog/best-color-noise-for-adhd",
      "/blog/binaural-beats-for-sleep-and-focus",
    ],
  },
  {
    id: "nature",
    label: "Wind down",
    title: "Nature sound and relaxation",
    description: "Explore rain, water and forest sound without turning early research into promises that every listener will relax.",
    articleHrefs: [
      "/blog/benefits-of-nature-sounds-for-relaxation",
      "/blog/rain-sounds-for-better-sleep-and-focus",
      "/blog/guided-breathing-techniques",
    ],
  },
  {
    id: "tinnitus",
    label: "Listen cautiously",
    title: "Tinnitus and sound enrichment",
    description: "Begin with the safety-focused guide, then compare masking sounds and their frequency profiles.",
    articleHrefs: [
      "/blog/sounds-for-tinnitus-relief",
      "/blog/white-noise-for-sleep",
      "/blog/brown-noise-vs-white-noise-vs-pink-noise",
    ],
  },
] as const;

const articlesByHref = new Map(articles.map((article) => [article.href, article]));

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
          Find the right sound guide for your goal
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Explore practical, evidence-aware paths about sleep sounds, noise colors,
          focus, relaxation and tinnitus. Each path begins with a broad guide and
          then moves into more specific questions.
        </p>

        <nav className="mt-10 flex flex-wrap gap-3" aria-label="Blog topic paths">
          {clusters.map((cluster) => (
            <a
              key={cluster.id}
              href={`#${cluster.id}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
            >
              {cluster.label}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-20">
          {clusters.map((cluster) => {
            const clusterArticles = cluster.articleHrefs
              .map((href) => articlesByHref.get(href))
              .filter((article): article is (typeof articles)[number] => Boolean(article));

            return (
              <section key={cluster.id} id={cluster.id} className="scroll-mt-28">
                <p className="text-sm uppercase tracking-[0.22em] text-emerald-300/80">
                  {cluster.label}
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{cluster.title}</h2>
                <p className="mt-4 max-w-3xl leading-7 text-white/70">{cluster.description}</p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {clusterArticles.map((article, index) => (
                    <Link
                      key={`${cluster.id}-${article.href}`}
                      href={article.href as BlogHref}
                      className={`group rounded-3xl border p-7 transition hover:-translate-y-0.5 hover:bg-white/10 ${
                        index === 0
                          ? "border-emerald-400/25 bg-emerald-400/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      {index === 0 && (
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                          Start here
                        </span>
                      )}
                      <h3 className={`${index === 0 ? "mt-3" : ""} text-2xl font-semibold`}>
                        {article.title}
                      </h3>
                      <p className="mt-4 leading-7 text-white/70">{article.description}</p>
                      <span className="mt-6 inline-flex text-sm font-medium text-white transition group-hover:text-emerald-200">
                        Read guide <span aria-hidden="true" className="ml-2">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
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
