import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

const articleTitle = "Ruido branco para dormir (Guia 2026) | Blog do Calma";
const articleDescription =
  "Saiba como o ruído branco para dormir bloqueia distrações, melhora o sono profundo e ajuda bebês a dormirem mais rápido.";
const articleUrl = "https://www.calmasounds.com/pt-BR/blog/white-noise-for-sleep";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "ruído branco para dormir",
    "ruído branco sono",
    "ruído branco noite",
    "sons de sono ruído branco",
    "ruído branco ajuda a dormir",
    "blog do calma",
    "gerador de ruído branco",
    "dormir sem interrupções",
    "alívio zumbido",
    "bloquear ruídos ao dormir",
    "ruído branco para bebês",
    "app para dormir melhor",
    "promover sono profundo",
    "ajuda para adormecer",
    "sons calmantes noite",
    "melhorar qualidade do sono",
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
  "@type": "Article",
  headline: "Ruído branco para dormir: a ciência do mascaramento de som",
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
    href: "/pt-BR/blog/rain-sounds-vs-white-noise",
    title: "Som de chuva vs. Ruído branco",
    description:
      "Compare a sensação emocional e as diferenças práticas entre a chuva natural e a estática artificial.",
  },
  {
    href: "/pt-BR/blog/best-sounds-for-sleep",
    title: "Melhores sons para dormir",
    description:
      "Explore diferentes estilos de sons de sono, do ruído rosa a ondas do mar, e qual pode funcionar melhor para você.",
  },
];

export default function WhiteNoiseForSleepPage() {
  return (
    <ArticlePage
      slug="white-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/pt-BR/white-noise-app"
      topLinkLabel="Explorar app de ruído branco"
      title="Ruído branco para dormir: quando ele realmente pode ajudar?"
      intro="O ruído branco para dormir tornou-se um fenômeno global. De adultos estressados vivendo em cidades barulhentas a pais tentando fazer com que seus recém-nascidos durmam a noite toda, milhões de pessoas confiam naquele chiado estático constante para adormecer. Mas como isso funciona de verdade? Melhora a qualidade do seu sono profundo ou é apenas uma ferramenta para abafar o ronco do parceiro?"
      ctaHref="/pt-BR/white-noise-app"
      ctaLabel="Ouvir ruído branco"
      secondaryCtaHref="/pt-BR/blog/rain-sounds-vs-white-noise"
      secondaryCtaLabel="Ler chuva vs ruído branco"
      tableOfContents={[
        { id: "o-que-e", title: "O que é exatamente o ruído branco?" },
        { id: "como-funciona", title: "Como o mascaramento de som melhora o sono" },
        { id: "para-bebes", title: "Por que os bebês adoram o ruído branco" },
        { id: "boas-praticas", title: "Como usá-lo com segurança" },
        { id: "faq", title: "Perguntas Frequentes (FAQ)" },
      ]}
      relatedArticles={relatedArticles}
    >
      <ArticleSection id="o-que-e" title="O que é exatamente o ruído branco?">
        <p className="mt-4 leading-8 text-white/70">
          Na física, o ruído branco é um som que contém todas as frequências dentro da faixa de audição humana (entre 20 hertz e 20.000 hertz) tocadas em uma intensidade igual. Como contém todas as frequências simultaneamente, soa como um chiado constante, semelhante à estática de uma televisão fora do canal, a um rádio dessintonizado ou ao zumbido de um ventilador.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Ruído Branco Puro" 
          description="Um som consistente de espectro completo."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          O termo „branco“ vem da luz branca, que é criada quando todas as cores do espectro visual são combinadas. Da mesma forma, o ruído branco é uma combinação de todas as „cores“ acústicas.
        </p>
      </ArticleSection>

      <ArticleSection id="como-funciona" title="Como o mascaramento de som melhora o sono">
        <p className="mt-4 leading-8 text-white/70">
          O ruído branco não apenas bloqueia os sons por ser alto; ele funciona por meio de um fenômeno chamado <strong>mascaramento de som</strong>. Quando você está dormindo, seu cérebro continua processando sons para alertá-lo sobre perigos. O que acorda você não é necessariamente o volume de um ruído (como uma porta batendo), mas a mudança repentina do silêncio para o barulho.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Como o ruído branco contém todas as frequências, ele basicamente preenche o silêncio. Ele eleva a linha de base do ruído de fundo para que sons repentinos — como trânsito, um cachorro latindo ou um parceiro roncando — se misturem e não ativem a resposta de „despertar“ do seu cérebro. Isso ajuda você a permanecer nas fases mais profundas e restauradoras do sono.
        </p>
      </ArticleSection>

      <ArticleSection id="para-bebes" title="Por que os bebês adoram o ruído branco">
        <p className="mt-4 leading-8 text-white/70">
          Se você já tentou fazer um recém-nascido chorando dormir, provavelmente conhece o poder de um som alto de «shhhh». O ruído branco é incrivelmente eficaz para bebês porque imita o ambiente acústico do útero materno.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Dentro do útero, o bebê ouve o fluxo sanguíneo constante e barulhento da mãe, o que na verdade é muito semelhante a um ruído branco ou marrom pesado de baixa frequência. Tocar ruído branco no quarto do bebê ativa um reflexo calmante, sinalizando para o bebê que ele está em um ambiente seguro e familiar.
        </p>
      </ArticleSection>

      <ArticleSection id="boas-praticas" title="Como usar o ruído branco com segurança">
        <p className="mt-4 leading-8 text-white/70">
          Embora o ruído branco seja incrivelmente útil, é importante usá-lo corretamente para evitar fadiga auditiva ou dependência:
        </p>
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li><strong>Mantenha o volume seguro:</strong> O som deve agir como um zumbido de fundo, não como um show. Mantenha o volume em torno de 50-60 decibéis (aproximadamente o volume de uma conversa silenciosa ou de um chuveiro aberto).</li>
          <li><strong>Atenção à distância:</strong> Nunca coloque um telefone ou aparelho de ruído branco diretamente ao lado da sua cabeça (ou da do seu bebê). Mantenha-o a pelo menos 2 metros de distância, de preferência do outro lado do quarto.</li>
          <li><strong>Experimente com outras „cores“:</strong> Se o ruído branco puro parecer muito agudo ou sibilante para você, experimente o Ruído Rosa (que enfatiza frequências mais baixas como a chuva) ou o Ruído Marrom (que soa como uma cachoeira profunda e estrondosa).</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="faq" title="Perguntas Frequentes (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Dormir com ruído branco pode viciar?</h3>
            <p className="mt-2 leading-7 text-white/70">Você não se torna fisicamente viciado em ruído branco, mas pode formar um hábito psicológico forte. Seu cérebro aprende a associar o som ao sono (um processo chamado condicionamento clássico). Se quiser parar de usá-lo, o melhor é diminuir gradualmente o volume ao longo de algumas semanas, em vez de parar abruptamente.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Ruído branco ou rosa é melhor para o sono?</h3>
            <p className="mt-2 leading-7 text-white/70">Muitos estudos sugerem que o ruído rosa (que soa como chuva constante) pode ser melhor para melhorar o sono profundo e de ondas lentas porque seu equilíbrio de frequências é mais suave para o ouvido humano. No entanto, o ruído branco é geralmente melhor para mascarar distrações extremamente agudas e repentinas.</p>
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
                "name": "Dormir com ruído branco pode viciar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Você não se torna fisicamente viciado em ruído branco, mas pode formar um hábito psicológico forte. Seu cérebro aprende a associar o som ao sono. Se quiser parar de usá-lo, o melhor é diminuir gradualmente o volume ao longo de algumas semanas."
                }
              },
              {
                "@type": "Question",
                "name": "Ruído branco ou rosa é melhor para o sono?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muitos estudos sugerem que o ruído rosa pode ser melhor para melhorar o sono profundo e de ondas lentas porque seu equilíbrio de frequências é mais suave para o ouvido humano. No entanto, o ruído branco é geralmente melhor para mascarar distrações extremamente agudas e repentinas."
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
