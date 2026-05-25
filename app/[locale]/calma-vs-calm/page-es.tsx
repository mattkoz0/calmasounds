import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs Calm | La Mejor Alternativa de Sonidos para Dormir",
  description:
    "¿Comparando Calma vs Calm? Calm es excelente para meditación guiada e historias. Calma es la mejor alternativa si deseas un simple mezclador de sonidos para dormir offline sin suscripción.",
  keywords: [
    "calma vs calm",
    "alternativa a la app calm",
    "calm sin suscripción",
    "mezclador de sonidos para dormir como calm",
    "mejor que la app calm",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/calma-vs-calm",
  },
  openGraph: {
    title: "Calma vs Calm | La Mejor Alternativa de Sonidos para Dormir",
    description:
      "¿Comparando Calma vs Calm? Calm es excelente para meditación guiada e historias. Calma es la mejor alternativa si deseas un simple mezclador de sonidos para dormir offline sin suscripción.",
    url: "https://www.calmasounds.com/es/calma-vs-calm",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs Calm | La Mejor Alternativa de Sonidos para Dormir",
    description:
      "¿Comparando Calma vs Calm? Descubre la mejor alternativa para sonidos para dormir offline sin suscripción.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Calma es lo mismo que la aplicación Calm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Calma y Calm son aplicaciones diferentes. Calm se centra en gran medida en la meditación guiada, historias para dormir contadas por celebridades y cursos con una suscripción anual. Calma se centra exclusivamente en ser un mezclador de sonidos para dormir offline con un desbloqueo de por vida mediante un pago único.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la mejor alternativa a la aplicación Calm sin suscripción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si solo usas Calm por sus sonidos para dormir y ruido blanco, Calma es una de las mejores alternativas. Calma ofrece un desbloqueo de por vida con un pago único, lo que significa que obtienes sonidos para dormir premium sin la costosa suscripción mensual o anual.",
      },
    }
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://www.calmasounds.com/es"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Calma vs Calm",
      "item": "https://www.calmasounds.com/es/calma-vs-calm"
    }
  ]
};

export default function CalmaVsCalmPageEs() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AiDefinition 
        title="¿Cuál es la diferencia entre Calma y Calm?"
        description="Calm es una aplicación líder en la industria que se centra en cursos de meditación guiada e historias para dormir de celebridades con un modelo de suscripción recurrente. Calma es una alternativa altamente enfocada en sonidos para dormir que proporciona un mezclador de audio offline, ruido blanco y sonidos de lluvia con un simple desbloqueo de por vida de pago único en lugar de una suscripción."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Comparación de Aplicaciones
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs Calm: ¿Cuál es adecuada para ti?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Ambas aplicaciones tienen como objetivo ayudarte a relajarte y dormir mejor, pero adoptan enfoques muy diferentes. Aquí tienes una comparación honesta y basada en hechos para ayudarte a elegir la mejor opción para tu rutina nocturna.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en Google Play Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Prueba Calma Gratis
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Elige Calm si...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Deseas extensos cursos de meditación guiada.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Te gusta dormirte escuchando a actores de voz famosos leer historias.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                No te importa pagar una suscripción anual por una biblioteca de contenido en constante actualización.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">Elige Calma si...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Principalmente quieres mezclar sonidos para dormir de alta calidad (como lluvia y ruido marrón).
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Odias las suscripciones y prefieres un pago único de por vida.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Necesitas una aplicación que funcione 100% offline y respete tu privacidad.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Deseas una interfaz más simple centrada puramente en paisajes sonoros personalizados.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Calma es lo mismo que la aplicación Calm?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No, Calma y Calm son aplicaciones completamente diferentes hechas por compañías distintas. Calm es una amplia plataforma de bienestar mental con meditación guiada e historias para dormir. Calma es un mezclador de sonidos especializado diseñado para darte control offline sobre el ruido blanco y los sonidos de la naturaleza.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Cuál es la mejor alternativa a Calm sin suscripción?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Si solo usas Calm por sus sonidos básicos para dormir y ruido blanco, Calma es una fuerte alternativa. Al cambiar, puedes dejar de pagar tarifas recurrentes y, en su lugar, obtener un desbloqueo de por vida para un mezclador offline premium.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
