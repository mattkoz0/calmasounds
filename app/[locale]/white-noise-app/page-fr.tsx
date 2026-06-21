import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meilleure App de Bruit Blanc Gratuite 2026 | Calma",
  description:
    "Vous cherchez la meilleure appli de bruit blanc ? Mélangez bruit blanc, brun, rose et sons de la nature pour dormir, TDAH, bébés ou acouphènes. 100% gratuit, sans pub, fonctionne hors ligne.",
  keywords: [
    "application bruit blanc",
    "bruit blanc pour dormir",
    "application sommeil bébé",
    "bruit blanc gratuit",
    "calma bruit blanc",
    "meilleure application bruit blanc",
    "bruit blanc bébé",
    "bruit blanc sommeil",
    "bruit pour dormir",
    "application bruit blanc gratuite",
    "générateur bruit blanc",
    "bruit blanc acouphènes",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/white-noise-app",
  },
  openGraph: {
    title: "Meilleure App de Bruit Blanc Gratuite | Sommeil, Bébés, TDAH | Calma",
    description:
    "Mélangez bruit blanc, brun et rose pour dormir, TDAH, bébés ou acouphènes. 100% gratuit, sans pub.",
    url: "https://www.calmasounds.com/fr/white-noise-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meilleure App de Bruit Blanc Gratuite | Calma",
    description:
    "Mélangez bruit blanc, brun et rose pour dormir. 100% gratuit, fonctionne hors ligne.",
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
      "name": "Application de bruit blanc",
      "item": "https://www.calmasounds.com/fr/white-noise-app"
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
          Application de bruit blanc
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Une application de bruit blanc pour un sommeil plus profond
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application de bruit blanc élégante qui vous aide à créer 
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
              Le bruit blanc aide à créer un fond sonore stable pour le coucher, 
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
              Calma rend le bruit blanc plus humain et moins technique, l'intégrant 
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
              alt="Interface de l'application Calma montrant les catégories de sons et de bruit blanc"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interface de personnalisation du bruit blanc pour le sommeil"
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
              alt="Interface du mixeur sonore pour créer des mélanges de bruit blanc personnalisés"
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
            En savoir plus sur le bruit blanc
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/fr/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Le bruit blanc pour dormir</h3>
            <p className="mt-3 text-white/70">
              Découvrez comment le bruit blanc crée un environnement de sommeil plus stable et réparateur.
            </p>
          </Link>
          <Link
            href="/fr/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Les couleurs du bruit</h3>
            <p className="mt-3 text-white/70">
              Explorez les différences entre le bruit blanc, rose, brun et vert pour trouver le son idéal.
            </p>
          </Link>
          <Link
            href="/fr/blog/best-free-white-noise-app"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Meilleures apps de bruit blanc gratuites</h3>
            <p className="mt-3 text-white/70">
              Comparez Calma avec d'autres applications de bruit blanc en fonctionnalités et qualité sonore.
            </p>
          </Link>
          <Link
            href="/fr/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Pluie vs bruit blanc</h3>
            <p className="mt-3 text-white/70">
              Qu'est-ce qui est mieux pour dormir : des sons organiques de pluie ou du bruit blanc constant ?
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
              Quelle est la meilleure application gratuite de bruit blanc ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma offre un environnement simple pour mélanger le bruit blanc avec des sons de la nature, sans publicités. Elle est 100% gratuite et fonctionne hors ligne.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Le bruit blanc aide-t-il à dormir ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Le bruit blanc agit comme une couverture acoustique qui masque les bruits soudains, aidant votre cerveau à se détendre et à maintenir un sommeil profond.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Comment utiliser le bruit blanc pour étudier ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Pour étudier, nous recommandons une base de bruit blanc ou brun, mélangée à une pluie légère. Cela aide à maintenir la concentration, particulièrement pour les personnes atteintes de TDAH.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Le bruit blanc est-il sûr pour les bébés ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, lorsqu'il est utilisé correctement. Maintenez le volume en dessous de 50 dB, placez l'appareil à au moins 2 mètres du berceau et utilisez une minuterie. De nombreux pédiatres recommandent le bruit blanc pour aider les bébés à dormir.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Bruit blanc vs bruit brun — lequel est meilleur pour dormir ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Le bruit blanc masque mieux les sons aigus. Le bruit brun a un ton plus profond que beaucoup d'adultes trouvent plus relaxant. Avec Calma, vous pouvez mélanger les deux pour obtenir le meilleur des deux mondes.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma fonctionne-t-elle sans Internet ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Calma fonctionne entièrement hors ligne, ce qui signifie que vous pouvez l'utiliser partout : dans l'avion, à la montagne ou simplement quand vous n'avez pas de Wi-Fi.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Quelle est la meilleure application gratuite de bruit blanc ?","acceptedAnswer":{"@type":"Answer","text":"Calma offre un environnement simple pour mélanger bruit blanc et sons de la nature. 100% gratuite, sans pub, fonctionne hors ligne."}},{"@type":"Question","name":"Le bruit blanc aide-t-il à dormir ?","acceptedAnswer":{"@type":"Answer","text":"Oui. Le bruit blanc masque les bruits soudains, aidant votre cerveau à se détendre et à maintenir un sommeil profond."}},{"@type":"Question","name":"Comment utiliser le bruit blanc pour étudier ?","acceptedAnswer":{"@type":"Answer","text":"Nous recommandons une base de bruit blanc ou brun mélangée à une pluie légère, particulièrement efficace pour le TDAH."}},{"@type":"Question","name":"Le bruit blanc est-il sûr pour les bébés ?","acceptedAnswer":{"@type":"Answer","text":"Oui, si le volume reste en dessous de 50 dB. Placez l'appareil à 2 m du berceau et utilisez une minuterie."}},{"@type":"Question","name":"Bruit blanc vs bruit brun — lequel est meilleur pour dormir ?","acceptedAnswer":{"@type":"Answer","text":"Le bruit blanc masque les sons aigus. Le bruit brun est plus profond et relaxant. Calma permet de mélanger les deux."}},{"@type":"Question","name":"Calma fonctionne-t-elle sans Internet ?","acceptedAnswer":{"@type":"Answer","text":"Oui. Calma fonctionne entièrement hors ligne, partout et sans Wi-Fi."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Essayez Calma pour un sommeil serein
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Téléchargez Calma et créez un environnement sonore plus calme avec 
            le bruit blanc et nos paysages sonores personnalisés.
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
