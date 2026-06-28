import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "App de Ruído Branco, Ruído Marrom e Ruído Rosa | Calma",
  description:
    "Descubra a diferença entre ruído branco, ruído marrom e ruído rosa. O Calma é um aplicativo premium de sons para dormir que permite misturar todas as cores de ruído para sono, foco e TDAH.",
  keywords: [
    "app de ruído branco",
    "app de ruído marrom",
    "app de ruído rosa",
    "app de ruído verde",
    "app de cores de ruído",
    "brown noise TDAH",
    "ruído branco para dormir",
    "ruído rosa bebês",
    "ruído marrom concentração",
    "cores de ruído comparação",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/white-noise-brown-noise-pink-noise",
  },
  openGraph: {
    title: "App de Ruído Branco, Ruído Marrom e Ruído Rosa | Calma",
    description:
      "Descubra a diferença entre ruído branco, ruído marrom e ruído rosa. O Calma é um aplicativo premium de sons para dormir que permite misturar todas as cores de ruído para sono, foco e TDAH.",
    url: "https://www.calmasounds.com/pt-BR/white-noise-brown-noise-pink-noise",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Ruído Branco, Ruído Marrom e Ruído Rosa | Calma",
    description:
      "Misture todas as cores de ruído para sono, foco e TDAH com o aplicativo Calma.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Calma inclui ruído branco, ruído marrom e ruído rosa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o Calma inclui ruído branco, ruído marrom, ruído rosa e ruído verde de alta qualidade. Você pode misturá-los com outros sons naturais, como chuva e ondas do mar.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é a diferença entre ruído branco e ruído marrom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O ruído branco cobre todas as frequências audíveis igualmente, como a estática da TV. O ruído marrom enfatiza frequências mais baixas, soando mais profundo como uma cachoeira distante. O ruído marrom é frequentemente preferido para foco profundo e TDAH.",
      },
    },
    {
      "@type": "Question",
      name: "Qual cor de ruído é melhor para dormir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O ruído rosa é geralmente considerado o melhor para dormir porque é equilibrado e natural, imitando sons como chuva constante ou vento. O ruído branco é melhor para mascarar sons altos repentinos.",
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
      "name": "App de Cores de Ruído",
      "item": "https://www.calmasounds.com/pt-BR/white-noise-brown-noise-pink-noise"
    }
  ]
};

export default function NoiseColorsAppPagePtBr() {
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
          As Cores do Som
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Ruído Branco, Ruído Marrom e Ruído Rosa
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          O Calma é um aplicativo de mixagem de som abrangente que inclui gravações de alta qualidade de todas as cores de ruído essenciais.
          Descubra a frequência perfeita para sua rotina de sono, relaxamento ou foco para o TDAH.
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Ruído Branco
            </div>
            <h3 className="text-xl font-semibold">Perfeito para mascarar</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Cobre todas as frequências audíveis igualmente. Ideal para bloquear sons altos repentinos e ajudar no sono infantil.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Ruído Rosa
            </div>
            <h3 className="text-xl font-semibold">Equilibrado e natural</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Mais profundo que o ruído branco, imitando sons como chuva constante ou vento. Ótimo para melhorar a qualidade geral do sono.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Ruído Marrom
            </div>
            <h3 className="text-xl font-semibold">Foco e suporte para TDAH</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Pesado em baixas frequências, como uma cachoeira distante. Cada vez mais popular para foco profundo e para "silenciar" uma mente ocupada.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Ruído Verde
            </div>
            <h3 className="text-xl font-semibold">Harmonia Natural</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Concentra-se nas frequências de médio alcance, semelhantes ao farfalhar das folhas da floresta. Perfeito para uma atmosfera calmante e natural.
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
              O Calma inclui ruído branco, ruído marrom e ruído rosa?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, o Calma inclui ruído branco, ruído marrom, ruído rosa e ruído verde de alta qualidade. Você pode misturá-los com outros sons naturais, como chuva e ondas do oceano, no mixer de sons.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Qual é a diferença entre ruído branco e ruído marrom?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              O ruído branco cobre todas as frequências audíveis igualmente, semelhante à estática da TV. O ruído marrom enfatiza frequências mais baixas, soando mais profundo e suave, como uma cachoeira distante. O ruído marrom é frequentemente preferido para foco profundo e TDAH.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Qual cor de ruído é melhor para dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              O ruído rosa é geralmente considerado o melhor para dormir porque é equilibrado e natural, imitando sons como chuva ou vento constantes. No entanto, o ruído branco é o melhor se você precisar mascarar especificamente sons altos e repentinos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
