import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aplikacja z Brązowym Szumem | Calma",
  description:
    "Stwórz spokojne miksy do snu z brązowym i białym szumem. Użyj aplikacji Calma, aby się zrelaksować, skupić uwagę i zasnąć.",
  keywords: [
    "aplikacja z białym szumem",
    "brązowy szum do snu",
    "brązowy szum aplikacja",
    "kojący brązowy szum",
    "brązowy szum dla niemowląt",
    "calma brązowy szum",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/brown-noise-app",
  },
  openGraph: {
    title: "Aplikacja z Brązowym Szumem | Calma",
    description:
    "Stwórz spokojne miksy do snu z brązowym i białym szumem. Użyj aplikacji Calma, aby się zrelaksować, skupić uwagę i zasnąć.",
    url: "https://www.calmasounds.com/pl/brown-noise-app",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplikacja z Brązowym Szumem | Calma",
    description:
    "Stwórz spokojne miksy do snu z brązowym i białym szumem. Użyj aplikacji Calma, aby się zrelaksować, skupić uwagę i zasnąć.",
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
      "item": "https://www.calmasounds.com/pl/brown-noise-app"
    }
  ]
},
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Czym jest szum brązowy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Szum brązowy to głęboki, basowy dźwięk o niskiej częstotliwości, przypominający grzmot lub wodospad. Jest łagodniejszy i bardziej relaksujący niż szum biały."
          }
        },
        {
          "@type": "Question",
          "name": "Czy szum brązowy pomaga w ADHD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tak, wiele osób z ADHD zgłasza poprawę koncentracji dzięki głębokiej, przewidywalnej naturze szumu brązowego, który maskuje rozpraszacze."
          }
        },
        {
          "@type": "Question",
          "name": "Szum biały czy brązowy - który jest lepszy do snu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Szum brązowy jest głębszy i często preferowany przez dorosłych do długiego relaksu. Szum biały lepiej maskuje nagłe hałasy. Calma pozwala miksować oba."
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
          Brązowy szum dla lepszego snu i spokojniejszego otoczenia
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
              Brązowy szum pomaga stworzyć bardziej stabilne tło dźwiękowe przed snem
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
              Calma jest zaprojektowana tak, aby brązowy szum stał się naturalną częścią Twojej rutyny,
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
            <h3 className="text-xl font-semibold text-white">Brązowy szum do snu</h3>
            <p className="mt-3 text-white/70">
              Dowiedz się, jak brązowy szum pomaga stworzyć stabilne otoczenie wieczorem i poprawić jakość odpoczynku.
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
            FAQ – Brązowy szum
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czym jest aplikacja z białym szumem?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              To aplikacja pomagająca stworzyć stały dźwięk tła, który wspiera sen, 
              relaksację i bardziej ciche środowisko akustyczne.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy brązowy szum pomaga w spaniu?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Wiele osób używa białego szumu, aby wyciszyć się przed snem i zredukować 
              wpływ rozpraszających dźwięków z otoczenia.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy Calma oferuje tylko brązowy szum?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Nie. Calma wspiera także dźwięki natury, relaksujące pejzaże dźwiękowe i miksy 
              do koncentracji, dzięki czemu możesz dostosować aplikację do swoich potrzeb.
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
