import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog de Calma | Guías de Sueño, Ruido Blanco y Concentración",
  description:
    "Explora las guías de Calma sobre sonidos para dormir, ruido blanco, rutinas nocturnas y paisajes sonoros para la concentración.",
  alternates: {
    canonical: "https://www.calmasounds.com/es/blog",
  },
  openGraph: {
    title: "Blog de Calma | Guías de Sueño, Ruido Blanco y Concentración",
    description:
      "Explora las guías de Calma sobre sonidos para dormir, ruido blanco, rutinas nocturnas y paisajes sonoros para la concentración.",
    url: "https://www.calmasounds.com/es/blog",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Calma | Guías de Sueño, Ruido Blanco y Concentración",
    description:
      "Explora las guías de Calma sobre sonidos para dormir, ruido blanco, rutinas nocturnas y paisajes sonoros para la concentración.",
  },
};

const articles = [
  {
    href: "/blog/benefits-of-nature-sounds-for-relaxation",
    title: "Sonidos de la Naturaleza para Relajación Profunda",
    description:
      "Explora cómo los paisajes sonoros naturales pueden actuar como ruido blanco natural para mejorar tu rutina a la hora de dormir.",
  },
  {
    href: "/blog/best-sounds-for-sleep",
    title: "Los Mejores Sonidos para Dormir",
    description:
      "Una guía práctica sobre la lluvia, el ruido blanco y los paisajes sonoros más suaves para dormir.",
  },
  {
    href: "/blog/white-noise-for-sleep",
    title: "Ruido Blanco para Dormir",
    description:
      "Cuándo puede ayudar el ruido blanco y cómo construir un entorno más tranquilo para la hora de acostarse.",
  },
  {
    href: "/blog/rain-sounds-vs-white-noise",
    title: "Sonidos de Lluvia vs Ruido Blanco",
    description:
      "Compara el confort emocional, el enmascaramiento y la atmósfera nocturna.",
  },
  {
    href: "/blog/how-to-build-a-bedtime-routine",
    title: "Cómo Construir una Rutina para Acostarse",
    description:
      "Maneras sencillas de crear un ritmo nocturno más tranquilo que favorezca el sueño.",
  },
  {
    href: "/blog/best-sounds-for-studying",
    title: "Los Mejores Sonidos para Estudiar",
    description:
      "Encuentra los tipos de sonidos que pueden ayudar con la concentración y el enfoque profundo.",
  },
  {
    href: "/blog/binaural-beats-for-sleep-and-focus",
    title: "Ondas Binaurales para el Sueño y la Concentración",
    description:
      "Una introducción sencilla a cómo las ondas binaurales pueden apoyar la calma y la concentración.",
  },
  {
    href: "/blog/guided-breathing-techniques",
    title: "Técnicas de Respiración Guiada",
    description:
      "Explora métodos de respiración relajantes para la relajación, el equilibrio, el sueño y el enfoque.",
  },
  {
    href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
    title: "Ruido Marrón vs Ruido Blanco vs Ruido Rosa",
    description:
      "Explora las diferencias entre los colores de ruido y encuentra cuál es mejor para tu concentración o sueño.",
  },
  {
    href: "/blog/rain-sounds-for-better-sleep-and-focus",
    title: "Por qué los Sonidos de Lluvia son el Secreto para Dormir y Concentrarse",
    description: "Descubre por qué los sonidos constantes de lluvia son perfectos para calmar la mente, vencer el insomnio y mantenerte enfocado.",
  },
  {
    href: "/blog/green-noise-for-sleep",
    title: "Ruido Verde para Dormir: La Manera Natural de Descansar",
    description: "Descubre qué es el ruido verde y por qué sus vibraciones similares a la naturaleza encajan tanto.",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog de Calma",
  url: "https://www.calmasounds.com/es/blog",
  description:
    "Guías sobre sonidos para dormir, ruido blanco, sonidos para concentrarse y rutinas relajantes.",
  hasPart: [
    {
      "@type": "Article",
      headline: "Sonidos de la Naturaleza para Relajación Profunda",
      url: "https://www.calmasounds.com/es/blog/benefits-of-nature-sounds-for-relaxation",
    },
    {
      "@type": "Article",
      headline: "Los Mejores Sonidos para Dormir",
      url: "https://www.calmasounds.com/es/blog/best-sounds-for-sleep",
    },
    {
      "@type": "Article",
      headline: "Ruido Blanco para Dormir",
      url: "https://www.calmasounds.com/es/blog/white-noise-for-sleep",
    },
    {
      "@type": "Article",
      headline: "Sonidos de Lluvia vs Ruido Blanco",
      url: "https://www.calmasounds.com/es/blog/rain-sounds-vs-white-noise",
    },
    {
      "@type": "Article",
      headline: "Cómo Construir una Rutina para Acostarse",
      url: "https://www.calmasounds.com/es/blog/how-to-build-a-bedtime-routine",
    },
    {
      "@type": "Article",
      headline: "Los Mejores Sonidos para Estudiar",
      url: "https://www.calmasounds.com/es/blog/best-sounds-for-studying",
    },
    {
      "@type": "Article",
      headline: "Ondas Binaurales para el Sueño y la Concentración",
      url: "https://www.calmasounds.com/es/blog/binaural-beats-for-sleep-and-focus",
    },
    {
      "@type": "Article",
      headline: "Técnicas de Respiración Guiada",
      url: "https://www.calmasounds.com/es/blog/guided-breathing-techniques",
    },
    {
      "@type": "Article",
      headline: "Ruido Marrón vs Ruido Blanco vs Ruido Rosa",
      url: "https://www.calmasounds.com/es/blog/brown-noise-vs-white-noise-vs-pink-noise",
    },
    {
      "@type": "Article",
      headline: "Por qué los Sonidos de Lluvia son el Secreto para Dormir y Concentrarse",
      url: "https://www.calmasounds.com/es/blog/rain-sounds-for-better-sleep-and-focus",
    },
    {
      "@type": "Article",
      headline: "Ruido Verde para Dormir: La Manera Natural de Descansar",
      url: "https://www.calmasounds.com/es/blog/green-noise-for-sleep",
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
      name: "Inicio",
      item: "https://www.calmasounds.com/es"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.calmasounds.com/es/blog"
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
          Blog de Calma
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Guías sobre el sueño, la concentración y más
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Explora artículos prácticos sobre los diferentes sonidos para dormir, rutinas para ir a la cama,
          ruido blanco, relajación y concentración.
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
          <h2 className="text-2xl font-semibold">Explora Calma</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/sleep-sounds-app"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950"
            >
              App para dormir
            </a>
            <a
              href="/white-noise-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              App de ruido blanco
            </a>
            <a
              href="/focus-sounds-app"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white"
            >
              App para concentrarse
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}