import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Application de sons pour dormir hors ligne pour les voyages et la vie privée | Calma",
  description:
    "Vous cherchez une application de sons pour dormir qui fonctionne sans internet ? Calma fonctionne 100 % hors ligne. Profitez de paysages sonores personnalisés en mode avion, pendant les vols et les voyages.",
  keywords: [
    "application sons pour dormir hors ligne",
    "application sons pour dormir sans internet",
    "application sommeil mode avion",
    "sons pour dormir voyage",
    "sons pour dormir sans wifi",
    "app sommeil offline gratuite",
    "sons pour dormir sans données",
    "app dormir mode avion",
    "calma hors ligne",
    "bruits relaxants sans internet",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/offline-sleep-sounds-app",
  },
  openGraph: {
    title: "Application de sons pour dormir hors ligne pour les voyages et la vie privée | Calma",
    description:
      "Vous cherchez une application de sons pour dormir qui fonctionne sans internet ? Calma fonctionne 100 % hors ligne. Profitez de paysages sonores personnalisés en mode avion, pendant les vols et les voyages.",
    url: "https://www.calmasounds.com/fr/offline-sleep-sounds-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Application de sons pour dormir hors ligne pour les voyages et la vie privée | Calma",
    description:
      "Vous cherchez une application de sons pour dormir qui fonctionne sans internet ? Calma fonctionne 100 % hors ligne.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calma fonctionne-t-elle hors ligne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, une fois téléchargée, Calma fonctionne complètement hors ligne. Vous n'avez pas besoin d'une connexion Wi-Fi ou cellulaire pour mélanger et écouter vos sons pour dormir.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je utiliser Calma dans un avion ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Calma est parfaite pour les vols car elle fonctionne entièrement en mode avion sans écrans de chargement ni mise en mémoire tampon.",
      },
    },
    {
      "@type": "Question",
      name: "Existe-t-il une application de sons pour dormir qui n'utilise pas de données ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Calma est une application de sons pour dormir respectueuse de la vie privée qui ne diffuse pas de son en streaming. Tous les sons sont traités localement sur votre appareil, ce qui signifie qu'elle ne consommera pas vos données mobiles pendant la lecture.",
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
      "name": "Accueil",
      "item": "https://www.calmasounds.com/fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Application de sons pour dormir hors ligne",
      "item": "https://www.calmasounds.com/fr/offline-sleep-sounds-app"
    }
  ]
};

export default function OfflineSleepAppPageFr() {
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
          Compatible avec le mode avion
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          L'application de sons pour dormir hors ligne pour un repos profond n'importe où
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Désactivez votre Wi-Fi et déconnectez-vous du monde. Calma fonctionne <strong>100 % hors ligne</strong> pour que vous puissiez profiter de paysages sonores personnalisés sans distractions, utilisation de données ou mise en mémoire tampon.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Télécharger Calma sur Google Play Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Télécharger sur Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Télécharger Calma sur l'App Store d'Apple"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Télécharger dans l'App Store
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Parfaite pour les voyages</h2>
            <p className="mt-4 leading-7 text-white/70">
              Que vous soyez sur un long vol, dans un train ou dans un hôtel avec un mauvais Wi-Fi, la capacité hors ligne de Calma garantit que vos sons pour dormir sont toujours prêts.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Zéro utilisation de données</h2>
            <p className="mt-4 leading-7 text-white/70">
              Contrairement aux applications de streaming, Calma ne consomme pas vos données mobiles. Les sons sont mixés directement sur votre appareil.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">La vie privée d'abord</h2>
            <p className="mt-4 leading-7 text-white/70">
              Pas besoin de s'inquiéter d'un suivi constant. Mettez votre téléphone en mode avion pour réduire l'exposition aux CEM et dormir paisiblement.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Questions Fréquemment Posées
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma fonctionne-t-elle hors ligne ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, une fois téléchargée, Calma fonctionne complètement hors ligne. Vous n'avez pas besoin d'une connexion Wi-Fi ou cellulaire pour mélanger et écouter vos sons pour dormir.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Puis-je utiliser Calma dans un avion ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Absolument. Calma est parfaite pour les vols car elle fonctionne entièrement en mode avion sans écrans de chargement ni mise en mémoire tampon.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Existe-t-il une application de sons pour dormir qui n'utilise pas de données ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma est une application de sons pour dormir respectueuse de la vie privée qui ne diffuse pas de son en streaming. Tous les sons sont traités localement sur votre appareil, ce qui signifie qu'elle ne consommera pas vos données mobiles pendant la lecture.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
