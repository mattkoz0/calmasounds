import type { Metadata } from "next";
import Image from "next/image";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs BetterSleep | Best Sleep Sounds Alternative",
  description:
    "Comparing Calma vs BetterSleep? BetterSleep has sleep tracking and stories. Calma is the best alternative if you want a simple offline sleep sounds mixer without a subscription.",
  keywords: [
    "calma vs bettersleep",
    "bettersleep app alternative",
    "bettersleep without subscription",
    "sleep sounds mixer like bettersleep",
    "relax melodies alternative",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/calma-vs-bettersleep",
  },
  openGraph: {
    title: "Calma vs BetterSleep | Best Sleep Sounds Alternative",
    description:
      "Comparing Calma vs BetterSleep? BetterSleep has sleep tracking and stories. Calma is the best alternative if you want a simple offline sleep sounds mixer without a subscription.",
    url: "https://www.calmasounds.com/calma-vs-bettersleep",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs BetterSleep | Best Sleep Sounds Alternative",
    description:
      "Comparing Calma vs BetterSleep? Discover the best alternative for offline sleep sounds without a subscription.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Calma the same as BetterSleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Calma and BetterSleep are different apps. BetterSleep focuses on sleep tracking, an extensive library of stories, and an annual subscription model. Calma is focused purely on being an offline sleep sounds mixer with a one-time lifetime unlock.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best BetterSleep app alternative without a subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you only use BetterSleep (formerly Relax Melodies) for its sound mixer, Calma is one of the best alternatives. Calma offers a one-time lifetime unlock, meaning you get a premium sleep sounds mixer without the expensive monthly or annual subscription.",
      },
    }
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.calmasounds.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Calma vs BetterSleep",
      "item": "https://www.calmasounds.com/calma-vs-bettersleep"
    }
  ]
};

export default function CalmaVsBetterSleepPageEn() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AiDefinition 
        title="What is the difference between Calma and BetterSleep?"
        description="BetterSleep is a feature-rich app offering sleep tracking, sleep profiles, and stories, built on a subscription model. Calma is a simpler, more focused alternative providing a beautifully designed offline audio mixer, white noise, and rain sounds with a one-time lifetime unlock."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App Comparison
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs BetterSleep: Which one is right for you?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Both apps allow you to mix sounds for better sleep, but they serve different needs. Here is a factual comparison to help you choose the best fit.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Calma on Google Play Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Try Calma Free
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Choose BetterSleep if...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                You want to actively track your sleep phases and snoring.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                You love having a massive, constantly updated library of bedtime stories.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                You are comfortable paying a yearly subscription to maintain access to premium features.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">Choose Calma if...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                You mainly want to mix your own sleep sounds (like rain, wind, and brown noise) without clutter.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                You hate subscriptions and prefer a single, one-time payment for lifetime access.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                You need a privacy-first app that works 100% offline and doesn't require an account.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                You prefer a minimalist, distraction-free interface.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Is Calma the same as the BetterSleep app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No, Calma and BetterSleep (formerly Relax Melodies) are completely different apps made by different companies. BetterSleep is a sleep tracker and content platform. Calma is a specialized sound mixer designed to give you offline control over white noise and nature sounds without tracking your sleep.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is the best BetterSleep alternative without a subscription?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              If you only use BetterSleep for its sound mixer and find yourself not using the sleep tracking or stories, Calma is the perfect alternative. By switching, you can stop paying recurring fees and get a one-time lifetime unlock for a premium offline soundscape mixer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
