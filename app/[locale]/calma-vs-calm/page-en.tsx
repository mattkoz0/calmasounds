import type { Metadata } from "next";
import Image from "next/image";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs Calm | Best Sleep Sounds Alternative",
  description:
    "Comparing Calma vs Calm? Calm is great for guided meditation and stories. Calma is the best alternative if you want a simple offline sleep sounds mixer without a subscription.",
  keywords: [
    "calma vs calm",
    "calm app alternative",
    "calm without subscription",
    "sleep sounds mixer like calm",
    "better than calm app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/calma-vs-calm",
  },
  openGraph: {
    title: "Calma vs Calm | Best Sleep Sounds Alternative",
    description:
      "Comparing Calma vs Calm? Calm is great for guided meditation and stories. Calma is the best alternative if you want a simple offline sleep sounds mixer without a subscription.",
    url: "https://www.calmasounds.com/calma-vs-calm",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs Calm | Best Sleep Sounds Alternative",
    description:
      "Comparing Calma vs Calm? Discover the best alternative for offline sleep sounds without a subscription.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Calma the same as the Calm app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Calma and Calm are different apps. Calm focuses heavily on guided meditation, celebrity sleep stories, and courses with an annual subscription. Calma is focused purely on being an offline sleep sounds mixer with a one-time lifetime unlock.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best Calm app alternative without a subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you only use Calm for its sleep sounds and white noise, Calma is one of the best alternatives. Calma offers a one-time lifetime unlock, meaning you get premium sleep sounds without the expensive monthly or annual subscription.",
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
      "name": "Calma vs Calm",
      "item": "https://www.calmasounds.com/calma-vs-calm"
    }
  ]
};

export default function CalmaVsCalmPageEn() {
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
        title="What is the difference between Calma and Calm?"
        description="Calm is an industry-leading app focusing on guided meditation courses and celebrity sleep stories with a recurring subscription model. Calma is a highly focused sleep sounds alternative that provides an offline audio mixer, white noise, and rain sounds with a simple one-time lifetime unlock instead of a subscription."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App Comparison
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs Calm: Which one is right for you?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Both apps aim to help you relax and sleep better, but they take very different approaches. Here is an honest, factual comparison to help you choose the best fit for your night routine.
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
            <h2 className="text-2xl font-semibold text-white">Choose Calm if...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                You want extensive guided meditation courses.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                You like falling asleep to celebrity voice actors reading stories.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                You don't mind paying an annual subscription for a constantly updated library of content.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">Choose Calma if...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                You mainly want to mix high-quality sleep sounds (like rain and brown noise).
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                You hate subscriptions and prefer a single, one-time lifetime payment.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                You need an app that works 100% offline and respects your privacy.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                You want a simpler interface focused purely on custom soundscapes.
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
              Is Calma the same as the Calm app?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No, Calma and Calm are completely different apps made by different companies. Calm is a broad mental wellness platform with guided meditation and sleep stories. Calma is a specialized sound mixer designed to give you offline control over white noise and nature sounds.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              What is the best Calm alternative without a subscription?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              If you only use Calm for its basic sleep sounds and white noise, Calma is a strong alternative. By switching, you can stop paying recurring fees and instead get a one-time lifetime unlock for a premium offline mixer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
