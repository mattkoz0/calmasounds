import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aplikacja z Białym Szumem do Snu | Calma",
  description:
    "Stwórz spokojne miksy do snu z białym, różowym i brązowym szumem. Użyj aplikacji Calma, aby się zrelaksować i zasnąć.",
  keywords: [
    "aplikacja z białym szumem",
    "biały szum do snu",
    "biały szum aplikacja",
    "kojący biały szum",
    "biały szum dla niemowląt",
    "calma biały szum",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/white-noise-app",
  },
  openGraph: {
    title: "Aplikacja z Białym Szumem do Snu | Calma",
    description:
    "Stwórz spokojne miksy do snu z białym, różowym i brązowym szumem. Użyj aplikacji Calma, aby się zrelaksować i zasnąć.",
    url: "https://www.calmasounds.com/pl/white-noise-app",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplikacja z Białym Szumem do Snu | Calma",
    description:
    "Stwórz spokojne miksy do snu z białym, różowym i brązowym szumem. Użyj aplikacji Calma, aby się zrelaksować i zasnąć.",
  },
};

const combinedJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Calma - Sleep Sounds & Relax",
      "applicationCategory": "HealthAndFitnessApplication",
      "operatingSystem": "ANDROID, IOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      }
    },
    {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.calmasounds.com/pl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Aplikacja z białym szumem",
      "item": "https://www.calmasounds.com/pl/white-noise-app"
    }
  ]
},
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Jaka jest najlepsza darmowa aplikacja z białym szumem?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Calma oferuje proste, pozbawione rozpraszaczy środowisko do miksowania białego szumu z dźwiękami natury, bez inwazyjnych reklam, które mogłyby Cię obudzić."
            }
        },
        {
            "@type": "Question",
            "name": "Czy biały szum pomaga w zasypianiu?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tak. Biały szum działa jak akustyczny koc, który maskuje nagłe hałasy, takie jak ruch uliczny czy szczekanie psów, pomagając mózgowi się zrelaksować."
            }
        },
        {
            "@type": "Question",
            "name": "Jak używać białego szumu do nauki?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Do nauki zalecamy ustawienie stałej bazy białego lub brązowego szumu, zmieszanego z lekkim deszczem. Pomaga to utrzymać koncentrację i maskuje domowe rozpraszacze."
            }
        }
    ]
}
  ]
};

export default function WhiteNoiseAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Aplikacja z białym szumem
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Biały szum dla lepszego snu i spokojniejszego otoczenia
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma to pięknie prosta aplikacja z białym szumem, która pomaga tworzyć
          łagodniejsze, kontrolowane środowisko dźwiękowe dla snu, relaksu i
          codziennego spokoju. Używaj jej, aby wspierać rutyny wieczorne, redukować
          rozpraszający hałas i budować bardziej stabilną atmosferę wokół siebie.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pobierz Calmę ze sklepu Google Play (otwiera się w nowym oknie)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Pobierz w Google Play
          </a>

          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pobierz Calmę z App Store (otwiera się w nowym oknie)"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Pobierz w App Store
          </a>

          <a
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Wróć do strony głównej
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Wsparcie zdrowego snu</h2>
            <p className="mt-4 leading-7 text-white/70">
              Biały szum pomaga stworzyć bardziej stabilne tło dźwiękowe przed snem
              i łagodniejsze przejście w fazę odpoczynku.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Redukcja rozpraszaczy</h2>
            <p className="mt-4 leading-7 text-white/70">
              Używaj kontrolowanej warstwy audio, aby złagodzić nagłe dźwięki otoczenia
              i stworzyć spokojniejszą przestrzeń wokół Ciebie.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Prostota i spokój</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma jest zaprojektowana tak, aby biały szum stał się naturalną częścią Twojej rutyny,
              a nie tylko technicznym narzędziem.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Podgląd aplikacji
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Doswiadcz spokoju z aplikacją Calma
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              priority
              alt="Interfejs aplikacji mobilnej Calma pokazujący listę dźwięków i kategorii"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              priority
              alt="Interfejs białego szumu Calma do personalizacji dźwięku"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mikser dźwięków Calma"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interfejs miksera do tworzenia własnych miksów białego szumu"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Poradniki i Wiedza
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Dowiedz się więcej o białym szumie
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/white-noise-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Biały szum do snu</h3>
            <p className="mt-3 text-white/70">
              Dowiedz się, jak biały szum pomaga stworzyć stabilne otoczenie wieczorem i poprawić jakość odpoczynku.
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Wyjaśnienie kolorów szumu</h3>
            <p className="mt-3 text-white/70">
              Poznaj różnice między białym, różowym, brązowym i zielonym szumem, aby znaleźć swój idealny dźwięk.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ – Biały szum
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Jaka jest najlepsza darmowa aplikacja z białym szumem?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma oferuje proste, pozbawione rozpraszaczy środowisko do miksowania białego szumu z dźwiękami natury, bez inwazyjnych reklam, które mogłyby Cię obudzić.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy biały szum pomaga w zasypianiu?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak. Biały szum działa jak akustyczny koc, który maskuje nagłe hałasy, takie jak ruch uliczny czy szczekanie psów, pomagając mózgowi się zrelaksować.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Jak używać białego szumu do nauki?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Do nauki zalecamy ustawienie stałej bazy białego lub brązowego szumu, zmieszanego z lekkim deszczem. Pomaga to utrzymać koncentrację i maskuje domowe rozpraszacze.
            </p>
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Wypróbuj Calmę dla snu i codziennego spokoju
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Pobierz Calmę z Google Play i stwórz wyciszone środowisko audio 
            dzięki białemu szumowi i spersonalizowanym pejzażom dźwiękowym.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pobierz Calmę ze sklepu Google Play"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pobierz Calmę z App Store"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              App Store
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
