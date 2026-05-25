import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs BetterSleep | La Mejor Alternativa de Sonidos para Dormir",
  description:
    "¿Comparando Calma vs BetterSleep? BetterSleep tiene seguimiento de sueño e historias. Calma es la mejor alternativa si deseas un simple mezclador de sonidos para dormir offline sin suscripción.",
  keywords: [
    "calma vs bettersleep",
    "alternativa a la app bettersleep",
    "bettersleep sin suscripción",
    "mezclador de sonidos para dormir como bettersleep",
    "alternativa a relax melodies",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/calma-vs-bettersleep",
  },
  openGraph: {
    title: "Calma vs BetterSleep | La Mejor Alternativa de Sonidos para Dormir",
    description:
      "¿Comparando Calma vs BetterSleep? BetterSleep tiene seguimiento de sueño e historias. Calma es la mejor alternativa si deseas un simple mezclador de sonidos para dormir offline sin suscripción.",
    url: "https://www.calmasounds.com/es/calma-vs-bettersleep",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs BetterSleep | La Mejor Alternativa de Sonidos para Dormir",
    description:
      "¿Comparando Calma vs BetterSleep? Descubre la mejor alternativa para sonidos para dormir offline sin suscripción.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Calma es lo mismo que BetterSleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Calma y BetterSleep son aplicaciones diferentes. BetterSleep se centra en el seguimiento del sueño, una extensa biblioteca de historias y un modelo de suscripción anual. Calma se centra exclusivamente en ser un mezclador de sonidos para dormir offline con un desbloqueo de por vida mediante un pago único.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la mejor alternativa a la aplicación BetterSleep sin suscripción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si solo usas BetterSleep (anteriormente Relax Melodies) por su mezclador de sonidos, Calma es una de las mejores alternativas. Calma ofrece un desbloqueo de por vida con un pago único, lo que significa que obtienes un mezclador de sonidos para dormir premium sin la costosa suscripción mensual o anual.",
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
      "name": "Calma vs BetterSleep",
      "item": "https://www.calmasounds.com/es/calma-vs-bettersleep"
    }
  ]
};

export default function CalmaVsBetterSleepPageEs() {
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
        title="¿Cuál es la diferencia entre Calma y BetterSleep?"
        description="BetterSleep es una aplicación rica en funciones que ofrece seguimiento del sueño, perfiles de sueño e historias, construida sobre un modelo de suscripción. Calma es una alternativa más simple y enfocada que proporciona un mezclador de audio offline bellamente diseñado, ruido blanco y sonidos de lluvia con un desbloqueo de por vida de pago único."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Comparación de Aplicaciones
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs BetterSleep: ¿Cuál es adecuada para ti?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Ambas aplicaciones te permiten mezclar sonidos para dormir mejor, pero satisfacen necesidades diferentes. Aquí tienes una comparación basada en hechos para ayudarte a elegir la mejor opción.
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
            <h2 className="text-2xl font-semibold text-white">Elige BetterSleep si...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Deseas realizar un seguimiento activo de tus fases de sueño y ronquidos.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Te encanta tener una biblioteca masiva y constantemente actualizada de historias para dormir.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Te sientes cómodo pagando una suscripción anual para mantener el acceso a funciones premium.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">Elige Calma si...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Principalmente quieres mezclar tus propios sonidos para dormir (como lluvia, viento y ruido marrón) sin desorden.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Odias las suscripciones y prefieres un pago único para acceso de por vida.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Necesitas una aplicación que priorice la privacidad, funcione 100% offline y no requiera una cuenta.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Prefieres una interfaz minimalista y libre de distracciones.
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
              ¿Calma es lo mismo que la aplicación BetterSleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No, Calma y BetterSleep (anteriormente Relax Melodies) son aplicaciones completamente diferentes hechas por compañías distintas. BetterSleep es un rastreador de sueño y plataforma de contenido. Calma es un mezclador de sonidos especializado diseñado para darte control offline sobre el ruido blanco y los sonidos de la naturaleza sin rastrear tu sueño.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Cuál es la mejor alternativa a BetterSleep sin suscripción?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Si solo usas BetterSleep por su mezclador de sonidos y te das cuenta de que no usas el seguimiento del sueño o las historias, Calma es la alternativa perfecta. Al cambiar, puedes dejar de pagar tarifas recurrentes y obtener un desbloqueo de por vida para un mezclador de paisajes sonoros offline premium.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
