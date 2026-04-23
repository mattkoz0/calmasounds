import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | Calma",
  description:
    "Lies die Nutzungsbedingungen für Calma, einschließlich unseres Engagements für deine Privatsphäre und der Regeln für die App-Nutzung.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">


      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Nutzungsbedingungen </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Zuletzt aktualisiert: 13. April 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Annahme der Bedingungen</h2>
            <p>
              Durch den Zugriff auf und die Nutzung der Website und Anwendung von Calma 
              akzeptierst du diese Vereinbarung und erklärst dich damit einverstanden, 
              an diese Bedingungen gebunden zu sein. Wenn du diesen Bedingungen nicht 
              zustimmst, nutze diesen Dienst bitte nicht.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Nutzungslizenz</h2>
            <p>
              Calma gewährt dir eine persönliche, nicht exklusive, nicht übertragbare und 
              widerrufbare Lizenz zur Nutzung der App für deine persönlichen, nicht 
              kommerziellen Zwecke. Du darfst die Anwendung nicht dekompilieren, 
              zurückentwickeln oder versuchen, den Quellcode der Anwendung abzuleiten.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Inhalte und Urheberrecht</h2>
            <p>
              Alle Soundscapes, Grafiken und Interface-Designs sind das geistige Eigentum 
              von Calma. Du kannst persönliche Mixe für den eigenen Gebrauch erstellen, 
              darfst aber keine Audio-Inhalte als eigenständige Dateien oder als Teil 
              anderer Produkte weiterverbreiten.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Haftungsausschluss</h2>
            <p>
              Calma wird "wie besehen" bereitgestellt. Obwohl wir ein hochwertiges 
              Erlebnis für Schlaf und Entspannung anstreben, garantieren wir keine 
              spezifischen gesundheitlichen Ergebnisse. Calma ist kein Medizinprodukt 
              und sollte professionelle medizinische Beratung oder Behandlungen bei 
              Schlafstörungen nicht ersetzen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Haftungsbeschränkung</h2>
            <p>
              In keinem Fall haftet Calma für Schäden, die aus der Nutzung oder der 
              Unfähigkeit zur Nutzung der Dienste entstehen, selbst wenn wir auf die 
              Möglichkeit solcher Schäden hingewiesen wurden.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Änderungen der Bedingungen</h2>
            <p>
              Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. 
              Deine fortgesetzte Nutzung des Dienstes nach Änderungen gilt als 
              Annahme der neuen Nutzungsbedingungen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Kontaktinformationen</h2>
            <p>
              Wenn du Fragen zu diesen Bedingungen hast, kontaktiere uns bitte unter:
            </p>
            <p className="font-semibold text-white">
              <a href="mailto:calma.app@outlook.com" className="underline underline-offset-4 hover:text-white/80">
                calma.app@outlook.com
              </a>
            </p>
          </section>
        </div>
      </section>


    </main>
  );
}
