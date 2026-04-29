import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Sons Relaxantes | Calma",
  description:
    "Descubra o Calma, um aplicativo incrivelmente simples de sons relaxantes para noites mais calmas, rotinas pacíficas e paisagens sonoras personalizadas.",
  keywords: [
    "aplicativo de sons relaxantes",
    "sons de relaxamento",
    "aplicativo de sons calmantes",
    "sons ambientes relaxantes",
    "calma sons relaxantes",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/relaxing-sounds",
  },
  openGraph: {
    title: "App de Sons Relaxantes | Calma",
    description:
      "Descubra um aplicativo incrivelmente simples de sons relaxantes para noites mais calmas e rotinas diárias pacíficas.",
    url: "https://www.calmasounds.com/pt-BR/relaxing-sounds",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Sons Relaxantes | Calma",
    description:
      "Descubra um aplicativo incrivelmente simples de sons relaxantes para noites mais calmas e rotinas diárias pacíficas.",
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
      "name": "App de Sons Relaxantes",
      "item": "https://www.calmasounds.com/pt-BR/relaxing-sounds"
    }
  ]
};

export default function RelaxingSoundsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sons relaxantes
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Um aplicativo de sons relaxantes para noites mais calmas e rotinas diárias mais suaves
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          O Calma é um aplicativo de sons relaxantes lindamente simples que ajuda você a
          desacelerar, se recompor após dias agitados e criar um ambiente mais pacífico
          sempre que precisar. Construa paisagens sonoras personalizadas para relaxamento,
          equilíbrio emocional e rituais diários tranquilos.
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
            <h2 className="text-2xl font-semibold">Desacelere mais facilmente</h2>
            <p className="mt-4 leading-7 text-white/70">
              Use paisagens sonoras relaxantes para sair do modo de trabalho, aquietar o
              ruído mental e criar uma transição noturna mais suave.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Crie sua própria mixagem relaxante</h2>
            <p className="mt-4 leading-7 text-white/70">
              Combine sons de uma forma que pareça pessoal, calorosa e alinhada com
              a atmosfera que você deseja ao seu redor.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Construa um ritual diário mais suave</h2>
            <p className="mt-4 leading-7 text-white/70">
              O Calma ajuda você a voltar ao relaxamento de uma maneira simples e elegante
              que se adapta à vida real do dia a dia.
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
            Veja o lado relaxante do Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interface do aplicativo móvel Calma para escolha de categorias de sons relaxantes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interface do Calma para personalização de paisagens sonoras de ambiente relaxante"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Misturador de sons do Calma mostrando texturas naturais e camadas de áudio calmantes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface do Calma para gerenciamento de mixagens personalizadas de sons de relaxamento"
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
            Aprenda mais sobre relaxamento e som
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/pt-BR/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Benefícios dos Sons da Natureza</h3>
            <p className="mt-3 text-white/70">
              Explore como paisagens sonoras naturais, como chuva e ondas do oceano, podem atuar como aterramento natural para o relaxamento.
            </p>
          </a>
          <a
            href="/pt-BR/blog/guided-breathing-techniques"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Técnicas de Respiração Guiada</h3>
            <p className="mt-3 text-white/70">
              Descubra métodos calmantes de respiração que trabalham em conjunto com sons ambientes para um relaxamento mais profundo.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ do app de sons relaxantes
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O que é um aplicativo de sons relaxantes?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Um aplicativo de sons relaxantes ajuda você a tocar áudio calmante que apoia o
              relaxamento, redefinição emocional e rotinas mais tranquilas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Quando posso usar o Calma para relaxar?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Você pode usar o Calma após o trabalho, durante o relaxamento noturno, enquanto
              lê, descansa ou sempre que desejar um ambiente mais suave ao seu redor.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Posso personalizar os sons relaxantes?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim. O Calma é projetado em torno de criar a sua própria paisagem sonora relaxante
              personalizada em vez de depender de apenas uma faixa fixa.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Experimente o Calma para momentos diários mais calmos
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Baixe o Calma no Google Play e crie uma atmosfera mais pacífica
            com sons relaxantes personalizados.
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
