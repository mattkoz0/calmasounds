import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/routing";
import { pathnamesMapping } from "@/app/utils/seo";

type BlogHref = ComponentProps<typeof Link>["href"];

export const metadata: Metadata = {
  title: "Blog do Calma | Guias de Sono, Ruído Branco e Foco",
  description:
    "Explore os guias do Calma sobre sons para dormir, ruído branco, rotinas de sono e paisagens sonoras para foco.",
  alternates: {
    canonical: "https://www.calmasounds.com/pt-BR/blog",
  },
  openGraph: {
    title: "Blog do Calma | Guias de Sono, Ruído Branco e Foco",
    description:
      "Explore os guias do Calma sobre sons para dormir, ruído branco, rotinas de sono e paisagens sonoras para foco.",
    url: "https://www.calmasounds.com/pt-BR/blog",
    siteName: "Calma",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog do Calma | Guias de Sono, Ruído Branco e Foco",
    description:
      "Explore os guias do Calma sobre sons para dormir, ruído branco, rotinas de sono e paisagens sonoras para foco.",
  },
};

const articles = [
  {
    href: "/blog/benefits-of-nature-sounds-for-relaxation",
    title: "Sons da Natureza para Relaxamento Profundo",
    description:
      "Explore como paisagens sonoras naturais, como chuva e ondas do oceano, podem atuar como ruído branco natural para melhorar sua rotina de dormir.",
  },
  {
    href: "/blog/best-sounds-for-sleep",
    title: "Melhores Sons para Dormir",
    description:
      "Um guia prático sobre chuva, ruído branco e paisagens sonoras de sono mais suaves.",
  },
  {
    href: "/blog/white-noise-for-sleep",
    title: "Ruído Branco para Dormir",
    description:
      "Quando o ruído branco pode ajudar e como construir um ambiente de dormir mais calmo.",
  },
  {
    href: "/blog/rain-sounds-vs-white-noise",
    title: "Sons de Chuva vs Ruído Branco",
    description:
      "Compare o conforto emocional, o mascaramento de som e a atmosfera da hora de dormir.",
  },
  {
    href: "/blog/how-to-build-a-bedtime-routine",
    title: "Como Construir uma Rotina de Dormir",
    description:
      "Maneiras simples de criar um ritmo noturno mais calmo que apoie o sono.",
  },
  {
    href: "/blog/best-sounds-for-studying",
    title: "Melhores Sons para Estudar",
    description:
      "Encontre os tipos de sons que podem ajudar na concentração e no foco mais profundo.",
  },
  {
    href: "/blog/binaural-beats-for-sleep-and-focus",
    title: "Batidas Binaurais para Sono e Foco",
    description:
      "Uma introdução simples de como as batidas binaurais podem apoiar a calma e o foco.",
  },
  {
    href: "/blog/guided-breathing-techniques",
    title: "Técnicas de Respiração Guiada",
    description:
      "Explore métodos calmantes de respiração para relaxamento, equilíbrio, sono e foco.",
  },
  {
    href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
    title: "Ruído Marrom vs Ruído Branco vs Ruído Rosa",
    description:
      "Explore as diferenças entre as cores do ruído e descubra qual é o melhor para seu foco ou sono.",
  },
  {
    href: "/blog/rain-sounds-for-better-sleep-and-focus",
    title: "Por Que os Sons da Chuva São o Segredo Definitivo para um Sono e Foco Melhores",
    description: "Descubra por que sons constantes de chuva são perfeitos para acalmar sua mente, vencer a insônia e mantê-lo focado.",
  },
  {
    href: "/blog/green-noise-for-sleep",
    title: "Ruído Verde para Dormir: A Maneira Natural de Descansar",
    description: "Descubra o que é o ruído verde e por que suas frequências semelhantes à natureza podem ser a paisagem sonora perfeita para o sono.",
  },
  {
    href: "/blog/best-free-white-noise-app",
    title: "O Melhor Aplicativo Gratuito de Ruído Branco para Dormir",
    description: "Procurando sons para dormir grátis? Descubra por que o Calma é a escolha perfeita para criar ruído branco.",
  },
  {
    href: "/blog/best-color-noise-for-adhd",
    title: "Cores de ruído e TDAH: o que a pesquisa mostra",
    description: "Compare ruídos branco, rosa e marrom e conheça os limites das evidências atuais.",
  },
  {
    href: "/blog/sounds-for-tinnitus-relief",
    title: "Sons para mascaramento do zumbido",
    description: "Compare sons suaves, cuidados de audição e quando procurar um profissional.",
  },
  {
    href: "/blog/white-noise-for-babies",
    title: "Ruído branco para bebês: uso cuidadoso",
    description: "Orientações de volume, distância e duração para uma rotina de sono mais segura.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog do Calma",
  url: "https://www.calmasounds.com/pt-BR/blog",
  description:
    "Guias sobre sons para dormir, ruído branco, sons de foco e rotinas calmantes.",
  hasPart: articles.map(article => {
    const mapping = pathnamesMapping[article.href];
    const localizedPath = (mapping && mapping["pt-BR"]) || article.href;
    return {
      "@type": "Article",
      headline: article.title,
      url: `https://www.calmasounds.com/pt-BR${localizedPath}`,
    };
  }),
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
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.calmasounds.com/pt-BR/blog"
    }
  ]
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />



      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Blog do Calma
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Guias de sono, ruído branco e foco
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Explore artigos práticos sobre sons para dormir, rotinas de sono,
          ruído branco, relaxamento e foco profundo.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href as BlogHref}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-4 leading-7 text-white/70">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Explore o Calma</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/sleep-sounds-app"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 hover:scale-[1.02] transition"
            >
              App de sons para dormir
            </Link>
            <Link
              href="/white-noise-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              App de ruído branco
            </Link>
            <Link
              href="/focus-sounds-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              App de sons para foco
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
