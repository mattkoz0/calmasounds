import type { Metadata } from "next";
import Image from "next/image";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Aplikacja do snu offline w podróży | Calma",
  description:
    "Szukasz aplikacji z dźwiękami do snu bez internetu? Calma działa w 100% offline. Ciesz się spersonalizowanymi dźwiękami w trybie samolotowym i w podróży.",
  keywords: [
    "aplikacja do snu offline",
    "dźwięki do snu bez internetu",
    "aplikacja do snu tryb samolotowy",
    "dźwięki do snu w podróży",
    "dźwięki do snu bez wifi",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/offline-sleep-sounds-app",
  },
  openGraph: {
    title: "Aplikacja do snu offline w podróży | Calma",
    description:
      "Szukasz aplikacji z dźwiękami do snu bez internetu? Calma działa w 100% offline. Ciesz się spersonalizowanymi dźwiękami w trybie samolotowym i w podróży.",
    url: "https://www.calmasounds.com/pl/offline-sleep-sounds-app",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplikacja do snu offline w podróży | Calma",
    description:
      "Szukasz aplikacji z dźwiękami do snu bez internetu? Calma działa w 100% offline.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy Calma działa offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, po pobraniu Calma działa całkowicie offline. Nie potrzebujesz Wi-Fi ani połączenia komórkowego, aby miksować i słuchać dźwięków do snu.",
      },
    },
    {
      "@type": "Question",
      name: "Czy mogę używać Calmy w samolocie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oczywiście. Calma idealnie nadaje się do lotów, ponieważ działa w pełni w trybie samolotowym bez buforowania ani ekranów ładowania.",
      },
    },
    {
      "@type": "Question",
      name: "Czy istnieje aplikacja z dźwiękami do snu, która nie zużywa danych?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, Calma to aplikacja stawiająca na prywatność, która nie przesyła strumieniowo audio. Wszystkie dźwięki są przetwarzane lokalnie na Twoim urządzeniu, co oznacza, że nie zużywa danych komórkowych podczas odtwarzania.",
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
      "name": "Aplikacja do snu offline",
      "item": "https://www.calmasounds.com/pl/offline-sleep-sounds-app"
    }
  ]
};

export default function OfflineSleepAppPagePl() {
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
        description="Calma to aplikacja z dźwiękami do snu i relaksacji, która działa całkowicie offline. Pozwala użytkownikom tworzyć spersonalizowane pejzaże dźwiękowe bez użycia internetu i Wi-Fi. Oferuje jednorazowy dożywotni dostęp bez konieczności subskrypcji."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Przyjazna Trybowi Samolotowemu
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Aplikacja z dźwiękami do snu offline dla głębokiego relaksu wszędzie
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Wyłącz Wi-Fi i odłącz się od świata. Calma działa w <strong>100% offline</strong>, dzięki czemu możesz cieszyć się spersonalizowanymi pejzażami dźwiękowymi bez rozpraszaczy, zużycia danych i buforowania.
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
            <h2 className="text-2xl font-semibold">Idealna w Podróży</h2>
            <p className="mt-4 leading-7 text-white/70">
              Niezależnie od tego, czy czeka Cię długi lot, podróż pociągiem czy pobyt w hotelu ze słabym Wi-Fi, tryb offline w Calmie sprawia, że Twoje dźwięki do snu są zawsze gotowe.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Zerowe Zużycie Danych</h2>
            <p className="mt-4 leading-7 text-white/70">
              W przeciwieństwie do aplikacji streamingowych, Calma nie zużywa Twoich danych komórkowych. Dźwięki są miksowane bezpośrednio na Twoim urządzeniu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Prywatność Przede Wszystkim</h2>
            <p className="mt-4 leading-7 text-white/70">
              Nie musisz się martwić ciągłym śledzeniem. Ustaw telefon w tryb samolotowy, aby zmniejszyć ekspozycję na promieniowanie i spać spokojnie.
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
              Czy Calma działa offline?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak, po pobraniu Calma działa całkowicie offline. Nie potrzebujesz Wi-Fi ani połączenia komórkowego, aby miksować i słuchać dźwięków do snu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy mogę używać Calmy w samolocie?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Oczywiście. Calma idealnie nadaje się do lotów, ponieważ działa w pełni w trybie samolotowym bez buforowania ani ekranów ładowania.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy istnieje aplikacja z dźwiękami do snu, która nie zużywa danych?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak, Calma to aplikacja stawiająca na prywatność, która nie przesyła strumieniowo audio. Wszystkie dźwięki są przetwarzane lokalnie na Twoim urządzeniu, co oznacza, że nie zużywa danych komórkowych podczas odtwarzania.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
