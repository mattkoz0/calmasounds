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
        { id: "comparison-table", title: "Tabela Comparativa: Cores do Ruído" },
        { id: "faq", title: "Perguntas Frequentes" },
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
                    src="https://www.youtube.com/embed/MlJNs1K66xc"
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
    
      <ArticleSection id="comparison-table" title="Tabela Comparativa: Cores do Ruído">
        <div className="overflow-x-auto mt-6 rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Cor do Ruído</th>
                <th className="px-4 py-3 font-semibold">Soa Como</th>
                <th className="px-4 py-3 font-semibold">Melhor Para</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruído Branco</td>
                <td className="px-4 py-3">Estática, ventilador</td>
                <td className="px-4 py-3">Mascarar barulhos fortes, sono do bebê</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruído Rosa</td>
                <td className="px-4 py-3">Chuva constante, folhas</td>
                <td className="px-4 py-3">Sono profundo, foco constante, relaxamento</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruído Marrom</td>
                <td className="px-4 py-3">Trovão distante, chuva forte</td>
                <td className="px-4 py-3">Foco TDAH, relaxamento profundo, estudo</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruído Verde</td>
                <td className="px-4 py-3">Ambiente de floresta, riacho</td>
                <td className="px-4 py-3">Alívio do estresse, meditação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Perguntas Frequentes">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">O ruído branco ajuda você a dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Sim, o ruído branco ajuda a dormir ao mascarar sons perturbadores e fornecer um ambiente acústico constante.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Qual é a diferença entre ruído branco e ruído rosa?</h3>
            <p className="mt-2 leading-7 text-white/70">O ruído branco contém todas as frequências e soa agudo. O ruído rosa enfatiza frequências mais baixas e soa mais suave, como chuva.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Ruído marrom vs ruído branco para dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Para muitos, o ruído marrom é melhor para dormir porque seu som profundo e grave é mais suave e menos agressivo que o ruído branco.</p>
          </div>
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
                "name": "O ruído branco ajuda você a dormir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, o ruído branco ajuda a dormir ao mascarar sons perturbadores e fornecer um ambiente acústico constante."
                }
              },
              {
                "@type": "Question",
                "name": "Qual é a diferença entre ruído branco e ruído rosa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O ruído branco contém todas as frequências e soa agudo. O ruído rosa enfatiza frequências mais baixas e soa mais suave, como chuva."
                }
              },
              {
                "@type": "Question",
                "name": "Ruído marrom vs ruído branco para dormir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para muitos, o ruído marrom é melhor para dormir porque seu som profundo e grave é mais suave e menos agressivo que o ruído branco."
                }
              }
            ]
          })
        }}
      />
    </ArticlePage>
  );
}
