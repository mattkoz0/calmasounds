import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Los mejores sonidos para dormir (2026): ¿Qué sonido te hace dormir? | Calma",
  description:
    "¿Cuáles son los mejores sonidos para dormir? Desde el ruido blanco hasta la lluvia profunda y el ruido marrón para el TDAH: explora sonidos respaldados por la ciencia.",
  keywords: [
    "mejores sonidos para dormir",
    "buenos sonidos para dormir",
    "sonidos para dormir mejor",
    "ruidos para ayudarte a dormir",
    "qué sonido te hace dormir",
    "calma app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/blog/best-sounds-for-sleep",
  },
  openGraph: {
    title: "Los mejores sonidos para dormir (2026)",
    description:
      "¿Cuáles son los mejores sonidos para dormir? Explora audios respaldados por la ciencia.",
    url: "https://www.calmasounds.com/es/blog/best-sounds-for-sleep",
    siteName: "Calma",
    locale: "es_ES",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué sonido te hace dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El mejor sonido para hacerte dormir es uno que sea continuo y no amenazante, como el ruido rosa (lluvia) o el ruido marrón. Estos sonidos ralentizan las ondas cerebrales y enmascaran ruidos repentinos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son los buenos sonidos para dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los buenos sonidos incluyen lluvia constante, tormentas distantes, olas del mar, ruido blanco y ruido marrón. La clave es la consistencia que ayuda a relajar el sistema nervioso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué ruidos te ayudan a dormir mejor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si vives en un entorno ruidoso, el ruido blanco es el mejor para bloquear agresivamente el tráfico. Si tienes pensamientos acelerados, los ruidos más profundos como el ruido marrón son mejores."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es malo dormir con sonidos toda la noche?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, dormir con sonidos de fondo constantes a bajo volumen es perfectamente seguro y se recomienda para el insomnio. También puedes usar un temporizador para desvanecer el sonido."
      }
    }
  ]
};

export default function BestSoundsForSleepPageES() {
  return (
    <ArticlePage
      slug="best-sounds-for-sleep"
      jsonLd={articleJsonLd}
      title="Los mejores sonidos para dormir (2026): ¿Qué sonido te hace dormir?"
      intro="Si tienes dificultades para conciliar el sueño, no estás solo. Millones de personas buscan cada noche la respuesta a una pregunta sencilla: ¿Qué sonido te hace dormir? Aunque el silencio total puede parecer ideal, hace que el cerebro esté hiperalerta. El secreto para descansar es crear una 'manta acústica' constante. Exploremos los mejores sonidos para dormir, respaldados por la ciencia."
      topLinkHref="/es/sleep-sounds-app"
      topLinkLabel="Explorar app de sonidos para dormir"
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Descargar Calma Gratis"
      secondaryCtaHref="/es/white-noise-app"
      secondaryCtaLabel="Explorar app de ruido blanco"
      tableOfContents={[
        { id: "what-makes-you-sleep", title: "¿Qué sonido te hace dormir?" },
        { id: "best-sounds", title: "Los 3 mejores sonidos para dormir" },
        { id: "how-to-mix", title: "Cómo mezclar sonidos" },
        { id: "faq", title: "Preguntas Frecuentes" },
      ]}
      relatedArticles={[
        {
          href: "/es/blog/rain-sounds-vs-white-noise",
          title: "Lluvia vs Ruido Blanco",
          description: "¿Cuál ha demostrado científicamente ayudarte a dormir mejor?",
        },
      ]}
    >
      <ArticleSection id="what-makes-you-sleep" title="¿Qué sonido te hace dormir? (La ciencia)">
        <p className="mt-4 leading-8 text-white/70">
          Tu cerebro nunca apaga su audición, incluso durante el sueño profundo. El mejor sonido para dormir es aquel que utiliza el <strong>enmascaramiento de sonido</strong>, reduciendo el contraste entre el silencio total y un ruido repentino. Los buenos sonidos siempre son constantes.
        </p>
      </ArticleSection>

      <ArticleSection id="best-sounds" title="Los 3 mejores sonidos para dormir">
        <div className="mt-8 space-y-12">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1. Lluvia Profunda (Ruido Rosa)</h3>
            <p className="mb-4 leading-8 text-white/70">
              La lluvia se considera científicamente \"ruido rosa\". Tiene un sonido más profundo y rico que el ruido blanco y es increíblemente eficaz para reducir las ondas cerebrales.
            </p>
            <AudioPlayer 
              src="/rain.m4a" 
              title="Lluvia Profunda" 
              description="Un sonido acogedor que calma naturalmente el sistema nervioso."
              colorClass="bg-blue-500/20 text-blue-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">2. Verdadero Ruido Blanco</h3>
            <p className="mb-4 leading-8 text-white/70">
              Si necesitas bloquear agresivamente ruidos fuertes e impredecibles (como ronquidos), este es el rey indiscutible.
            </p>
            <AudioPlayer 
              src="/white_noise.m4a" 
              title="Ruido Blanco" 
              description="El muro acústico definitivo."
              colorClass="bg-slate-500/20 text-slate-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">3. Ruido Marrón</h3>
            <p className="mb-4 leading-8 text-white/70">
              El ruido marrón elimina el siseo agudo del ruido blanco, enfocándose en un retumbo profundo (similar a la cabina de un avión). Muy recomendado para calmar una mente hiperactiva.
            </p>
            <AudioPlayer 
              src="/brown_noise.m4a" 
              title="Ruido Marrón" 
              description="Perfecto para relajar pensamientos acelerados."
              colorClass="bg-orange-500/20 text-orange-300"
            />
          </div>

        </div>
      </ArticleSection>

      <ArticleSection id="how-to-mix" title="Cómo mezclar sonidos para descansar mejor">
        <p className="mt-4 leading-8 text-white/70">
          Usando una aplicación gratuita como <strong>Calma</strong>, puedes crear tu propio paisaje sonoro. Comienza con una base de <strong>ruido marrón</strong>, añade una capa gruesa de <strong>lluvia</strong> y un poco de <strong>truenos lejanos</strong>.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
            aria-label="Descargar App Calma Gratis"
          >
            <Image
              src="/google-play-badge.png"
              alt="Disponible en Google Play"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Preguntas Frecuentes (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Qué sonido te hace dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Un sonido continuo y no amenazante, como el ruido rosa (lluvia) o el ruido marrón, ralentiza las ondas cerebrales y enmascara los ruidos repentinos.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Cuáles son los buenos sonidos para dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Lluvia constante, olas del mar, ruido blanco y ruido marrón. La clave es la consistencia que ayuda a relajar el sistema nervioso.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Qué ruidos te ayudan a dormir mejor?</h3>
            <p className="mt-2 leading-7 text-white/70">El ruido blanco es ideal para bloquear ruidos agresivos como el tráfico. Si tienes ansiedad, los ruidos más profundos como la lluvia son mejores.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Es malo dormir con sonidos toda la noche?</h3>
            <p className="mt-2 leading-7 text-white/70">No, dormir con un volumen bajo es perfectamente seguro y muy recomendado. También puedes usar un temporizador de apagado.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}