import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Calma vs BetterSleep | Najlepsza alternatywa",
  description:
    "Porównujesz Calma vs BetterSleep? BetterSleep ma śledzenie snu. Calma to najlepsza alternatywa, jeśli chcesz prostego miksera dźwięków offline bez subskrypcji.",
  keywords: [
    "calma vs bettersleep",
    "bettersleep alternatywa",
    "bettersleep bez subskrypcji",
    "mikser dźwięków do snu",
    "relax melodies alternatywa",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/calma-vs-bettersleep",
  },
  openGraph: {
    title: "Calma vs BetterSleep | Najlepsza alternatywa dla dźwięków do snu",
    description:
      "Porównujesz Calma vs BetterSleep? BetterSleep ma śledzenie snu. Calma to najlepsza alternatywa, jeśli chcesz prostego miksera dźwięków offline bez subskrypcji.",
    url: "https://www.calmasounds.com/pl/calma-vs-bettersleep",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma vs BetterSleep | Najlepsza alternatywa",
    description:
      "Porównujesz Calma vs BetterSleep? Odkryj najlepszą alternatywę dla dźwięków do snu offline bez subskrypcji.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy Calma to to samo co aplikacja BetterSleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie, Calma i BetterSleep to różne aplikacje. BetterSleep skupia się na śledzeniu snu, obszernej bibliotece historii i modelu rocznej subskrypcji. Calma skupia się wyłącznie na byciu mikserem dźwięków offline z jednorazowym dostępem.",
      },
    },
    {
      "@type": "Question",
      name: "Jaka jest najlepsza alternatywa dla aplikacji BetterSleep bez subskrypcji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jeśli używasz BetterSleep (dawniej Relax Melodies) tylko dla miksera dźwięków, Calma jest jedną z najlepszych alternatyw. Calma oferuje jednorazowy dostęp na zawsze, bez drogich miesięcznych lub rocznych subskrypcji.",
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
      "name": "Calma vs BetterSleep",
      "item": "https://www.calmasounds.com/pl/calma-vs-bettersleep"
    }
  ]
};

export default function CalmaVsBetterSleepPagePl() {
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
        title="Jaka jest różnica między aplikacjami Calma i BetterSleep?"
        description="BetterSleep to bogata w funkcje aplikacja oferująca śledzenie snu i historie na dobranoc w oparciu o model subskrypcyjny. Calma to prostsza, bardziej skoncentrowana alternatywa zapewniająca pięknie zaprojektowany offline'owy mikser dźwięków i biały szum z jednorazowym dożywotnim odblokowaniem."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Porównanie aplikacji
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Calma vs BetterSleep: Co wybrać?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Obie aplikacje pozwalają miksować dźwięki dla lepszego snu, ale służą różnym potrzebom. Przedstawiamy uczciwe, oparte na faktach porównanie, które pomoże Ci podjąć decyzję.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pobierz Calmę w Google Play"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Wypróbuj Calmę za darmo
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Wybierz BetterSleep, jeśli...</h2>
            <ul className="mt-6 space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Chcesz aktywnie śledzić fazy snu i chrapanie.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Lubisz mieć dostęp do ogromnej biblioteki historii na dobranoc.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                Nie masz problemu z opłacaniem rocznej subskrypcji za dostęp do funkcji premium.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-emerald-900/20 p-8">
            <h2 className="text-2xl font-semibold text-emerald-100">Wybierz Calmę, jeśli...</h2>
            <ul className="mt-6 space-y-4 text-emerald-100/70">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Chcesz głównie miksować własne dźwięki (jak deszcz i wiatr) bez bałaganu.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Nie znosisz subskrypcji i wolisz zapłacić raz za dożywotni dostęp.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Potrzebujesz aplikacji działającej w 100% offline bez konieczności zakładania konta.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                Wolisz minimalistyczny interfejs bez rozpraszaczy.
              </li>
            </ul>
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
              Czy Calma to to samo co aplikacja BetterSleep?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Nie, Calma i BetterSleep (dawniej Relax Melodies) to zupełnie inne aplikacje stworzone przez inne firmy. BetterSleep to platforma do śledzenia snu i słuchania bajek. Calma to wyspecjalizowany mikser dźwięków dający pełną kontrolę nad dźwiękami natury offline, bez śledzenia Twojego snu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Jaka jest najlepsza alternatywa dla aplikacji BetterSleep bez subskrypcji?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Jeśli używasz BetterSleep tylko dla jej miksera dźwięków i nie korzystasz ze śledzenia snu, Calma jest idealną alternatywą. Przechodząc do nas, rezygnujesz z cyklicznych opłat na rzecz jednorazowego dożywotniego odblokowania premium miksera offline.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
