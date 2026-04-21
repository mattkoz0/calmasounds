import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App Mezcladora de Sonidos | Calma",
  description:
    "Descubre Calma, una aplicación maravillosamente sencilla para mezclar sonidos ideales para la relajación, el sueño, la concentración y más.",
  keywords: [
    "app mezcladora de sonidos",
    "mezclador de sonidos para dormir",
    "mezclador de sonidos para descansar",
    "mezclador para la concentración",
    "paisajes sonoros personalizados",
    "mezclador de sonidos calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/sound-mixer-app",
  },
  openGraph: {
    title: "App Mezcladora de Sonidos | Calma",
    description:
      "Descubre una aplicación maravillosamente sencilla para mezclar sonidos ideales para la relajación, el sueño y la concentración.",
    url: "https://www.calmasounds.com/es/sound-mixer-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Mezcladora de Sonidos | Calma",
    description:
      "Descubre una aplicación maravillosamente sencilla para mezclar sonidos ideales para la relajación, el sueño y la concentración.",
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
      "name": "App Mezcladora de Sonidos",
      "item": "https://www.calmasounds.com/es/sound-mixer-app"
    }
  ]
};

export default function SoundMixerAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App mezcladora de sonidos
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Una app mezcladora de sonidos para dormir o concentrarse
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación maravillosamente sencilla para mezclar sonidos que te permite
          crear tu propio ambiente de audio en lugar de depender de una pista estática y repetitiva.
          Construye paisajes sonoros totalmente a medida para la hora de acostarte, tus sesiones 
          de lectura, el trabajo profundo y mucho más.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en Google Play (abre en ventana nueva)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Descargar Calma en Google Play
          </a>

          <a
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Volver a inicio
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Crea tu propia mezcla</h2>
            <p className="mt-4 leading-7 text-white/70">
              Combina sonidos de acuerdo a tu humor y tu rutina en lugar de tener que 
              adaptarte a una pista de audio estática e imposible de personalizar.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Usa una app para mil momentos</h2>
            <p className="mt-4 leading-7 text-white/70">
              Construye paisajes sonoros para la relajación, el sueño, la meditación
              o el trabajo profundo dentro de una experiencia de audio cohesiva.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Consigue mezclas elegantes</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma ha sido diseñada para brindar confort de manera simple y con un diseño 
              premium, por lo que su propio mezclador es sorprendentemente intuitivo.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Vista previa
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Tu nuevo lugar favorito dentro de Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interfaz de la aplicación móvil de Calma para crear atmósferas personalizadas"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Mezclador de la aplicación de Calma"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interfaz de Calma que muestra múltiples capas de audio de relajación"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Controles del mezclador de sonidos de Calma"
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
            Aprende sobre paisajes sonoros
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sonidos de Lluvia y Ruido Blanco</h3>
            <p className="mt-3 text-white/70">
              Compara de qué modo las capas atmosféricas de agua junto a ruidos cálidos generan calma.
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Los Colores del Ruido</h3>
            <p className="mt-3 text-white/70">
              Aprende cómo equilibrar los diferentes colores del ruido al usar tu mezclador.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            App Mezcladora de Sonidos FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué es una app de mezclador de sonidos?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Una app mezcladora de sonidos te permite de forma interactiva combinar diferentes tonos,
              como lluvia, ruido blanco natural, truenos, piano, entre otros; creando un entorno 
              de relajación asombrosamente tuyo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿En qué se distingue Calma de una app de sonidos habitual?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma está enteramente construida sobre un sistema de personalización que fluye
              intuitivamente al elegir de forma interactiva las intensidades y los sonidos deseados.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puedo usar Calma para más que para dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. Calma apoya con eficacia los momentos de estudio, la relajación profunda, la meditación
              diaria, las terapias y otros lugares donde crear paisajes sonoros aporte bienestar a tu rutina.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Prueba Calma como tu mezclador diario
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Descarga Calma en Google Play para sentir los beneficios que la
            relajación te aportará a tus rutinas de sueño diario.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar Calma en Google Play (abre en una nueva ventana)"
            className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Descargar en Google Play
          </a>
        </div>
      </section>
    </main>
  );
}