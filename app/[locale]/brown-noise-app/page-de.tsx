import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kostenlose Brown Noise App für ADHS und Schlaf | Calma",
  description:
    "Suchen Sie tiefes braunes Rauschen für ADHS, Schlaf oder Konzentration? Mischen Sie Brown Noise mit Regen und Naturklängen. 100% kostenlos, ohne Werbung, offline nutzbar.",
  keywords: [
    "Braunes Rauschen App",
    "Brown Noise App",
    "braunes Rauschen ADHS",
    "braunes Rauschen zum Einschlafen",
    "Calma Brown Noise",
    "Brown Noise Generator",
    "braunes Rauschen kostenlos",
    "braunes Rauschen Konzentration",
    "braunes Rauschen Tiefschlaf",
    "Brown Noise App kostenlos",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/brown-noise-app",
  },
  openGraph: {
    title: "Kostenlose Brown Noise App | ADHS, Schlaf & Fokus | Calma",
    description:
    "Braunes Rauschen mit Regen und Naturklängen für ADHS, Schlaf und Konzentration. 100% kostenlos.",
    url: "https://www.calmasounds.com/de/brown-noise-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kostenlose Brown Noise App für ADHS und Schlaf | Calma",
    description:
    "Braunes Rauschen mit Regen und Naturklängen. 100% kostenlos, offline nutzbar.",
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
      "name": "Braunes Rauschen App",
      "item": "https://www.calmasounds.com/de/brown-noise-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Was ist braunes Rauschen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ein tiefer, gleichmäßiger Klang mit mehr Energie in tiefen Frequenzen als weißes Rauschen."
            }
        },
        {
            "@type": "Question",
            "name": "Hilft braunes Rauschen bei ADHS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, viele ADHS-Betroffene berichten bessere Konzentration mit braunem Rauschen."
            }
        },
        {
            "@type": "Question",
            "name": "Gibt es nur braunes Rauschen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nein. Calma bietet weiß, rosa, grün und Naturklänge."
            }
        },
        {
            "@type": "Question",
            "name": "Braun vs. weiß – was ist besser?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Braun ist tiefer und sanfter. Weiß maskiert plötzliche Geräusche besser. Calma mischt beides."
            }
        },
        {
            "@type": "Question",
            "name": "Kann man es die ganze Nacht nutzen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, bei moderater Lautstärke sicher. Calma hat einen automatischen Sleep-Timer."
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
          Braunes Rauschen App
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Eine Braunes Rauschen App für besseren Schlaf und mehr Ruhe
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine wunderschön einfache Braunes Rauschen App, die dir hilft, 
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
              Braunes Rauschen kann helfen, einen stabilen Audio-Hintergrund für die Nacht 
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
              Das elegante Design hilft dabei, braunes Rauschen als festen Teil deiner 
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
              priority
              alt="Calma App Interface mit Kategorien für Schlaf und Entspannung"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
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
            Mehr über braunes Rauschen erfahren
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/de/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Braun vs. weiß vs. rosa</h3>
            <p className="mt-3 text-white/70">
              Vergleiche die verschiedenen Rauschfarben und finde heraus, welche am besten für Schlaf, ADHS oder Fokus geeignet ist.
            </p>
          </a>
          <a
            href="/de/blog/best-color-noise-for-adhd"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Bestes Rauschen für ADHS</h3>
            <p className="mt-3 text-white/70">
              Welche Rauschfarbe ist am wirksamsten für Menschen mit ADHS? Ein forschungsbasierter Guide.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ zur Braunes Rauschen App
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Was ist braunes Rauschen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Braunes Rauschen ist ein tiefer, gleichmäßiger Klang, ähnlich einem fernen Donnergrollen. Es hat mehr Energie in den tiefen Frequenzen als weißes Rauschen, was es für viele Menschen entspannender macht.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Hilft braunes Rauschen bei ADHS?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, viele Menschen mit ADHS berichten, dass braunes Rauschen ihnen hilft, sich besser zu konzentrieren. Der tiefe, konstante Ton reduziert mentale Hyperaktivität und erleichtert anhaltende Konzentration.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Gibt es in Calma nur braunes Rauschen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Nein. Calma bietet auch weißes, rosa und grünes Rauschen sowie einen vollständigen Katalog von Naturklängen zum Schlafen, Entspannen oder Konzentrieren.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Braunes vs. weißes Rauschen – was ist besser zum Schlafen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Braunes Rauschen klingt tiefer und sanfter – ideal, wenn du weißes Rauschen zu schrill findest. Weißes Rauschen maskiert plötzliche Geräusche besser. Mit Calma kannst du beides mischen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kann ich braunes Rauschen die ganze Nacht nutzen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, bei moderater Lautstärke (unter 50 dB) ist es völlig sicher. Calma hat einen Sleep-Timer, der sich automatisch abschaltet.
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
