import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ruído Marrom vs Ruído Branco: Qual é o melhor? | Calma",
  description:
    "O ruído marrom é melhor que o ruído branco para dormir? Por que ajuda no TDAH? Descubra as diferenças científicas entre o ruído rosa, marrom e branco.",
  keywords: [
    "ruido marrom vs ruido branco",
    "ruido rosa vs ruido branco",
    "ruido marrom para dormir",
    "por que o ruido marrom ajuda no tdah",
    "cores do ruido",
    "calma app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Ruído Marrom vs Ruído Branco: Qual é o melhor?",
    description:
      "Descubra as diferenças científicas entre o ruído rosa, marrom e branco, e qual é o melhor para dormir.",
    url: "https://www.calmasounds.com/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "pt_BR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O ruído marrom é melhor que o ruído branco para dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para muitas pessoas, sim. O ruído marrom é melhor se o chiado agudo do ruído branco for irritante para você. O ruído marrom elimina essas frequências altas e soa como uma cachoeira profunda, o que costuma ser mais relaxante."
      }
    },
    {
      "@type": "Question",
      "name": "Por que o ruído marrom ajuda no TDAH?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ajuda pessoas com TDAH porque seu estrondo profundo fornece uma estimulação constante. Isso satisfaz a necessidade de estimulação do cérebro, evitando que ele busque distrações."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a diferença entre ruído rosa, marrom e branco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O ruído branco tem energia igual em todas as frequências. O ruído rosa reduz as frequências altas (como chuva constante). O ruído marrom as reduz ainda mais, criando um estrondo muito profundo (como um trovão distante)."
      }
    }
  ]
};

export default function NoiseColorsPagePTBR() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/pt-BR/white-noise-app"
      topLinkLabel="Explorar app de ruído branco"
      title="Ruído Marrom vs Ruído Branco: Qual é melhor para dormir e TDAH?"
      intro="Nem todo 'ruído branco' é realmente branco. No mundo do áudio, os sons são categorizados por 'cores' com base em sua frequência. Entender a diferença entre o ruído branco, rosa, marrom e verde é o segredo para dormir melhor ou melhorar a concentração."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Baixar App Calma Grátis"
      secondaryCtaHref="/pt-BR/sound-mixer-app"
      secondaryCtaLabel="Explorar app de mixagem"
      tableOfContents={[
        { id: "video", title: "Vídeo: Cores do Ruído" },
        { id: "difference", title: "Qual é a diferença?" },
        { id: "is-brown-better", title: "O ruído marrom é melhor para dormir?" },
        { id: "adhd", title: "Por que o ruído marrom ajuda no TDAH?" },
        { id: "comparison-table", title: "Tabela comparativa" },
        { id: "faq", title: "Perguntas Frequentes" },
      ]}
      relatedArticles={[
        {
          href: "/pt-BR/blog/white-noise-for-sleep",
          title: "Ruído Branco para Dormir",
          description: "Aprenda como o ruído branco pode ajudar você a adormecer mais rápido.",
        },
      ]}
    >
      <ArticleSection id="video" title="Assistir: As Cores do Ruído Explicadas">
        <div className="flex justify-center mt-6">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <YouTubeEmbed
                    videoId="MlJNs1K66xc"
                    title="The Colors of Noise"
                />
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="difference" title="Qual é a diferença entre ruído rosa, marrom e branco?">
        <div className="mt-6 space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1. Verdadeiro ruído branco</h3>
            <p className="mb-4 leading-8 text-white/70">
              Contém todas as frequências audíveis reproduzidas na mesma intensidade. Soa como estática de TV e mascara ruídos agudos.
            </p>
            <AudioPlayer 
              src="/white_noise.m4a" 
              title="Ruído Branco" 
              description="Estática consistente."
              colorClass="bg-slate-500/20 text-slate-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">2. Ruído rosa (Sons naturais)</h3>
            <p className="mb-4 leading-8 text-white/70">
              O ruído rosa reduz o volume das altas frequências. Imita ambientes naturais, como chuva constante.
            </p>
            <AudioPlayer 
              src="/pink_noise.m4a" 
              title="Ruído Rosa" 
              description="Som equilibrado, semelhante a chuva forte."
              colorClass="bg-pink-500/20 text-pink-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">3. Ruído marrom (Grave profundo)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Remove quase todos os sons de alta frequência, deixando um estrondo poderoso (semelhante à cabine de um avião).
            </p>
            <AudioPlayer 
              src="/brown_noise.m4a" 
              title="Ruído Marrom" 
              description="Frequências retumbantes e profundas."
              colorClass="bg-orange-500/20 text-orange-300"
            />
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="is-brown-better" title="O ruído marrom é melhor que o ruído branco para dormir?">
        <p className="mt-4 leading-8 text-white/70">
          Para a grande maioria, <strong>sim</strong>. O ruído marrom elimina as frequências agudas do ruído branco. Esta frequência profunda sinaliza segurança ao sistema nervoso naturalmente.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd" title="Por que o ruído marrom ajuda no TDAH?">
        <p className="mt-4 leading-8 text-white/70">
          O ruído marrom age como uma \"massagem de áudio\" contínua para o cérebro. Ao fornecer um fluxo constante de estimulação auditiva, satisfaz o desejo de informação do cérebro, permitindo concentração.
        </p>
      </ArticleSection>

      <ArticleSection id="comparison-table" title="Tabela comparativa">
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-slate-800/50 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Cor</th>
                <th className="px-6 py-4 font-semibold">Soa como</th>
                <th className="px-6 py-4 font-semibold">Ideal para</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-300">Branco</td>
                <td className="px-6 py-4">Ventilador</td>
                <td className="px-6 py-4">Bloquear ronco.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-pink-300">Rosa</td>
                <td className="px-6 py-4">Chuva</td>
                <td className="px-6 py-4">Melhorar o sono.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-orange-300">Marrom</td>
                <td className="px-6 py-4">Avião, trovão</td>
                <td className="px-6 py-4">Concentração (TDAH).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
          >
            <Image
              src="/google-play-badge.png"
              alt="Baixar App Calma Grátis"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Perguntas Frequentes (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">O ruído marrom é melhor que o ruído branco para dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Sim. O ruído marrom elimina as altas frequências e soa como uma cachoeira profunda, o que costuma ser mais relaxante.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Por que o ruído marrom ajuda no TDAH?</h3>
            <p className="mt-2 leading-7 text-white/70">Seu estrondo profundo fornece estimulação constante, evitando distrações.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Qual é a diferença entre ruído rosa, marrom e branco?</h3>
            <p className="mt-2 leading-7 text-white/70">O ruído branco tem energia igual em todas as frequências. O rosa reduz as frequências altas, e o marrom as reduz ainda mais.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
