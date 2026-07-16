import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import AiDefinition from "./_components/ai-definition";
import DesktopDownloadQr from "./_components/desktop-download-qr";
import MoreApps from "./_components/more-apps";

export const metadata: Metadata = {
  title: "Calma | App de Sons para Dormir, Ruído Branco e Foco",
  description:
    "O Calma é um app de sons para dormir para relaxamento, ruído branco e foco. Crie paisagens sonoras personalizadas para um sono melhor, noites mais calmas e concentração mais profunda.",
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR",
  },
  openGraph: {
    title: "Calma | App de Sons para Dormir, Ruído Branco e Foco",
    description:
      "O Calma é um app de sons para dormir para relaxamento, ruído branco e foco. Crie paisagens sonoras personalizadas para um sono melhor, noites mais calmas e concentração mais profunda.",
    url: "https://www.calmasounds.com/pt-BR",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | App de Sons para Dormir, Ruído Branco e Foco",
    description:
      "O Calma é um app de sons para dormir para relaxamento, ruído branco e foco. Crie paisagens sonoras personalizadas para um sono melhor, noites mais calmas e concentração mais profunda.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calma",
  url: "https://www.calmasounds.com/pt-BR",
  description:
    "O Calma é um app de sons para dormir para relaxamento, ruído branco e foco. Crie paisagens sonoras personalizadas para um sono melhor, noites mais calmas e concentração mais profunda.",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calma App",
  sameAs: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    "https://www.youtube.com/@CalmaApp",
    "https://www.tiktok.com/@.calma.app",
    "https://www.instagram.com/calma.app.official",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ],
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Sleep and Relaxation",
  operatingSystem: "Android 8.0 and up",
  url: "https://www.calmasounds.com/pt-BR",
  downloadUrl: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
  ],
  description:
    "App de sons para dormir, ruído branco, relaxamento e foco com paisagens sonoras personalizadas.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  softwareVersion: "1.0.0",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calma",
  url: "https://www.calmasounds.com/pt-BR",
  logo: "https://www.calmasounds.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "calma.app@outlook.com",
    contactType: "customer support",
    availableLanguage: ["English", "Portuguese"]
  },
  sameAs: [
    "https://www.tiktok.com/@.calma.app",
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    "https://www.instagram.com/calma.app.official",
    "https://www.youtube.com/@CalmaApp",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é o Calma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Calma é um aplicativo misturador de som projetado para ajudá-lo a dormir melhor, relaxar com mais facilidade e manter o foco com mixagens de áudio personalizadas.",
      },
    },
    {
      "@type": "Question",
      name: "Para quem é o Calma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Calma é para quem deseja uma rotina de sono mais calma, um reset mais pacífico após o trabalho ou um fundo focado para estudo e trabalho profundo.",
      },
    },
    {
      "@type": "Question",
      name: "Posso criar minha própria mixagem de sons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O Calma é construído em torno da ideia de criar seu próprio ambiente sonoro relaxante em vez de ouvir apenas uma faixa fixa.",
      },
    },
    {
      "@type": "Question",
      name: "O Calma está disponível agora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Calma está disponível no Android e iOS (App Store), com mais melhorias e futura expansão de plataforma planejadas ao longo do tempo.",
      },
    },
    {
      "@type": "Question",
      name: "O Calma é gratuito ou requer assinatura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Calma oferece uma versão gratuita e um desbloqueio premium vitalício com um pagamento único. Nenhuma assinatura mensal ou anual é necessária.",
      },
    },
    {
      "@type": "Question",
      name: "O Calma funciona offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o Calma funciona completamente offline. Você pode misturar e ouvir seus sons sem estar conectado à internet.",
      },
    },
    {
      "@type": "Question",
      name: "O Calma inclui ruído branco, ruído marrom e ruído rosa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o Calma inclui ruído branco, marrom, rosa e verde de alta qualidade, que você pode misturar com sons de chuva, oceano, ventilador e natureza.",
      },
    },
  ],
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Demonstração do App Calma",
  description: "Assista ao Calma em movimento, desde a mixagem de som imersiva até os recursos premium de bem-estar projetados para sono, relaxamento e foco.",
  thumbnailUrl: "https://www.calmasounds.com/screenshots/3_en.png",
  uploadDate: "2026-03-30T09:00:00Z",
  duration: "PT34S",
  contentUrl: "https://www.calmasounds.com/demo.mp4",
  embedUrl: "https://www.calmasounds.com/demo.mp4"
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://www.calmasounds.com/pt-BR"
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(softwareAppJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(videoJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbJsonLd),
              }}
            />

      <AiDefinition 
        title="O que é o Calma?" 
        description="O Calma é um aplicativo de sons para dormir e relaxar que permite aos usuários criar paisagens sonoras personalizadas misturando chuva, oceano, ruído branco, ruído marrom, sons da natureza e ambiente. Perfeito para dormir, relaxar, focar e para rotinas noturnas. O Calma oferece acesso vitalício com um único pagamento sem necessidade de assinatura." 
      />

      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center lg:grid lg:grid-cols-12 lg:gap-12 lg:text-left lg:items-center">
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
          <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
            Calma • Sons para Dormir & Relaxar
          </span>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Durma melhor, relaxe mais e foque com paisagens sonoras personalizadas
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            O Calma é um aplicativo maravilhosamente simples de sons para dormir e relaxamento que o ajuda
            a criar mixagens de áudio personalizadas para um sono melhor, noites mais calmas e
            foco mais profundo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start w-full">
            <Link
              href="/download"
              data-cta-location="home_hero"
              className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
            >
              Inicie sua rotina gratuita
            </Link>

            <a
              href="#features"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Explorar recursos
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-white/65">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Mixagens personalizadas
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Dormir • Relaxar • Focar
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Sem pressão de assinatura
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 lg:hidden">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
            >
              <Image
                src="/google-play-badge.png"
                alt="Disponível no Google Play"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
            >
              <Image
                src="/apple-appstore-badge.png"
                alt="Baixar na App Store"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
          <DesktopDownloadQr />
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 text-center">
        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Dormir Melhor
            </p>
            <h2 className="mt-3 text-xl font-semibold">Sons Personalizados para Dormir & Ambiente de Chuva</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Crie mixagens de sons para dormir com sons de chuva, texturas ambientes e camadas
              de fundo suaves que o ajudam a relaxar naturalmente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Relaxamento Profundo
            </p>
            <h2 className="mt-3 text-xl font-semibold">Sons Relaxantes da Natureza para Descanso Profundo</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Use paisagens sonoras relaxantes para redefinir sua mente, reduzir o ruído ao seu redor
              e construir uma rotina noturna mais suave.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              TDAH & Foco
            </p>
            <h2 className="mt-3 text-xl font-semibold">Ruído Marrom & Sons de Foco para TDAH</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Construa seu próprio áudio de fundo para estudar, ler e trabalhar focado
              sem visuais perturbadores ou desordem.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Demonstração em vídeo
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Assista ao Calma em movimento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Veja como o Calma se parece na vida real, desde a mixagem de som imersiva
            aos recursos premium de bem-estar projetados para sono, relaxamento e foco.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20">
          <video
            className="h-auto w-full rounded-[1.5rem]"
            controls
            preload="metadata"
            playsInline
            poster="/screenshots/3_en.png"
            title="Vídeo de demonstração do aplicativo Calma"
            aria-label="Vídeo de demonstração do aplicativo Calma"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Pré-visualização do aplicativo
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Veja o Calma em ação
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explore a interface incrivelmente simples do Calma e veja como o aplicativo
            ajuda você a criar paisagens sonoras relaxantes para dormir, relaxar e se concentrar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interface do aplicativo móvel Calma mostrando uma lista de sons para dormir e categorias de relaxamento"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface do misturador de som Calma para personalizar o ruído branco para dormir e focar"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/5_en.png"
              alt="Captura de tela 3 do aplicativo Calma"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/7_en.png"
              alt="Interface do misturador de som Calma para criar misturas personalizadas de ruído branco"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Recursos exclusivos
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Mais do que apenas sons para dormir
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            O Calma vai além da simples reprodução, com recursos envolventes projetados para tornar
            suas rotinas mais pessoais, relaxantes e memoráveis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Brainwave Lab
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Ajuste seu estado com experimentos de áudio imersivos
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Explore um lado mais avançado da calma com experiências sonoras criadas para
              sono, foco e reinicialização mental mais profunda.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Respiração Guiada
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Respire com um ritmo mais suave
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              A orientação visual suave para a respiração ajuda a transformar o aplicativo em um
              ritual calmante, não apenas um reprodutor de áudio passivo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Ritual do Céu Noturno
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Um momento tranquilo de descoberta
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Adicione uma sensação de admiração à sua rotina com um recurso que torna a
              calma diária mais significativa, divertida e emocionalmente gratificante.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Por que o Calma
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Uma experiência mais calma, projetada com intenção
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            O Calma é construído para parecer elegante, focado e leve emocionalmente. Ajuda
            você a criar um ambiente de som melhor, sem desordem, atrito ou ruído visual.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Crie a sua própria atmosfera</h3>
            <p className="mt-4 leading-7 text-white/70">
              Misture sons com base no seu humor, na sua rotina e no seu momento. O Calma
              oferece uma experiência mais pessoal do que aplicativos de áudio genéricos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Sinta-se mais calmo, não sobrecarregado</h3>
            <p className="mt-4 leading-7 text-white/70">
              A interface foi projetada para apoiar a calma, não a distração. Cada tela
              visa ser simples, imersiva e fácil de retornar diariamente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Um aplicativo, vários rituais diários</h3>
            <p className="mt-4 leading-7 text-white/70">
              Use o Calma antes de dormir, durante o relaxamento noturno, enquanto trabalha ou
              quando precisar de um fundo mais suave para o seu dia.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Construído para parecer premium e aconchegante</h3>
            <p className="mt-4 leading-7 text-white/70">
              O Calma combina uma aparência polida com um tom emocional suave, ajudando
              o aplicativo a parecer um lugar para o qual você deseja voltar.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Explore mais
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Descubra o Calma por intenção
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explore páginas dedicadas para sono, relaxamento e foco para encontrar
            o lado do Calma que melhor se adapta à sua rotina.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/sleep-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Dormir
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              App de sons para dormir
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Explore como o Calma suporta noites mais calmas, rotinas de hora de dormir e
              paisagens sonoras personalizadas.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explorar a página de sono →
            </span>
          </Link>

          <Link
            href="/relaxing-sounds"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Relaxar
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Sons relaxantes
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Descubra um lado mais suave do Calma, criado para noites tranquilas,
              reset emocional e rituais diários calmantes.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explorar a página relaxante →
            </span>
          </Link>

          <Link
            href="/focus-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Foco
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              App de sons para foco
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Veja como o Calma ajuda a criar um ambiente mais tranquilo para um trabalho
              profundo, concentração e sessões de estudo.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explorar a página de foco →
            </span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Guias
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Leia nossos guias de sono e foco
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explore leituras práticas sobre sons de sono, ruído branco, estudos e rotinas noturnas mais tranquilas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Sons de chuva para dormir e focar</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Por que sons de chuva constante são perfeitos para acalmar a mente.
            </p>
          </Link>

          <Link
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Melhores sons para dormir</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Chuva, ruído branco e paisagens sonoras mais suaves para dormir.
            </p>
          </Link>

          <Link
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Melhores sons para estudar</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Descubra quais sons podem ajudar na concentração e foco.
            </p>
          </Link>
        </div>
      </section>
      
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Conhecimento sonoro
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Entenda as cores do ruído
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Você sabia que o ruído tem cores? Desde mascarar distrações até apoiar o foco e TDAH, diferentes frequências atendem a diferentes necessidades.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Ruído Branco
            </div>
            <h3 className="text-xl font-semibold">Perfeito para mascarar</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Cobre todas as frequências audíveis de forma igualitária. Ideal para bloquear sons repentinos e apoiar o sono do bebê.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Ruído Rosa
            </div>
            <h3 className="text-xl font-semibold">Equilibrado e natural</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Mais profundo que o ruído branco, simulando sons como chuva ou vento constantes. Ótimo para melhorar a qualidade geral do sono.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Ruído Marrom
            </div>
            <h3 className="text-xl font-semibold">Apoio a foco e TDAH</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Intenso em baixas frequências, como uma cachoeira distante. Cada vez mais popular para foco profundo e para acalmar mentes agitadas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Ruído Verde
            </div>
            <h3 className="text-xl font-semibold">Harmonia da Natureza</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Foco em frequências médias, como folhas de árvores balançando. Perfeito para uma atmosfera calma e natural.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Leia o guia completo das cores de ruído
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">O que é o Calma?</h3>
            <p className="mt-3 leading-7 text-white/70">
              O Calma é um aplicativo misturador de som projetado para ajudá-lo a dormir melhor, relaxar
              mais facilmente e manter o foco com mixagens de áudio personalizadas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Para quem é o Calma?</h3>
            <p className="mt-3 leading-7 text-white/70">
              O Calma é para quem deseja uma rotina de sono mais calma, um descanso mais
              pacífico após o trabalho ou um fundo focado para estudo e
              trabalho profundo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Posso criar minha própria mixagem de sons?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim. O Calma é construído em torno da ideia de criar o seu próprio
              ambiente sonoro relaxante, em vez de ouvir apenas uma faixa fixa.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">O Calma está disponível agora?</h3>
            <p className="mt-3 leading-7 text-white/70">
              O Calma está disponível no Android e iOS (App Store), com mais melhorias e
              expansão de plataforma no futuro.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">O Calma é gratuito ou requer assinatura?</h3>
            <p className="mt-3 leading-7 text-white/70">
              O Calma oferece uma versão gratuita e um desbloqueio premium vitalício com um pagamento único. Nenhuma assinatura mensal ou anual é necessária.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">O Calma funciona offline?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, o Calma funciona completamente offline. Você pode misturar e ouvir seus sons sem estar conectado à internet.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">O Calma inclui ruído branco, marrom e rosa?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Sim, o Calma inclui ruído branco, marrom, rosa e verde de alta qualidade, que você pode misturar com sons de chuva, oceano, ventilador e natureza.
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:text-left lg:items-center">
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Comece agora
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Baixe o Calma e construa uma rotina mais suave
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Crie paisagens sonoras personalizadas para um sono melhor, noites mais calmas e
              foco mais profundo com um aplicativo lindamente simples feito para o dia a dia.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 lg:hidden">
              <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition hover:scale-[1.02]"
                aria-label="Download Calma App on Google Play"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Disponível no Google Play"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition hover:scale-[1.02]"
                aria-label="Download Calma App on Apple App Store"
              >
                <Image
                  src="/apple-appstore-badge.png"
                  alt="Baixar na App Store"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:flex lg:justify-center lg:w-full">
            <DesktopDownloadQr />
          </div>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Procurando uma página dedicada ao sono?{" "}
          <Link
            href="/sleep-sounds-app"
            className="text-white underline underline-offset-4 transition hover:text-white/80"
          >
            Explore nossa página do aplicativo de sons para dormir
          </Link>
        </p>

        <p className="mt-3 text-sm text-white/60">
          Procurando mais ideias para a hora de dormir?{" "}
          <Link
            href="/blog/best-sounds-for-sleep"
            className="text-white underline underline-offset-4 transition hover:text-white/80"
          >
            Leia nosso guia dos melhores sons para dormir
          </Link>
        </p>
        <p className="mt-3 text-sm text-white/60">
          Deseja aprender mais sobre diferentes ruídos coloridos?{" "}
          <Link
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="text-white underline underline-offset-4 transition hover:text-white/80"
          >
            Leia o nosso guia de cores de ruído para foco e sono
          </Link>
        </p>
      </section>

      <MoreApps locale="pt-BR" />
    </main>
  );
}
