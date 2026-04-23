import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Weißes Rauschen App | Calma",
  description:
    "Entdecke Calma – eine schlichte Weißes Rauschen App für Schlaf, Entspannung und ein ruhigeres Klangerlebnis.",
  keywords: [
    "Weißes Rauschen App",
    "White Noise App",
    "Weißes Rauschen zum Einschlafen",
    "beruhigendes weißes Rauschen",
    "Calma White Noise",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/white-noise-app",
  },
  openGraph: {
    title: "Weißes Rauschen App | Calma",
    description:
      "Entdecke eine schlichte Weißes Rauschen App für Schlaf, Entspannung und ruhigere tägliche Routinen.",
    url: "https://www.calmasounds.com/de/white-noise-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weißes Rauschen App | Calma",
    description:
      "Entdecke eine schlichte Weißes Rauschen App für Schlaf, Entspannung und ruhigere tägliche Routinen.",
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
      "name": "Weißes Rauschen App",
      "item": "https://www.calmasounds.com/de/white-noise-app"
    }
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
            Mehr über weißes Rauschen erfahren
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Weißes Rauschen zum Schlafen</h3>
            <p className="mt-3 text-white/70">
              Entdecke, wie weißes Rauschen helfen kann, eine stabile Umgebung zu schaffen und deine Erholung zu verbessern.
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Rauschfarben erklärt</h3>
            <p className="mt-3 text-white/70">
              Erfahre mehr über die Unterschiede zwischen weißem, pinkem, braunem und grünem Rauschen.
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
              Was ist eine Weißes Rauschen App?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sie hilft dir, ein gleichmäßiges Hintergrundgeräusch abzuspielen, das 
              den Schlaf, die Entspannung und eine ruhigere Audio-Umgebung unterstützt.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Hilft weißes Rauschen beim Schlafen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Viele Menschen nutzen es, um die Schlafenszeit ruhiger zu gestalten und 
              Ablenkungen durch plötzliche Geräusche zu minimieren.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Gibt es in Calma nur weißes Rauschen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Nein. Calma unterstützt auch Naturklänge, Ambient-Soundscapes und Fokus-Mixe, 
              sodass du das Erlebnis ganz nach deinen Wünschen gestalten kannst.
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
