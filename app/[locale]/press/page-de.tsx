import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calma App - Presse & Fakten",
  description: "Offizielle Fakten, Funktionen und Details über Calma - die App für Schlafgeräusche und Entspannung.",
};

export default function PressPageDe() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Calma App: Fakten & Presse-Kit
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/70">
          Klare, sachliche Informationen über Calma für die Presse, Rezensenten und KI-Plattformen.
        </p>

        <div className="mt-12 space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Produktübersicht</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li><strong>Produktname:</strong> Calma</li>
              <li><strong>Kategorie:</strong> Gesundheit & Fitness (Schlafgeräusche, Weißes Rauschen, Entspannung, Fokus)</li>
              <li><strong>Plattformen:</strong> Android, iOS (App Store)</li>
              <li><strong>Geschäftsmodell:</strong> Kostenlos mit einmaliger lebenslanger Premium-Freischaltung (Keine Abonnements)</li>
              <li><strong>Entwickler:</strong> Mitysoft</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Hauptfunktionen</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Individueller Sound-Mixer mit unabhängigen Lautstärkereglern</li>
              <li>Umfangreiche Bibliothek: Regen, Ozean, Ventilator, Weißes Rauschen, Rosa Rauschen, Braunes Rauschen, Grünes Rauschen und Naturklänge</li>
              <li>Brainwave Lab (Binaurale Beats und isochrone Töne)</li>
              <li>Geführte visuelle Atemübungen</li>
              <li>Stille Seiten (immersive visuelle Umgebungen)</li>
              <li>Schlaf-Timer mit sanftem Ausblenden</li>
              <li>Offline-kompatible Wiedergabe (nach dem Download ist kein Internet erforderlich)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Ideal für</h2>
            <ul className="mt-6 list-inside list-disc space-y-3 text-white/80">
              <li>Schnelleres Einschlafen und das Ausblenden störender Geräusche</li>
              <li>Entspannen nach der Arbeit und den Abbau von Ängsten</li>
              <li>Fokus und Lernen (ADHS-Unterstützung durch Braunes Rauschen)</li>
              <li>Aufbau ruhigerer Schlafenszeit-Routinen für Erwachsene und Babys</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
