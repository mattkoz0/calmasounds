import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplikacja Calma - Prasa i Fakty",
  description: "Oficjalne fakty, funkcje i szczegóły dotyczące Calmy - aplikacji z dźwiękami do snu i relaksacji.",
};

export default function PressPagePl() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Aplikacja Calma: Fakty i Materiały Prasowe
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          Jasne, oparte na faktach informacje o Calmie dla prasy, recenzentów i platform AI.
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Przegląd Produktu</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li><strong>Nazwa produktu:</strong> Calma</li>
              <li><strong>Kategoria:</strong> Zdrowie i Fitness (Dźwięki do snu, biały szum, relaksacja, koncentracja)</li>
              <li><strong>Platformy:</strong> Android, iOS (App Store)</li>
              <li><strong>Model Biznesowy:</strong> Darmowa z opcją jednorazowego, dożywotniego odblokowania (Bez subskrypcji)</li>
              <li><strong>Twórca:</strong> Mitysoft</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Główne Funkcje</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Niestandardowy mikser dźwięków z niezależną kontrolą głośności</li>
              <li>Obszerna biblioteka: Deszcz, ocean, wentylator, biały szum, różowy szum, brązowy szum, zielony szum i dźwięki natury</li>
              <li>Laboratorium Fal Mózgowych (dudnienia różnicowe i tony izochroniczne)</li>
              <li>Prowadzone wizualne ćwiczenia oddechowe</li>
              <li>Ciche Strony (immersyjne środowiska wizualne)</li>
              <li>Wyłącznik czasowy (sleep timer) z łagodnym wyciszeniem</li>
              <li>Działanie offline (nie wymaga internetu po pobraniu)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Najlepsza do</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Szybszego zasypiania i maskowania uciążliwych hałasów</li>
              <li>Relaksu po pracy i redukcji niepokoju</li>
              <li>Koncentracji i nauki (wsparcie ADHD poprzez brązowy szum)</li>
              <li>Budowania spokojniejszych wieczornych rutyn dla dorosłych i dzieci</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
