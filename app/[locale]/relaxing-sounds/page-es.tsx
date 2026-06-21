import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sonidos Relajantes Gratis para Estrés y Ansiedad | Calma",
  description:
    "¿Necesitas relajarte? Mezcla sonidos de lluvia, naturaleza y ruido blanco para reducir el estrés y la ansiedad. App 100% gratis, sin anuncios, funciona offline.",
  keywords: [
    "app de sonidos relajantes",
    "sonidos de relajación",
    "app de sonidos para calmarse",
    "sonidos ambientales relajantes",
    "sonidos relajantes calma",
    "sonidos para relajarse gratis",
    "sonidos para la ansiedad",
    "app relajación gratis",
    "sonidos para meditar",
    "sonidos calmantes para el estrés",
    "música relajante para dormir",
    "sonidos ambientales gratis",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/relaxing-sounds",
  },
  openGraph: {
    title: "Sonidos Relajantes Gratis | Estrés, Ansiedad y Sueño | Calma",
    description:
    "Mezcla sonidos de lluvia, naturaleza y ruido blanco para reducir el estrés y la ansiedad. 100% gratis, sin anuncios.",
    url: "https://www.calmasounds.com/es/relaxing-sounds",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonidos Relajantes Gratis | Calma",
    description:
    "Mezcla lluvia, naturaleza y ruido blanco para relajarte. 100% gratis, funciona offline.",
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
      "name": "App de Sonidos Relajantes",
      "item": "https://www.calmasounds.com/es/relaxing-sounds"
    }
  ]
};

export default function RelaxingSoundsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sonidos relajantes
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Una app de sonidos relajantes para noches tranquilas y rutinas suaves
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación de sonidos relajantes muy elegante y simple que te ayuda
          a bajar el ritmo, resetear después de días ajetreados y crear un entorno más pacífico
          siempre que lo necesites. Construye paisajes sonoros personalizados para la relajación,
          el equilibrio emocional y tranquilos rituales diarios.
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
            Volver a inicio
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Baja el ritmo fácilmente</h2>
            <p className="mt-4 leading-7 text-white/70">
              Usa paisajes sonoros calmantes para salir del modo de trabajo, acallar el ruido mental
              y crear una transición vespertina más agradable.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Crea tu propia mezcla relajante</h2>
            <p className="mt-4 leading-7 text-white/70">
              Combina sonidos de una manera que se sienta personal, cálida y acorde
              con la atmósfera que deseas tener alrededor.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Construye una rutina suave</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma te ayuda a regresar a la relajación de forma simple y elegante al nivel
              que encaja con la vida diaria real.
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
            Descubre el lado relajante de Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interfaz de la aplicación móvil Calma para elegir categorías de sonido"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interfaz Calma para personalizar paisajes sonoros relajantes"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mezclador de sonidos de Calma"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interfaz Calma para mezclas personalizadas"
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
            Aprende más sobre relajación y sonido
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/es/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Beneficios de los Sonidos de la Naturaleza</h3>
            <p className="mt-3 text-white/70">
              Explora cómo paisajes sonoros naturales como la lluvia y las olas pueden actuar como anclaje natural de relajación.
            </p>
          </a>
          <a
            href="/es/blog/guided-breathing-techniques"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Técnicas de Respiración Guiada</h3>
            <p className="mt-3 text-white/70">
              Descubre métodos de respiración que trabajan junto a los sonidos ambientales para una mejor relajación.
            </p>
          </a>
          <a
            href="/es/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Mejores Sonidos para Dormir</h3>
            <p className="mt-3 text-white/70">
              ¿Qué sonidos te ayudan a dormir más rápido? Una guía completa con opciones naturales y electrónicas.
            </p>
          </a>
          <a
            href="/es/blog/how-to-build-a-bedtime-routine"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Cómo Crear una Rutina Nocturna</h3>
            <p className="mt-3 text-white/70">
              Construye una rutina vespertina relajante que integre sonidos calmantes para un mejor descanso.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Preguntas frecuentes sobre relajación
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué es una app de sonidos relajantes?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Una app de sonidos relajantes te ayuda a reproducir audio calmante como lluvia, olas, ruido blanco y sonidos de la naturaleza para reducir el estrés, la ansiedad y facilitar el descanso.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Cuándo puedo usar Calma para relajarme?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Puedes usar Calma después del trabajo, durante el descanso por la tarde, mientras
              lees o siempre que busques un entorno de fondo suave para reducir el estrés.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puedo personalizar los sonidos?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. Calma está diseñada para crear tu propio paisaje relajante mezclando múltiples sonidos y ajustando el volumen de cada uno de forma independiente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Los sonidos relajantes ayudan con la ansiedad?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. Investigaciones muestran que los sonidos de la naturaleza y el ruido blanco activan el sistema nervioso parasimpático, reduciendo la frecuencia cardíaca y la respuesta de estrés. Muchos terapeutas recomiendan sonidos ambientales como complemento para manejar la ansiedad.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Calma funciona sin conexión a Internet?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. Calma funciona completamente offline, lo que significa que puedes usarla en cualquier lugar: en el avión, en la montaña o simplemente cuando no tienes Wi-Fi. No necesitas conexión para relajarte.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué es una app de sonidos relajantes?","acceptedAnswer":{"@type":"Answer","text":"Una app de sonidos relajantes reproduce audio calmante como lluvia, olas, ruido blanco y sonidos de la naturaleza para reducir el estrés y facilitar el descanso."}},{"@type":"Question","name":"¿Cuándo puedo usar Calma para relajarme?","acceptedAnswer":{"@type":"Answer","text":"Puedes usar Calma después del trabajo, durante el descanso, mientras lees o siempre que busques un entorno suave para reducir el estrés."}},{"@type":"Question","name":"¿Puedo personalizar los sonidos?","acceptedAnswer":{"@type":"Answer","text":"Sí. Calma está diseñada para crear tu propio paisaje relajante mezclando múltiples sonidos y ajustando el volumen individualmente."}},{"@type":"Question","name":"¿Los sonidos relajantes ayudan con la ansiedad?","acceptedAnswer":{"@type":"Answer","text":"Sí. Los sonidos de la naturaleza y el ruido blanco activan el sistema nervioso parasimpático, reduciendo la frecuencia cardíaca y la respuesta de estrés."}},{"@type":"Question","name":"¿Calma funciona sin conexión a Internet?","acceptedAnswer":{"@type":"Answer","text":"Sí. Calma funciona completamente offline. Puedes usarla en cualquier lugar sin necesidad de Wi-Fi."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Prueba Calma para momentos de calma
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Descarga Calma en Google Play y crea una atmósfera más pacífica
            con sonidos relajantes personalizados.
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