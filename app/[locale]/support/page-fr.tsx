import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Support & Contact | Calma App',
  description: 'Obtenez de l\'aide pour l\'application Calma. Contactez-nous pour toute question sur les sons pour dormir, les fonctionnalités de relaxation, vos retours et suggestions.',
  alternates: {
    canonical: 'https://www.calmasounds.com/fr/support',
  },
};

export default function SupportPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Support & Contact | Calma App",
    "description": "Obtenez de l'aide pour l'application Calma, donnez votre avis ou demandez de nouvelles fonctionnalités.",
    "url": "https://www.calmasounds.com/fr/support",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "calma.app@outlook.com",
      "url": "https://www.calmasounds.com/fr/support"
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
          Nous sommes là pour vous aider
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Support & Contact
        </h1>
        <p className="mt-6 text-lg leading-7 text-white/70">
          Besoin d'aide avec l'application Calma, une suggestion, ou simplement envie de nous saluer ? 
          Remplissez le formulaire ci-dessous ou contactez-nous directement par e-mail.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <ContactForm />
      </section>

    </main>
  );
}
