import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aplikacja z dźwiękami do koncentracji | Calma",
  description:
    "Odkryj Calmę – pięknie prostą aplikację z dźwiękami do koncentracji, idealną do głębokiej pracy, nauki i tworzenia spersonalizowanych pejzaży dźwiękowych skupienia.",
  keywords: [
    "aplikacja do koncentracji",
    "dźwięki do nauki",
    "aplikacja focus",
    "skupienie przy pracy",
    "dźwięki do głębokiej pracy",
    "calma koncentracja",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/focus-sounds-app",
  },
  openGraph: {
    title: "Aplikacja z dźwiękami do koncentracji | Calma",
    description:
      "Odkryj pięknie prostą aplikację z dźwiękami do koncentracji dla głębokiej pracy, nauki i lepszego skupienia.",
    url: "https://www.calmasounds.com/pl/focus-sounds-app",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplikacja z dźwiękami do koncentracji | Calma",
    description:
      "Odkryj pięknie prostą aplikację z dźwiękami do koncentracji dla głębokiej pracy, nauki i lepszego skupienia.",
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
      "name": "Aplikacja do koncentracji",
      "item": "https://www.calmasounds.com/pl/focus-sounds-app"
    }
  ]
};

export default function FocusSoundsAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Aplikacja do koncentracji
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Aplikacja z dźwiękami do głębokiej pracy, nauki i lepszego skupienia
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma to pięknie prosta aplikacja z dźwiękami do koncentracji, która pomaga tworzyć
          spersonalizowane środowiska audio do głębokiej pracy, czytania, nauki i
          cichego skupienia. Zbuduj swój własny pejzaż dźwiękowy i pozostań zanurzonym w zadaniu 
          bez wizualnego chaosu i rozpraszającego hałasu.
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
            <h2 className="text-2xl font-semibold">Pozostań w skupieniu dłużej</h2>
            <p className="mt-4 leading-7 text-white/70">
              Używaj dźwięków tła, które pomagają zredukować rozproszenia i wspierają
              równomierną koncentrację podczas sesji pracy lub nauki.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Stwórz własny miks focus</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma pozwala Ci kształtować osobiste środowisko audio, zamiast polegać tylko na
              jednej, ogólnej ścieżce do koncentracji.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Pracuj w spokoju</h2>
            <p className="mt-4 leading-7 text-white/70">
              Aplikacja jest zaprojektowana tak, aby być elegancką i lekką emocjonalnie,
              pomagając Twojemu miejscu pracy zyskać bardziej celowy charakter.
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
            Zobacz stronę koncentracji w Calmie
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interfejs aplikacji mobilnej Calma pokazujący kategorie skupienia i koncentracji"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interfejs Calmy do personalizacji pejzaży dźwiękowych do nauki"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interfejs miksera dźwięków Calma dla tła audio do głębokiej pracy"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interfejs Calmy dla dźwięków koncentracji i dudnień binauralnych"
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
            Dowiedz się więcej o dźwięku i skupieniu
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Najlepsze dźwięki do nauki</h3>
            <p className="mt-3 text-white/70">
              Znajdź rodzaje dźwięków, które mogą wspierać koncentrację i głębokie skupienie podczas nauki.
            </p>
          </a>
          <a
            href="/blog/binaural-beats-for-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Dudnienia binauralne</h3>
            <p className="mt-3 text-white/70">
              Proste wprowadzenie do tego, jak dudnienia binauralne mogą wspierać spokój i skupienie w codziennej pracy.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ – Aplikacja do koncentracji
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Co to jest aplikacja z dźwiękami do skupienia?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              To aplikacja pomagająca stworzyć tło audio, które wspiera koncentrację, 
              redukuje rozproszenia i sprawia, że praca lub nauka stają się bardziej immersyjne.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kiedy używać Calmy do koncentracji?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Możesz używać Calmy podczas nauki, czytania, pisania, pracy lub w każdej chwili, 
              gdy potrzebujesz bardziej kontrolowanego środowiska do skupienia.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy mogę personalizować miks dźwięków focus?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak. Calma została zaprojektowana wokół budowania własnego miksu, 
              aby Twój stan skupienia był bardziej naturalny i efektywny.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Wypróbuj Calmę do głębokiej pracy i nauki
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Pobierz Calmę z Google Play i stwórz bardziej skupione środowisko 
            dzięki spersonalizowanym pejzażom dźwiękowym.
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
