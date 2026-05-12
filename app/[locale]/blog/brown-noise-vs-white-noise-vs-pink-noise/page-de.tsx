import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Braunes vs Weißes vs Rosa Rauschen | Calma",
  description:
    "Entdecken Sie die Unterschiede zwischen braunem, weißem und rosa Rauschen. Finden Sie den besten Klang zum Schlafen.",
  keywords: [
    "braunes Rauschen vs weißes Rauschen",
    "pinkes Rauschen vs weißes Rauschen",
    "grünes Rauschen vs weißes Rauschen",
    "bestes Rauschen für Fokus",
    "Rauschen bei ADHS",
    "Farben des Rauschens erklärt",
    "Calma Blog",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Braunes vs Weißes vs Rosa Rauschen | Calma",
    description:
    "Entdecken Sie die Unterschiede zwischen braunem, weißem und rosa Rauschen. Finden Sie den besten Klang zum Schlafen.",
    url: "https://www.calmasounds.com/de/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braunes vs Weißes vs Rosa Rauschen | Calma",
    description:
    "Entdecken Sie die Unterschiede zwischen braunem, weißem und rosa Rauschen. Finden Sie den besten Klang zum Schlafen.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Braunes vs. Weißes vs. Pinkes vs. Grünes Rauschen",
  description:
    "Entdecken Sie die Unterschiede zwischen braunem, weißem und rosa Rauschen. Finden Sie den besten Klang zum Schlafen.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/de/blog/brown-noise-vs-white-noise-vs-pink-noise",
  datePublished: "2026-04-13",
  dateModified: "2026-04-21",
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/white-noise-app"
      topLinkLabel="Weißes Rauschen entdecken"
      title="Braunes vs. Weißes vs. Pinkes vs. Grünes Rauschen"
      intro="Nicht jedes 'weiße Rauschen' ist tatsächlich weiß. In der Audiowelt werden Klänge basierend auf ihrer Frequenzverteilung in 'Farben' unterteilt. Das Verständnis der Unterschiede kann dir helfen, den richtigen Hintergrund für besseren Schlaf, tieferen Fokus oder die Bewältigung von ADHS-Symptomen zu finden."
      ctaHref="/white-noise-app"
      ctaLabel="Weißes Rauschen App entdecken"
      secondaryCtaHref="/sound-mixer-app"
      secondaryCtaLabel="Sound Mixer App entdecken"
      tableOfContents={[
        { id: "video", title: "Braunes vs Weißes vs Rosa Rauschen | Calma" },
        { id: "white-noise", title: "Braunes vs Weißes vs Rosa Rauschen | Calma" },
        { id: "pink-noise", title: "Braunes vs Weißes vs Rosa Rauschen | Calma" },
        { id: "brown-noise", title: "Braunes vs Weißes vs Rosa Rauschen | Calma" },
        { id: "green-noise", title: "Braunes vs Weißes vs Rosa Rauschen | Calma" },
        { id: "summary", title: "Braunes vs Weißes vs Rosa Rauschen | Calma" },
      ]}
      relatedArticles={[
        {
          href: "/blog/white-noise-for-sleep",
          title: "Braunes vs Weißes vs Rosa Rauschen | Calma",
          description:
    "Entdecken Sie die Unterschiede zwischen braunem, weißem und rosa Rauschen. Finden Sie den besten Klang zum Schlafen.",
        },
        {
          href: "/blog/best-sounds-for-studying",
          title: "Braunes vs Weißes vs Rosa Rauschen | Calma",
          description:
    "Entdecken Sie die Unterschiede zwischen braunem, weißem und rosa Rauschen. Finden Sie den besten Klang zum Schlafen.",
        },
      ]}
    >
      <ArticleSection id="video" title="Video: Die Farben des Rauschens erklärt">
        <p className="mb-6">
          Schau dir unseren kurzen YouTube-Guide an, um den Unterschied direkt zu hören und deinen Favoriten zu finden.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/4SXR34eNAmY"
                    title="Die Farben des Rauschens: Weiß, Pink, Braun und Grün"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Weißes Rauschen: Der Allrounder">
        <p>
          Weißes Rauschen enthält alle hörbaren Frequenzen in gleicher Intensität. Es klingt wie ein statisches Rauschen oder ein konstantes 'Zischen'. Da es alle Frequenzen abdeckt, eignet es sich hervorragend, um plötzliche Geräusche wie zuschlagende Türen oder Autohupen zu maskieren.
        </p>
        <p className="mt-4">
          <strong>Bestens geeignet für:</strong> Maskierung von Umgebungsgeräuschen, Einschlafhilfe für Babys und neutraler Hintergrund in belebten Büros.
        </p>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="Pinkes Rauschen: Die natürliche Wahl">
        <p>
          Pinkes Rauschen ähnelt dem weißen Rauschen, hat aber mehr Energie in den tieferen Frequenzen. Dies erzeugt einen weicheren, ausgewogeneren Klang, den viele als natürlicher empfinden. Denk an das Geräusch von stetigem Regen oder Wind in den Blättern.
        </p>
        <p className="mt-4">
          <strong>Bestens geeignet für:</strong> Verbesserung der Schlafqualität, Entspannung ohne das 'statische' Gefühl und langfristigen Fokus.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Braunes Rauschen: Die tiefe Ruhe">
        <p>
          Braunes Rauschen (auch rotes Rauschen genannt) geht noch weiter als pinkes Rauschen und konzentriert sich stark auf tiefe Bässe. Es klingt wie ein tiefes Grollen, ein ferner Wasserfall oder das Brummen in einer Flugzeugkabine.
        </p>
        <p className="mt-4">
          In letzter Zeit hat braunes Rauschen in der ADHS-Community stark an Popularität gewonnen. Viele finden, dass die tiefe, immersive Qualität hilft, einen unruhigen Geist effektiver zu beruhigen als höherfrequente Klänge.
        </p>
        <p className="mt-4">
          <strong>Bestens geeignet für:</strong> ADHS-Management, Deep Focus, intensive Entspannung und für alle, die hohe Frequenzen als störend empfinden.
        </p>
      </ArticleSection>

      <ArticleSection id="green-noise" title="Grünes Rauschen: Die Harmonie der Natur">
        <p>
          Grünes Rauschen wird oft als der Hintergrundklang der Natur beschrieben. Es konzentriert sich auf die mittleren Frequenzen, ähnlich dem, was man in einem Wald oder an einem ruhigen Bach hört. Es ist weniger scharf als weißes Rauschen und weniger basslastig als braunes Rauschen.
        </p>
        <p className="mt-4">
          <strong>Bestens geeignet für:</strong> Friedliche Atmosphäre, Entspannung ohne schweren Bass und für Liebhaber natürlicher Klanglandschaften.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="Was solltest du wählen?">
        <p>
          Die 'beste' Farbe ist reine Geschmackssache. Wir empfehlen mit weißem Rauschen zu beginnen, wenn du laute Geräusche ausblenden musst, aber auf pink oder braun zu wechseln, wenn du das statische Zischen als zu scharf empfindest.
        </p>
        <p className="mt-4">
          Mit <strong>Calma</strong> musst du dich nicht für eines entscheiden. Du kannst verschiedene Rauschfarben mischen und mit Naturtexturen oder atmosphärischen Klängen ergänzen, um einen wirklich persönlichen Mix zu erstellen.
        </p>
      </ArticleSection>
    </ArticlePage>
  );
}
