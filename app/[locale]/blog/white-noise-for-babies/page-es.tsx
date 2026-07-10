import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Ruido blanco para bebés: Cómo ayudar a tu hijo a dormir | Calma",
  description: "Descubre por qué el ruido blanco y rosa ayudan a los bebés a dormir mejor. Guía sobre seguridad y volumen.",
  keywords: [
    "white noise for babies",
    "baby sleep sounds",
    "pink noise for babies",
    "calma app",
    "sleep sounds app",
    "app para dormir mejor",
    "promover sueño profundo",
    "ayuda para conciliar el sueño",
    "sonidos relajantes noche",
    "mejorar calidad del sueño",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/white-noise-for-babies",
  },
  openGraph: {
    title: "Ruido blanco para bebés: Cómo ayudar a tu hijo a dormir | Calma",
    description: "Descubre por qué el ruido blanco y rosa ayudan a los bebés a dormir mejor. Guía sobre seguridad y volumen.",
    url: "https://www.calmasounds.com/blog/white-noise-for-babies",
    siteName: "Calma",
    locale: "es",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ruido Blanco para Bebés: La Guía Completa",
  description: "Descubre por qué el ruido blanco y rosa ayudan a los bebés a dormir mejor. Guía sobre seguridad y volumen.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/blog/white-noise-for-babies",
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
};

export default function WhiteNoiseForBabiesPage() {
  return (
    <ArticlePage
      slug="white-noise-for-babies"
      jsonLd={articleJsonLd}
      topLinkHref="/baby-sleep-sounds-app"
      topLinkLabel="Aplicación de sueño para bebés"
      title="Ruido Blanco para Bebés: La Guía Completa"
      intro="El ruido blanco imita el entorno ruidoso del útero materno, desencadenando un reflejo calmante natural en tu bebé."
      ctaHref="/baby-sleep-sounds-app"
      ctaLabel="Descarga la aplicación gratis"
      secondaryCtaHref="/white-noise-app"
      secondaryCtaLabel="Aplicación de ruido blanco"
      tableOfContents={[
  {
    "id": "why-it-works",
    "title": "Por qué los bebés aman el ruido blanco"
  },
  {
    "id": "white-vs-pink",
    "title": "Ruido Blanco vs Rosa"
  },
  {
    "id": "safety",
    "title": "Pautas de Seguridad"
  },
  {
    "id": "routine",
    "title": "Crear una Rutina"
  },
  {
    "id": "faq",
    "title": "Preguntas Frecuentes"
  }
]}
      relatedArticles={[
  {
    "href": "/es/blog/white-noise-for-sleep",
    "title": "Ruido blanco para dormir",
    "description": "Mejora tu sueño."
  },
  {
    "href": "/es/blog/how-to-build-a-bedtime-routine",
    "title": "Cómo crear una rutina de sueño",
    "description": "Crea una rutina sólida."
  }
]}
    >
      <ArticleSection id="why-it-works" title="Por qué los bebés aman el ruido blanco">
        <p>El útero no es un lugar tranquilo. El ruido blanco recrea ese entorno familiar y bloquea los ruidos repentinos de la casa.</p>
      </ArticleSection>

      <ArticleSection id="white-vs-pink" title="Ruido Blanco vs. Ruido Rosa">
        <p>El ruido rosa enfatiza las frecuencias más bajas y es a menudo más suave para los oídos sensibles de un bebé.</p>
      </ArticleSection>

      <ArticleSection id="safety" title="Seguridad: Volumen y Distancia">
        <ul className="mt-4 list-disc pl-5 space-y-2"><li><strong>Volumen bajo:</strong> Máximo 50 decibelios.</li><li><strong>Distancia segura:</strong> Al menos a 2 metros de la cuna.</li></ul>
      </ArticleSection>

      <ArticleSection id="routine" title="Crear una Rutina de Sueño">
        <p>La consistencia es clave. Usa <strong>Calma</strong> para establecer una rutina con sonidos relajantes antes de acostarlo.</p>
      </ArticleSection>

      <ArticleSection id="faq" title="Preguntas Frecuentes">
        <div className="mt-6 space-y-6">
          <div><h3 className="font-semibold text-lg text-emerald-400">¿Es seguro dejar el ruido blanco toda la noche?</h3><p className="mt-2 leading-7 text-white/70">Sí, siempre y cuando se mantenga a un volumen seguro (50 dB) y a 2 metros de la cuna.</p></div>
<div><h3 className="font-semibold text-lg text-emerald-400">¿Qué ruido es mejor para un bebé?</h3><p className="mt-2 leading-7 text-white/70">El ruido rosa es muy popular por ser más suave.</p></div>
<div><h3 className="font-semibold text-lg text-emerald-400">¿Cuándo dejar de usar ruido blanco?</h3><p className="mt-2 leading-7 text-white/70">No hay una edad estricta. Puedes reducir gradualmente el volumen durante unas semanas.</p></div>
        </div>
      </ArticleSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
          {
                    "@type": "Question",
                    "name": "¿Es seguro dejar el ruido blanco toda la noche?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Sí, siempre y cuando se mantenga a un volumen seguro (50 dB) y a 2 metros de la cuna."
                    }
          },
          {
                    "@type": "Question",
                    "name": "¿Qué ruido es mejor para un bebé?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "El ruido rosa es muy popular por ser más suave."
                    }
          },
          {
                    "@type": "Question",
                    "name": "¿Cuándo dejar de usar ruido blanco?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "No hay una edad estricta. Puedes reducir gradualmente el volumen durante unas semanas."
                    }
          }
]
          })
        }}
      />
    </ArticlePage>
  );
}
