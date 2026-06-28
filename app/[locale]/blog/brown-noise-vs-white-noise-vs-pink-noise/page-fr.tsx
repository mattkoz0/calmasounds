import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bruit marron vs Bruit blanc : Lequel est le meilleur ? | Calma",
  description:
    "Le bruit marron est-il meilleur que le bruit blanc pour dormir ? Pourquoi aide-t-il le TDAH ? Découvrez les différences scientifiques.",
  keywords: [
    "bruit marron vs bruit blanc",
    "bruit rose vs bruit blanc",
    "bruit marron pour dormir",
    "pourquoi le bruit marron aide le tdah",
    "couleurs du bruit",
    "calma app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Bruit marron vs Bruit blanc : Lequel est le meilleur ?",
    description:
      "Découvrez les différences scientifiques entre le bruit rose, marron et blanc.",
    url: "https://www.calmasounds.com/fr/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "fr_FR",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Le bruit marron est-il meilleur que le bruit blanc pour dormir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour beaucoup de gens, oui. Le bruit marron est meilleur si vous trouvez le sifflement aigu du bruit blanc irritant. Le bruit marron ressemble à une cascade profonde, ce qui est souvent plus apaisant."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi le bruit marron aide-t-il le TDAH ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il aide les personnes atteintes de TDAH car son grondement profond fournit une stimulation constante. Cela satisfait le besoin de stimulation du cerveau, l'empêchant de chercher des distractions."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence entre le bruit rose, marron et blanc ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le bruit blanc a une énergie égale sur toutes les fréquences. Le bruit rose réduit les hautes fréquences (comme la pluie). Le bruit marron les réduit encore plus, créant un grondement très profond (comme le tonnerre)."
      }
    }
  ]
};

export default function NoiseColorsPageFR() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/fr/white-noise-app"
      topLinkLabel="Découvrir l'appli bruit blanc"
      title="Bruit marron vs Bruit blanc : Lequel est le meilleur pour dormir et le TDAH ?"
      intro="Tout 'bruit blanc' n'est pas blanc en réalité. Dans le monde de l'audio, les sons sont classés par 'couleurs' en fonction de leur fréquence. Comprendre la différence entre le bruit blanc, rose, marron et vert est le secret pour mieux dormir."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Télécharger l'appli Calma"
      secondaryCtaHref="/fr/sound-mixer-app"
      secondaryCtaLabel="Explorer le mixeur"
      tableOfContents={[
        { id: "video", title: "Vidéo : Les couleurs du bruit" },
        { id: "difference", title: "Quelle est la différence ?" },
        { id: "is-brown-better", title: "Le bruit marron est-il meilleur pour dormir ?" },
        { id: "adhd", title: "Pourquoi le bruit marron aide-t-il le TDAH ?" },
        { id: "comparison-table", title: "Tableau comparatif" },
        { id: "faq", title: "Foire Aux Questions" },
      ]}
      relatedArticles={[
        {
          href: "/fr/blog/white-noise-for-sleep",
          title: "Bruit Blanc pour Dormir",
          description: "Découvrez comment le bruit blanc peut vous aider à vous endormir plus rapidement.",
        },
      ]}
    >
      <ArticleSection id="video" title="Regarder : Les couleurs du bruit expliquées">
        <div className="flex justify-center mt-6">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <YouTubeEmbed
                    videoId="MlJNs1K66xc"
                    title="The Colors of Noise"
                />
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="difference" title="Quelle est la différence entre le bruit rose, marron et blanc ?">
        <div className="mt-6 space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1. Vrai bruit blanc</h3>
            <p className="mb-4 leading-8 text-white/70">
              Contient toutes les fréquences audibles jouées à la même intensité. Masque très bien les bruits soudains.
            </p>
            <AudioPlayer 
              src="/white_noise.m4a" 
              title="Bruit Blanc" 
              description="Statique cohérente."
              colorClass="bg-slate-500/20 text-slate-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">2. Bruit rose (Sons naturels)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Le bruit rose réduit le volume des hautes fréquences. Imite la pluie constante.
            </p>
            <AudioPlayer 
              src="/pink_noise.m4a" 
              title="Bruit Rose" 
              description="Son équilibré, semblable à une forte pluie."
              colorClass="bg-pink-500/20 text-pink-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">3. Bruit marron (Basses profondes)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Élimine presque tous les sons à haute fréquence, laissant un grondement puissant.
            </p>
            <AudioPlayer 
              src="/brown_noise.m4a" 
              title="Bruit Marron" 
              description="Fréquences profondes et grondantes."
              colorClass="bg-orange-500/20 text-orange-300"
            />
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="is-brown-better" title="Le bruit marron est-il meilleur que le bruit blanc pour dormir ?">
        <p className="mt-4 leading-8 text-white/70">
          Pour la grande majorité, <strong>oui</strong>. Le bruit marron élimine les fréquences aiguës du bruit blanc. Cette fréquence profonde signale la sécurité au système nerveux.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd" title="Pourquoi le bruit marron aide-t-il le TDAH ?">
        <p className="mt-4 leading-8 text-white/70">
          Le bruit marron agit comme un \"massage audio\" continu pour le cerveau. En fournissant une stimulation auditive constante, il satisfait le désir d'information du cerveau.
        </p>
      </ArticleSection>

      <ArticleSection id="comparison-table" title="Tableau comparatif">
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-slate-800/50 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Couleur</th>
                <th className="px-6 py-4 font-semibold">Ressemble à</th>
                <th className="px-6 py-4 font-semibold">Idéal pour</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-300">Blanc</td>
                <td className="px-6 py-4">Ventilateur</td>
                <td className="px-6 py-4">Bloquer les ronflements.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-pink-300">Rose</td>
                <td className="px-6 py-4">Pluie</td>
                <td className="px-6 py-4">Améliorer le sommeil.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-orange-300">Marron</td>
                <td className="px-6 py-4">Avion, tonnerre</td>
                <td className="px-6 py-4">Concentration (TDAH).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition hover:scale-105"
          >
            <Image
              src="/google-play-badge.png"
              alt="Télécharger l'appli Calma"
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
            <h3 className="font-semibold text-lg text-emerald-400">Le bruit marron est-il meilleur que le bruit blanc pour dormir ?</h3>
            <p className="mt-2 leading-7 text-white/70">Oui. Le bruit marron élimine les hautes fréquences et ressemble à une cascade profonde, ce qui est très apaisant.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Pourquoi le bruit marron aide-t-il le TDAH ?</h3>
            <p className="mt-2 leading-7 text-white/70">Il fournit une stimulation constante, empêchant le cerveau de chercher des distractions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Quelle est la différence entre le bruit rose, marron et blanc ?</h3>
            <p className="mt-2 leading-7 text-white/70">Le blanc a une énergie égale sur toutes les fréquences. Le rose réduit les fréquences aiguës, et le marron les réduit encore plus.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
