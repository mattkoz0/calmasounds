import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "App de Sonidos de la Naturaleza Gratis | Calma",
  description:
    "Escucha sonidos de lluvia, bosque, mar y aves para dormir y relajarte. Crea mezclas personalizadas con Calma. 100% gratis, sin anuncios, funciona offline.",
  keywords: [
    "app de sonidos de la naturaleza",
    "sonidos de la naturaleza para dormir",
    "app de sueño sonidos de la naturaleza",
    "sonidos de la naturaleza relajante",
    "sonidos de la naturaleza calma",
    "sonidos de lluvia para dormir",
    "sonidos del bosque",
    "app sonidos naturaleza gratis",
    "sonidos del mar",
    "sonidos relajantes naturaleza",
    "generador sonidos naturaleza",
    "sonidos de aves para relajarse",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/nature-sounds-app",
  },
  openGraph: {
    title: "App de Sonidos de la Naturaleza Gratis | Lluvia, Bosque, Mar | Calma",
    description:
    "Escucha sonidos de lluvia, bosque, mar y aves para dormir y relajarte. Crea mezclas personalizadas. 100% gratis, sin anuncios.",
    url: "https://www.calmasounds.com/es/nature-sounds-app",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonidos de Lluvia, Bosque y Mar para Dormir | Calma",
    description:
    "Crea mezclas relajantes con sonidos de la naturaleza. 100% gratis, funciona offline.",
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
      "name": "App de Sonidos de la Naturaleza",
      "item": "https://www.calmasounds.com/es/nature-sounds-app"
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
          App de sonidos de la naturaleza
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Una app de sonidos de la naturaleza para dormir mejor y un ambiente sano
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación de sonidos de la naturaleza muy elegante y simple que te ayuda a crear un entorno sonoro 
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
              El sonidos de la naturaleza puede ayudar a crear un fondo de sonido más estable para 
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
              alt="Interfaz de Calma personalizando diferentes tipos de sonidos de la naturaleza"
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
              alt="Interfaz de la mezcla de audios para sonidos de la naturaleza"
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
            Aprende más sobre el sonidos de la naturaleza
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/es/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Beneficios de los Sonidos de la Naturaleza</h3>
            <p className="mt-3 text-white/70">
              Descubre cómo los sonidos naturales reducen el estrés y mejoran tu bienestar emocional.
            </p>
          </a>
          <a
            href="/es/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sonidos de Lluvia para Dormir</h3>
            <p className="mt-3 text-white/70">
              ¿Por qué los sonidos de lluvia son tan efectivos para conciliar el sueño y mejorar la concentración?
            </p>
          </a>
          <a
            href="/es/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Lluvia vs Ruido Blanco</h3>
            <p className="mt-3 text-white/70">
              Compara los efectos de los sonidos orgánicos de lluvia con el ruido blanco constante para tu sueño.
            </p>
          </a>
          <a
            href="/es/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Colores de Ruido Explicados</h3>
            <p className="mt-3 text-white/70">
              Explora las diferencias entre ruido blanco, rosa, marrón y verde para encontrar tu sonido ideal.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            App de Sonidos de la Naturaleza FAQ
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Qué es una app de sonidos de la naturaleza?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Una aplicación de sonidos de la naturaleza reproduce sonidos ambientales como lluvia, olas del mar, bosque y aves para ayudarte a relajarte, dormir mejor o concentrarte.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Los sonidos de la naturaleza ayudan a dormir?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí, múltiples estudios científicos demuestran que los sonidos de la naturaleza reducen el estrés, bajan la frecuencia cardíaca y facilitan la transición al sueño profundo. Son especialmente efectivos combinados con ruido blanco.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Calma es únicamente sobre sonidos de la naturaleza?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              No. Calma también incluye ruido blanco, rosa, marrón y verde, además de un extenso catálogo de sonidos para relajarte, concentrarte o dormir.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Puedo mezclar sonidos de lluvia con ruido blanco?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              ¡Por supuesto! Calma está diseñada específicamente para que puedas mezclar múltiples sonidos y ajustar el volumen de cada uno. Combinar lluvia con ruido blanco o marrón es una de las mezclas más populares.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              ¿Los sonidos de la naturaleza reducen la ansiedad?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. Investigaciones publicadas en Scientific Reports muestran que los sonidos de la naturaleza activan el sistema nervioso parasimpático, reduciendo la respuesta de lucha o huida y promoviendo un estado de relajación.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué es una app de sonidos de la naturaleza?","acceptedAnswer":{"@type":"Answer","text":"Una aplicación de sonidos de la naturaleza reproduce sonidos ambientales como lluvia, olas del mar, bosque y aves para ayudarte a relajarte, dormir mejor o concentrarte."}},{"@type":"Question","name":"¿Los sonidos de la naturaleza ayudan a dormir?","acceptedAnswer":{"@type":"Answer","text":"Sí, múltiples estudios científicos demuestran que los sonidos de la naturaleza reducen el estrés y facilitan la transición al sueño profundo."}},{"@type":"Question","name":"¿Calma es únicamente sobre sonidos de la naturaleza?","acceptedAnswer":{"@type":"Answer","text":"No. Calma también incluye ruido blanco, rosa, marrón y verde, además de un extenso catálogo de sonidos para relajarte o concentrarte."}},{"@type":"Question","name":"¿Puedo mezclar sonidos de lluvia con ruido blanco?","acceptedAnswer":{"@type":"Answer","text":"¡Por supuesto! Calma está diseñada para que puedas mezclar múltiples sonidos y ajustar el volumen de cada uno."}},{"@type":"Question","name":"¿Los sonidos de la naturaleza reducen la ansiedad?","acceptedAnswer":{"@type":"Answer","text":"Sí. Los sonidos de la naturaleza activan el sistema nervioso parasimpático, reduciendo la respuesta de lucha o huida y promoviendo relajación."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Prueba el bienestar del sonidos de la naturaleza de Calma
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