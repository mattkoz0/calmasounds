import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "Melhores Sons para Zumbido no Ouvido e Terapia de Som | Calma";
const articleDescription = "Descubra como a terapia de som e o ruído branco podem aliviar o zumbido no ouvido e promover a habituação.";
const articleUrl = "https://www.calmasounds.com/pt-BR/blog/sounds-for-tinnitus-relief";

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
    locale: "pt-BR",
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
      "headline": "Melhores Sons para Zumbido: Guia de Terapia de Som",
      "description": articleDescription,
      "author": { "@type": "Organization", "name": "Calma Team" },
      "publisher": { "@type": "Organization", "name": "Calma" },
      "mainEntityOfPage": articleUrl,
      "datePublished": "2026-05-09",
      "dateModified": new Date().toISOString().split('T')[0],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quais sons são melhores para o zumbido?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ruído branco para sons agudos, sons da natureza para relaxamento."
          }
        },
        {
          "@type": "Question",
          "name": "Como funciona a terapia de som?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reduz o contraste com o silêncio e ajuda na habituação cerebral."
          }
        },
        {
          "@type": "Question",
          "name": "Devo mascarar completamente o zumbido?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não, especialistas recomendam o mascaramento parcial."
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
      topLinkHref="/pt-BR/tinnitus-sounds-app"
      topLinkLabel="Baixar App para Zumbido Grátis"
      title="Melhores Sons para Zumbido: Guia de Terapia de Som"
      intro="A terapia de som é uma das formas mais eficazes de lidar com o zumbido no ouvido. Ela ajuda a mascarar o som e treina seu cérebro para ignorá-lo."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Baixar App para Zumbido Grátis"
      secondaryCtaHref="/pt-BR/tinnitus-sounds-app"
      secondaryCtaLabel="Saber mais sobre o app"
      tableOfContents={[
        { id: "what-is-sound-therapy", title: "Como Funciona a Terapia de Som" },
        { id: "white-noise", title: "Ruído Branco" },
        { id: "brown-noise", title: "Ruído Marrom" },
        { id: "nature-sounds", title: "Sons da Natureza" },
        { id: "habituation", title: "Habituação: O Segredo" },
        { id: "faq", title: "FAQ" },
      ]}
      relatedArticles={[]}
    >
      <ArticleSection id="what-is-sound-therapy" title="Como Funciona a Terapia de Som">
        <p className="mt-4 leading-8 text-white/70">
          Fornece um som de fundo que reduz o contraste com o silêncio.
        </p>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Ruído Branco">
        <p className="mt-4 leading-8 text-white/70">
          O ruído branco é perfeito para mascarar zumbidos agudos.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="White Noise" 
          description=""
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Ruído Marrom">
        <p className="mt-4 leading-8 text-white/70">
          Ruído profundo, muito relaxante para dormir.
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="Sons da Natureza">
        <p className="mt-4 leading-8 text-white/70">
          Sons de chuva distraem o cérebro naturalmente.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Steady Rain" 
          description=""
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="habituation" title="Habituação: O Segredo">
        <p className="mt-4 leading-8 text-white/70">
          O objetivo é a habituação. Mantenha o volume ligeiramente abaixo do zumbido.
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
            <h3 className="font-semibold text-lg text-emerald-400">Quais sons são melhores para o zumbido?</h3>
            <p className="mt-2 leading-7 text-white/70">Ruído branco para sons agudos, sons da natureza para relaxamento.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Como funciona a terapia de som?</h3>
            <p className="mt-2 leading-7 text-white/70">Reduz o contraste com o silêncio e ajuda na habituação cerebral.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Devo mascarar completamente o zumbido?</h3>
            <p className="mt-2 leading-7 text-white/70">Não, especialistas recomendam o mascaramento parcial.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
