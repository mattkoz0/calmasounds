import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aplikacja z relaksującymi dźwiękami | Calma",
  description:
    "Odkryj Calmę – pięknie prostą aplikację z relaksującymi dźwiękami, stworzoną dla spokojniejszych wieczorów, wyciszających rutyn i spersonalizowanych pejzaży dźwiękowych.",
  keywords: [
    "aplikacja z relaksującymi dźwiękami",
    "dźwięki do relaksacji",
    "aplikacja wyciszająca",
    "relaksujące dźwięki otoczenia",
    "calma relaksujące dźwięki",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/pl/relaxing-sounds",
  },
  openGraph: {
    title: "Aplikacja z relaksującymi dźwiękami | Calma",
    description:
      "Odkryj pięknie prostą aplikację z relaksującymi dźwiękami dla spokojniejszych wieczorów i codziennych chwil wytchnienia.",
    url: "https://www.calmasounds.com/pl/relaxing-sounds",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplikacja z relaksującymi dźwiękami | Calma",
    description:
      "Odkryj pięknie prostą aplikację z relaksującymi dźwiękami dla spokojniejszych wieczorów i codziennych chwil wytchnienia.",
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
      "name": "Relaksujące dźwięki",
      "item": "https://www.calmasounds.com/pl/relaxing-sounds"
    }
  ]
};

export default function RelaxingSoundsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Relaksujące dźwięki
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Aplikacja z relaksującymi dźwiękami dla spokojniejszych wieczorów i łagodniejszej rutyny
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Calma to pięknie prosta aplikacja z relaksującymi dźwiękami, która pomaga Ci zwolnić,
          zresetować się po intensywnym dniu i stworzyć spokojną atmosferę wszędzie tam,
          gdzie tego potrzebujesz. Buduj spersonalizowane pejzaże dźwiękowe dla relaksu,
          balansu emocjonalnego i cichych codziennych rytuałów.
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
            <h2 className="text-2xl font-semibold">Łatwiejsze wyciszenie</h2>
            <p className="mt-4 leading-7 text-white/70">
              Używaj kojących pejzaży dźwiękowych, aby wyjść z trybu pracy, 
              uciszyć natłok myśli i stworzyć łagodne przejście w czas domowego odpoczynku.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Stwórz własny miks relaksacyjny</h2>
            <p className="mt-4 leading-7 text-white/70">
              Łącz dźwięki w sposób, który jest dla Ciebie osobisty, ciepły i zgodny
              z atmosferą, którą chcesz mieć wokół siebie.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Zbuduj łagodny rytuał</h2>
            <p className="mt-4 leading-7 text-white/70">
              Calma pomaga Ci wrócić do relaksu w prosty, elegancki sposób, 
              który pasuje do Twojego codziennego życia.
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
            Zobacz relaksującą stronę Calmy
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/1_en.png"
              alt="Interfejs aplikacji mobilnej Calma do wyboru kategorii relaksujących dźwięków"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/2_en.png"
              alt="Interfejs Calmy do personalizacji relaksujących pejzaży dźwiękowych"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Mikser dźwięków Calma pokazujący naturalne tekstury i kojące warstwy audio"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interfejs Calmy do zarządzania spersonalizowanymi miksami relaksacyjnymi"
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
            Dowiedz się więcej o relaksacji i dźwięku
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/blog/benefits-of-nature-sounds-for-relaxation"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Zalety dźwięków natury</h3>
            <p className="mt-3 text-white/70">
              Odkryj, jak naturalne pejzaże dźwiękowe, takie jak deszcz czy ocean, mogą działać jako naturalne uziemienie dla relaksu.
            </p>
          </a>
          <a
            href="/blog/guided-breathing-techniques"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">Techniki prowadzonego oddychania</h3>
            <p className="mt-3 text-white/70">
              Poznaj kojące metody oddychania, które współpracują z dźwiękami otoczenia dla głębszego odprężenia.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            FAQ – Aplikacja relaksacyjna
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Co to jest aplikacja z relaksującymi dźwiękami?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              To aplikacja pomagająca odtwarzać kojące dźwięki, które wspierają odpoczynek, 
              reset emocjonalny i spokojniejsze codzienne rutyny.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Kiedy mogę używać Calmy do relaksu?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Możesz używać Calmy po pracy, podczas wieczornego wyciszenia, przy czytaniu, 
              odpoczynku lub w każdej chwili, gdy potrzebujesz łagodniejszego tła wokół siebie.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Czy mogę personalizować relaksujące dźwięki?
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak. Calma opiera się na tworzeniu własnego, spersonalizowanego pejzażu dźwiękowego, 
              zamiast polegania tylko na jednej, ustalonej ścieżce.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Wypróbuj Calmę dla spokojniejszych chwil
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Pobierz Calmę z Google Play i stwórz bardziej spokojną atmosferę 
            dzięki spersonalizowanym dźwiękom do relaksu.
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
