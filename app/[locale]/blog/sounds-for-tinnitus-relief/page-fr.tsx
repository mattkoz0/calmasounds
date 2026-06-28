import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Meilleurs Sons pour Acouphènes | Calma Blog",
  description: "Découvrez comment la thérapie sonore peut soulager les acouphènes.",
  keywords: ["sons pour acouphènes", "soulagement acouphènes", "bruit blanc",
    "application pour mieux dormir",
    "favoriser le sommeil profond",
    "aide à l'endormissement",
    "sons apaisants nuit",
    "améliorer qualité du sommeil",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
  },
  openGraph: {
    title: "Meilleurs Sons pour Acouphènes | Calma Blog",
    description: "Découvrez comment la thérapie sonore peut soulager les acouphènes.",
    url: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
    siteName: "Calma",
    locale: "fr",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meilleurs Sons pour Acouphènes",
  description: "Découvrez comment la thérapie sonore peut soulager les acouphènes.",
  author: { "@type": "Organization", name: "Calma" },
  publisher: { "@type": "Organization", name: "Calma" },
  mainEntityOfPage: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
};

export default function SoundsForTinnitusReliefPage() {
  return (
    <ArticlePage
      slug="sounds-for-tinnitus-relief"
      jsonLd={articleJsonLd}
      topLinkHref="/tinnitus-sounds-app"
      topLinkLabel="Explorer l'application pour acouphènes"
      title="Meilleurs Sons pour Acouphènes"
      intro="La thérapie sonore est très efficace pour gérer les bourdonnements d'oreilles."
      ctaHref="/tinnitus-sounds-app"
      ctaLabel="Explorer l'application pour acouphènes"
      secondaryCtaHref="/blog/white-noise-for-sleep"
      secondaryCtaLabel="Read about white noise"
      relatedArticles={[
        {
          href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
          title: "Noise Colors Explained",
          description: "Explore differences between white, pink, brown noises."
        }
      ]}
    >
      <ArticleSection title="Bruit Blanc">
        <p className="mt-4 leading-8 text-white/70">Parfait pour masquer les acouphènes aigus.</p>
      </ArticleSection>
      <ArticleSection title="Bruit Brun">
        <p className="mt-4 leading-8 text-white/70">Plus profond, idéal pour s'endormir paisiblement.</p>
      </ArticleSection>
      <ArticleSection title="Sons de la Nature">
        <p className="mt-4 leading-8 text-white/70">La pluie ou l'océan offrent une distraction naturelle apaisante.</p>
      </ArticleSection>
      <ArticleSection title="Bruit Rose">
        <p className="mt-4 leading-8 text-white/70">Souvent recommandé par les spécialistes de l'audition.</p>
      </ArticleSection>
      <ArticleSection title="Comment utiliser la thérapie">
        <p className="mt-4 leading-8 text-white/70">Réglez le volume juste en dessous de vos acouphènes.</p>
      </ArticleSection>
    </ArticlePage>
  );
}
