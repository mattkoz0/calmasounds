import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calma | Dźwięki do snu, Relaksacja, Biały Szum i Koncentracja",
  description:
    "Calma to aplikacja z dźwiękami do snu wspomagająca relaks, biały szum i koncentrację. Twórz spersonalizowane pejzaże dźwiękowe dla lepszego snu, spokojniejszych wieczorów i głębokiego skupienia.",
  alternates: {
    canonical: "https://www.calmasounds.com/pl",
  },
  openGraph: {
    title: "Calma | Dźwięki do snu, Relaksacja, Biały Szum i Koncentracja",
    description:
      "Calma to aplikacja z dźwiękami do snu wspomagająca relaks, biały szum i koncentrację. Twórz spersonalizowane pejzaże dźwiękowe dla lepszego snu i spokojniejszych wieczorów.",
    url: "https://www.calmasounds.com/pl",
    siteName: "Calma",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | Dźwięki do snu, Relaksacja, Biały Szum i Koncentracja",
    description:
      "Calma to aplikacja z dźwiękami do snu wspomagająca relaks, biały szum i koncentrację.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calma",
  url: "https://www.calmasounds.com/pl",
  description:
    "Calma to aplikacja z dźwiękami do snu wspomagająca relaks, biały szum i koncentrację.",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calma",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Sleep and Relaxation",
  operatingSystem: "Android 8.0 lub nowszy",
  url: "https://www.calmasounds.com/pl",
  downloadUrl: [
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
  ],
  description:
    "Dźwięki do snu, biały szum, relaksacja i koncentracja dzięki spersonalizowanym miksom.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PLN",
  },
  softwareVersion: "1.0.0",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Calma",
  url: "https://www.calmasounds.com/pl",
  logo: "https://www.calmasounds.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "calma.app@outlook.com",
    contactType: "customer support",
    availableLanguage: ["Polish", "English"]
  },
  sameAs: [
    "https://www.tiktok.com/@.calma.app",
    "https://play.google.com/store/apps/details?id=pl.mitysoft.calma",
    "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923",
    "https://www.instagram.com/calma.app.official",
    "https://www.youtube.com/@CalmaApp",
    "https://www.facebook.com/profile.php?id=61580760185966"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Co to jest Calma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma to aplikacja do miksowania dźwięków zaprojektowana, aby pomóc Ci lepiej spać, łatwiej się relaksować i pozostać skoncentrowanym dzięki spersonalizowanym miksom audio.",
      },
    },
    {
      "@type": "Question",
      name: "Dla kogo jest Calma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma jest dla każdego, kto potrzebuje spokojniejszej wieczornej rutyny, wytchnienia po pracy lub skupienia podczas nauki i głębokiej pracy.",
      },
    },
    {
      "@type": "Question",
      name: "Czy mogę stworzyć własny miks dźwięków?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Calma opiera się na tworzeniu własnego środowiska dźwiękowego, zamiast słuchania tylko jednej, ustalonej ścieżki.",
      },
    },
    {
      "@type": "Question",
      name: "Czy aplikacja jest już dostępna?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calma jest dostępna na systemy Android oraz iOS (App Store), a w przyszłości planujemy dalszy rozwój i rozszerzenie na inne platformy.",
      },
    },
  ],
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Demo aplikacji Calma",
  description: "Zobacz Calmę w akcji – od miksowania dźwięków po funkcje premium zaprojektowane dla snu, relaksu i koncentracji.",
  thumbnailUrl: "https://www.calmasounds.com/screenshots/3_en.png",
  uploadDate: "2024-03-30T09:00:00Z",
  duration: "PT34S",
  contentUrl: "https://www.calmasounds.com/demo.mp4",
  embedUrl: "https://www.calmasounds.com/demo.mp4"
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strona główna",
      item: "https://www.calmasounds.com/pl"
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(softwareAppJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(videoJsonLd),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbJsonLd),
              }}
            />


      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
          Calma • Sen i Relaks
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Śpij lepiej, relaksuj się głębiej i skup się dzięki dźwiękom spersonalizowanym dla Ciebie
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Calma to pięknie prosta aplikacja z dźwiękami do snu i relaksacji, która pomaga
          Ci tworzyć spersonalizowane miksy audio dla lepszego snu, spokojniejszych wieczorów i
          głębszej koncentracji.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pobierz aplikację Calma ze sklepu Google Play (otwiera się w nowym oknie)"
            className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
          >
            Zacznij darmową rutynę
          </a>

          <a
            href="#features"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Poznaj funkcje
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/65">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Spersonalizowane miksy
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Sen • Relaks • Koncentracja
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Brak presji subskrypcyjnej
          </span>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-[1.02]"
          >
            <Image
              src="/google-play-badge.png"
              alt="Pobierz z Google Play"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-[1.02]"
          >
            <Image
              src="/apple-appstore-badge.png"
              alt="Pobierz w App Store"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </a>
        </div>
        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Lepszy Sen
            </p>
            <h2 className="mt-3 text-xl font-semibold">Spersonalizowane dźwięki do snu i deszczu</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Twórz wieczorne miksy dźwiękowe z odgłosami deszczu, teksturami otoczenia i kojącymi
              warstwami tła, które pomogą Ci naturalnie się odprężyć.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Głęboki Relaks
            </p>
            <h2 className="mt-3 text-xl font-semibold">Relaksujące dźwięki natury dla odpoczynku</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Używaj kojących pejzaży dźwiękowych, aby zresetować umysł, zredukować hałas wokół Ciebie
              i zbudować łagodniejszą wieczorną rutynę.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              ADHD i Skupienie
            </p>
            <h2 className="mt-3 text-xl font-semibold">Brązowy szum i dźwięki dla ADHD</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Zbuduj własne tło audio do nauki, czytania i głębokiej pracy
              bez rozpraszających wizualizacji i zbędnych elementów.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Demo wideo
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Zobacz Calmę w ruchu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Zobacz, jak Calma wygląda i działa w rzeczywistości – od immersyjnego miksowania dźwięków
            po funkcje premium zaprojektowane dla snu, relaksu i koncentracji.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20">
          <video
            className="h-auto w-full rounded-[1.5rem]"
            controls
            preload="metadata"
            playsInline
            poster="/screenshots/3_en.png"
            title="Wideo demo aplikacji Calma"
            aria-label="Wideo demo aplikacji Calma"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje tagu wideo.
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Podgląd aplikacji
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Zobacz Calmę w akcji
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Odkryj piękny i prosty interfejs aplikacji Calma oraz to, jak pomaga Ci
            budować kojące pejzaże dźwiękowe dla snu, relaksu i skupienia.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/3_en.png"
              alt="Interfejs aplikacji mobilnej Calma pokazujący listę dźwięków do snu i kategorii relaksacyjnych"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/4_en.png"
              alt="Interfejs miksera dźwięków Calma do personalizacji białego szumu do snu i koncentracji"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/5_en.png"
              alt="Zrzut ekranu aplikacji Calma 3"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/screenshots/7_en.png"
              alt="Interfejs miksera dźwięków Calma do tworzenia niestandardowych miksów białego szumu"
              width={720}
              height={1600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Kluczowe funkcje
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Więcej niż tylko dźwięki do snu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calma wykracza poza zwykłe odtwarzanie, oferując immersyjne funkcje zaprojektowane tak, aby
            Twoje rutyny były bardziej spersonalizowane i zapadały w pamięć.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Laboratorium Fal Mózgowych
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Dostrój swój stan dzięki immersyjnym eksperymentom audio
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Poznaj bardziej zaawansowaną stronę spokoju dzięki doświadczeniom dźwiękowym zaprojektowanym dla
              snu, koncentracji i głębokiego resetu psychicznego.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Prowadzone Oddychanie
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Oddychaj w spokojnym rytmie
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Łagodne wizualne wskazówki oddechowe pomagają zamienić aplikację w wyciszający
              rytuał, a nie tylko pasywny odtwarzacz audio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Rytuał Nocnego Nieba
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Cicha chwila odkrycia
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Dodaj poczucie zachwytu do swojej rutyny dzięki funkcji, która sprawia, że codzienne
              chwile spokoju stają się bardziej znaczące i emocjonalnie satysfakcjonujące.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Dlaczego Calma
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Spokojniejsze doświadczenie, zaprojektowane z intencją
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Calma jest zbudowana tak, aby być elegancką, skupioną i emocjonalnie lekką aplikacją. Pomaga
            tworzyć lepsze środowisko dźwiękowe bez zbędnego chaosu i hałasu wizualnego.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Stwórz własną atmosferę</h3>
            <p className="mt-4 leading-7 text-white/70">
              Miksuj dźwięki zależnie od nastroju, rutyny i chwili. Calma daje Ci bardziej
              osobiste doświadczenie niż uniwersalne aplikacje audio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Poczuj spokój, nie przytłoczenie</h3>
            <p className="mt-4 leading-7 text-white/70">
              Interfejs został zaprojektowany, aby wspierać ciszę, a nie rozpraszać. Każdy ekran
              ma być prosty, immersyjny i zachęcać do codziennego powrotu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Jedna aplikacja, wiele codziennych rytuałów</h3>
            <p className="mt-4 leading-7 text-white/70">
              Używaj Calmy przed snem, podczas wieczornego wyciszenia, w czasie pracy lub gdy
              po prostu potrzebujesz łagodniejszego tła dla Twojego dnia.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h3 className="text-2xl font-semibold">Zbudowana, by być premium i bliska</h3>
            <p className="mt-4 leading-7 text-white/70">
              Calma łączy dopracowany wygląd z łagodnym tonem emocjonalnym, sprawiając, że aplikacja
              staje się miejscem, do którego chcesz wracać.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Eksploruj więcej
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Odkryj Calmę według swoich potrzeb
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Przeglądaj dedykowane sekcje dla snu, relaksu i koncentracji, aby znaleźć tę stronę
            Calmy, która najlepiej pasuje do Twojej rutyny.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/sleep-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Sen
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Aplikacja do snu
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Dowiedz się, jak Calma wspiera spokojniejsze noce, rutyny wieczorne i
              spersonalizowane pejzaże dźwiękowe do snu.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Sprawdź sekcję Snu →
            </span>
          </a>

          <a
            href="/relaxing-sounds"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Relaks
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Relaksujące dźwięki
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Odkryj łagodniejszą stronę Calmy stworzoną dla spokojnych wieczorów i wyciszających
              codziennych rytuałów.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Sprawdź sekcję Relaksu →
            </span>
          </a>

          <a
            href="/focus-sounds-app"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Koncentracja
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Aplikacja do koncentracji
            </h3>
            <p className="mt-4 leading-7 text-white/70">
              Zobacz, jak Calma pomaga stworzyć spokojne środowisko do głębokiej pracy,
              skupienia i sesji nauki.
            </p>
            <span className="mt-6 inline-block text-sm text-white transition group-hover:text-white/80">
              Sprawdź sekcję Koncentracji →
            </span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Poradniki
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Przeczytaj nasze poradniki o śnie i koncentracji
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Poznaj praktyczne teksty o dźwiękach do snu, białym szumie i spokojniejszych rutynach wieczornych.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Dźwięki deszczu dla snu i skupienia</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Dlaczego monotonne dźwięki deszczu są idealne dla Twojego umysłu.
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-sleep"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Najlepsze dźwięki do snu</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Deszcz, biały szum i łagodne pejzaże dźwiękowe przed snem.
            </p>
          </a>

          <a
            href="/blog/best-sounds-for-studying"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold">Najlepsze dźwięki do nauki</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Odkryj, które dźwięki mogą wspierać Twoją koncentrację.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Wiedza o dźwięku
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Poznaj kolory szumu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Czy wiesz, że szum ma kolory? Od maskowania dźwięków po wsparcie koncentracji i ADHD – różne częstotliwości służą innym potrzebom.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Biały szum
            </div>
            <h3 className="text-xl font-semibold">Idealny do maskowania</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Pokrywa równomiernie wszystkie słyszalne częstotliwości. Doskonały do blokowania nagłych hałasów.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-pink-300">
              Różowy szum
            </div>
            <h3 className="text-xl font-semibold">Zrównoważony i naturalny</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Głębszy niż biały szum, przypomina dźwięk deszczu lub wiatru. Świetny dla poprawy jakości snu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-300">
              Brązowy szum
            </div>
            <h3 className="text-xl font-semibold">Wsparcie skupienia i ADHD</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Głęboki, z przewagą niskich tonów, jak odległy wodospad. Popularny dla głębokiego skupienia i wyciszenia gonitwy myśli.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
            <div className="mb-4 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
              Zielony szum
            </div>
            <h3 className="text-xl font-semibold">Harmonia z naturą</h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Skupiony na średnich częstotliwościach, budzi skojarzenia z szelestem liści w lesie. Idealny do relaksu.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Przeczytaj pełny poradnik o kolorach szumu
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Często zadawane pytania
          </h2>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Co to jest Calma?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma to aplikacja do miksowania dźwięków zaprojektowana, aby pomóc Ci lepiej spać, relaksować się 
              i skoncentrować dzięki spersonalizowanym miksom audio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Dla kogo jest Calma?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Dla każdego, kto potrzebuje spokojniejszej wieczornej rutyny, wyciszenia po pracy 
              lub skupienia tła podczas nauki i pracy.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Czy mogę stworzyć własny miks?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Tak. Calma opiera się na tworzeniu własnego środowiska dźwiękowego, 
              zamiast słuchania tylko jednej, stałej ścieżki.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Czy aplikacja jest już dostępna?</h3>
            <p className="mt-3 leading-7 text-white/70">
              Calma jest dostępna na system Android, a wkrótce planowane są dalsze ulepszenia.
            </p>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/20 sm:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Zacznij teraz
          </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Pobierz Calmę i zbuduj spokojniejszą codzienność
            </h2>
            <p className="mt-4 leading-7 text-white/70">
            Twórz spersonalizowane pejzaże dźwiękowe dla lepszego snu, spokojniejszych wieczorów 
            i głębokiego skupienia w pięknej aplikacji zaprojektowanej do codziennego użytku.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
              aria-label="Pobierz aplikację Calma ze sklepu Google Play"
            >
              <Image
                src="/google-play-badge.png"
                alt="Pobierz z Google Play"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:scale-[1.02]"
              aria-label="Pobierz aplikację Calma z App Store"
            >
              <Image
                src="/apple-appstore-badge.png"
                alt="Pobierz w App Store"
                width={240}
                height={93}
                className="h-[60px] w-auto object-contain"
              />
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Szukasz dedykowanej sekcji o śnie?{" "}
            <a
              href="/sleep-sounds-app"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Sprawdź naszą stronę o aplikacji do snu
            </a>
          </p>

          <p className="mt-3 text-sm text-white/60">
            Potrzebujesz więcej wieczornych inspiracji?{" "}
            <a
              href="/blog/best-sounds-for-sleep"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Przeczytaj nasz przewodnik po najlepszych dźwiękach do snu
            </a>
          </p>
          <p className="mt-3 text-sm text-white/60">
            Ciekawią Cię dudnienia binauralne?{" "}
            <a
              href="/blog/binaural-beats-for-sleep-and-focus"
              className="text-white underline underline-offset-4 transition hover:text-white/80"
            >
              Przeczytaj nasz poradnik o dudnieniach binauralnych
            </a>
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Wiedza o dźwięku
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Najnowsze z naszego bloga
            </h2>
          </div>
          <Link
            href="/blog"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            Zobacz wszystkie poradniki
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/blog/brown-noise-vs-white-noise-vs-pink-noise"
            className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-2xl">
              <Image
                src="/blog/noise-colors.jpg"
                alt="Kolory szumu"
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">Brązowy, biały czy różowy szum?</h3>
            <p className="mt-4 flex-grow leading-7 text-white/60">
              Dowiedz się, jak kolory szumu wpływają na Twój sen i koncentrację.
            </p>
            <span className="mt-6 text-sm font-medium text-white transition group-hover:text-white/80">
              Czytaj poradnik →
            </span>
          </a>

          <a
            href="/blog/rain-sounds-for-better-sleep-and-focus"
            className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-2xl">
              <Image
                src="/blog/rain-sleep.jpg"
                alt="Dźwięki deszczu do snu"
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">Moc dźwięków deszczu</h3>
            <p className="mt-4 flex-grow leading-7 text-white/60">
                Dlaczego deszcz pomaga nam zasnąć i skupić się w pracy.
            </p>
            <span className="mt-6 text-sm font-medium text-white transition group-hover:text-white/80">
              Czytaj poradnik →
            </span>
          </a>

          <a
            href="/blog/best-sounds-for-sleep"
            className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-2xl">
              <Image
                src="/blog/sleep-mask.jpg"
                alt="Najlepsze dźwięki do snu"
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">Ranking dźwięków do snu</h3>
            <p className="mt-4 flex-grow leading-7 text-white/60">
              Zestawienie najskuteczniejszych dźwięków wspomagających szybkie zasypianie.
            </p>
            <span className="mt-6 text-sm font-medium text-white transition group-hover:text-white/80">
              Czytaj poradnik →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
