import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Calma",
  description:
    "Lies unsere Datenschutzerklärung, um zu erfahren, wie Calma deine Daten erhebt, nutzt und schützt.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">


      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl"> Datenschutzerklärung </h1>
        <p className="mt-4 text-sm text-white/50 italic"> Zuletzt aktualisiert: 13. April 2026 </p>

        <div className="mt-12 space-y-12 leading-8 text-white/75">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Einleitung</h2>
            <p>
              Bei Calma setzen wir uns für den Schutz deiner Privatsphäre ein. Diese 
              Datenschutzerklärung erläutert, wie wir Informationen erheben, nutzen und 
              schützen, wenn du unsere Website (calmasounds.com) besuchst oder die 
              Calma-Anwendung nutzt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Erhobene Informationen</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white/90">Personenbezogene Daten</h3>
              <p>
                Wir erheben standardmäßig keine personenbezogenen Daten. Wenn du unseren 
                Support per E-Mail kontaktierst, verwenden wir deine E-Mail-Adresse 
                ausschließlich zur Beantwortung deiner Anfrage.
              </p>
              
              <h3 className="text-xl font-medium text-white/90">Nutzungsdaten & Analysen</h3>
              <p>
                Wir verwenden Google Analytics, um zu verstehen, wie Besucher mit unserer 
                Website interagieren. Dieser Dienst erhebt anonymisierte Informationen 
                wie deine IP-Adresse (anonymisiert), den Browsertyp und die besuchten Seiten. 
                Diese Daten helfen uns, das Nutzererlebnis und die Klarheit unserer Inhalte zu verbessern.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Cookies</h2>
            <p>
              Cookies sind kleine Textdateien, die auf deinem Gerät gespeichert werden und 
              uns helfen, den Website-Traffic zu analysieren und dein Erlebnis zu optimieren. 
              Wir verwenden Performance- und Analyse-Cookies von Google Analytics. Du kannst 
              Cookies über das Zustimmungsbanner auf unserer Website akzeptieren oder ablehnen.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Wie wir deine Informationen nutzen</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zur Bereitstellung und Wartung unseres Dienstes.</li>
              <li>Um dich über Änderungen an unserem Dienst zu informieren.</li>
              <li>Zur Kundenbetreuung und zum Support.</li>
              <li>Zur Überwachung der Nutzung und Verbesserung der Performance.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Datensicherheit</h2>
            <p>
              Die Sicherheit deiner Daten ist uns wichtig, aber bedenke, dass keine 
              Übertragung über das Internet und keine elektronische Speicherung zu 100 % 
              sicher ist. Obwohl wir uns bemühen, kommerziell akzeptable Mittel zum 
              Schutz deiner Informationen einzusetzen, können wir keine absolute Sicherheit garantieren.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Privatsphäre von Kindern</h2>
            <p>
              Unser Dienst richtet sich nicht an Personen unter 13 Jahren. Wir erheben 
              nicht wissentlich personenbezogene Daten von Kindern unter 13 Jahren.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Kontakt</h2>
            <p>
              Wenn du Fragen zu dieser Datenschutzerklärung hast, kontaktiere uns bitte unter:
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
