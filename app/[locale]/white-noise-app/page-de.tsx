import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Beste Kostenlose White Noise App 2026 | Calma",
  description:
    "Suchen Sie die beste White Noise App? Mischen Sie weißes, braunes und rosa Rauschen mit Naturklängen für Schlaf, ADHS, Babys oder Tinnitus. 100% kostenlos, ohne Werbung, offline nutzbar.",
  keywords: [
    "Weißes Rauschen App",
    "White Noise App",
    "Weißes Rauschen zum Einschlafen",
    "beste White Noise App",
    "Calma White Noise",
    "weißes Rauschen kostenlos",
    "weißes Rauschen Baby",
    "weißes Rauschen ADHS",
    "White Noise Generator",
    "weißes Rauschen zum Lernen",
    "weißes Rauschen Tinnitus",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/white-noise-app",
  },
  openGraph: {
    title: "Beste Kostenlose White Noise App | Schlaf, Babys, ADHS | Calma",
    description:
    "Weißes, braunes und rosa Rauschen für Schlaf, ADHS, Babys oder Tinnitus. 100% kostenlos, ohne Werbung.",
    url: "https://www.calmasounds.com/de/white-noise-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beste Kostenlose White Noise App | Calma",
    description:
    "Weißes, braunes und rosa Rauschen für besseren Schlaf. 100% kostenlos, offline nutzbar.",
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
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
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
      "name": "Weißes Rauschen App",
      "item": "https://www.calmasounds.com/de/white-noise-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Was ist die beste kostenlose White Noise App?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Calma ist 100% kostenlos, ohne Werbung, offline nutzbar und ermöglicht das Mischen von weißem Rauschen mit Naturklängen."
            }
        },
        {
            "@type": "Question",
            "name": "Hilft weißes Rauschen beim Schlafen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Es maskiert plötzliche Geräusche und hilft dem Gehirn, sich zu entspannen."
            }
        },
        {
            "@type": "Question",
            "name": "Wie nutzt man weißes Rauschen zum Lernen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Basis aus weißem oder braunem Rauschen mit leichtem Regen, besonders wirksam bei ADHS."
            }
        },
        {
            "@type": "Question",
            "name": "Ist weißes Rauschen sicher für Babys?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, bei Lautstärke unter 50 dB und mindestens 2 Meter Abstand."
            }
        },
        {
            "@type": "Question",
            "name": "Weißes vs. braunes Rauschen – was ist besser?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Weiß maskiert hohe Töne. Braun ist tiefer und entspannender. Calma mischt beides."
            }
        },
        {
            "@type": "Question",
            "name": "Funktioniert Calma offline?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja. Calma funktioniert komplett ohne Internet."
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
          Weißes Rauschen App
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Eine Weißes Rauschen App für besseren Schlaf und mehr Ruhe
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine wunderschön einfache Weißes Rauschen App, die dir hilft, 
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
              Weißes Rauschen kann helfen, einen stabilen Audio-Hintergrund für die Nacht 
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
              Das elegante Design hilft dabei, weißes Rauschen als festen Teil deiner 
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
            Mehr über weißes Rauschen erfahren
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/de/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Weißes Rauschen zum Schlafen</h3>
            <p className="mt-3 text-white/70">
              Entdecke, wie weißes Rauschen eine stabile Schlafumgebung schafft und deine Erholung verbessert.
            </p>
          </a>
          <a
            href="/de/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Rauschfarben erklärt</h3>
            <p className="mt-3 text-white/70">
              Erfahre die Unterschiede zwischen weißem, pinkem, braunem und grünem Rauschen für deinen idealen Sound.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ zur Weißes Rauschen App
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Was ist die beste kostenlose White Noise App?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma bietet eine einfache Umgebung zum Mischen von weißem Rauschen mit Naturklängen – ohne Werbung. 100% kostenlos und offline nutzbar.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Hilft weißes Rauschen beim Schlafen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Weißes Rauschen wirkt wie eine akustische Decke, die plötzliche Geräusche übertönt und deinem Gehirn hilft, sich zu entspannen und tiefer zu schlafen.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Wie nutzt man weißes Rauschen zum Lernen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Zum Lernen empfehlen wir eine Basis aus weißem oder braunem Rauschen, gemischt mit leichtem Regen. Besonders wirksam für Menschen mit ADHS.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Ist weißes Rauschen sicher für Babys?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, bei richtiger Anwendung. Halte die Lautstärke unter 50 dB, stelle das Gerät mindestens 2 Meter vom Bett entfernt auf und verwende einen Timer.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Weißes vs. braunes Rauschen – was ist besser zum Schlafen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Weißes Rauschen maskiert hohe Töne besser. Braunes Rauschen klingt tiefer und wird von vielen Erwachsenen als entspannender empfunden. Mit Calma kannst du beides mischen.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Funktioniert Calma ohne Internet?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Calma funktioniert komplett offline – im Flugzeug, in den Bergen oder einfach ohne WLAN.
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
