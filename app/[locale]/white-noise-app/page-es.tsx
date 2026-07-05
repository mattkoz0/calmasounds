import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mejor App de Ruido Blanco Gratis 2026 | Calma",
  description:
    "¿Buscas la mejor app de ruido blanco? Mezcla ruido blanco, marrón, rosa y sonidos de la naturaleza para dormir, TDAH, bebés o tinnitus. 100% gratis, sin anuncios, funciona offline.",
  keywords: [
    "app de ruido blanco",
    "ruido blanco para dormir",
    "app de sueño ruido blanco",
    "ruido blanco relajante",
    "ruido blanco calma",
    "mejor app ruido blanco",
    "app ruido blanco gratis",
    "ruido blanco para bebés",
    "apps ruido blanco",
    "generador ruido blanco",
    "ruido blanco app gratis",
    "máquina de ruido blanco app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/white-noise-app",
  },
  openGraph: {
    title: "Mejor App de Ruido Blanco Gratis 2026 | Dormir, TDAH, Bebés | Calma",
    description:
    "¿Buscas la mejor app de ruido blanco? Mezcla ruido blanco, marrón, rosa y sonidos de la naturaleza para dormir, TDAH, bebés o tinnitus. 100% gratis, sin anuncios.",
    url: "https://www.calmasounds.com/es/white-noise-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejor App de Ruido Blanco Gratis | Calma",
    description:
    "Mezcla ruido blanco, marrón y rosa para dormir, TDAH, bebés o tinnitus. 100% gratis, funciona offline.",
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
      "name": "App de Ruido Blanco",
      "item": "https://www.calmasounds.com/es/white-noise-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuál es la mejor aplicación gratuita de ruido blanco?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Calma ofrece un entorno sencillo y sin distracciones para mezclar ruido blanco con sonidos de la naturaleza. Es 100% gratis, sin anuncios y funciona offline."
            }
        },
        {
            "@type": "Question",
            "name": "¿El ruido blanco ayuda a dormir?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. El ruido blanco actúa como una manta acústica que enmascara ruidos repentinos de fondo, ayudando a tu cerebro a relajarse y mantener el sueño profundo."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo usar ruido blanco para estudiar?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para estudiar, recomendamos una base constante de ruido blanco o marrón, mezclado con lluvia ligera. Esto ayuda a mantener la concentración, especialmente para personas con TDAH."
            }
        },
        {
            "@type": "Question",
            "name": "¿Es seguro el ruido blanco para bebés?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, cuando se usa correctamente. Mantén el volumen por debajo de 50 dB, coloca el dispositivo a al menos 2 metros de la cuna, y usa un temporizador de sueño."
            }
        },
        {
            "@type": "Question",
            "name": "¿Ruido blanco vs ruido marrón — cuál es mejor para dormir?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El ruido blanco enmascara mejor sonidos agudos. El ruido marrón tiene un tono más profundo y grave. Con Calma puedes mezclar ambos para obtener lo mejor de los dos mundos."
            }
        },
        {
            "@type": "Question",
            "name": "¿Puedo usar una app de ruido blanco en vez de una máquina de sonido?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Por supuesto. Apps modernas como Calma ofrecen la misma o mejor calidad que las máquinas dedicadas, además de mezclas personalizadas, temporizadores y modo offline. Calma es gratis."
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
          App de ruido blanco
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Una app de ruido blanco para dormir mejor y un ambiente sano
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación de ruido blanco muy elegante y simple que te ayuda a crear un entorno sonoro 
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
              El ruido blanco puede ayudar a crear un fondo de sonido más estable para 
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
              alt="Interfaz de Calma personalizando diferentes tipos de ruido blanco"
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
              alt="Interfaz de la mezcla de audios para ruido blanco"
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
            Aprende más sobre el ruido blanco
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/es/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Ruido Blanco para Dormir</h3>
            <p className="mt-3 text-white/70">
              Descubre cómo el ruido blanco puede mejorar la calidad de tu sueño y por qué millones lo usan.
            </p>
          </a>
          <a
            href="/es/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Colores de Ruido Explicados</h3>
            <p className="mt-3 text-white/70">
              Explora las diferencias del ruido blanco, rosa, marrón o verde para lograr el ambiente perfecto para ti.
            </p>
          </a>
          <a
            href="/es/blog/best-free-white-noise-app"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Mejores Apps de Ruido Blanco Gratis</h3>
            <p className="mt-3 text-white/70">
              Compara Calma con otras apps de ruido blanco en funciones, calidad de sonido y relación calidad-precio.
            </p>
          </a>
          <a
            href="/es/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sonidos de Lluvia vs Ruido Blanco</h3>
            <p className="mt-3 text-white/70">
              ¿Qué es mejor para dormir: sonidos orgánicos de lluvia o ruido blanco constante?
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            App de Ruido Blanco FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Cuál es la mejor aplicación gratuita de ruido blanco?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma ofrece un entorno sencillo y sin distracciones para mezclar ruido blanco con sonidos de la naturaleza, sin anuncios intrusivos. Es 100% gratis y funciona offline.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿El ruido blanco ayuda a dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. El ruido blanco actúa como una manta acústica que enmascara ruidos repentinos de fondo, ayudando a tu cerebro a relajarse y mantener el sueño profundo.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Cómo usar ruido blanco para estudiar?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Para estudiar, recomendamos una base constante de ruido blanco o marrón, mezclado con lluvia ligera. Esto ayuda a mantener la concentración, especialmente para personas con TDAH.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Es seguro el ruido blanco para bebés?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, cuando se usa correctamente. Mantén el volumen por debajo de 50 dB, coloca el dispositivo a al menos 2 metros de la cuna, y usa un temporizador de sueño. Muchos pediatras recomiendan el ruido blanco para ayudar a los bebés a dormir.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Ruido blanco vs ruido marrón — cuál es mejor para dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              El ruido blanco enmascara mejor los sonidos agudos como alarmas o voces. El ruido marrón tiene un tono más profundo y grave que muchos adultos encuentran más relajante. Con Calma puedes mezclar ambos para obtener lo mejor de los dos mundos.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puedo usar una app de ruido blanco en vez de una máquina de sonido?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Por supuesto. Apps modernas como Calma ofrecen la misma o mejor calidad de sonido que las máquinas de sonido dedicadas, además de poder crear mezclas personalizadas, usar temporizadores y funcionar offline. Y Calma es gratis.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Prueba el bienestar del ruido blanco de Calma
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