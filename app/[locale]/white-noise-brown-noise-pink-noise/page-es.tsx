import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "App de Ruido Blanco, Ruido Marrón y Ruido Rosa | Calma",
  description:
    "Descubre la diferencia entre el ruido blanco, el ruido marrón y el ruido rosa. Calma es una aplicación premium de sonidos para dormir que te permite mezclar todos los colores del ruido para dormir, concentrarte y para el TDAH.",
  keywords: [
    "app de ruido blanco",
    "app de ruido marron",
    "app de ruido rosa",
    "app de ruido verde",
    "app de colores de ruido",
    "brown noise TDAH",
    "ruido blanco para dormir",
    "ruido rosa bebés",
    "ruido marrón concentración",
    "colores de ruido comparación",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/white-noise-brown-noise-pink-noise",
  },
  openGraph: {
    title: "App de Ruido Blanco, Ruido Marrón y Ruido Rosa | Calma",
    description:
      "Descubre la diferencia entre el ruido blanco, el ruido marrón y el ruido rosa. Calma es una aplicación premium de sonidos para dormir que te permite mezclar todos los colores del ruido para dormir, concentrarte y para el TDAH.",
    url: "https://www.calmasounds.com/es/white-noise-brown-noise-pink-noise",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Ruido Blanco, Ruido Marrón y Ruido Rosa | Calma",
    description:
      "Mezcla todos los colores del ruido para dormir, concentrarte y para el TDAH con la aplicación Calma.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Calma incluye ruido blanco, ruido marrón y ruido rosa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Calma incluye ruido blanco, ruido marrón, ruido rosa y ruido verde de alta calidad. Puedes mezclarlos con otros sonidos naturales como la lluvia y las olas del mar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre el ruido blanco y el ruido marrón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ruido blanco cubre todas las frecuencias audibles por igual, como la estática del televisor. El ruido marrón enfatiza las frecuencias más bajas, sonando más profundo como una cascada distante. El ruido marrón a menudo se prefiere para el enfoque profundo y el TDAH.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué color de ruido es mejor para dormir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ruido rosa generalmente se considera el mejor para dormir porque es equilibrado y natural, imitando sonidos como lluvia constante o viento. El ruido blanco es mejor para enmascarar sonidos fuertes y repentinos.",
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
      "name": "App de Colores de Ruido",
      "item": "https://www.calmasounds.com/es/white-noise-brown-noise-pink-noise"
    }
  ]
};

export default function NoiseColorsAppPageEs() {
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

      <AiDefinition />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Los Colores del Sonido
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Ruido Blanco, Ruido Marrón y Ruido Rosa
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación integral de mezcla de sonidos que incluye grabaciones de alta calidad de todos los colores de ruido esenciales.
          Descubre la frecuencia perfecta para tu rutina de sueño, relajación o concentración para el TDAH.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en Google Play Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Descargar en Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en Apple App Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Descargar en App Store
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Ruido Blanco
            </div>
            <h3 className="text-xl font-semibold">Perfecto para enmascarar</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Cubre todas las frecuencias audibles por igual. Ideal para bloquear sonidos fuertes y repentinos y ayudar al sueño infantil.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Ruido Rosa
            </div>
            <h3 className="text-xl font-semibold">Equilibrado y natural</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Más profundo que el ruido blanco, imitando sonidos como la lluvia constante o el viento. Excelente para mejorar la calidad general del sueño.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Ruido Marrón
            </div>
            <h3 className="text-xl font-semibold">Enfoque y soporte para TDAH</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Pesado en bajas frecuencias, como una cascada distante. Cada vez más popular para el enfoque profundo y "silenciar" una mente ocupada.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Ruido Verde
            </div>
            <h3 className="text-xl font-semibold">Armonía Natural</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Se centra en las frecuencias de rango medio, similar al susurro de las hojas del bosque. Perfecto para un ambiente calmante y natural.
            </p>
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
              ¿Calma incluye ruido blanco, ruido marrón y ruido rosa?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, Calma incluye ruido blanco, ruido marrón, ruido rosa y ruido verde de alta calidad. Puedes mezclarlos con otros sonidos naturales como la lluvia y las olas del océano en el mezclador de sonidos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Cuál es la diferencia entre el ruido blanco y el ruido marrón?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              El ruido blanco cubre todas las frecuencias audibles por igual, similar a la estática de la televisión. El ruido marrón enfatiza las frecuencias más bajas, sonando más profundo y suave, como una cascada distante. El ruido marrón a menudo se prefiere para un enfoque profundo y el TDAH.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué color de ruido es mejor para dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              El ruido rosa generalmente se considera el mejor para dormir porque es equilibrado y natural, imitando sonidos como la lluvia o el viento constantes. Sin embargo, el ruido blanco es mejor si necesitas enmascarar sonidos fuertes y repentinos específicamente.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
