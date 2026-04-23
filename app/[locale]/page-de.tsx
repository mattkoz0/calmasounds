import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calma | Schlaf-App für Entspannung, weißes Rauschen und Fokus",
  description:
    "Calma ist eine Schlaf-App für Entspannung, weißes Rauschen und Fokus. Erstellen Sie personalisierte Klanglandschaften für besseren Schlaf, ruhigere Abende und tiefere Konzentration.",
  alternates: {
    canonical: "https://www.calmasounds.com/de",
  },
  openGraph: {
    title: "Calma | Schlaf-App für Entspannung, weißes Rauschen und Fokus",
    description:
      "Calma ist eine Schlaf-App für Entspannung, weißes Rauschen und Fokus. Erstellen Sie personalisierte Klanglandschaften für besseren Schlaf, ruhigere Abende und tiefere Konzentration.",
    url: "https://www.calmasounds.com/de",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | Schlaf-App für Entspannung, weißes Rauschen und Fokus",
    description:
      "Calma ist eine Schlaf-App für Entspannung, weißes Rauschen und Fokus. Erstellen Sie personalisierte Klanglandschaften für besseren Schlaf, ruhigere Abende und tiefere Konzentration.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calma",
  url: "https://www.calmasounds.com/de",
  description:
    "Calma ist eine Schlaf-App für Entspannung, weißes Rauschen und Fokus. Erstellen Sie personalisierte Klanglandschaften für besseren Schlaf, ruhigere Abende und tiefere Konzentration.",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calma",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Sleep and Relaxation",
  operatingSystem: "Android 8.0 and up",
  url: "https://www.calmasounds.com/de",
  downloadUrl: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
  ],
  description:
    "Schlafklänge, weißes Rauschen, Entspannung und Fokus App mit personalisierten Klanglandschaften.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  softwareVersion: "1.0.0",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calma",
  url: "https://www.calmasounds.com/de",
  logo: "https://www.calmasounds.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "calma.app@outlook.com",
    contactType: "customer support",
    availableLanguage: ["German", "English"]
  },
  sameAs: [
    "https://www.tiktok.com/@.calma.app",
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    "https://www.instagram.com/calma.app.official",
    "https://www.youtube.com/@CalmaApp",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist Calma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma ist eine Sound-Mixer-App, die dir hilft, besser zu schlafen, dich leichter zu entspannen und konzentriert zu bleiben – mit personalisierten Audio-Mixen.",
      },
    },
    {
      "@type": "Question",
      name: "Für wen ist Calma gedacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma ist für alle, die sich eine ruhigere Abendroutine, eine friedlichere Pause nach der Arbeit oder eine fokussierte Hintergrundakustik zum Lernen oder Arbeiten wünschen.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich meine eigene Klangmischung erstellen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Calma basiert auf der Idee, deine eigene entspannende Klangumgebung zu gestalten, anstatt nur einem festen Titel zuzuhören.",
      },
    },
    {
      "@type": "Question",
      name: "Ist Calma bereits verfügbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma ist für Android und iOS (App Store) verfügbar, wobei im Laufe der Zeit weitere Verbesserungen und Plattform-Erweiterungen geplant sind.",
      },
    },
  ],
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Calma App Demo",
  description: "Erlebe Calma in Aktion – von immersivem Sound-Mixing bis hin zu Premium-Wellness-Funktionen für Schlaf, Entspannung und Fokus.",
  thumbnailUrl: "https://www.calmasounds.com/screenshots/3_en.png",
  uploadDate: "2026-03-30T09:00:00Z",
  duration: "PT34S",
  contentUrl: "https://www.calmasounds.com/demo.mp4",
  embedUrl: "https://www.calmasounds.com/demo.mp4"
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.calmasounds.com/de"
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(softwareAppJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(videoJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbJsonLd),
              }}
            />


      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Calma • Schlafklänge & Entspannung
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Besser schlafen, tiefer entspannen und fokussieren
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine wunderschön einfache App für Schlafklänge und Entspannung, die dir hilft, 
          personalisierte Audiomischungen für besseren Schlaf, ruhigere Abende und tiefere Konzentration zu erstellen.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Calma App im Google Play Store herunterladen (öffnet in neuem Fenster)"
            className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
          >
            Starte deine kostenlose Routine
          </a>

          <a
            href="#features"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Funktionen entdecken
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/65">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Personalisierte Mixe
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Schlaf • Entspannung • Fokus
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Kein Abo-Zwang
          </span>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-[1.02]"
          >
            <Image
              src="/google-play-badge.png"
              alt="Jetzt bei Google Play"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-[1.02]"
          >
            <Image
              src="/apple-appstore-badge.png"
              alt="Im App Store laden"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </a>
        </div>
        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Besserer Schlaf
            </p>
            <h2 className="mt-3 text-xl font-semibold">Schlafklänge & Regen-Ambiente</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Erstelle Abend-Mixe mit Regengeräuschen, Ambient-Texturen und beruhigenden Hintergründen, 
              die dir helfen, natürlich abzuschalten.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Tiefe Entspannung
            </p>
            <h2 className="mt-3 text-xl font-semibold">Naturklänge für tiefe Erholung</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Nutze beruhigende Klanglandschaften, um deinen Geist zurückzusetzen, 
              Umgebungsgeräusche zu reduzieren und eine sanftere Routine zu etablieren.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              ADHS & Fokus
            </p>
            <h2 className="mt-3 text-xl font-semibold">Brown Noise & Fokus-Klänge</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Gestalte dein eigenes Hintergrund-Audio zum Lernen, Lesen und für konzentriertes Arbeiten 
              – ganz ohne visuelle Ablenkungen.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Video-Demo
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Erlebe Calma in Aktion
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Sieh dir an, wie sich Calma anfühlt – von intuitiven Mixen bis hin zu 
            hochwertigen Funktionen für Schlaf, Entspannung und Fokus.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20">
          <video
            className="h-auto w-full rounded-[1.5rem]"
            controls
            preload="metadata"
            playsInline
            poster="/screenshots/3_en.png"
            title="Calma App Demo Video"
            aria-label="Calma App Demo Video"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Dein Browser unterstützt das Video-Tag nicht.
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            App-Vorschau
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Ein Blick in die App
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Entdecke das schlichte Design von Calma und sieh, wie die App dir hilft, 
            beruhigende Klanglandschaften für jeden Moment zu gestalten.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Calma Mobile Interface mit Kategorien für Schlaf und Entspannung"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Calma Sound-Mixer zur Anpassung von weißem Rauschen"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/5_en.png"
              alt="Calma App Screenshot 3"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/7_en.png"
              alt="Calma Mixer Interface für individuelle Sound-Kombinationen"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Besondere Funktionen
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Mehr als nur Klänge
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calma bietet weit mehr als einfache Wiedergabe – entdecke Funktionen, 
            die deine tägliche Routine persönlicher und wertvoller machen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Brainwave Lab
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Stimme dich ein mit immersiven Audio-Experimenten
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Erfahre eine neue Tiefe der Ruhe mit Klangerlebnissen, die speziell für 
              Schlaf, Fokus und mentalen Reset entwickelt wurden.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Geführte Atmung
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Atme in einem sanfteren Rhythmus
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Sanfte visuelle Anleitungen verwandeln die App in ein echtes Beruhigungsritual, 
              das über passives Zuhören hinausgeht.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Nachthimmel-Ritual
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Ein stiller Moment der Entdeckung
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Verleihe deinem Tag einen Hauch von Magie mit einer Funktion, die 
              tägliche Ruhe spielerisch und emotional belohnend macht.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Warum Calma
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Ein bewussteres Erlebnis, mit Absicht gestaltet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calma ist darauf ausgelegt, sich elegant, fokussiert und emotional leicht anzufühlen. 
            Es hilft dir, eine bessere Umgebung zu schaffen – ohne Reibung oder Ballast.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Erschaffe deine eigene Atmosphäre</h3>
            <p className="mt-4 leading-7 text-white/70">
              Mische Klänge basierend auf deiner Stimmung und deinem Moment. Calma bietet 
              dir eine persönlichere Erfahrung als Standard-Apps.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Mehr Ruhe, weniger Stress</h3>
            <p className="mt-4 leading-7 text-white/70">
              Das Interface unterstützt deine Ruhe, nicht deine Ablenkung. Jeder Screen 
              ist darauf ausgelegt, einfach und einladend zu sein.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Eine App, viele tägliche Rituale</h3>
            <p className="mt-4 leading-7 text-white/70">
              Nutze Calma zum Einschlafen, zum Entspannen am Abend, bei der Arbeit 
              oder einfach, wenn du eine sanftere Akustik für deinen Tag brauchst.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Hochwertig und warm gestaltet</h3>
            <p className="mt-4 leading-7 text-white/70">
              Calma kombiniert einen polierten Look mit einem sanften emotionalen Ton, 
              damit du dich in der App sofort wohlfühlst.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Mehr entdecken
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Passend zu deiner Intention
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Besuche unsere spezialisierten Seiten für Schlaf, Entspannung oder Fokus, 
            um die Seite von Calma zu finden, die am besten zu dir passt.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/sleep-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Schlafen
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Schlaf-App
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Erfahre, wie Calma friedlichere Nächte, Abendroutinen und 
              personalisierte Schlaflandschaften unterstützt.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Zur Schlaf-Seite →
            </span>
          </a>

          <a
            href="/relaxing-sounds"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Entspannen
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Entspannende Klänge
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Besuche eine sanftere Seite von Calma für ruhige Abende, 
              mentalen Reset und tägliche Wohlfühlmomente.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Zur Entspannungs-Seite →
            </span>
          </a>

          <a
            href="/focus-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Fokus
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Fokus-App
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Sieh dir an, wie Calma eine ruhigere Umgebung für Deep Work, 
              Konzentration und Lernphasen schafft.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Zur Fokus-Seite →
            </span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Blog
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Lies unsere Ratgeber
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Erfahre mehr über Schlafklänge, weißes Rauschen und wie man eine bessere Abendroutine aufbaut.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Regenklänge für Schlaf & Fokus</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Warum stetige Regengeräusche ideal zum Beruhigen deines Geistes sind.
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Beste Schlafklänge</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Regen, weißes Rauschen und sanfte Klanglandschaften für die Nacht.
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Beste Lernklänge</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Entdecke, welche Klänge dir helfen können, konzentriert zu bleiben.
            </p>
          </a>
        </div>
      </section>
      
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Klang-Wissen
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Die Farben des Rauschens verstehen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Wusstest du, dass Rauschen Farben hat? Von der Maskierung von Ablenkungen bis hin zur Unterstützung bei ADHS – verschiedene Frequenzen erfüllen unterschiedliche Bedürfnisse.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              White Noise
            </div>
            <h3 className="text-xl font-semibold">Ideal zum Maskieren</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Decket alle hörbaren Frequenzen gleichermaßen ab. Ideal, um plötzliche Geräusche auszublenden.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Pink Noise
            </div>
            <h3 className="text-xl font-semibold">Ausgewogen & natürlich</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Tiefer als weißes Rauschen, ähnlich wie stetiger Regen oder Wind. Gut für die Schlafqualität.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Brown Noise
            </div>
            <h3 className="text-xl font-semibold">Fokus & ADHS Support</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Starker Bass-Anteil, wie ein entfernter Wasserfall. Beliebt bei Tiefenfokus und ADHS.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Green Noise
            </div>
            <h3 className="text-xl font-semibold">Natur-Harmonie</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Fokussiert auf mittlere Frequenzen, wie rauschende Blätter. Perfekt für natürliche Ruhe.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Lies den vollständigen Ratgeber zu Rauschfarben
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Was ist Calma?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma ist eine Sound-Mixer-App, die dir hilft, besser zu schlafen, 
              dich leichter zu entspannen und fokussiert zu bleiben.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Für wen ist Calma gedacht?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma ist für alle, die eine ruhigere Abendroutine, eine friedlichere Pause 
              oder fokussiertes Lernen und Arbeiten suchen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Kann ich meine eigenen Mixe erstellen?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja. Calma basiert auf der Idee, deine eigene Klangumgebung zu gestalten, 
              statt nur starren Titeln zuzuhören.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Ist Calma bereits verfügbar?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, Calma ist für Android verfügbar und wird kontinuierlich weiterentwickelt.
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Jetzt starten
          </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Lade Calma herunter und starte deine neue Routine
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Erstelle personalisierte Klanglandschaften für besseren Schlaf, ruhigere Abende 
              und tieferen Fokus mit einer schlichten App für jeden Tag.
            </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
              aria-label="Calma App bei Google Play herunterladen"
            >
              <Image
                src="/google-play-badge.png"
                alt="Jetzt bei Google Play"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
              aria-label="Calma App im App Store herunterladen"
            >
              <Image
                src="/apple-appstore-badge.png"
                alt="Im App Store laden"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Klang-Wissen
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Neues aus unserem Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            Alle Ratgeber ansehen
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">White vs. Pink vs. Brown Noise</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Was ist der Unterschied und welche Farbe passt zu deinem Bedürfnis?
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-sleep"
            className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Beste Sounds zum Einschlafen</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Ein Guide durch Regengeräusche, Ambient und sanfte Klangwelten.
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-studying"
            className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Sounds für maximale Konzentration</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Finde heraus, welches Audio-Setting dir hilft, fokussiert zu bleiben.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
