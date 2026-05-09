import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Ruído Marrom | Calma",
  description:
    "Descubra o Calma, um aplicativo de ruído marrom incrivelmente simples para dormir, relaxar e criar um ambiente de áudio mais calmo.",
  keywords: [
    "aplicativo de ruído marrom",
    "ruído marrom para dormir",
    "aplicativo de ruído marrom para sono",
    "ruído marrom calmante",
    "ruído marrom calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/brown-noise-app",
  },
  openGraph: {
    title: "App de Ruído Marrom | Calma",
    description:
      "Descubra um aplicativo de ruído marrom incrivelmente simples para dormir, relaxar e rotinas diárias mais calmas.",
    url: "https://www.calmasounds.com/pt-BR/brown-noise-app",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Ruído Marrom | Calma",
    description:
      "Descubra um aplicativo de ruído marrom incrivelmente simples para dormir, relaxar e rotinas diárias mais calmas.",
  },
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
      "name": "App de Ruído Marrom",
      "item": "https://www.calmasounds.com/pt-BR/brown-noise-app"
    }
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App de ruído marrom
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Um aplicativo de ruído marrom para um sono melhor e um ambiente de áudio mais calmo
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          O Calma é um aplicativo de ruído marrom incrivelmente simples que ajuda você a criar um
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
              O ruído marrom pode ajudar a criar um fundo sonoro mais estável para a
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
              ajudando o ruído marrom a parecer parte de uma rotina diária em vez de uma
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
              alt="Interface móvel do app Calma mostrando uma lista de sons para dormir e categorias de relaxamento"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interface do app de ruído marrom Calma para personalizar o ruído marrom para dormir e foco"
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
              alt="Interface do misturador de som Calma para criar mixagens personalizadas de ruído marrom"
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
            Aprenda mais sobre ruído marrom
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/pt-BR/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Ruído Marrom para Dormir</h3>
            <p className="mt-3 text-white/70">
              Descubra como o ruído marrom pode ajudar a criar um ambiente estável para a hora de dormir e melhorar o seu descanso.
            </p>
          </a>
          <a
            href="/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Cores de Ruído Explicadas</h3>
            <p className="mt-3 text-white/70">
              Explore as diferenças entre o ruído marrom, rosa, marrom e verde para encontrar o seu som ideal.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ do app de ruído marrom
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O que é um aplicativo de ruído marrom?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Um aplicativo de ruído marrom ajuda a criar um som de fundo constante que pode
              apoiar o sono, relaxamento e um ambiente sonoro mais calmo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O ruído marrom pode ajudar com o sono?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Muitas pessoas usam o ruído marrom para tornar a hora de dormir mais calma e reduzir
              o impacto de sons perturbadores no ambiente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O Calma é apenas para ruído marrom?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Não. O Calma também suporta sons para dormir, paisagens sonoras relaxantes e
              mixagens de áudio orientadas para foco, para que você possa moldar a experiência de acordo com
              suas necessidades.
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
            com ruído marrom e paisagens sonoras personalizadas.
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
