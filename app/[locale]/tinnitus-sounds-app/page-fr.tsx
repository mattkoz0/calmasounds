import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application de sons pour acouphènes | Calma",
  description:
    "Découvrez Calma, une application de sons pour acouphènes simple et élégante pour le sommeil, la relaxation et la création d'un environnement sonore apaisant.",
  keywords: [
    "application sons pour acouphènes",
    "sons pour acouphènes pour dormir",
    "application sommeil bébé",
    "sons pour acouphènes gratuit",
    "calma sons pour acouphènes",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/tinnitus-sounds-app",
  },
  openGraph: {
    title: "Application de sons pour acouphènes | Calma",
    description:
      "Découvrez une application de sons pour acouphènes simple et élégante pour le sommeil, la relaxation et des rituels quotidiens plus calmes.",
    url: "https://www.calmasounds.com/fr/tinnitus-sounds-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Application de sons pour acouphènes | Calma",
    description:
      "Découvrez une application de sons pour acouphènes simple et élégante pour le sommeil, la relaxation et des rituels quotidiens plus calmes.",
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
      "name": "Application de sons pour acouphènes",
      "item": "https://www.calmasounds.com/fr/tinnitus-sounds-app"
    }
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
              alt="Interface de l'application Calma montrant les catégories de sons et de sons pour acouphènes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
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
            href="/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Le sons pour acouphènes pour dormir</h3>
            <p className="mt-3 text-white/70">
              Découvrez comment le sons pour acouphènes crée un environnement de sommeil stable.
            </p>
          </Link>
          <Link
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Les couleurs du bruit</h3>
            <p className="mt-3 text-white/70">
              Explorez les différences entre le sons pour acouphènes, rose, brun et vert.
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
              Qu'est-ce qu'une application de sons pour acouphènes ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Elle aide à créer un son de fond régulier qui favorise le sommeil 
              et un environnement audio apaisant.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Le sons pour acouphènes aide-t-il vraiment à dormir ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, beaucoup de personnes l'utilisent pour calmer le mental et 
              atténuer les bruits extérieurs perturbateurs.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma ne propose-t-elle que du sons pour acouphènes ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Non, elle propose également des sons de nature, de relaxation et 
              de concentration pour répondre à tous vos besoins sonores.
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
