import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Bruit blanc pour bébés : Comment endormir votre enfant | Calma",
  description: "Découvrez pourquoi le bruit blanc aide les bébés à dormir plus rapidement. Lignes directrices sur la sécurité.",
  keywords: [
    "white noise for babies",
    "baby sleep sounds",
    "pink noise for babies",
    "calma app",
    "sleep sounds app",
    "application pour mieux dormir",
    "favoriser le sommeil profond",
    "aide à l'endormissement",
    "sons apaisants nuit",
    "améliorer qualité du sommeil",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/white-noise-for-babies",
  },
  openGraph: {
    title: "Bruit blanc pour bébés : Comment endormir votre enfant | Calma",
    description: "Découvrez pourquoi le bruit blanc aide les bébés à dormir plus rapidement. Lignes directrices sur la sécurité.",
    url: "https://www.calmasounds.com/blog/white-noise-for-babies",
    siteName: "Calma",
    locale: "fr",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bruit Blanc pour Bébés : Le Guide Complet",
  description: "Découvrez pourquoi le bruit blanc aide les bébés à dormir plus rapidement. Lignes directrices sur la sécurité.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/blog/white-noise-for-babies",
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
};

export default function WhiteNoiseForBabiesPage() {
  return (
    <ArticlePage
      slug="white-noise-for-babies"
      jsonLd={articleJsonLd}
      topLinkHref="/baby-sleep-sounds-app"
      topLinkLabel="Application de sommeil bébé"
      title="Bruit Blanc pour Bébés : Le Guide Complet"
      intro="Le bruit blanc imite l'environnement fort de l'utérus, déclenchant un réflexe apaisant naturel."
      ctaHref="/baby-sleep-sounds-app"
      ctaLabel="Télécharger l'app"
      secondaryCtaHref="/white-noise-app"
      secondaryCtaLabel="Application bruit blanc"
      tableOfContents={[
  {
    "id": "why-it-works",
    "title": "Pourquoi les bébés l'adorent"
  },
  {
    "id": "white-vs-pink",
    "title": "Bruit Blanc vs Rose"
  },
  {
    "id": "safety",
    "title": "Sécurité"
  },
  {
    "id": "routine",
    "title": "Créer une Routine"
  },
  {
    "id": "faq",
    "title": "Foire Aux Questions"
  }
]}
      relatedArticles={[
  {
    "href": "/fr/blog/white-noise-for-sleep",
    "title": "Bruit blanc pour dormir",
    "description": "Améliorez votre sommeil."
  },
  {
    "href": "/fr/blog/how-to-build-a-bedtime-routine",
    "title": "Créer une routine",
    "description": "Créez une routine solide."
  }
]}
    >
      <ArticleSection id="why-it-works" title="Pourquoi les bébés aiment le bruit blanc">
        <p>L'utérus est bruyant. Le bruit blanc recrée ce confort et masque les bruits soudains.</p>
      </ArticleSection>

      <ArticleSection id="white-vs-pink" title="Bruit Blanc vs. Bruit Rose">
        <p>Le bruit rose est souvent préféré car il est plus grave et plus doux pour les oreilles de bébé.</p>
      </ArticleSection>

      <ArticleSection id="safety" title="Sécurité : Volume et Distance">
        <ul className="mt-4 list-disc pl-5 space-y-2"><li><strong>Volume bas :</strong> Environ 50 décibels.</li><li><strong>Distance :</strong> À au moins 2 mètres du berceau.</li></ul>
      </ArticleSection>

      <ArticleSection id="routine" title="Créer une Routine de Sommeil">
        <p>Utilisez l'application <strong>Calma</strong> pour intégrer le bruit blanc à la routine du coucher.</p>
      </ArticleSection>

      <ArticleSection id="faq" title="Foire Aux Questions">
        <div className="mt-6 space-y-6">
          <div><h3 className="font-semibold text-lg text-emerald-400">Est-il sûr de laisser le bruit blanc toute la nuit ?</h3><p className="mt-2 leading-7 text-white/70">Oui, tant que le volume est bas (50 dB) et placé à au moins 2 mètres.</p></div>\n<div><h3 className="font-semibold text-lg text-emerald-400">Quel est le meilleur bruit pour bébé ?</h3><p className="mt-2 leading-7 text-white/70">Le bruit rose est souvent le plus doux.</p></div>\n<div><h3 className="font-semibold text-lg text-emerald-400">Quand arrêter d'utiliser le bruit blanc ?</h3><p className="mt-2 leading-7 text-white/70">Il n'y a pas d'âge précis, on peut l'arrêter progressivement en baissant le volume.</p></div>
        </div>
      </ArticleSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
          {
                    "@type": "Question",
                    "name": "Est-il sûr de laisser le bruit blanc toute la nuit ?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Oui, tant que le volume est bas (50 dB) et placé à au moins 2 mètres."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Quel est le meilleur bruit pour bébé ?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Le bruit rose est souvent le plus doux."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Quand arrêter d'utiliser le bruit blanc ?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Il n'y a pas d'âge précis, on peut l'arrêter progressivement en baissant le volume."
                    }
          }
]
          })
        }}
      />
    </ArticlePage>
  );
}
