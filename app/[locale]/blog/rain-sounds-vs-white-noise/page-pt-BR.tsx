import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

const articleTitle = "Sons de chuva vs. Ruído branco para dormir | Blog do Calma";
const articleDescription =
  "Compare sons de chuva e ruído branco para descobrir o que funciona melhor para o sono, relaxamento e criação de um ambiente tranquilo.";
const articleUrl = "https://www.calmasounds.com/pt-BR/blog/rain-sounds-vs-white-noise";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "rain sounds vs white noise",
    "sons de chuva para dormir",
    "ruido branco para dormir",
    "melhores sons para dormir",
    "comparacao de sons de sono",
    "blog do calma",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "Calma",
    locale: "pt_BR",
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
  "@type": "Article",
  headline: "Sons de chuva vs. Ruído branco: qual é o melhor para dormir?",
  description: articleDescription,
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: articleUrl,
  datePublished: "2026-03-25",
  dateModified: new Date().toISOString().split('T')[0],
};

const relatedArticles = [
  {
    href: "/pt-BR/blog/white-noise-for-sleep",
    title: "Ruído branco para dormir",
    description:
      "Uma análise detalhada de como o ruído branco bloqueia distrações para uma melhor noite de descanso.",
  },
  {
    href: "/pt-BR/blog/best-sounds-for-sleep",
    title: "Melhores sons para dormir",
    description:
      "Descubra o guia definitivo dos melhores áudios apoiados pela ciência para a hora de dormir.",
  },
];

export default function RainSoundsVsWhiteNoisePage() {
  return (
    <ArticlePage
      slug="rain-sounds-vs-white-noise"
      jsonLd={articleJsonLd}
      title="Sons de chuva vs ruído branco para dormir: qual deles é o melhor?"
      intro="Tanto os sons de chuva quanto o ruído branco são escolhas incrivelmente populares para a hora de dormir, mas eles servem a propósitos neurológicos e emocionais diferentes. Um deles parece orgânico, suave e acolhedor, enquanto o outro cria uma “manta de áudio” estável e consistente que pode mascarar perfeitamente os ruídos externos. A melhor escolha depende inteiramente do tipo de ambiente de sono que ajuda o seu sistema nervoso a relaxar."
      topLinkHref="/pt-BR/sleep-sounds-app"
      topLinkLabel="Explorar app de sono"
      ctaHref="/pt-BR/sleep-sounds-app"
      ctaLabel="Explorar app de sons de sono"
      secondaryCtaHref="/pt-BR/white-noise-app"
      secondaryCtaLabel="Explorar app de ruído branco"
      tableOfContents={[
        { id: "o-que-sao-sons-de-chuva", title: "O que são sons de chuva?" },
        { id: "o-que-e-ruido-branco", title: "O que é ruído branco?" },
        { id: "quando-escolher-chuva", title: "Quando os sons de chuva são melhores" },
        { id: "quando-escolher-ruido-branco", title: "Quando o ruído branco é melhor" },
        { id: "veredicto", title: "Qual deles é o melhor para o sono em geral?" },
        { id: "faq", title: "Perguntas Frequentes (FAQ)" },
      ]}
      relatedArticles={relatedArticles}
    >
      <ArticleSection id="o-que-sao-sons-de-chuva" title="O que são sons de chuva?">
        <p className="mt-4 leading-8 text-white/70">
          Os sons de chuva são orgânicos, suaves e ambientais. Para a maioria das pessoas, eles criam uma associação emocional e aconchegante com o descanso, conforto e segurança — muitas vezes remetendo a memórias de infância de estar protegido dentro de casa durante uma tempestade.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Chuva Constante" 
          description="Som natural e atmosférico que promove conforto emocional."
          colorClass="bg-blue-500/20 text-blue-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          Isso torna os sons de chuva especialmente atraentes se o seu objetivo não for apenas bloquear o ruído, mas acalmar ativamente o seu sistema nervoso. Os sons de chuva costumam funcionar bem para pessoas que desejam um ritual noturno mais suave e um tom emocional mais natural em torno do sono.
        </p>
      </ArticleSection>

      <ArticleSection id="o-que-e-ruido-branco" title="O que é ruído branco?">
        <p className="mt-4 leading-8 text-white/70">
          O ruído branco é mais neutro e constante. Tecnicamente falando, contém todas as frequências audíveis tocadas em uma intensidade igual. Em vez de soar como um ambiente real, ele cria um „chiado“ constante de fundo que atua como uma barreira acústica.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Ruído Branco" 
          description="Um som contínuo de espectro completo que bloqueia distrações."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          Se ruídos repentinos e aleatórios — como trânsito, parceiros roncando ou vizinhos barulhentos — interrompem frequentemente sua sensação de calma, o ruído branco é cientificamente comprovado como mais eficaz do que sons ambientais mais suaves para „mascarar“ essas perturbações.
        </p>
      </ArticleSection>

      <ArticleSection id="quando-escolher-chuva" title="Quando os sons de chuva podem ser a melhor escolha">
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li>Você deseja uma atmosfera de sono mais emocional, aconchegante e natural.</li>
          <li>Você sofre de ansiedade e precisa de um som que sinalize „segurança“ para o seu cérebro.</li>
          <li>Sua rotina antes de dormir se concentra em desacelerar suavemente.</li>
          <li>Você prefere um áudio que pareça menos técnico e mais imersivo.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="quando-escolher-ruido-branco" title="Quando o ruído branco pode ser a melhor escolha">
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li>Você quer um som de fundo estável e neutro que não mude.</li>
          <li>Você é altamente sensível a ruídos externos imprevisíveis (por exemplo, morando na cidade).</li>
          <li>Você prefere pura funcionalidade e mascaramento de som em vez de atmosfera.</li>
          <li>Você está tentando ajudar um bebê a dormir (recém-nascidos respondem incrivelmente bem ao chiado constante do ruído branco).</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="veredicto" title="Qual deles é o melhor para o sono em geral?">
        <p className="mt-4 leading-8 text-white/70">
          Não há um vencedor universal. Os sons de chuva podem ser melhores para o relaxamento e conforto emocional, enquanto o ruído branco pode ser melhor para consistência e mascaramento de distrações. A resposta real é pessoal: o melhor som de sono é aquele que ajuda você a se sentir seguro, calmo e tranquilo o suficiente para se desligar do dia.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Em muitos casos, uma mixagem personalizada funciona melhor. Com o <a href="/pt-BR/sleep-sounds-app" className="text-emerald-400 hover:underline">aplicativo Calma</a>, você pode sobrepor uma base estável de ruído branco com uma cobertura suave de chuva, obtendo o melhor dos dois mundos.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="Perguntas Frequentes (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">A chuva é considerada ruído branco?</h3>
            <p className="mt-2 leading-7 text-white/70">Rigorosamente falando, a chuva não é ruído branco puro. O ruído branco puro contém todas as frequências audíveis em intensidade igual. Os sons de chuva naturalmente têm mais energia nas frequências mais baixas, lo que os torna tecnicamente mais próximos do «ruído rosa». No entanto, na conversa cotidiana, as pessoas costumam usar o termo «ruído branco» para descrever qualquer som de fundo constante e calmante.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">O som de chuva é ruído branco?</h3>
            <p className="mt-2 leading-7 text-white/70">Não, o som de chuva é tecnicamente classificado como ruído rosa e não ruído branco. Como a chuva tem um estrondo mais profundo e atmosférico com menos estática aguda, ela parece mais suave para o ouvido humano. É por isso que muitas pessoas preferem o som da chuva ao ruído branco artificial gerado por aparelhos.</p>
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
                "name": "A chuva é considerada ruído branco?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rigorosamente falando, a chuva não é ruído branco puro. O ruído branco puro contém todas as frequências audíveis em intensidade igual. Os sons de chuva naturalmente têm mais energia nas frequências mais baixas, o que os torna tecnicamente mais próximos do ruído rosa."
                }
              },
              {
                "@type": "Question",
                "name": "O som de chuva é ruído branco?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não, o som de chuva é tecnicamente classificado como ruído rosa e não ruído branco. Como a chuva tem um estrondo mais profundo e atmosférico com menos estática aguda, ela parece mais suave para o ouvido humano."
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
