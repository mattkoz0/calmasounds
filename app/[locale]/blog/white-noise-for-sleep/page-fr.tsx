import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

const articleTitle = "Bruit blanc pour dormir (Guide 2026) | Blog Calma";
const articleDescription =
  "Découvrez comment le bruit blanc pour dormir bloque les distractions, améliore le sommeil profond et aide les bébés à s'endormir plus rapidement.";
const articleUrl = "https://www.calmasounds.com/fr/blog/white-noise-for-sleep";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "bruit blanc pour dormir",
    "bruit blanc sommeil",
    "bruit blanc nuit",
    "sons de sommeil bruit blanc",
    "does white noise help you sleep",
    "blog calma",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "Calma",
    locale: "fr_FR",
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
  "@type": "Article",
  headline: "Bruit blanc pour dormir : la science du masquage sonore",
  description: articleDescription,
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: articleUrl,
  datePublished: "2026-03-25",
  dateModified: new Date().toISOString().split('T')[0],
};

const relatedArticles = [
  {
    href: "/fr/blog/rain-sounds-vs-white-noise",
    title: "Bruit de pluie vs Bruit blanc",
    description:
      "Comparez la sensation émotionnelle et les différences pratiques entre la pluie naturelle et la statique artificielle.",
  },
  {
    href: "/fr/blog/best-sounds-for-sleep",
    title: "Meilleurs sons pour dormir",
    description:
      "Explorez les différents styles de sons pour dormir, du bruit rose aux vagues de l'océan, et ce qui vous convient le mieux.",
  },
];

export default function WhiteNoiseForSleepPage() {
  return (
    <ArticlePage
      slug="white-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/fr/white-noise-app"
      topLinkLabel="Découvrir l'app de bruit blanc"
      title="Bruit blanc pour dormir : quand peut-il réellement vous aider ?"
      intro="Le bruit blanc pour dormir est devenu un phénomène mondial. Des adultes stressés vivant dans des villes animées aux parents qui tentent de faire dormir leur nouveau-né toute la nuit, des millions de personnes comptent sur ce sifflement statique et constant pour s'endormir. Mais comment cela fonctionne-t-il vraiment ? Améliore-t-il la qualité de votre sommeil profond, ou s'agit-il simplement d'un outil pour bloquer un partenaire qui ronfle ?"
      ctaHref="/fr/white-noise-app"
      ctaLabel="Écouter du bruit blanc"
      secondaryCtaHref="/fr/blog/rain-sounds-vs-white-noise"
      secondaryCtaLabel="Lire pluie vs bruit blanc"
      tableOfContents={[
        { id: "qu-est-ce-que-c-est", title: "Qu'est-ce que le bruit blanc exactement ?" },
        { id: "comment-ca-marche", title: "Comment le masquage sonore améliore le sommeil" },
        { id: "pour-les-bebes", title: "Pourquoi les bébés adorent le bruit blanc" },
        { id: "bonnes-pratiques", title: "Comment l'utiliser en toute sécurité" },
        { id: "faq", title: "Foire Aux Questions (FAQ)" },
      ]}
      relatedArticles={relatedArticles}
    >
      <ArticleSection id="qu-est-ce-que-c-est" title="Qu'est-ce que le bruit blanc exactement ?">
        <p className="mt-4 leading-8 text-white/70">
          En physique, le bruit blanc est un son contenant toutes les fréquences de la gamme de l'audition humaine (entre 20 hertz et 20 000 hertz) jouées à une intensité égale. Parce qu'il contient toutes les fréquences simultanément, il ressemble à un sifflement constant, similaire au bruit de neige d'un téléviseur sans signal, à une radio non réglée ou au ronronnement d'un ventilateur.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Bruit Blanc Pur" 
          description="Un son constant à spectre complet."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          Le terme « blanc » provient de la lumière blanche, qui est créée lorsque toutes les couleurs du spectre visuel sont combinées. De la même manière, le bruit blanc est une combinaison de toutes les « couleurs » acoustiques.
        </p>
      </ArticleSection>

      <ArticleSection id="comment-ca-marche" title="Comment le masquage sonore améliore le sommeil">
        <p className="mt-4 leading-8 text-white/70">
          Le bruit blanc ne se contente pas de bloquer les sons en étant fort ; il fonctionne grâce à un phénomène appelé <strong>masquage sonore</strong>. Pendant votre sommeil, votre cerveau continue de traiter les sons pour vous alerter du danger. Ce qui vous réveille n'est pas nécessairement le volume d'un bruit (comme une porte qui claque), mais le changement soudain du silence au bruit.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Parce que le bruit blanc contient toutes les fréquences, il comble essentiellement le silence. Il élève le niveau de base du bruit de fond de sorte que les bruits soudains — comme la circulation, un chien qui aboie ou un partenaire qui ronfle — se fondent dans la masse et ne déclenchent pas la réaction de réveil de votre cerveau. Cela vous aide à rester dans les phases de sommeil les plus profondes et les plus réparatrices.
        </p>
      </ArticleSection>

      <ArticleSection id="pour-les-bebes" title="Pourquoi les bébés adorent le bruit blanc">
        <p className="mt-4 leading-8 text-white/70">
          Si vous avez déjà essayé d'endormir un nouveau-né en larmes, vous connaissez probablement le pouvoir d'un grand « chhhhh ». Le bruit blanc est incroyablement efficace pour les nourrissons car il imite l'environnement acoustique de l'utérus maternel.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Dans l'utérus, le bébé entend le flux sanguin constant et bruyant de sa mère, ce qui est en fait très similaire à un bruit blanc ou marron lourd à basse fréquence. Diffuser du bruit blanc dans la chambre déclenche un réflexe d'apaisement, signalant au bébé qu'il se trouve dans un environnement sûr et familier.
        </p>
      </ArticleSection>

      <ArticleSection id="bonnes-pratiques" title="Comment utiliser le bruit blanc en toute sécurité">
        <p className="mt-4 leading-8 text-white/70">
          Bien que le bruit blanc soit extrêmement utile, il est important de l'utiliser correctement pour éviter la fatigue auditive ou la dépendance :
        </p>
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li><strong>Gardez un volume sûr :</strong> Le son doit agir comme un bourdonnement de fond, pas comme un concert. Maintenez le volume autour de 50 à 60 décibels (ce qui équivaut à peu près au volume d'une conversation tranquille ou d'une douche qui coule).</li>
          <li><strong>Faites attention à la distance :</strong> Ne placez jamais un téléphone ou une machine à bruit blanc juste à côté de votre tête (ou de celle de votre bébé). Gardez-le à au moins 2 mètres de distance, de préférence à l'autre bout de la pièce.</li>
          <li><strong>Expérimentez avec les différentes „couleurs“ :</strong> Si le bruit blanc pur vous semble trop aigu ou strident, essayez le Bruit Rose (qui accentue les fréquences plus basses comme la pluie) ou le Bruit Marron (qui ressemble au grondement d'une cascade profonde).</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="faq" title="Foire Aux Questions (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Peut-on devenir dépendant du bruit blanc pour dormir ?</h3>
            <p className="mt-2 leading-7 text-white/70">On ne développe pas de dépendance physique au bruit blanc, mais on peut instaurer une habitude psychologique forte. Votre cerveau apprend à associer le son au sommeil (un processus appelé conditionnement classique). Si vous souhaitez arrêter de l'utiliser, il est préférable de baisser progressivement le volume sur quelques semaines plutôt que de l'arrêter brusquement.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Le bruit blanc ou le bruit rose est-il meilleur pour le sommeil ?</h3>
            <p className="mt-2 leading-7 text-white/70">De nombreuses études suggèrent que le bruit rose (qui ressemble à une pluie régulière) pourrait être plus efficace pour améliorer le sommeil profond et de ondes lentes, car son équilibre de fréquences est plus doux pour l'oreille humaine. Cependant, le bruit blanc reste généralement plus efficace pour masquer les distractions très aiguës et soudaines.</p>
          </div>
        </div>
      </ArticleSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Peut-on devenir dépendant du bruit blanc pour dormir ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "On ne développe pas de dépendance physique au bruit blanc, mais on peut instaurer une habitude psychologique forte. Votre cerveau apprend à associer le son au sommeil. Si vous souhaitez arrêter de l'utiliser, il est préférable de baisser progressivement le volume sur quelques semaines."
                }
              },
              {
                "@type": "Question",
                "name": "Le bruit blanc ou le bruit rose est-il meilleur pour le sommeil ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "De nombreuses études suggèrent que le bruit rose pourrait être plus efficace pour améliorer le sommeil profond et de ondes lentes, car son équilibre de fréquences est plus doux pour l'oreille humaine. Cependant, le bruit blanc reste généralement plus efficace pour masquer les distractions très aiguës et soudaines."
                }
              }
            ]
          })
        }}
      />
      
      <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 font-bold text-xl">CT</div>
        <div>
          <p className="font-semibold text-white">Écrit par l'équipe Calma</p>
          <p className="text-sm text-white/60">Défenseurs de l'hygiène du sommeil qui vous aident à instaurer des rituels de coucher plus calmes et fondés sur la science.</p>
        </div>
      </div>
    </ArticlePage>
  );
}
