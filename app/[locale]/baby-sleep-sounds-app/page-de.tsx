import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenlose Baby Schlaf App | Weißes Rauschen für Babys | Calma",
  description:
    "Suchen Sie weißes Rauschen für Ihr Baby? Beruhigen Sie Ihr Neugeborenes mit sanftem Rauschen, Regen und Mutterleib-Klängen. 100% kostenlos, ohne Werbung, offline nutzbar.",
  keywords: [
    "Baby Schlaf-Sounds App",
    "Weißes Rauschen für Babys",
    "Einschlafhilfe Neugeborene",
    "Baby Einschlaf-Musik",
    "beruhigende Klänge für Babys",
    "Baby Abendroutine",
    "Baby White Noise App",
    "Neugeborene Schlaf App kostenlos",
    "braunes Rauschen Baby",
    "Mutterleib Geräusche Baby",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/baby-sleep-sounds-app",
  },
  openGraph: {
    title: "Kostenlose Baby Schlaf App | Weißes Rauschen | Calma",
    description:
    "Weißes Rauschen, Regen und Mutterleib-Klänge für friedlichen Babyschlaf. 100% kostenlos, ohne Werbung.",
    url: "https://www.calmasounds.com/de/baby-sleep-sounds-app",
    siteName: "Calma",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Schlaf App | Weißes Rauschen | Calma",
    description:
    "Beruhigen Sie Ihr Baby mit sanftem Rauschen. 100% kostenlos, offline nutzbar.",
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
      "name": "Baby Schlaf-Sounds",
      "item": "https://www.calmasounds.com/de/baby-sleep-sounds-app"
    }
  ]
};

export default function BabySleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Baby Schlaf-Sounds
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Beruhigende Klänge für den friedlichen Schlaf deines Babys
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma ist eine elegante und einfach zu bedienende Baby Schlaf-Sounds App. Sie bietet 
          gleichmäßiges weißes Rauschen, sanften Regen und tiefe Frequenzen, die an die 
          Umgebung im Mutterleib erinnern. Beruhige dein Baby schneller und schaffe eine 
          vertraute Atmosphäre für jedes Nickerchen.
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
            <h2 className="text-2xl font-semibold">Störgeräusche ausblenden</h2>
            <p className="mt-4 leading-7 text-white/70">
              Babys schrecken leicht bei plötzlichem Lärm im Haus auf. Das rhythmische 
              weiße Rauschen in Calma bildet einen schützenden Klangteppich für längeren Schlaf.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Geborgene Atmosphäre</h2>
            <p className="mt-4 leading-7 text-white/70">
              Im Mutterleib war es nie ganz still. Braunes Rauschen und sanfte 
              Herzschlag-Klänge erinnern dein Neugeborenes an diese sichere Umgebung.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Individueller Mix</h2>
            <p className="mt-4 leading-7 text-white/70">
              Jedes Baby ist anders. Mische in Calma einfach einen summenden Ventilator mit 
              sanftem Regen, um genau die Frequenz zu finden, die dein Kind beruhigt.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Fragen zu Baby Schlaf-Sounds
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Ist weißes Rauschen sicher für Babys?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja, bei richtiger Anwendung. Halte die Lautstärke unter 50 dB (Gesprächslautstärke), stelle das Gerät mindestens 2 Meter vom Bettchen entfernt auf und verwende einen Timer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Welches Rauschen ist am besten für Neugeborene?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Braunes Rauschen mit tiefen Frequenzen simuliert die gedämpften Geräusche aus dem Mutterleib und wird von vielen Neugeborenen bevorzugt. Weißes Rauschen ist ebenfalls sehr wirksam.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Benötigt Calma eine Internetverbindung?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Nein. Calma funktioniert komplett offline – perfekt für Reisen, den Kinderwagen oder das nächtliche Stillen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Wie lange sollte weißes Rauschen für Babys laufen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Experten empfehlen 20–45 Minuten. Calma hat einen Sleep-Timer, der sich automatisch abschaltet.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kann ich verschiedene Klänge für mein Baby mischen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Ja! Jedes Baby ist anders. Calma lässt dich weißes Rauschen mit sanftem Regen, Ventilator oder Herzschlag-Klängen mischen, um die perfekte Frequenz zu finden.
            </p>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Ist weißes Rauschen sicher für Babys?","acceptedAnswer":{"@type":"Answer","text":"Ja, bei Lautstärke unter 50 dB und mindestens 2 Meter Abstand."}},{"@type":"Question","name":"Welches Rauschen für Neugeborene?","acceptedAnswer":{"@type":"Answer","text":"Braunes Rauschen simuliert Mutterleib-Geräusche. Weißes Rauschen ist ebenfalls wirksam."}},{"@type":"Question","name":"Funktioniert Calma offline?","acceptedAnswer":{"@type":"Answer","text":"Ja, komplett ohne Internet."}},{"@type":"Question","name":"Wie lange sollte weißes Rauschen laufen?","acceptedAnswer":{"@type":"Answer","text":"20–45 Minuten. Calma hat einen automatischen Sleep-Timer."}},{"@type":"Question","name":"Kann ich Klänge mischen?","acceptedAnswer":{"@type":"Answer","text":"Ja, mische weißes Rauschen mit Regen, Ventilator oder Herzschlag."}}]}) }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Hilf deinem Baby, friedlich zu schlafen
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Lade Calma bei Google Play herunter und erschaffe die perfekte 
            Schlafumgebung für dein Kind.
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
