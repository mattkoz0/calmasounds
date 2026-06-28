import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs BetterSleep | Melhor Alternativa de Sons para Dormir",
  description:
    "Comparando Calma vs BetterSleep? BetterSleep tem rastreamento de sono e histórias. Calma é a melhor alternativa se você quer um simples mixer de sons para dormir offline sem assinatura.",
  keywords: [
    "calma vs bettersleep",
    "alternativa ao app bettersleep",
    "bettersleep sem assinatura",
    "mixer de sons para dormir como bettersleep",
    "alternativa ao relax melodies",
    "bettersleep alternativa grátis",
    "bettersleep comparação",
    "relax melodies substituto",
    "app mixer sono sem abo",
    "bettersleep alternativa gratuita offline",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/calma-vs-bettersleep",
  },
  openGraph: {
    title: "Calma vs BetterSleep | Melhor Alternativa de Sons para Dormir",
    description:
      "Comparando Calma vs BetterSleep? BetterSleep tem rastreamento de sono e histórias. Calma é a melhor alternativa se você quer um simples mixer de sons para dormir offline sem assinatura.",
    url: "https://www.calmasounds.com/pt-BR/calma-vs-bettersleep",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs BetterSleep | Melhor Alternativa de Sons para Dormir",
    description:
      "Comparando Calma vs BetterSleep? Descubra a melhor alternativa para sons para dormir offline sem assinatura.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Calma é igual ao BetterSleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não, Calma e BetterSleep são aplicativos diferentes. O BetterSleep foca no rastreamento do sono, em uma extensa biblioteca de histórias e em um modelo de assinatura anual. O Calma foca puramente em ser um mixer de sons para dormir offline com um desbloqueio vitalício de pagamento único.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é a melhor alternativa ao aplicativo BetterSleep sem assinatura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se você usa o BetterSleep (anteriormente Relax Melodies) apenas pelo mixer de som, o Calma é uma das melhores alternativas. O Calma oferece um desbloqueio vitalício de pagamento único, o que significa que você obtém um mixer de sons para dormir premium sem a cara assinatura mensal ou anual.",
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
      "name": "Calma vs BetterSleep",
      "item": "https://www.calmasounds.com/pt-BR/calma-vs-bettersleep"
    }
  ]
};

export default function CalmaVsBetterSleepPagePtBr() {
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
        title="Qual é a diferença entre Calma e BetterSleep?"
        description="O BetterSleep é um aplicativo rico em recursos que oferece rastreamento do sono, perfis de sono e histórias, desenvolvido em um modelo de assinatura. O Calma é uma alternativa mais simples e focada, fornecendo um mixer de áudio offline com um belo design, ruído branco e sons de chuva com um desbloqueio vitalício de pagamento único."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Comparação de Aplicativos
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs BetterSleep: Qual é o certo para você?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Ambos os aplicativos permitem que você misture sons para dormir melhor, mas eles atendem a necessidades diferentes. Aqui está uma comparação factual para ajudá-lo a escolher a melhor opção.
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
            <h2 className="text-2xl font-semibold text-white">Escolha o BetterSleep se...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Você deseja monitorar ativamente suas fases de sono e ronco.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Você adora ter uma biblioteca enorme e em constante atualização de histórias para dormir.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Você se sente confortável em pagar uma assinatura anual para manter o acesso aos recursos premium.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">Escolha o Calma se...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Você quer principalmente misturar seus próprios sons para dormir (como chuva, vento e ruído marrom) sem desordem.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Você odeia assinaturas e prefere um pagamento único para acesso vitalício.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Você precisa de um aplicativo que priorize a privacidade, que funcione 100% offline e não exija uma conta.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Você prefere uma interface minimalista e sem distrações.
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
              O Calma é igual ao aplicativo BetterSleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Não, Calma e BetterSleep (anteriormente Relax Melodies) são aplicativos completamente diferentes feitos por empresas diferentes. O BetterSleep é um rastreador de sono e plataforma de conteúdo. O Calma é um mixer de som especializado projetado para dar a você controle offline sobre o ruído branco e sons da natureza sem rastrear o seu sono.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Qual é a melhor alternativa ao BetterSleep sem assinatura?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Se você usa o BetterSleep apenas pelo mixer de som e descobre que não usa o rastreamento de sono ou as histórias, o Calma é a alternativa perfeita. Ao mudar, você pode parar de pagar taxas recorrentes e, em vez disso, obter um desbloqueio vitalício para um mixer premium de paisagens sonoras offline.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
