import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "Meilleurs Sons pour Acouphènes et Thérapie Sonore | Calma";
const articleDescription = "Découvrez comment la thérapie sonore et le bruit blanc peuvent soulager les acouphènes. Apprenez à masquer les bourdonnements.";
const articleUrl = "https://www.calmasounds.com/fr/blog/sounds-for-tinnitus-relief";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "tinnitus", "sound therapy", "masking", "relief"
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "Calma",
    locale: "fr",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Meilleurs Sons pour Acouphènes : Guide de Thérapie Sonore",
      "description": articleDescription,
      "author": { "@type": "Organization", "name": "Calma Team" },
      "publisher": { "@type": "Organization", "name": "Calma" },
      "mainEntityOfPage": articleUrl,
      "datePublished": "2026-05-09",
      "dateModified": new Date().toISOString().split('T')[0],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quels sont les meilleurs sons pour les acouphènes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bruit blanc pour les aigus, sons de la nature pour la relaxation."
          }
        },
        {
          "@type": "Question",
          "name": "Comment fonctionne la thérapie sonore ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elle aide le cerveau à s'habituer et à ignorer les acouphènes."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il masquer complètement les acouphènes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, un masquage partiel est recommandé par les experts."
          }
        }
      ]
    }
  ]
};

export default function SoundsForTinnitusReliefPage() {
  return (
    <ArticlePage
      slug="sounds-for-tinnitus-relief"
      jsonLd={articleJsonLd}
      topLinkHref="/fr/tinnitus-sounds-app"
      topLinkLabel="Télécharger l'App Acouphènes Gratuitement"
      title="Meilleurs Sons pour Acouphènes : Guide de Thérapie Sonore"
      intro="Vivre avec des acouphènes est difficile. La thérapie sonore est l'un des moyens les plus efficaces de gérer les bourdonnements et d'entraîner votre cerveau à les ignorer."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Télécharger l'App Acouphènes Gratuitement"
      secondaryCtaHref="/fr/tinnitus-sounds-app"
      secondaryCtaLabel="En savoir plus sur l'app"
      tableOfContents={[
        { id: "what-is-sound-therapy", title: "Comment Fonctionne la Thérapie Sonore" },
        { id: "white-noise", title: "Bruit Blanc" },
        { id: "brown-noise", title: "Bruit Marron" },
        { id: "nature-sounds", title: "Sons de la Nature" },
        { id: "habituation", title: "Le Secret : L'Habituation" },
        { id: "faq", title: "FAQ" },
      ]}
      relatedArticles={[]}
    >
      <ArticleSection id="what-is-sound-therapy" title="Comment Fonctionne la Thérapie Sonore">
        <p className="mt-4 leading-8 text-white/70">
          Elle fournit un son de fond neutre qui réduit le contraste entre le silence et les acouphènes.
        </p>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Bruit Blanc">
        <p className="mt-4 leading-8 text-white/70">
          Excellent pour masquer les bourdonnements aigus.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="White Noise" 
          description=""
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Bruit Marron">
        <p className="mt-4 leading-8 text-white/70">
          Un bruit profond très réconfortant pour dormir.
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="Sons de la Nature">
        <p className="mt-4 leading-8 text-white/70">
          La pluie et l'océan distraient naturellement le cerveau.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Steady Rain" 
          description=""
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="habituation" title="Le Secret : L'Habituation">
        <p className="mt-4 leading-8 text-white/70">
          L'objectif est l'habituation. Le volume doit être juste en dessous de vos acouphènes.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
          >
            <Image
              src="/google-play-badge.png"
              alt="Download Calma App for Free"
              width={240}
              height={93}
              className="h-[60px] w-auto object-contain"
            />
          </a>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="FAQ">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Quels sont les meilleurs sons pour les acouphènes ?</h3>
            <p className="mt-2 leading-7 text-white/70">Bruit blanc pour les aigus, sons de la nature pour la relaxation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Comment fonctionne la thérapie sonore ?</h3>
            <p className="mt-2 leading-7 text-white/70">Elle aide le cerveau à s'habituer et à ignorer les acouphènes.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Faut-il masquer complètement les acouphènes ?</h3>
            <p className="mt-2 leading-7 text-white/70">Non, un masquage partiel est recommandé par les experts.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
