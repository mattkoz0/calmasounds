import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "Por que o ruído branco ajuda a dormir? (2026) | Calma";
const articleDescription =
  "O ruído branco ajuda a dormir? Descubra como ele mascara distrações, melhora a qualidade do sono profundo e as diferenças para o ruído rosa.";
const articleUrl = "https://www.calmasounds.com/pt-BR/blog/white-noise-for-sleep";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "ruido branco para dormir",
    "por que o ruido branco ajuda a dormir",
    "ruido branco sono",
    "ruido branco para bebê",
    "melhor ruido branco para dormir",
    "calma blog",
  ],
  robots: {
    index: true,
    follow: true,
  },
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
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Por que o ruído branco ajuda a dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O ruído branco ajuda a dormir elevando a linha de base do som ambiente no seu quarto. Isso reduz o contraste entre o silêncio e os ruídos repentinos (como trânsito ou ronco), tornando menos provável que seu cérebro os registre como ameaças e o acorde."
      }
    },
    {
      "@type": "Question",
      "name": "O que é exatamente o ruído branco para dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O ruído branco é um som contínuo que contém todas as frequências audíveis em intensidade igual, semelhante à estática de TV ou a um ventilador. Cria um ambiente de áudio previsível que mascara interrupções."
      }
    },
    {
      "@type": "Question",
      "name": "É melhor o ruído branco ou o ruído rosa para dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muitos estudos sugerem que o ruído rosa (que soa como chuva constante) pode ser melhor para o sono profundo porque seu equilíbrio de frequência é mais suave para o ouvido humano. No entanto, o ruído branco é geralmente melhor para mascarar distrações muito agudas."
      }
    },
    {
      "@type": "Question",
      "name": "É seguro dormir com ruído branco todas as noites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, dormir com ruído branco todas as noites é geralmente seguro para adultos quando o volume fica abaixo de 60 dB (o nível de uma conversa tranquila). Coloque a fonte de som a pelo menos 2 metros da sua cabeça."
      }
    },
    {
      "@type": "Question",
      "name": "Você pode ficar viciado em dormir com ruído branco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você não fica fisicamente viciado, mas pode formar um forte hábito psicológico. Seu cérebro aprende a associar o som ao sono. Se você quiser parar de usá-lo, o melhor é diminuir gradualmente o volume ao longo de algumas semanas."
      }
    }
  ]
};

const relatedArticles = [
  {
    href: "/pt-BR/blog/rain-sounds-vs-white-noise",
    title: "Sons de Chuva vs Ruído Branco",
    description: "Compare as diferenças práticas e emocionais entre a chuva natural e a estática artificial.",
  },
  {
    href: "/pt-BR/blog/best-sounds-for-sleep",
    title: "Os Melhores Sons para Dormir",
    description: "Explore diferentes estilos de som para o sono, do ruído rosa às ondas do oceano.",
  },
];

export default function WhiteNoiseForSleepPagePTBR() {
  return (
    <ArticlePage
      slug="white-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/pt-BR/white-noise-app"
      topLinkLabel="Explorar app de ruído branco"
      title="Por que o ruído branco ajuda a dormir? A ciência explicada"
      intro="O ruído branco para dormir tornou-se um fenômeno global. De adultos estressados vivendo em cidades movimentadas a pais tentando fazer seus recém-nascidos dormirem a noite toda, milhões dependem desse 'chiado' constante para adormecer. Mas como funciona realmente? Melhora a qualidade do seu sono profundo ou é apenas uma ferramenta para bloquear o ronco do parceiro?"
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Baixar App Calma Grátis"
      secondaryCtaHref="/pt-BR/white-noise-app"
      secondaryCtaLabel="Explorar player de ruído"
      tableOfContents={[
        { id: "how-it-works", title: "Como o mascaramento de som melhora o sono" },
        { id: "what-is-it", title: "O que é exatamente o ruído branco?" },
        { id: "comparison-table", title: "Branco vs Rosa vs Marrom" },
        { id: "best-practices", title: "Como usar com segurança" },
        { id: "faq", title: "Perguntas Frequentes (FAQ)" },
      ]}
      relatedArticles={relatedArticles}
    >
      <ArticleSection id="how-it-works" title="Como o mascaramento de som melhora o sono">
        <p className="mt-4 leading-8 text-white/70">
          O ruído branco não bloqueia os sons apenas por ser alto; ele funciona através de um fenômeno chamado <strong>mascaramento de som</strong>. Quando você está dormindo, seu cérebro continua a processar sons para alertá-lo do perigo. O que o acorda não é necessariamente o volume de um ruído (como uma porta batendo), mas a mudança repentina do silêncio para o ruído.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Como o ruído branco contém todas as frequências, ele essencialmente preenche o silêncio. Ele eleva a linha de base do ruído de fundo para que sons repentinos se misturem e não acionem a resposta de \"despertar\" do cérebro. Isso ajuda você a permanecer nos estágios mais profundos do sono.
        </p>
      </ArticleSection>

      <ArticleSection id="what-is-it" title="O que é exatamente o ruído branco?">
        <p className="mt-4 leading-8 text-white/70">
          Na física, o ruído branco é um som que contém todas as frequências dentro do alcance da audição humana (entre 20 e 20.000 hertz) tocadas em uma intensidade igual. Porque contém todas as frequências simultaneamente, soa como um chiado, semelhante à estática da televisão ou um ventilador.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Verdadeiro Ruído Branco" 
          description="Um som consistente que bloqueia ruídos agudos e repentinos."
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="comparison-table" title="Ruído Branco vs Rosa vs Marrom para Dormir">
        <p className="mt-4 leading-8 text-white/70">
          Nem todo \"ruído branco\" é realmente branco. Na engenharia de áudio, os sons contínuos são categorizados em cores com base em seu equilíbrio de frequência.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-slate-800/50 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Cor do Ruído</th>
                <th className="px-6 py-4 font-semibold">Foco da Frequência</th>
                <th className="px-6 py-4 font-semibold">Melhor usado para</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-300">Ruído Branco</td>
                <td className="px-6 py-4">Igual em todas as frequências.</td>
                <td className="px-6 py-4">Mascarar ruídos imprevisíveis (ronco, cães latindo).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-pink-300">Ruído Rosa</td>
                <td className="px-6 py-4">Frequências mais baixas (como chuva).</td>
                <td className="px-6 py-4">Melhorar o sono profundo e a retenção de memória.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-orange-300">Ruído Marrom</td>
                <td className="px-6 py-4">Apenas frequências mais profundas (como um trovão distante).</td>
                <td className="px-6 py-4">Criar uma atmosfera segura; ótimo para TDAH.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="best-practices" title="Como usar o ruído branco com segurança">
        <p className="mt-4 leading-8 text-white/70">
          Embora seja incrivelmente útil, é importante usá-lo corretamente para evitar a fadiga auditiva:
        </p>
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li><strong>Mantenha o volume seguro:</strong> O som deve atuar como um zumbido de fundo. Mantenha o volume em torno de 50 a 60 decibéis (o volume de uma conversa tranquila).</li>
          <li><strong>Atenção à distância:</strong> Nunca coloque um telefone diretamente ao lado da sua cabeça. Mantenha-o a pelo menos 2 metros de distância.</li>
          <li><strong>Experimente com \"cores\":</strong> Se o ruído branco parecer muito agudo, tente o Ruído Rosa ou o Ruído Marrom.</li>
        </ul>
        <div className="mt-12 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
          >
            <Image
              src="/google-play-badge.png"
              alt="Baixar App Calma Grátis"
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
            <h3 className="font-semibold text-lg text-emerald-400">Por que o ruído branco ajuda a dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Ele eleva o som ambiente no quarto, reduzindo o contraste entre o silêncio e ruídos repentinos, evitando que seu cérebro acorde com distrações.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">O que é exatamente o ruído branco para dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">É um som contínuo contendo todas as frequências audíveis em intensidade igual, criando um ambiente previsível.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">É melhor o ruído branco ou o ruído rosa para dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">O ruído rosa (como a chuva) é frequentemente melhor para o sono profundo. O ruído branco é melhor para bloquear sons agudos e altos, como ronco.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">É seguro dormir com ruído branco todas as noites?</h3>
            <p className="mt-2 leading-7 text-white/70">Sim, é seguro para adultos se o volume for mantido abaixo de 60 dB e o telefone ficar a pelo menos 2 metros da sua cabeça.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Você pode ficar viciado em dormir com ruído branco?</h3>
            <p className="mt-2 leading-7 text-white/70">Não fisicamente, mas psicologicamente. Para parar, diminua o volume gradualmente ao longo de algumas semanas em vez de parar abruptamente.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
