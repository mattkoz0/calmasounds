import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "App de Bruit Brun Gratuite pour TDAH et Sommeil | Calma",
  description:
    "Vous cherchez du bruit brun profond pour le TDAH, le sommeil ou la concentration ? Mélangez bruit brun avec pluie et sons de la nature. 100% gratuit, sans pub, fonctionne hors ligne.",
  keywords: [
    "application bruit brun",
    "bruit brun pour dormir",
    "bruit brun TDAH",
    "bruit brun gratuit",
    "calma bruit brun",
    "générateur bruit brun",
    "bruit brun concentration",
    "bruit marron pour dormir",
    "application bruit brun gratuite",
    "bruit brun sommeil profond",
    "brown noise app français",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/brown-noise-app",
  },
  openGraph: {
    title: "App de Bruit Brun Gratuite | TDAH, Sommeil et Concentration | Calma",
    description:
    "Mélangez bruit brun avec pluie et sons naturels pour le TDAH, le sommeil et la concentration. 100% gratuit.",
    url: "https://www.calmasounds.com/fr/brown-noise-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Bruit Brun Gratuite pour TDAH et Sommeil | Calma",
    description:
    "Mélangez bruit brun avec pluie et sons naturels. 100% gratuit, fonctionne hors ligne.",
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
      "name": "Application de bruit brun",
      "item": "https://www.calmasounds.com/fr/brown-noise-app"
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
          Application de bruit brun
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Une application de bruit brun pour un sommeil plus profond
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application de bruit brun élégante qui vous aide à créer 
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
              Le bruit brun aide à créer un fond sonore stable pour le coucher, 
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
              Calma rend le bruit brun plus humain et moins technique, l'intégrant 
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
              alt="Interface de l'application Calma montrant les catégories de sons et de bruit brun"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="Interface de personnalisation du bruit brun pour le sommeil"
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
              alt="Interface du mixeur sonore pour créer des mélanges de bruit brun personnalisés"
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
            En savoir plus sur le bruit brun
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/fr/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Bruit brun vs blanc vs rose</h3>
            <p className="mt-3 text-white/70">
              Comparez les différentes couleurs de bruit et découvrez laquelle est meilleure pour le sommeil, le TDAH ou la concentration.
            </p>
          </Link>
          <Link
            href="/fr/blog/best-color-noise-for-adhd"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Meilleur bruit pour le TDAH</h3>
            <p className="mt-3 text-white/70">
              Quel type de bruit est le plus efficace pour les personnes atteintes de TDAH ? Guide fondé sur la recherche.
            </p>
          </Link>
          <Link
            href="/fr/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Meilleurs sons pour dormir</h3>
            <p className="mt-3 text-white/70">
              Découvrez pourquoi le bruit brun est parmi les sons les plus efficaces pour s'endormir.
            </p>
          </Link>
          <Link
            href="/fr/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Bruit blanc pour dormir</h3>
            <p className="mt-3 text-white/70">
              Complétez le bruit brun avec du bruit blanc pour un masquage sonore complet.
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
              Qu'est-ce que le bruit brun ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Le bruit brun est un son profond et grave, similaire au grondement d'un tonnerre lointain. Il a plus d'énergie dans les basses fréquences que le bruit blanc, ce qui le rend plus relaxant pour beaucoup de personnes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Le bruit brun aide-t-il avec le TDAH ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, de nombreuses personnes avec TDAH rapportent que le bruit brun les aide à mieux se concentrer. Son ton profond et constant réduit l'hyperactivité mentale et facilite la concentration soutenue.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma ne propose-t-elle que du bruit brun ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Non. Calma inclut également le bruit blanc, rose, vert et un catalogue complet de sons de la nature pour dormir, se détendre ou se concentrer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Bruit brun vs bruit blanc — lequel est meilleur pour dormir ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Le bruit brun sonne plus profond et doux, idéal si vous trouvez le bruit blanc trop aigu. Le bruit blanc masque mieux les sons soudains. Avec Calma, vous pouvez mélanger les deux.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Puis-je utiliser le bruit brun toute la nuit ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, c'est parfaitement sûr à volume modéré (en dessous de 50 dB). Calma inclut une minuterie de sommeil pour s'éteindre automatiquement si vous le souhaitez.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Qu'est-ce que le bruit brun ?","acceptedAnswer":{"@type":"Answer","text":"Le bruit brun est un son profond et grave avec plus d'énergie dans les basses fréquences que le bruit blanc, ce qui le rend plus relaxant."}},{"@type":"Question","name":"Le bruit brun aide-t-il avec le TDAH ?","acceptedAnswer":{"@type":"Answer","text":"Oui, de nombreuses personnes avec TDAH rapportent une meilleure concentration grâce au bruit brun."}},{"@type":"Question","name":"Calma ne propose-t-elle que du bruit brun ?","acceptedAnswer":{"@type":"Answer","text":"Non. Calma inclut bruit blanc, rose, vert et des sons de la nature."}},{"@type":"Question","name":"Bruit brun vs bruit blanc — lequel est meilleur pour dormir ?","acceptedAnswer":{"@type":"Answer","text":"Le bruit brun est plus profond et doux. Le bruit blanc masque mieux les sons soudains. Calma permet de mélanger les deux."}},{"@type":"Question","name":"Puis-je utiliser le bruit brun toute la nuit ?","acceptedAnswer":{"@type":"Answer","text":"Oui, c'est sûr à volume modéré. Calma a une minuterie de sommeil automatique."}}]}) }}
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
            le bruit brun et nos paysages sonores personnalisés.
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
