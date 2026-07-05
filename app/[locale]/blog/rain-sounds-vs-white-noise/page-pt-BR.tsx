import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

export const metadata: Metadata = {
  title: "A chuva é ruído branco? A resposta surpreendente da ciência | Calma",
  description:
    "Não — a chuva NÃO é ruído branco. A verdade surpreendente: a chuva é ruído rosa, e pode ajudar a dormir melhor. Amostras de áudio grátis.",
  keywords: [
    "chuva é ruído branco",
    "som de chuva ruído branco",
    "chuva ou ruído branco",
    "sons de chuva para dormir",
    "ruído rosa chuva",
    "calma blog",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog/rain-sounds-vs-white-noise",
  },
  openGraph: {
    title: "A chuva é ruído branco? A resposta surpreendente",
    description:
      "Não — a chuva NÃO é ruído branco. É ruído rosa. Amostras de áudio grátis.",
    url: "https://www.calmasounds.com/pt-BR/blog/rain-sounds-vs-white-noise",
    siteName: "Calma",
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "A chuva é ruído branco? A ciência responde",
    description:
      "Não — a chuva NÃO é ruído branco. É ruído rosa e ajuda a dormir melhor.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "A chuva é considerada ruído branco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tecnicamente, não. Os sons da chuva são geralmente considerados ruído rosa. Enquanto o ruído branco tem energia igual em todas as frequências (soando como um chiado), a chuva tem mais energia nas frequências mais baixas, tornando-a mais profunda e relaxante."
      }
    },
    {
      "@type": "Question",
      "name": "A chuva é ruído branco ou ruído rosa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A chuva natural é classificada como ruído rosa. O ruído rosa contém todas as frequências como o ruído branco, mas amplifica as frequências baixas e profundas e suaviza os tons altos."
      }
    },
    {
      "@type": "Question",
      "name": "A chuva pode ser considerada ruído branco para dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, na conversa do dia a dia, o termo 'ruído branco' é usado para descrever qualquer som de fundo constante. Embora cientificamente incorreto, a chuva serve para mascarar ruídos indesejados."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é melhor para dormir: som de chuva ou ruído branco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende da sua preferência. A chuva (ruído rosa) é melhor para relaxar, enquanto o ruído branco é melhor para bloquear agressivamente ruídos agudos, como roncos ou trânsito."
      }
    },
    {
      "@type": "Question",
      "name": "Por que os sons de chuva ajudam a dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A chuva cria um ambiente acústico não ameaçador. Esse som contínuo mascara ruídos repentinos e acalma naturalmente o sistema nervoso, sinalizando segurança ao cérebro."
      }
    }
  ]
};

export default function RainSoundsVsWhiteNoisePagePTBR() {
  return (
    <ArticlePage
      slug="rain-sounds-vs-white-noise"
      jsonLd={articleJsonLd}
      title="A chuva é considerada ruído branco? (E qual é melhor para dormir)"
      intro="Se você já usou o som de uma tempestade para adormecer, deve ter se perguntado: a chuva é considerada ruído branco? Ambos são opções incrivelmente populares, mas serveem a propósitos neurológicos diferentes. Neste guia, responderemos à diferença científica entre os dois e qual você deve escolher para descansar melhor."
      topLinkHref="/pt-BR/nature-sounds-app"
      topLinkLabel="Explorar app de sons da natureza"
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Baixar App Calma Grátis"
      secondaryCtaHref="/pt-BR/white-noise-app"
      secondaryCtaLabel="Explorar app de ruído branco"
      tableOfContents={[
        { id: "is-rain-white-noise", title: "A chuva é considerada ruído branco?" },
        { id: "what-is-white-noise", title: "O que é o verdadeiro ruído branco?" },
        { id: "when-to-choose-rain", title: "Quando escolher sons de chuva" },
        { id: "when-to-choose-white-noise", title: "Quando escolher o ruído branco" },
        { id: "verdict", title: "Qual é melhor para dormir?" },
        { id: "faq", title: "Perguntas Frequentes (FAQ)" },
      ]}
      relatedArticles={[
        {
          href: "/pt-BR/blog/white-noise-for-sleep",
          title: "Ruído Branco para Dormir",
          description: "Como o ruído branco bloqueia distrações.",
        },
        {
          href: "/pt-BR/blog/best-sounds-for-sleep",
          title: "Os Melhores Sons para Dormir",
          description: "O guia definitivo de áudio para a hora de dormir.",
        },
      ]}
    >
      <ArticleSection id="is-rain-white-noise" title="A chuva é considerada ruído branco? (A resposta científica)">
        <p className="mt-4 leading-8 text-white/70">
          A resposta curta é: <strong>Não, a chuva tecnicamente não é ruído branco.</strong> Sons de chuva natural são considerados <strong>ruído rosa</strong>. 
        </p>
        <p className="mt-4 leading-8 text-white/70">
          O ruído rosa contém todas as frequências, mas coloca mais energia nas frequências baixas e profundas. Isso faz com que a chuva soe muito mais suave e orgânica para o ouvido humano.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Chuva Constante (Ruído Rosa)" 
          description="Note o som profundo e atmosférico que promove conforto emocional."
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="what-is-white-noise" title="O que é o verdadeiro ruído branco?">
        <p className="mt-4 leading-8 text-white/70">
          Tecnicamente, ele contém <strong>todas as frequências audíveis reproduzidas com intensidade igual</strong>. Como as frequências altas são tão altas quanto as baixas, ele soa como a estática de uma televisão ou um ventilador.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Verdadeiro Ruído Branco" 
          description="Um chiado contínuo que bloqueia agressivamente as distrações."
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="when-to-choose-rain" title="Quando os sons da chuva são a melhor escolha">
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li>Você deseja uma atmosfera de sono aconchegante e natural.</li>
          <li>Você sofre de ansiedade e precisa de um som que indique \"segurança\".</li>
          <li>Você acha o chiado agudo do verdadeiro ruído branco irritante.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="when-to-choose-white-noise" title="Quando o ruído branco é a melhor escolha">
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li>Você é altamente sensível a ruídos externos (ex: sirenes, cães).</li>
          <li>Você dorme ao lado de um parceiro que ronca.</li>
          <li>Você precisa de um som de fundo neutro e constante.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="verdict" title="Qual é melhor para dormir?">
        <p className="mt-4 leading-8 text-white/70">
          A melhor solução? <strong>Misture-os.</strong> Usando um aplicativo gratuito como o <strong>Calma</strong>, você pode sobrepor uma base de ruído branco com uma forte tempestade para obter o cobertor acústico definitivo.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
            aria-label="Baixar App Calma"
          >
            <Image
              src="/google-play-badge.png"
              alt="Disponível no Google Play"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Perguntas Frequentes (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">A chuva é considerada ruído branco?</h3>
            <p className="mt-2 leading-7 text-white/70">Tecnicamente, não. Os sons da chuva são geralmente considerados ruído rosa e não ruído branco.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">A chuva é ruído branco ou ruído rosa?</h3>
            <p className="mt-2 leading-7 text-white/70">A chuva natural é classificada como ruído rosa, pois amplifica as frequências baixas para soar mais natural.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">A chuva pode ser considerada ruído branco para dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Sim, no dia a dia as pessoas chamam de 'ruído branco' qualquer som de fundo, incluindo a chuva.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Qual é melhor para dormir: som de chuva ou ruído branco?</h3>
            <p className="mt-2 leading-7 text-white/70">A chuva é melhor para relaxar, enquanto o ruído branco é melhor para bloquear ruídos agudos.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Por que os sons de chuva ajudam a dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Esse som contínuo mascara ruídos e acalma naturalmente o sistema nervoso, sinalizando segurança.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
