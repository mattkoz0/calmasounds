import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App Grátis de Sons para Foco | Estudo, TDAH e Deep Work | Calma",
  description:
    "Procurando sons para concentração? O Calma oferece ruído marrom, chuva e paisagens sonoras personalizáveis para estudo, TDAH e deep work. 100% grátis, sem anúncios, offline.",
  keywords: [
    "aplicativo de sons para foco",
    "aplicativo de foco",
    "aplicativo de sons de concentração",
    "sons para foco profundo",
    "aplicativo de sons para estudo",
    "calma sons para foco",
    "app foco grátis",
    "ruído marrom para TDAH",
    "sons para estudar",
    "app concentração sem anúncios",
    "deep work sons",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/focus-sounds-app",
  },
  openGraph: {
    title: "App Grátis Sons para Foco | Estudo e TDAH | Calma",
    description:
    "Ruído marrom, chuva e sons personalizáveis para foco e estudo. 100% grátis, sem anúncios.",
    url: "https://www.calmasounds.com/pt-BR/focus-sounds-app",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Sons para Foco Grátis | Calma",
    description:
    "Sons para concentração e estudo. 100% grátis, offline.",
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
      "name": "App de Sons para Foco",
      "item": "https://www.calmasounds.com/pt-BR/focus-sounds-app"
    }
  ]
};

export default function FocusSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App de sons para foco
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Um aplicativo de sons para foco para trabalho mais profundo, estudos e concentração mais calma
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          O Calma é um aplicativo incrivelmente simples de sons para foco que ajuda você a criar
          ambientes de áudio personalizados para trabalho profundo, leitura, estudos e
          concentração silenciosa. Construa sua própria paisagem sonora e mantenha-se imerso
          sem desordem visual ou ruído perturbador.
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
            <h2 className="text-2xl font-semibold">Mantenha-se imerso por mais tempo</h2>
            <p className="mt-4 leading-7 text-white/70">
              Use paisagens sonoras de fundo que ajudam a reduzir a distração e apoiam
              uma concentração mais consistente durante o trabalho ou sessões de estudo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Crie sua própria mixagem de foco</h2>
            <p className="mt-4 leading-7 text-white/70">
              O Calma permite que você molde um ambiente de áudio mais pessoal em vez de
              depender de uma faixa genérica de foco.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Trabalhe de forma mais calma</h2>
            <p className="mt-4 leading-7 text-white/70">
              O aplicativo foi projetado para parecer simples, elegante e emocionalmente leve,
              ajudando o seu espaço de trabalho a parecer menos barulhento e mais intencional.
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
            Veja o lado de foco do Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interface móvel do aplicativo Calma mostrando categorias de foco e concentração"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interface do Calma para personalizar paisagens sonoras de foco para estudos"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interface do misturador de som Calma para áudio de fundo de trabalho profundo"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface do Calma para sons de concentração e batidas binaurais"
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
            Aprenda mais sobre som e foco
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/pt-BR/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Melhores Sons para Estudar</h3>
            <p className="mt-3 text-white/70">
              Encontre os tipos de sons que podem ajudar na concentração e no foco mais profundo durante as suas sessões de estudo.
            </p>
          </a>
          <a
            href="/pt-BR/blog/binaural-beats-for-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Batidas Binaurais Explicadas</h3>
            <p className="mt-3 text-white/70">
              Uma introdução simples sobre como as batidas binaurais podem apoiar a calma e o foco no seu trabalho diário.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ do app de sons para foco
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O que é um app de sons para foco?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Um app que cria um fundo de áudio para apoiar a concentração, reduzir distrações e tornar o trabalho ou estudo mais imersivo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O Calma ajuda com TDAH?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Muitas pessoas com TDAH relatam que ruído marrom e sons ambientes ajudam na concentração. O Calma permite personalizar a mistura ideal.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Posso personalizar a mistura de foco?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim. O Calma é 100% grátis e permite criar misturas personalizadas com ruído marrom, chuva, café e muito mais.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Qual o melhor ruído para estudar?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ruído marrom e rosa são os mais populares para estudo. Sons de chuva também são muito eficazes. Teste e misture no Calma.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O Calma funciona offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim. Todos os sons funcionam completamente sem internet – perfeito para bibliotecas, viagens ou locais sem WiFi.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é um app de sons para foco?","acceptedAnswer":{"@type":"Answer","text":"Cria um fundo de áudio para concentração e estudo imersivo."}},{"@type":"Question","name":"Ajuda com TDAH?","acceptedAnswer":{"@type":"Answer","text":"Sim, ruído marrom e sons ambientes ajudam na concentração."}},{"@type":"Question","name":"Posso personalizar?","acceptedAnswer":{"@type":"Answer","text":"Sim, 100% grátis com misturas personalizáveis."}},{"@type":"Question","name":"Melhor ruído para estudar?","acceptedAnswer":{"@type":"Answer","text":"Ruído marrom, rosa e chuva. Teste e misture no Calma."}},{"@type":"Question","name":"Funciona offline?","acceptedAnswer":{"@type":"Answer","text":"Sim, completamente sem internet."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Experimente o Calma para trabalho profundo e estudos
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Baixe o Calma no Google Play e crie um ambiente mais focado
            com paisagens sonoras personalizadas.
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
