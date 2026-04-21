import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Soporte y Contacto | Calma App',
  description: 'Obtenga soporte para la aplicación Calma. Contáctenos para pedir ayuda con problemas, solicitar nuevas funciones o dejarnos sus comentarios.',
  alternates: {
    canonical: 'https://www.calmasounds.com/es/support',
  },
};

export default function SupportPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Soporte y Contacto | Calma App",
    "description": "Obtenga soporte para la aplicación Calma, dejenos sus comentarios o plantee solicitudes de nuevas funcionalidades.",
    "url": "https://www.calmasounds.com/es/support",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "calma.app@outlook.com",
      "url": "https://www.calmasounds.com/es/support"
    }
  };

  const footerLinks = [
    { name: 'App sonidos para dormir', href: '/sleep-sounds-app' },
    { name: 'Sonidos relajantes', href: '/relaxing-sounds' },
    { name: 'App sonidos de concentración', href: '/focus-sounds-app' },
    { name: 'App ruido blanco', href: '/white-noise-app' },
    { name: 'App mezcladora', href: '/sound-mixer-app' },
    { name: 'Ondas binaurales', href: '/blog/binaural-beats-for-sleep-and-focus' },
  ];

  const guideLinks = [
    { name: 'Sonidos de lluvia vs ruido blanco', href: '/blog/rain-sounds-vs-white-noise' },
    { name: 'Mejores sonidos para dormir', href: '/blog/best-sounds-for-sleep' },
    { name: 'Rutinas para acostarse', href: '/blog/how-to-build-a-bedtime-routine' },
    { name: 'Soporte', href: '/support' },
  ];

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
          Estamos aquí para ayudar
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Soporte y Contacto
        </h1>
        <p className="mt-6 text-lg leading-7 text-white/70">
          ¿Necesitas ayuda con la aplicación Calma, tienes alguna sugerencia o quieres informarnos de algún problema? 
          Rellena el siguiente formulario o ponte en contacto con nosotros por correo.
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
