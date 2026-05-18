import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sons para Zumbido e Sono Profundo | Calma",
  description:
    "Descubra um aplicativo simples de sons para aliviar o zumbido. Use o Calma para criar um ambiente de áudio suave para dormir.",
  keywords: [
    "aplicativo de sons para zumbido",
    "sons para zumbido para dormir",
    "aplicativo de sons para zumbido para sono",
    "sons para zumbido calmante",
    "sons para zumbido calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/tinnitus-sounds-app",
  },
  openGraph: {
    title: "Sons para Zumbido e Sono Profundo | Calma",
    description:
    "Descubra um aplicativo simples de sons para aliviar o zumbido. Use o Calma para criar um ambiente de áudio suave para dormir.",
    url: "https://www.calmasounds.com/pt-BR/tinnitus-sounds-app",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sons para Zumbido e Sono Profundo | Calma",
    description:
    "Descubra um aplicativo simples de sons para aliviar o zumbido. Use o Calma para criar um ambiente de áudio suave para dormir.",
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
      "name": "App de Alívio do Zumbido",
      "item": "https://www.calmasounds.com/pt-BR/tinnitus-sounds-app"
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
          App de sons para zumbido
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Um aplicativo de sons para zumbido para um sono melhor e um ambiente de áudio mais calmo
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          O Calma é um aplicativo de sons para zumbido incrivelmente simples que ajuda você a criar um
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
              O sons para zumbido pode ajudar a criar um fundo sonoro mais estável para a
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
              ajudando o sons para zumbido a parecer parte de uma rotina diária em vez de uma
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
              alt="Interface do app de sons para zumbido Calma para personalizar o sons para zumbido para dormir e foco"
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
              alt="Interface do misturador de som Calma para criar mixagens personalizadas de sons para zumbido"
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
            Aprenda mais sobre sons para zumbido
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/pt-BR/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Alívio do Zumbido para Dormir</h3>
            <p className="mt-3 text-white/70">
              Descubra como o sons para zumbido pode ajudar a criar um ambiente estável para a hora de dormir e melhorar o seu descanso.
            </p>
          </a>
          <a
            href="/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Cores de Ruído Explicadas</h3>
            <p className="mt-3 text-white/70">
              Explore as diferenças entre o sons para zumbido, rosa, marrom e verde para encontrar o seu som ideal.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ do app de sons para zumbido
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Existe um aplicativo gratuito de ruído branco para zumbido?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, o Calma fornece paisagens sonoras gratuitas, incluindo ruído branco e rosa, frequentemente usados para mascarar o zumbido à noite.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Qual cor de ruído é melhor para o zumbido?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Muitas pessoas acham o ruído branco ou rosa mais eficaz para mascarar o zumbido nos ouvidos. O Calma permite que você teste todas as cores.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O mascaramento de som pode ajudar com o zumbido à noite?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim. O silêncio pode fazer com que o zumbido pareça mais alto. Criar um som de fundo constante dá ao seu cérebro uma alternativa para focar.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Existe um aplicativo gratuito de ruído branco para zumbido?","acceptedAnswer":{"@type":"Answer","text":"Sim, o Calma fornece paisagens sonoras gratuitas, incluindo ruído branco e rosa, frequentemente usados para mascarar o zumbido à noite."}},{"@type":"Question","name":"Qual cor de ruído é melhor para o zumbido?","acceptedAnswer":{"@type":"Answer","text":"Muitas pessoas acham o ruído branco ou rosa mais eficaz para mascarar o zumbido nos ouvidos. O Calma permite que você teste todas as cores."}},{"@type":"Question","name":"O mascaramento de som pode ajudar com o zumbido à noite?","acceptedAnswer":{"@type":"Answer","text":"Sim. O silêncio pode fazer com que o zumbido pareça mais alto. Criar um som de fundo constante dá ao seu cérebro uma alternativa para focar."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Experimente o Calma para sono e calma diária
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Baixe o Calma no Google Play e crie um ambiente de som mais calmo
            com sons para zumbido e paisagens sonoras personalizadas.
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
