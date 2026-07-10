import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "Beste Geräusche gegen Tinnitus & Klangtherapie | Calma";
const articleDescription = "Entdecken Sie, wie Klangtherapie und weißes Rauschen bei Tinnitus helfen können. Erfahren Sie, wie Sie Ohrensausen maskieren und Habituation erreichen.";
const articleUrl = "https://www.calmasounds.com/de/blog/sounds-for-tinnitus-relief";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "tinnitus", "sound therapy", "masking", "relief"
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "Calma",
    locale: "de",
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
  "@graph": [
    {
      "@type": "Article",
      "headline": "Beste Geräusche gegen Tinnitus: Ein Leitfaden zur Klangtherapie",
      "description": articleDescription,
      "author": { "@type": "Organization", "name": "Calma Team" },
      "publisher": { "@type": "Organization", "name": "Calma" },
      "mainEntityOfPage": articleUrl,
      "datePublished": "2026-05-09",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Welche Geräusche sind am besten bei Tinnitus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vorlieben sind individuell; probieren Sie leises weißes Rauschen, Regen oder einen anderen sanften Hintergrund."
          }
        },
        {
          "@type": "Question",
          "name": "Wie funktioniert Klangtherapie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sie kann den Kontrast verringern, ablenken oder bei manchen die Gewöhnung unterstützen; Ergebnisse variieren."
          }
        },
        {
          "@type": "Question",
          "name": "Sollte man Tinnitus komplett übertönen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Es gibt keinen universellen Pegel; vermeiden Sie lautes Übertönen und fragen Sie bei Bedarf einen Audiologen."
          }
        }
      ]
    }
  ]
};

export default function SoundsForTinnitusReliefPage() {
  return (
    <ArticlePage
      slug="sounds-for-tinnitus-relief"
      jsonLd={articleJsonLd}
      topLinkHref="/de/tinnitus-sounds-app"
      topLinkLabel="Kostenlose Tinnitus-App herunterladen"
      title="Beste Geräusche gegen Tinnitus: Ein Leitfaden zur Klangtherapie"
      intro="Tinnitus kann in Stille auffälliger wirken. Leise externe Klänge können ihn bei manchen Menschen maskieren, ablenken oder Gewöhnung unterstützen, sind aber keine Heilung und wirken individuell."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Kostenlose Tinnitus-App herunterladen"
      secondaryCtaHref="/de/tinnitus-sounds-app"
      secondaryCtaLabel="Mehr über die App erfahren"
      tableOfContents={[
        { id: "what-is-sound-therapy", title: "Wie Klangtherapie funktioniert" },
        { id: "white-noise", title: "Weißes Rauschen" },
        { id: "brown-noise", title: "Braunes Rauschen" },
        { id: "nature-sounds", title: "Naturklänge" },
        { id: "habituation", title: "Habituation: Das Geheimnis" },
        { id: "faq", title: "FAQ" },
      ]}
      relatedArticles={[]}
    >
      <ArticleSection id="what-is-sound-therapy" title="Wie Klangtherapie funktioniert">
        <p className="mt-4 leading-8 text-white/70">
          Klangtherapie bietet ein neutrales Hintergrundgeräusch, das den Kontrast zwischen Stille und Tinnitus verringert.
        </p>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Weißes Rauschen">
        <p className="mt-4 leading-8 text-white/70">
          Weißes Rauschen ist der Goldstandard zum Maskieren hoher Pfeiftöne.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="White Noise" 
          description=""
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Braunes Rauschen">
        <p className="mt-4 leading-8 text-white/70">
          Ein tiefes Rauschen, das beim Einschlafen sehr beruhigend wirkt.
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="Naturklänge">
        <p className="mt-4 leading-8 text-white/70">
          Regen und Meeresrauschen lenken das Gehirn auf natürliche Weise ab.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Steady Rain" 
          description=""
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="habituation" title="Habituation: Das Geheimnis">
        <p className="mt-4 leading-8 text-white/70">
          Das Ziel ist die Habituation (Gewöhnung). Die Lautstärke sollte knapp unter dem Tinnitus liegen.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
          >
            <Image
              src="/google-play-badge.png"
              alt="Download Calma App for Free"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="FAQ">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Welche Geräusche sind am besten bei Tinnitus?</h3>
            <p className="mt-2 leading-7 text-white/70">Vorlieben sind individuell; probieren Sie leises weißes Rauschen, Regen oder einen anderen sanften Hintergrund.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Wie funktioniert Klangtherapie?</h3>
            <p className="mt-2 leading-7 text-white/70">Sie kann den Kontrast verringern, ablenken oder bei manchen die Gewöhnung unterstützen; Ergebnisse variieren.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Sollte man Tinnitus komplett übertönen?</h3>
            <p className="mt-2 leading-7 text-white/70">Es gibt keinen universellen Pegel; vermeiden Sie lautes Übertönen und fragen Sie bei Bedarf einen Audiologen.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
