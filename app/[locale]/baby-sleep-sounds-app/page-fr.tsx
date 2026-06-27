import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Gratuite Sons Bébé | Bruit Blanc pour Bébés | Calma",
  description:
    "Vous cherchez du bruit blanc pour votre bébé ? Calmez votre nouveau-né avec des sons doux, de la pluie et des fréquences utérines. 100% gratuite, sans publicités, hors ligne.",
  keywords: [
    "application sommeil bébé",
    "bruit blanc pour bébé",
    "sons apaisants nouveau-né",
    "musique pour dormir bébé",
    "bruit de pluie bébé",
    "calma sommeil bébé",
    "app bruit blanc bébé gratuite",
    "sons du ventre maternel",
    "bruit brun bébé",
    "app sommeil bébé sans pub",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/baby-sleep-sounds-app",
  },
  openGraph: {
    title: "Application Gratuite Sons Bébé | Bruit Blanc | Calma",
    description:
    "Bruit blanc, pluie et sons utérins pour le sommeil de bébé. 100% gratuite, sans publicités.",
    url: "https://www.calmasounds.com/fr/baby-sleep-sounds-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sons Bébé Gratuit | Calma",
    description:
    "Bruit blanc pour bébés. 100% gratuite, hors ligne.",
  },
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
      "name": "Application de sons pour bébé",
      "item": "https://www.calmasounds.com/fr/baby-sleep-sounds-app"
    }
  ]
};

export default function BabySleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sons pour le sommeil de bébé
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Des sons apaisants pour aider votre tout-petit à dormir paisiblement
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application élégante et facile à utiliser proposant du bruit blanc constant, 
          de la pluie douce et des fréquences basses rappelant le ventre maternel. Calmez 
          rapidement votre nouveau-né et instaurez une routine de sieste rassurante.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Télécharger Calma sur Google Play (ouvre une nouvelle fenêtre)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Télécharger sur Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Télécharger Calma dans l'App Store (ouvre une nouvelle fenêtre)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Télécharger dans l'App Store
          </a>

          <Link
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Retour à l'accueil
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Masquez les bruits perturbateurs</h2>
            <p className="mt-4 leading-7 text-white/70">
              Les bébés sont facilement surpris par les bruits domestiques soudains. Le bruit blanc continu de Calma crée une bulle acoustique protectrice.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Imitez le ventre maternel</h2>
            <p className="mt-4 leading-7 text-white/70">
              L'utérus était un espace bruyant et rassurant. Le bruit brun à basse fréquence et les battements de cœur rappellent aux nouveau-nés cet environnement sûr.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mélange personnalisable</h2>
            <p className="mt-4 leading-7 text-white/70">
              Chaque bébé est différent. Avec Calma, mixez facilement un ventilateur et une pluie douce pour trouver la fréquence exacte qui apaise instantanément votre enfant.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Questions fréquentes sur le sommeil de bébé
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Le bruit blanc est-il sûr pour les bébés ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, à un volume modéré (moins de 50 dB) et avec l’appareil à plus de 2 mètres du berceau. Calma a un minuteur automatique.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Quelle couleur de bruit pour les nouveau-nés ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Le bruit brun simule les sons du ventre maternel et est préféré par beaucoup de nouveau-nés. Le bruit blanc est également très efficace.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma fonctionne-t-elle hors ligne ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Calma fonctionne complètement sans internet – parfait pour les voyages, la poussette ou l’allaitement nocturne.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Combien de temps faire jouer le bruit blanc ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Les experts recommandent 20–45 minutes. Calma possède un minuteur qui s’éteint automatiquement.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Puis-je mixer des sons pour mon bébé ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui ! Chaque bébé est unique. Calma vous permet de mixer bruit blanc avec pluie douce, ventilateur ou battements de cœur.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Le bruit blanc est-il sûr pour les bébés ?","acceptedAnswer":{"@type":"Answer","text":"Oui, à volume modéré et à plus de 2 mètres du berceau."}},{"@type":"Question","name":"Quelle couleur pour les nouveau-nés ?","acceptedAnswer":{"@type":"Answer","text":"Le bruit brun simule le ventre maternel. Le bruit blanc est aussi efficace."}},{"@type":"Question","name":"Fonctionne hors ligne ?","acceptedAnswer":{"@type":"Answer","text":"Oui, complètement sans internet."}},{"@type":"Question","name":"Combien de temps ?","acceptedAnswer":{"@type":"Answer","text":"20–45 minutes. Minuteur automatique inclus."}},{"@type":"Question","name":"Puis-je mixer des sons ?","acceptedAnswer":{"@type":"Answer","text":"Oui, mixez bruit blanc avec pluie, ventilateur ou battements de cœur."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Aidez votre bébé à dormir paisiblement
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Téléchargez Calma sur Google Play et créez l'environnement audio parfait pour les siestes et les nuits de votre enfant.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télécharger Calma sur Google Play"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télécharger Calma sur l'App Store"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              App Store
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
