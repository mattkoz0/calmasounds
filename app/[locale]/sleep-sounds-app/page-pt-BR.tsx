import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Sons para Dormir Grátis | Sem Anúncios | Calma",
  description:
    "Procurando o melhor app de sons para dormir? Misture ruído branco, chuva e sons da natureza para adormecer mais rápido. 100% grátis, sem anúncios, funciona offline.",
  keywords: [
    "aplicativo de sons para dormir",
    "aplicativo de sono",
    "sons relaxantes para dormir",
    "sons para dormir grátis",
    "calma sons para dormir",
    "ruído branco para dormir",
    "som de chuva para dormir",
    "aplicativo de sono grátis",
    "melhores sons para dormir",
    "sons da noite",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/sleep-sounds-app",
  },
  openGraph: {
    title: "App de Sons para Dormir Grátis | Sem Anúncios | Calma",
    description:
    "Misture ruído branco, chuva e sons da natureza para adormecer mais rápido. 100% grátis, sem anúncios.",
    url: "https://www.calmasounds.com/pt-BR/sleep-sounds-app",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Sons para Dormir Grátis | Calma",
    description:
    "Misture ruído branco, chuva e sons da natureza para dormir. 100% grátis, funciona offline.",
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
      "name": "App de Sons para Dormir",
      "item": "https://www.calmasounds.com/pt-BR/sleep-sounds-app"
    }
  ]
};

export default function SleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App de sons para dormir
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Um aplicativo de sons para dormir para noites mais calmas e melhores rotinas de sono
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          O Calma é um aplicativo de sons para dormir lindamente simples que ajuda a criar
          paisagens sonoras personalizadas para a hora de dormir, relaxamento noturno e descanso mais profundo.
          Misture sons relaxantes, crie a sua própria atmosfera e torne a sua rotina noturna
          mais suave e consistente.
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
            <h2 className="text-2xl font-semibold">Crie sua própria mixagem para dormir</h2>
            <p className="mt-4 leading-7 text-white/70">
              Em vez de ouvir uma faixa genérica, você pode construir um ambiente sonoro
              que pareça certo para a sua noite e o seu humor.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Relaxe antes de dormir</h2>
            <p className="mt-4 leading-7 text-white/70">
              Use paisagens sonoras calmantes para desacelerar após dias agitados e criar
              uma transição mais pacífica para o sono.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mantenha sua rotina simples</h2>
            <p className="mt-4 leading-7 text-white/70">
              O Calma é projetado para parecer claro, elegante e fácil de retornar todas as noites,
              sem atrito ou sobrecarga.
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
            Veja a experiência de sono dentro do Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interface do aplicativo móvel Calma mostrando uma lista de sons para dormir e categorias de relaxamento"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interface do app de sons para dormir Calma para personalização de áudio para a hora de dormir"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Misturador de sons para dormir Calma mostrando várias camadas de som ambiente"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface do misturador de som Calma para criação de mixagens personalizadas de sono"
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
            Aprenda mais sobre sons para dormir
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/pt-BR/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Melhores Sons para Dormir</h3>
            <p className="mt-3 text-white/70">
              Um guia prático sobre chuva, ruído branco e paisagens sonoras de sono mais suaves para a sua hora de dormir.
            </p>
          </a>
          <a
            href="/pt-BR/blog/how-to-build-a-bedtime-routine"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Como Construir uma Rotina de Dormir</h3>
            <p className="mt-3 text-white/70">
              Maneiras simples de criar um ritmo noturno mais calmo que suporte um sono natural e consistente.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ do app de sons para dormir
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O que é um aplicativo de sons para dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Um aplicativo de sons para dormir reproduz áudio relaxante projetado para apoiar rotinas de sono, relaxamento e um estado mental mais tranquilo antes de dormir.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Como o Calma é diferente?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              O Calma é 100% grátis, sem anúncios, funciona offline e permite criar mixagens personalizadas com uma interface simples e premium.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Posso criar minha própria mixagem de sono?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim. O Calma foi projetado para criar a sua própria mixagem de áudio relaxante em vez de apenas escolher uma faixa fixa.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              É seguro usar sons para dormir todas as noites?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, em volume moderado (abaixo de 50 dB). Estudos mostram que o ruído de fundo constante melhora a qualidade do sono profundo. O Calma tem temporizador automático.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Quais sons são melhores para adormecer rápido?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Os sons mais eficazes são ruído branco, ruído marrom e sons de chuva. O Calma permite misturar todos para criar a ambientação perfeita.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é um aplicativo de sons para dormir?","acceptedAnswer":{"@type":"Answer","text":"Um app que reproduz áudio relaxante para apoiar o sono e o relaxamento."}},{"@type":"Question","name":"Como o Calma é diferente?","acceptedAnswer":{"@type":"Answer","text":"Calma é 100% grátis, sem anúncios, funciona offline e permite mixagens personalizadas."}},{"@type":"Question","name":"Posso criar minha própria mixagem?","acceptedAnswer":{"@type":"Answer","text":"Sim, crie sua própria mixagem de áudio relaxante."}},{"@type":"Question","name":"É seguro usar sons para dormir todas as noites?","acceptedAnswer":{"@type":"Answer","text":"Sim, em volume moderado. Calma tem temporizador automático."}},{"@type":"Question","name":"Quais sons são melhores para adormecer rápido?","acceptedAnswer":{"@type":"Answer","text":"Ruído branco, ruído marrom e sons de chuva. Calma permite misturá-los."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Experimente o Calma na sua rotina noturna
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Baixe o Calma no Google Play e crie uma experiência de hora de dormir mais tranquila
            com sons para dormir personalizados.
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
