import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sound Mixer App | Calma",
  description:
    "Entdecke Calma – eine schlichte Sound Mixer App für Schlaf, Entspannung, Fokus und personalisierte Audio-Routinen.",
  keywords: [
    "Sound Mixer App",
    "Schlafklänge Mixer",
    "Entspannungssounds Mixer",
    "Fokus Sound Mixer",
    "personalisierte Soundscapes",
    "Calma Sound Mixer",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/sound-mixer-app",
  },
  openGraph: {
    title: "Sound Mixer App | Calma",
    description:
      "Entdecke eine schlichte Sound Mixer App für Schlaf, Entspannung, Fokus und personalisierte Klanglandschaften.",
    url: "https://www.calmasounds.com/de/sound-mixer-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sound Mixer App | Calma",
    description:
      "Entdecke eine schlichte Sound Mixer App für Schlaf, Entspannung, Fokus und personalisierte Klanglandschaften.",
  },
};

const breadcrumbJsonLd = {
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
      "name": "Sound Mixer App",
      "item": "https://www.calmasounds.com/de/sound-mixer-app"
    }
  ]
};

export default function SoundMixerAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Sound Mixer App
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Eine Sound Mixer App für individuellen Schlaf, Entspannung und Fokus
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine wunderschön einfache Sound Mixer App, mit der du deine 
          eigene Klangwelt erschaffst, anstatt nur fixen Titeln zuzuhören. 
          Baue personalisierte Soundscapes für die Nacht, den Feierabend, 
          Deep Work und eine ruhigere tägliche Routine.
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
            <h2 className="text-2xl font-semibold">Erstelle deinen eigenen Mix</h2>
            <p className="mt-4 leading-7 text-white/70">
              Kombiniere Klänge passend zu deiner Stimmung und deiner Routine, anstatt 
              dich an einen Standard-Track anpassen zu müssen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Eine App für viele Momente</h2>
            <p className="mt-4 leading-7 text-white/70">
              Gestalte Soundscapes für Schlaf, Entspannung und Fokus in einer 
              einfachen und harmonischen Nutzererfahrung.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Elegant und intuitiv</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma ist hochwertig und warm gestaltet, damit sich das Erstellen 
              deines Mixes natürlich und nicht technisch anfühlt.
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
            Das Mixer-Erlebnis in Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Calma Mobile Interface zum Erstellen eigener Sound-Mixe"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Calma Sound Mixer zur Anpassung von Umgebungsgeräuschen"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mehrere Audio-Ebenen für personalisierte Entspannung"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Mixer-Steuerung für Schlaf- und Fokusklänge"
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
            Mehr über Soundscapes erfahren
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Regenklänge vs. Weißes Rauschen</h3>
            <p className="mt-3 text-white/70">
              Vergleiche verschiedene atmosphärische Ebenen und sieh, wie das Mischen den perfekten Schlaf- oder Fokus-Sound erzeugt.
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Rauschfarben verstehen</h3>
            <p className="mt-3 text-white/70">
              Erfahre mehr über die Farben des Rauschens und wie du sie in deinem persönlichen Mixer ausbalancierst.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ zur Sound Mixer App
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Was ist eine Sound Mixer App?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sie hilft dir, verschiedene Klänge zu einer persönlichen Audio-Umgebung 
              für Schlaf, Entspannung oder Konzentration zu kombinieren.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Wodurch unterscheidet sich Calma?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma setzt konsequent auf Personalisierung. Du gestaltest deinen eigenen 
              Mix, anstatt nur aus fertigen Titeln zu wählen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kann ich Calma mehr als nur zum Schlafen nutzen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Dank der anpassbaren Soundscapes unterstützt Calma dich auch beim 
              Lernen, Arbeiten oder Entspannen am Tag.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Nutze Calma als deinen täglichen Sound Mixer
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Lade Calma bei Google Play herunter und erstelle deine individuellen 
            Klangwelten für jeden Moment.
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
