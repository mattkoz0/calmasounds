import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";

export const metadata: Metadata = {
  title: "Técnicas de Respiração para Relaxar | Calma",
  description:
    "Aprenda técnicas simples de respiração guiada, como o 4-7-8, para acalmar a mente, reduzir a ansiedade e dormir.",
  keywords: [
    "técnicas de respiração guiada",
    "exercícios de respiração para dormir",
    "exercícios de respiração para relaxamento",
    "respiração em caixa",
    "respiração 4-7-8",
    "respiração de ressonância",
    "suspiro fisiológico",
    "blog do calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog/guided-breathing-techniques",
  },
  openGraph: {
    title: "Técnicas de Respiração para Relaxar | Calma",
    description:
    "Aprenda técnicas simples de respiração guiada, como o 4-7-8, para acalmar a mente, reduzir a ansiedade e dormir.",
    url: "https://www.calmasounds.com/pt-BR/blog/guided-breathing-techniques",
    siteName: "Calma",
    locale: "pt_BR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Técnicas de Respiração para Relaxar | Calma",
    description:
    "Aprenda técnicas simples de respiração guiada, como o 4-7-8, para acalmar a mente, reduzir a ansiedade e dormir.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Técnicas de Respiração Guiada para Calma, Sono e Foco",
  description:
    "Aprenda técnicas simples de respiração guiada, como o 4-7-8, para acalmar a mente, reduzir a ansiedade e dormir.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage:
    "https://www.calmasounds.com/pt-BR/blog/guided-breathing-techniques",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
};

export default function GuidedBreathingTechniquesPage() {
  return (
    <ArticlePage
      slug="guided-breathing-techniques"
      jsonLd={articleJsonLd}
      title="Técnicas Fáceis de Respiração Guiada para Alívio Rápido"
      intro="A respiração guiada pode ser uma das maneiras mais simples de mudar seu estado mental e físico. Algumas técnicas de respiração são melhores para o sono, algumas ajudam você a se sentir mais equilibrado e outras são úteis quando você precisa de alívio rápido do estresse ou da sobrecarga mental. A melhor depende do que seu corpo precisa naquele momento: desacelerar, estabilizar, reiniciar ou acordar suavemente."
      topLinkHref="/pt-BR/sleep-sounds-app"
      topLinkLabel="Explore a página de sono"
      ctaHref="/pt-BR/sleep-sounds-app"
      ctaLabel="Explore o Calma"
      secondaryCtaHref="/pt-BR/blog/how-to-build-a-bedtime-routine"
      secondaryCtaLabel="Leia o guia de rotina de dormir"
      ctaTitle="Explore a respiração guiada com o Calma"
      ctaText="O Calma ajuda você a explorar técnicas de respiração guiada para sono, relaxamento, equilíbrio e manhãs mais calmas, incluindo 4-7-8, respiração em caixa, ressonância 5-5, suspiro fisiológico, Calma Profunda 7-11 e Brisa da Manhã."
      relatedArticles={[
        {
          href: "/pt-BR/blog/how-to-build-a-bedtime-routine",
          title: "Técnicas de Respiração para Relaxar | Calma",
          description:
    "Aprenda técnicas simples de respiração guiada, como o 4-7-8, para acalmar a mente, reduzir a ansiedade e dormir.",
        },
        {
          href: "/pt-BR/blog/binaural-beats-for-sleep-and-focus",
          title: "Técnicas de Respiração para Relaxar | Calma",
          description:
    "Aprenda técnicas simples de respiração guiada, como o 4-7-8, para acalmar a mente, reduzir a ansiedade e dormir.",
        },
      ]}
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Por que a respiração guiada ajuda</h2>
        <p className="mt-4 leading-8 text-white/70">
          A respiração está intimamente ligada ao seu sistema nervoso. Quando o seu
          fôlego se torna mais lento, mais suave e mais deliberado, o seu corpo frequentemente
          responde reduzindo a tensão e o ruído mental. É por isso que a respiração
          guiada é comumente usada para relaxamento, preparação para o sono,
          regulação emocional e foco.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Não é mágica. É mais como dar ao seu sistema um sinal claro: estamos
          seguros o suficiente para desacelerar agora.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Relaxar 4-7-8</h2>
        <p className="mt-4 leading-8 text-white/70">
          O padrão de respiração 4-7-8 é frequentemente usado quando você quer desacelerar
          antes de dormir ou reduzir a inquietação noturna. O ritmo geralmente
          envolve inspirar por 4, segurar por 7 e expirar por 8. Porque
          a expiração é mais longa, tende a parecer calmante e promove a desaceleração.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          No Calma, essa técnica combina com os momentos em que você quer que sua noite pareça
          mais quieta, mais suave e menos cheia mentalmente.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Equilíbrio (respiração em caixa)</h2>
        <p className="mt-4 leading-8 text-white/70">
          A respiração em caixa usa fases iguais, geralmente inspirando, segurando, expirando
          e segurando novamente pela mesma contagem. Isso cria um ritmo mais estável e
          simétrico. É frequentemente usada quando você quer se sentir aterrado,
          focado e emocionalmente equilibrado em vez de com sono.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Se a sua mente parece dispersa ou superestimulada, a respiração em caixa pode parecer
          como colocar as bordas de volta no dia.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Ressonância 5-5</h2>
        <p className="mt-4 leading-8 text-white/70">
          A respiração de ressonância geralmente segue um ritmo simples: inspire por 5 e
          expire por 5. É estável, gentil e menos dramática do que técnicas
          mais lentas focadas no sono. Isso a torna uma ótima opção para a calma diária,
          equilíbrio emocional e foco silencioso.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Esta é frequentemente uma boa escolha quando você quer algo de apoio e
          sustentável, não algo que pareça um kit completo de reparo de
          emergência do sistema nervoso.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Suspiro fisiológico</h2>
        <p className="mt-4 leading-8 text-white/70">
          O suspiro fisiológico é útil quando você precisa de uma reinicialização rápida. Geralmente
          envolve uma inspiração mais profunda, uma segunda inspiração curta no topo e
          depois uma expiração longa. Esse padrão pode parecer especialmente útil em
          momentos de estresse agudo, pressão interna ou sobrecarga emocional.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Não se trata tanto de criar um longo ritual e mais de interromper
          a sensação de estar muito tenso. Uma espécie de saída de emergência para os seus
          ombros.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Calma Profunda 7-11</h2>
        <p className="mt-4 leading-8 text-white/70">
          A Calma Profunda 7-11 enfatiza uma expiração ainda mais longa, frequentemente inspirando por 7
          e expirando por 11. Essa liberação mais longa pode criar uma forte sensação de
          acomodação e amolecimento. Muitas vezes é bem adequada para noites tranquilas,
          rotinas de dormir e momentos em que o seu corpo parece tenso, mesmo que os seus
          pensamentos já estejam cansados.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Essa técnica tende a ser especialmente boa quando você não quer
          estimulação ou estrutura, apenas um alívio mais profundo.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Brisa da Manhã</h2>
        <p className="mt-4 leading-8 text-white/70">
          Nem todo exercício de respiração tem que enviá-lo para dormir. A Brisa
          da Manhã é melhor pensada como uma maneira mais leve e limpa de começar
          o dia. Pode ajudá-lo a sentir-se mais acordado, revigorado e mentalmente presente
          sem a dureza de pular direto do sono para o estresse.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Funciona bem quando você quer começar com clareza e energia, mantendo
          a manhã gentil.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">
          Qual técnica de respiração você deve escolher?
        </h2>
        <ul className="mt-4 space-y-3 text-white/70">
          <li>• Escolha a 4-7-8 se quiser relaxar antes de dormir.</li>
          <li>
            • Escolha a respiração em caixa se você quiser equilíbrio e estabilidade mental.
          </li>
          <li>
            • Escolha a ressonância 5-5 para calma diária e regulação suave.
          </li>
          <li>• Escolha o suspiro fisiológico quando precisar de um reinício rápido.</li>
          <li>
            • Escolha a 7-11 quando quiser alívio e liberação noturnos mais profundos.
          </li>
          <li>
            • Escolha a Brisa da Manhã quando quiser um começo de dia mais suave
            e mais claro.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">
          O melhor método de respiração é contextual
        </h2>
        <p className="mt-4 leading-8 text-white/70">
          Não há uma única técnica de respiração guiada melhor para cada
          situação. Alguns métodos ajudam a desacelerar, outros ajudam
          a estabilizar, e alguns são melhores para uma reinicialização rápida. O objetivo real
          não é colecionar técnicas de respiração como cartas colecionáveis. É
          perceber de que tipo de apoio o seu corpo precisa hoje.
        </p>
      </section>
    </ArticlePage>
  );
}
