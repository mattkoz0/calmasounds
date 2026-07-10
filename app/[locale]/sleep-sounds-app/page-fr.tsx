import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "App de Sons pour Dormir Gratuite | Calma",
  description:
    "Vous cherchez la meilleure app de sons pour dormir ? Mélangez bruit blanc, pluie et sons de la nature pour vous endormir plus vite. version gratuite disponible, fonctionne hors ligne.",
  keywords: [
    "application sons pour dormir",
    "application sommeil",
    "sons relaxants pour dormir",
    "bruit de pluie pour dormir",
    "calma sons sommeil",
    "bruit pour dormir",
    "sons pour dormir gratuit",
    "bruit blanc pour dormir",
    "application sommeil gratuite",
    "meilleurs sons pour dormir",
    "sons de la nuit",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/sleep-sounds-app",
  },
  openGraph: {
    title: "App de Sons pour Dormir Gratuite et Hors Ligne | Calma",
    description:
    "Mélangez bruit blanc, pluie et sons de la nature pour vous endormir plus vite. version gratuite disponible.",
    url: "https://www.calmasounds.com/fr/sleep-sounds-app",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Sons pour Dormir Gratuite | Calma",
    description:
    "Mélangez bruit blanc, pluie et sons de la nature pour dormir. 100% gratuit, fonctionne hors ligne.",
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
      "name": "Application de sons pour dormir",
      "item": "https://www.calmasounds.com/fr/sleep-sounds-app"
    }
  ]
};

export default function SleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Application de sons pour dormir
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Une application pour des nuits plus calmes et des routines apaisantes
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application de sons pour le sommeil élégante qui vous aide à créer 
          des paysages sonores personnalisés pour le coucher, la détente du soir et un repos 
          profond. Mélangez des sons relaxants, créez votre propre atmosphère et rendez votre 
          routine nocturne plus douce.
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
              Au lieu d'écouter une piste générique, composez un environnement sonore 
              qui correspond parfaitement à votre humeur et à votre soirée.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Détendez-vous avant de dormir</h2>
            <p className="mt-4 leading-7 text-white/70">
              Utilisez des paysages sonores apaisants pour ralentir après une journée 
              chargée et créer une transition paisible vers le sommeil.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Une routine simple et claire</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma est conçue pour être épurée et élégante, facile à utiliser chaque 
              soir sans distractions inutiles.
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
            L'expérience du sommeil avec Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"

              alt="Interface de l'application Calma montrant une liste de sons pour le sommeil"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Interface de sons pour le sommeil Calma pour personnaliser l'audio du coucher"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mixeur de sons pour le sommeil Calma montrant diverses couches sonores"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface du mixeur sonore pour créer des mélanges de sommeil personnalisés"
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
            En savoir plus sur les sons pour dormir
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/fr/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Meilleurs sons pour dormir</h3>
            <p className="mt-3 text-white/70">
              Un guide pratique sur la pluie, le bruit blanc et les paysages sonores doux pour votre coucher.
            </p>
          </Link>
          <Link
            href="/fr/blog/how-to-build-a-bedtime-routine"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Créer une routine du coucher</h3>
            <p className="mt-3 text-white/70">
              Des conseils simples pour instaurer un rythme de soirée calme favorisant un sommeil naturel.
            </p>
          </Link>
          <Link
            href="/fr/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Bruit blanc pour dormir</h3>
            <p className="mt-3 text-white/70">
              Découvrez comment le bruit blanc améliore la qualité du sommeil et pourquoi des millions l'utilisent.
            </p>
          </Link>
          <Link
            href="/fr/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sons de pluie pour dormir</h3>
            <p className="mt-3 text-white/70">
              Pourquoi les sons de pluie sont-ils si efficaces pour s'endormir ? La science derrière ce phénomène.
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
              Qu'est-ce qu'une application de sons pour dormir ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Une application de sons pour dormir diffuse des sons apaisants conçus pour favoriser les routines du coucher, la relaxation et un état mental calme avant de dormir.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              En quoi Calma est-elle différente ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma privilégie les paysages sonores personnalisés et une interface épurée plutôt que de vous submerger de complexité. Elle est version gratuite disponible et fonctionne hors ligne.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Puis-je créer mon propre mélange ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma est conçue pour que vous puissiez créer votre propre mélange audio relaxant plutôt que de choisir une piste fixe.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Est-il sûr d'utiliser des sons pour dormir chaque nuit ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, si le volume reste modéré (en dessous de 50 dB). Des études montrent que le bruit de fond constant améliore la qualité du sommeil profond. Calma a une minuterie de sommeil pour s'éteindre automatiquement.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Quels sons sont les meilleurs pour s'endormir rapidement ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Les sons les plus efficaces pour s'endormir rapidement sont le bruit blanc, le bruit brun et les sons de pluie. Calma vous permet de les mélanger tous ensemble pour créer l'ambiance parfaite.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Qu'est-ce qu'une application de sons pour dormir ?","acceptedAnswer":{"@type":"Answer","text":"Une application qui diffuse des sons apaisants pour favoriser la relaxation et un sommeil plus profond."}},{"@type":"Question","name":"En quoi Calma est-elle différente ?","acceptedAnswer":{"@type":"Answer","text":"Calma est version gratuite disponible, fonctionne hors ligne et permet de créer des mélanges personnalisés."}},{"@type":"Question","name":"Puis-je créer mon propre mélange ?","acceptedAnswer":{"@type":"Answer","text":"Oui, Calma est conçue pour créer votre propre mélange audio relaxant."}},{"@type":"Question","name":"Est-il sûr d'utiliser des sons pour dormir chaque nuit ?","acceptedAnswer":{"@type":"Answer","text":"Oui, à volume modéré. Calma a une minuterie de sommeil automatique."}},{"@type":"Question","name":"Quels sons sont les meilleurs pour s'endormir rapidement ?","acceptedAnswer":{"@type":"Answer","text":"Le bruit blanc, le bruit brun et les sons de pluie. Calma permet de les mélanger."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Essayez Calma pour vos soirées
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Téléchargez Calma et créez une expérience de coucher plus paisible 
            grâce à des sons de sommeil personnalisés.
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
