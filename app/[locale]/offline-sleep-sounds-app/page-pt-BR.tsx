import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "App de Sons para Dormir Offline para Viagens e Privacidade | Calma",
  description:
    "Procurando um aplicativo de sons para dormir que funcione sem internet? O Calma funciona 100% offline. Desfrute de paisagens sonoras personalizadas no modo avião, durante voos e viagens.",
  keywords: [
    "app de sons para dormir offline",
    "app de sons para dormir sem internet",
    "app de sono modo avião",
    "sons para dormir viagens",
    "sons para dormir sem wifi",
    "app sono offline grátis",
    "sons para dormir sem dados",
    "app dormir modo avião",
    "calma offline app",
    "sons relaxantes sem internet",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/offline-sleep-sounds-app",
  },
  openGraph: {
    title: "App de Sons para Dormir Offline para Viagens e Privacidade | Calma",
    description:
      "Procurando um aplicativo de sons para dormir que funcione sem internet? O Calma funciona 100% offline. Desfrute de paisagens sonoras personalizadas no modo avião, durante voos e viagens.",
    url: "https://www.calmasounds.com/pt-BR/offline-sleep-sounds-app",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Sons para Dormir Offline para Viagens e Privacidade | Calma",
    description:
      "Procurando um aplicativo de sons para dormir que funcione sem internet? O Calma funciona 100% offline.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Calma funciona offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, uma vez baixado, o Calma funciona completamente offline. Você não precisa de uma conexão Wi-Fi ou de celular para misturar e ouvir seus sons para dormir.",
      },
    },
    {
      "@type": "Question",
      name: "Posso usar o Calma em um avião?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. O Calma é perfeito para voos porque funciona inteiramente no modo avião sem telas de carregamento ou buffering.",
      },
    },
    {
      "@type": "Question",
      name: "Existe algum aplicativo de sons para dormir que não use dados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o Calma é um aplicativo de sons para dormir que prioriza a privacidade e não faz streaming de áudio. Todos os sons são processados localmente no seu dispositivo, o que significa que não consumirá seus dados móveis durante a reprodução.",
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
      "name": "App de Sons para Dormir Offline",
      "item": "https://www.calmasounds.com/pt-BR/offline-sleep-sounds-app"
    }
  ]
};

export default function OfflineSleepAppPagePtBr() {
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
          Amigável ao Modo Avião
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          O aplicativo de sons para dormir offline para um descanso profundo em qualquer lugar
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Desligue o seu Wi-Fi e desconecte-se do mundo. O Calma funciona <strong>100% offline</strong> para que você possa desfrutar de paisagens sonoras personalizadas sem distrações, uso de dados ou buffering.
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
            <h2 className="text-2xl font-semibold">Perfeito para Viagens</h2>
            <p className="mt-4 leading-7 text-white/70">
              Quer você esteja em um longo voo, em uma viagem de trem ou hospedado em um hotel com Wi-Fi ruim, a capacidade offline do Calma garante que você sempre tenha seus sons para dormir prontos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Uso Zero de Dados</h2>
            <p className="mt-4 leading-7 text-white/70">
              Ao contrário dos aplicativos de streaming, o Calma não consome seus dados móveis. Os sons são misturados diretamente no seu dispositivo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Privacidade em Primeiro Lugar</h2>
            <p className="mt-4 leading-7 text-white/70">
              Não há necessidade de se preocupar com rastreamento constante. Coloque seu telefone no modo avião para reduzir a exposição aos CEM e durma tranquilamente.
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
              O Calma funciona offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, uma vez baixado, o Calma funciona completamente offline. Você não precisa de uma conexão Wi-Fi ou de celular para misturar e ouvir seus sons para dormir.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Posso usar o Calma em um avião?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Absolutamente. O Calma é perfeito para voos porque funciona inteiramente no modo avião sem telas de carregamento ou buffering.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Existe algum aplicativo de sons para dormir que não use dados?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, o Calma é um aplicativo de sons para dormir que prioriza a privacidade e não faz streaming de áudio. Todos os sons são processados localmente no seu dispositivo, o que significa que não consumirá seus dados móveis durante a reprodução.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
