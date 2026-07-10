import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Offline Sleep Sounds App for Travel & Privacy | Calma",
  description:
    "Looking for a sleep sounds app that works without internet? Calma works 100% offline. Enjoy personalized soundscapes on airplane mode, during flights, and travel.",
  keywords: [
    "offline sleep sounds app",
    "sleep sounds app without internet",
    "airplane mode sleep app",
    "travel sleep sounds",
    "sleep sounds no wifi",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/offline-sleep-sounds-app",
  },
  openGraph: {
    title: "Offline Sleep Sounds App for Travel & Privacy | Calma",
    description:
      "Looking for a sleep sounds app that works without internet? Calma works 100% offline. Enjoy personalized soundscapes on airplane mode, during flights, and travel.",
    url: "https://www.calmasounds.com/offline-sleep-sounds-app",
    siteName: "Calma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline Sleep Sounds App for Travel & Privacy | Calma",
    description:
      "Looking for a sleep sounds app that works without internet? Calma works 100% offline.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Calma work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, once downloaded, Calma works completely offline. You don't need a Wi-Fi or cellular connection to mix and listen to your sleep sounds.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Calma on an airplane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Calma is perfect for flights because it works entirely in airplane mode without buffering or loading screens.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a sleep sounds app that doesn't use data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Calma is a privacy-first sleep sounds app that doesn't stream audio. All sounds are processed locally on your device, meaning it won't consume your mobile data while playing.",
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
      "name": "Offline Sleep Sounds App",
      "item": "https://www.calmasounds.com/offline-sleep-sounds-app"
    }
  ]
};

export default function OfflineSleepAppPageEn() {
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
          Airplane Mode Friendly
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          The offline sleep sounds app for deep rest anywhere
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Turn off your Wi-Fi and disconnect from the world. Calma works <strong>100% offline</strong> so you can enjoy personalized soundscapes without distractions, data usage, or buffering.
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
            <h2 className="text-2xl font-semibold">Perfect for Travel</h2>
            <p className="mt-4 leading-7 text-white/70">
              Whether you are on a long flight, a train ride, or staying in a hotel with poor Wi-Fi, Calma's offline capability ensures you always have your sleep sounds ready.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Zero Data Usage</h2>
            <p className="mt-4 leading-7 text-white/70">
              Unlike streaming apps, Calma doesn't consume your mobile data. The sounds are mixed directly on your device.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Privacy First</h2>
            <p className="mt-4 leading-7 text-white/70">
              No need to worry about constant tracking. Put your phone in airplane mode to reduce EMF exposure and sleep peacefully.
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
              Does Calma work offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes, once downloaded, Calma works completely offline. You don't need a Wi-Fi or cellular connection to mix and listen to your sleep sounds.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Can I use Calma on an airplane?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Absolutely. Calma is perfect for flights because it works entirely in airplane mode without buffering or loading screens.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Is there a sleep sounds app that doesn't use data?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Yes, Calma is a privacy-first sleep sounds app that doesn't stream audio. All sounds are processed locally on your device, meaning it won't consume your mobile data while playing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
