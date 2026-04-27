import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: '고객지원 및 문의 | Calma 앱',
  description: 'Calma 앱 이용에 도움이 필요하신가요? 수면 유도 소리, 휴식 기능, 피드백 및 제안 등 궁금한 점이 있다면 언제든 문의해 주세요.',
  alternates: {
    canonical: 'https://www.calmasounds.com/ko/support',
  },
};

export default function SupportPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "고객지원 및 문의 | Calma 앱",
    "description": "Calma 앱에 대한 지원을 받거나 피드백 및 새로운 기능을 제안하세요.",
    "url": "https://www.calmasounds.com/ko/support",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "calma.app@outlook.com",
      "url": "https://www.calmasounds.com/ko/support"
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
          무엇을 도와드릴까요?
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          고객지원 및 문의
        </h1>
        <p className="mt-6 text-lg leading-7 text-white/70">
          앱 이용 중 불편한 점이 있거나, 제안하고 싶은 기능이 있으신가요? 
          아래 양식을 작성해 주시면 최대한 빠르게 답변해 드리겠습니다.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <ContactForm />
      </section>

    </main>
  );
}
