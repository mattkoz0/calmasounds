import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Ruido Marrón Gratis para TDAH y Sueño | Calma",
  description:
    "¿Buscas ruido marrón profundo para TDAH, sueño o concentración? Mezcla ruido marrón con lluvia y sonidos de la naturaleza. App versión gratuita disponible, funciona offline.",
  keywords: [
    "app de ruido marrón",
    "ruido marrón para dormir",
    "app de sueño ruido marrón",
    "ruido marrón relajante",
    "ruido marrón calma",
    "ruido marrón TDAH",
    "app ruido marrón gratis",
    "generador ruido marrón",
    "ruido marrón para concentración",
    "ruido marrón para estudiar",
    "ruido marrón sueño profundo",
    "brown noise app español",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/brown-noise-app",
  },
  openGraph: {
    title: "App de Ruido Marrón Gratis | TDAH, Sueño y Concentración | Calma",
    description:
    "¿Buscas ruido marrón profundo para TDAH, sueño o concentración? Mezcla con lluvia y sonidos de la naturaleza. versión gratuita disponible.",
    url: "https://www.calmasounds.com/es/brown-noise-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Ruido Marrón Gratis para TDAH y Sueño | Calma",
    description:
    "Mezcla ruido marrón con lluvia y sonidos naturales para TDAH, sueño profundo y concentración. 100% gratis, funciona offline.",
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
      "name": "App de Ruido Marrón",
      "item": "https://www.calmasounds.com/es/brown-noise-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Qué es el ruido marrón?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El ruido marrón es un sonido profundo y grave, similar al rumor de un trueno lejano. Tiene más energía en las frecuencias bajas que el ruido blanco."
            }
        },
        {
            "@type": "Question",
            "name": "¿El ruido marrón ayuda con el TDAH?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, muchas personas con TDAH reportan que el ruido marrón les ayuda a concentrarse mejor. Su tono profundo y constante reduce la hiperactividad mental."
            }
        },
        {
            "@type": "Question",
            "name": "¿Calma es únicamente sobre ruido marrón?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Calma incluye ruido blanco, rosa, verde y sonidos de la naturaleza para dormir, relajarte o concentrarte."
            }
        },
        {
            "@type": "Question",
            "name": "¿Ruido marrón vs ruido blanco — cuál es mejor para dormir?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El ruido marrón suena más profundo y suave. El ruido blanco enmascara mejor sonidos repentinos. Con Calma puedes mezclar ambos."
            }
        },
        {
            "@type": "Question",
            "name": "¿Puedo usar ruido marrón toda la noche?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, es seguro a volumen moderado. Calma incluye un temporizador de sueño para que se apague automáticamente."
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
          App de ruido marrón
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Una app de ruido marrón para dormir mejor y un ambiente sano
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación de ruido marrón muy elegante y simple que te ayuda a crear un entorno sonoro 
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
              El ruido marrón puede ayudar a crear un fondo de sonido más estable para 
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

              alt="Interfaz de la app móvil Calma mostrando la lista de sonidos relajantes y categorías de sueño"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Interfaz de Calma personalizando diferentes tipos de ruido marrón"
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
              alt="Interfaz de la mezcla de audios para ruido marrón"
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
            Aprende más sobre el ruido marrón
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/es/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Ruido Marrón vs Blanco vs Rosa</h3>
            <p className="mt-3 text-white/70">
              Compara los diferentes colores de ruido y descubre cuál es mejor para dormir, TDAH o concentración.
            </p>
          </a>
          <a
            href="/es/blog/best-color-noise-for-adhd"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Mejor Color de Ruido para TDAH</h3>
            <p className="mt-3 text-white/70">
              ¿Qué color de ruido es más efectivo para personas con TDAH? Guía basada en investigación científica.
            </p>
          </a>
          <a
            href="/es/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Mejores Sonidos para Dormir</h3>
            <p className="mt-3 text-white/70">
              Descubre por qué el ruido marrón está entre los sonidos más efectivos para conciliar el sueño.
            </p>
          </a>
          <a
            href="/es/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Ruido Blanco para Dormir</h3>
            <p className="mt-3 text-white/70">
              Complementa el ruido marrón con ruido blanco para un enmascaramiento de sonido completo.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            App de Ruido Marrón FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué es el ruido marrón?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              El ruido marrón es un sonido profundo y grave, similar al rumor de un trueno lejano o el viento fuerte. Tiene más energía en las frecuencias bajas que el ruido blanco, lo que lo hace más relajante para muchas personas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿El ruido marrón ayuda con el TDAH?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, muchas personas con TDAH reportan que el ruido marrón les ayuda a concentrarse mejor. Su tono profundo y constante reduce la hiperactividad mental y facilita el enfoque sostenido durante el estudio o el trabajo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Calma es únicamente sobre ruido marrón?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No. Calma también incluye ruido blanco, rosa, verde y un extenso catálogo de sonidos de la naturaleza para dormir, relajarte o concentrarte.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Ruido marrón vs ruido blanco — cuál es mejor para dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              El ruido marrón suena más profundo y suave, ideal para quienes encuentran el ruido blanco demasiado agudo. El ruido blanco enmascara mejor los sonidos repentinos. Con Calma puedes mezclar ambos para el equilibrio perfecto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puedo usar ruido marrón toda la noche?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, es completamente seguro escuchar ruido marrón toda la noche a un volumen moderado (por debajo de 50 dB). Calma incluye un temporizador de sueño para que se apague automáticamente si lo prefieres.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Prueba el bienestar del ruido marrón de Calma
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