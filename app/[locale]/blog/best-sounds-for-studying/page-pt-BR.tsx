import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

export const metadata: Metadata = {
  title: "Melhores sons para estudar e focar (Guia 2026) | Blog do Calma",
  description:
    "Descubra os melhores sons para estudar, do ruído marrom para TDAH a faixas ambientais de lo-fi. Aumente sua concentração e foco profundo.",
  keywords: [
    "melhores sons para estudar",
    "sons para estudar",
    "melhores sons para foco",
    "sons de concentracao",
    "sons de foco para estudar",
    "ruido marrom para estudar",
    "ruido branco para foco",
    "blog do calma",
    "app para dormir melhor",
    "promover sono profundo",
    "ajuda para adormecer",
    "sons calmantes noite",
    "melhorar qualidade do sono",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog/best-sounds-for-studying",
  },
  openGraph: {
    title: "Melhores sons para estudar e focar (Guia 2026) | Blog do Calma",
    description:
      "Descubra os melhores sons para estudar, do ruído marrom para TDAH a faixas ambientais de lo-fi. Aumente sua concentração e foco profundo.",
    url: "https://www.calmasounds.com/pt-BR/blog/best-sounds-for-studying",
    siteName: "Calma",
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores sons para estudar e focar (Guia 2026)",
    description:
      "Descubra os melhores sons para estudar, do ruído marrom para TDAH a faixas ambientais de lo-fi.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Os melhores sons para estudar e focar: um guia apoiado pela ciência",
  description:
    "Descubra os melhores sons para estudar, do ruído marrom para TDAH a faixas ambientais de lo-fi. Aumente sua concentração e foco profundo.",
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/pt-BR/blog/best-sounds-for-studying",
  datePublished: "2026-03-25",
  dateModified: new Date().toISOString().split('T')[0],
};

export default function BestSoundsForStudyingPage() {
  return (
    <ArticlePage
      slug="best-sounds-for-studying"
      jsonLd={articleJsonLd}
      topLinkHref="/pt-BR/focus-sounds-app"
      topLinkLabel="Explorar aplicativo de foco"
      title="Os melhores sons para estudar, concentrar e trabalho profundo"
      intro="Seja estudando para uma prova final, escrevendo uma monografia ou simplesmente tentando realizar suas tarefas diárias em um escritório barulhento, encontrar os melhores sons para estudar pode melhorar drasticamente sua concentração. Enquanto algumas pessoas preferem música clássica, outras precisam do zumbido profundo do ruído marrom ou do som da chuva para entrar no estado de fluxo ('flow'). O segredo não é apenas o que soa agradável, mas o que mantém seu cérebro estimulado na medida certa, sem distraí-lo."
      ctaHref="/pt-BR/focus-sounds-app"
      ctaLabel="Criar seu mix de estudo"
      secondaryCtaHref="/pt-BR/sound-mixer-app"
      secondaryCtaLabel="Explorar o mixer de som"
      tableOfContents={[
        { id: "por-que-som-ajuda", title: "Por que os sons nos ajudam a focar?" },
        { id: "ruido-marrom", title: "Ruído Marrom: O superpoder do foco" },
        { id: "ruido-branco", title: "Ruído Branco: Bloqueando distrações" },
        { id: "natureza-ambient", title: "Paisagens sonoras da natureza e ambientais" },
        { id: "o-que-evitar", title: "Quais sons você deve evitar?" },
        { id: "faq", title: "Perguntas Frecuentes (FAQ)" },
      ]}
      relatedArticles={[
        {
          href: "/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
          title: "Cores do ruído explicadas",
          description:
            "Uma análise profunda do ruído branco, rosa e marrom e como eles afetam o foco.",
        },
        {
          href: "/pt-BR/sound-mixer-app",
          title: "Aplicativo Sound Mixer",
          description:
            "Crie sua própria mixagem personalizada de sons para estudar, focar e trabalhar no dia a dia.",
        },
      ]}
    >
      <ArticleSection id="por-que-som-ajuda" title="Por que os sons nos ajudam a focar?">
        <p className="mt-4 leading-8 text-white/70">
          Em um quarto completamente silencioso, qualquer pequeno ruído — uma cadeira rangendo, um carro passando, uma tosse no quarto ao lado — torna-se uma distração. Nossos cérebros são programados para perceber mudanças repentinas no ambiente acústico como potenciais ameaças ou pontos de interesse, nos tirando constantemente do estado de foco profundo ('deep work' ou 'flow state').
        </p>
        <p className="mt-4 leading-8 text-white/70">
          O áudio de fundo ajuda ao <strong>mascarar</strong> essas interrupções repentinas. Ao fornecer uma camada contínua e previsível de som, o 'delta' (diferença) entre o silêncio e um ruído repentino é reduzido, o que significa que seu cérebro pode ignorá-lo e permanecer concentrado no livro ou na tela à sua frente.
        </p>
      </ArticleSection>

      <ArticleSection id="ruido-marrom" title="Ruído Marrom: O superpoder do foco (especialmente para TDAH)">
        <p className="mt-4 leading-8 text-white/70">
          Nos últimos anos, o Ruído Marrom viralizou em espaços de estudo e comunidades neurodivergentes. Ao contrário do ruído branco, que soa como estática estridente, o ruído marrom remove as frequências altas, deixando um som profundo e grave, semelhante a uma cachoeira distante, trovões ou o interior da cabine de um avião.
        </p>
        <AudioPlayer 
          src="/brown_noise.m4a" 
          title="Amostra de Ruído Marrom" 
          description="Um zumbido profundo e de baixa frequência que cria uma camada de som acolhedora."
          colorClass="bg-orange-500/20 text-orange-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          Muitos estudantes, especialmente aqueles com TDAH, relatam que o ruído marrom fornece estímulo sensorial suficiente para satisfazer a necessidade de estímulo do cérebro sem ativar os centros de linguagem ou analíticos. Isso permite acalmar os pensamentos acelerados, abrindo caminho para um estudo intensivo.
        </p>
      </ArticleSection>

      <ArticleSection id="ruido-branco" title="Ruído Branco: Bloqueando distrações">
        <p className="mt-4 leading-8 text-white/70">
          Se você está estudando em um café movimentado, em uma biblioteca barulhenta ou em um quarto de república caótico, o ruído branco é seu melhor amigo. Como contém todas as frequências audíveis em igual intensidade, ele age como uma barreira sonora, bloqueando a fala humana, o tilintar de pratos e outros ruídos agudos erráticos.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Amostra de Ruído Branco" 
          description="Som estático constante perfeito para mascarar conversas de café ou ruídos de república."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          Embora possa soar um pouco áspero no início, seu cérebro se acostuma rapidamente. Em poucos minutos, a estática desaparece em segundo plano, levando consigo todas as distrações do ambiente.
        </p>
      </ArticleSection>

      <ArticleSection id="natureza-ambient" title="Paisagens sonoras da natureza e ambientais">
        <p className="mt-4 leading-8 text-white/70">
          Se a estática mecânica parecer muito artificial, os sons orgânicos da natureza são uma excelente alternativa. O ritmo constante da chuva na janela ou o murmúrio suave de um rio podem fornecer os mesmos benefícios de mascaramento, ao mesmo tempo que trazem conforto emocional e reduzem o estresse.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Chuva Constante" 
          description="Chuva relaxante e rítmica para reduzir a ansiedade nos estudos."
          colorClass="bg-blue-500/20 text-blue-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          Os seus sons da natureza são especialmente eficazes se você estiver sentindo ansiedade por provas ou estresse nos estudos. Eles diminuem os níveis de cortisol e ajudam você a associar a sessão de estudo com um ambiente aconchegante e seguro, em vez de um ambiente sob pressão.
        </p>
      </ArticleSection>

      <ArticleSection id="o-que-evitar" title="Quais sons você deve evitar ao estudar?">
        <p className="mt-4 leading-8 text-white/70">
          Nem todo áudio é criado da mesma forma quando se trata de concentração. Se o seu objetivo é um foco profundo e ininterrompido, você deve evitar:
        </p>
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li><strong>Músicas com letra:</strong> Vozes humanas atraem nossa atenção naturalmente porque nossos cérebros são programados para processar linguagem. Ouvir letras ativa os centros de linguagem do seu cérebro, competindo diretamente com tarefas de leitura ou escrita.</li>
          <li><strong>Música clássica complexa:</strong> Embora o \"Efeito Mozart\" seja famoso, peças clássicas muito dinâmicas, com mudanças bruscas de volume e melodias complexas, podem distrair bastante. Se preferir música, opte por faixas ambientais minimalistas e repetitivas ou \"Lo-Fi beats\".</li>
          <li><strong>Podcasts ou rádio de entrevistas:</strong> Semelhante às músicas com letra, a palavra falada exige audição ativa, deixando menos capacidade cognitiva para o seu trabalho real.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="faq" title="Perguntas Frequentes (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">É melhor estudar em silêncio ou com som?</h3>
            <p className="mt-2 leading-7 text-white/70">Depende do ambiente e da pessoa. Se você tem um quarto perfeitamente isolado acusticamente, o silêncio pode funcionar bem. No entanto, na maioria dos cenários reais, o som ambiente ou o ruído branco é melhor porque evita que ruídos repentinos quebrem sua concentração.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Por que o ruído marrom ajuda no foco de pessoas com TDAH?</h3>
            <p className="mt-2 leading-7 text-white/70">Pessoas com TDAH frequentemente têm cérebros subestimulados que buscam distrações. O ruído marrom fornece uma estimulação constante, de baixa frequência e não intrusiva que satisfaz o cérebro, permitindo que ele se concentre na tarefa principal sem se dispersar.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">O som de chuva pode ajudar nos estudos?</h3>
            <p className="mt-2 leading-7 text-white/70">Sim, os sons de chuva são excelentes para estudar. Eles fornecem um ritmo constante que mascara o ruído de fundo ao mesmo tempo que promove o relaxamento, o que é especialmente útil durante períodos estressantes de exames.</p>
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
                "name": "É melhor estudar em silêncio ou com som?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depende do ambiente e da pessoa. Se você tem um quarto perfeitamente isolado acusticamente, o silêncio pode funcionar bem. Na maioria dos cenários reais, o som ambiente ou o ruído branco é melhor porque evita que ruídos repentinos quebrem sua concentração."
                }
              },
              {
                "@type": "Question",
                "name": "Por que o ruído marrom ajuda no foco de pessoas com TDAH?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pessoas com TDAH frequentemente têm cérebros subestimulados que buscam distrações. O ruído marrom fornece uma estimulação constante, de baixa frequência e não intrusiva que satisfaz o cérebro, permitindo que ele se concentre na tarefa principal sem se dispersar."
                }
              },
              {
                "@type": "Question",
                "name": "O som de chuva pode ajudar nos estudos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, os sons de chuva são excelentes para estudar. Eles fornecem um ritmo constante que mascara o ruído de fundo ao mesmo tempo que promove o relaxamento, o que é especialmente útil durante períodos estressantes de exames."
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
          <p className="text-sm text-white/60">Entusiastas da produtividade e designers de som dedicados a ajudar você a encontrar o seu estado de fluxo ('flow').</p>
        </div>
      </div>
    </ArticlePage>
  );
}
