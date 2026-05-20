import type { Metadata } from "next";
import Image from "next/image";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Najlepsza aplikacja do snu bez subskrypcji | Calma",
  description:
    "Szukasz aplikacji z dźwiękami do snu bez drogich subskrypcji? Calma oferuje jednorazowy dostęp do spersonalizowanych dźwięków do snu i białego szumu.",
  keywords: [
    "aplikacja do snu bez subskrypcji",
    "aplikacja bez abonamentu",
    "jednorazowa płatność aplikacja do snu",
    "darmowe dźwięki do snu",
    "dożywotni dostęp aplikacja do snu",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/best-sleep-sounds-app-without-subscription",
  },
  openGraph: {
    title: "Najlepsza aplikacja do snu bez subskrypcji | Calma",
    description:
      "Szukasz aplikacji z dźwiękami do snu bez drogich subskrypcji? Calma oferuje jednorazowy dostęp do spersonalizowanych dźwięków do snu i białego szumu.",
    url: "https://www.calmasounds.com/pl/best-sleep-sounds-app-without-subscription",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Najlepsza aplikacja do snu bez subskrypcji | Calma",
    description:
      "Szukasz aplikacji z dźwiękami do snu bez drogich subskrypcji? Calma oferuje jednorazowy dostęp do spersonalizowanych dźwięków do snu.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy istnieje aplikacja do snu bez subskrypcji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, Calma to aplikacja premium z dźwiękami do snu, która nie wymaga subskrypcji. Oferuje darmową wersję oraz jednorazowe, dożywotnie odblokowanie pełnego dostępu.",
      },
    },
    {
      "@type": "Question",
      name: "Czy aplikacje do snu są warte miesięcznej opłaty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wiele aplikacji do snu pobiera wysokie miesięczne lub roczne opłaty. Z Calmą całkowicie omijasz cykliczne opłaty, decydując się na jedną płatność za dożywotni dostęp.",
      },
    },
    {
      "@type": "Question",
      name: "Czy Calma działa offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, Calma działa całkowicie offline, co czyni ją idealną aplikacją do snu na podróż lub gdy chcesz wyłączyć Wi-Fi na noc.",
      },
    }
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Strona główna",
      "item": "https://www.calmasounds.com/pl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Aplikacja do snu bez subskrypcji",
      "item": "https://www.calmasounds.com/pl/best-sleep-sounds-app-without-subscription"
    }
  ]
};

export default function BestSleepAppNoSubscriptionPagePl() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AiDefinition 
        title="Czym jest Calma?"
        description="Calma to aplikacja z dźwiękami do snu i relaksacji, która nie wymaga subskrypcji. Pozwala użytkownikom tworzyć spersonalizowane pejzaże dźwiękowe, mieszając deszcz, ocean, biały szum i dźwięki natury. Idealnie sprawdza się w przypadku problemów ze snem i brakiem skupienia."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Bez Subskrypcji
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Najlepsza aplikacja do snu bez subskrypcji
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Masz dość „wynajmowania” swojego relaksu? Calma to pięknie prosta aplikacja z dźwiękami do snu, która 
          pomaga tworzyć spersonalizowane pejzaże dźwiękowe oferując <strong>jednorazowe odblokowanie dożywotnie</strong>. 
          Żadnych miesięcznych opłat, żadnych odnowień, tylko spokój.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pobierz Calmę w Google Play"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Pobierz z Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pobierz Calmę w App Store"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Pobierz z App Store
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Płacisz Raz, Masz Zawsze</h2>
            <p className="mt-4 leading-7 text-white/70">
              Przestań płacić za sen każdego miesiąca. Z dożywotnim odblokowaniem zyskujesz dostęp do wszystkich dźwięków premium, funkcji Brainwave Lab i przyszłych aktualizacji na zawsze.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Działa 100% Offline</h2>
            <p className="mt-4 leading-7 text-white/70">
              Po pobraniu, Calma działa całkowicie offline. Idealna do podróży, na pokład samolotu, lub gdy włączasz tryb samolotowy na noc.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Mikser Dźwięków Premium</h2>
            <p className="mt-4 leading-7 text-white/70">
              Miksuj wysokiej jakości dźwięki deszczu, fal oceanu, biały szum i brązowy szum, aby stworzyć idealne, spersonalizowane tło do snu.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Często Zadawane Pytania
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy istnieje aplikacja do snu bez subskrypcji?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak, Calma to aplikacja premium z dźwiękami do snu, która nie wymaga subskrypcji. Oferuje darmową wersję oraz jednorazowe, dożywotnie odblokowanie pełnego dostępu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy aplikacje do snu są warte miesięcznej opłaty?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Wiele aplikacji do snu pobiera wysokie miesięczne lub roczne opłaty. Z Calmą całkowicie omijasz cykliczne płatności, decydując się na jedną opłatę za dożywotni dostęp do naszego miksera offline.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy Calma działa offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak, Calma działa całkowicie offline, co czyni ją idealną aplikacją do snu na podróż lub gdy chcesz wyłączyć Wi-Fi na noc, aby zmniejszyć rozpraszacze.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
