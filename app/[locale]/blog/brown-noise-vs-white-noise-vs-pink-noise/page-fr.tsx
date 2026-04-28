import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";

export const metadata: Metadata = {
  title: "Bruit brun vs Bruit blanc vs Bruit rose | Blog Calma",
  description:
    "Explorez les différences entre les bruits blanc, rose et brun. Découvrez lequel est le meilleur pour votre sommeil, votre concentration ou la gestion du TDAH.",
  keywords: [
    "bruit brun vs bruit blanc",
    "bruit rose vs bruit blanc",
    "couleurs du bruit expliquées",
    "meilleur bruit pour la concentration",
    "bruit pour le TDAH",
    "blog calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Bruit brun vs Bruit blanc vs Bruit rose | Blog Calma",
    description:
      "Explorez les différences entre les bruits blanc, rose et brun. Découvrez lequel est le meilleur pour votre sommeil, votre concentration ou la gestion du TDAH.",
    url: "https://www.calmasounds.com/fr/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruit brun vs Bruit blanc vs Bruit rose | Blog Calma",
    description:
      "Explorez les différences entre les bruits blanc, rose et brun. Découvrez lequel est le meilleur pour votre sommeil, votre concentration ou la gestion du TDAH.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bruit brun vs Bruit blanc vs Bruit rose vs Bruit vert",
  description:
    "Un guide complet pour comprendre les couleurs du bruit, y compris le bruit vert, et leurs avantages uniques pour le sommeil et la concentration.",
  author: {
    "@type": "Organization",
    name: "Calma",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/fr/blog/brown-noise-vs-white-noise-vs-pink-noise",
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/white-noise-app"
      topLinkLabel="Explorer la page bruit blanc"
      title="Bruit brun vs Bruit blanc vs Bruit rose vs Bruit vert"
      intro="Tout ce qu'on appelle 'bruit blanc' n'est pas réellement blanc. En audio, les sons sont classés par 'couleurs' selon leur distribution de fréquence. Comprendre la différence entre les bruits blanc, rose, brun et vert peut vous aider à choisir le bon environnement pour un meilleur sommeil ou une concentration plus profonde."
      ctaHref="/white-noise-app"
      ctaLabel="Explorer l'application bruit blanc"
      secondaryCtaHref="/sound-mixer-app"
      secondaryCtaLabel="Explorer le mixer sonore"
      tableOfContents={[
        { id: "video", title: "Vidéo : Les couleurs expliquées" },
        { id: "white-noise", title: "Bruit blanc" },
        { id: "pink-noise", title: "Bruit rose" },
        { id: "brown-noise", title: "Bruit brun" },
        { id: "green-noise", title: "Bruit vert" },
        { id: "summary", title: "Lequel choisir ?" },
      ]}
      relatedArticles={[
        {
          href: "/blog/white-noise-for-sleep",
          title: "Bruit blanc pour le sommeil",
          description:
            "Découvrez comment le bruit blanc peut vous aider à vous endormir plus rapidement.",
        },
        {
          href: "/blog/best-sounds-for-studying",
          title: "Les meilleurs sons pour étudier",
          description:
            "Découvrez quels sons de fond sont les plus efficaces pour la concentration.",
        },
      ]}
    >
      <ArticleSection id="video" title="Regardez : Les couleurs du bruit expliquées">
        <p className="mb-6">
          Consultez notre guide rapide sur YouTube Shorts pour entendre la différence et voir quelle couleur pourrait être votre préférée.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/4SXR34eNAmY"
                    title="Les couleurs du bruit : Blanc, Rose, Brun et Vert"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Bruit blanc : Le polyvalent">
        <p>
          Le bruit blanc contient toutes les fréquences audibles jouées à la même intensité. Il ressemble à de l'électricité statique. Parce qu'il couvre toutes les fréquences, il est exceptionnel pour masquer les bruits soudains comme une porte qui claque ou des klaxons.
        </p>
        <p className="mt-4">
          <strong>Idéal pour :</strong> Masquer les bruits environnementaux, soutenir le sommeil des nourrissons et créer un fond neutre dans les bureaux occupés.
        </p>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="Bruit rose : Le choix naturel">
        <p>
          Le bruit rose est similaire au bruit blanc mais possède plus d'énergie dans les basses fréquences. Cela crée un son plus doux et plus équilibré que beaucoup trouvent plus naturel. Pensez au son d'une pluie régulière ou du vent dans les feuilles.
        </p>
        <p className="mt-4">
          <strong>Idéal pour :</strong> Améliorer la qualité du sommeil, se détendre sans le côté 'statique' du bruit blanc, et la concentration à long terme.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Bruit brun : Le calme profond">
        <p>
          Le bruit brun (parfois appelé bruit rouge) va encore plus loin que le bruit rose, en se concentrant lourdement sur les basses fréquences. Il ressemble à un grondement sourd, une cascade lointaine ou le ronronnement d'un avion.
        </p>
        <p className="mt-4">
          Récemment, le bruit brun a gagné une grande popularité dans la communauté TDAH. Beaucoup trouvent que sa qualité profonde et immersive aide à 'calmer' un esprit agité plus efficacement.
        </p>
        <p className="mt-4">
          <strong>Idéal pour :</strong> Gestion du TDAH, concentration profonde, relaxation intense.
        </p>
      </ArticleSection>

      <ArticleSection id="green-noise" title="Bruit vert : L'harmonie de la nature">
        <p>
          Le bruit vert est souvent décrit comme le son de fond de la nature. Il se concentre sur les fréquences moyennes, similaire à ce qu'on pourrait entendre dans une forêt ou près d'un ruisseau tranquille.
        </p>
        <p className="mt-4">
          <strong>Idéal pour :</strong> Créer une atmosphère paisible et pour ceux qui aiment les paysages sonores naturels.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="Lequel devriez-vous choisir ?">
        <p>
          La 'meilleure' couleur est entièrement personnelle. Nous recommandons de commencer par le bruit blanc si vous devez bloquer des bruits forts spécifiques, mais de passer au rose ou au brun si vous trouvez le statique du bruit blanc trop aigu.
        </p>
        <p className="mt-4">
          Avec <strong>Calma</strong>, vous pouvez mélanger différentes couches de bruit pour créer un paysage sonore vraiment personnalisé qui fonctionne pour votre cerveau unique.
        </p>
      </ArticleSection>
    </ArticlePage>
  );
}
