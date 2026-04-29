import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Sons para o Bebê Dormir | Calma",
  description:
    "Descubra o Calma, um aplicativo de sons para o bebê dormir com ruído branco suave, chuva delicada e atmosferas calmantes projetadas para ajudar seu recém-nascido ou criança a dormir pacificamente.",
  keywords: [
    "aplicativo de sons para bebê dormir",
    "ruído branco para bebês",
    "aplicativo de sono infantil",
    "música para o bebê dormir",
    "sons calmantes para recém-nascidos",
    "sons para a hora de dormir do bebê",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/baby-sleep-sounds-app",
  },
  openGraph: {
    title: "App de Sons para o Bebê Dormir | Calma",
    description:
      "Um aplicativo lindamente simples para ajudar seu bebê a se acalmar e adormecer com paisagens sonoras personalizadas e gentis.",
    url: "https://www.calmasounds.com/pt-BR/baby-sleep-sounds-app",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Sons para o Bebê Dormir | Calma",
    description:
      "Um aplicativo lindamente simples para ajudar seu bebê a se acalmar e adormecer com paisagens sonoras personalizadas e gentis.",
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
      "name": "App de Sons para o Bebê Dormir",
      "item": "https://www.calmasounds.com/pt-BR/baby-sleep-sounds-app"
    }
  ]
};

export default function BabySleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sons para o bebê dormir
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Sons suaves para ajudar seu pequeno a dormir em paz
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          O Calma é um aplicativo de sons de sono para bebês elegante e fácil de usar, oferecendo ruído branco
          consistente, chuva suave e baixas frequências semelhantes ao útero. Acalme rapidamente um bebê chorando, 
          estabeleça uma rotina de cochilo reconfortante e crie paisagens sonoras que mascaram ruídos repentinos.
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
            <h2 className="text-2xl font-semibold">Mascare sons perturbadores</h2>
            <p className="mt-4 leading-7 text-white/70">
              Os bebês se assustam facilmente com ruídos repentinos na casa. O ruído branco contínuo e rítmico do Calma cria um cobertor acústico que ajuda os bebês a dormir por mais tempo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Imite o útero</h2>
            <p className="mt-4 leading-7 text-white/70">
              O útero era um espaço barulhento e vibrante. Ruído marrom de baixa frequência, batimentos cardíacos e sons de águas profundas lembram o recém-nascido daquele ambiente seguro.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mixagem personalizável</h2>
            <p className="mt-4 leading-7 text-white/70">
              Cada bebê é diferente. Com o Calma, misture facilmente um ventilador zumbindo com chuva suave para encontrar a frequência exata que acalma instantaneamente o seu bebê.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ de sons para o bebê dormir
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O ruído branco é seguro para os bebês?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, o ruído branco é geralmente considerado muito seguro e eficaz para os bebês, desde que o volume seja mantido em um nível de conversação confortável (cerca de 50-60 decibéis) e o dispositivo seja colocado a uma distância segura do berço.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Qual cor de ruído é melhor para recém-nascidos?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Muitos bebês respondem bem ao ruído branco padrão, mas o ruído rosa e o ruído marrom (que enfatizam frequências mais profundas e graves) também podem ser perfeitos para simular os sons abafados do útero.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              O Calma requer internet para tocar offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              O Calma funciona offline. Depois de ter o aplicativo instalado, você não precisa de uma conexão ativa com a Internet para reproduzir a mixagem de sono favorita do seu bebê.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ajude seu bebê a dormir profundamente
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Baixe o Calma no Google Play e crie o ambiente de áudio perfeito para a hora da soneca e de dormir.
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
