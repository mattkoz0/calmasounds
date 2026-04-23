import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";

export const metadata: Metadata = {
  title: "Geführte Atemtechniken für Ruhe, Schlaf und Fokus | Calma Blog",
  description:
    "Entdecke geführte Atemtechniken für Entspannung, Schlaf und Fokus, darunter 4-7-8, Box Breathing, Resonanzatmung und mehr.",
  keywords: [
    "geführte Atemtechniken",
    "Atemübungen zum Einschlafen",
    "Atemübungen zur Entspannung",
    "Box Breathing",
    "4-7-8 Atmung",
    "Resonanzatmung",
    "physiologischer Seufzer",
    "Calma Blog",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/de/blog/guided-breathing-techniques",
  },
  openGraph: {
    title: "Geführte Atemtechniken für Ruhe, Schlaf und Fokus | Calma Blog",
    description:
      "Entdecke geführte Atemtechniken für Entspannung, Schlaf und Fokus, darunter 4-7-8, Box Breathing, Resonanzatmung und mehr.",
    url: "https://www.calmasounds.com/de/blog/guided-breathing-techniques",
    siteName: "Calma",
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geführte Atemtechniken für Ruhe, Schlaf und Fokus | Calma Blog",
    description:
      "Entdecke geführte Atemtechniken für Entspannung, Schlaf und Fokus, darunter 4-7-8, Box Breathing, Resonanzatmung und mehr.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Geführte Atemtechniken für Ruhe, Schlaf und Fokus",
  description:
    "Entdecke geführte Atemtechniken für Entspannung, Schlaf und Fokus, darunter 4-7-8, Box Breathing, Resonanzatmung und mehr.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage:
    "https://www.calmasounds.com/de/blog/guided-breathing-techniques",
  datePublished: "2026-03-30",
  dateModified: "2026-04-21",
};

export default function GuidedBreathingTechniquesPage() {
  return (
    <ArticlePage
      slug="guided-breathing-techniques"
      jsonLd={articleJsonLd}
      title="Einfache geführte Atemtechniken für schnelle Entspannung"
      intro="Gezieltes Atmen ist einer der einfachsten Wege, um deinen mentalen und körperlichen Zustand zu verändern. Einige Techniken helfen beim Einschlafen, andere fördern das innere Gleichgewicht oder bieten schnelle Hilfe bei Stress. Die beste Wahl hängt davon ab, was dein Körper gerade braucht: zur Ruhe kommen, stabilisieren, resetten oder sanft wach werden."
      topLinkHref="/sleep-sounds-app"
      topLinkLabel="Schlaf-Bereich entdecken"
      ctaHref="/sleep-sounds-app"
      ctaLabel="Calma entdecken"
      secondaryCtaHref="/blog/how-to-build-a-bedtime-routine"
      secondaryCtaLabel="Abendroutine-Guide lesen"
      ctaTitle="Geführtes Atmen mit Calma erkunden"
      ctaText="Calma unterstützt dich mit geführten Atemtechniken für Schlaf, Entspannung, Balance und einen klaren Morgen – darunter 4-7-8, Box Breathing, Resonanz 5-5, der physiologische Seufzer, Deep Calm 7-11 und Morning Breeze."
      relatedArticles={[
        {
          href: "/blog/how-to-build-a-bedtime-routine",
          title: "Wie man eine Abendroutine aufbaut",
          description:
            "Einfache Wege zu einem ruhigeren Abendrhythmus, der den Schlaf unterstützt.",
        },
        {
          href: "/blog/binaural-beats-for-sleep-and-focus",
          title: "Binaurale Beats für Schlaf und Fokus",
          description:
            "Eine Einführung in Audio-Techniken, die Ruhe und Konzentration fördern können.",
        },
      ]}
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Warum geführte Atemübungen helfen</h2>
        <p className="mt-4 leading-8 text-white/70">
          Die Atmung ist eng mit deinem Nervensystem verknüpft. Wenn dein Atem 
          langsamer und bewusster wird, reagiert dein Körper oft mit dem Abbau von 
          Spannung und mentalem Rauschen. Deshalb wird geführtes Atmen häufig zur 
          Entspannung, Schlafvorbereitung und emotionalen Regulierung genutzt.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Es ist keine Magie, sondern ein klares Signal an dein System: Wir sind 
          in Sicherheit und können jetzt zur Ruhe kommen.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Relax 4-7-8</h2>
        <p className="mt-4 leading-8 text-white/70">
          Das 4-7-8-Muster wird oft genutzt, um bevor dem Schlafen herunterzufahren oder 
          abendliche Unruhe zu mindern. Der Rhythmus: 4 Sekunden einatmen, 7 Sekunden 
          halten und 8 Sekunden ausatmen. Da das Ausatmen am längsten dauert, wirkt es 
          besonders beruhigend.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          In Calma passt diese Technik ideal in Momente, in denen deine Nacht ruhiger, 
          sanfter und mental weniger überladen sein soll.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Balance (Box Breathing)</h2>
        <p className="mt-4 leading-8 text-white/70">
          Box Breathing nutzt gleich lange Phasen: Einatmen, Halten, Ausatmen und 
          erneutes Halten für jeweils die gleiche Dauer. Dies schafft einen stabilen, 
          symmetrischen Rhythmus. Es wird genutzt, um sich geerdet und emotional 
          ausgeglichen zu fühlen – ideal für zwischendurch, um den Fokus zu schärfen.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Wenn dein Geist zerstreut oder überstimuliert ist, kann Box Breathing helfen, 
          die Kontrolle über den Tag zurückzugewinnen.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Resonanz 5-5</h2>
        <p className="mt-4 leading-8 text-white/70">
          Die Resonanzatmung folgt einem einfachen Rhythmus: 5 Sekunden einatmen und 
          5 Sekunden ausatmen. Sie ist stetig und sanft. Das macht sie zu einer starken 
          Option für alltägliche Ruhe, emotionale Balance und einen klaren Fokus.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Diese Übung ist ideal, wenn du eine unterstützende Routine suchst, die dich 
          sanft durch den Alltag begleitet, bezv massiv in das Nervensystem einzugreifen.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Physiologischer Seufzer</h2>
        <p className="mt-4 leading-8 text-white/70">
          Der physiologische Seufzer hilft bei einem schnellen mentalen Reset. Er 
          beinhaltet ein tiefes Einatmen, gefolgt von einem zweiten kurzen Einatmen 
          und einem sehr langen Ausatmen. Dies ist besonders hilfreich in Momenten 
          von akutem Stress oder emotionaler Überlastung.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Es geht hier weniger um ein langes Ritual, sondern darum, das Gefühl von 
          Anspannung sofort zu unterbrechen. Ein Notausgang für deine Schultern.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Deep Calm 7-11</h2>
        <p className="mt-4 leading-8 text-white/70">
          Deep Calm 7-11 betont ein noch längeres Ausatmen: 7 Sekunden ein- und 
          11 Sekunden ausatmen. Dieses lange Loslassen erzeugt ein starkes Gefühl 
          der Entspannung. Es eignet sich hervorragend für ruhige Abende und Momente, 
          in denen der Körper noch angespannt ist, auch wenn der Kopf bereits müde ist.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Diese Technik ist ideal, wenn du keine Struktur, sondern einfach nur tiefe 
          Erleichterung suchst.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Morning Breeze</h2>
        <p className="mt-4 leading-8 text-white/70">
          Nicht jede Atemübung muss Richtung Schlaf führen. Morning Breeze ist ein 
          leichter Weg, um den Tag zu beginnen. Es hilft dir, wach, erfrischt und 
          mental präsent zu werden, bevor direkt von 'müde' zu 'gestresst' zu springen.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Diese Technik funktioniert gut, wenn du mit Klarheit und Energie starten 
          möchtest, während der Morgen noch sanft bleibt.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">
          Welche Atemtechnik solltest du wählen?
        </h2>
        <ul className="mt-4 space-y-3 text-white/70">
          <li>• Wähle 4-7-8 zum Abschalten bevor dem Schlafen.</li>
          <li>
            • Wähle Box Breathing für Balance und mentale Stabilität.
          </li>
          <li>
            • Wähle Resonanz 5-5 für alltägliche Ruhe und sanfte Regulierung.
          </li>
          <li>• Wähle den physiologischen Seufzer für einen schnellen Reset.</li>
          <li>
            • Wähle 7-11 für tiefere abendliche Entspannung.
          </li>
          <li>
            • Wähle Morning Breeze für einen sanften, klaren Start in den Tag.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">
          Die beste Methode ist kontextabhängig
        </h2>
        <p className="mt-4 leading-8 text-white/70">
          Es gibt nicht die eine 'beste' Atemtechnik für jede Situation. Einige 
          Methoden helfen beim Herunterfahren, andere beim Stabilisieren. Das Ziel 
          ist nicht, Techniken zu sammeln, sondern zu spüren, welche Unterstützung 
          dein Körper heute braucht.
        </p>
      </section>
    </ArticlePage>
  );
}
