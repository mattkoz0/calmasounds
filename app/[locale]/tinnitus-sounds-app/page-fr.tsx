import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meilleure Appli Acouphènes et Bruits Blancs (Gratuit) | Calma",
  description: "Vous cherchez la meilleure application pour les acouphènes ? Mélangez bruit blanc et sons de la nature pour masquer les bourdonnements. Gratuit, hors ligne.",
  keywords: [
    "application acouphènes",
    "sons pour acouphènes",
    "bruit blanc acouphènes",
    "masquage acouphènes",
    "acouphènes sommeil",
    "bruit rose acouphènes",
    "thérapie sonore acouphènes",
    "app acouphènes gratuite",
    "soulagement acouphènes",
    "calma acouphènes",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/tinnitus-sounds-app",
  },
  openGraph: {
    title: "Meilleure Appli Acouphènes et Bruits Blancs (Gratuit) | Calma",
    description: "Vous cherchez la meilleure application pour les acouphènes ? Mélangez bruit blanc et sons de la nature pour masquer les bourdonnements. Gratuit, hors ligne.",
    url: "https://www.calmasounds.com/fr/tinnitus-sounds-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meilleure Appli Acouphènes et Bruits Blancs (Gratuit) | Calma",
    description: "Vous cherchez la meilleure application pour les acouphènes ? Mélangez bruit blanc et sons de la nature pour masquer les bourdonnements. Gratuit, hors ligne.",
  },
};

const combinedJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Calma - Sleep Sounds & Relax",
      "applicationCategory": "HealthAndFitnessApplication",
      "operatingSystem": "ANDROID, IOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      }
    },
    {
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
      "name": "Application de sons pour acouphènes",
      "item": "https://www.calmasounds.com/fr/tinnitus-sounds-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Application gratuite acouphènes ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, Calma est 100% gratuite avec bruit blanc, rose et brun."
            }
        },
        {
            "@type": "Question",
            "name": "Quelle couleur pour les acouphènes ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rose ou blanc. Calma permet de tester et mixer."
            }
        },
        {
            "@type": "Question",
            "name": "Masquage sonore la nuit ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, un son de fond donne au cerveau une alternative."
            }
        },
        {
            "@type": "Question",
            "name": "Créer un mix anti-acouphènes ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, mixez plusieurs sons avec volume individuel."
            }
        },
        {
            "@type": "Question",
            "name": "Hors ligne ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, complètement sans internet."
            }
        }
    ]
}
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Application de sons pour acouphènes
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Une application de sons pour acouphènes pour un sommeil plus profond
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application de sons pour acouphènes élégante qui vous aide à créer 
          un environnement sonore plus doux et contrôlé pour le sommeil et la détente. 
          Utilisez-la pour vos routines du coucher, pour réduire les bruits gênants 
          et instaurer une atmosphère paisible autour de vous.
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
            <h2 className="text-2xl font-semibold">Favorisez un meilleur sommeil</h2>
            <p className="mt-4 leading-7 text-white/70">
              Le sons pour acouphènes aide à créer un fond sonore stable pour le coucher, 
              permettant une transition plus douce vers le sommeil réparateur.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Réduisez les bruits gênants</h2>
            <p className="mt-4 leading-7 text-white/70">
              Utilisez une couche audio contrôlée pour atténuer les sons soudains 
              et créer une bulle de calme dans votre environnement.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Simplicité et sérénité</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma rend le sons pour acouphènes plus humain et moins technique, l'intégrant 
              élégamment à votre routine de bien-être quotidienne.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Aperçu de l'app
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            L'expérience apaisante de Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              priority
              alt="Interface de l'application Calma montrant les catégories de sons et de sons pour acouphènes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="Interface de personnalisation du sons pour acouphènes pour le sommeil"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Capture d'écran du mixeur de sons pour le sommeil"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface du mixeur sonore pour créer des mélanges de sons pour acouphènes personnalisés"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Guides & Savoir
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            En savoir plus sur le sons pour acouphènes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/fr/blog/sounds-for-tinnitus-relief"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sons contre les acouphènes</h3>
            <p className="mt-3 text-white/70">
              Quels sons sont les plus efficaces pour masquer les acouphènes ? Un guide basé sur la recherche.
            </p>
          </Link>
          <Link
            href="/fr/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Les couleurs du bruit</h3>
            <p className="mt-3 text-white/70">
              Comparez bruit blanc, rose et brun pour trouver la couleur optimale pour vos acouphènes.
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Existe-t-il une application gratuite pour les acouphènes ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma est 100% gratuite, sans publicités et propose du bruit blanc, rose et brun pour masquer les acouphènes.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Quelle couleur de bruit est la meilleure pour les acouphènes ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Le bruit rose masque les hautes fréquences plus doucement, le bruit blanc est plus large. Calma vous permet de tester et mixer toutes les couleurs.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Le masquage sonore aide-t-il la nuit ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Le silence amplifie la perception des acouphènes. Un son de fond constant offre à votre cerveau une alternative sur laquelle se concentrer.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Puis-je créer mon propre mix anti-acouphènes ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Calma vous permet de mixer plusieurs sons et d’ajuster le volume individuellement pour trouver le masquage optimal.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma fonctionne-t-elle hors ligne ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Tous les sons fonctionnent complètement sans internet – parfait la nuit ou en déplacement.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Essayez Calma pour un sommeil serein
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Téléchargez Calma et créez un environnement sonore plus calme avec 
            le sons pour acouphènes et nos paysages sonores personnalisés.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
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
