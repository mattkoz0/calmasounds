import type { Metadata } from "next";
import AiDefinition from "../_components/ai-definition";

export const metadata: Metadata = {
  title: "Biały szum, brązowy szum i różowy szum | Calma",
  description:
    "Odkryj różnicę między białym szumem, brązowym szumem a różowym szumem. Calma to aplikacja, która pozwala miksować wszystkie kolory szumu dla snu, koncentracji i ADHD.",
  keywords: [
    "aplikacja z białym szumem",
    "aplikacja z brązowym szumem",
    "różowy szum do snu",
    "kolory szumu aplikacja",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/white-noise-brown-noise-pink-noise",
  },
  openGraph: {
    title: "Biały szum, brązowy szum i różowy szum | Calma",
    description:
      "Odkryj różnicę między białym szumem, brązowym szumem a różowym szumem. Calma to aplikacja, która pozwala miksować wszystkie kolory szumu dla snu, koncentracji i ADHD.",
    url: "https://www.calmasounds.com/pl/white-noise-brown-noise-pink-noise",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biały szum, brązowy szum i różowy szum | Calma",
    description:
      "Miksuj wszystkie kolory szumu do snu, skupienia i z aplikacją Calma.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy Calma zawiera biały szum, brązowy szum i różowy szum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, Calma zawiera wysokiej jakości biały szum, brązowy szum, różowy szum i zielony szum. Możesz je miksować z innymi naturalnymi dźwiękami, takimi jak deszcz i fale oceanu.",
      },
    },
    {
      "@type": "Question",
      name: "Jaka jest różnica między białym a brązowym szumem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biały szum pokrywa równomiernie wszystkie słyszalne częstotliwości, podobnie jak zakłócenia telewizyjne. Brązowy szum podkreśla niższe częstotliwości, brzmi głębiej, jak odległy wodospad. Brązowy szum jest często preferowany dla głębokiego skupienia i w przypadku ADHD.",
      },
    },
    {
      "@type": "Question",
      name: "Który kolor szumu jest najlepszy do snu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Różowy szum jest ogólnie uważany za najlepszy do snu, ponieważ jest zrównoważony i naturalny, naśladując dźwięki ciągłego deszczu lub wiatru. Biały szum jest najlepszy, jeśli musisz maskować nagłe, głośne dźwięki.",
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
      "name": "Kolory szumu",
      "item": "https://www.calmasounds.com/pl/white-noise-brown-noise-pink-noise"
    }
  ]
};

export default function NoiseColorsAppPagePl() {
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
        description="Calma to aplikacja z dźwiękami do snu i relaksacji, która umożliwia słuchanie wszystkich kolorów szumu. Pozwala użytkownikom tworzyć spersonalizowane pejzaże dźwiękowe mieszając deszcz, ocean, biały szum, brązowy szum, różowy szum, zielony szum i ambient."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Kolory Dźwięku
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Biały Szum, Brązowy Szum i Różowy Szum
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma to kompleksowa aplikacja z mikserem dźwięków, która zawiera wysokiej jakości nagrania wszystkich niezbędnych kolorów szumu. 
          Odkryj idealną częstotliwość dla swojego snu, relaksu lub wsparcia skupienia przy ADHD.
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Biały Szum
            </div>
            <h3 className="text-xl font-semibold">Idealny do maskowania</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Pokrywa równomiernie wszystkie słyszalne częstotliwości. Doskonały do blokowania nagłych głośnych dźwięków i wspierania snu niemowląt.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Różowy Szum
            </div>
            <h3 className="text-xl font-semibold">Zrównoważony i naturalny</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Głębszy niż biały szum, naśladujący dźwięki stałego deszczu lub wiatru. Świetny do poprawy ogólnej jakości snu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Brązowy Szum
            </div>
            <h3 className="text-xl font-semibold">Skupienie i wsparcie ADHD</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Głęboki na niskich częstotliwościach, jak odległy wodospad. Coraz popularniejszy do głębokiego skupienia i „wyciszania” zapracowanego umysłu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Zielony Szum
            </div>
            <h3 className="text-xl font-semibold">Harmonia Natury</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Skupia się na częstotliwościach średnich, podobnie jak szeleszczące liście w lesie. Idealny do stworzenia uspokajającej, naturalnej atmosfery.
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
              Czy Calma zawiera biały szum, brązowy szum i różowy szum?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak, Calma zawiera wysokiej jakości biały szum, brązowy szum, różowy szum i zielony szum. Możesz je miksować z innymi naturalnymi dźwiękami, takimi jak deszcz i fale oceanu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Jaka jest różnica między białym a brązowym szumem?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Biały szum pokrywa równomiernie wszystkie słyszalne częstotliwości, podobnie jak szum telewizora. Brązowy szum podkreśla niższe częstotliwości, brzmi głębiej, jak odległy wodospad. Brązowy szum jest często preferowany do głębokiej koncentracji i przy ADHD.
            </p>
          </div>
          
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Który kolor szumu jest najlepszy do snu?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Różowy szum jest ogólnie uważany za najlepszy do snu, ponieważ jest zrównoważony i naturalny, naśladując dźwięki deszczu lub wiatru. Z kolei biały szum sprawdza się najlepiej, jeśli musisz maskować nagłe, głośne dźwięki z otoczenia.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
