import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

export const metadata: Metadata = {
  title: "Ruido marrón vs. blanco vs. rosa | Blog de Calma",
  description:
    "Explora las diferencias entre el ruido blanco, rosa y marrón. Descubre cuál es el mejor para tu sueño, concentración o manejo del TDAH.",
  keywords: [
    "ruido marron vs ruido blanco",
    "ruido rosa vs ruido blanco",
    "ruido verde vs ruido blanco",
    "mejor ruido para concentrarse",
    "ruido para TDAH",
    "colores del ruido explicados",
    "blog de calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Ruido marrón vs. blanco vs. rosa | Blog de Calma",
    description:
      "Explora las diferencias entre el ruido blanco, rosa y marrón. Descubre cuál es el mejor para tu sueño, concentración o manejo del TDAH.",
    url: "https://www.calmasounds.com/es/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "es_ES",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruido marrón vs. blanco vs. rosa | Blog de Calma",
    description:
      "Explora las diferencias entre el ruido blanco, rosa y marrón.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ruido marrón vs Ruido blanco vs Ruido rosa vs Ruido verde",
  description:
    "Una guía completa para comprender los colores del ruido, incluido el ruido verde, y sus beneficios únicos para el sueño, la concentración y la relajación.",
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/es/blog/brown-noise-vs-white-noise-vs-pink-noise",
  datePublished: "2026-04-13",
  dateModified: new Date().toISOString().split('T')[0],
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/es/white-noise-app"
      topLinkLabel="Explorar página de ruido blanco"
      title="Ruido marrón vs. Ruido blanco vs. Ruido rosa vs. Ruido verde"
      intro="No todo el 'ruido blanco' es realmente blanco. En el mundo del audio, los sonidos se categorizan por 'colores' según su distribución de frecuencias. Comprender la diferencia entre el ruido blanco, rosa, marrón y verde puede ayudarte a elegir el fondo adecuado para un mejor sueño, una concentración más profunda o para controlar los síntomas del TDAH."
      ctaHref="/es/white-noise-app"
      ctaLabel="Explorar app de ruido blanco"
      secondaryCtaHref="/es/sound-mixer-app"
      secondaryCtaLabel="Explorar app de mezcla de sonidos"
      tableOfContents={[
        { id: "video", title: "Video: Colores del ruido explicados" },
        { id: "white-noise", title: "Ruido Blanco: El todoterreno" },
        { id: "pink-noise", title: "Ruido Rosa: La opción natural" },
        { id: "brown-noise", title: "Ruido Marrón: La calma profunda" },
        { id: "green-noise", title: "Ruido Verde: La armonía natural" },
        { id: "adhd-noise", title: "¿Qué ruido de color es mejor para el TDAH?" },
        { id: "summary", title: "¿Cuál deberías elegir?" },
        { id: "comparison-table", title: "Tabla de comparación: Colores del ruido" },
        { id: "faq", title: "Preguntas Frecuentes" },
      ]}
      relatedArticles={[
        {
          href: "/es/blog/white-noise-for-sleep",
          title: "Ruido blanco para dormir",
          description:
            "Aprende cómo el ruido blanco puede ayudarte a conciliar el sueño más rápido y a mantenerte dormido más tiempo.",
        },
        {
          href: "/es/blog/best-sounds-for-studying",
          title: "Mejores sonidos para estudiar",
          description:
            "Descubre qué sonidos de fondo son más eficaces para la concentración.",
        },
      ]}
    >
      <ArticleSection id="video" title="Video: Colores del ruido explicados">
        <p className="mb-6">
          Mira nuestra guía rápida en YouTube Shorts para escuchar la diferencia y ver qué color podría ser tu favorito.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/MlJNs1K66xc"
                    title="Los colores del ruido: Blanco, Rosa, Marrón y Verde"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Ruido Blanco: El todoterreno">
        <p className="mt-4 leading-8 text-white/70">
          El ruido blanco contiene todas las frecuencias audibles reproducidas a la misma intensidad. Suena como una estática o un sonido de siseo. Debido a que cubre todas las frecuencias, es excepcionalmente bueno para enmascarar sonidos repentinos y molestos, como portazos o bocinazos de coches.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Muestra de Ruido Blanco" 
          description="Estática constante que enmascara todas las frecuencias por igual."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>Ideal para:</strong> Enmascarar el ruido ambiental, ayudar a dormir a los bebés y crear un fondo neutral en oficinas concurridas.
        </p>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="Ruido Rosa: La opción natural">
        <p className="mt-4 leading-8 text-white/70">
          El ruido rosa es similar al ruido blanco pero tiene más energía en las frecuencias más bajas. Esto crea un sonido más suave y equilibrado que muchas personas encuentran más natural que la aspereza del ruido blanco puro. Piensa en él como el sonido de una lluvia constante o el viento susurrando entre las hojas.
        </p>
        <AudioPlayer 
          src="/pink_noise.m4a" 
          title="Muestra de Ruido Rosa" 
          description="Un sonido más suave y equilibrado que se asemeja a una lluvia constante."
          colorClass="bg-pink-500/20 text-pink-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>Ideal para:</strong> Mejorar la calidad del sueño, relajarse sin la sensación 'estática' del ruido blanco y para la concentración a largo plazo.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Ruido Marrón: La calma profunda">
        <p className="mt-4 leading-8 text-white/70">
          El ruido marrón (también llamado ruido rojo) va aún más allá que el ruido rosa, enfocándose intensamente en los bajos de baja frecuencia. Suena como un estruendo profundo, una cascada distante o el zumbido bajo de la cabina de un avión.
        </p>
        <AudioPlayer 
          src="/brown_noise.m4a" 
          title="Muestra de Ruido Marrón" 
          description="Frecuencias bajas profundas y retumbantes perfectas para un enfoque profundo."
          colorClass="bg-orange-500/20 text-orange-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          Recientemente, el ruido marrón ha ganado una gran popularidad en la comunidad de TDAH. Muchas personas encuentran que su calidad profunda e inmersiva ayuda a calmar una mente activa de manera más efectiva que los sonidos de frecuencia más alta.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>Ideal para:</strong> Control del TDAH, enfoque profundo, relajación intensa y para quienes encuentran irritantes las frecuencias más altas.
        </p>
      </ArticleSection>

      <ArticleSection id="green-noise" title="Ruido Verde: La armonía natural">
        <p className="mt-4 leading-8 text-white/70">
          El ruido verde se describe a menudo como el sonido de fondo de la naturaleza. Se centra en las frecuencias medias, de manera similar a lo que podrías escuchar en un bosque o junto a un arroyo tranquilo. Es menos áspero que el ruido blanco y tiene menos graves que el ruido marrón, encontrando un término medio cómodo.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>Ideal para:</strong> Crear una atmósfera pacífica, relajarse sin graves pesados y para los amantes de los paisajes sonoros con sensación natural.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd-noise" title="¿Qué ruido de color es mejor para el TDAH?">
        <p className="mt-4 leading-8 text-white/70">
          Una pregunta común en las comunidades neurodivergentes es: <strong>¿Qué color de ruido es mejor para el TDAH?</strong> Aunque el cerebro de cada persona es diferente, el <strong>ruido marrón</strong> suele ser el favorito indiscutible.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Debido a que el ruido marrón es más profundo y carece de la estática de alta frecuencia del ruido blanco, muchas personas con TDAH informan que crea una «manta pesada» de sonido que calma naturalmente los pensamientos acelerados. Proporciona la estimulación sensorial justa para satisfacer la necesidad de estímulo del cerebro, permitiendo que la corteza prefrontal se concentre en la tarea en cuestión sin distraerse por interrupciones internas o externas.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Si estás comparando el <em>ruido marrón frente al ruido blanco para el TDAH</em>, comienza con el ruido marrón para estudiar o trabajar profundamente, y observa si te ayuda a entrar en un estado de flujo con mayor facilidad.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="¿Cuál deberías elegir?">
        <p className="mt-4 leading-8 text-white/70">
          El 'mejor' color es completamente personal. Recomendamos comenzar con el ruido blanco si necesitas bloquear ruidos fuertes específicos, pero cambiar al rosa o al marrón si encuentras que la estática de tono más agudo del ruido blanco es demasiado molesta.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Con <strong>Calma</strong>, no tienes que elegir solo uno. Puedes mezclar diferentes capas de ruido, agregando texturas de la naturaleza o sonidos ambientales atmósfericos para crear un paisaje sonoro verdaderamente personalizado que funcione para tu cerebro único.
        </p>
      </ArticleSection>
    
      <ArticleSection id="comparison-table" title="Tabla de comparación: Colores del ruido">
        <div className="overflow-x-auto mt-6 rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Color de Ruido</th>
                <th className="px-4 py-3 font-semibold">Suena como</th>
                <th className="px-4 py-3 font-semibold">Ideal para</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruido Blanco</td>
                <td className="px-4 py-3">Estática, siseo de TV, ventilador</td>
                <td className="px-4 py-3">Enmascarar ruidos repentinos fuertes, fondo de oficina, sueño de bebés</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruido Rosa</td>
                <td className="px-4 py-3">Lluvia constante, susurro de hojas</td>
                <td className="px-4 py-3">Sueño profundo, enfoque estable, atmósfera relajante</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruido Marrón</td>
                <td className="px-4 py-3">Trueno distante, rugido bajo, lluvia fuerte</td>
                <td className="px-4 py-3">Enfoque para TDAH, relajación profunda, lectura, estudio</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Ruido Verde</td>
                <td className="px-4 py-3">Ambiente forestal, arroyo suave</td>
                <td className="px-4 py-3">Alivio de ansiedad, meditación, amantes de la naturaleza</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Preguntas Frecuentes">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Ayuda el ruido blanco a dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Sí, el ruido blanco ayuda a dormir al enmascarar los sonidos de fondo molestos (como el tráfico o los vecinos) y al proporcionar un entorno acústico constante que le indica al cerebro que se relaje.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Cuál es la diferencia entre el ruido blanco y el ruido rosa?</h3>
            <p className="mt-2 leading-7 text-white/70">El ruido blanco contiene todas las frecuencias con la misma intensidad, sonando como una estática aguda. El ruido rosa enfatiza las frecuencias más bajas, lo que hace que suene más profundo y suave, como una lluvia constante.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Ruido marrón vs ruido blanco para dormir: ¿cuál es mejor?</h3>
            <p className="mt-2 leading-7 text-white/70">Para muchos, el ruido marrón es mejor para dormir porque su estruendo profundo y de baja frecuencia es más relajante y menos áspero que la estática de tono alto del ruido blanco.</p>
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
                "name": "¿Ayuda el ruido blanco a dormir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, el ruido blanco ayuda a dormir al enmascarar los sonidos de fondo molestos (como el tráfico o los vecinos) y al proporcionar un entorno acústico constante que le indica al cerebro que se relaje."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la diferencia entre el ruido blanco y el ruido rosa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El ruido blanco contiene todas las frecuencias con la misma intensidad, sonando como una estática aguda. El ruido rosa enfatiza las frecuencias más bajas, lo que hace que suene más profundo y suave, como una lluvia constante."
                }
              },
              {
                "@type": "Question",
                "name": "Ruido marrón vs ruido blanco para dormir: ¿cuál es mejor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para muchos, el ruido marrón es mejor para dormir porque su estruendo profundo y de baja frecuencia es más relajante y menos áspero que la estática de tono alto del ruido blanco."
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
          <p className="text-sm text-white/60">Defensores de la higiene del sueño y entusiastas del diseño de sonido dedicados a ayudarte a construir rutinas más tranquilas.</p>
        </div>
      </div>
    </ArticlePage>
  );
}
