import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application de sons pour la concentration | Calma",
  description:
    "Découvrez Calma, une application de sons pour la concentration idéale pour le travail profond, les études et la création de paysages sonores stimulants.",
  keywords: [
    "application sons concentration",
    "sons pour étudier",
    "musique travail profond",
    "bruit blanc concentration",
    "calma sons focus",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/focus-sounds-app",
  },
  openGraph: {
    title: "Application de sons pour la concentration | Calma",
    description:
      "Découvrez une application de sons pour la concentration simple et efficace pour le travail profond et les études.",
    url: "https://www.calmasounds.com/fr/focus-sounds-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Application de sons pour la concentration | Calma",
    description:
      "Découvrez une application de sons pour la concentration simple et efficace pour le travail profond et les études.",
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
      "name": "Application de sons concentration",
      "item": "https://www.calmasounds.com/fr/focus-sounds-app"
    }
  ]
};

export default function FocusSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Application de sons concentration
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Une application pour le travail profond, les études et la concentration
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application de sons pour la concentration simple qui vous aide 
          à créer des environnements audio personnalisés pour le travail profond, 
          la lecture et les études. Développez votre propre paysage sonore et restez 
          immergé dans vos tâches sans distractions.
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
            <h2 className="text-2xl font-semibold">Restez immergé plus longtemps</h2>
            <p className="mt-4 leading-7 text-white/70">
              Utilisez des fonds sonores qui réduisent les distractions et favorisent 
              une concentration constante durant vos sessions de travail.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Créez votre propre mix focus</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma vous laisse sculpter votre environnement audio plutôt que de 
              dépendre d'une piste générique imposée.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Travaillez sereinement</h2>
            <p className="mt-4 leading-7 text-white/70">
              L'application est conçue pour être élégante et légère, aidant votre 
              espace de travail à devenir plus calme et intentionnel.
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
            Le côté focus de Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interface mobile de Calma montrant les catégories de sons pour la concentration"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interface de personnalisation des sons de focus pour les études"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mixeur sonore pour le travail profond et les fonds sonores"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface pour les sons de concentration et les battements binauraux"
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
            En savoir plus sur le son et le focus
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Meilleurs sons pour étudier</h3>
            <p className="mt-3 text-white/70">
              Découvrez quels types de sons favorisent une concentration profonde durant vos sessions d'étude.
            </p>
          </Link>
          <Link
            href="/blog/binaural-beats-for-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Battements binauraux</h3>
            <p className="mt-3 text-white/70">
              Une introduction simple à la manière dont les battements binauraux peuvent soutenir le calme et le focus.
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
              Qu'est-ce qu'une application de sons focus ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Elle aide à créer un fond sonore qui soutient la concentration, 
              réduit les distractions et rend le travail plus immersif.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Quand utiliser Calma pour se concentrer ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Durant vos sessions d'étude, de lecture, d'écriture ou dès que vous 
              voulez un environnement de focus plus contrôlé.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Puis-je personnaliser le mix sonore ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma est conçue pour que vous puissiez bâtir votre propre mélange 
              pour que votre environnement de focus vous semble naturel.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Essayez Calma pour le travail et l'étude
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Téléchargez Calma et créez un environnement plus concentré avec 
            des paysages sonores personnalisés.
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
