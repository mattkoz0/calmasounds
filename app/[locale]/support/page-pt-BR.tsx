import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Suporte & Contato | App Calma',
  description: 'Obtenha suporte para o aplicativo Calma. Entre em contato conosco para obter ajuda com sons para dormir, recursos de relaxamento, feedback e sugestões.',
  alternates: {
    canonical: 'https://www.calmasounds.com/pt-BR/support',
  },
};

export default function SupportPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Suporte & Contato | App Calma",
    "description": "Obtenha suporte para o aplicativo Calma, forneça feedback ou solicite novos recursos.",
    "url": "https://www.calmasounds.com/pt-BR/support",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "suporte ao cliente",
      "email": "calma.app@outlook.com",
      "url": "https://www.calmasounds.com/pt-BR/support"
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
          Estamos aqui para ajudar
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Suporte & Contato
        </h1>
        <p className="mt-6 text-lg leading-7 text-white/70">
          Precisa de ajuda com o aplicativo Calma, tem alguma sugestão ou apenas quer dar um oi?
          Preencha o formulário abaixo ou entre em contato diretamente por e-mail.
        </p>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <ContactForm />
      </section>

    </main>
  );
}
