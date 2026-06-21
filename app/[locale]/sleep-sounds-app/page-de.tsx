import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kostenlose Schlaf-App mit Sounds | Ohne Werbung | Calma",
  description:
    "Suchen Sie die beste App zum Einschlafen? Mischen Sie weißes Rauschen, Regen und Naturklänge für besseren Schlaf. 100% kostenlos, ohne Werbung, offline nutzbar.",
  keywords: [
    "Schlaf-App",
    "Einschlafhilfen App",
    "entspannende Sounds zum Schlafen",
    "Schlafgeräusche kostenlos",
    "Calma Schlafklänge",
    "weißes Rauschen zum Einschlafen",
    "Regengerusche zum Schlafen",
    "Schlaf App kostenlos",
    "beste Sounds zum Einschlafen",
    "Nachtgeräusche App",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/sleep-sounds-app",
  },
  openGraph: {
    title: "Kostenlose Schlaf-App | Ohne Werbung | Calma",
    description:
    "Weißes Rauschen, Regen und Naturklänge zum Einschlafen. 100% kostenlos, ohne Werbung.",
    url: "https://www.calmasounds.com/de/sleep-sounds-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kostenlose Schlaf-App | Calma",
    description:
    "Weißes Rauschen, Regen und Naturklänge zum Einschlafen. 100% kostenlos, offline nutzbar.",
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
      "name": "Schlaf-App",
      "item": "https://www.calmasounds.com/de/sleep-sounds-app"
    }
  ]
};

export default function SleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Schlaf-App
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Eine Schlaf-App für ruhigere Nächte und bessere Abendroutinen
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine wunderschön einfache Schlaf-App, die dir hilft, personalisierte 
          Klanglandschaften für die Schlafenszeit, die Abendentspannung und tiefere Erholung 
          zu erstellen. Mische entspannende Klänge, baue deine eigene Atmosphäre und mache 
          deine nächtliche Routine sanfter und beständiger.
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
              Anstatt nur einem Standard-Titel zuzuhören, kannst du eine Klangumgebung 
              schaffen, die genau zu deinem Abend und deiner Stimmung passt.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Entspannen vor dem Schlafen</h2>
            <p className="mt-4 leading-7 text-white/70">
              Nutze beruhigende Klangwelten, um nach einem anstrengenden Tag abzuschalten 
              und einen friedlichen Übergang in den Schlaf zu finden.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Einfach und ohne Ballast</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma ist so gestaltet, dass es klar, elegant und einfach zu bedienen ist – 
              jede Nacht aufs Neue, ganz ohne Ablenkung.
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
            Das Schlaferlebnis in Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Calma Mobile Interface mit einer Liste von Schlafklängen"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Schlafklänge individuell anpassbar in der Calma App"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mixer-Ansicht mit verschiedenen Sound-Ebenen"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Individueller Sound-Mixer für Schlafklänge"
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
            Mehr über Schlafklänge erfahren
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/de/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Beste Sounds zum Schlafen</h3>
            <p className="mt-3 text-white/70">
              Ein praktischer Guide zu Regen, weißem Rauschen und sanften Klanglandschaften für die Nacht.
            </p>
          </a>
          <a
            href="/de/blog/how-to-build-a-bedtime-routine"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Bessere Abendroutinen aufbauen</h3>
            <p className="mt-3 text-white/70">
              Einfache Wege zu einem ruhigeren Abendrhythmus, der natürlichen und stabilen Schlaf fördert.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Häufig gestellte Fragen zur Schlaf-App
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Was ist eine Schlafklänge-App?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Eine Schlaf-App spielt beruhigende Klänge ab, die Abendroutinen, Entspannung und einen ruhigeren mentalen Zustand vor dem Einschlafen unterstützen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Wodurch unterscheidet sich Calma?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma ist 100% kostenlos, ohne Werbung, offline nutzbar und ermöglicht personalisierte Mixe mit einem schlichten, hochwertigen Design.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kann ich meinen eigenen Mix bauen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Calma ist so konzipiert, dass du deine eigene Klangwelt erschaffst, anstatt nur vorgegebene Titel abzuspielen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Ist es sicher, jede Nacht Schlafklänge zu nutzen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, bei moderater Lautstärke (unter 50 dB). Studien zeigen, dass gleichmäßige Hintergrundgeräusche die Tiefschlafqualität verbessern. Calma hat einen automatischen Sleep-Timer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Welche Sounds helfen am besten beim schnellen Einschlafen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Die wirksamsten Sounds sind weißes Rauschen, braunes Rauschen und Regengerusche. Calma lässt dich alle zusammen mischen für die perfekte Atmosphäre.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Was ist eine Schlafklänge-App?","acceptedAnswer":{"@type":"Answer","text":"Eine App, die beruhigende Klänge für Entspannung und tieferen Schlaf abspielt."}},{"@type":"Question","name":"Wodurch unterscheidet sich Calma?","acceptedAnswer":{"@type":"Answer","text":"100% kostenlos, ohne Werbung, offline nutzbar, mit personalisierbaren Mixe."}},{"@type":"Question","name":"Kann ich meinen eigenen Mix bauen?","acceptedAnswer":{"@type":"Answer","text":"Ja, erstelle deine eigene Klangwelt."}},{"@type":"Question","name":"Ist es sicher, jede Nacht Sounds zu nutzen?","acceptedAnswer":{"@type":"Answer","text":"Ja, bei moderater Lautstärke. Calma hat einen automatischen Sleep-Timer."}},{"@type":"Question","name":"Welche Sounds helfen beim schnellen Einschlafen?","acceptedAnswer":{"@type":"Answer","text":"Weißes Rauschen, braunes Rauschen und Regen. Calma mischt alle zusammen."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Probiere Calma für deinen Abend aus
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Lade Calma bei Google Play herunter und gestalte ein friedlicheres 
            Abenderlebnis mit deinen eigenen Klängen.
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
