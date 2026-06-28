import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ruido marrón vs ruido blanco: ¿Cuál es mejor para dormir? | Calma",
  description:
    "¿Es mejor el ruido marrón que el blanco para dormir? ¿Por qué ayuda con el TDAH? Descubra las diferencias científicas entre el ruido rosa, marrón y blanco.",
  keywords: [
    "ruido marron vs ruido blanco",
    "ruido rosa vs ruido blanco",
    "es mejor el ruido marron para dormir",
    "por que el ruido marron ayuda con el tdah",
    "diferencia entre ruido rosa marron y blanco",
    "colores del ruido",
    "calma app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/es/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Ruido marrón vs ruido blanco: ¿Cuál es mejor?",
    description:
      "Descubra las diferencias científicas entre el ruido rosa, marrón y blanco, y cuál es mejor para dormir.",
    url: "https://www.calmasounds.com/es/blog/brown-noise-vs-white-noise-vs-pink-noise",
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
      "name": "¿Es mejor el ruido marrón que el ruido blanco para dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para muchas personas, sí. El ruido marrón es mejor si el siseo agudo del ruido blanco le resulta irritante. El ruido marrón elimina esas altas frecuencias y suena como una cascada profunda, lo que suele ser más relajante."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué el ruido marrón ayuda con el TDAH?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ayuda a las personas con TDAH porque su retumbo profundo proporciona una estimulación constante. Esto satisface la necesidad de estimulación del cerebro, evitando que busque distracciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre el ruido rosa, marrón y blanco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El ruido blanco tiene igual energía en todas las frecuencias. El ruido rosa reduce las altas frecuencias (como la lluvia constante). El ruido marrón las reduce aún más, creando un retumbo muy profundo (como un trueno lejano)."
      }
    }
  ]
};

export default function NoiseColorsPageES() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/es/white-noise-app"
      topLinkLabel="Explorar app de ruido blanco"
      title="Ruido marrón vs ruido blanco: ¿Cuál es mejor para dormir y TDAH?"
      intro="No todo el 'ruido blanco' es blanco en realidad. En el mundo del audio, los sonidos se categorizan por 'colores' según su frecuencia. Entender la diferencia entre el ruido blanco, rosa, marrón y verde es el secreto para dormir mejor o mejorar la concentración."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Descargar App Calma Gratis"
      secondaryCtaHref="/es/sound-mixer-app"
      secondaryCtaLabel="Explorar app mezcladora"
      tableOfContents={[
        { id: "video", title: "Video: Colores del ruido" },
        { id: "difference", title: "¿Cuál es la diferencia?" },
        { id: "is-brown-better", title: "¿Es el ruido marrón mejor para dormir?" },
        { id: "adhd", title: "¿Por qué el ruido marrón ayuda con el TDAH?" },
        { id: "comparison-table", title: "Tabla comparativa" },
        { id: "faq", title: "Preguntas Frecuentes" },
      ]}
      relatedArticles={[
        {
          href: "/es/blog/white-noise-for-sleep",
          title: "Ruido Blanco para Dormir",
          description: "Aprenda cómo el ruido blanco puede ayudarle a conciliar el sueño más rápido.",
        },
      ]}
    >
      <ArticleSection id="video" title="Ver: Los colores del ruido explicados">
        <div className="flex justify-center mt-6">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <YouTubeEmbed
                    videoId="MlJNs1K66xc"
                    title="The Colors of Noise"
                />
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="difference" title="¿Cuál es la diferencia entre el ruido rosa, marrón y blanco?">
        <div className="mt-6 space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1. Verdadero ruido blanco</h3>
            <p className="mb-4 leading-8 text-white/70">
              Contiene todas las frecuencias audibles reproducidas a la misma intensidad. Suena como estática de televisión y enmascara ruidos agudos.
            </p>
            <AudioPlayer 
              src="/white_noise.m4a" 
              title="Ruido Blanco" 
              description="Estática consistente."
              colorClass="bg-slate-500/20 text-slate-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">2. Ruido rosa (Sonidos naturales)</h3>
            <p className="mb-4 leading-8 text-white/70">
              El ruido rosa reduce el volumen de las frecuencias altas. Imita entornos naturales, como la lluvia constante.
            </p>
            <AudioPlayer 
              src="/pink_noise.m4a" 
              title="Ruido Rosa" 
              description="Sonido equilibrado, similar a la lluvia fuerte."
              colorClass="bg-pink-500/20 text-pink-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">3. Ruido marrón (Graves profundos)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Elimina casi todos los sonidos de alta frecuencia, dejando un retumbo poderoso (similar a la cabina de un avión).
            </p>
            <AudioPlayer 
              src="/brown_noise.m4a" 
              title="Ruido Marrón" 
              description="Frecuencias retumbantes y profundas."
              colorClass="bg-orange-500/20 text-orange-300"
            />
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="is-brown-better" title="¿Es mejor el ruido marrón que el ruido blanco para dormir?">
        <p className="mt-4 leading-8 text-white/70">
          Para la gran mayoría, <strong>sí</strong>. El ruido marrón elimina las frecuencias agudas del ruido blanco. Esta frecuencia profunda indica seguridad al sistema nervioso de forma natural.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd" title="¿Por qué el ruido marrón ayuda con el TDAH?">
        <p className="mt-4 leading-8 text-white/70">
          El ruido marrón actúa como un \"masaje de audio\" continuo para el cerebro. Al proporcionar un flujo constante de estimulación auditiva, satisface el deseo de información del cerebro, permitiendo concentrarse.
        </p>
      </ArticleSection>

      <ArticleSection id="comparison-table" title="Tabla comparativa">
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-slate-800/50 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Color</th>
                <th className="px-6 py-4 font-semibold">Suena como</th>
                <th className="px-6 py-4 font-semibold">Ideal para</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-300">Blanco</td>
                <td className="px-6 py-4">Ventilador</td>
                <td className="px-6 py-4">Bloquear ronquidos.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-pink-300">Rosa</td>
                <td className="px-6 py-4">Lluvia</td>
                <td className="px-6 py-4">Mejorar el sueño.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-orange-300">Marrón</td>
                <td className="px-6 py-4">Avión, trueno</td>
                <td className="px-6 py-4">Concentración (TDAH).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
          >
            <Image
              src="/google-play-badge.png"
              alt="Descargar App Calma Gratis"
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
            <h3 className="font-semibold text-lg text-emerald-400">¿Es mejor el ruido marrón que el ruido blanco para dormir?</h3>
            <p className="mt-2 leading-7 text-white/70">Sí. El ruido marrón elimina las altas frecuencias y suena como una cascada profunda, lo que suele ser más relajante.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Por qué el ruido marrón ayuda con el TDAH?</h3>
            <p className="mt-2 leading-7 text-white/70">Su retumbo profundo proporciona estimulación constante, evitando distracciones.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">¿Cuál es la diferencia entre el ruido rosa, marrón y blanco?</h3>
            <p className="mt-2 leading-7 text-white/70">El ruido blanco tiene igual energía en todas las frecuencias. El rosa reduce las frecuencias altas, y el marrón las reduce aún más.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
