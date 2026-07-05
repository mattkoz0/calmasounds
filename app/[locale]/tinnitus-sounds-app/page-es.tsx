import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "La Mejor App de Sonidos para Tinnitus y Sueño (Gratis) | Calma",
  description: "¿Buscas la mejor app para el zumbido en los oídos? Mezcla ruido blanco y sonidos de la naturaleza para enmascarar el tinnitus. Gratis, funciona offline.",
  keywords: [
    "app de sonidos para tinnitus",
    "sonidos para tinnitus para dormir",
    "app de sueño sonidos para tinnitus",
    "sonidos para tinnitus relajante",
    "sonidos para tinnitus calma",
    "sonidos para tinnitus",
    "app tinnitus gratis",
    "enmascaramiento tinnitus",
    "ruido blanco tinnitus",
    "alivio del zumbido en los oídos",
    "terapia de sonido tinnitus app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/tinnitus-sounds-app",
  },
  openGraph: {
    title: "La Mejor App de Sonidos para Tinnitus y Sueño (Gratis) | Calma",
    description: "¿Buscas la mejor app para el zumbido en los oídos? Mezcla ruido blanco y sonidos de la naturaleza para enmascarar el tinnitus. Gratis, funciona offline.",
    url: "https://www.calmasounds.com/es/tinnitus-sounds-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Mejor App de Sonidos para Tinnitus y Sueño (Gratis) | Calma",
    description: "¿Buscas la mejor app para el zumbido en los oídos? Mezcla ruido blanco y sonidos de la naturaleza para enmascarar el tinnitus. Gratis, funciona offline.",
  },
};

const combinedJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Calma - Sleep Sounds & Relax",
      "applicationCategory": "HealthAndFitnessApplication",
      "operatingSystem": "ANDROID, IOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      }
    },
    {
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
      "name": "App de Alivio del Tinnitus",
      "item": "https://www.calmasounds.com/es/tinnitus-sounds-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Existe una aplicación gratuita de ruido blanco para el tinnitus?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, Calma ofrece paisajes sonoros gratuitos, incluyendo ruido blanco y rosa, para enmascarar el tinnitus. Es 100% gratis y funciona offline."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué color de ruido es mejor para el tinnitus?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Muchas personas encuentran que el ruido blanco o rosa es más efectivo. Calma te permite probar todos los colores y mezclarlos."
            }
        },
        {
            "@type": "Question",
            "name": "¿Puede el enmascaramiento de sonido ayudar con el tinnitus en la noche?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. El silencio puede hacer que el tinnitus parezca más fuerte. Una capa de sonido de fondo constante le da a tu cerebro una alternativa."
            }
        },
        {
            "@type": "Question",
            "name": "¿Calma puede reemplazar una máquina de terapia de sonido?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para muchas personas, sí. Calma ofrece la misma calidad con la ventaja de personalizar mezclas, usar temporizador y llevarla en tu teléfono."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué frecuencia de sonido es mejor para el tinnitus?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depende del tipo de tinnitus. Si tu zumbido es agudo, prueba ruido rosa o blanco. Si es grave, prueba ruido marrón. Calma te permite experimentar con combinaciones."
            }
        }
    ]
}
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App de sonidos para tinnitus
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Una app de sonidos para tinnitus para dormir mejor y un ambiente sano
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación de sonidos para tinnitus muy elegante y simple que te ayuda a crear un entorno sonoro 
          más suave y controlado para el sueño, la relajación y la calma diaria. Úsala para apoyar tus 
          rutinas nocturnas, atenuar molestos ruidos y construir una atmósfera de paz a tu alrededor.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en Google Play Store (abre en ventana nueva)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Descargar en Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en App Store (abre en ventana nueva)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Descargar en App Store
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
            <h2 className="text-2xl font-semibold">Apoya un mejor descanso</h2>
            <p className="mt-4 leading-7 text-white/70">
              El sonidos para tinnitus puede ayudar a crear un fondo de sonido más estable para 
              la hora de acostarte y una transición suave e ininterrumpida hacia el sueño.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Reduce el ruido que distrae</h2>
            <p className="mt-4 leading-7 text-white/70">
              Usa una capa de audio estática y controlada para suavizar picos sonoros repentinos
              y crear un espacio relajado a tu alrededor.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mantén un ritmo de calma simple</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma está diseñada de modo que se sienta elegante, clara y emocionalmente ligera, haciendo que tu 
              experiencia de sonido sea relajante de usar, a diferencia de otras herramientas complicadas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Vista previa de la app
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Siente la experiencia serena de Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              priority
              alt="Interfaz de la app móvil Calma mostrando la lista de sonidos relajantes y categorías de sueño"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="Interfaz de Calma personalizando diferentes tipos de sonidos para tinnitus"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mezclador de sonidos para dormir y relajación en Calma"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interfaz de la mezcla de audios para sonidos para tinnitus"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Guías y Conocimiento
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Aprende más sobre el sonidos para tinnitus
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/es/blog/sounds-for-tinnitus-relief"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sonidos para el Alivio del Tinnitus</h3>
            <p className="mt-3 text-white/70">
              Descubre qué sonidos son más efectivos para enmascarar el zumbido en los oídos y mejorar tu sueño.
            </p>
          </a>
          <a
            href="/es/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Colores de Ruido Explicados</h3>
            <p className="mt-3 text-white/70">
              Explora las diferencias entre ruido blanco, rosa, marrón y verde para encontrar el mejor para tu tinnitus.
            </p>
          </a>
          <a
            href="/es/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Ruido Blanco para Dormir</h3>
            <p className="mt-3 text-white/70">
              Aprende cómo el ruido blanco puede ayudarte a dormir mejor cuando sufres de tinnitus.
            </p>
          </a>
          <a
            href="/es/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Mejores Sonidos para Dormir</h3>
            <p className="mt-3 text-white/70">
              Una guía completa de los sonidos más efectivos para conciliar el sueño rápidamente.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            App de Alivio del Tinnitus FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Existe una aplicación gratuita de ruido blanco para el tinnitus?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, Calma ofrece paisajes sonoros gratuitos, incluyendo ruido blanco y rosa, que a menudo se utilizan para enmascarar el tinnitus por la noche. Es 100% gratis y funciona offline.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué color de ruido es mejor para el tinnitus?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Muchas personas encuentran que el ruido blanco o rosa es más efectivo para ocultar el zumbido en los oídos. Calma te permite probar todos los colores y mezclarlos.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puede el enmascaramiento de sonido ayudar con el tinnitus en la noche?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. El silencio puede hacer que el tinnitus parezca más fuerte. Crear una capa de sonido de fondo constante le da a tu cerebro una alternativa y facilita el sueño.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Calma puede reemplazar una máquina de terapia de sonido?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Para muchas personas, sí. Calma ofrece la misma calidad de sonido que las máquinas de terapia dedicadas, con la ventaja de poder personalizar las mezclas, usar temporizador de sueño y llevarla siempre en tu teléfono.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué frecuencia de sonido es mejor para el tinnitus?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Depende del tipo de tinnitus. Si tu zumbido es agudo, el ruido rosa o blanco puede funcionar mejor. Si es grave, prueba el ruido marrón. Calma te permite experimentar con diferentes combinaciones hasta encontrar la más efectiva.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Prueba el bienestar del sonidos para tinnitus de Calma
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Descarga Calma en Google Play para sentir los beneficios que la
            relajación te aportará a tus rutinas de sueño diario.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descargar Calma en Google Play Store"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descargar Calma en App Store"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              App Store
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}