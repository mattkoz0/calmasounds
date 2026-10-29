import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Ruido Verde para Dormir: La Forma Natural de Descansar | Blog de Calma",
  description:
    "Descubre qué es el ruido verde, cómo se compara con el ruido blanco y marrón, y por qué sus frecuencias similares a las de la naturaleza podrían ser el ambiente ideal para tu descanso.",
  keywords: [
    "ruido verde",
    "ruido verde para dormir",
    "que es el ruido verde",
    "ruido verde vs ruido blanco",
    "frecuencias naturales",
    "sonidos calmantes",
    "blog de calma",
    "app para dormir mejor",
    "promover sueño profundo",
    "ayuda para conciliar el sueño",
    "sonidos relajantes noche",
    "mejorar calidad del sueño",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/green-noise-for-sleep",
  },
  openGraph: {
    title: "Ruido Verde para Dormir: La Forma Natural de Descansar | Blog de Calma",
    description:
      "Descubre qué es el ruido verde, cómo se compara con el ruido blanco y marrón, y por qué sus frecuencias similares a las de la naturaleza podrían ser el ambiente ideal para tu descanso.",
    url: "https://www.calmasounds.com/blog/green-noise-for-sleep",
    siteName: "Calma",
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruido Verde para Dormir: La Forma Natural de Descansar | Blog de Calma",
    description:
      "Descubre qué es el ruido verde, cómo se compara con el ruido blanco y marrón, y por qué sus frecuencias similares a las de la naturaleza podrían ser el ambiente ideal para tu descanso.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ruido Verde para Dormir: La Forma Natural de Descansar",
  description:
    "Descubre qué es el ruido verde, cómo se compara con el ruido blanco y marrón, y por qué sus frecuencias similares a las de la naturaleza podrían ser el ambiente ideal para tu descanso.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/blog/green-noise-for-sleep",
};


export default function GreenNoiseForSleepPage() {
  return (
    <ArticlePage
      slug="green-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/sleep-sounds-app"
      topLinkLabel="Explorar sonidos para dormir"
      title="Ruido Verde para Dormir: La Forma Natural de Descansar"
      intro="Si has buscado sonidos para dormir mejor, seguramente has oído hablar del ruido blanco. Pero hay un color de ruido menos conocido que está ganando popularidad poco a poco: el ruido verde. Situado en el centro del espectro audible, el ruido verde recuerda a los sonidos ambientales de la naturaleza, por lo que es una de las opciones más agradables para relajarse y descansar."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Descargar en Google Play"
      secondaryCtaHref="/relaxing-sounds"
      secondaryCtaLabel="Explorar sonidos relajantes"
      ctaTitle="Descubre el poder de los paisajes sonoros naturales"
      ctaText="Escucha ruido verde y entornos naturales seleccionados para crear tu ambiente de relajación ideal con la app Calma."
      relatedArticles={[
        {
          href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
          title: "Ruido marrón vs blanco vs rosa",
          description: "Las diferencias entre los colores de ruido para dormir y concentrarse.",
        },
        {
          href: "/blog/benefits-of-nature-sounds-for-relaxation",
          title: "Sonidos de la naturaleza para relajarse",
          description: "Cómo la lluvia y las olas actúan como un ruido de fondo natural.",
        },
        {
          href: "/blog/best-sounds-for-sleep",
          title: "Los mejores sonidos para dormir",
          description: "Una guía práctica sobre la lluvia, el ruido blanco y paisajes sonoros más suaves.",
        },
      ]}
    >
      <ArticleSection title="¿Qué es exactamente el ruido verde?">
        <p>
          Igual que la luz, el ruido tiene &quot;colores&quot; según cómo se reparte la energía entre las distintas frecuencias. El ruido blanco contiene todas las frecuencias con la misma intensidad (suena como la estática de un televisor o un ventilador), mientras que el ruido verde se concentra en la parte central del espectro.
        </p>
        <p>
          Elimina los siseos agudos más molestos y los retumbos graves más intensos. El resultado es un sonido muy parecido al murmullo ambiental de la naturaleza: una cascada escuchada a cierta distancia, una brisa marina constante o las hojas moviéndose con el viento.
        </p>
      </ArticleSection>

      <ArticleSection title="Por qué el ruido verde te ayuda a dormir">
        <p>
          El ruido verde resulta especialmente útil para dormir por dos motivos principales: la comodidad evolutiva y el enmascaramiento acústico.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
          <li>
            <strong>Comodidad evolutiva:</strong> El cerebro humano evolucionó en entornos naturales, no en dormitorios modernos y silenciosos. Las frecuencias del ruido verde transmiten &quot;seguridad&quot; al sistema nervioso, lo que puede ayudar a calmar una mente acelerada y a reducir el estrés antes de dormir.
          </li>
          <li>
            <strong>Enmascaramiento acústico:</strong> Como otros colores de ruido, el ruido verde eleva el nivel de sonido de fondo de la habitación. Esta capa continua de sonido disimula los crujidos de la casa, los ladridos o el tráfico que, de otro modo, podrían despertarte de golpe.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Cómo incluir el ruido verde en tu rutina">
        <p>
          Para incorporar el ruido verde a tu rutina nocturna, ponlo entre 20 y 30 minutos antes de cerrar los ojos. Empieza con un volumen moderado: lo bastante alto para tapar el ruido del entorno, pero no tanto como para que reclame tu atención.
        </p>
        <p>
          Con una app como Calma puedes combinar el ruido verde con lluvia constante o truenos lejanos y crear tu propio refugio natural. Recuerda que el objetivo es que no requiera esfuerzo: busca un sonido en el que tu cerebro pueda sumergirse sin analizarlo.
        </p>
      </ArticleSection>
    </ArticlePage>
  );
}
