import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";

export const metadata: Metadata = {
  title: "Técnicas de Respiración para Relajarse | Calma",
  description:
    "Aprende técnicas de respiración guiada para relajarte, dormir y concentrarte: 4-7-8, respiración en caja, resonancia 5-5, suspiro fisiológico y más.",
  keywords: [
    "técnicas de respiración guiada",
    "ejercicios de respiración para dormir",
    "ejercicios de respiración para la relajación",
    "respiración en caja",
    "respiración 4-7-8",
    "respiración de resonancia",
    "suspiro fisiológico",
    "blog de calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/guided-breathing-techniques",
  },
  openGraph: {
    title: "Técnicas de Respiración para Relajarse | Calma",
    description:
      "Aprende técnicas de respiración guiada para relajarte, dormir y concentrarte: 4-7-8, respiración en caja, resonancia 5-5, suspiro fisiológico y más.",
    url: "https://www.calmasounds.com/blog/guided-breathing-techniques",
    siteName: "Calma",
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Técnicas de Respiración para Relajarse | Calma",
    description:
      "Aprende técnicas de respiración guiada para relajarte, dormir y concentrarte: 4-7-8, respiración en caja, resonancia 5-5, suspiro fisiológico y más.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Técnicas de respiración guiada para la calma, el sueño y la concentración",
  description:
    "Aprende técnicas de respiración guiada para relajarte, dormir y concentrarte: 4-7-8, respiración en caja, resonancia 5-5, suspiro fisiológico y más.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage:
    "https://www.calmasounds.com/blog/guided-breathing-techniques",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
};

export default function GuidedBreathingTechniquesPage() {
  return (
    <ArticlePage
      slug="guided-breathing-techniques"
      jsonLd={articleJsonLd}
      title="Técnicas sencillas de respiración guiada para un alivio rápido"
      intro="La respiración guiada puede ser una de las formas más sencillas de cambiar tu estado mental y físico. Algunas técnicas son mejores para dormir, otras te ayudan a sentirte más equilibrado y otras sirven cuando necesitas un alivio rápido frente al estrés o la sobrecarga mental. La mejor depende de lo que tu cuerpo necesite en ese momento: frenar, estabilizarse, reiniciarse o despertar con suavidad."
      topLinkHref="/sleep-sounds-app"
      topLinkLabel="Explorar sonidos para dormir"
      ctaHref="/sleep-sounds-app"
      ctaLabel="Descubre Calma"
      secondaryCtaHref="/blog/how-to-build-a-bedtime-routine"
      secondaryCtaLabel="Leer la guía de rutina nocturna"
      ctaTitle="Explora la respiración guiada con Calma"
      ctaText="Calma te ayuda a explorar técnicas de respiración guiada para dormir, relajarte, encontrar equilibrio y empezar mañanas más tranquilas, como 4-7-8, respiración en caja, resonancia 5-5, suspiro fisiológico, Calma Profunda 7-11 y Brisa Matutina."
      relatedArticles={[
        {
          href: "/blog/how-to-build-a-bedtime-routine",
          title: "Cómo crear una rutina para dormir",
          description:
            "Formas sencillas de crear un ritmo nocturno más tranquilo que favorezca el sueño.",
        },
        {
          href: "/blog/binaural-beats-for-sleep-and-focus",
          title: "Ritmos binaurales para dormir y concentrarse",
          description:
            "Una introducción sencilla a técnicas de audio que pueden favorecer la calma y la concentración.",
        },
      ]}
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Por qué ayuda la respiración guiada</h2>
        <p className="mt-4 leading-8 text-white/70">
          La respiración está estrechamente ligada al sistema nervioso. Cuando
          respiras de forma más lenta, suave y consciente, el cuerpo suele
          responder reduciendo la tensión y el ruido mental. Por eso la
          respiración guiada se usa a menudo para relajarse, prepararse para
          dormir, regular las emociones y concentrarse.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          No es magia. Es más bien enviar a tu cuerpo una señal clara: estamos
          lo bastante seguros como para bajar el ritmo.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Relajación 4-7-8</h2>
        <p className="mt-4 leading-8 text-white/70">
          El patrón 4-7-8 se usa a menudo para bajar el ritmo antes de dormir o
          reducir la inquietud nocturna. Normalmente consiste en inhalar durante
          4 tiempos, retener durante 7 y exhalar durante 8. Como la exhalación
          es más larga, suele resultar calmante y ayuda a desacelerar.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          En Calma, esta técnica encaja en los momentos en que quieres que tu
          noche sea más silenciosa, más suave y con menos carga mental.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Equilibrio (respiración en caja)</h2>
        <p className="mt-4 leading-8 text-white/70">
          La respiración en caja usa fases iguales: inhalar, retener, exhalar y
          volver a retener durante el mismo número de tiempos. Así se crea un
          ritmo estable y simétrico. Suele usarse cuando quieres sentirte con
          los pies en la tierra, concentrado y emocionalmente equilibrado, más
          que adormecido.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Si tu mente está dispersa o sobreestimulada, la respiración en caja
          puede ayudarte a volver a poner orden en el día.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Resonancia 5-5</h2>
        <p className="mt-4 leading-8 text-white/70">
          La respiración de resonancia suele seguir un ritmo sencillo: inhalar
          durante 5 tiempos y exhalar durante 5. Es constante, suave y menos
          intensa que las técnicas más lentas pensadas para dormir. Por eso es
          una buena opción para la calma diaria, el equilibrio emocional y la
          concentración tranquila.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Es una buena elección cuando buscas un apoyo sostenible para el día a
          día, no un kit de emergencia para tu sistema nervioso.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Suspiro fisiológico</h2>
        <p className="mt-4 leading-8 text-white/70">
          El suspiro fisiológico es útil cuando necesitas un reinicio rápido.
          Normalmente consiste en una inhalación profunda, una segunda
          inhalación corta encima de la primera y, después, una exhalación
          larga. Este patrón puede resultar especialmente útil en momentos de
          estrés agudo, presión interna o sobrecarga emocional.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          No se trata de crear un ritual largo, sino de cortar la sensación de
          estar en tensión. Una especie de salida de emergencia para tus
          hombros.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Calma Profunda 7-11</h2>
        <p className="mt-4 leading-8 text-white/70">
          Calma Profunda 7-11 pone el acento en una exhalación todavía más
          larga: se suele inhalar durante 7 tiempos y exhalar durante 11. Esa
          liberación prolongada puede dar una fuerte sensación de asentamiento
          y suavidad. Suele encajar bien en noches tranquilas, rutinas para ir
          a dormir y momentos en que el cuerpo sigue tenso aunque la mente ya
          esté cansada.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Esta técnica sienta especialmente bien cuando no quieres estímulos ni
          estructura, solo un alivio más profundo.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Brisa Matutina</h2>
        <p className="mt-4 leading-8 text-white/70">
          No todos los ejercicios de respiración tienen que llevarte al sueño.
          Brisa Matutina es una forma más ligera y despejada de empezar el día.
          Puede ayudarte a sentirte más despierto, renovado y presente, sin el
          salto brusco de la somnolencia al estrés.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Funciona bien cuando quieres empezar con claridad y energía, pero sin
          perder la calma de la mañana.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">
          ¿Qué técnica de respiración deberías elegir?
        </h2>
        <ul className="mt-4 space-y-3 text-white/70">
          <li>• Elige 4-7-8 si quieres relajarte antes de dormir.</li>
          <li>
            • Elige la respiración en caja si buscas equilibrio y estabilidad mental.
          </li>
          <li>
            • Elige resonancia 5-5 para la calma diaria y una regulación suave.
          </li>
          <li>• Elige el suspiro fisiológico cuando necesites un reinicio rápido.</li>
          <li>
            • Elige 7-11 cuando quieras un alivio más profundo por la noche.
          </li>
          <li>
            • Elige Brisa Matutina cuando quieras empezar el día de forma más
            suave y despejada.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">
          La mejor técnica depende del momento
        </h2>
        <p className="mt-4 leading-8 text-white/70">
          No existe una única técnica de respiración guiada ideal para cualquier
          situación. Algunas te ayudan a frenar, otras a estabilizarte y otras
          sirven mejor para un reinicio rápido. El objetivo no es coleccionar
          técnicas como si fueran cromos, sino darte cuenta de qué tipo de
          apoyo necesita tu cuerpo hoy.
        </p>
      </section>
    </ArticlePage>
  );
}
