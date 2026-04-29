import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'サポートと連絡先 | Calmaアプリ',
  description: 'Calmaアプリのサポートを受けましょう。睡眠音、リラクゼーション機能、フィードバック、提案についてのお問い合わせはこちらから。',
  alternates: {
    canonical: 'https://www.calmasounds.com/ja/support',
  },
};

export default function SupportPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "サポートと連絡先 | Calmaアプリ",
    "description": "Calmaアプリのサポートを受け、フィードバックを提供し、新機能をリクエストしてください。",
    "url": "https://www.calmasounds.com/ja/support",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "calma.app@outlook.com",
      "url": "https://www.calmasounds.com/ja/support"
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
          私たちは助けるためにここにいます
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          サポートと連絡先
        </h1>
        <p className="mt-6 text-lg leading-7 text-white/70">
          Calmaアプリのヘルプが必要ですか？提案がありますか？それとも単に挨拶したいですか？下のフォームに記入するか、メールで直接ご連絡ください。
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
