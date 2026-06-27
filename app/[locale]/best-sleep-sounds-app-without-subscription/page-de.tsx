import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Beste App für Schlafgeräusche ohne Abo | Calma",
  description:
    "Suchen Sie nach einer App für Schlafgeräusche ohne teure Abonnements? Calma bietet eine einmalige lebenslange Freischaltung für personalisierte Schlafgeräusche und weißes Rauschen.",
  keywords: [
    "schlafgeräusche app ohne abo",
    "kein abo schlaf app",
    "einmalzahlung schlaf app",
    "kostenlose schlafgeräusche app",
    "lebenslange freischaltung schlaf app",
    "schlaf app ohne abonnement",
    "weißes rauschen app kein abo",
    "calm alternative ohne abo",
    "schlafgeräusche einmalzahlung",
    "beste schlaf app gratis",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/best-sleep-sounds-app-without-subscription",
  },
  openGraph: {
    title: "Beste App für Schlafgeräusche ohne Abo | Calma",
    description:
      "Suchen Sie nach einer App für Schlafgeräusche ohne teure Abonnements? Calma bietet eine einmalige lebenslange Freischaltung für personalisierte Schlafgeräusche und weißes Rauschen.",
    url: "https://www.calmasounds.com/de/best-sleep-sounds-app-without-subscription",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beste App für Schlafgeräusche ohne Abo | Calma",
    description:
      "Suchen Sie nach einer App für Schlafgeräusche ohne teure Abonnements? Calma bietet eine einmalige lebenslange Freischaltung für personalisierte Schlafgeräusche.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gibt es eine Schlaf-App ohne Abonnement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Calma ist eine Premium-App für Schlafgeräusche, die kein Abonnement erfordert. Sie bietet eine kostenlose Version und eine einmalige lebenslange Freischaltung für den vollen Zugriff.",
      },
    },
    {
      "@type": "Question",
      name: "Lohnen sich Schlaf-Apps mit monatlicher Gebühr?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Viele Schlaf-Apps verlangen hohe monatliche oder jährliche Gebühren. Mit Calma umgehen Sie die wiederkehrenden Gebühren vollständig, indem Sie sich für eine einmalige Zahlung für lebenslangen Zugang.",
      },
    },
    {
      "@type": "Question",
      name: "Funktioniert Calma offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Calma funktioniert komplett offline und ist damit die perfekte Schlaf-App ohne Abo für Reisen oder wenn Sie nachts Ihr WLAN ausschalten möchten.",
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
      "name": "Schlafgeräusche ohne Abo",
      "item": "https://www.calmasounds.com/de/best-sleep-sounds-app-without-subscription"
    }
  ]
};

export default function BestSleepAppNoSubscriptionPageDe() {
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
          Kein Abonnement erforderlich
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Die beste App für Schlafgeräusche ohne Abonnement
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Haben Sie es satt, für Ihre Entspannung Miete zu zahlen? Calma ist eine wunderbar einfache App für Schlafgeräusche, 
          die Ihnen hilft, personalisierte Klanglandschaften für die Schlafenszeit zu erstellen – mit einer <strong>einmaligen lebenslangen Freischaltung</strong>. 
          Keine monatlichen Gebühren, keine jährlichen Verlängerungen, einfach nur Ruhe.
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
            <h2 className="text-2xl font-semibold">Einmal zahlen, für immer Ihnen</h2>
            <p className="mt-4 leading-7 text-white/70">
              Hören Sie auf, für den Schlaf zu bezahlen. Mit unserer lebenslangen Freischaltung erhalten Sie vollen Zugriff auf alle Premium-Sounds, Brainwave-Lab-Funktionen und zukünftige Updates ohne ein wiederkehrendes Abonnement.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">100 % Offline-fähig</h2>
            <p className="mt-4 leading-7 text-white/70">
              Einmal heruntergeladen, funktioniert Calma komplett offline. Perfekt für Flüge, auf Reisen oder um Ihr Telefon nachts im Flugmodus zu lassen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Premium-Sound-Mixer</h2>
            <p className="mt-4 leading-7 text-white/70">
              Mischen Sie hochwertigen Regen, Meereswellen, weißes Rauschen und braunes Rauschen, um die perfekte personalisierte Klanglandschaft zu erstellen.
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
              Gibt es eine Schlaf-App ohne Abonnement?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, Calma ist eine Premium-App für Schlafgeräusche, die kein Abonnement erfordert. Sie bietet eine kostenlose Version und eine einmalige lebenslange Freischaltung für den vollen Zugriff.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Lohnen sich Schlaf-Apps mit monatlicher Gebühr?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Viele Schlaf-Apps verlangen hohe monatliche oder jährliche Gebühren für Serverkosten und neue Inhalte. Mit Calma umgehen Sie die wiederkehrenden Gebühren vollständig, indem Sie sich für eine einmalige Zahlung für lebenslangen Zugang zu unserem Premium-Offline-Mixer entscheiden.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Funktioniert Calma offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, Calma funktioniert komplett offline und ist damit die perfekte Schlaf-App ohne Abo für Reisen oder wenn Sie nachts Ihr WLAN ausschalten möchten, um Ablenkungen zu reduzieren.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
