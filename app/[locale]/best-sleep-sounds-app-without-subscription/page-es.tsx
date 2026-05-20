import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Mejor App de Sonidos para Dormir Sin Suscripción | Calma",
  description:
    "¿Buscas una aplicación de sonidos para dormir sin suscripciones caras? Calma ofrece un desbloqueo de por vida con un solo pago para obtener sonidos personalizados y ruido blanco.",
  keywords: [
    "app de sonidos para dormir sin suscripción",
    "app de sueño sin suscripción",
    "app de sueño pago único",
    "app gratis de sonidos para dormir",
    "app de sueño desbloqueo de por vida",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/best-sleep-sounds-app-without-subscription",
  },
  openGraph: {
    title: "Mejor App de Sonidos para Dormir Sin Suscripción | Calma",
    description:
      "¿Buscas una aplicación de sonidos para dormir sin suscripciones caras? Calma ofrece un desbloqueo de por vida con un solo pago para obtener sonidos personalizados y ruido blanco.",
    url: "https://www.calmasounds.com/es/best-sleep-sounds-app-without-subscription",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejor App de Sonidos para Dormir Sin Suscripción | Calma",
    description:
      "¿Buscas una aplicación de sonidos para dormir sin suscripciones caras? Calma ofrece un desbloqueo de por vida con un solo pago.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Existe alguna aplicación para dormir sin suscripción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Calma es una aplicación premium de sonidos para dormir que no requiere suscripción. Ofrece una versión gratuita y un desbloqueo de por vida mediante un pago único.",
      },
    },
    {
      "@type": "Question",
      name: "¿Valen la pena las aplicaciones de sueño con tarifa mensual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muchas aplicaciones de sueño cobran altas tarifas mensuales o anuales. Con Calma, te saltas las tarifas recurrentes por completo optando por un pago único para obtener acceso de por vida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Calma funciona sin conexión (offline)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Calma funciona completamente sin conexión, lo que la convierte en la aplicación de sueño sin suscripción perfecta para viajar o cuando deseas apagar el Wi-Fi por la noche.",
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
      "name": "Sonidos para Dormir sin Suscripción",
      "item": "https://www.calmasounds.com/es/best-sleep-sounds-app-without-subscription"
    }
  ]
};

export default function BestSleepAppNoSubscriptionPageEs() {
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
          No Se Requiere Suscripción
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          La mejor aplicación de sonidos para dormir sin suscripción
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          ¿Cansado de alquilar tu relajación? Calma es una aplicación de sonidos para dormir maravillosamente simple que 
          te ayuda a crear paisajes sonoros personalizados para la hora de dormir, con un <strong>desbloqueo de por vida mediante pago único</strong>. 
          Sin tarifas mensuales, sin renovaciones anuales, solo calma.
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
            <h2 className="text-2xl font-semibold">Paga Una Vez, Tuyo Para Siempre</h2>
            <p className="mt-4 leading-7 text-white/70">
              Deja de pagar por dormir. Con nuestro desbloqueo de por vida, obtienes acceso completo a todos los sonidos premium, características de Brainwave Lab y futuras actualizaciones sin una suscripción recurrente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">100% Funcional Sin Conexión</h2>
            <p className="mt-4 leading-7 text-white/70">
              Una vez descargada, Calma funciona completamente sin conexión. Perfecta para vuelos, viajes o para mantener tu teléfono en modo avión por la noche.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mezclador de Sonido Premium</h2>
            <p className="mt-4 leading-7 text-white/70">
              Mezcla lluvia de alta calidad, olas del océano, ruido blanco y ruido marrón para crear el paisaje sonoro personalizado perfecto.
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
              ¿Existe alguna aplicación para dormir sin suscripción?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, Calma es una aplicación premium de sonidos para dormir que no requiere suscripción. Ofrece una versión gratuita y un desbloqueo de por vida mediante un pago único para obtener acceso completo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Valen la pena las aplicaciones de sueño con tarifa mensual?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Muchas aplicaciones de sueño cobran altas tarifas mensuales o anuales para cubrir costos de servidores y contenido nuevo. Con Calma, evitas las tarifas recurrentes por completo optando por un solo pago de por vida para acceder a nuestro mezclador premium sin conexión.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Calma funciona sin conexión (offline)?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, Calma funciona completamente sin conexión, lo que la convierte en la aplicación perfecta sin suscripción para viajar o cuando deseas apagar el Wi-Fi por la noche para reducir distracciones.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
