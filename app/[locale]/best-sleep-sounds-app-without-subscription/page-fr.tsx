import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Meilleure application de sons pour dormir sans abonnement | Calma",
  description:
    "Vous cherchez une application de sons pour dormir sans abonnements coûteux ? Calma offre un déverrouillage à vie via un paiement unique pour des sons de sommeil et un bruit blanc personnalisés.",
  keywords: [
    "application sons pour dormir sans abonnement",
    "application sommeil sans abonnement",
    "application sommeil paiement unique",
    "application sons pour dormir gratuite",
    "déverrouillage à vie application sommeil",
    "app sommeil sans abonnement gratuite",
    "bruit blanc sans abonnement",
    "alternative calm sans paiement mensuel",
    "sons dormir paiement unique",
    "meilleure app sommeil gratuite",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/best-sleep-sounds-app-without-subscription",
  },
  openGraph: {
    title: "Meilleure application de sons pour dormir sans abonnement | Calma",
    description:
      "Vous cherchez une application de sons pour dormir sans abonnements coûteux ? Calma offre un déverrouillage à vie via un paiement unique pour des sons de sommeil et un bruit blanc personnalisés.",
    url: "https://www.calmasounds.com/fr/best-sleep-sounds-app-without-subscription",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meilleure application de sons pour dormir sans abonnement | Calma",
    description:
      "Vous cherchez une application de sons pour dormir sans abonnements coûteux ? Calma offre un déverrouillage à vie avec un seul paiement.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Existe-t-il une application de sommeil sans abonnement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Calma est une application premium de sons pour le sommeil qui ne nécessite pas d'abonnement. Elle propose une version gratuite et un déverrouillage à vie pour un accès complet.",
      },
    },
    {
      "@type": "Question",
      name: "Les applications de sommeil valent-elles le tarif mensuel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De nombreuses applications facturent des frais mensuels ou annuels élevés. Avec Calma, vous évitez totalement les frais récurrents en optant pour un paiement unique pour un accès à vie.",
      },
    },
    {
      "@type": "Question",
      name: "Calma fonctionne-t-elle hors ligne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Calma fonctionne complètement hors ligne, ce qui en fait l'application sans abonnement parfaite pour voyager ou lorsque vous souhaitez désactiver votre Wi-Fi la nuit.",
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
      "name": "Sons pour dormir sans abonnement",
      "item": "https://www.calmasounds.com/fr/best-sleep-sounds-app-without-subscription"
    }
  ]
};

export default function BestSleepAppNoSubscriptionPageFr() {
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
          Aucun Abonnement Requis
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          La meilleure application de sons pour dormir sans abonnement
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Fatigué de louer votre relaxation ? Calma est une application de sons pour le sommeil magnifiquement simple qui 
          vous aide à créer des paysages sonores personnalisés pour l'heure du coucher, avec un <strong>déverrouillage à vie via un paiement unique</strong>. 
          Pas de frais mensuels, pas de renouvellements annuels, juste le calme.
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
            <h2 className="text-2xl font-semibold">Payez Une Fois, À Vous Pour Toujours</h2>
            <p className="mt-4 leading-7 text-white/70">
              Arrêtez de payer pour dormir. Avec notre déverrouillage à vie, vous obtenez un accès complet à tous les sons premium, aux fonctionnalités du Brainwave Lab et aux futures mises à jour sans abonnement récurrent.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">100 % Fonctionnel Hors Ligne</h2>
            <p className="mt-4 leading-7 text-white/70">
              Une fois téléchargée, Calma fonctionne complètement hors ligne. Parfait pour les vols, les voyages ou pour garder votre téléphone en mode avion la nuit.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mixeur de Sons Premium</h2>
            <p className="mt-4 leading-7 text-white/70">
              Mélangez de la pluie de haute qualité, les vagues de l'océan, le bruit blanc et le bruit brun pour créer le paysage sonore personnalisé parfait.
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
              Existe-t-il une application de sommeil sans abonnement ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma est une application premium de sons pour le sommeil qui ne nécessite pas d'abonnement. Elle propose une version gratuite et un déverrouillage à vie via un paiement unique pour un accès complet.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Les applications de sommeil valent-elles le tarif mensuel ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              De nombreuses applications facturent des frais élevés pour couvrir les coûts des serveurs et le nouveau contenu. Avec Calma, vous évitez totalement les frais récurrents en optant pour un paiement unique afin d'accéder à notre mixeur premium hors ligne.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma fonctionne-t-elle hors ligne ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma fonctionne complètement hors ligne, ce qui en fait l'application parfaite sans abonnement pour voyager ou lorsque vous souhaitez désactiver votre Wi-Fi la nuit pour réduire les distractions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
