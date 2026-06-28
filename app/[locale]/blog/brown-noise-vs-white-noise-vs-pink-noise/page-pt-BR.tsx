import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";

export const metadata: Metadata = {
  title: "Ruído marrom vs. branco vs. rosa | Blog do Calma",
  description:
    "Explore as diferenças entre o ruído branco, rosa e marrom. Descubra qual é o melhor para o seu sono, concentração ou controle do TDAH.",
  keywords: [
    "ruido marrom vs ruido branco",
    "ruido rosa vs ruido branco",
    "ruido verde vs ruido branco",
    "melhor ruido para foco",
    "ruido para TDAH",
    "cores do ruido explicadas",
    "blog do calma",
    "app para dormir melhor",
    "promover sono profundo",
    "ajuda para adormecer",
    "sons calmantes noite",
    "melhorar qualidade do sono",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Ruído marrom vs. branco vs. rosa | Blog do Calma",
    description:
      "Explore as diferenças entre o ruído branco, rosa e marrom. Descubra qual é o melhor para o seu sono, concentração ou controle do TDAH.",
    url: "https://www.calmasounds.com/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruído marrom vs. branco vs. rosa | Blog do Calma",
    description:
      "Explore as diferenças entre o ruído branco, rosa e marrom.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ruído marrom vs Ruído branco vs Ruído rosa vs Ruído verde",
  description:
    "Um guia completo para entender as cores do ruído, incluindo o ruído verde, e seus benefícios exclusivos para o sono, concentração e relaxamento.",
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
  datePublished: "2026-04-13",
  dateModified: new Date().toISOString().split('T')[0],
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/pt-BR/white-noise-app"
      topLinkLabel="Explorar página de ruído branco"
      title="Ruído marrom vs. Ruído branco vs. Ruído rosa vs. Ruído verde"
      intro="Nem todo 'ruído branco' é realmente branco. No mundo do áudio, os sons são categorizados por 'cores' com base na sua distribuição de frequência. Entender a diferença entre o ruído branco, rosa, marrom e verde pode ajudá-lo a escolher o fundo certo para um sono melhor, foco mais profundo ou para controlar os sintomas do TDAH."
      ctaHref="/pt-BR/white-noise-app"
      ctaLabel="Explorar app de ruído branco"
      secondaryCtaHref="/pt-BR/sound-mixer-app"
      secondaryCtaLabel="Explorar app Sound Mixer"
      tableOfContents={[
        { id: "video", title: "Vídeo: Cores do ruído explicadas" },
        { id: "white-noise", title: "Ruído Branco: O faz-tudo" },
        { id: "pink-noise", title: "Ruído Rosa: A escolha natural" },
        { id: "brown-noise", title: "Ruído Marrom: A calma profunda" },
        { id: "green-noise", title: "Ruído Verde: A harmonia natural" },
        { id: "adhd-noise", title: "Qual ruído colorido é melhor para o TDAH?" },
        { id: "summary", title: "Qual você deve escolher?" },
        { id: "comparison-table", title: "Tabela comparativa: Cores do ruído" },
        { id: "faq", title: "Perguntas Frequentes" },
      ]}
      relatedArticles={[
        {
          href: "/pt-BR/blog/white-noise-for-sleep",
          title: "Ruído branco para dormir",
          description:
            "Saiba como o ruído branco pode ajudá-lo a adormecer mais rápido e a permanecer dormindo por mais tempo.",
        },
        {
          href: "/pt-BR/blog/best-sounds-for-sleep",
          title: "Melhores sons para dormir",
          description:
            "Descubra quais sons de fundo são mais eficazes para a concentração.",
        },
      ]}
    >
      <ArticleSection id="video" title="Vídeo: Cores do ruído explicadas">
        <p className="mb-6">
          Confira o nosso guia rápido no YouTube Shorts para ouvir a diferença e ver qual cor pode ser a sua favorita.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <YouTubeEmbed
                    videoId="MlJNs1K66xc"
                    title="As cores do ruído: Branco, Rosa, Marrom e Verde"
                />
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Ruído Branco: O faz-tudo">
        <p className="mt-4 leading-8 text-white/70">
          O ruído branco contém todas as frequências audíveis reproduzidas na mesma intensidade. Soa como estática ou um som de chiado. Como cobre todas as frequências, é excepcionalmente bom para mascarar sons repentinos e perturbadores, como portas batendo ou buzinas de carros.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Amostra de Ruído Branco" 
          description="Estática constante que mascara todas as frequências por igual."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>Melhor para:</strong> Mascarar o ruído ambiental, ajudar bebês a dormir e criar um fundo neutro em escritórios movimentados.
        </p>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="Ruído Rosa: A escolha natural">
        <p className="mt-4 leading-8 text-white/70">
          O ruído rosa é semelhante ao ruído branco, mas tem mais energia nas frequências mais baixas. Isso cria um som mais suave e equilibrado que muitas pessoas acham mais natural do que a aspereza do ruído branco puro. Pense nele como o som de uma chuva constante ou o vento sussurrando entre as folhas.
        </p>
        <AudioPlayer 
          src="/pink_noise.m4a" 
          title="Amostra de Ruído Rosa" 
          description="Um som mais suave e equilibrado, semelhante a uma chuva constante."
          colorClass="bg-pink-500/20 text-pink-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>Melhor para:</strong> Melhorar a qualidade do sono, relaxar sem a sensação 'estática' do ruído branco e manter o foco a longo prazo.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Ruído Marrom: A calma profunda">
        <p className="mt-4 leading-8 text-white/70">
          O ruído marrom (também chamado de ruído vermelho) vai ainda mais longe do que o ruído rosa, concentrando-se fortemente nos graves de baixa frequência. Soa como um estrondo profundo, uma cachoeira distante ou o zumbido baixo da cabine de um avião.
        </p>
        <AudioPlayer 
          src="/brown_noise.m4a" 
          title="Amostra de Ruído Marrom" 
          description="Frequências baixas profundas e estrondosas, perfeitas para foco profundo."
          colorClass="bg-orange-500/20 text-orange-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          Recentemente, o ruído marrom ganhou popularidade significativa na comunidade de TDAH. Muitas pessoas acham que sua qualidade profunda e imersiva ajuda a acalmar uma mente ocupada de forma mais eficaz do que os sons de frequência mais alta.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>Melhor para:</strong> Controle do TDAH, foco profundo, relaxamento intenso e para quem acha irritantes as frequências mais altas.
        </p>
      </ArticleSection>

      <ArticleSection id="green-noise" title="Ruído Verde: A harmonia natural">
        <p className="mt-4 leading-8 text-white/70">
          O ruído verde é frequentemente descrito como o som de fundo da natureza. Concentra-se nas frequências médias, de forma semelhante ao que você ouviria em uma floresta ou perto de um riacho calmo. É menos áspero que o ruído branco e tem menos graves do que o ruído marrom, encontrando um meio-termo confortável.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>Melhor para:</strong> Criar uma atmosfera pacífica, relaxar sem graves pesados e para os amantes de paisagens sonoras naturais.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd-noise" title="Qual ruído colorido é melhor para o TDAH?">
        <p className="mt-4 leading-8 text-white/70">
          Uma pergunta comum nas comunidades neurodivergentes é: <strong>Qual cor de ruído é melhor para o TDAH?</strong> Embora o cérebro de cada pessoa seja diferente, o <strong>ruído marrom</strong> costuma ser o favorito absoluto.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Como o ruído marrom é mais profundo e não tem a estática de alta frequência do ruído branco, muitas pessoas com TDAH relatam que ele cria uma «manta pesada» de som que acalma naturalmente os pensamentos acelerados. Ele fornece o estímulo sensorial na medida certa para satisfazer a necessidade de estímulo do cérebro, permitindo que o córtex pré-frontal se concentre na tarefa em questão sem se distrair com interrupções internas ou externas.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Se você está comparando o <em>ruído marrom vs. ruído branco para o TDAH</em>, comece com o ruído marrom para estudar ou trabalhar profundamente e veja se ele o ajuda a entrar em um estado de fluxo com mais facilidade.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="Qual você deve escolher?">
        <p className="mt-4 leading-8 text-white/70">
          O 'melhor' color é completamente pessoal. Recomendamos começar com o ruído branco se você precisar bloquear ruídos fortes específicos, mas mudar para o rosa ou marrom se achar a estática mais aguda do ruído branco muito incômoda.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Com o <strong>Calma</strong>, você não precisa escolher apenas um. Você pode misturar diferentes camadas de ruído, adicionando texturas da natureza ou sons ambientais atmosféricos para criar uma paisagem sonora verdadeiramente personalizada que funcione para o seu cérebro único.
        </p>
      </ArticleSection>
    
      <ArticleSection id="comparison-table" title="Tabela comparativa: Cores do ruído">
        <div className="overflow-x-auto mt-6 rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Cor do Ruído</th>
                <th className="px-4 py-3 font-semibold">Som de Referência</th>
                <th className="px-4 py-3 font-semibold">Ideal para</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruído Branco</td>
                <td className="px-4 py-3">Estática, chiado de TV, ventilador</td>
                <td className="px-4 py-3">Mascarar ruídos repentinos fortes, fundo de escritório, sono de bebês</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruído Rosa</td>
                <td className="px-4 py-3">Chuva constante, farfalhar de folhas</td>
                <td className="px-4 py-3">Sono profundo, foco estável, atmosfera relaxante</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruído Marrom</td>
                <td className="px-4 py-3">Trovão distante, rugido baixo, chuva forte</td>
                <td className="px-4 py-3">Foco para TDAH, relaxamento profundo, leitura, estudo</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruído Verde</td>
                <td className="px-4 py-3">Ambiente florestal, riacho suave</td>
                <td className="px-4 py-3">Alívio de ansiedade, meditação, amantes da natureza</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Perguntas Frequentes">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">O ruído branco ajuda a dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Sim, o ruído branco ajuda a dormir ao mascarar os sons de fundo irritantes (como trânsito ou vizinhos) e ao fornecer um ambiente acústico constante que sinaliza ao cérebro para relaxar.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Qual é a diferença entre o ruído branco e o ruído rosa?</h3>
            <p className="mt-2 leading-7 text-white/70">O ruído branco contém todas as frequências com a mesma intensidade, soando como estática aguda. O ruído rosa enfatiza as frequências mais baixas, fazendo com que soe mais profundo e suave, como uma chuva constante.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Ruído marrom vs. ruído branco para dormir: qual é o melhor?</h3>
            <p className="mt-2 leading-7 text-white/70">Para muitos, o ruído marrom é melhor para dormir porque o seu zumbido profundo de baixa frequência é mais relaxante e menos áspero do que a estática de tom alto do ruído branco.</p>
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
                "name": "O ruído branco ajuda a dormir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, o ruído branco ajuda a dormir ao mascarar os sons de fundo irritantes (como trânsito ou vizinhos) e ao fornecer um ambiente acústico constante que sinaliza ao cérebro para relaxar."
                }
              },
              {
                "@type": "Question",
                "name": "Qual é a diferença entre o ruído branco e o ruído rosa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O ruído branco contém todas as frequências com a mesma intensidade, soando como estática aguda. O ruído rosa enfatiza as frequências mais baixas, fazendo com que soe mais profundo e suave, como uma chuva constante."
                }
              },
              {
                "@type": "Question",
                "name": "Ruído marrom vs. ruído branco para dormir: qual é o melhor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para muitos, o ruído marrom é melhor para dormir porque o seu zumbido profundo de baixa frequência é mais relaxante e menos áspero do que a estática de tom alto do ruído branco."
                }
              }
            ]
          })
        }}
      />
      
      <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 font-bold text-xl">CT</div>
        <div>
          <p className="font-semibold text-white">Escrito pela Equipe Calma</p>
          <p className="text-sm text-white/60">Defensores da higiene do sono dedicados a ajudar você a construir rotinas noturnas mais tranquilas e baseadas na ciência.</p>
        </div>
      </div>
    </ArticlePage>
  );
}
