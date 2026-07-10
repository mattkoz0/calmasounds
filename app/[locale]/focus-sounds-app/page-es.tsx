import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Sonidos para Concentración y TDAH | Calma",
  description:
    "¿Necesitas concentrarte? Mezcla ruido marrón, ruido blanco y lluvia para estudiar, trabajar o TDAH. App versión gratuita disponible, funciona offline.",
  keywords: [
    "app de sonidos para la concentración",
    "app de enfoque",
    "app de concentración",
    "sonidos para el trabajo profundo",
    "app para estudiar",
    "sonidos de concentración calma",
    "sonidos para estudiar",
    "ruido marrón TDAH",
    "app para concentrarse",
    "sonidos para trabajar",
    "ruido de fondo para estudiar",
    "mejor ruido para estudiar",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/focus-sounds-app",
  },
  openGraph: {
    title: "App de Sonidos para Concentración y TDAH | Calma",
    description:
    "¿Necesitas concentrarte? Mezcla ruido marrón, ruido blanco y lluvia para estudiar, trabajar o TDAH. versión gratuita disponible.",
    url: "https://www.calmasounds.com/es/focus-sounds-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App de Sonidos para Concentración y TDAH | Calma",
    description:
    "Mezcla ruido marrón, ruido blanco y lluvia para estudiar, trabajar o TDAH. 100% gratis, funciona offline.",
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
      "name": "App de Sonidos de Concentración",
      "item": "https://www.calmasounds.com/es/focus-sounds-app"
    }
  ]
};

export default function FocusSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          App de sonidos de concentración
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Una app de sonidos de concentración para el trabajo profundo y el estudio
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación increíblemente sencilla de sonidos de concentración que 
          te ayuda a crear un ambiente de audio personalizado para trabajar de forma profunda,
          leer, estudiar y mantener una concentración sin distracciones.
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
            <h2 className="text-2xl font-semibold">Céntrate por más tiempo</h2>
            <p className="mt-4 leading-7 text-white/70">
              Utiliza paisajes sonoros de fondo que contribuyen a reducir las distracciones 
              y apoyan una concentración más sólida durante el trabajo o las sesiones de estudio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Crea tu propia mezcla</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma te permite modelar un espacio auditivo mucho más personal en lugar de 
              tener que escuchar siempre la misma pista prefabricada y repetitiva.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Trabaja en un sitio más sereno</h2>
            <p className="mt-4 leading-7 text-white/70">
              La aplicación ha sido diseñada para ser sencilla, elegante y emocionalmente relajante,
              ayudando a que tu escritorio se perciba menos saturado y más enfocado.
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
            Mira el entorno de concentración que ofrece Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"

              alt="Interfaz de la app móvil Calma mostrando categorías de sonidos para concentración"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Interfaz de Calma para personalizar estudios y ambientes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mezclador de sonidos de Calma para concentración profunda"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interfaz de Calma para audio ambiental con ondas binaurales"
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
            Aprende sobre sonido y concentración
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/es/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Mejores Sonidos para Estudiar</h3>
            <p className="mt-3 text-white/70">
              Descubre los tipos de sonido que ayudan a concentrarte y enfocar tu atención en sesiones de estudio.
            </p>
          </a>
          <a
            href="/es/blog/binaural-beats-for-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Ondas binaurales explicadas</h3>
            <p className="mt-3 text-white/70">
              Una introducción al poder las ondas binaurales y cómo estas apoyan un entorno sereno en tu trabajo diario.
            </p>
          </a>
          <a
            href="/es/blog/best-color-noise-for-adhd"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Mejor Ruido para TDAH</h3>
            <p className="mt-3 text-white/70">
              ¿Qué color de ruido es más efectivo para personas con TDAH? Guía basada en investigación científica.
            </p>
          </a>
          <a
            href="/es/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Ruido Marrón vs Blanco vs Rosa</h3>
            <p className="mt-3 text-white/70">
              Compara los diferentes colores de ruido y encuentra cuál es mejor para tu concentración y estudio.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Tus dudas sobre nuestra app de enfoque
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué es una app de sonidos para la concentración?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Una aplicación de sonidos para la concentración te ayuda a crear un fondo de audio que respalda
              el enfoque, reduce las distracciones y hace que el estudio y el trabajo sean experiencias inmersivas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Cuándo puedo utilizar Calma?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Puedes utilizar Calma mientras estudias, lees, escribes, programas o en cualquier
              momento en que quieras disfrutar de un ambiente mucho más calmado.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puedo personalizar una mezcla de concentración?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. Calma está diseñada para que puedas mezclar los audios tú mismo y que,
              así, tu espacio de trabajo se sienta natural.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué ruido es mejor para estudiar?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              El ruido marrón y el ruido blanco son los más recomendados para estudiar. El ruido marrón tiene un tono más profundo y grave que ayuda a mantener la concentración, mientras que el ruido blanco enmascara mejor los sonidos agudos del entorno. Con Calma puedes mezclar ambos con lluvia suave.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿El ruido marrón ayuda con el TDAH?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Muchas personas con TDAH reportan que el ruido marrón les ayuda a concentrarse mejor. Su frecuencia grave y constante puede reducir la hiperactividad mental y facilitar el enfoque sostenido. Calma te permite ajustar la intensidad exacta que necesitas.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué es una app de sonidos para la concentración?","acceptedAnswer":{"@type":"Answer","text":"Una aplicación de sonidos para la concentración te ayuda a crear un fondo de audio que respalda el enfoque, reduce las distracciones y hace que el estudio y el trabajo sean experiencias inmersivas."}},{"@type":"Question","name":"¿Cuándo puedo utilizar Calma?","acceptedAnswer":{"@type":"Answer","text":"Puedes utilizar Calma mientras estudias, lees, escribes, programas o en cualquier momento en que quieras disfrutar de un ambiente mucho más calmado."}},{"@type":"Question","name":"¿Puedo personalizar una mezcla de concentración?","acceptedAnswer":{"@type":"Answer","text":"Sí. Calma está diseñada para que puedas mezclar los audios tú mismo y que tu espacio de trabajo se sienta natural."}},{"@type":"Question","name":"¿Qué ruido es mejor para estudiar?","acceptedAnswer":{"@type":"Answer","text":"El ruido marrón y el ruido blanco son los más recomendados. El ruido marrón tiene un tono más profundo que ayuda a mantener la concentración. Con Calma puedes mezclar ambos con lluvia suave."}},{"@type":"Question","name":"¿El ruido marrón ayuda con el TDAH?","acceptedAnswer":{"@type":"Answer","text":"Muchas personas con TDAH reportan que el ruido marrón les ayuda a concentrarse mejor. Su frecuencia grave y constante puede reducir la hiperactividad mental. Calma te permite ajustar la intensidad exacta."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Usa Calma y trabaja profundamente
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Descarga Calma en Google Play y crea un nivel de enfoque mucho
            más completo combinando tus ambientes sonoros preferidos.
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