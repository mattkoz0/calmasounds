import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aplikacja mikser dźwięków | Calma",
  description:
    "Odkryj Calmę – pięknie prostą aplikację do miksowania dźwięków dla snu, relaksu, koncentracji i spersonalizowanych rutyn audio.",
  keywords: [
    "aplikacja mikser dźwięków",
    "mikser dźwięków do snu",
    "mikser dźwięków relaksacyjnych",
    "mikser dźwięków do koncentracji",
    "spersonalizowane pejzaże dźwiękowe",
    "calma mikser dźwięków",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/sound-mixer-app",
  },
  openGraph: {
    title: "Aplikacja mikser dźwięków | Calma",
    description:
      "Odkryj pięknie prostą aplikację do miksowania dźwięków dla snu, relaksu, koncentracji i spersonalizowanych pejzaży dźwiękowych.",
    url: "https://www.calmasounds.com/pl/sound-mixer-app",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplikacja mikser dźwięków | Calma",
    description:
      "Odkryj pięknie prostą aplikację do miksowania dźwięków dla snu, relaksu, koncentracji i spersonalizowanych pejzaży dźwiękowych.",
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
      "name": "Mikser dźwięków",
      "item": "https://www.calmasounds.com/pl/sound-mixer-app"
    }
  ]
};

export default function SoundMixerAppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Mikser dźwięków
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Aplikacja mikser dźwięków dla spersonalizowanego snu, relaksu i skupienia
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma to pięknie prosta aplikacja do miksowania dźwięków, która pozwala Ci tworzyć
          własne środowisko audio zamiast polegać na jednej, ustalonej ścieżce.
          Buduj spersonalizowane pejzaże dźwiękowe przed snem, podczas wieczornego wyciszenia, 
          głębokiej pracy i spokojniejszych codziennych rutyn.
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
            <h2 className="text-2xl font-semibold">Stwórz własny miks</h2>
            <p className="mt-4 leading-7 text-white/70">
              Łącz dźwięki zgodnie ze swoim nastrojem i rutyną, zamiast dostosowywać się 
              do jednej, ogólnej ścieżki audio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Jedna aplikacja na wiele chwil</h2>
            <p className="mt-4 leading-7 text-white/70">
              Buduj pejzaże dźwiękowe dla snu, relaksu, skupienia i codziennego spokoju
              w jednym prostym i spójnym doświadczeniu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Eleganckie doświadczenie</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma została zaprojektowana, aby być przejrzystą, ciepłą i premium, 
              dzięki czemu budowanie miksu jest intuicyjne, a nie techniczne.
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
            Zobacz mikser dźwięków wewnątrz Calmy
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interfejs aplikacji mobilnej Calma do tworzenia własnych miksów dźwiękowych"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interfejs miksera dźwięków Calma do personalizacji pejzaży dźwiękowych"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interfejs pokazujący wiele warstw audio dla spersonalizowanego relaksu"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Sterowanie mikserem dźwięków Calma dla snu i koncentracji"
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
            Dowiedz się więcej o pejzażach dźwiękowych
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/rain-sounds-vs-white-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Dźwięki deszczu vs Biały Szum</h3>
            <p className="mt-3 text-white/70">
              Porównaj różne warstwy atmosferyczne i zobacz, jak ich miksowanie może stworzyć idealne tło audio.
            </p>
          </a>
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Kolory szumu</h3>
            <p className="mt-3 text-white/70">
              Dowiedz się więcej o kolorach szumu i o tym, jak je równoważyć w osobistym mikserze.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ – Mikser dźwięków
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czym jest aplikacja mikser dźwięków?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              To aplikacja, która pozwala łączyć różne dźwięki w jedno spersonalizowane środowisko audio 
              dla snu, relaksu, koncentracji lub codziennego spokoju.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czym różni się Calma od zwykłej aplikacji dźwiękowej?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma opiera się na personalizacji, pozwalając Ci kształtować własny miks, 
              zamiast wybierać tylko spośród gotowych ścieżek.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy mogę używać Calmy do czegoś więcej niż sen?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak. Calma wspiera sen, relaks, koncentrację i spokojniejsze codzienne rutyny 
              dzięki w pełni konfigurowalnym pejzażom dźwiękowym.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Wypróbuj Calmę jako swój codzienny mikser
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Pobierz Calmę z Google Play i twórz spersonalizowane pejzaże dźwiękowe, 
            które pasują do Twojego snu, relaksu i skupienia.
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
