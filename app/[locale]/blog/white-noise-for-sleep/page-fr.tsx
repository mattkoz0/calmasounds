import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "Pourquoi le bruit blanc aide-t-il à dormir ? (2026) | Calma";
const articleDescription =
  "Le bruit blanc aide-t-il à dormir ? Découvrez comment le bruit blanc masque les distractions et améliore la qualité du sommeil profond. Avec extraits audio.";
const articleUrl = "https://www.calmasounds.com/fr/blog/white-noise-for-sleep";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "bruit blanc pour dormir",
    "pourquoi le bruit blanc aide a dormir",
    "bruit blanc sommeil",
    "bruit blanc dormir",
    "bruits blancs pour dormir",
    "calma blog",
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
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pourquoi le bruit blanc aide-t-il à dormir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le bruit blanc vous aide à dormir en augmentant le niveau sonore de base dans votre chambre. Cela réduit le contraste entre le silence et les bruits soudains (comme la circulation, les ronflements ou les portes), de sorte que votre cerveau est moins susceptible de les enregistrer comme des menaces et de vous réveiller."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que le bruit blanc exactement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le bruit blanc est un son continu contenant toutes les fréquences audibles à intensité égale, semblable à la statique, à un ventilateur ou à un climatiseur. Il crée un environnement audio prévisible qui masque les perturbations soudaines."
      }
    },
    {
      "@type": "Question",
      "name": "Le bruit blanc ou rose est-il meilleur pour dormir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De nombreuses études suggèrent que le bruit rose (qui ressemble à une pluie constante) pourrait être meilleur pour améliorer le sommeil profond car son équilibre de fréquence est plus doux pour l'oreille humaine. Cependant, le bruit blanc est généralement préférable pour masquer les distractions extrêmement aiguës."
      }
    },
    {
      "@type": "Question",
      "name": "Est-il sûr de dormir avec du bruit blanc toutes les nuits ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, dormir avec du bruit blanc est généralement sans danger pour les adultes lorsque le volume reste inférieur à 60 dB (environ le niveau d'une conversation calme). Placez la source sonore à au moins 2 mètres de votre tête."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on devenir dépendant au bruit blanc pour dormir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous ne devenez pas physiquement dépendant du bruit blanc, mais vous pouvez développer une forte habitude psychologique. Votre cerveau apprend à associer le son au sommeil. Si vous voulez arrêter de l'utiliser, il est préférable de baisser progressivement le volume sur quelques semaines."
      }
    }
  ]
};

const relatedArticles = [
  {
    href: "/fr/blog/rain-sounds-vs-white-noise",
    title: "Sons de Pluie vs Bruit Blanc",
    description: "Comparez les différences pratiques entre la pluie naturelle et la statique artificielle.",
  },
  {
    href: "/fr/blog/best-sounds-for-sleep",
    title: "Les Meilleurs Sons pour Dormir",
    description: "Découvrez différents styles de sons pour dormir, du bruit rose aux vagues de l'océan.",
  },
];

export default function WhiteNoiseForSleepPageFR() {
  return (
    <ArticlePage
      slug="white-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/fr/white-noise-app"
      topLinkLabel="Découvrir l'appli bruit blanc"
      title="Pourquoi le bruit blanc aide-t-il à dormir ? La science expliquée"
      intro="Le bruit blanc pour dormir est devenu un phénomène mondial. Des adultes stressés vivant dans des villes animées aux parents essayant de faire faire leurs nuits à leurs nouveau-nés, des millions de personnes comptent sur ce 'sifflement' constant. Mais comment ça marche vraiment ? Est-ce que cela améliore la qualité de votre sommeil profond, ou est-ce juste un outil pour masquer un partenaire qui ronfle ?"
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Télécharger l'application Calma"
      secondaryCtaHref="/fr/white-noise-app"
      secondaryCtaLabel="Explorer le lecteur de bruit blanc"
      tableOfContents={[
        { id: "how-it-works", title: "Comment le masquage sonore améliore le sommeil" },
        { id: "what-is-it", title: "Qu'est-ce que le bruit blanc exactement ?" },
        { id: "comparison-table", title: "Bruit Blanc vs Rose vs Marron" },
        { id: "best-practices", title: "Comment l'utiliser en toute sécurité" },
        { id: "faq", title: "Foire Aux Questions" },
      ]}
      relatedArticles={relatedArticles}
    >
      <ArticleSection id="how-it-works" title="Comment le masquage sonore améliore le sommeil">
        <p className="mt-4 leading-8 text-white/70">
          Le bruit blanc ne bloque pas simplement les sons en étant fort ; il fonctionne grâce à un phénomène appelé <strong>masquage sonore</strong>. Lorsque vous dormez, votre cerveau continue de traiter les sons pour vous alerter du danger. Ce qui vous réveille n'est pas nécessairement le volume d'un bruit (comme une porte qui claque), mais le changement soudain entre le silence et le bruit.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Parce que le bruit blanc contient toutes les fréquences, il remplit essentiellement le silence. Il augmente le niveau de base du bruit de fond afin que les sons soudains (comme la circulation, un chien qui aboie ou un partenaire qui ronfle) se fondent et ne déclenchent pas la réaction de \"réveil\" de votre cerveau.
        </p>
      </ArticleSection>

      <ArticleSection id="what-is-it" title="Qu'est-ce que le bruit blanc exactement ?">
        <p className="mt-4 leading-8 text-white/70">
          En physique, le bruit blanc est un son qui contient chaque fréquence dans la plage de l'audition humaine (entre 20 et 20 000 hertz) jouée à une intensité égale. Parce qu'il contient toutes les fréquences simultanément, il sonne comme une statique de télévision ou un ventilateur.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Vrai Bruit Blanc" 
          description="Un son constant à large spectre qui bloque les bruits aigus."
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="comparison-table" title="Bruit Blanc vs Rose vs Marron pour Dormir">
        <p className="mt-4 leading-8 text-white/70">
          Tout le \"bruit blanc\" n'est pas réellement blanc. En ingénierie audio, les sons continus sont classés en couleurs en fonction de leur équilibre de fréquence. Choisir la bonne couleur est crucial pour une bonne nuit de sommeil.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-slate-800/50 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Couleur du Bruit</th>
                <th className="px-6 py-4 font-semibold">Focus sur la Fréquence</th>
                <th className="px-6 py-4 font-semibold">Idéal pour</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-300">Bruit Blanc</td>
                <td className="px-6 py-4">Égal sur toutes les fréquences.</td>
                <td className="px-6 py-4">Masquer les bruits aigus et imprévisibles (ronflements, chiens).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-pink-300">Bruit Rose</td>
                <td className="px-6 py-4">Basses fréquences amplifiées (sonne comme la pluie).</td>
                <td className="px-6 py-4">Améliorer le sommeil profond et la rétention de la mémoire.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-orange-300">Bruit Marron</td>
                <td className="px-6 py-4">Uniquement les fréquences les plus profondes (tonnerre).</td>
                <td className="px-6 py-4">Créer une atmosphère sûre ; idéal pour le TDAH.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="best-practices" title="Comment utiliser le bruit blanc en toute sécurité">
        <p className="mt-4 leading-8 text-white/70">
          Bien que le bruit blanc soit incroyablement utile, il est important de l'utiliser correctement pour éviter la fatigue auditive ou la dépendance :
        </p>
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li><strong>Gardez le volume sûr :</strong> Le son doit agir comme un bourdonnement de fond, pas comme un concert. Gardez le volume autour de 50 à 60 décibels.</li>
          <li><strong>Attention à la distance :</strong> Ne placez jamais un téléphone ou une machine à bruit blanc directement à côté de votre tête. Gardez-le à au moins 2 mètres.</li>
          <li><strong>Expérimentez avec les \"couleurs\" :</strong> Si le bruit blanc pur semble trop aigu, essayez plutôt le bruit rose ou le bruit marron.</li>
        </ul>
        <div className="mt-12 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
          >
            <Image
              src="/google-play-badge.png"
              alt="Télécharger l'application Calma"
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
            <h3 className="font-semibold text-lg text-emerald-400">Pourquoi le bruit blanc aide-t-il à dormir ?</h3>
            <p className="mt-2 leading-7 text-white/70">Il augmente le niveau sonore de base de votre pièce. Cela réduit le contraste entre le silence et les bruits soudains, ce qui empêche votre cerveau de se réveiller en sursaut.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Qu'est-ce que le bruit blanc exactement ?</h3>
            <p className="mt-2 leading-7 text-white/70">C'est un son continu contenant toutes les fréquences audibles à intensité égale, créant un environnement audio prévisible.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Le bruit blanc ou rose est-il meilleur pour dormir ?</h3>
            <p className="mt-2 leading-7 text-white/70">Le bruit rose (comme la pluie) est souvent meilleur pour le sommeil profond. Le bruit blanc est préférable pour masquer les bruits très aigus ou forts.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Est-il sûr de dormir avec du bruit blanc toutes les nuits ?</h3>
            <p className="mt-2 leading-7 text-white/70">Oui, c'est généralement sans danger pour les adultes lorsque le volume reste inférieur à 60 dB et que la source est à au moins 2 mètres de votre tête.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Peut-on devenir dépendant au bruit blanc pour dormir ?</h3>
            <p className="mt-2 leading-7 text-white/70">Pas physiquement, mais psychologiquement. Si vous voulez arrêter, baissez le volume progressivement sur quelques semaines.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
