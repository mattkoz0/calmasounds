import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Support & Contact | Calma App',
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

  const footerLinks = [
    { name: 'Sleep sounds app', href: '/sleep-sounds-app' },
    { name: 'Relaxing sounds', href: '/relaxing-sounds' },
    { name: 'Focus sounds app', href: '/focus-sounds-app' },
    { name: 'White noise app', href: '/white-noise-app' },
    { name: 'Sound mixer app', href: '/sound-mixer-app' },
    { name: 'Binaural beats', href: '/blog/binaural-beats-for-sleep-and-focus' },
  ];

  const guideLinks = [
    { name: 'Rain sounds vs white noise', href: '/blog/rain-sounds-vs-white-noise' },
    { name: 'Best sounds for sleep', href: '/blog/best-sounds-for-sleep' },
    { name: 'Bedtime routine guide', href: '/blog/how-to-build-a-bedtime-routine' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Calma Sounds logo - Sleep & Relax App"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <Link href="/#features" className="transition hover:text-white">
              Features
            </Link>
            <Link href="/#faq" className="transition hover:text-white">
              FAQ
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="/support" className="text-white">
              Support
            </Link>
          </nav>

          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Calma on Google Play Store (opens in a new window)"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Get Calma
          </a>
        </div>
      </header>

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
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          <div>
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Calma logo"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm leading-7 text-white/60">
              A beautifully simple app for sleep, relaxation, focus and personalized
              soundscapes.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Product
            </h4>
            <ul className="mt-4 space-y-3 text-white/70">
              {footerLinks.map((link) => (
                <li key={link.href} className="flex">
                  <Link href={link.href} className="transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Guides & Support
            </h4>
            <ul className="mt-4 space-y-3 text-white/70">
              {guideLinks.map((link) => (
                <li key={link.href} className="flex">
                  <Link href={link.href} className="transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 border-t border-white/5 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Calma. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
