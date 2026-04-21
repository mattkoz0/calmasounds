import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Ruido Blanco | Calma",
  description:
    "Descubre Calma, una aplicación de ruido blanco elegantemente simple para el sueño, la relajación y la construcción de un entorno de audio más sereno.",
  keywords: [
    "app de ruido blanco",
    "ruido blanco para dormir",
    "app de sueño ruido blanco",
    "ruido blanco relajante",
    "ruido blanco calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/white-noise-app",
  },
  openGraph: {
    title: "App de Ruido Blanco | Calma",
    description:
      "Descubre una aplicación de ruido blanco elegantemente simple para el sueño, la relajación y las rutinas diarias más calmadas.",
    url: "https://www.calmasounds.com/es/white-noise-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Ruido Blanco | Calma",
    description:
      "Descubre una aplicación de ruido blanco elegantemente simple para el sueño, la relajación y las rutinas diarias más calmadas.",
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
      "name": "App de Ruido Blanco",
      "item": "https://www.calmasounds.com/es/white-noise-app"
    }
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
            aria-label="Descargar Calma en Google Play (abre en ventana nueva)"
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
              alt="Interfaz de la app móvil Calma mostrando la lista de sonidos relajantes y categorías de sueño"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
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
            href="/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Ruido Blanco para Dormir</h3>
            <p className="mt-3 text-white/70">
              Descubre cómo el ruido blanco puede colaborar a la hora de mejorar en tu entorno de sueño.
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Colores de Ruido Explicados</h3>
            <p className="mt-3 text-white/70">
              Explora las diferencias del ruido blanco, rosa, marrón o verde para lograr el ambiente perfecto para ti.
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
              ¿Qué es una app de ruido blanco?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Una aplicación de ruido blanco ayuda a reproducir sonidos que son suaves, difusos
              y relajantes, ayudando a enmascarar otros ruidos más molestos en tu entorno.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puede el ruido blanco ayudar a dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Mucha gente usa diariamente el ruido blanco para sentir un ambiente de mayor calma 
              a la hora de acostarse y poder relajarse al reducir ruidos imprevistos de la ciudad o del tráfico.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Calma es únicamente sobre ruido blanco?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No. Calma es un reproductor increíble de ruido blanco, rosa, verde y marrón, pero
              también incluye un catálogo extensivo de sonidos para relajarte o concentrarte 
              en las tareas que tú elijas.
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