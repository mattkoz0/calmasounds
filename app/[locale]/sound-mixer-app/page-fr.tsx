import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mixeur de Sons pour Dormir | Calma",
  description:
    "Créez des mixages audio apaisants avec de la pluie et des sons de la nature. Utilisez le mixeur Calma pour vous détendre et dormir.",
  keywords: [
    "application mixage sonore",
    "mixeur de sons sommeil",
    "mixeur sons relaxation",
    "fonds sonores personnalisés",
    "calma sound mixer",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/sound-mixer-app",
  },
  openGraph: {
    title: "Mixeur de Sons pour Dormir | Calma",
    description:
    "Créez des mixages audio apaisants avec de la pluie et des sons de la nature. Utilisez le mixeur Calma pour vous détendre et dormir.",
    url: "https://www.calmasounds.com/fr/sound-mixer-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mixeur de Sons pour Dormir | Calma",
    description:
    "Créez des mixages audio apaisants avec de la pluie et des sons de la nature. Utilisez le mixeur Calma pour vous détendre et dormir.",
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
      "name": "Application de mixage sonore",
      "item": "https://www.calmasounds.com/fr/sound-mixer-app"
    }
  ]
};

export default function SoundMixerAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Application de mixage sonore
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Un mixeur de sons pour un sommeil, une relaxation et un focus sur mesure
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application de mixage sonore élégante qui vous permet de créer 
          votre propre environnement audio plutôt que d'écouter une piste imposée. 
          Bâtissez des paysages sonores pour le coucher, la détente, le travail 
          profond et vos moments de calme au quotidien.
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
            <h2 className="text-2xl font-semibold">Créez votre propre mélange</h2>
            <p className="mt-4 leading-7 text-white/70">
              Combinez les sons selon votre humeur et vos besoins actuels plutôt 
              que de vous adapter à une piste audio générique.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Une app pour tous vos besoins</h2>
            <p className="mt-4 leading-7 text-white/70">
              Concevez des ambiances pour dormir, lire, travailler ou simplement 
              avoir un fond sonore apaisant, le tout dans une seule app épurée.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Une expérience fluide et intuitive</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma est pensée pour être élégante et chaleureuse. Bâtir un mix 
              sonore devient un plaisir simple et naturel, pas une tâche technique.
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
            L'expérience du mixeur sonore Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interface mobile de l'application Calma montrant la création de mélanges personnalisés"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interface du mixeur Calma pour personnaliser les paysages sonores ambiants"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interface de mixage avec plusieurs couches audio"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Contrôles du mixer Calma pour les sons de sommeil et concentration"
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
            En savoir plus sur les paysages sonores
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Pluie vs Bruit blanc</h3>
            <p className="mt-3 text-white/70">
              Comparez les différentes ambiances et découvrez comment les mixer pour créer le fond sonore idéal pour dormir.
            </p>
          </Link>
          <Link
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Les couleurs du bruit</h3>
            <p className="mt-3 text-white/70">
              Apprenez-en plus sur les couleurs du bruit et comment les équilibrer dans votre mixeur personnel.
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
              Qu'est-ce qu'un mixeur sonore ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Elle vous permet de combiner plusieurs sons en un seul environnement 
              audio personnalisé pour le sommeil, la détente ou le focus.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Comment Calma se distingue d'une application classique ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma est fondée sur la personnalisation totale, vous laissant modeler 
              votre mix plutôt que de choisir parmi des pistes prédéfinies.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Puis-je l'utiliser pour autre chose que le sommeil ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui absolument. Elle est tout aussi efficace pour la relaxation, 
              la concentration au travail ou simplement instaurer un fond sonore calme.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Essayez Calma comme mixeur sonore
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Téléchargez Calma sur Google Play et créez des paysages sonores 
            uniques pour chaque moment de votre journée.
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
