import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fokus-App | Calma",
  description:
    "Entdecke Calma – eine schlichte Fokus-App für konzentriertes Arbeiten, Lernen und personalisierte Klangwelten.",
  keywords: [
    "Fokus-App",
    "Konzentrations-App",
    "Deep Work Sounds",
    "Lernklänge App",
    "Calma Fokus",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/focus-sounds-app",
  },
  openGraph: {
    title: "Fokus-App | Calma",
    description:
      "Entdecke eine schlichte Fokus-App für konzentriertes Arbeiten, Lernen und maximale Konzentration.",
    url: "https://www.calmasounds.com/de/focus-sounds-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fokus-App | Calma",
    description:
      "Entdecke eine schlichte Fokus-App für konzentriertes Arbeiten, Lernen und maximale Konzentration.",
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
      "name": "Fokus-App",
      "item": "https://www.calmasounds.com/de/focus-sounds-app"
    }
  ]
};

export default function FocusSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Fokus-App
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Eine Fokus-App für Deep Work, Lernen und ruhige Konzentration
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine wunderschön einfache Fokus-App, die dir hilft, personalisierte 
          Audio-Umgebungen für Deep Work, Lesen, Lernen und konzentriertes Arbeiten zu erschaffen. 
          Baue deine eigene Klanglandschaft und bleibe fokussiert, ganz ohne visuelle Ablenkungen 
          oder störenden Lärm.
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
            <h2 className="text-2xl font-semibold">Länger im Flow bleiben</h2>
            <p className="mt-4 leading-7 text-white/70">
              Nutze Hintergründe, die Ablenkungen reduzieren und eine beständige 
              Konzentration während deiner Arbeits- oder Lernphasen unterstützen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Dein eigener Fokus-Mix</h2>
            <p className="mt-4 leading-7 text-white/70">
              Mit Calma gestaltest du deine persönliche Audio-Ebene, anstatt 
              dich auf einen vorgegebenen Standard-Track verlassen zu müssen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Ruhiger arbeiten</h2>
            <p className="mt-4 leading-7 text-white/70">
              Das schlichte und elegante Design hilft dabei, deine Arbeitsumgebung 
              weniger noisy und bewusster zu gestalten.
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
            Die Fokus-Seite von Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Calma App Interface mit Fokus- und Konzentrationskategorien"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Anpassung von Fokus-Soundscapes zum Lernen"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mixer-Ansicht für Deep Work Hintergründe"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Konzentrationsklänge und binaurale Beats in Calma"
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
            Mehr über Klang und Fokus erfahren
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Beste Sounds zum Lernen</h3>
            <p className="mt-3 text-white/70">
              Finde heraus, welche Klänge dir helfen können, bei deinen Lernsessions konzentriert zu bleiben.
            </p>
          </a>
          <a
            href="/blog/binaural-beats-for-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Binaurale Beats erklärt</h3>
            <p className="mt-3 text-white/70">
              Eine einfache Einführung, wie binaurale Beats Ruhe und Fokus im Arbeitsalltag unterstützen können.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ zur Fokus-App
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Was ist eine Fokus-App?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Sie hilft dir, einen Audio-Hintergrund zu erschaffen, der die Konzentration 
              fördert, Ablenkungen reduziert und Workflows immersiver macht.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Wann nutze ich Calma für meinen Fokus?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Beim Lernen, Lesen, Schreiben oder Arbeiten – immer dann, wenn du 
              eine ruhige und kontrollierte Umgebung brauchst.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kann ich den Mix personalisieren?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Calma ermöglicht es dir, deinen Mix so zu gestalten, dass er 
              sich für dich natürlich und hilfreich anfühlt.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Probiere Calma für Deep Work und Fokus aus
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Lade Calma bei Google Play herunter und erschaffe deine ideale Fokus-Umgebung 
            mit personalisierten Klanglandschaften.
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
