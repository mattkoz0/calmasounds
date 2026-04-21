import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Sonidos de Sueño para Bebés | Calma",
  description:
    "Descubre Calma, una app de sonidos para ayudar a dormir a tu bebé con ruido blanco, lluvia suave y atmósferas que le ayudan a descansar pacíficamente.",
  keywords: [
    "app de sonidos para bebés",
    "ruido blanco para bebés",
    "app de sueño infantil",
    "música para dormir bebés",
    "sonidos relajantes para recién nacidos",
    "sonidos de cuna para bebés",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/baby-sleep-sounds-app",
  },
  openGraph: {
    title: "App de Sonidos de Sueño para Bebés | Calma",
    description:
      "Una app maravillosamente simple para ayudar a que tu bebé se calme y duerma con paisajes sonoros suaves y personalizados.",
    url: "https://www.calmasounds.com/es/baby-sleep-sounds-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Sonidos de Sueño para Bebés | Calma",
    description:
      "Una app maravillosamente simple para ayudar a que tu bebé se calme y duerma con paisajes sonoros suaves y personalizados.",
  },
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
      "name": "App de Sonidos de Sueño para Bebés",
      "item": "https://www.calmasounds.com/es/baby-sleep-sounds-app"
    }
  ]
};

export default function BabySleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sueño del bebé
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Sonidos suaves para ayudar a tu pequeño a dormir en paz
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una app elegante y fácil de usar con sonidos para dormir a tu bebé que te ofrece 
          ruido blanco continuo, lluvia suave y frecuencias bajas que imitan el entorno del útero.
          Calma rápidamente el llanto, establece una rutina de siesta reconfortante y construye paisajes 
          sonoros que ocultarán los ruidos repentinos.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en Google Play (abre en nueva ventana)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Descargar Calma en Google Play
          </a>

          <a
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Volver al inicio
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Oculta los ruidos molestos</h2>
            <p className="mt-4 leading-7 text-white/70">
              Los bebés se sobresaltan fácilmente con los ruidos de la casa. Un ruido blanco rítmico y 
              acústico de Calma actúa como una manta protectora que les ayuda a dormir más tiempo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Simula el vientre materno</h2>
            <p className="mt-4 leading-7 text-white/70">
              El vientre es un espacio ruidoso. El ruido marrón, los latidos del corazón 
              y los sonidos de agua profunda recuerdan ese entorno seguro a tu pequeño.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Totalmente personalizable</h2>
            <p className="mt-4 leading-7 text-white/70">
              Cada bebé es único. Con Calma, puedes mezclar el sonido de un ventilador 
              con suaves gotas de lluvia para encontrar exactamente esa combinación que le dará sueño.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Tus dudas sobre los sonidos para bebé
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Es seguro el ruido blanco para los bebés?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, el ruido blanco se considera seguro y puede ser muy efectivo para los bebés, siempre que
              el volumen se mantenga en un nivel conversacional confortable (unos 50 a 60 decibelios) y el 
              teléfono se ubique a una distancia segura de la cuna.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué color de ruido es el mejor para recién nacidos?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Mientras muchos bebés responden bien al clásico ruido blanco, el ruido marrón y rosa (que enfatiza
              más las bajas frecuencias de forma profunda) también puede ser perfecto para simular los sonidos 
              amortiguados que escuchaban los bebés en el vientre materno.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Calma requiere conexión a internet?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              La app de Calma es estupenda porque funciona totalmente sin conexión. Una vez 
              tienes la app, puedes reproducir los sonidos favoritos de tu bebé en modo avión, 
              evitando ondas o notificaciones indeseadas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ayuda a tu bebé a dormir tranquilo
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Descarga Calma en Google Play y crea el entorno de audio ideal
            para la hora de la siesta.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en Google Play (abre en nueva ventana)"
            className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Descargar en Google Play
          </a>
        </div>
      </section>
    </main>
  );
}
