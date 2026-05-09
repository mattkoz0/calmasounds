import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Melhores Sons para Zumbido | Calma Blog",
  description: "Descubra como a terapia sonora pode proporcionar alívio para o zumbido.",
  keywords: ["sons para zumbido", "alívio do zumbido", "ruído branco zumbido"],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
  },
  openGraph: {
    title: "Melhores Sons para Zumbido | Calma Blog",
    description: "Descubra como a terapia sonora pode proporcionar alívio para o zumbido.",
    url: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
    siteName: "Calma",
    locale: "pt-BR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Melhores Sons para Zumbido",
  description: "Descubra como a terapia sonora pode proporcionar alívio para o zumbido.",
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
      topLinkLabel="Explorar aplicativo para zumbido"
      title="Melhores Sons para Zumbido"
      intro="Viver com zumbido é desafiador. A terapia sonora é uma ótima maneira de mascarar o ruído nos ouvidos."
      ctaHref="/tinnitus-sounds-app"
      ctaLabel="Explorar aplicativo para zumbido"
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
      <ArticleSection title="Ruído Branco">
        <p className="mt-4 leading-8 text-white/70">Excelente para mascarar zumbidos agudos.</p>
      </ArticleSection>
      <ArticleSection title="Ruído Marrom">
        <p className="mt-4 leading-8 text-white/70">Mais profundo e relaxante, ideal para dormir com zumbido.</p>
      </ArticleSection>
      <ArticleSection title="Sons da Natureza">
        <p className="mt-4 leading-8 text-white/70">Chuva e ondas do mar distraem naturalmente o cérebro.</p>
      </ArticleSection>
      <ArticleSection title="Ruído Rosa">
        <p className="mt-4 leading-8 text-white/70">Frenquentemente recomendado por fonoaudiólogos.</p>
      </ArticleSection>
      <ArticleSection title="Como usar a terapia sonora">
        <p className="mt-4 leading-8 text-white/70">Ajuste o volume logo abaixo do seu zumbido para ajudar na habituação.</p>
      </ArticleSection>
    </ArticlePage>
  );
}
