import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Why Rain Sounds Are the Ultimate Secret to Better Sleep and Focus | Calma Blog",
  description:
    "Discover why steady rain sounds are perfect for calming your mind, beating insomnia, and keeping you focused during deep work. Find out the science behind it.",
  alternates: {
    canonical: "https://www.calmasounds.com/blog/rain-sounds-for-better-sleep-and-focus",
  },
  openGraph: {
    title: "Why Rain Sounds Are the Ultimate Secret to Better Sleep and Focus",
    description:
      "Discover why steady rain sounds are perfect for calming your mind, beating insomnia, and keeping you focused.",
    url: "https://www.calmasounds.com/blog/rain-sounds-for-better-sleep-and-focus",
    siteName: "Calma",
    locale: "en_US",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Rain Sounds Are the Ultimate Secret to Better Sleep and Focus",
  description:
    "Discover why steady rain sounds are perfect for calming your mind, beating insomnia, and keeping you focused during deep work.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
    logo: {
      "@type": "ImageObject",
      url: "https://www.calmasounds.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.calmasounds.com/blog/rain-sounds-for-better-sleep-and-focus",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.calmasounds.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.calmasounds.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rain Sounds for Sleep and Focus",
      item: "https://www.calmasounds.com/blog/rain-sounds-for-better-sleep-and-focus",
    },
  ],
};

export default function RainSoundsBlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Calma Sounds logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-semibold tracking-wide">Calma</span>
          </Link>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <Link href="/blog" className="transition hover:text-white">
              Blog Index
            </Link>
          </nav>

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

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          >
            ← Back to Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Why Rain Sounds Are the Ultimate Secret to Better Sleep and Focus
        </h1>
        
        <div className="mt-8">
          {/* YouTube Shorts Embed */}
          <div className="flex justify-center mb-8">
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/ds-fFkoWBUo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-3xl shadow-xl shadow-black/50"
            ></iframe>
          </div>

          <p className="mt-6 text-lg leading-8 text-white/80">
            It is universally acknowledged that the steady pitter-patter of raindrops against a window creates a uniquely comforting atmosphere. But beyond just feeling cozy, there is real science to back up the benefits of <strong>rain sounds</strong>. Whether you struggle to doze off at night or find yourself distracted while trying to study, incorporating natural soundscapes can profoundly enhance your routines.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">The Magic Behind Sleep Sounds</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Our brains naturally seek out patterns. The rhythmic, non-threatening noise of falling rain creates a continuous blanket of audio—often compared to pink noise. This acoustic blanket masks disruptive background noises (like sudden traffic, a dog barking, or a noisy neighbor) that might otherwise startle you awake. 
            <strong> Sleep sounds</strong> built around genuine rain loops help your brain feel secure, easing you smoothly into deep sleep cycles.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">Why Focus Sounds Keep You In The Zone</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            While silence might seem ideal for concentration, a completely quiet room can ironically make tiny background noises much more distracting. Enter <strong>focus sounds</strong>. Rain acts as an active mask. Listening to the delicate and steady ambiance of a rainstorm can decrease the brain's alertness to sudden interruptions. For individuals studying, reading, or working long hours—especially those managing ADHD—a gentle drizzle is a consistent auditory anchor that promotes continuous focus without drawing conscious attention.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">Creating Your Personal Ritual</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Not all rain recordings are created equal. Some prefer heavy dramatic thunderstorms, while others drift easily to the sound of soft rain hitting leaves. The beauty of modern sound mixer apps is the ability to layer your environment. By picking high-quality <strong>rain sounds</strong> and blending them with gentle wind or soft piano, you curate your exact comfort zone.
          </p>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Ready to Upgrade Your Sleep and Focus?</h3>
            <p className="mt-4 leading-7 text-white/70">
              The Calma app offers intricately crafted rain mixes alongside personalized white noise layers. Build your custom soundscape and take control of your audio environment.
            </p>
            <div className="mt-6 flex justify-center sm:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="Download Calma App from Google Play"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
