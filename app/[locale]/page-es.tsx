import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calma | App de Sonidos para Dormir, Relajación y Concentración",
  description:
    "Calma es una aplicación de sonidos para dormir, relajación, ruido blanco y concentración. Crea mezclas personalizadas para dormir mejor, tener noches tranquilas y lograr una concentración profunda.",
  alternates: {
    canonical: "https://www.calmasounds.com/es",
  },
  openGraph: {
    title: "Calma | App de Sonidos para Dormir, Relajación y Concentración",
    description:
      "Calma es una aplicación de sonidos para dormir, relajación, ruido blanco y concentración. Crea mezclas personalizadas para dormir mejor, tener noches tranquilas y lograr una concentración profunda.",
    url: "https://www.calmasounds.com/es",
    siteName: "Calma",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | App de Sonidos para Dormir, Relajación y Concentración",
    description:
      "Calma es una aplicación de sonidos para dormir, relajación, ruido blanco y concentración. Crea mezclas personalizadas para dormir mejor, tener noches tranquilas y lograr una concentración profunda.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calma",
  url: "https://www.calmasounds.com/es",
  description:
    "Calma es una aplicación de sonidos para dormir, relajación, ruido blanco y concentración. Crea mezclas personalizadas para dormir mejor, tener noches tranquilas y lograr una concentración profunda.",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calma",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Sleep and Relaxation",
  operatingSystem: "Android 8.0 and up",
  url: "https://www.calmasounds.com/es",
  downloadUrl:
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
  description:
    "Aplicación de sonidos para dormir, ruido blanco, relajación y concentración con paisajes sonoros personalizados.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  softwareVersion: "1.0.0",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calma",
  url: "https://www.calmasounds.com/es",
  logo: "https://www.calmasounds.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "calma.app@outlook.com",
    contactType: "customer support",
    availableLanguage: ["English", "Spanish"]
  },
  sameAs: [
    "https://www.tiktok.com/@.calma.app",
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://www.instagram.com/calma.app.official",
    "https://www.youtube.com/@CalmaApp",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Calma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma es una aplicación mezcladora de sonidos diseñada para ayudarte a dormir mejor, relajarte más fácilmente y mantenerte concentrado con mezclas de audio personalizadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para quién es Calma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma es para cualquier persona que desee una rutina más tranquila antes de dormir, un descanso más pacífico después del trabajo o un fondo de enfoque para estudiar y realizar trabajo profundo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo crear mi propia mezcla de sonidos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Calma se basa en la idea de crear tu propio entorno de sonido relajante en lugar de escuchar solo una pista fija.",
      },
    },
    {
      "@type": "Question",
      name: "¿Está disponible Calma ahora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma está disponible en Android, con más mejoras y una futura expansión a otras plataformas planeada con el tiempo.",
      },
    },
  ],
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Demostración de la App Calma",
  description: "Mira Calma en acción, desde la mezcla inmersiva de sonidos hasta funciones de bienestar premium diseñadas para dormir, relajarse y concentrarse.",
  thumbnailUrl: "https://www.calmasounds.com/screenshots/3_en.png",
  uploadDate: "2026-03-30T09:00:00Z",
  duration: "PT34S",
  contentUrl: "https://www.calmasounds.com/demo.mp4",
  embedUrl: "https://www.calmasounds.com/demo.mp4"
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.calmasounds.com/es"
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(softwareAppJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(videoJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbJsonLd),
              }}
            />


      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Calma • Sonidos para Dormir y Relajarse
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Duerme mejor, relájate profundamente y concéntrate con paisajes sonoros personalizados
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Calma es una aplicación elegante y sencilla de sonidos para dormir y relajación que te ayuda
          a crear mezclas de audio personalizadas para un mejor descanso, noches más tranquilas y
          una concentración más profunda.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar la app Calma en Google Play (abre en ventana nueva)"
            className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
          >
            Comienza tu Rutina Gratis
          </a>

          <a
            href="#features"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Explorar funciones
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/65">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Mezclas personalizadas
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Dormir • Relajarse • Concentrarse
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Sin suscripciones obligatorias
          </span>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Image
              src="/google-play-badge.png"
              alt="Disponible en Google Play"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </a>
        </div>
        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Mejor Sueño
            </p>
            <h2 className="mt-3 text-xl font-semibold">Sonidos para Dormir Personalizados y Ambiente de Lluvia</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Crea mezclas de sonido para la hora de dormir con sonidos de lluvia, texturas ambientales y
              capas de fondo relajantes que te ayudan a desconectar de forma natural.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Relajación Profunda
            </p>
            <h2 className="mt-3 text-xl font-semibold">Sonidos Relajantes de la Naturaleza para un Descanso Profundo</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Usa paisajes sonoros calmantes para restablecer tu mente, reducir el ruido a tu alrededor
              y construir una rutina vespertina más suave.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              TDAH y Concentración
            </p>
            <h2 className="mt-3 text-xl font-semibold">Ruido Marrón y Sonidos de Concentración para TDAH</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Construye tu propio audio de fondo para estudiar, leer y realizar trabajo profundo
              sin distracciones visuales ni desorden.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Video demostración
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Mira a Calma en movimiento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Observa cómo se ve y se siente Calma en el uso real, desde la mezcla inmersiva de sonidos
            hasta funciones de bienestar premium diseñadas para dormir, relajarse y concentrarse.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20">
          <video
            className="h-auto w-full rounded-[1.5rem]"
            controls
            preload="metadata"
            playsInline
            poster="/screenshots/3_en.png"
            title="Video demostración de la app Calma"
            aria-label="Video demostración de la app Calma"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Vista previa
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Ve a Calma en acción
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explora la interfaz bellamente simple de Calma y observa cómo la aplicación
            te ayuda a construir paisajes sonoros calmantes para dormir, relajarte y concentrarte.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interfaz de la aplicación móvil Calma mostrando una lista de sonidos para dormir y categorías de relajación"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interfaz del mezclador de sonidos Calma para personalizar ruido blanco para dormir y concentrarse"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/5_en.png"
              alt="Captura de pantalla de la app Calma 3"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/7_en.png"
              alt="Interfaz del mezclador de sonidos Calma para crear mezclas de ruido blanco personalizadas"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Funciones exclusivas
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Más que solo sonidos para dormir
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calma va más allá de la simple reproducción con funciones inmersivas diseñadas para hacer
            que tus rutinas se sientan más personales, relajantes y memorables.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Laboratorio de Ondas Cerebrales
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Sintoniza tu estado mental con experimentos de audio inmersivos
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Explora un lado más avanzado de la calma con experiencias de sonido diseñadas para
              el sueño, el enfoque y el reinicio mental profundo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Respiración Guiada
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Respira con un ritmo más suave
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              La guía visual suave y la respiración transforman la aplicación en un ritual relajante,
              no solo en un reproductor de audio pasivo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Ritual del Cielo Nocturno
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Un momento tranquilo de descubrimiento
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Añade una sensación de asombro a tu rutina con una función que hace que la calma
              diaria se sienta más significativa, lúdica y emocionalmente gratificante.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Por qué Calma
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Una experiencia más tranquila, diseñada con intención
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calma está construida para sentirse elegante, enfocada y emocionalmente ligera. Te ayuda
            a crear un mejor entorno sonoro sin desorden, fricción o ruido visual.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Crea tu propia atmósfera</h3>
            <p className="mt-4 leading-7 text-white/70">
              Mezcla sonidos según tu estado de ánimo, tu rutina y tu momento. Calma te brinda
              una experiencia más personal que las aplicaciones de audio genéricas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Siéntete tranquilo, no abrumado</h3>
            <p className="mt-4 leading-7 text-white/70">
              La interfaz está diseñada para apoyar la calma, no la distracción. Cada pantalla
              busca sentirse simple, inmersiva y fácil de usar a diario.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Una app, múltiples rituales diarios</h3>
            <p className="mt-4 leading-7 text-white/70">
              Usa Calma antes de dormir, durante tu descanso nocturno, mientras trabajas o cuando
              simplemente necesitas un fondo más suave para tu día.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Diseñada para sentirse cálida y premium</h3>
            <p className="mt-4 leading-7 text-white/70">
              Calma combina un aspecto pulido con un tono emocional suave, ayudando a que la aplicación
              se sienta como un lugar al que deseas volver.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Explora más
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Descubre Calma por intención
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explora páginas dedicadas para el sueño, la relajación y el enfoque para encontrar el lado
            de Calma que mejor se adapte a tu rutina.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/sleep-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Dormir
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              App de sonidos para dormir
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Explora cómo Calma apoya noches más tranquilas, rutinas antes de acostarse y
              paisajes sonoros de sueño personalizados.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explorar página de sueño →
            </span>
          </a>

          <a
            href="/relaxing-sounds"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Relajarse
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Sonidos relajantes
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Descubre un lado más suave de Calma diseñado para noches pacíficas, reinicio
              emocional y rituales diarios calmantes.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explorar página de relajación →
            </span>
          </a>

          <a
            href="/focus-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Enfoque
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              App de sonidos para enfoque
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Ve cómo Calma ayuda a crear un ambiente más tranquilo para el trabajo profundo,
              la concentración y las sesiones de estudio.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Explorar página de enfoque →
            </span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Guías
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Lee nuestras guías de sueño y enfoque
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Explora lecturas prácticas sobre sonidos para dormir, ruido blanco, estudios y rutinas más tranquilas a la hora de acostarse.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Sonidos de Lluvia para Dormir y Enfocarse</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Por qué el constante sonido de la lluvia es perfecto para calmar tu mente.
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Los Mejores Sonidos para Dormir</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Lluvia, ruido blanco y paisajes sonoros más suaves para la hora de acostarse.
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Los Mejores Sonidos para Estudiar</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Descubre qué sonidos pueden ayudar a la concentración y el enfoque.
            </p>
          </a>
        </div>
      </section>
      
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Conocimiento Sonoro
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Aprende sobre los colores del ruido
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            ¿Sabías que el ruido tiene colores? Desde enmascarar distracciones hasta apoyar el enfoque y el TDAH, diferentes frecuencias cubren distintas necesidades.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Ruido Blanco
            </div>
            <h3 className="text-xl font-semibold">Perfecto para enmascarar</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Cubre todas las frecuencias audibles por igual. Ideal para bloquear sonidos fuertes y apoyar el sueño de los bebés.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Ruido Rosa
            </div>
            <h3 className="text-xl font-semibold">Equilibrado y natural</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Más profundo que el ruido blanco, simulando lluvia o viento constante. Excelente para mejorar la calidad del sueño.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Ruido Marrón
            </div>
            <h3 className="text-xl font-semibold">Enfoque y soporte TDAH</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Enfocado en bajas frecuencias, como una cascada distante. Popular para el enfoque profundo y 'acallar' una mente ocupada.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Ruido Verde
            </div>
            <h3 className="text-xl font-semibold">Armonía de la Naturaleza</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Se centra en las frecuencias de rango medio, similar al susurro de las hojas. Perfecto para una atmósfera natural y relajante.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Lee la guía completa sobre los colores del ruido
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">¿Qué es Calma?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma es una aplicación de mezcla de sonidos diseñada para ayudarte a dormir mejor, relajarte
              más fácilmente y mantenerte concentrado con mezclas de audio personalizadas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">¿Para quién es Calma?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma es para cualquier persona que desee una rutina más tranquila antes de dormir,
              un descanso más pacífico después del trabajo o un fondo de enfoque para estudiar y trabajar profundamente.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">¿Puedo crear mi propia mezcla de sonidos?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Sí. Calma se basa en la idea de crear tu propio entorno de sonido relajante en lugar de
              escuchar solo una pista predeterminada.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">¿Está disponible Calma ahora?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma está disponible en Android, con más mejoras y una futura expansión a
              otras plataformas planeada de cara al futuro.
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Empieza ya
          </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Descarga Calma y construye una rutina diaria más suave
            </h2>
            <p className="mt-4 leading-7 text-white/70">
            Crea paisajes sonoros personalizados para un mejor sueño, noches más tranquilas y una
            concentración más profunda con una aplicación maravillosamente sencilla diseñada para uso diario.
          </p>

          <div className="mt-10 flex justify-center hover:scale-[1.02] transition-transform duration-200">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
              aria-label="Descarga la App Calma en Google Play"
            >
              <Image
                src="/google-play-badge.png"
                alt="Consíguelo en Google Play"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
              />
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">
            ¿Buscas una página dedicada para dormir?{" "}
            <a
              href="/sleep-sounds-app"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Explora nuestra página de sonidos para dormir
            </a>
          </p>

          <p className="mt-3 text-sm text-white/60">
            ¿Buscas más ideas para la hora de dormir?{" "}
            <a
              href="/blog/best-sounds-for-sleep"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Lee nuestra guía rápida de los mejores sonidos para dormir
            </a>
          </p>
          <p className="mt-3 text-sm text-white/60">
            ¿Sientes curiosidad por los audios del tipo ondas cerebrales?{" "}
            <a
              href="/blog/binaural-beats-for-sleep-and-focus"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Lee nuestra guía sobre beats binaurales
            </a>
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Conocimiento Sonoro
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Lo último de nuestro blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            Ver todas las guías
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white group-hover:text-white">
              Los colores del ruido explicados
            </h3>
            <p className="mt-4 flex-grow leading-7 text-white/60">
              ¿Alguna vez te has preguntado la diferencia entre ruido blanco, rosa y marrón? 
              Descubre qué color es mejor para tu concentración o sueño.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white">
              Leer guía
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>

          <a
            href="/blog/best-sounds-for-sleep"
            className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white group-hover:text-white">
              Mejores sonidos para dormir
            </h3>
            <p className="mt-4 flex-grow leading-7 text-white/60">
              Una guía práctica para elegir el audio de fondo adecuado para tu
              rutina nocturna, desde la lluvia hasta el ruido blanco.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white">
              Leer guía
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>

          <a
            href="/blog/how-to-build-a-bedtime-routine"
            className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white group-hover:text-white">
              Construir una rutina de sueño
            </h3>
            <p className="mt-4 flex-grow leading-7 text-white/60">
              Maneras simples de crear un ritmo vespertino más calmado que apoye y consolide 
              el descanso natural y consistente todas las noches.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white">
              Leer guía
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}