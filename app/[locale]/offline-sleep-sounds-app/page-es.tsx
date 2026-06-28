import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "App de Sonidos para Dormir Offline para Viajes y Privacidad | Calma",
  description:
    "¿Buscas una aplicación de sonidos para dormir que funcione sin internet? Calma funciona 100% offline. Disfruta de paisajes sonoros personalizados en modo avión, durante vuelos y viajes.",
  keywords: [
    "app de sonidos para dormir offline",
    "app de sonidos para dormir sin internet",
    "app de sueño en modo avión",
    "sonidos para dormir en viajes",
    "sonidos para dormir sin wifi",
    "app sueño offline gratis",
    "sonidos para dormir sin datos",
    "app dormir modo avión",
    "calma offline app",
    "sonidos relajantes sin internet",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/offline-sleep-sounds-app",
  },
  openGraph: {
    title: "App de Sonidos para Dormir Offline para Viajes y Privacidad | Calma",
    description:
      "¿Buscas una aplicación de sonidos para dormir que funcione sin internet? Calma funciona 100% offline. Disfruta de paisajes sonoros personalizados en modo avión, durante vuelos y viajes.",
    url: "https://www.calmasounds.com/es/offline-sleep-sounds-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Sonidos para Dormir Offline para Viajes y Privacidad | Calma",
    description:
      "¿Buscas una aplicación de sonidos para dormir que funcione sin internet? Calma funciona 100% offline.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Calma funciona sin conexión (offline)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, una vez descargada, Calma funciona completamente offline. No necesitas una conexión Wi-Fi o móvil para mezclar y escuchar tus sonidos para dormir.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo usar Calma en un avión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. Calma es perfecta para vuelos porque funciona completamente en modo avión sin pantallas de carga ni almacenamiento en búfer.",
      },
    },
    {
      "@type": "Question",
      name: "¿Existe alguna aplicación de sonidos para dormir que no use datos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Calma es una aplicación de sonidos para dormir que prioriza la privacidad y no transmite audio por internet. Todos los sonidos se procesan localmente en tu dispositivo, lo que significa que no consumirá tus datos móviles mientras se reproduce.",
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
      "name": "App de Sonidos para Dormir Offline",
      "item": "https://www.calmasounds.com/es/offline-sleep-sounds-app"
    }
  ]
};

export default function OfflineSleepAppPageEs() {
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
          Amigable con el Modo Avión
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          La aplicación de sonidos para dormir offline para descansar profundamente en cualquier lugar
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Apaga tu Wi-Fi y desconéctate del mundo. Calma funciona <strong>100% offline</strong> para que puedas disfrutar de paisajes sonoros personalizados sin distracciones, uso de datos ni almacenamiento en búfer.
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
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Perfecta para Viajar</h2>
            <p className="mt-4 leading-7 text-white/70">
              Ya sea que estés en un vuelo largo, en un viaje en tren o alojándote en un hotel con mal Wi-Fi, la capacidad offline de Calma garantiza que siempre tengas tus sonidos para dormir listos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Cero Uso de Datos</h2>
            <p className="mt-4 leading-7 text-white/70">
              A diferencia de las aplicaciones de transmisión, Calma no consume tus datos móviles. Los sonidos se mezclan directamente en tu dispositivo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Privacidad Primero</h2>
            <p className="mt-4 leading-7 text-white/70">
              No hay necesidad de preocuparse por el seguimiento constante. Pon tu teléfono en modo avión para reducir la exposición a los CEM y dormir pacíficamente.
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
              ¿Calma funciona sin conexión (offline)?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, una vez descargada, Calma funciona completamente offline. No necesitas una conexión Wi-Fi o móvil para mezclar y escuchar tus sonidos para dormir.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puedo usar Calma en un avión?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Absolutamente. Calma es perfecta para vuelos porque funciona completamente en modo avión sin pantallas de carga ni almacenamiento en búfer.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Existe alguna aplicación de sonidos para dormir que no use datos?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, Calma es una aplicación de sonidos para dormir que prioriza la privacidad y no transmite audio. Todos los sonidos se procesan localmente en tu dispositivo, lo que significa que no consumirá tus datos móviles mientras se reproduce.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
