import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "Mejores Sonidos para el Tinnitus y Terapia de Sonido | Calma";
const articleDescription = "Descubra cómo la terapia de sonido y el ruido blanco pueden proporcionar alivio del tinnitus. Aprenda a enmascarar el zumbido en los oídos.";
const articleUrl = "https://www.calmasounds.com/es/blog/sounds-for-tinnitus-relief";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "tinnitus", "sound therapy", "masking", "relief"
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "Calma",
    locale: "es",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Mejores Sonidos para el Tinnitus: Guía de Terapia de Sonido",
      "description": articleDescription,
      "author": { "@type": "Organization", "name": "Calma Team" },
      "publisher": { "@type": "Organization", "name": "Calma" },
      "mainEntityOfPage": articleUrl,
      "datePublished": "2026-05-09",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué sonidos son mejores para el tinnitus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las preferencias varían; pruebe ruido blanco, lluvia u otro fondo suave a un volumen cómodo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo funciona la terapia de sonido?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Puede reducir el contraste, distraer o apoyar la habituación en algunas personas; los resultados varían."
          }
        },
        {
          "@type": "Question",
          "name": "¿Debo enmascarar completamente el tinnitus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No hay un nivel universal; evite intentar taparlo con sonido fuerte y consulte a un audiólogo."
          }
        }
      ]
    }
  ]
};

export default function SoundsForTinnitusReliefPage() {
  return (
    <ArticlePage
      slug="sounds-for-tinnitus-relief"
      jsonLd={articleJsonLd}
      topLinkHref="/es/tinnitus-sounds-app"
      topLinkLabel="Descargar App para Tinnitus Gratis"
      title="Mejores Sonidos para el Tinnitus: Guía de Terapia de Sonido"
      intro="El tinnitus puede notarse más en silencio. Un sonido externo suave puede enmascararlo, distraer la atención o apoyar la habituación en algunas personas, pero no es una cura y la respuesta varía."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Descargar App para Tinnitus Gratis"
      secondaryCtaHref="/es/tinnitus-sounds-app"
      secondaryCtaLabel="Saber más sobre la app"
      tableOfContents={[
        { id: "what-is-sound-therapy", title: "Cómo Funciona la Terapia de Sonido" },
        { id: "white-noise", title: "Ruido Blanco" },
        { id: "brown-noise", title: "Ruido Marrón" },
        { id: "nature-sounds", title: "Sonidos de la Naturaleza" },
        { id: "habituation", title: "Habituación: El Secreto" },
        { id: "faq", title: "FAQ" },
      ]}
      relatedArticles={[]}
    >
      <ArticleSection id="what-is-sound-therapy" title="Cómo Funciona la Terapia de Sonido">
        <p className="mt-4 leading-8 text-white/70">
          Proporciona un sonido de fondo neutral que reduce el contraste entre el silencio y el zumbido.
        </p>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Ruido Blanco">
        <p className="mt-4 leading-8 text-white/70">
          El ruido blanco es excelente para enmascarar zumbidos agudos.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="White Noise" 
          description=""
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Ruido Marrón">
        <p className="mt-4 leading-8 text-white/70">
          Un ruido profundo que es muy reconfortante al tratar de dormir.
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="Sonidos de la Naturaleza">
        <p className="mt-4 leading-8 text-white/70">
          La lluvia y las olas del océano distraen al cerebro de forma natural.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Steady Rain" 
          description=""
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="habituation" title="Habituación: El Secreto">
        <p className="mt-4 leading-8 text-white/70">
          El objetivo a largo plazo es la habituación. Ajuste el volumen justo por debajo de su tinnitus.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
          >
            <Image
              src="/google-play-badge.png"
              alt="Download Calma App for Free"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="FAQ">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Qué sonidos son mejores para el tinnitus?</h3>
            <p className="mt-2 leading-7 text-white/70">Las preferencias varían; pruebe ruido blanco, lluvia u otro fondo suave a un volumen cómodo.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Cómo funciona la terapia de sonido?</h3>
            <p className="mt-2 leading-7 text-white/70">Puede reducir el contraste, distraer o apoyar la habituación en algunas personas; los resultados varían.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Debo enmascarar completamente el tinnitus?</h3>
            <p className="mt-2 leading-7 text-white/70">No hay un nivel universal; evite intentar taparlo con sonido fuerte y consulte a un audiólogo.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
