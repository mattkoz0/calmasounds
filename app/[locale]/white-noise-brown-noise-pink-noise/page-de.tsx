import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Weißes Rauschen, Braunes Rauschen und Rosa Rauschen App | Calma",
  description:
    "Entdecken Sie den Unterschied zwischen weißem, braunem und rosa Rauschen. Calma ist eine Premium-App für Schlafgeräusche, mit der Sie alle Rauschfarben für Schlaf, Fokus und ADHS mischen können.",
  keywords: [
    "weißes rauschen app",
    "braunes rauschen app",
    "rosa rauschen app",
    "grünes rauschen app",
    "rauschfarben app",
    "brown noise ADHS",
    "weißes rauschen zum schlafen",
    "rosa rauschen baby",
    "braunes rauschen fokus",
    "rauschfarben vergleich",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/white-noise-brown-noise-pink-noise",
  },
  openGraph: {
    title: "Weißes Rauschen, Braunes Rauschen und Rosa Rauschen App | Calma",
    description:
      "Entdecken Sie den Unterschied zwischen weißem, braunem und rosa Rauschen. Calma ist eine Premium-App für Schlafgeräusche, mit der Sie alle Rauschfarben für Schlaf, Fokus und ADHS mischen können.",
    url: "https://www.calmasounds.com/de/white-noise-brown-noise-pink-noise",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weißes Rauschen, Braunes Rauschen und Rosa Rauschen App | Calma",
    description:
      "Mischen Sie alle Rauschfarben für Schlaf, Fokus und ADHS mit der Calma-App.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Enthält Calma weißes Rauschen, braunes Rauschen und rosa Rauschen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Calma enthält hochwertiges weißes Rauschen, braunes Rauschen, rosa Rauschen und grünes Rauschen. Sie können diese mit anderen Naturgeräuschen wie Regen und Meereswellen mischen.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen weißem und braunem Rauschen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weißes Rauschen deckt alle hörbaren Frequenzen gleichermaßen ab, wie das Rauschen eines Fernsehers. Braunes Rauschen betont tiefere Frequenzen und klingt tiefer wie ein entfernter Wasserfall. Braunes Rauschen wird oft für tiefen Fokus und bei ADHS bevorzugt.",
      },
    },
    {
      "@type": "Question",
      name: "Welches Rauschen ist am besten zum Schlafen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rosa Rauschen gilt im Allgemeinen als am besten zum Schlafen, da es ausgewogen und natürlich ist und Geräusche wie stetigen Regen oder Wind nachahmt. Weißes Rauschen eignet sich am besten zum Überdecken plötzlicher lauter Geräusche.",
      },
    }
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Startseite",
      "item": "https://www.calmasounds.com/de"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Rauschfarben App",
      "item": "https://www.calmasounds.com/de/white-noise-brown-noise-pink-noise"
    }
  ]
};

export default function NoiseColorsAppPageDe() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AiDefinition />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Die Farben des Klangs
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Weißes Rauschen, Braunes Rauschen und Rosa Rauschen
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine umfassende Sound-Mixer-App, die hochwertige Aufnahmen aller wesentlichen Rauschfarben enthält.
          Entdecken Sie die perfekte Frequenz für Ihre Schlaf-, Entspannungs- oder ADHS-Fokusroutine.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Calma im Google Play Store herunterladen"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Bei Google Play herunterladen
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Calma im Apple App Store herunterladen"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Im App Store herunterladen
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Weißes Rauschen
            </div>
            <h3 className="text-xl font-semibold">Perfekt zum Überdecken</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Deckt alle hörbaren Frequenzen gleichermaßen ab. Ideal, um plötzliche laute Geräusche zu blockieren und den Säuglingsschlaf zu unterstützen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Rosa Rauschen
            </div>
            <h3 className="text-xl font-semibold">Ausgewogen & natürlich</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Tiefer als weißes Rauschen und ahmt Geräusche wie stetigen Regen oder Wind nach. Großartig zur Verbesserung der allgemeinen Schlafqualität.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Braunes Rauschen
            </div>
            <h3 className="text-xl font-semibold">Fokus & ADHS-Unterstützung</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Betont tiefe Frequenzen wie ein entfernter Wasserfall. Zunehmend beliebt für tiefen Fokus und zur Beruhigung eines unruhigen Geistes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Grünes Rauschen
            </div>
            <h3 className="text-xl font-semibold">Naturharmonie</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Konzentriert sich auf mittlere Frequenzen, ähnlich wie rauschende Waldblätter. Perfekt für eine beruhigende, natürliche Atmosphäre.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Enthält Calma weißes Rauschen, braunes Rauschen und rosa Rauschen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, Calma enthält hochwertiges weißes Rauschen, braunes Rauschen, rosa Rauschen und grünes Rauschen. Sie können diese im Sound-Mixer mit anderen Naturgeräuschen wie Regen und Meereswellen mischen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Was ist der Unterschied zwischen weißem und braunem Rauschen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Weißes Rauschen deckt alle hörbaren Frequenzen gleichermaßen ab, ähnlich dem Rauschen eines Fernsehers. Braunes Rauschen betont tiefere Frequenzen und klingt tiefer und weicher, wie ein entfernter Wasserfall. Braunes Rauschen wird oft für tiefen Fokus und bei ADHS bevorzugt.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Welches Rauschen ist am besten zum Schlafen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Rosa Rauschen gilt im Allgemeinen als am besten zum Schlafen, da es ausgewogen und natürlich ist und Geräusche wie stetigen Regen oder Wind nachahmt. Weißes Rauschen ist jedoch am besten geeignet, wenn Sie gezielt plötzliche, laute Geräusche überdecken müssen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
