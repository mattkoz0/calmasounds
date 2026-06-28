import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Mejores Sonidos para el Tinnitus | Calma Blog",
  description: "Descubre cómo la terapia de sonido puede proporcionar alivio para el tinnitus.",
  keywords: ["sonidos para tinnitus", "alivio del tinnitus", "ruido blanco tinnitus"
    "app para dormir mejor",
    "promover sueño profundo",
    "ayuda para conciliar el sueño",
    "sonidos relajantes noche",
    "mejorar calidad del sueño",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
  },
  openGraph: {
    title: "Mejores Sonidos para el Tinnitus | Calma Blog",
    description: "Descubre cómo la terapia de sonido puede proporcionar alivio para el tinnitus.",
    url: "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief",
    siteName: "Calma",
    locale: "es",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores Sonidos para el Tinnitus",
  description: "Descubre cómo la terapia de sonido puede proporcionar alivio para el tinnitus.",
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
      topLinkLabel="Explora la aplicación para tinnitus"
      title="Mejores Sonidos para el Tinnitus"
      intro="Vivir con tinnitus puede ser un desafío. La terapia de sonido es una de las formas más efectivas de manejar el zumbido en los oídos."
      ctaHref="/tinnitus-sounds-app"
      ctaLabel="Explora la aplicación para tinnitus"
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
      <ArticleSection title="Ruido Blanco">
        <p className="mt-4 leading-8 text-white/70">El ruido blanco cubre todas las frecuencias y es excelente para enmascarar zumbidos agudos.</p>
      </ArticleSection>
      <ArticleSection title="Ruido Marrón">
        <p className="mt-4 leading-8 text-white/70">Más profundo y relajante, el ruido marrón es ideal para dormir con tinnitus.</p>
      </ArticleSection>
      <ArticleSection title="Sonidos de la Naturaleza">
        <p className="mt-4 leading-8 text-white/70">La lluvia y las olas del mar distraen naturalmente al cerebro del zumbido.</p>
      </ArticleSection>
      <ArticleSection title="Ruido Rosa">
        <p className="mt-4 leading-8 text-white/70">Equilibrado y suave, el ruido rosa es frecuentemente recomendado por audiólogos.</p>
      </ArticleSection>
      <ArticleSection title="Cómo usar la terapia de sonido">
        <p className="mt-4 leading-8 text-white/70">Ajusta el volumen justo por debajo de tu tinnitus para ayudar a la habituación.</p>
      </ArticleSection>
    </ArticlePage>
  );
}
