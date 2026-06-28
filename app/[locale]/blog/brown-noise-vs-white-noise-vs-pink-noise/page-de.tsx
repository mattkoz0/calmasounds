import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Braunes Rauschen vs Weißes Rauschen: Was ist besser? | Calma",
  description:
    "Ist braunes Rauschen besser als weißes Rauschen zum Schlafen? Warum hilft braunes Rauschen bei ADHS? Entdecken Sie die wissenschaftlichen Unterschiede.",
  keywords: [
    "braunes rauschen vs weißes rauschen",
    "rosa rauschen vs weißes rauschen",
    "ist braunes rauschen besser zum schlafen",
    "warum hilft braunes rauschen bei adhs",
    "farben des rauschens",
    "calma app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Braunes Rauschen vs Weißes Rauschen: Was ist besser?",
    description:
      "Entdecken Sie die wissenschaftlichen Unterschiede zwischen rosa, braunem und weißem Rauschen.",
    url: "https://www.calmasounds.com/de/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "de_DE",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist braunes Rauschen besser als weißes Rauschen zum Schlafen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für viele Menschen, ja. Braunes Rauschen ist besser als weißes Rauschen zum Schlafen, wenn Sie das hohe Zischen des weißen Rauschens irritierend finden. Braunes Rauschen klingt wie ein tiefer Wasserfall und beruhigt das Nervensystem."
      }
    },
    {
      "@type": "Question",
      "name": "Warum hilft braunes Rauschen bei ADHS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Braunes Rauschen hilft Menschen mit ADHS, da es das Gehirn durch tiefes, kontinuierliches Grollen stimuliert. Dies befriedigt das Bedürfnis des Gehirns nach Stimulation und verhindert Ablenkungen."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen rosa, braunem und weißem Rauschen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weißes Rauschen hat in allen Frequenzen die gleiche Energie. Rosa Rauschen dämpft die hohen Töne (klingt wie Regen). Braunes Rauschen reduziert die hohen Frequenzen noch weiter und erzeugt ein sehr tiefes Grollen (wie Gewitter)."
      }
    }
  ]
};

export default function NoiseColorsPageDE() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/de/white-noise-app"
      topLinkLabel="White Noise App entdecken"
      title="Braunes Rauschen vs Weißes Rauschen: Was ist besser für Schlaf & ADHS?"
      intro="Nicht jedes 'weiße Rauschen' ist tatsächlich weiß. In der Audiowelt werden Klänge anhand ihrer Frequenzverteilung in 'Farben' eingeteilt. Der Unterschied zwischen weißem, rosa, braunem und grünem Rauschen ist das Geheimnis für besseren Schlaf oder Konzentration."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Calma App kostenlos herunterladen"
      secondaryCtaHref="/de/sound-mixer-app"
      secondaryCtaLabel="Sound Mixer entdecken"
      tableOfContents={[
        { id: "video", title: "Video: Rauschen erklärt" },
        { id: "difference", title: "Was ist der Unterschied?" },
        { id: "is-brown-better", title: "Ist braunes Rauschen besser für den Schlaf?" },
        { id: "adhd", title: "Warum hilft braunes Rauschen bei ADHS?" },
        { id: "comparison-table", title: "Vergleichstabelle" },
        { id: "faq", title: "Häufig gestellte Fragen" },
      ]}
      relatedArticles={[
        {
          href: "/de/blog/white-noise-for-sleep",
          title: "Weißes Rauschen für den Schlaf",
          description: "Wie weißes Rauschen Ihnen hilft, schneller einzuschlafen.",
        },
      ]}
    >
      <ArticleSection id="video" title="Ansehen: Die Farben des Rauschens erklärt">
        <div className="flex justify-center mt-6">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <YouTubeEmbed
                    videoId="MlJNs1K66xc"
                    title="The Colors of Noise"
                />
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="difference" title="Was ist der Unterschied zwischen rosa, braunem und weißem Rauschen?">
        <div className="mt-6 space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1. Echtes weißes Rauschen</h3>
            <p className="mb-4 leading-8 text-white/70">
              Weißes Rauschen enthält alle hörbaren Frequenzen in gleicher Intensität. Es maskiert plötzliche, laute Geräusche hervorragend.
            </p>
            <AudioPlayer 
              src="/white_noise.m4a" 
              title="Weißes Rauschen" 
              description="Konstantes Rauschen."
              colorClass="bg-slate-500/20 text-slate-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">2. Rosa Rauschen (Naturklänge)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Rosa Rauschen dämpft hohe Frequenzen. Es imitiert Naturklänge wie gleichmäßigen Regen.
            </p>
            <AudioPlayer 
              src="/pink_noise.m4a" 
              title="Rosa Rauschen" 
              description="Ausgewogener Klang, ähnlich wie starker Regen."
              colorClass="bg-pink-500/20 text-pink-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">3. Braunes Rauschen (Tiefer Bass)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Braunes Rauschen entfernt fast alle hochfrequenten Töne. Übrig bleibt ein tiefes Grollen (Flugzeugkabine, Wasserfall).
            </p>
            <AudioPlayer 
              src="/brown_noise.m4a" 
              title="Braunes Rauschen" 
              description="Tiefe Frequenzen, perfekt für Konzentration."
              colorClass="bg-orange-500/20 text-orange-300"
            />
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="is-brown-better" title="Ist braunes Rauschen besser als weißes Rauschen zum Schlafen?">
        <p className="mt-4 leading-8 text-white/70">
          Für die überwiegende Mehrheit der Menschen: <strong>Ja</strong>. Während weißes Rauschen besser Lärm blockiert, empfinden viele das Zischen als störend. Braunes Rauschen signalisiert dem Nervensystem Sicherheit und hilft bei der Entspannung.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd" title="Warum hilft braunes Rauschen bei ADHS?">
        <p className="mt-4 leading-8 text-white/70">
          Bei ADHS sucht das Gehirn ständig nach Dopamin und Stimulation. Braunes Rauschen fungiert als kontinuierliche Audiomassage, die das Bedürfnis des Gehirns nach Stimulation befriedigt, sodass Sie sich intensiv auf eine Aufgabe konzentrieren können.
        </p>
      </ArticleSection>

      <ArticleSection id="comparison-table" title="Vergleichstabelle">
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-slate-800/50 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Farbe</th>
                <th className="px-6 py-4 font-semibold">Klingt wie</th>
                <th className="px-6 py-4 font-semibold">Am besten für</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-300">Weiß</td>
                <td className="px-6 py-4">Fernseher, Ventilator</td>
                <td className="px-6 py-4">Maskierung lauter Geräusche (Schnarchen).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-pink-300">Rosa</td>
                <td className="px-6 py-4">Regen, Blätter</td>
                <td className="px-6 py-4">Tiefschlaf, Entspannung.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-orange-300">Braun</td>
                <td className="px-6 py-4">Flugzeug, Donner</td>
                <td className="px-6 py-4">ADHS-Fokus, Beruhigung rasender Gedanken.</td>
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
              alt="Calma App herunterladen"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Häufig gestellte Fragen (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Ist braunes Rauschen besser als weißes Rauschen zum Schlafen?</h3>
            <p className="mt-2 leading-7 text-white/70">Für viele Menschen, ja. Es entfernt das hohe Zischen und klingt wie ein tiefer Wasserfall, was beruhigend wirkt.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Warum hilft braunes Rauschen bei ADHS?</h3>
            <p className="mt-2 leading-7 text-white/70">Es bietet kontinuierliche Stimulation und verhindert so, dass das Gehirn nach Ablenkungen sucht.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Was ist der Unterschied zwischen rosa, braunem und weißem Rauschen?</h3>
            <p className="mt-2 leading-7 text-white/70">Weißes Rauschen hat in allen Frequenzen die gleiche Energie. Rosa dämpft die hohen Töne, braunes erzeugt ein sehr tiefes Grollen.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
