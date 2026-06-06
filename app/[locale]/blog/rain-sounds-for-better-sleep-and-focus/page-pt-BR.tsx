import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";

export const metadata: Metadata = {
  title: "Por Que os Sons da Chuva São o Segredo Definitivo para um Sono e Foco Melhores | Blog do Calma",
  description:
    "Descubra por que sons constantes de chuva são perfeitos para acalmar sua mente, vencer a insônia e mantê-lo focado durante o trabalho profundo. Descubra a ciência por trás disso.",
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog/rain-sounds-for-better-sleep-and-focus",
  },
  openGraph: {
    title: "Por Que os Sons da Chuva São o Segredo Definitivo para um Sono e Foco Melhores",
    description:
      "Descubra por que sons constantes de chuva são perfeitos para acalmar sua mente, vencer a insônia e mantê-lo focado.",
    url: "https://www.calmasounds.com/pt-BR/blog/rain-sounds-for-better-sleep-and-focus",
    siteName: "Calma",
    locale: "pt_BR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Por Que os Sons da Chuva São o Segredo Definitivo para um Sono e Foco Melhores",
  description:
    "Descubra por que sons constantes de chuva são perfeitos para acalmar sua mente, vencer a insônia e mantê-lo focado durante o trabalho profundo.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
    logo: {
      "@type": "ImageObject",
      url: "https://www.calmasounds.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.calmasounds.com/pt-BR/blog/rain-sounds-for-better-sleep-and-focus",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://www.calmasounds.com/pt-BR",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.calmasounds.com/pt-BR/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sons de Chuva para Sono e Foco",
      item: "https://www.calmasounds.com/pt-BR/blog/rain-sounds-for-better-sleep-and-focus",
    },
  ],
};

export default function RainSoundsBlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8">
          <Link
            href="/pt-BR/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          >
            ← Voltar ao Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Por Que os Sons da Chuva São o Segredo Definitivo para um Sono e Foco Melhores
        </h1>
        
        <div className="mt-8">
          {/* YouTube Shorts Embed */}
          <div className="flex justify-center mb-8">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <YouTubeEmbed
                videoId="ds-fFkoWBUo"
                title="YouTube video player"
              />
            </div>
          </div>

          <p className="mt-6 text-lg leading-8 text-white/80">
            É universalmente reconhecido que o tamborilar constante das gotas de chuva contra uma janela cria uma atmosfera reconfortante única. Mas além de apenas parecer aconchegante, há ciência real para apoiar os benefícios dos <strong>sons da chuva</strong>. Se você luta para adormecer à noite ou se sente distraído ao tentar estudar, incorporar paisagens sonoras naturais pode melhorar profundamente as suas rotinas.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">A Mágica por Trás dos Sons para Dormir</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Nossos cérebros procuram naturalmente por padrões. O ruído rítmico e não ameaçador da chuva caindo cria uma manta contínua de áudio — muitas vezes comparada ao ruído rosa. Este cobertor acústico mascara os ruídos de fundo perturbadores (como tráfego repentino, o latido de um cachorro ou um vizinho barulhento) que de outra forma poderiam assustá-lo e acordá-lo. 
            <strong> Sons para dormir</strong> construídos em torno de loops de chuva genuínos ajudam o seu cérebro a se sentir seguro, facilitando a sua transição para ciclos de sono profundo.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">Por Que os Sons de Foco o Mantêm na Zona</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Embora o silêncio possa parecer ideal para concentração, um quarto completamente silencioso pode, ironicamente, tornar os pequenos ruídos de fundo muito mais perturbadores. Entram os <strong>sons de foco</strong>. A chuva atua como uma máscara ativa. Ouvir o ambiente delicado e constante de uma tempestade pode diminuir o estado de alerta do cérebro para interrupções repentinas. Para indivíduos estudando, lendo ou trabalhando longas horas — especialmente aqueles que gerenciam o TDAH — uma garoa suave é uma âncora auditiva consistente que promove foco contínuo sem atrair a atenção consciente.
          </p>

          <h2 className="mt-12 text-3xl font-semibold">Criando o Seu Ritual Pessoal</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Nem todas as gravações de chuva são criadas iguais. Alguns preferem tempestades dramáticas e pesadas, enquanto outros adormecem facilmente ao som de uma chuva suave batendo nas folhas. A beleza dos modernos aplicativos misturadores de som é a capacidade de criar o seu ambiente em camadas. Ao escolher <strong>sons de chuva</strong> de alta qualidade e misturá-los com vento suave ou piano suave, você faz a curadoria da sua zona de conforto exata.
          </p>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Pronto para Atualizar o seu Sono e Foco?</h3>
            <p className="mt-4 leading-7 text-white/70">
              O aplicativo Calma oferece mixagens de chuva primorosamente criadas junto com camadas de ruído branco personalizadas. Construa sua paisagem sonora personalizada e assuma o controle do seu ambiente de áudio.
            </p>
            <div className="mt-6 flex justify-center sm:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="Baixe o App Calma no Google Play"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Disponível no Google Play"
                  width={240}
                  height={93}
                  className="h-[60px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
