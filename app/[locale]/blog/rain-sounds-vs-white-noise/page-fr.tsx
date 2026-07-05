import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

export const metadata: Metadata = {
  title: "La pluie est-elle un bruit blanc ? La réponse surprenante | Calma",
  description:
    "Non — la pluie n'est PAS un bruit blanc. La vérité surprenante : la pluie est un bruit rose, et elle aide à mieux dormir. Extraits audio gratuits.",
  keywords: [
    "la pluie est elle un bruit blanc",
    "bruit de la pluie bruit blanc",
    "pluie bruit rose ou blanc",
    "sons de pluie pour dormir",
    "bruit blanc pluie",
    "calma blog",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/blog/rain-sounds-vs-white-noise",
  },
  openGraph: {
    title: "La pluie est-elle un bruit blanc ? La réponse surprenante",
    description:
      "Non — la pluie n'est PAS un bruit blanc. Elle est un bruit rose. Extraits audio gratuits.",
    url: "https://www.calmasounds.com/fr/blog/rain-sounds-vs-white-noise",
    siteName: "Calma",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "La pluie est-elle un bruit blanc ? La science répond",
    description:
      "Non — la pluie n'est PAS un bruit blanc. Elle est un bruit rose et aide à mieux dormir.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "La pluie est-elle considérée comme un bruit blanc ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Techniquement, non. Les bruits de pluie sont généralement considérés comme des bruits roses. Alors que le bruit blanc a une énergie égale sur toutes les fréquences (comme un sifflement), la pluie a plus d'énergie dans les basses fréquences, ce qui la rend plus profonde et apaisante."
      }
    },
    {
      "@type": "Question",
      "name": "La pluie est-elle un bruit blanc ou rose ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La pluie naturelle est classée comme un bruit rose. Le bruit rose contient toutes les fréquences, mais il amplifie les sons graves et adoucit les aigus, ce qui le rend plus naturel pour l'oreille humaine."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on considérer la pluie comme un bruit blanc pour dormir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, dans le langage courant, le terme 'bruit blanc' est souvent utilisé pour désigner tout son de fond constant. Bien que scientifiquement inexact, la pluie remplit le même rôle que le bruit blanc en masquant les bruits indésirables."
      }
    },
    {
      "@type": "Question",
      "name": "Lequel est le meilleur pour dormir : la pluie ou le bruit blanc ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les sons de pluie (bruit rose) sont parfaits pour se détendre. Le bruit blanc est meilleur pour masquer agressivement les bruits aigus ou imprévisibles, comme les ronflements."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi les sons de pluie aident-ils à dormir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La pluie crée un environnement acoustique prévisible et apaisant, ce qui signale au cerveau que vous êtes en sécurité tout en masquant les bruits extérieurs."
      }
    }
  ]
};

export default function RainSoundsVsWhiteNoisePageFR() {
  return (
    <ArticlePage
      slug="rain-sounds-vs-white-noise"
      jsonLd={articleJsonLd}
      title="La pluie est-elle considérée comme un bruit blanc ?"
      intro="Si vous avez déjà utilisé le son d'un orage pour vous endormir, vous vous êtes peut-être demandé : la pluie est-elle un bruit blanc ? Les sons de pluie et le bruit blanc sont incroyablement populaires, mais ils ont des objectifs différents. Dans ce guide, nous répondons à la question avec des arguments scientifiques."
      topLinkHref="/fr/nature-sounds-app"
      topLinkLabel="Découvrir l'appli sons de la nature"
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Télécharger l'application Calma"
      secondaryCtaHref="/fr/white-noise-app"
      secondaryCtaLabel="Explorer l'appli bruit blanc"
      tableOfContents={[
        { id: "is-rain-white-noise", title: "La pluie est-elle un bruit blanc ?" },
        { id: "what-is-white-noise", title: "Qu'est-ce que le vrai bruit blanc ?" },
        { id: "when-to-choose-rain", title: "Quand choisir la pluie ?" },
        { id: "when-to-choose-white-noise", title: "Quand choisir le bruit blanc ?" },
        { id: "verdict", title: "Lequel est le meilleur pour dormir ?" },
        { id: "faq", title: "Foire Aux Questions (FAQ)" },
      ]}
      relatedArticles={[
        {
          href: "/fr/blog/white-noise-for-sleep",
          title: "Le Bruit Blanc pour Dormir",
          description: "Comment le bruit blanc bloque les distractions.",
        },
        {
          href: "/fr/blog/best-sounds-for-sleep",
          title: "Les Meilleurs Sons pour Dormir",
          description: "Découvrez les sons approuvés par la science.",
        },
      ]}
    >
      <ArticleSection id="is-rain-white-noise" title="La pluie est-elle un bruit blanc ? (Réponse scientifique)">
        <p className="mt-4 leading-8 text-white/70">
          La réponse courte est : <strong>Non, la pluie n'est pas un bruit blanc.</strong> Les sons naturels de la pluie sont considérés comme des <strong>bruits roses</strong>. 
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Le bruit rose (comme la pluie) contient toutes les fréquences, mais il met plus d'énergie dans les fréquences basses et profondes. Cela rend la pluie beaucoup plus douce, profonde et organique pour l'oreille humaine.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Pluie Constante (Bruit Rose)" 
          description="Remarquez le son profond, naturel et atmosphérique qui favorise le confort émotionnel."
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="what-is-white-noise" title="Qu'est-ce que le vrai bruit blanc ?">
        <p className="mt-4 leading-8 text-white/70">
          Techniquement, il contient <strong>toutes les fréquences audibles jouées à une intensité égale</strong>. Comme les aigus sont aussi forts que les graves, il sonne comme la statique d'un téléviseur ou un ventilateur.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Vrai Bruit Blanc" 
          description="Un sifflement continu à large spectre qui bloque agressivement les distractions."
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="when-to-choose-rain" title="Quand choisir les bruits de pluie">
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li>Vous voulez une atmosphère de sommeil naturelle et confortable.</li>
          <li>Vous souffrez d'anxiété et avez besoin d'un son qui signale la \"sécurité\".</li>
          <li>Vous trouvez le sifflement aigu du bruit blanc irritant.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="when-to-choose-white-noise" title="Quand choisir le bruit blanc">
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li>Vous êtes sensible aux bruits extérieurs imprévisibles (ex. sirènes, chiens).</li>
          <li>Vous dormez à côté d'un partenaire qui ronfle.</li>
          <li>Vous avez besoin d'un son de fond neutre et constant.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="verdict" title="Lequel est le meilleur pour dormir ?">
        <p className="mt-4 leading-8 text-white/70">
          La meilleure solution ? <strong>Mélangez-les.</strong> Avec une application gratuite comme <strong>Calma</strong>, vous pouvez superposer une base de bruit blanc avec une forte averse pour obtenir la couverture acoustique parfaite.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
            aria-label="Télécharger l'application Calma"
          >
            <Image
              src="/google-play-badge.png"
              alt="Disponible sur Google Play"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Foire Aux Questions (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">La pluie est-elle considérée comme un bruit blanc ?</h3>
            <p className="mt-2 leading-7 text-white/70">Techniquement, non. Les bruits de pluie sont généralement considérés comme des bruits roses et non des bruits blancs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">La pluie est-elle un bruit blanc ou rose ?</h3>
            <p className="mt-2 leading-7 text-white/70">La pluie naturelle est classée comme un bruit rose, car elle amplifie les fréquences basses pour un son naturel.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Peut-on considérer la pluie comme un bruit blanc pour dormir ?</h3>
            <p className="mt-2 leading-7 text-white/70">Oui, familièrement, 'bruit blanc' est utilisé pour tout son de fond constant, y compris la pluie.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Lequel est le meilleur pour dormir : la pluie ou le bruit blanc ?</h3>
            <p className="mt-2 leading-7 text-white/70">La pluie (bruit rose) est idéale pour se détendre, tandis que le bruit blanc est meilleur pour masquer les ronflements.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Pourquoi les sons de pluie aident-ils à dormir ?</h3>
            <p className="mt-2 leading-7 text-white/70">La pluie masque les bruits soudains et calme naturellement le système nerveux.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
