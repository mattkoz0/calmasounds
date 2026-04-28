import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";

export const metadata: Metadata = {
  title: "Comment construire une routine de coucher | Blog Calma",
  description:
    "Apprenez à construire une routine de coucher qui soit apaisante, réaliste et facile à répéter.",
  keywords: [
    "comment construire une routine de coucher",
    "routine du soir",
    "conseils sommeil",
    "meilleure routine de coucher",
    "routine apaisante",
    "blog calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/blog/how-to-build-a-bedtime-routine",
  },
  openGraph: {
    title: "Comment construire une routine de coucher | Blog Calma",
    description:
      "Apprenez à construire une routine de coucher qui soit apaisante, réaliste et facile à répéter.",
    url: "https://www.calmasounds.com/fr/blog/how-to-build-a-bedtime-routine",
    siteName: "Calma",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment construire une routine de coucher | Blog Calma",
    description:
      "Apprenez à construire une routine de coucher qui soit apaisante, réaliste et facile à répéter.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment construire une routine de coucher",
  description:
    "Apprenez à construire une routine de coucher qui soit apaisante, réaliste et facile à répéter.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage:
    "https://www.calmasounds.com/fr/blog/how-to-build-a-bedtime-routine",
  datePublished: "2026-03-25",
  dateModified: "2026-03-30",
};

export default function BedtimeRoutineArticlePage() {
  return (
    <ArticlePage
      slug="how-to-build-a-bedtime-routine"
      jsonLd={articleJsonLd}
      title="Comment construire une routine de coucher vraiment apaisante"
      intro="Une bonne routine de coucher n'a pas besoin d'être compliquée ou parfaite. Ce qui compte le plus, c'est qu'elle soit réaliste, répétable et suffisamment apaisante pour aider votre corps et votre esprit à se détacher de la journée. De petits signaux constants fonctionnent souvent mieux que des routines ambitieuses que l'on ne suit qu'une seule fois."
      topLinkHref="/sleep-sounds-app"
      topLinkLabel="Explorer la page sommeil"
      ctaHref="/sleep-sounds-app"
      ctaLabel="Explorer l'application sommeil"
      secondaryCtaHref="/blog/best-sounds-for-sleep"
      secondaryCtaLabel="Lire les meilleurs sons pour dormir"
      ctaTitle="Explorez vos routines de coucher avec Calma"
      ctaText="Calma vous aide à créer des routines de coucher plus douces grâce à des paysages sonores personnalisés, audio apaisant et une atmosphère de soirée paisible."
      relatedArticles={[
        {
          href: "/blog/best-sounds-for-sleep",
          title: "Les meilleurs sons pour dormir",
          description:
            "Découvrez quels styles de sons de sommeil peuvent aider différentes personnes à se détendre.",
        },
        {
          href: "/blog/white-noise-for-sleep",
          title: "Bruit blanc pour le sommeil",
          description:
            "Apprenez quand le bruit blanc peut aider à créer un environnement de coucher plus calme.",
        },
      ]}
    >
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Commencez plus tôt que vous ne le pensez</h2>
        <p className="mt-4 leading-8 text-white/70">
          Une routine de coucher ne commence pas au moment où votre tête touche l'oreiller. Elle commence par la façon 
          dont vous terminez votre soirée. Même une courte fenêtre de transition avant de dormir peut aider votre 
          système nerveux à passer dans un mode plus calme.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Réduisez progressivement la stimulation</h2>
        <p className="mt-4 leading-8 text-white/70">
          L'objectif n'est pas de créer le silence en une seconde, mais de baisser doucement la stimulation. Une lumière 
          plus douce, moins d'entrées mentales et un audio plus calme peuvent tous aider à créer une transition plus 
          naturelle vers le sommeil.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Utilisez des signaux constants</h2>
        <p className="mt-4 leading-8 text-white/70">
          La répétition est essentielle. Lorsque vos soirées contiennent les mêmes signaux apaisants encore et encore, 
          votre cerveau commence à les reconnaître comme faisant partie du processus de sommeil. Cela peut être le même 
          paysage sonore, le même ordre d'activités ou le même petit rituel chaque nuit.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Gardez la routine simple</h2>
        <p className="mt-4 leading-8 text-white/70">
          La meilleure routine de coucher est celle que vous pouvez réellement répéter. Une routine avec deux ou trois 
          étapes apaisantes est souvent plus efficace qu'une séquence compliquée qui ressemble à des devoirs.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Le son peut aider à façonner l'humeur</h2>
        <p className="mt-4 leading-8 text-white/70">
          Un audio apaisant peut rendre le moment du coucher plus intentionnel. Certains réagissent mieux aux sons de 
          pluie, d'autres au bruit blanc ou à des paysages sonores ambiants plus doux. L'idée n'est pas d'imposer une 
          seule réponse, mais de créer un environnement où l'on se sent émotionnellement en sécurité et au calme.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">À quoi peut ressembler une routine simple</h2>
        <ul className="mt-4 space-y-3 text-white/70">
          <li>• Tamisez l'environnement et réduisez les entrées actives.</li>
          <li>• Choisissez un paysage sonore apaisant ou un mix audio de sommeil.</li>
          <li>• Répétez les mêmes petites étapes chaque soir.</li>
          <li>• Gardez un ton doux au lieu d'essayer de tout faire parfaitement.</li>
        </ul>
      </section>
    </ArticlePage>
  );
}
