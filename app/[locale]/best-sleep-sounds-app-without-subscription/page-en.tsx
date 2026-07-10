import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Best Sleep Sounds App Without Subscription | Calma",
  description:
    "Looking for a sleep sounds app without expensive subscriptions? Calma offers a one-time lifetime unlock for premium personalized sleep sounds and white noise.",
  keywords: [
    "sleep sounds app without subscription",
    "no subscription sleep app",
    "one time payment sleep app",
    "free sleep sounds app",
    "lifetime unlock sleep app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/best-sleep-sounds-app-without-subscription",
  },
  openGraph: {
    title: "Best Sleep Sounds App Without Subscription | Calma",
    description:
      "Looking for a sleep sounds app without expensive subscriptions? Calma offers a one-time lifetime unlock for premium personalized sleep sounds and white noise.",
    url: "https://www.calmasounds.com/best-sleep-sounds-app-without-subscription",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sleep Sounds App Without Subscription | Calma",
    description:
      "Looking for a sleep sounds app without expensive subscriptions? Calma offers a one-time lifetime unlock for premium personalized sleep sounds.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a sleep app without a subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Calma is a premium sleep sounds app that does not require a subscription. It offers a free version and a one-time lifetime unlock for full access.",
      },
    },
    {
      "@type": "Question",
      name: "Are sleep apps worth the monthly fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many sleep apps charge high monthly or annual fees. With Calma, you skip the recurring fees entirely by opting for a single, one-time payment for lifetime access.",
      },
    },
    {
      "@type": "Question",
      name: "Does Calma work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Calma works completely offline, making it the perfect no-subscription sleep app for travel or when you want to turn off your Wi-Fi at night.",
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
      "name": "Sleep Sounds Without Subscription",
      "item": "https://www.calmasounds.com/best-sleep-sounds-app-without-subscription"
    }
  ]
};

export default function BestSleepAppNoSubscriptionPageEn() {
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

      <AiDefinition />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          No Subscription Required
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          The best sleep sounds app without a subscription
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Tired of renting your relaxation? Calma is a beautifully simple sleep sounds app that 
          helps you create personalized soundscapes for bedtime, with a <strong>one-time lifetime unlock</strong>. 
          No monthly fees, no yearly renewals, just calm.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Calma on Google Play Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download on Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Calma on Apple App Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download on App Store
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Pay Once, Yours Forever</h2>
            <p className="mt-4 leading-7 text-white/70">
              Stop paying for sleep. With our lifetime unlock, you get full access to all premium sounds, Brainwave Lab features, and future updates without a recurring subscription.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">100% Offline Capable</h2>
            <p className="mt-4 leading-7 text-white/70">
              Once downloaded, Calma works completely offline. Perfect for flights, travel, or keeping your phone on airplane mode at night.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Premium Sound Mixer</h2>
            <p className="mt-4 leading-7 text-white/70">
              Mix high-quality rain, ocean waves, white noise, and brown noise to create the perfect personalized soundscape.
            </p>
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
              Is there a sleep app without a subscription?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes, Calma is a premium sleep sounds app that does not require a subscription. It offers a free version and a one-time lifetime unlock for full access.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Are sleep apps worth the monthly fee?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Many sleep apps charge high monthly or annual fees for server costs and new content. With Calma, you skip the recurring fees entirely by opting for a single, one-time payment for lifetime access to our premium offline mixer.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Does Calma work offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes, Calma works completely offline, making it the perfect no-subscription sleep app for travel or when you want to turn off your Wi-Fi at night to reduce distractions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
