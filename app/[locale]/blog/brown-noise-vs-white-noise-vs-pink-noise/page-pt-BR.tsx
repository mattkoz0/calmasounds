import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Ruído Marrom vs Branco vs Rosa | Calma",
  description:
    "Descubra as diferenças entre ruído marrom, branco e rosa. Encontre o melhor som para dormir, estudar ou relaxar.",
  keywords: [
    "ruído marrom vs ruído branco",
    "ruído rosa vs ruído branco",
    "ruído verde vs ruído branco",
    "melhor ruído para foco",
    "ruído para TDAH",
    "cores de ruído explicadas",
    "blog do calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Ruído Marrom vs Branco vs Rosa | Calma",
    description:
    "Descubra as diferenças entre ruído marrom, branco e rosa. Encontre o melhor som para dormir, estudar ou relaxar.",
    url: "https://www.calmasounds.com/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruído Marrom vs Branco vs Rosa | Calma",
    description:
    "Descubra as diferenças entre ruído marrom, branco e rosa. Encontre o melhor som para dormir, estudar ou relaxar.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ruído Marrom vs Ruído Branco vs Ruído Rosa vs Ruído Verde",
  description:
    "Descubra as diferenças entre ruído marrom, branco e rosa. Encontre o melhor som para dormir, estudar ou relaxar.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/pt-BR/white-noise-app"
      topLinkLabel="Explore a página de ruído branco"
      title="Ruído Marrom vs Ruído Branco vs Ruído Rosa vs Ruído Verde"
      intro="Nem todo 'ruído branco' é realmente branco. No mundo do áudio, os sons são categorizados por 'cores' com base na sua distribuição de frequência. Compreender a diferença entre o ruído Branco, Rosa, Marrom e Verde pode ajudá-lo a escolher o fundo certo para dormir melhor, ter um foco mais profundo ou gerenciar os sintomas de TDAH."
      ctaHref="/pt-BR/white-noise-app"
      ctaLabel="Explore o app de ruído branco"
      secondaryCtaHref="/pt-BR/sound-mixer-app"
      secondaryCtaLabel="Explore o app misturador de som"
      tableOfContents={[
        { id: "video", title: "Ruído Marrom vs Branco vs Rosa | Calma" },
        { id: "white-noise", title: "Ruído Marrom vs Branco vs Rosa | Calma" },
        { id: "pink-noise", title: "Ruído Marrom vs Branco vs Rosa | Calma" },
        { id: "brown-noise", title: "Ruído Marrom vs Branco vs Rosa | Calma" },
        { id: "green-noise", title: "Ruído Marrom vs Branco vs Rosa | Calma" },
        { id: "summary", title: "Ruído Marrom vs Branco vs Rosa | Calma" },
      ]}
      relatedArticles={[
        {
          href: "/pt-BR/blog/white-noise-for-sleep",
          title: "Ruído Marrom vs Branco vs Rosa | Calma",
          description:
    "Descubra as diferenças entre ruído marrom, branco e rosa. Encontre o melhor som para dormir, estudar ou relaxar.",
        },
        {
          href: "/pt-BR/blog/best-sounds-for-studying",
          title: "Ruído Marrom vs Branco vs Rosa | Calma",
          description:
    "Descubra as diferenças entre ruído marrom, branco e rosa. Encontre o melhor som para dormir, estudar ou relaxar.",
        },
      ]}
    >
      <ArticleSection id="video" title="Assista: As Cores do Ruído Explicadas">
        <p className="mb-6">
          Confira o nosso guia rápido no YouTube Shorts para ouvir a diferença e ver qual cor pode ser a sua favorita.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/4SXR34eNAmY"
                    title="As Cores do Ruído: Branco, Rosa, Marrom e Verde"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Ruído Branco: O Versátil">
        <p>
          O ruído branco contém todas as frequências audíveis tocadas na mesma intensidade. Parece estática ou um som de 'chiado'. Por cobrir todas as frequências, é excepcionalmente bom em mascarar sons repentinos e perturbadores, como portas batendo ou carros buzinando.
        </p>
        <p className="mt-4">
          <strong>Melhor para:</strong> Mascarar ruído ambiental, apoiar o sono infantil e criar um fundo neutro em escritórios movimentados.
        </p>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="Ruído Rosa: A Escolha Natural">
        <p>
          O ruído rosa é semelhante ao ruído branco, mas tem mais energia em frequências mais baixas. Isso cria um som mais suave e equilibrado que muitas pessoas consideram mais natural do que a dureza do ruído branco puro. Pense nisso como o som de uma chuva constante ou do vento farfalhando as folhas.
        </p>
        <p className="mt-4">
          <strong>Melhor para:</strong> Melhorar a qualidade do sono, relaxar sem a sensação de 'estática' do ruído branco e foco de longo prazo.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Ruído Marrom: A Calma Profunda">
        <p>
          O ruído marrom (também chamado de ruído vermelho) vai ainda mais longe do que o ruído rosa, concentrando-se fortemente nos graves de baixa frequência. Parece um estrondo profundo, uma cachoeira distante ou o zumbido baixo de uma cabine de avião. 
        </p>
        <p className="mt-4">
          Recentemente, o ruído marrom ganhou popularidade significativa na comunidade de TDAH. Muitas pessoas descobrem que a sua qualidade profunda e envolvente ajuda a 'silenciar' uma mente ocupada de forma mais eficaz do que sons de alta frequência.
        </p>
        <p className="mt-4">
          <strong>Melhor para:</strong> Gerenciamento de TDAH, foco profundo, relaxamento intenso e para aqueles que acham frequências mais altas irritantes.
        </p>
      </ArticleSection>

      <ArticleSection id="green-noise" title="Ruído Verde: A Harmonia da Natureza">
        <p>
          O ruído verde é frequentemente descrito como o som de fundo da natureza. Concentra-se nas frequências médias, semelhante ao que você pode ouvir em uma floresta ou perto de um riacho tranquilo. É menos áspero que o ruído branco e menos pesado nos graves do que o ruído marrom, encontrando um meio-termo confortável.
        </p>
        <p className="mt-4">
          <strong>Melhor para:</strong> Criar uma atmosfera pacífica, relaxamento sem graves pesados e para quem adora paisagens sonoras com sensação natural.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="Qual você deve escolher?">
        <p>
          A 'melhor' cor é inteiramente pessoal. Recomendamos começar com o Ruído Branco se você precisar bloquear sons altos específicos, mas mudar para Rosa ou Marrom se achar a estática mais aguda do Ruído Branco muito nítida.
        </p>
        <p className="mt-4">
          Com o <strong>Calma</strong>, você não precisa escolher apenas um. Você pode misturar diferentes camadas de ruído, adicionando texturas da natureza ou sons ambientais para criar uma paisagem sonora verdadeiramente personalizada que funcione para o seu cérebro único.
        </p>
      </ArticleSection>
    </ArticlePage>
  );
}
