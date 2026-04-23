import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Pomoc i Kontakt | Calma',
  description: 'Uzyskaj pomoc techniczną dla aplikacji Calma. Skontaktuj się z nami w sprawie dźwięków do snu, funkcji relaksacyjnych, podziel się opinią lub sugestiami.',
  alternates: {
    canonical: 'https://www.calmasounds.com/pl/support',
  },
};

export default function SupportPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Pomoc i Kontakt | Calma",
    "description": "Uzyskaj wsparcie dla aplikacji Calma, prześlij opinię lub poproś o nowe funkcje.",
    "url": "https://www.calmasounds.com/pl/support",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "calma.app@outlook.com",
      "url": "https://www.calmasounds.com/pl/support"
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />


      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Jesteśmy tutaj, aby pomóc
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Pomoc i Kontakt
        </h1>
        <p className="mt-6 text-lg leading-7 text-white/70">
          Potrzebujesz pomocy z aplikacją Calma, masz sugestię lub po prostu chcesz się przywitać?
          Wypełnij poniższy formularz lub skontaktuj się z nami bezpośrednio przez e-mail.
        </p>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <ContactForm />
      </section>

    </main>
  );
}
