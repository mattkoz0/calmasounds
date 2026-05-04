import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    href: "/pt-BR/blog/benefits-of-nature-sounds-for-relaxation",
    title: "Sons da Natureza para Relaxamento Profundo",
    description:
      "Explore como paisagens sonoras naturais, como chuva e ondas do oceano, podem atuar como ruído branco natural para melhorar sua rotina de dormir.",
  },
  {
    href: "/pt-BR/blog/best-sounds-for-sleep",
    title: "Melhores Sons para Dormir",
    description:
      "Um guia prático sobre chuva, ruído branco e paisagens sonoras de sono mais suaves.",
  },
  {
    href: "/pt-BR/blog/white-noise-for-sleep",
    title: "Ruído Branco para Dormir",
    description:
      "Quando o ruído branco pode ajudar e como construir um ambiente de dormir mais calmo.",
  },
  {
    href: "/pt-BR/blog/rain-sounds-vs-white-noise",
    title: "Sons de Chuva vs Ruído Branco",
    description:
      "Compare o conforto emocional, o mascaramento de som e a atmosfera da hora de dormir.",
  },
  {
    href: "/pt-BR/blog/how-to-build-a-bedtime-routine",
    title: "Como Construir uma Rotina de Dormir",
    description:
      "Maneiras simples de criar um ritmo noturno mais calmo que apoie o sono.",
  },
  {
    href: "/pt-BR/blog/best-sounds-for-studying",
    title: "Melhores Sons para Estudar",
    description:
      "Encontre os tipos de sons que podem ajudar na concentração e no foco mais profundo.",
  },
  {
    href: "/pt-BR/blog/binaural-beats-for-sleep-and-focus",
    title: "Batidas Binaurais para Sono e Foco",
    description:
      "Uma introdução simples de como as batidas binaurais podem apoiar a calma e o foco.",
  },
  {
    href: "/pt-BR/blog/guided-breathing-techniques",
    title: "Técnicas de Respiração Guiada",
    description:
      "Explore métodos calmantes de respiração para relaxamento, equilíbrio, sono e foco.",
  },
  {
    href: "/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
    title: "Ruído Marrom vs Ruído Branco vs Ruído Rosa",
    description:
      "Explore as diferenças entre as cores do ruído e descubra qual é o melhor para seu foco ou sono.",
  },
  {
    href: "/pt-BR/blog/rain-sounds-for-better-sleep-and-focus",
    title: "Por Que os Sons da Chuva São o Segredo Definitivo para um Sono e Foco Melhores",
    description: "Descubra por que sons constantes de chuva são perfeitos para acalmar sua mente, vencer a insônia e mantê-lo focado.",
  },
  {
    href: "/pt-BR/blog/green-noise-for-sleep",
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
    title: "Qual a melhor cor de ruído para o TDAH? Marrom vs Branco",
    description: "Descubra por que o ruído marrom é frequentemente preferido sobre o ruído branco para TDAH, foco e superestimulação.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog do Calma",
  url: "https://www.calmasounds.com/pt-BR/blog",
  description:
    "Guias sobre sons para dormir, ruído branco, sons de foco e rotinas calmantes.",
  hasPart: [
    {
      "@type": "Article",
      headline: "Sons da Natureza para Relaxamento Profundo",
      url: "https://www.calmasounds.com/pt-BR/blog/benefits-of-nature-sounds-for-relaxation",
    },
    {
      "@type": "Article",
      headline: "Melhores Sons para Dormir",
      url: "https://www.calmasounds.com/pt-BR/blog/best-sounds-for-sleep",
    },
    {
      "@type": "Article",
      headline: "Ruído Branco para Dormir",
      url: "https://www.calmasounds.com/pt-BR/blog/white-noise-for-sleep",
    },
    {
      "@type": "Article",
      headline: "Sons de Chuva vs Ruído Branco",
      url: "https://www.calmasounds.com/pt-BR/blog/rain-sounds-vs-white-noise",
    },
    {
      "@type": "Article",
      headline: "Como Construir uma Rotina de Dormir",
      url: "https://www.calmasounds.com/pt-BR/blog/how-to-build-a-bedtime-routine",
    },
    {
      "@type": "Article",
      headline: "Melhores Sons para Estudar",
      url: "https://www.calmasounds.com/pt-BR/blog/best-sounds-for-studying",
    },
    {
      "@type": "Article",
      headline: "Batidas Binaurais para Sono e Foco",
      url: "https://www.calmasounds.com/pt-BR/blog/binaural-beats-for-sleep-and-focus",
    },
    {
      "@type": "Article",
      headline: "Técnicas de Respiração Guiada",
      url: "https://www.calmasounds.com/pt-BR/blog/guided-breathing-techniques",
    },
    {
      "@type": "Article",
      headline: "Ruído Marrom vs Ruído Branco vs Ruído Rosa",
      url: "https://www.calmasounds.com/pt-BR/blog/brown-noise-vs-white-noise-vs-pink-noise",
    },
    {
      "@type": "Article",
      headline: "Por Que os Sons da Chuva São o Segredo Definitivo para um Sono e Foco Melhores",
      url: "https://www.calmasounds.com/pt-BR/blog/rain-sounds-for-better-sleep-and-focus",
    },
    {
      "@type": "Article",
      headline: "Ruído Verde para Dormir: A Maneira Natural de Descansar",
      url: "https://www.calmasounds.com/pt-BR/blog/green-noise-for-sleep",
    },
    {
      "@type": "Article",
      headline: "O Melhor Aplicativo Gratuito de Ruído Branco para Dormir",
      url: "https://www.calmasounds.com/pt-BR/blog/best-free-white-noise-app",
    },
    {
      "@type": "Article",
      headline: "Qual a melhor cor de ruído para o TDAH? Marrom vs Branco",
      url: "https://www.calmasounds.com/pt-BR/blog/best-color-noise-for-adhd",
    },
  ],
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
            <a
              key={article.href}
              href={article.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-4 leading-7 text-white/70">
                {article.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Explore o Calma</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/pt-BR/sleep-sounds-app"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950"
            >
              App de sons para dormir
            </a>
            <a
              href="/pt-BR/white-noise-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              App de ruído branco
            </a>
            <a
              href="/pt-BR/focus-sounds-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              App de sons para foco
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
