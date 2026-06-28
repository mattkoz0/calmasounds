import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sons Relaxants Gratuits | Anti-Stress & Bien-être | Calma",
  description:
    "Cherchez des sons relaxants ? Mélangez pluie, bruits de la nature et bruit blanc pour le calme et le bien-être. 100% gratuit, sans pub, fonctionne hors ligne.",
  keywords: [
    "application sons relaxants",
    "sons de relaxation",
    "application sons calmes",
    "ambiances relaxantes",
    "calma sons relaxation",
    "app relaxation gratuite",
    "sons anti-stress",
    "bruits de nature pour méditation",
    "pluie et sons naturels",
    "bien-être app sans pub",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/relaxing-sounds",
  },
  openGraph: {
    title: "Sons Relaxants Gratuits | Anti-Stress | Calma",
    description:
    "Mélangez pluie, nature et bruit blanc pour la relaxation. 100% gratuit, sans pub.",
    url: "https://www.calmasounds.com/fr/relaxing-sounds",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sons Relaxants Gratuits | Calma",
    description:
    "Sons apaisants pour le calme quotidien. 100% gratuit, hors ligne.",
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
      "name": "Sons relaxants",
      "item": "https://www.calmasounds.com/fr/relaxing-sounds"
    }
  ]
};

export default function RelaxingSoundsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sons relaxants
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Une application de relaxation pour des soirées et des rituels plus doux
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application de sons relaxants simple qui vous aide à ralentir, 
          à décompresser après une longue journée et à créer un environnement paisible 
          où que vous soyez. Concevez des paysages sonores personnalisés pour la détente, 
          l'équilibre émotionnel et vos rituels de calme quotidiens.
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
            <h2 className="text-2xl font-semibold">Décompressez plus facilement</h2>
            <p className="mt-4 leading-7 text-white/70">
              Utilisez des paysages sonores apaisants pour quitter le mode travail, 
              calmer le bruit mental et instaurer une transition douce vers le repos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Créez votre propre mix relaxant</h2>
            <p className="mt-4 leading-7 text-white/70">
              Combinez les sons d'une manière qui vous ressemble, chaleureuse et 
              parfaitement adaptée à l'atmosphère que vous souhaitez créer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Un rituel quotidien plus doux</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma vous permet de retrouver la sérénité de manière simple et élégante, 
              s'intégrant parfaitement à votre vie de tous les jours.
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
            Le côté relaxant de Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              priority
              alt="Interface mobile de l'application Calma montrant les catégories de sons relaxants"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="Interface de Calma pour personnaliser des paysages sonores ambiants"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mixeur de sons Calma montrant des textures naturelles et des couches audio apaisantes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface pour gérer des mélanges de sons de relaxation personnalisés"
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
            En savoir plus sur la relaxation et le son
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/fr/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Bienfaits des sons de la nature</h3>
            <p className="mt-3 text-white/70">
              Découvrez comment la pluie, l'océan et le chant des oiseaux apaisent l'esprit naturellement.
            </p>
          </Link>
          <Link
            href="/fr/blog/guided-breathing-techniques"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Techniques de respiration</h3>
            <p className="mt-3 text-white/70">
              Découvrez des méthodes de respiration qui complètent les sons ambiants pour une relaxation profonde.
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
              Qu'est-ce qu'une appli de sons relaxants ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Une appli qui diffuse des sons apaisants – pluie, nature, bruit blanc – pour réduire le stress et retrouver le calme au quotidien.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma est-elle gratuite ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma est 100% gratuite, sans pub et fonctionne complètement hors ligne – aucun coût caché.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Quand utiliser Calma pour se relaxer ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Après le travail, en lisant, pendant le yoga, la méditation ou quand vous avez besoin d'une ambiance plus douce.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Puis-je créer mes propres mélanges ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Calma vous permet de créer vos propres mélanges sonores – pluie + cheminée, forêt + vent, ou tout ce qui vous apaise.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma fonctionne-t-elle hors ligne ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui. Tous les sons fonctionnent sans internet – parfait en voyage ou en mode avion.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Appli de sons relaxants ?","acceptedAnswer":{"@type":"Answer","text":"Sons apaisants pour réduire le stress au quotidien."}},{"@type":"Question","name":"Calma est gratuite ?","acceptedAnswer":{"@type":"Answer","text":"Oui, 100% gratuite, sans pub, hors ligne."}},{"@type":"Question","name":"Quand utiliser Calma ?","acceptedAnswer":{"@type":"Answer","text":"Après le travail, yoga, méditation ou lecture."}},{"@type":"Question","name":"Créer ses propres mélanges ?","acceptedAnswer":{"@type":"Answer","text":"Oui, mélanges personnalisés de pluie, nature et plus."}},{"@type":"Question","name":"Fonctionne hors ligne ?","acceptedAnswer":{"@type":"Answer","text":"Oui, complètement sans internet."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Essayez Calma pour vos moments de calme
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Téléchargez Calma et créez une atmosphère paisible grâce à des sons 
            de relaxation personnalisés.
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
