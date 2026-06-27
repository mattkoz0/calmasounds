import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Offline Schlafgeräusche App für Reisen & Privatsphäre | Calma",
  description:
    "Suchen Sie nach einer Schlafgeräusche-App, die ohne Internet funktioniert? Calma funktioniert 100 % offline. Genießen Sie personalisierte Klanglandschaften im Flugmodus, auf Flügen und auf Reisen.",
  keywords: [
    "offline schlafgeräusche app",
    "schlafgeräusche app ohne internet",
    "flugmodus schlaf app",
    "reise schlafgeräusche",
    "schlafgeräusche kein wlan",
    "schlaf app offline kostenlos",
    "einschlafgeräusche ohne internet",
    "schlaf sounds flugmodus",
    "calma offline app",
    "schlafgeräusche ohne datenverbrauch",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/offline-sleep-sounds-app",
  },
  openGraph: {
    title: "Offline Schlafgeräusche App für Reisen & Privatsphäre | Calma",
    description:
      "Suchen Sie nach einer Schlafgeräusche-App, die ohne Internet funktioniert? Calma funktioniert 100 % offline. Genießen Sie personalisierte Klanglandschaften im Flugmodus, auf Flügen und auf Reisen.",
    url: "https://www.calmasounds.com/de/offline-sleep-sounds-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline Schlafgeräusche App für Reisen & Privatsphäre | Calma",
    description:
      "Suchen Sie nach einer Schlafgeräusche-App, die ohne Internet funktioniert? Calma funktioniert 100 % offline.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Funktioniert Calma offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, nach dem Herunterladen funktioniert Calma komplett offline. Sie benötigen keine WLAN- oder Mobilfunkverbindung, um Ihre Schlafgeräusche zu mischen und anzuhören.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich Calma im Flugzeug verwenden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolut. Calma ist perfekt für Flüge, da es vollständig im Flugmodus funktioniert, ohne Ladebildschirme oder Pufferung.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es eine App für Schlafgeräusche, die keine Daten verbraucht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Calma ist eine datenschutzfreundliche Schlafgeräusche-App, die kein Audio streamt. Alle Geräusche werden lokal auf Ihrem Gerät verarbeitet, was bedeutet, dass sie beim Abspielen keine mobilen Daten verbraucht.",
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
      "name": "Startseite",
      "item": "https://www.calmasounds.com/de"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Offline Schlafgeräusche App",
      "item": "https://www.calmasounds.com/de/offline-sleep-sounds-app"
    }
  ]
};

export default function OfflineSleepAppPageDe() {
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
          Flugmodus freundlich
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Die Offline-App für Schlafgeräusche für tiefe Erholung überall
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Schalten Sie Ihr WLAN aus und trennen Sie sich von der Welt. Calma funktioniert <strong>100 % offline</strong>, sodass Sie personalisierte Klanglandschaften ohne Ablenkungen, Datenverbrauch oder Pufferung genießen können.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Calma im Google Play Store herunterladen"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Bei Google Play herunterladen
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Calma im Apple App Store herunterladen"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Im App Store herunterladen
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Perfekt für Reisen</h2>
            <p className="mt-4 leading-7 text-white/70">
              Egal, ob Sie auf einem langen Flug, einer Zugfahrt sind oder in einem Hotel mit schlechtem WLAN übernachten, die Offline-Fähigkeit von Calma sorgt dafür, dass Sie Ihre Schlafgeräusche immer bereit haben.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Kein Datenverbrauch</h2>
            <p className="mt-4 leading-7 text-white/70">
              Im Gegensatz zu Streaming-Apps verbraucht Calma keine mobilen Daten. Die Geräusche werden direkt auf Ihrem Gerät gemischt.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Datenschutz zuerst</h2>
            <p className="mt-4 leading-7 text-white/70">
              Keine Sorge wegen ständiger Nachverfolgung. Versetzen Sie Ihr Telefon in den Flugmodus, um die EMF-Belastung zu reduzieren und friedlich zu schlafen.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Funktioniert Calma offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, nach dem Herunterladen funktioniert Calma komplett offline. Sie benötigen keine WLAN- oder Mobilfunkverbindung, um Ihre Schlafgeräusche zu mischen und anzuhören.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kann ich Calma im Flugzeug verwenden?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Absolut. Calma ist perfekt für Flüge, da es vollständig im Flugmodus funktioniert, ohne Ladebildschirme oder Pufferung.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Gibt es eine App für Schlafgeräusche, die keine Daten verbraucht?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, Calma ist eine datenschutzfreundliche Schlafgeräusche-App, die kein Audio streamt. Alle Geräusche werden lokal auf Ihrem Gerät verarbeitet, was bedeutet, dass sie beim Abspielen keine mobilen Daten verbraucht.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
