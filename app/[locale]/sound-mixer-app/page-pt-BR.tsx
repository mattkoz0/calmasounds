import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Misturador de Sons para Dormir | Calma",
  description:
    "Crie misturas de áudio relaxantes com chuva e sons da natureza. Use o misturador Calma para relaxar, focar e dormir profundamente.",
  keywords: [
    "aplicativo misturador de som",
    "misturador de som para dormir",
    "misturador de som para relaxamento",
    "misturador de som para foco",
    "paisagens sonoras personalizadas",
    "calma misturador de som",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/sound-mixer-app",
  },
  openGraph: {
    title: "Misturador de Sons para Dormir | Calma",
    description:
    "Crie misturas de áudio relaxantes com chuva e sons da natureza. Use o misturador Calma para relaxar, focar e dormir profundamente.",
    url: "https://www.calmasounds.com/pt-BR/sound-mixer-app",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Misturador de Sons para Dormir | Calma",
    description:
    "Crie misturas de áudio relaxantes com chuva e sons da natureza. Use o misturador Calma para relaxar, focar e dormir profundamente.",
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
      "name": "App Misturador de Som",
      "item": "https://www.calmasounds.com/pt-BR/sound-mixer-app"
    }
  ]
};

export default function SoundMixerAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App misturador de som
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Um aplicativo misturador de som para sono, relaxamento e foco personalizados
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          O Calma é um aplicativo misturador de som maravilhosamente simples que permite que você crie
          seu próprio ambiente de áudio em vez de depender de uma faixa fixa.
          Crie paisagens sonoras personalizadas para a hora de dormir, relaxamento noturno, trabalho
          profundo e rotinas diárias mais calmas.
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
            <h2 className="text-2xl font-semibold">Crie sua própria mixagem</h2>
            <p className="mt-4 leading-7 text-white/70">
              Combine sons em torno do seu humor e rotina, em vez de se adaptar a
              uma faixa de áudio genérica.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Use um aplicativo para vários momentos</h2>
            <p className="mt-4 leading-7 text-white/70">
              Crie paisagens sonoras para sono, relaxamento, foco e calma diária
              em uma experiência simples e coesa.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mantenha a experiência elegante</h2>
            <p className="mt-4 leading-7 text-white/70">
              O Calma é projetado para parecer claro, quente e premium, para que construir uma
              mixagem de som pareça intuitivo em vez de técnico.
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
            Veja a experiência do misturador dentro do Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interface do aplicativo móvel Calma para criação de mixagens de som personalizadas"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interface do misturador de som Calma para personalizar paisagens sonoras de ambiente"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interface do Calma mostrando múltiplas camadas de áudio para relaxamento personalizado"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Controles do misturador de som do Calma para áudio de sono e foco"
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
            Aprenda mais sobre paisagens sonoras
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/pt-BR/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sons de Chuva vs Ruído Branco</h3>
            <p className="mt-3 text-white/70">
              Compare diferentes camadas atmosféricas e veja como misturá-las pode criar o áudio perfeito para foco ou sono.
            </p>
          </a>
          <a
            href="/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">As Cores do Ruído</h3>
            <p className="mt-3 text-white/70">
              Aprenda sobre as cores do ruído e como equilibrá-las no seu misturador de som pessoal.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ do app misturador de som
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O que é um aplicativo misturador de som?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Um aplicativo misturador de som ajuda você a combinar sons diferentes em um único
              ambiente de áudio personalizado para sono, relaxamento, foco ou
              calma diária.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Como o Calma é diferente de um aplicativo de som normal?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              O Calma é construído em torno da personalização, permitindo que você molde sua própria
              mixagem em vez de escolher apenas faixas pré-fabricadas fixas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Posso usar o Calma para mais do que dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim. O Calma apoia o sono, relaxamento, foco e rotinas diárias
              mais suaves por meio de paisagens sonoras personalizáveis.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Experimente o Calma como seu misturador de som diário
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Baixe o Calma no Google Play e crie paisagens sonoras personalizadas
            que se adequam ao sono, relaxamento, foco e momentos diários mais calmos.
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
