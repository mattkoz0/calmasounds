import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Application Bruit Blanc, Bruit Marron et Bruit Rose | Calma",
  description:
    "Découvrez la différence entre le bruit blanc, le bruit marron et le bruit rose. Calma est une application premium de sons pour dormir qui vous permet de mélanger toutes les couleurs de bruit pour le sommeil, la concentration et le TDAH.",
  keywords: [
    "application bruit blanc",
    "application bruit marron",
    "application bruit rose",
    "application bruit vert",
    "application couleurs de bruit",
    "brown noise TDAH",
    "bruit blanc pour dormir",
    "bruit rose bébés",
    "bruit marron concentration",
    "couleurs de bruit comparaison",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/white-noise-brown-noise-pink-noise",
  },
  openGraph: {
    title: "Application Bruit Blanc, Bruit Marron et Bruit Rose | Calma",
    description:
      "Découvrez la différence entre le bruit blanc, le bruit marron et le bruit rose. Calma est une application premium de sons pour dormir qui vous permet de mélanger toutes les couleurs de bruit pour le sommeil, la concentration et le TDAH.",
    url: "https://www.calmasounds.com/fr/white-noise-brown-noise-pink-noise",
    siteName: "Calma",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Application Bruit Blanc, Bruit Marron et Bruit Rose | Calma",
    description:
      "Mélangez toutes les couleurs de bruit pour le sommeil, la concentration et le TDAH avec l'application Calma.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Calma inclut-elle le bruit blanc, le bruit marron et le bruit rose ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Calma inclut un bruit blanc, un bruit marron, un bruit rose et un bruit vert de haute qualité. Vous pouvez les mélanger avec d'autres sons de la nature comme la pluie et les vagues de l'océan.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre le bruit blanc et le bruit marron ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le bruit blanc couvre toutes les fréquences audibles de manière égale, comme les parasites de la télévision. Le bruit marron met l'accent sur les fréquences plus basses, sonnant plus profondément comme une cascade lointaine. Le bruit marron est souvent préféré pour la concentration profonde et le TDAH.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle couleur de bruit est la meilleure pour dormir ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le bruit rose est généralement considéré comme le meilleur pour dormir car il est équilibré et naturel, imitant des sons comme la pluie ou le vent régulier. Le bruit blanc est idéal pour masquer les bruits forts et soudains.",
      },
    }
  ],
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
      "name": "Application Couleurs de Bruit",
      "item": "https://www.calmasounds.com/fr/white-noise-brown-noise-pink-noise"
    }
  ]
};

export default function NoiseColorsAppPageFr() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AiDefinition />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Les Couleurs du Son
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Bruit Blanc, Bruit Marron et Bruit Rose
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma est une application complète de mixage sonore qui comprend des enregistrements de haute qualité de toutes les couleurs de bruit essentielles.
          Découvrez la fréquence parfaite pour votre routine de sommeil, de relaxation ou de concentration pour le TDAH.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Télécharger Calma sur Google Play Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Télécharger sur Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Télécharger Calma sur l'App Store d'Apple"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Télécharger dans l'App Store
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Bruit Blanc
            </div>
            <h3 className="text-xl font-semibold">Parfait pour masquer</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Couvre toutes les fréquences audibles de manière égale. Idéal pour bloquer les bruits forts et soudains et favoriser le sommeil des nourrissons.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Bruit Rose
            </div>
            <h3 className="text-xl font-semibold">Équilibré & naturel</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Plus profond que le bruit blanc, imitant des sons comme une pluie régulière ou le vent. Excellent pour améliorer la qualité globale du sommeil.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Bruit Marron
            </div>
            <h3 className="text-xl font-semibold">Concentration & TDAH</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Riche en basses fréquences, comme une cascade lointaine. De plus en plus populaire pour la concentration profonde et pour "calmer" un esprit agité.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Bruit Vert
            </div>
            <h3 className="text-xl font-semibold">Harmonie Naturelle</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Se concentre sur les fréquences moyennes, semblable au bruissement des feuilles de la forêt. Parfait pour une atmosphère apaisante et naturelle.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Questions Fréquemment Posées
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Calma inclut-elle le bruit blanc, le bruit marron et le bruit rose ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oui, Calma inclut un bruit blanc, un bruit marron, un bruit rose et un bruit vert de haute qualité. Vous pouvez les mélanger avec d'autres sons de la nature comme la pluie et les vagues de l'océan dans le mixeur de sons.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Quelle est la différence entre le bruit blanc et le bruit marron ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Le bruit blanc couvre toutes les fréquences audibles de manière égale, à l'image des parasites de la télévision. Le bruit marron met l'accent sur les fréquences plus basses, sonnant plus profondément et plus doucement, comme une cascade lointaine. Le bruit marron est souvent préféré pour la concentration profonde et le TDAH.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Quelle couleur de bruit est la meilleure pour dormir ?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Le bruit rose est généralement considéré comme le meilleur pour dormir car il est équilibré et naturel, imitant des sons comme la pluie constante ou le vent. Cependant, le bruit blanc est le meilleur si vous avez spécifiquement besoin de masquer des sons forts et soudains.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
