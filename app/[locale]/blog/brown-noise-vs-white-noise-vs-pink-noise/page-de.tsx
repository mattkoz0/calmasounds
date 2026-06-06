import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";

export const metadata: Metadata = {
  title: "Braunes vs. Weißes vs. Rosa Rauschen | Calma Blog",
  description:
    "Entdecken Sie die Unterschiede zwischen weißem, rosa und braunem Rauschen. Finden Sie heraus, welches Rauschen am besten für Schlaf, Fokus oder ADHS geeignet ist.",
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
    title: "Braunes vs. Weißes vs. Rosa Rauschen | Calma Blog",
    description:
      "Entdecken Sie die Unterschiede zwischen weißem, rosa und braunem Rauschen. Finden Sie heraus, welches Rauschen am besten für Schlaf, Fokus oder ADHS geeignet ist.",
    url: "https://www.calmasounds.com/de/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braunes vs. Weißes vs. Rosa Rauschen | Calma Blog",
    description:
      "Entdecken Sie die Unterschiede zwischen weißem, rosa und braunem Rauschen.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Braunes vs. Weißes vs. Rosa Rauschen vs. Grünes Rauschen",
  description:
    "Ein umfassender Leitfaden zum Verständnis der Farben des Rauschens, einschließlich grünem Rauschen, und ihrer einzigartigen Vorteile für Schlaf, Fokus und Entspannung.",
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/de/blog/brown-noise-vs-white-noise-vs-pink-noise",
  datePublished: "2026-04-13",
  dateModified: new Date().toISOString().split('T')[0],
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/de/white-noise-app"
      topLinkLabel="Weißes Rauschen entdecken"
      title="Braunes vs. Weißes vs. Rosa Rauschen vs. Grünes Rauschen"
      intro="Nicht jedes 'weiße Rauschen' ist tatsächlich weiß. In der Audiowelt werden Klänge basierend auf ihrer Frequenzverteilung in 'Farben' unterteilt. Das Verständnis der Unterschiede zwischen weißem, rosa, braunem und grünem Rauschen kann dir helfen, den richtigen Hintergrund für besseren Schlaf, tieferen Fokus oder die Bewältigung von ADHS-Symptomen zu finden."
      ctaHref="/de/white-noise-app"
      ctaLabel="Weißes Rauschen App entdecken"
      secondaryCtaHref="/de/sound-mixer-app"
      secondaryCtaLabel="Sound Mixer App entdecken"
      tableOfContents={[
        { id: "video", title: "Video: Die Farben des Rauschens erklärt" },
        { id: "white-noise", title: "Weißes Rauschen: Der Allrounder" },
        { id: "pink-noise", title: "Pinkes Rauschen: Die natürliche Wahl" },
        { id: "brown-noise", title: "Braunes Rauschen: Die tiefe Ruhe" },
        { id: "green-noise", title: "Grünes Rauschen: Die Harmonie der Natur" },
        { id: "adhd-noise", title: "Welches Rauschen ist am besten bei ADHS?" },
        { id: "summary", title: "Was solltest du wählen?" },
        { id: "comparison-table", title: "Vergleichstabelle: Farben des Rauschens" },
        { id: "faq", title: "Häufig gestellte Fragen" },
      ]}
      relatedArticles={[
        {
          href: "/de/blog/white-noise-for-sleep",
          title: "Weißes Rauschen zum Schlafen",
          description:
            "Erfahre, wie weißes Rauschen Ablenkungen blockiert, um dir zu einem besseren Schlaf zu verhelfen.",
        },
        {
          href: "/de/blog/best-sounds-for-studying",
          title: "Beste Sounds zum Lernen",
          description:
            "Entdecke, welche Hintergrundgeräusche für die Konzentration am effektivsten sind.",
        },
      ]}
    >
      <ArticleSection id="video" title="Video: Die Farben des Rauschens erklärt">
        <p className="mb-6">
          Schau dir unseren kurzen YouTube-Guide an, um den Unterschied direkt zu hören und deinen Favoriten zu finden.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <YouTubeEmbed
                    videoId="MlJNs1K66xc"
                    title="Die Farben des Rauschens: Weiß, Pink, Braun und Grün"
                />
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Weißes Rauschen: Der Allrounder">
        <p className="mt-4 leading-8 text-white/70">
          Weißes Rauschen enthält alle hörbaren Frequenzen in gleicher Intensität. Es klingt wie ein statisches Rauschen oder ein konstantes 'Zischen'. Da es alle Frequenzen abdeckt, eignet es sich hervorragend, um plötzliche Geräusche wie zuschlagende Türen oder Autohupen zu maskieren.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Weißes Rauschen" 
          description="Gleichmäßiges statisches Rauschen, das alle Frequenzen gleichmäßig maskiert."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>Bestens geeignet für:</strong> Maskierung von Umgebungsgeräuschen, Einschlafhilfe für Babys und neutraler Hintergrund in belebten Büros.
        </p>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="Pinkes Rauschen: Die natürliche Wahl">
        <p className="mt-4 leading-8 text-white/70">
          Pinkes Rauschen ähnelt dem weißen Rauschen, hat aber mehr Energie in den tieferen Frequenzen. Dies erzeugt einen weicheren, ausgewogeneren Klang, den viele als natürlicher empfinden. Denk an das Geräusch von stetigem Regen oder Wind in den Blättern.
        </p>
        <AudioPlayer 
          src="/pink_noise.m4a" 
          title="Pinkes Rauschen" 
          description="Ein weicherer, ausgewogenerer Klang, der an stetigen Regen erinnert."
          colorClass="bg-pink-500/20 text-pink-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>Bestens geeignet für:</strong> Verbesserung der Schlafqualität, Entspannung ohne das 'statische' Gefühl und langfristigen Fokus.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Braunes Rauschen: Die tiefe Ruhe">
        <p className="mt-4 leading-8 text-white/70">
          Braunes Rauschen (auch rotes Rauschen genannt) geht noch weiter als pinkes Rauschen und konzentriert sich stark auf tiefe Bässe. Es klingt wie ein tiefes Grollen, ein ferner Wasserfall oder das Brummen in einer Flugzeugkabine.
        </p>
        <AudioPlayer 
          src="/brown_noise.m4a" 
          title="Braunes Rauschen" 
          description="Tiefe, grollende tiefe Frequenzen, ideal für tiefe Konzentration."
          colorClass="bg-orange-500/20 text-orange-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          In letzter Zeit hat braunes Rauschen in der ADHS-Community stark an Popularität gewonnen. Viele finden, dass die tiefe, immersive Qualität hilft, einen unruhigen Geist effektiver zu beruhigen als höherfrequente Klänge.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>Bestens geeignet für:</strong> ADHS-Management, Deep Focus, intensive Entspannung und für alle, die hohe Frequenzen als störend empfinden.
        </p>
      </ArticleSection>

      <ArticleSection id="green-noise" title="Grünes Rauschen: Die Harmonie der Natur">
        <p className="mt-4 leading-8 text-white/70">
          Grünes Rauschen wird oft als der Hintergrundklang der Natur beschrieben. Es konzentriert sich auf die mittleren Frequenzen, ähnlich dem, was man in einem Wald oder an einem ruhigen Bach hört. Es ist weniger scharf als weißes Rauschen und weniger basslastig als braunes Rauschen.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>Bestens geeignet für:</strong> Friedliche Atmosphäre, Entspannung ohne schweren Bass und für Liebhaber natürlicher Klanglandschaften.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd-noise" title="Welches Rauschen ist am besten bei ADHS?">
        <p className="mt-4 leading-8 text-white/70">
          Eine häufige Frage in neurodivergenten Communities lautet: <strong>Welche Rauschfarbe ist am besten bei ADHS?</strong> Obwohl jedes Gehirn anders ist, ist <strong>braunes Rauschen</strong> oft der absolute Favorit.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Da braunes Rauschen tiefer ist und das hochfrequente Zischen des weißen Rauschens fehlt, berichten viele Menschen mit ADHS, dass es eine Art „schwere Decke“ aus Klang bildet, die kreisende Gedanken beruhigt. Es liefert gerade genug sensorischen Input, um das Stimulationsbedürfnis des Gehirns zu befriedigen, sodass sich der präfrontale Cortex auf die anstehende Aufgabe konzentrieren kann, ohne durch innere oder äußere Störungen abgelenkt zu werden.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Wenn du <em>braunes Rauschen mit weißem Rauschen bei ADHS</em> vergleichst, beginne am besten mit braunem Rauschen zum Lernen oder Arbeiten und schaue, ob es dir hilft, leichter in den Flow-Zustand zu kommen.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="Was solltest du wählen?">
        <p className="mt-4 leading-8 text-white/70">
          Die 'beste' Farbe ist reine Geschmackssache. Wir empfehlen mit weißem Rauschen zu beginnen, wenn du laute Geräusche ausblenden musst, aber auf pink oder braun zu wechseln, wenn du das statische Zischen als zu scharf empfindest.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Mit <strong>Calma</strong> musst du dich nicht für eines entscheiden. Du kannst verschiedene Rauschfarben mischen und mit Naturtexturen oder atmosphärischen Klängen ergänzen, um einen wirklich persönlichen Mix zu erstellen.
        </p>
      </ArticleSection>
    
      <ArticleSection id="comparison-table" title="Vergleichstabelle: Farben des Rauschens">
        <div className="overflow-x-auto mt-6 rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Rauschfarbe</th>
                <th className="px-4 py-3 font-semibold">Klingt wie</th>
                <th className="px-4 py-3 font-semibold">Am besten für</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-3 font-medium text-white">Weißes Rauschen</td>
                <td className="px-4 py-3">Statisches Rauschen, Ventilator</td>
                <td className="px-4 py-3">Ausblenden lauter Geräusche, Babyschlaf, Büro-Hintergrund</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Rosa Rauschen</td>
                <td className="px-4 py-3">Stetiger Regen, Blätterrauschen</td>
                <td className="px-4 py-3">Tiefschlaf, Konzentration, Entspannung</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Braunes Rauschen</td>
                <td className="px-4 py-3">Ferner Donner, starker Regen, Wasserfall</td>
                <td className="px-4 py-3">ADHS-Fokus, tiefe Entspannung, Lernen</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Grünes Rauschen</td>
                <td className="px-4 py-3">Wald, sanfter Bach</td>
                <td className="px-4 py-3">Stressabbau, Meditation, Naturfreunde</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Häufig gestellte Fragen">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Hilft weißes Rauschen beim Schlafen?</h3>
            <p className="mt-2 leading-7 text-white/70">Ja, weißes Rauschen hilft beim Schlafen, indem es störende Hintergrundgeräusche übertönt und eine konstante akustische Umgebung schafft, die dem Gehirn signalisiert, sich zu entspannen.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Was ist der Unterschied zwischen weißem und rosa Rauschen?</h3>
            <p className="mt-2 leading-7 text-white/70">Weißes Rauschen enthält alle Frequenzen in gleicher Intensität und klingt scharf. Rosa Rauschen betont tiefere Frequenzen und klingt weicher, ähnlich wie stetiger Regen.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Braunes oder weißes Rauschen zum Schlafen: was ist besser?</h3>
            <p className="mt-2 leading-7 text-white/70">Für viele ist braunes Rauschen besser zum Schlafen, da das tiefe Grollen beruhigender und weniger scharf ist als das hochfrequente Zischen des weißen Rauschens.</p>
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
                "name": "Hilft weißes Rauschen beim Schlafen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, weißes Rauschen hilft beim Schlafen, indem es störende Hintergrundgeräusche übertönt und eine konstante akustische Umgebung schafft, die dem Gehirn signalisiert, sich zu entspannen."
                }
              },
              {
                "@type": "Question",
                "name": "Was ist der Unterschied zwischen weißem und rosa Rauschen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Weißes Rauschen enthält alle Frequenzen in gleicher Intensität und klingt scharf. Rosa Rauschen betont tiefere Frequenzen und klingt weicher, ähnlich wie stetiger Regen."
                }
              },
              {
                "@type": "Question",
                "name": "Braunes oder weißes Rauschen zum Schlafen: was ist besser?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Für viele ist braunes Rauschen besser zum Schlafen, da das tiefe Grollen beruhigender und weniger scharf ist als das hochfrequente Zischen des weißen Rauschens."
                }
              }
            ]
          })
        }}
      />
      
      <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 font-bold text-xl">CT</div>
        <div>
          <p className="font-semibold text-white">Geschrieben vom Calma Team</p>
          <p className="text-sm text-white/60">Experten für Schlafhygiene und Sounddesign, die sich dafür einsetzen, Ihnen zu erholsameren Nächten zu verhelfen.</p>
        </div>
      </div>
    </ArticlePage>
  );
}
