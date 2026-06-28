import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs Calm | Melhor Alternativa de Sons para Dormir",
  description:
    "Comparando Calma vs Calm? Calm é ótimo para meditação guiada e histórias. Calma é a melhor alternativa se você quer um simples mixer de sons para dormir offline sem assinatura.",
  keywords: [
    "calma vs calm",
    "alternativa ao app calm",
    "calm sem assinatura",
    "mixer de sons para dormir como calm",
    "melhor que o app calm",
    "calm alternativa grátis",
    "calm app comparação",
    "app sono como calm grátis",
    "calm substituto offline",
    "app sons dormir sem abo como calm",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/calma-vs-calm",
  },
  openGraph: {
    title: "Calma vs Calm | Melhor Alternativa de Sons para Dormir",
    description:
      "Comparando Calma vs Calm? Calm é ótimo para meditação guiada e histórias. Calma é a melhor alternativa se você quer um simples mixer de sons para dormir offline sem assinatura.",
    url: "https://www.calmasounds.com/pt-BR/calma-vs-calm",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs Calm | Melhor Alternativa de Sons para Dormir",
    description:
      "Comparando Calma vs Calm? Descubra a melhor alternativa para sons para dormir offline sem assinatura.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Calma é igual ao aplicativo Calm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não, Calma e Calm são aplicativos diferentes. O Calm se concentra fortemente em meditação guiada, histórias para dormir com celebridades e cursos com assinatura anual. O Calma foca puramente em ser um mixer de sons para dormir offline com um desbloqueio vitalício de pagamento único.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é a melhor alternativa ao aplicativo Calm sem assinatura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se você usa o Calm apenas por seus sons para dormir e ruído branco, o Calma é uma das melhores alternativas. O Calma oferece um desbloqueio vitalício de pagamento único, o que significa que você obtém sons para dormir premium sem a cara assinatura mensal ou anual.",
      },
    }
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://www.calmasounds.com/pt-BR"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Calma vs Calm",
      "item": "https://www.calmasounds.com/pt-BR/calma-vs-calm"
    }
  ]
};

export default function CalmaVsCalmPagePtBr() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AiDefinition 
        title="Qual é a diferença entre Calma e Calm?"
        description="Calm é um aplicativo líder do setor com foco em cursos de meditação guiada e histórias para dormir de celebridades com um modelo de assinatura recorrente. Calma é uma alternativa altamente focada em sons para dormir que fornece um mixer de áudio offline, ruído branco e sons de chuva com um simples desbloqueio vitalício de pagamento único em vez de uma assinatura."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Comparação de Aplicativos
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs Calm: Qual é o certo para você?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Ambos os aplicativos visam ajudá-lo a relaxar e dormir melhor, mas adotam abordagens muito diferentes. Aqui está uma comparação honesta e baseada em fatos para ajudá-lo a escolher a melhor opção para sua rotina noturna.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar o Calma na Google Play Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Experimente o Calma Gratuitamente
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Escolha o Calm se...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Você deseja extensos cursos de meditação guiada.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Você gosta de adormecer ouvindo dubladores famosos lendo histórias.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Você não se importa em pagar uma assinatura anual por uma biblioteca de conteúdo em constante atualização.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">Escolha o Calma se...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Você quer principalmente misturar sons para dormir de alta qualidade (como chuva e ruído marrom).
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Você odeia assinaturas e prefere um pagamento único vitalício.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Você precisa de um aplicativo que funcione 100% offline e respeite sua privacidade.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Você quer uma interface mais simples focada puramente em paisagens sonoras personalizadas.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O Calma é igual ao aplicativo Calm?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Não, Calma e Calm são aplicativos completamente diferentes feitos por empresas diferentes. O Calm é uma ampla plataforma de bem-estar mental com meditação guiada e histórias para dormir. O Calma é um mixer de som especializado projetado para dar a você controle offline sobre o ruído branco e os sons da natureza.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Qual é a melhor alternativa ao Calm sem assinatura?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Se você usa o Calm apenas por seus sons básicos para dormir e ruído branco, o Calma é uma forte alternativa. Ao mudar, você pode parar de pagar taxas recorrentes e, em vez disso, obter um desbloqueio vitalício para um mixer offline premium.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
