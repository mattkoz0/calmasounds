import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Entspannungsklänge App | Calma",
  description:
    "Entdecke Calma – eine schlichte App für Entspannungsklänge, ruhigere Abende und personalisierte Klanglandschaften.",
  keywords: [
    "Entspannungsklänge App",
    "Relaxing Sounds App",
    "beruhigende Klänge",
    "Ambient Sounds zur Entspannung",
    "Calma Entspannung",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/relaxing-sounds",
  },
  openGraph: {
    title: "Entspannungsklänge App | Calma",
    description:
      "Entdecke eine schlichte App für Entspannungsklänge und friedliche tägliche Routinen.",
    url: "https://www.calmasounds.com/de/relaxing-sounds",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entspannungsklänge App | Calma",
    description:
      "Entdecke eine schlichte App für Entspannungsklänge und friedliche tägliche Routinen.",
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
      "name": "Entspannungsklänge",
      "item": "https://www.calmasounds.com/de/relaxing-sounds"
    }
  ]
};

export default function RelaxingSoundsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Entspannungsklänge
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Eine App für Entspannungsklänge und sanftere tägliche Routinen
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine wunderschön einfache App für Entspannungsklänge, die dir hilft, 
          nach einem langen Tag abzuschalten und eine friedliche Umgebung zu schaffen, 
          wann immer du sie brauchst. Gestalte personalisierte Klanglandschaften für 
          Entspannung, emotionales Gleichgewicht und stille Momente im Alltag.
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
            <h2 className="text-2xl font-semibold">Leichter abschalten</h2>
            <p className="mt-4 leading-7 text-white/70">
              Nutze beruhigende Klangwelten, um den Arbeitsmodus zu verlassen, 
              mentales Rauschen zu reduzieren und sanft in den Feierabend zu gleiten.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Dein eigener Relax-Mix</h2>
            <p className="mt-4 leading-7 text-white/70">
              Kombiniere Klänge so, wie es sich für dich persönlich richtig anfühlt und 
              erschaffe genau die Atmosphäre, die du gerade brauchst.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Sanfte tägliche Rituale</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma hilft dir, auf einfache und elegante Weise zur Ruhe zu kommen, 
              die perfekt in deinen Alltag passt.
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
            Die entspannende Seite von Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Calma App Interface zur Auswahl entspannender Kategorien"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Anpassbare Ambient-Soundscapes in Calma"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Sound-Mixer mit natürlichen Texturen und beruhigenden Ebenen"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interface zur Verwaltung personalisierter Entspannungsmixe"
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
            Mehr über Entspannung und Klang erfahren
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Vorteile von Naturklängen</h3>
            <p className="mt-3 text-white/70">
              Erfahre, wie natürliche Soundscapes wie Regen und Meeresrauschen als natürliche Erdung zur Entspannung służą.
            </p>
          </a>
          <a
            href="/blog/guided-breathing-techniques"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Geführte Atemtechniken</h3>
            <p className="mt-3 text-white/70">
              Entdecke beruhigende Atemmethoden, die zusammen mit Ambient-Sounds für tiefere Entspannung sorgen.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Fragen zu den Entspannungsklängen
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Was ist eine App für Entspannungsklänge?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sie hilft dir, beruhigende Audio-Inhalte abzuspielen, die das 
              Abschalten, den mentalen Reset und einen friedlicheren Alltag unterstützen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Wann nutze ich Calma zur Entspannung?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Po der Arbeit, beim Entspannen am Abend, beim Lesen oder einfach, 
              wenn du eine sanftere Hintergrundumgebung wünschst.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kann ich die Entspannungsklänge personalisieren?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Calma ist darauf ausgelegt, dass du deine eigene Klangwelt erschaffst, 
              anstatt dich auf vorgegebene Titel verlassen zu müssen.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Probiere Calma für mehr Ruhe im Alltag
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Lade Calma bei Google Play herunter und erschaffe eine friedlichere Atmosphäre 
            mit personalisierten Entspannungsklängen.
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
