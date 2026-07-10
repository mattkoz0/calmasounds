import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Ruído Branco para Bebês: Como Acalmar Seu Filho | Calma",
  description: "Descubra por que o ruído branco ajuda os bebês a dormir mais rápido. Diretrizes de segurança e volume.",
  keywords: [
    "white noise for babies",
    "baby sleep sounds",
    "pink noise for babies",
    "calma app",
    "sleep sounds app",
    "app para dormir melhor",
    "promover sono profundo",
    "ajuda para adormecer",
    "sons calmantes noite",
    "melhorar qualidade do sono",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/white-noise-for-babies",
  },
  openGraph: {
    title: "Ruído Branco para Bebês: Como Acalmar Seu Filho | Calma",
    description: "Descubra por que o ruído branco ajuda os bebês a dormir mais rápido. Diretrizes de segurança e volume.",
    url: "https://www.calmasounds.com/blog/white-noise-for-babies",
    siteName: "Calma",
    locale: "pt-BR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ruído Branco para Bebês: O Guia Completo",
  description: "Descubra por que o ruído branco ajuda os bebês a dormir mais rápido. Diretrizes de segurança e volume.",
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
      topLinkLabel="App de sono do bebê"
      title="Ruído Branco para Bebês: O Guia Completo"
      intro="O ruído branco imita o ambiente barulhento do útero, desencadeando um reflexo calmante natural no bebê."
      ctaHref="/baby-sleep-sounds-app"
      ctaLabel="Baixar aplicativo"
      secondaryCtaHref="/white-noise-app"
      secondaryCtaLabel="App de ruído branco"
      tableOfContents={[
  {
    "id": "why-it-works",
    "title": "Por que os bebês adoram"
  },
  {
    "id": "white-vs-pink",
    "title": "Branco vs Rosa"
  },
  {
    "id": "safety",
    "title": "Segurança"
  },
  {
    "id": "routine",
    "title": "Criando uma Rotina"
  },
  {
    "id": "faq",
    "title": "Perguntas Frequentes"
  }
]}
      relatedArticles={[
  {
    "href": "/pt-BR/blog/white-noise-for-sleep",
    "title": "Ruído branco para dormir",
    "description": "Melhore seu sono."
  },
  {
    "href": "/pt-BR/blog/how-to-build-a-bedtime-routine",
    "title": "Como criar uma rotina",
    "description": "Crie uma rotina sólida."
  }
]}
    >
      <ArticleSection id="why-it-works" title="Por que os bebês adoram o ruído branco">
        <p>O útero não é um lugar silencioso. O ruído branco recria aquele conforto e mascara ruídos repentinos.</p>
      </ArticleSection>

      <ArticleSection id="white-vs-pink" title="Ruído Branco vs. Ruído Rosa">
        <p>O ruído rosa enfatiza frequências mais baixas e é frequentemente mais suave para os ouvidos do bebê.</p>
      </ArticleSection>

      <ArticleSection id="safety" title="Segurança: Volume e Distância">
        <ul className="mt-4 list-disc pl-5 space-y-2"><li><strong>Volume baixo:</strong> Cerca de 50 decibéis.</li><li><strong>Distância:</strong> A pelo menos 2 metros do berço.</li></ul>
      </ArticleSection>

      <ArticleSection id="routine" title="Construindo uma Rotina de Sono">
        <p>A consistência é a chave. Use o aplicativo <strong>Calma</strong> para estabelecer uma rotina.</p>
      </ArticleSection>

      <ArticleSection id="faq" title="Perguntas Frequentes">
        <div className="mt-6 space-y-6">
          <div><h3 className="font-semibold text-lg text-emerald-400">É seguro deixar o ruído branco a noite toda?</h3><p className="mt-2 leading-7 text-white/70">Sim, desde que o volume seja seguro (cerca de 50 dB) e a 2 metros de distância.</p></div>
<div><h3 className="font-semibold text-lg text-emerald-400">Qual é o melhor ruído para um bebê?</h3><p className="mt-2 leading-7 text-white/70">O ruído rosa é muito popular por ser mais suave.</p></div>
<div><h3 className="font-semibold text-lg text-emerald-400">Quando parar de usar ruído branco?</h3><p className="mt-2 leading-7 text-white/70">Não há uma idade estrita. Você pode reduzir gradualmente o volume ao longo de semanas.</p></div>
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
                    "name": "É seguro deixar o ruído branco a noite toda?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Sim, desde que o volume seja seguro (cerca de 50 dB) e a 2 metros de distância."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Qual é o melhor ruído para um bebê?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "O ruído rosa é muito popular por ser mais suave."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Quando parar de usar ruído branco?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Não há uma idade estrita. Você pode reduzir gradualmente o volume ao longo de semanas."
                    }
          }
]
          })
        }}
      />
    </ArticlePage>
  );
}
