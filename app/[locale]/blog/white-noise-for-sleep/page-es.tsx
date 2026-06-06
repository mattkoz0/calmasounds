import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

const articleTitle = "Ruido blanco para dormir (Guía 2026) | Blog de Calma";
const articleDescription =
  "Aprende cómo el ruido blanco para dormir bloquea las distracciones, mejora el sueño profundo y ayuda a los bebés a conciliar el sueño más rápido.";
const articleUrl = "https://www.calmasounds.com/es/blog/white-noise-for-sleep";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "ruido blanco para dormir",
    "ruido blanco sueño",
    "ruido blanco noche",
    "sonidos para dormir ruido blanco",
    "does white noise help you sleep",
    "blog de calma",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "Calma",
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ruido blanco para dormir: la ciencia del enmascaramiento del sonido",
  description: articleDescription,
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: articleUrl,
  datePublished: "2026-03-25",
  dateModified: new Date().toISOString().split('T')[0],
};

const relatedArticles = [
  {
    href: "/es/blog/rain-sounds-vs-white-noise",
    title: "Sonido de lluvia vs. Ruido blanco",
    description:
      "Compara la sensación emocional y las diferencias prácticas entre la lluvia natural y la estática artificial.",
  },
  {
    href: "/es/blog/best-sounds-for-sleep",
    title: "Mejores sonidos para dormir",
    description:
      "Explora diferentes estilos de sonidos para dormir, desde el ruido rosa hasta las olas del mar, y cuál funciona mejor para ti.",
  },
];

export default function WhiteNoiseForSleepPage() {
  return (
    <ArticlePage
      slug="white-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/es/white-noise-app"
      topLinkLabel="Explorar app de ruido blanco"
      title="Ruido blanco para dormir: ¿cuándo puede ayudar realmente?"
      intro="El ruido blanco para dormir se ha convertido en un fenómeno global. Desde adultos estresados en ciudades ruidosas hasta padres que intentan que sus recién nacidos duerman toda la noche, millones de personas confían en ese siseo constante para conciliar el sueño. Pero, ¿cómo funciona realmente? ¿Mejora la calidad del sueño profundo o es solo una herramienta para tapar los ronquidos de tu pareja?"
      ctaHref="/es/white-noise-app"
      ctaLabel="Escuchar ruido blanco"
      secondaryCtaHref="/es/blog/rain-sounds-vs-white-noise"
      secondaryCtaLabel="Leer lluvia vs ruido blanco"
      tableOfContents={[
        { id: "que-es", title: "¿Qué es exactamente el ruido blanco?" },
        { id: "como-funciona", title: "Cómo el enmascaramiento de sonido mejora el sueño" },
        { id: "para-bebes", title: "Por qué a los bebés les encanta el ruido blanco" },
        { id: "buenas-practicas", title: "Cómo usarlo de forma segura" },
        { id: "faq", title: "Preguntas Frecuentes (FAQ)" },
      ]}
      relatedArticles={relatedArticles}
    >
      <ArticleSection id="que-es" title="¿Qué es exactamente el ruido blanco?">
        <p className="mt-4 leading-8 text-white/70">
          En física, el ruido blanco es un sonido que contiene todas las frecuencias dentro del rango auditivo humano (entre 20 hercios y 20,000 hercios) reproducidas a una intensidad igual. Debido a que contiene todas las frecuencias de manera simultánea, suena como un siseo constante, similar a la estática de un televisor, una radio desintonizada o el zumbido de un ventilador.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Ruido Blanco Puro" 
          description="Un sonido constante de espectro completo."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          El término „blanco“ proviene de la luz blanca, que se crea cuando se combinan todos los colores del espectro visual. De la misma manera, el ruido blanco es una combinación de todos los „colores“ acústicos.
        </p>
      </ArticleSection>

      <ArticleSection id="como-funciona" title="Cómo el enmascaramiento de sonido mejora el sueño">
        <p className="mt-4 leading-8 text-white/70">
          El ruido blanco no solo bloquea los sonidos al ser fuerte; funciona a través de un fenómeno llamado <strong>enmascaramiento de sonido</strong>. Cuando duermes, tu cerebro continúa procesando sonidos para alertarte del peligro. Lo que te despierta no es necesariamente el volumen de un ruido (como un portazo), sino el cambio de dirección del silencio al ruido.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Debido a que el ruido blanco contiene todas las frecuencias, básicamente llena el silencio. Eleva la línea base del ruido de fondo de modo que los sonidos repentinos (como el tráfico, un perro ladrando o los ronquidos de tu pareja) se mezclen y no activen la respuesta de 'despertar' de tu cerebro. Esto te ayuda a permanecer en las etapas de sueño más profundas y reparadoras.
        </p>
      </ArticleSection>

      <ArticleSection id="para-bebes" title="Por qué a los bebés les encanta el ruido blanco">
        <p className="mt-4 leading-8 text-white/70">
          Si alguna vez has intentado dormir a un recién nacido que llora, probablemente conozcas el poder de un fuerte «shhhh». El ruido blanco es increíblemente efectivo para los bebés porque imita el entorno acústico del útero materno.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Dentro del útero, el bebé escucha el flujo constante y fuerte de la sangre de la madre, que de hecho es muy similar a un ruido blanco o marrón pesado de baja frecuencia. Reproducir ruido blanco en la habitación activa un reflejo calmante, indicándole al bebé que está en un entorno seguro y familiar.
        </p>
      </ArticleSection>

      <ArticleSection id="buenas-practicas" title="Cómo usar el ruido blanco de forma segura">
        <p className="mt-4 leading-8 text-white/70">
          Aunque el ruido blanco es de gran ayuda, es importante usarlo correctamente para evitar la fatiga auditiva o la dependencia:
        </p>
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li><strong>Mantén un volumen seguro:</strong> El sonido debe actuar como un zumbido de fondo, no como un concierto. Mantén el volumen alrededor de 50-60 decibelios (aproximadamente el volumen de una conversación tranquila o una ducha abierta).</li>
          <li><strong>Cuida la distancia:</strong> Nunca coloques un teléfono o una máquina de ruido blanco directamente al lado de tu cabeza (o la de tu bebé). Mantén el dispositivo a una distancia de al menos 2 metros, preferiblemente al otro lado de la habitación.</li>
          <li><strong>Experimenta con otros „colores“:</strong> Si el ruido blanco puro te suena demasiado agudo o sibilante, prueba el Ruido Rosa (que enfatiza las frecuencias más bajas como la lluvia) o el Ruido Marrón (que suena como una cascada profunda y retumbante).</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="faq" title="Preguntas Frecuentes (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Puedes volverte adicto a dormir con ruido blanco?</h3>
            <p className="mt-2 leading-7 text-white/70">No te vuelves físicamente adicto al ruido blanco, pero puedes formar un hábito psicológico fuerte. Tu cerebro aprende a asociar el sonido con el sueño (un proceso llamado condicionamiento clásico). Si deseas dejar de usarlo, lo mejor es bajar gradualmente el volumen durante unas semanas en lugar de detenerte de golpe.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Es mejor el ruido blanco o el rosa para dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Muchos estudios sugieren que el ruido rosa (que suena como lluvia constante) podría ser mejor para mejorar el sueño profundo y de ondas lentas porque su equilibrio de frecuencias es más suave para el oído humano. Sin embargo, el ruido blanco es generalmente mejor para enmascarar distracciones extremadamente agudas y repentinas.</p>
          </div>
        </div>
      </ArticleSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Puedes volverte adicto a dormir con ruido blanco?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No te vuelves físicamente adicto al ruido blanco, pero puedes formar un hábito psicológico fuerte. Tu cerebro aprende a asociar el sonido con el sueño. Si deseas dejar de usarlo, lo mejor es bajar gradualmente el volumen durante unas semanas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Es mejor el ruido blanco o el rosa para dormir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muchos estudios sugieren que el ruido rosa podría ser mejor para mejorar el sueño profundo y de ondas lentas porque su equilibrio de frecuencias es más suave para el oído humano. Sin embargo, el ruido blanco es generalmente mejor para enmascarar distracciones extremadamente agudas y repentinas."
                }
              }
            ]
          })
        }}
      />
      
      <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 font-bold text-xl">CT</div>
        <div>
          <p className="font-semibold text-white">Escrito por el Equipo Calma</p>
          <p className="text-sm text-white/60">Defensores de la higiene del sueño que te ayudan a construir rutinas de acostarse más tranquilas y basadas en la ciencia.</p>
        </div>
      </div>
    </ArticlePage>
  );
}