import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Support & Kontakt | Calma App',
  description: 'Erhalte Hilfe zur Calma App. Kontaktiere uns bei Fragen zu Schlafklängen, Funktionen, Feedback oder Vorschlägen.',
  alternates: {
    canonical: 'https://www.calmasounds.com/de/support',
  },
};

export default function SupportPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Support & Kontakt | Calma App",
    "description": "Erhalte Support für die Calma App, gib Feedback oder sende uns Feature-Anfragen.",
    "url": "https://www.calmasounds.com/de/support",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "calma.app@outlook.com",
      "url": "https://www.calmasounds.com/de/support"
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />


      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Wir sind für dich da
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Support & Kontakt
        </h1>
        <p className="mt-6 text-lg leading-7 text-white/70">
          Brauchst du Hilfe mit der Calma App, hast du einen Vorschlag oder möchtest du uns 
          einfach etwas mitteilen? Fülle das folgende Formular aus oder kontaktiere uns 
          direkt per E-Mail.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <ContactForm />
      </section>

    </main>
  );
}
