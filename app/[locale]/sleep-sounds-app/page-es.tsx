import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Sonidos para Dormir | Calma",
  description:
    "Descubre Calma, una aplicación maravillosamente sencilla con sonidos para dormir, para tener mejores rutinas a la hora de acostarse, noches más tranquilas y paisajes sonoros relajantes personalizados.",
  keywords: [
    "app de sonidos para dormir",
    "app para dormir",
    "sonidos relajantes para dormir",
    "app de sonidos para la hora de acostarse",
    "sonidos para dormir calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/sleep-sounds-app",
  },
  openGraph: {
    title: "App de Sonidos para Dormir | Calma",
    description:
      "Descubre una aplicación maravillosamente sencilla con sonidos para dormir para tener noches más calmas y mejores rutinas de sueño.",
    url: "https://www.calmasounds.com/es/sleep-sounds-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Sonidos para Dormir | Calma",
    description:
      "Descubre una aplicación maravillosamente sencilla con sonidos para dormir para tener noches más calmas y mejores rutinas de sueño.",
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
      "name": "App de Sonidos para Dormir",
      "item": "https://www.calmasounds.com/es/sleep-sounds-app"
    }
  ]
};

export default function SleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App de sonidos para dormir
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Una app de sonidos para dormir con noches más serenas y mejores rutinas
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación maravillosamente simple de sonidos para dormir que te ayuda
          a crear paisajes sonoros personalizados para la hora de acostarte, para relajarte o para descansar
          profundamente. Mezcla sonidos calmantes, construye tu propia atmósfera y haz que
          tu rutina nocturna se sienta más suave y duradera.
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
            <h2 className="text-2xl font-semibold">Crea tu mezcla de sueño</h2>
            <p className="mt-4 leading-7 text-white/70">
              En lugar de escuchar una pista genérica, puedes construir un
              entorno sonoro que se sienta adecuado para tu noche y tu estado de ánimo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Relájate antes de dormir</h2>
            <p className="mt-4 leading-7 text-white/70">
              Usa paisajes sonoros calmantes para bajar el ritmo después de días ocupados y crear una
              transición más pacífica hacia el sueño.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mantén tu rutina fácil</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma está diseñada para sentirse clara, elegante y fácil de retomar
              cada noche, sin fricciones ni abrumarte.
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
            Mira la experiencia de sueño de Calma en acción
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interfaz de la app móvil de Calma mostrando sonidos y categorías de relajación para dormir"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interfaz de la app de Calma para personalizar audios para dormir"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mezclador de sonidos para dormir con varios ambientes y opciones sonoras"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Mezclador Calma para crear audios personalizados de descanso y sueño"
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
            Aprende sobre sonidos para dormir
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Mejores Sonidos para Dormir</h3>
            <p className="mt-3 text-white/70">
              Una guía práctica sobre la lluvia, el ruido blanco y paisajes sonoros más suaves para la hora de acostarte.
            </p>
          </a>
          <a
            href="/blog/how-to-build-a-bedtime-routine"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Cómo Construir una Rutina Nocturna</h3>
            <p className="mt-3 text-white/70">
              Maneras simples de crear un ritmo vespertino más calmado que apoye el descanso de forma constante y natural.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Preguntas sobre nuestra app para dormir
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué es una app de sonidos para dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Una app de sonidos para dormir te ayuda a reproducir audios relajantes diseñados
              para apoyar las rutinas a la hora de acostarse, la relajación y un estado mental 
              más silencioso antes de dormir.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿En qué se diferencia Calma de otras aplicaciones de sueño?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma se enfoca en paisajes sonoros personalizados, una interfaz simple
              y una sensación cálida y premium en lugar de abrumarte con muchísimas capas
              de complejidad de audio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puedo crear mi propia mezcla de sueño?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. Calma está construida alrededor de la creación de tu propia mezcla de audio
              relajante en lugar de forzarte a escoger solo una pista prediseñada.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Prueba Calma para tu rutina nocturna
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Descarga Calma en Google Play y crea una experiencia antes de acostarte
            más pacífica con sonidos para dormir personalizados.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en Google Play Store (abre en nueva ventana)"
            className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Descargar en Google Play
          </a>
        </div>
      </section>
    </main>
  );
}