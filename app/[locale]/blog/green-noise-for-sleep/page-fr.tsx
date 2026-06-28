import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Bruit vert pour le sommeil : La façon naturelle de se reposer | Blog Calma",
  description:
    "Découvrez ce qu'est le bruit vert, comment il se compare aux bruits blanc et marron, et pourquoi ses fréquences semblables à celles de la nature pourraient être le paysage sonore idéal pour dormir.",
  keywords: [
    "bruit vert",
    "bruit vert pour le sommeil",
    "qu'est ce que le bruit vert",
    "bruit vert vs bruit blanc",
    "fréquences naturelles",
    "sons apaisants",
    "blog calma",
    "application pour mieux dormir",
    "favoriser le sommeil profond",
    "aide à l'endormissement",
    "sons apaisants nuit",
    "améliorer qualité du sommeil",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/blog/green-noise-for-sleep",
  },
  openGraph: {
    title: "Bruit vert pour le sommeil : La façon naturelle de se reposer | Blog Calma",
    description:
      "Découvrez ce qu'est le bruit vert, comment il se compare aux bruits blanc et marron, et pourquoi ses fréquences semblables à celles de la nature pourraient être le paysage sonore idéal pour dormir.",
    url: "https://www.calmasounds.com/fr/blog/green-noise-for-sleep",
    siteName: "Calma",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruit vert pour le sommeil : La façon naturelle de se reposer | Blog Calma",
    description:
      "Découvrez ce qu'est le bruit vert, comment il se compare aux bruits blanc et marron, et pourquoi ses fréquences semblables à celles de la nature pourraient être le paysage sonore idéal pour dormir.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bruit vert pour le sommeil : La façon naturelle de se reposer",
  description:
    "Découvrez ce qu'est le bruit vert, comment il se compare aux bruits blanc et marron, et pourquoi ses fréquences semblables à celles de la nature pourraient être le paysage sonore idéal pour dormir.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/fr/blog/green-noise-for-sleep",
  datePublished: new Date().toISOString().split('T')[0],
  dateModified: new Date().toISOString().split('T')[0],
};

export default function GreenNoiseForSleepPage() {
  return (
    <ArticlePage
      slug="green-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/sleep-sounds-app"
      topLinkLabel="Explorer les sons de sommeil"
      title="Bruit vert pour le sommeil : La façon naturelle de se reposer"
      intro="Si vous avez passé du temps à explorer les sons pour un meilleur sommeil, vous avez probablement entendu parler du bruit blanc. Mais il existe une couleur de bruit moins connue qui a tranquillement gagné en popularité : le bruit vert. Positionné en plein milieu du spectre audio, le bruit vert imite les sons ambiants de la nature, ce qui en fait l'une des options les plus apaisantes pour la relaxation et le repos profond."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Télécharger sur Google Play"
      secondaryCtaHref="/relaxing-sounds"
      secondaryCtaLabel="Explorer les sons relaxants"
      ctaTitle="Découvrez le pouvoir des paysages sonores naturels"
      ctaText="Écoutez le bruit vert et des environnements naturels sélectionnés à la main pour créer votre atmosphère relaxante parfaite avec l'application Calma."
      relatedArticles={[
        {
          href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
          title: "Bruit marron vs blanc vs rose",
          description: "Explorez les différences entre les couleurs de bruit pour le sommeil et la concentration.",
        },
        {
          href: "/blog/benefits-of-nature-sounds-for-relaxation",
          title: "Sons de la nature pour une relaxation profonde",
          description: "Comment la pluie et les vagues océaniques agissent comme un bruit blanc naturel.",
        },
        {
          href: "/blog/best-sounds-for-sleep",
          title: "Les meilleurs sons pour dormir",
          description: "Un guide pratique sur la pluie, le bruit blanc et les paysages sonores de sommeil plus doux.",
        },
      ]}
    >
      <ArticleSection title="Qu'est-ce que le bruit vert exactement ?">
        <p>
          Comme les couleurs de la lumière, le bruit se décline en \"couleurs\" basées sur la façon dont l'énergie est répartie sur différentes fréquences. Alors que le bruit blanc contient toutes les fréquences à égale intensité (ressemblant à la statique d'une télévision ou au sifflement d'un ventilateur), le bruit vert se concentre spécifiquement sur le centre du spectre des fréquences.
        </p>
        <p>
          Il élimine les sifflements aigus et discordants et les grondements agressifs et profonds. Le résultat est un profil sonore qui ressemble étroitement au bourdonnement ambiant du monde naturel - pensez à une chute d'eau à courte distance, à une brise océanique constante ou à des feuilles qui bruissent constamment dans le vent.
        </p>
      </ArticleSection>

      <ArticleSection title="Pourquoi le bruit vert vous aide à dormir">
        <p>
          Le bruit vert est particulièrement efficace pour le sommeil pour deux raisons fondamentales : le confort évolutif et le masquage acoustique.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
          <li>
            <strong>Confort évolutif :</strong> Le cerveau humain a évolué dans des environnements naturels, pas dans des chambres modernes et silencieuses. Les fréquences trouvées dans le bruit vert signalent la \"sécurité\" au système nerveux, aidant à réduire un esprit hyperactif et à abaisser naturellement les niveaux de stress avant de se coucher.
          </li>
          <li>
            <strong>Masquage acoustique :</strong> Tout comme les autres couleurs de bruit, le bruit vert élève le niveau sonore ambiant de votre pièce. Cette couverture sonore continue masque efficacement les bruits soudains de la maison, les aboiements de chiens ou la circulation extérieure qui pourraient autrement vous réveiller en sursaut.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Comment intégrer le bruit vert dans votre routine">
        <p>
          Pour intégrer le bruit vert dans votre routine nocturne, essayez de l'allumer 20 à 30 minutes avant de prévoir de fermer les yeux. Commencez à un volume modéré - assez fort pour masquer votre environnement, mais pas trop fort pour qu'il exige votre attention explicite.
        </p>
        <p>
          Avec une application comme Calma, vous pouvez expérimenter en mélangeant le bruit vert avec des éléments comme une pluie régulière ou un léger tonnerre lointain pour créer votre propre sanctuaire naturel parfait. N'oubliez pas que l'objectif est un engagement sans effort ; vous voulez un son dans lequel votre cerveau peut facilement s'enfoncer sans trop analyser l'audio.
        </p>
      </ArticleSection>
    </ArticlePage>
  );
}
