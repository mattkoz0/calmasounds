import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Beste Geräusche gegen Tinnitus | Calma Blog",
  description: "Entdecke, wie Klangtherapie und Rauschen bei Tinnitus helfen können.",
  keywords: ["tinnitus geräusche", "tinnitus linderung", "weißes rauschen tinnitus"],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
  },
  openGraph: {
    title: "Beste Geräusche gegen Tinnitus | Calma Blog",
    description: "Entdecke, wie Klangtherapie und Rauschen bei Tinnitus helfen können.",
    url: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
    siteName: "Calma",
    locale: "de",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beste Geräusche gegen Tinnitus",
  description: "Entdecke, wie Klangtherapie und Rauschen bei Tinnitus helfen können.",
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
      topLinkLabel="Entdecke die Tinnitus-App"
      title="Beste Geräusche gegen Tinnitus"
      intro="Leben mit Tinnitus ist oft schwer. Klangtherapie ist eine effektive Methode, um das Ohrensausen zu bewältigen."
      ctaHref="/tinnitus-sounds-app"
      ctaLabel="Entdecke die Tinnitus-App"
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
      <ArticleSection title="Weißes Rauschen">
        <p className="mt-4 leading-8 text-white/70">Weißes Rauschen verdeckt hohe Pfeiftöne sehr gut.</p>
      </ArticleSection>
      <ArticleSection title="Braunes Rauschen">
        <p className="mt-4 leading-8 text-white/70">Ein tiefes Rauschen, das beim Einschlafen mit Tinnitus sehr beruhigend wirkt.</p>
      </ArticleSection>
      <ArticleSection title="Naturklänge">
        <p className="mt-4 leading-8 text-white/70">Regen und Meeresrauschen lenken das Gehirn auf natürliche Weise ab.</p>
      </ArticleSection>
      <ArticleSection title="Rosa Rauschen">
        <p className="mt-4 leading-8 text-white/70">Rosa Rauschen ist weich und wird oft von Audiologen empfohlen.</p>
      </ArticleSection>
      <ArticleSection title="Wie man Klangtherapie anwendet">
        <p className="mt-4 leading-8 text-white/70">Die Lautstärke sollte knapp unter dem Tinnitus liegen, um Gewöhnung zu fördern.</p>
      </ArticleSection>
    </ArticlePage>
  );
}
