import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kostenlose Naturklänge App | Regen, Wald, Meer | Calma",
  description:
    "Hören Sie Regen, Wald, Meer und Vogelgeräusche zum Schlafen und Entspannen. Erstellen Sie individuelle Mixe mit Calma. 100% kostenlos, ohne Werbung, offline nutzbar.",
  keywords: [
    "Naturklänge App",
    "Naturgeräusche zum Einschlafen",
    "Regengerusche zum Schlafen",
    "Naturklänge kostenlos",
    "Calma Naturklänge",
    "Waldgeräusche",
    "Meeresrauschen App",
    "Vogelgeräusche entspannend",
    "Naturklänge zum Entspannen",
    "Naturgeräusche Generator",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/nature-sounds-app",
  },
  openGraph: {
    title: "Kostenlose Naturklänge | Regen, Wald, Meer | Calma",
    description:
    "Regen, Wald, Meer und Vogelgeräusche zum Schlafen und Entspannen. 100% kostenlos, ohne Werbung.",
    url: "https://www.calmasounds.com/de/nature-sounds-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naturklänge zum Schlafen | Calma",
    description:
    "Mischen Sie Regen, Wald und Meer zum Entspannen. 100% kostenlos, offline nutzbar.",
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
      "name": "Naturklänge App",
      "item": "https://www.calmasounds.com/de/nature-sounds-app"
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
          Naturklänge App
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Eine Naturklänge App für besseren Schlaf und mehr Ruhe
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine wunderschön einfache Naturklänge App, die dir hilft, 
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
              Naturklänge kann helfen, einen stabilen Audio-Hintergrund für die Nacht 
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
              Das elegante Design hilft dabei, Naturklänge als festen Teil deiner 
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
            Mehr über Naturklänge erfahren
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/de/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Vorteile von Naturklängen</h3>
            <p className="mt-3 text-white/70">
              Erfahre, wie Naturgeräusche Stress reduzieren und dein emotionales Wohlbefinden verbessern.
            </p>
          </a>
          <a
            href="/de/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Regengerusche zum Schlafen</h3>
            <p className="mt-3 text-white/70">
              Warum sind Regengerusche so wirksam beim Einschlafen und Konzentrieren?
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ zur Naturklänge App
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Was ist eine Naturklänge-App?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Eine Naturklänge-App spielt Umgebungsklänge wie Regen, Wellen, Wald und Vogelgesang ab, um dir beim Entspannen, Schlafen oder Konzentrieren zu helfen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Helfen Naturklänge beim Schlafen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, zahlreiche wissenschaftliche Studien zeigen, dass Naturklänge Stress reduzieren, die Herzfrequenz senken und den Übergang in den Tiefschlaf erleichtern.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Gibt es in Calma nur Naturklänge?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Nein. Calma bietet auch weißes, rosa, braunes und grünes Rauschen sowie einen vollständigen Katalog von Klängen zum Entspannen oder Konzentrieren.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kann ich Regen mit weißem Rauschen mischen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Absolut! Calma wurde speziell dafür entwickelt, mehrere Klänge zu mischen und die Lautstärke einzeln einzustellen. Regen mit weißem oder braunem Rauschen ist einer der beliebtesten Mixe.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Reduzieren Naturklänge Angst?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Forschungen in Scientific Reports zeigen, dass Naturklänge das parasympathische Nervensystem aktivieren, die Kampf-oder-Flucht-Reaktion reduzieren und Entspannung fördern.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Was ist eine Naturklänge-App?","acceptedAnswer":{"@type":"Answer","text":"Sie spielt Regen, Wellen und Waldgeräusche ab, um beim Entspannen und Schlafen zu helfen."}},{"@type":"Question","name":"Helfen Naturklänge beim Schlafen?","acceptedAnswer":{"@type":"Answer","text":"Ja, sie reduzieren Stress und erleichtern den Tiefschlaf."}},{"@type":"Question","name":"Gibt es nur Naturklänge?","acceptedAnswer":{"@type":"Answer","text":"Nein. Calma bietet weiß, rosa, braun und grün."}},{"@type":"Question","name":"Kann ich Regen mit Rauschen mischen?","acceptedAnswer":{"@type":"Answer","text":"Ja! Calma mischt mehrere Klänge mit individueller Lautstärke."}},{"@type":"Question","name":"Reduzieren Naturklänge Angst?","acceptedAnswer":{"@type":"Answer","text":"Ja, sie aktivieren das parasympathische Nervensystem und fördern Entspannung."}}]}) }}
          />
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
