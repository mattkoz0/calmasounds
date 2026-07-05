import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Melhor App de Ruído Branco Grátis 2026 | Calma",
  description:
    "Procurando o melhor app de ruído branco? Misture ruído branco, marrom, rosa e sons da natureza para dormir, TDAH, bebês ou zumbido. 100% grátis, sem anúncios, funciona offline.",
  keywords: [
    "aplicativo de ruído branco",
    "ruído branco para dormir",
    "ruído branco grátis",
    "melhor aplicativo ruído branco",
    "ruído branco bebê",
    "ruído branco TDAH",
    "gerador de ruído branco",
    "aplicativo ruído branco grátis",
    "ruído branco zumbido",
    "calma ruído branco",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/white-noise-app",
  },
  openGraph: {
    title: "Melhor App de Ruído Branco Grátis | Sono, Bebês, TDAH | Calma",
    description:
    "Misture ruído branco, marrom e rosa para dormir, TDAH, bebês ou zumbido. 100% grátis, sem anúncios.",
    url: "https://www.calmasounds.com/pt-BR/white-noise-app",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhor App de Ruído Branco Grátis | Calma",
    description:
    "Misture ruído branco, marrom e rosa para dormir. 100% grátis, funciona offline.",
  },
};

const combinedJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Calma - Sleep Sounds & Relax",
      "applicationCategory": "HealthAndFitnessApplication",
      "operatingSystem": "ANDROID, IOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      }
    },
    {
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
      "name": "App de Ruído Branco",
      "item": "https://www.calmasounds.com/pt-BR/white-noise-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Qual é o melhor aplicativo gratuito de ruído branco?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Calma é 100% grátis, sem anúncios, funciona offline e permite misturar ruído branco com sons da natureza."
            }
        },
        {
            "@type": "Question",
            "name": "O ruído branco ajuda a dormir?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Mascara ruídos repentinos e ajuda a manter o sono profundo."
            }
        },
        {
            "@type": "Question",
            "name": "Como usar ruído branco para estudar?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Base de ruído branco ou marrom com chuva fraca, eficaz para TDAH."
            }
        },
        {
            "@type": "Question",
            "name": "O ruído branco é seguro para bebês?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, volume abaixo de 50 dB, a 2 metros do berço, com temporizador."
            }
        },
        {
            "@type": "Question",
            "name": "Ruído branco vs marrom — qual é melhor?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "O branco mascara sons agudos. O marrom é mais profundo. Calma permite misturar."
            }
        },
        {
            "@type": "Question",
            "name": "Funciona sem internet?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Calma funciona totalmente offline."
            }
        }
    ]
}
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App de ruído branco
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Um aplicativo de ruído branco para um sono melhor e um ambiente de áudio mais calmo
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          O Calma é um aplicativo de ruído branco incrivelmente simples que ajuda você a criar um
          ambiente de som mais suave e controlado para dormir, relaxar e para
          a calma do dia a dia. Use-o para apoiar rotinas noturnas, reduzir ruídos
          perturbadores e construir uma atmosfera mais pacífica ao seu redor.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixe o Calma na Google Play Store (abre em uma nova janela)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Baixar no Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixe o Calma na Apple App Store (abre em uma nova janela)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Baixar na App Store
          </a>

          <a
            href="/pt-BR"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Voltar ao início
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Apoie um sono melhor</h2>
            <p className="mt-4 leading-7 text-white/70">
              O ruído branco pode ajudar a criar um fundo sonoro mais estável para a
              hora de dormir e uma transição mais suave para o sono.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Reduza ruídos perturbadores</h2>
            <p className="mt-4 leading-7 text-white/70">
              Use uma camada de áudio controlada para suavizar sons repentinos e criar um
              ambiente mais calmo ao seu redor.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mantenha a simplicidade e a calma</h2>
            <p className="mt-4 leading-7 text-white/70">
              O Calma foi projetado para parecer elegante, claro e emocionalmente leve,
              ajudando o ruído branco a parecer parte de uma rotina diária em vez de uma
              ferramenta técnica.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Pré-visualização do aplicativo
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Veja a experiência relaxante dentro do Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              priority
              alt="Interface móvel do app Calma mostrando uma lista de sons para dormir e categorias de relaxamento"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="Interface do app de ruído branco Calma para personalizar o ruído branco para dormir e foco"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interface do misturador de sons para dormir Calma"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface do misturador de som Calma para criar mixagens personalizadas de ruído branco"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Guias & Conhecimento
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Aprenda mais sobre ruído branco
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/pt-BR/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Ruído Branco para Dormir</h3>
            <p className="mt-3 text-white/70">
              Descubra como o ruído branco pode ajudar a criar um ambiente estável para a hora de dormir e melhorar o seu descanso.
            </p>
          </a>
          <a
            href="/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Cores de Ruído Explicadas</h3>
            <p className="mt-3 text-white/70">
              Explore as diferenças entre o ruído branco, rosa, marrom e verde para encontrar o seu som ideal.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ do app de ruído branco
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Qual é o melhor aplicativo gratuito de ruído branco?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              O Calma oferece um ambiente simples para misturar ruído branco com sons da natureza, sem anúncios. É 100% grátis e funciona offline.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O ruído branco ajuda a dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim. O ruído branco atua como um cobertor acústico que mascara ruídos repentinos, ajudando seu cérebro a relaxar e manter o sono profundo.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Como usar ruído branco para estudar?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Para estudar, recomendamos uma base de ruído branco ou marrom, misturada com chuva fraca. Particularmente eficaz para pessoas com TDAH.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O ruído branco é seguro para bebês?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, quando usado corretamente. Mantenha o volume abaixo de 50 dB, coloque o dispositivo a pelo menos 2 metros do berço e use um temporizador.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Ruído branco vs ruído marrom — qual é melhor para dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              O ruído branco mascara melhor sons agudos. O ruído marrom tem tom mais profundo que muitos adultos acham mais relaxante. Com o Calma, você pode misturar os dois.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O Calma funciona sem internet?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim. O Calma funciona totalmente offline, então você pode usá-lo em qualquer lugar: no avião, na montanha ou simplesmente sem Wi-Fi.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Experimente o Calma para sono e calma diária
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Baixe o Calma no Google Play e crie um ambiente de som mais calmo
            com ruído branco e paisagens sonoras personalizadas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixe o Calma na Google Play Store (abre em uma nova janela)"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixe o Calma na Apple App Store (abre em uma nova janela)"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              App Store
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
