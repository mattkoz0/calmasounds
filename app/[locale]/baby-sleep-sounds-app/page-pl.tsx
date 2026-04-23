import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dźwięki do snu dla niemowląt | Calma",
  description:
    "Odkryj Calmę – aplikację z dźwiękami do snu dla niemowląt, oferującą kojący biały szum, łagodny deszcz i uspokajającą atmosferę, stworzoną, by pomóc Twojemu dziecku spać spokojnie.",
  keywords: [
    "dźwięki do snu dla niemowląt",
    "biały szum dla dzieci",
    "aplikacja do zasypiania dla niemowląt",
    "muzyka do snu dla dzieci",
    "kojące dźwięki dla noworodka",
    "dźwięki na dobranoc dla dzieci",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/baby-sleep-sounds-app",
  },
  openGraph: {
    title: "Dźwięki do snu dla niemowląt | Calma",
    description:
      "Pięknie prosta aplikacja, która pomoże Twojemu dziecku wyciszyć się i zasnąć dzięki spersonalizowanym, łagodnym pejzażom dźwiękowym.",
    url: "https://www.calmasounds.com/pl/baby-sleep-sounds-app",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dźwięki do snu dla niemowląt | Calma",
    description:
      "Pięknie prosta aplikacja, która pomoże Twojemu dziecku wyciszyć się i zasnąć dzięki spersonalizowanym, łagodnym pejzażom dźwiękowym.",
  },
};

const breadcrumbJsonLd = {
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
      "name": "Dźwięki dla niemowląt",
      "item": "https://www.calmasounds.com/pl/baby-sleep-sounds-app"
    }
  ]
};

export default function BabySleepSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Dźwięki dla niemowląt
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Kojące dźwięki, które pomogą Twojemu maluchowi spać spokojnie
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma to elegancka i łatwa w użyciu aplikacja z dźwiękami do snu dla niemowląt, 
          oferująca jednostajny biały szum, łagodny deszcz i niskie częstotliwości przypominające 
          dźwięki z łona matki. Szybko uspokój płaczące niemowlę, zbuduj komfortową rutynę drzemek 
          i twórz pejzaże dźwiękowe, które maskują nagłe hałasy z otoczenia.
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
            <h2 className="text-2xl font-semibold">Maskuj nagłe hałasy</h2>
            <p className="mt-4 leading-7 text-white/70">
              Niemowlęta łatwo wybudzają się przez nagłe dźwięki w domu. Ciągły, rytmiczny biały szum z Calmy tworzy akustyczny koc, który pomaga dzieciom spać dłużej.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Symuluj szum z łona</h2>
            <p className="mt-4 leading-7 text-white/70">
              Łono matki było głośnym, szumiącym miejscem. Nisko-częstotliwościowy brązowy szum, bicie serca i dźwięki głębokiej wody przypominają noworodkowi to bezpieczne środowisko.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Możliwość personalizacji</h2>
            <p className="mt-4 leading-7 text-white/70">
              Każde dziecko jest inne. Z Calmą łatwo zmiksujesz szum wentylatora z łagodnym deszczem, aby znaleźć dokładną częstotliwość, która natychmiast uspokaja Twoje maleństwo.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ – Dźwięki dla niemowląt
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy biały szum jest bezpieczny dla niemowląt?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak, biały szum jest powszechnie uważany za bardzo bezpieczny i skuteczny, pod warunkiem, że głośność jest utrzymywana na poziomie normalnej rozmowy (około 50-60 decybeli), a urządzenie znajduje się w bezpiecznej odległości od łóżeczka.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Który kolor szumu jest najlepszy dla noworodków?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Wiele dzieci dobrze reaguje na standardowy biały szum, ale szum różowy i brązowy (które kładą nacisk na głębsze, niższe częstotliwości) mogą być idealne do symulowania stłumionych dźwięków z łona matki.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy Calma wymaga internetu do działania?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma działa w trybie offline. Gdy już zainstalujesz aplikację, nie potrzebujesz aktywnego połączenia z internetem, aby odtwarzać ulubiony miks Twojego dziecka.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Pomóż swojemu dziecku spać spokojnie
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Pobierz Calmę z Google Play i stwórz idealne środowisko audio na czas drzemek i snu nocnego.
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
