import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Calma Support & Contact',
  description: 'Get support for Calma app. Contact us for help with sleep sounds, relaxation features, feedback and suggestions.',
  alternates: {
    canonical: 'https://www.calmasounds.com/support',
  },
};

export default function SupportPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Support & Contact | Calma App",
    "description": "Get support for the Calma app, provide feedback or request new features.",
    "url": "https://www.calmasounds.com/support",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "calma.app@outlook.com",
      "url": "https://www.calmasounds.com/support"
    }
  };


  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {/* Header */}


      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          We're here to help
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Support & Contact
        </h1>
        <p className="mt-6 text-lg leading-7 text-white/70">
          Need help with the Calma app, have a suggestion, or just want to say hi? 
          Fill out the form below or reach out directly via email.
        </p>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <ContactForm />
      </section>

      {/* Footer */}

    </main>
  );
}
