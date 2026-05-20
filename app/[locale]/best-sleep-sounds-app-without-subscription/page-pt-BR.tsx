import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Melhor App de Sons para Dormir Sem Assinatura | Calma",
  description:
    "Procurando um aplicativo de sons para dormir sem assinaturas caras? O Calma oferece um desbloqueio vitalício com um único pagamento para sons de sono personalizados e ruído branco.",
  keywords: [
    "app de sons para dormir sem assinatura",
    "app de sono sem assinatura",
    "app de sono pagamento único",
    "app grátis de sons para dormir",
    "desbloqueio vitalício app de sono",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/best-sleep-sounds-app-without-subscription",
  },
  openGraph: {
    title: "Melhor App de Sons para Dormir Sem Assinatura | Calma",
    description:
      "Procurando um aplicativo de sons para dormir sem assinaturas caras? O Calma oferece um desbloqueio vitalício com um único pagamento para sons de sono personalizados e ruído branco.",
    url: "https://www.calmasounds.com/pt-BR/best-sleep-sounds-app-without-subscription",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhor App de Sons para Dormir Sem Assinatura | Calma",
    description:
      "Procurando um aplicativo de sons para dormir sem assinaturas caras? O Calma oferece um desbloqueio vitalício com um único pagamento.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Existe algum aplicativo de sono sem assinatura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o Calma é um aplicativo premium de sons para dormir que não requer assinatura. Ele oferece uma versão gratuita e um desbloqueio vitalício mediante um pagamento único para acesso total.",
      },
    },
    {
      "@type": "Question",
      name: "Vale a pena pagar mensalidade em aplicativos de sono?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muitos aplicativos de sono cobram altas taxas mensais ou anuais. Com o Calma, você evita as taxas recorrentes completamente ao optar por um único pagamento para acesso vitalício.",
      },
    },
    {
      "@type": "Question",
      name: "O Calma funciona offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o Calma funciona completamente offline, tornando-o o aplicativo de sono sem assinatura perfeito para viagens ou quando você deseja desligar o Wi-Fi à noite.",
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
      "name": "Sons para Dormir sem Assinatura",
      "item": "https://www.calmasounds.com/pt-BR/best-sleep-sounds-app-without-subscription"
    }
  ]
};

export default function BestSleepAppNoSubscriptionPagePtBr() {
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

      <AiDefinition />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sem Assinatura Necessária
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          O melhor aplicativo de sons para dormir sem assinatura
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Cansado de alugar o seu relaxamento? O Calma é um aplicativo de sons para dormir incrivelmente simples que 
          ajuda você a criar paisagens sonoras personalizadas para a hora de dormir, com um <strong>desbloqueio vitalício de pagamento único</strong>. 
          Sem taxas mensais, sem renovações anuais, apenas calma.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar o Calma na Google Play Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Baixar no Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar o Calma na Apple App Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Baixar na App Store
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Pague Uma Vez, Seu Para Sempre</h2>
            <p className="mt-4 leading-7 text-white/70">
              Pare de pagar para dormir. Com nosso desbloqueio vitalício, você obtém acesso total a todos os sons premium, recursos do Brainwave Lab e atualizações futuras sem uma assinatura recorrente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">100% Funcional Offline</h2>
            <p className="mt-4 leading-7 text-white/70">
              Uma vez baixado, o Calma funciona completamente offline. Perfeito para voos, viagens ou para manter seu telefone no modo avião à noite.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Misturador de Sons Premium</h2>
            <p className="mt-4 leading-7 text-white/70">
              Misture chuva de alta qualidade, ondas do oceano, ruído branco e ruído marrom para criar a paisagem sonora personalizada perfeita.
            </p>
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
              Existe algum aplicativo de sono sem assinatura?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, o Calma é um aplicativo premium de sons para dormir que não requer assinatura. Ele oferece uma versão gratuita e um desbloqueio vitalício através de pagamento único para acesso total.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Vale a pena pagar mensalidade em aplicativos de sono?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Muitos aplicativos de sono cobram altas taxas mensais ou anuais para cobrir custos de servidor e novo conteúdo. Com o Calma, você evita as taxas recorrentes completamente optando por um único pagamento vitalício para acessar nosso misturador offline premium.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O Calma funciona offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, o Calma funciona completamente offline, tornando-o o aplicativo de sono sem assinatura perfeito para viagens ou quando você deseja desligar o Wi-Fi à noite para reduzir distrações.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
