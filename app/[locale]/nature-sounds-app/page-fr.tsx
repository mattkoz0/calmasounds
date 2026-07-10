import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "App de Sons de la Nature Gratuite | Pluie, Forêt, Mer | Calma",
  description:
    "Écoutez des sons de pluie, forêt, mer et oiseaux pour dormir et vous détendre. Créez des mélanges personnalisés avec Calma. version gratuite disponible, fonctionne hors ligne.",
  keywords: [
    "application sons de la nature",
    "sons de la nature pour dormir",
    "bruit de pluie pour dormir",
    "sons de la nature gratuit",
    "calma sons de la nature",
    "sons de forêt",
    "sons de la mer",
    "sons de pluie gratuit",
    "sons d'oiseaux relaxants",
    "sons naturels pour se détendre",
    "générateur sons nature",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/nature-sounds-app",
  },
  openGraph: {
    title: "Sons de la Nature Gratuits | Pluie, Forêt, Mer | Calma",
    description:
    "Sons de pluie, forêt, mer et oiseaux pour dormir et se détendre. version gratuite disponible.",
    url: "https://www.calmasounds.com/fr/nature-sounds-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sons de la Nature pour Dormir | Calma",
    description:
    "Mélangez pluie, forêt et mer pour vous détendre. 100% gratuit, fonctionne hors ligne.",
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
      "name": "Application de sons de la nature",
      "item": "https://www.calmasounds.com/fr/nature-sounds-app"
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
          Application de sons de la nature
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Une application de sons de la nature pour un sommeil plus profond
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application de sons de la nature élégante qui vous aide à créer 
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
              Le sons de la nature aide à créer un fond sonore stable pour le coucher, 
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
              Calma rend le sons de la nature plus humain et moins technique, l'intégrant 
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

              alt="Interface de l'application Calma montrant les catégories de sons et de sons de la nature"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Interface de personnalisation du sons de la nature pour le sommeil"
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
              alt="Interface du mixeur sonore pour créer des mélanges de sons de la nature personnalisés"
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
            En savoir plus sur le sons de la nature
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/fr/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Bienfaits des sons de la nature</h3>
            <p className="mt-3 text-white/70">
              Découvrez comment les sons naturels réduisent le stress et améliorent votre bien-être émotionnel.
            </p>
          </Link>
          <Link
            href="/fr/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sons de pluie pour dormir</h3>
            <p className="mt-3 text-white/70">
              Pourquoi les sons de pluie sont-ils si efficaces pour s'endormir et se concentrer ?
            </p>
          </Link>
          <Link
            href="/fr/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Pluie vs bruit blanc</h3>
            <p className="mt-3 text-white/70">
              Comparez les effets des sons organiques de pluie avec le bruit blanc constant pour votre sommeil.
            </p>
          </Link>
          <Link
            href="/fr/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Les couleurs du bruit</h3>
            <p className="mt-3 text-white/70">
              Explorez les différences entre bruit blanc, rose, brun et vert pour trouver votre son idéal.
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
              Qu'est-ce qu'une application de sons de la nature ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Une application de sons de la nature diffuse des sons ambiants comme la pluie, les vagues, la forêt et les oiseaux pour vous aider à vous détendre, mieux dormir ou vous concentrer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Les sons de la nature aident-ils à dormir ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, de nombreuses études scientifiques démontrent que les sons de la nature réduisent le stress, ralentissent le rythme cardiaque et facilitent la transition vers un sommeil profond.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma ne propose-t-elle que des sons de la nature ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Non. Calma inclut également le bruit blanc, rose, brun et vert, ainsi qu'un catalogue complet de sons pour se détendre ou se concentrer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Puis-je mélanger des sons de pluie avec du bruit blanc ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Absolument ! Calma est spécialement conçue pour mélanger plusieurs sons et ajuster le volume de chacun. Combiner pluie et bruit blanc ou brun est l'un des mélanges les plus populaires.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Les sons de la nature réduisent-ils l'anxiété ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Des recherches publiées dans Scientific Reports montrent que les sons de la nature activent le système nerveux parasympathique, réduisant la réponse de lutte ou de fuite et favorisant la détente.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Qu'est-ce qu'une application de sons de la nature ?","acceptedAnswer":{"@type":"Answer","text":"Elle diffuse des sons ambiants comme la pluie, les vagues et la forêt pour vous aider à vous détendre ou mieux dormir."}},{"@type":"Question","name":"Les sons de la nature aident-ils à dormir ?","acceptedAnswer":{"@type":"Answer","text":"Oui, les études montrent qu'ils réduisent le stress et facilitent le sommeil profond."}},{"@type":"Question","name":"Calma ne propose-t-elle que des sons de la nature ?","acceptedAnswer":{"@type":"Answer","text":"Non. Calma inclut aussi bruit blanc, rose, brun et vert."}},{"@type":"Question","name":"Puis-je mélanger des sons de pluie avec du bruit blanc ?","acceptedAnswer":{"@type":"Answer","text":"Absolument ! Calma permet de mélanger plusieurs sons et ajuster le volume de chacun."}},{"@type":"Question","name":"Les sons de la nature réduisent-ils l'anxiété ?","acceptedAnswer":{"@type":"Answer","text":"Oui, ils activent le système nerveux parasympathique, favorisant la détente."}}]}) }}
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
            le sons de la nature et nos paysages sonores personnalisés.
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
