import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Beste Tinnitus App für Schlaf & Linderung (Kostenlos) | Calma",
  description: "Suchen Sie die beste App gegen Ohrensausen? Mischen Sie weißes Rauschen und Naturklänge, um Tinnitus zu maskieren. Kostenlos, funktioniert offline.",
  keywords: [
    "Tinnitus App",
    "Tinnitus-Linderung App",
    "weißes Rauschen Tinnitus",
    "Tinnitus maskieren",
    "Tinnitus Geräusche zum Schlafen",
    "rosa Rauschen Tinnitus",
    "Tinnitus Hilfe App",
    "Ohrgeräusche lindern",
    "Tinnitus Sound Therapie",
    "Calma Tinnitus",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/tinnitus-sounds-app",
  },
  openGraph: {
    title: "Beste Tinnitus App für Schlaf & Linderung (Kostenlos) | Calma",
    description: "Suchen Sie die beste App gegen Ohrensausen? Mischen Sie weißes Rauschen und Naturklänge, um Tinnitus zu maskieren. Kostenlos, funktioniert offline.",
    url: "https://www.calmasounds.com/de/tinnitus-sounds-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beste Tinnitus App für Schlaf & Linderung (Kostenlos) | Calma",
    description: "Suchen Sie die beste App gegen Ohrensausen? Mischen Sie weißes Rauschen und Naturklänge, um Tinnitus zu maskieren. Kostenlos, funktioniert offline.",
  },
};

const combinedJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Calma - Sleep Sounds & Relax",
      "applicationCategory": "HealthAndFitnessApplication",
      "operatingSystem": "ANDROID, IOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.calmasounds.com/de"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tinnitus-Linderung App",
      "item": "https://www.calmasounds.com/de/tinnitus-sounds-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Gibt es eine kostenlose Tinnitus-App?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, Calma ist 100% kostenlos mit weißem, rosa und braunem Rauschen."
            }
        },
        {
            "@type": "Question",
            "name": "Welche Rauschfarbe bei Tinnitus?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rosa oder weißes Rauschen. Calma lässt alle Farben testen und mischen."
            }
        },
        {
            "@type": "Question",
            "name": "Hilft Klangmaskierung nachts?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Hintergrundklang gibt dem Gehirn eine Alternative zum Tinnitus."
            }
        },
        {
            "@type": "Question",
            "name": "Kann ich meinen eigenen Tinnitus-Mix erstellen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, mische mehrere Klänge und passe die Lautstärke einzeln an."
            }
        },
        {
            "@type": "Question",
            "name": "Funktioniert Calma offline?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, komplett ohne Internet."
            }
        }
    ]
}
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Tinnitus-Linderung App
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Eine Tinnitus-Linderung App für besseren Schlaf und mehr Ruhe
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine wunderschön einfache Tinnitus-Linderung App, die dir hilft, 
          eine kontrollierte und sanfte Klangumgebung für Schlaf, Entspannung und den 
          alltäglichen Fokus zu schaffen. Nutze sie zur Unterstützung deiner Abendroutine 
          und zum Ausblenden störender Geräusche.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Calma im Google Play Store herunterladen (öffnet in neuem Fenster)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download bei Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Calma im App Store herunterladen (öffnet in neuem Fenster)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Download im App Store
          </a>

          <a
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Zur Startseite
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Besser einschlafen</h2>
            <p className="mt-4 leading-7 text-white/70">
              Tinnitus-Linderung kann helfen, einen stabilen Audio-Hintergrund für die Nacht 
              und einen sanfteren Übergang in den Schlaf zu schaffen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Ablenkungen reduzieren</h2>
            <p className="mt-4 leading-7 text-white/70">
              Nutze eine kontrollierte Klangquelle, um plötzliche Außengeräusche abzufedern 
              und deine Atmosphäre ruhiger zu gestalten.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Einfach und schlicht</h2>
            <p className="mt-4 leading-7 text-white/70">
              Das elegante Design hilft dabei, Tinnitus-Sounds als festen Teil deiner 
              täglichen Routine zu etablieren, statt als technisches Tool.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            App-Vorschau
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Das ruhige Erlebnis in Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"

              alt="Calma App Interface mit Kategorien für Schlaf und Entspannung"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"

              alt="Individuelles Einstellen von weißem Rauschen in Calma"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mixer-Ansicht für Schlafklänge und Background-Audio"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Sound-Mixer zum Erstellen eigener Mixe mit weißem Rauschen"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Ratgeber & Wissen
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Mehr über Tinnitus-Sounds erfahren
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/de/blog/sounds-for-tinnitus-relief"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Sounds gegen Tinnitus</h3>
            <p className="mt-3 text-white/70">
              Welche Klänge helfen am besten bei der Maskierung von Tinnitus? Ein forschungsbasierter Guide.
            </p>
          </a>
          <a
            href="/de/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Rauschfarben erklärt</h3>
            <p className="mt-3 text-white/70">
              Vergleiche weißes, rosa und braunes Rauschen und finde die optimale Farbe für dein Ohrgeräusch.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ zur Tinnitus-Linderung App
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Gibt es eine kostenlose Tinnitus-App?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, Calma ist 100% kostenlos, ohne Werbung und bietet weißes, rosa und braunes Rauschen, die oft zur Maskierung von Tinnitus eingesetzt werden.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Welche Rauschfarbe ist am besten bei Tinnitus?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Viele Betroffene finden rosa oder weißes Rauschen am effektivsten. Rosa Rauschen maskiert hohe Töne sanfter, weißes Rauschen ist breiter. Mit Calma kannst du alle testen und mischen.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Hilft Klangmaskierung bei Tinnitus nachts?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Stille verstärkt die Wahrnehmung von Tinnitus. Ein konstanter Hintergrundklang gibt deinem Gehirn eine Alternative, auf die es sich konzentrieren kann.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kann ich meinen eigenen Tinnitus-Mix erstellen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Calma ermöglicht dir, mehrere Klänge zu mischen und die Lautstärke einzeln anzupassen – perfekt, um die optimale Maskierung für dein Ohrgeräusch zu finden.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Funktioniert Calma offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Alle Sounds funktionieren komplett ohne Internet – perfekt für die Nacht oder unterwegs.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Calma für Schlaf und tägliche Ruhe testen
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Lade Calma bei Google Play herunter und erschaffe deine eigene 
            Wohlfühlatmosphäre mit weißem Rauschen.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Calma im Google Play Store herunterladen"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Calma im App Store herunterladen"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              App Store
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
