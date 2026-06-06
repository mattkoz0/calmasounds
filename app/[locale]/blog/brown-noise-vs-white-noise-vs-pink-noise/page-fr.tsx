import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";

export const metadata: Metadata = {
  title: "Bruit marron vs. blanc vs. rose | Blog Calma",
  description:
    "Explorez les différences entre le bruit blanc, rose et marron. Découvrez lequel est le meilleur pour votre sommeil, votre concentration ou la gestion du TDAH.",
  keywords: [
    "bruit marron vs bruit blanc",
    "bruit rose vs bruit blanc",
    "bruit vert vs bruit blanc",
    "meilleur bruit pour se concentrer",
    "bruit pour TDAH",
    "couleurs du bruit expliquees",
    "blog calma",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/fr/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Bruit marron vs. blanc vs. rose | Blog Calma",
    description:
      "Explorez les différences entre le bruit blanc, rose et marron. Découvrez lequel est le meilleur pour votre sommeil, votre concentration ou la gestion du TDAH.",
    url: "https://www.calmasounds.com/fr/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruit marron vs. blanc vs. rose | Blog Calma",
    description:
      "Explorez les différences entre le bruit blanc, rose et marron.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bruit marron vs Bruit blanc vs Bruit rose vs Bruit vert",
  description:
    "Un guide complet pour comprendre les couleurs du bruit, y compris le bruit vert, et leurs avantages uniques pour le sommeil, la concentration et la relaxation.",
  author: {
    "@type": "Organization",
    name: "Calma Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Calma",
  },
  mainEntityOfPage: "https://www.calmasounds.com/fr/blog/brown-noise-vs-white-noise-vs-pink-noise",
  datePublished: "2026-04-13",
  dateModified: new Date().toISOString().split('T')[0],
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/fr/white-noise-app"
      topLinkLabel="Explorer la page bruit blanc"
      title="Bruit marron vs. Bruit blanc vs. Bruit rose vs. Bruit vert"
      intro="Tous les 'bruits blancs' ne sont pas réellement blancs. Dans le monde de l'audio, les sons sont catégorisés par 'couleurs' en fonction de leur distribution de fréquences. Comprendre la différence entre le bruit blanc, rose, marron et vert peut vous aider à choisir le bon fond pour un meilleur sommeil, une concentration plus profonde ou pour gérer les symptômes du TDAH."
      ctaHref="/fr/white-noise-app"
      ctaLabel="Explorer l'app de bruit blanc"
      secondaryCtaHref="/fr/sound-mixer-app"
      secondaryCtaLabel="Explorer l'app Sound Mixer"
      tableOfContents={[
        { id: "video", title: "Vidéo : Les couleurs du bruit expliquées" },
        { id: "white-noise", title: "Bruit Blanc : Le polyvalent" },
        { id: "pink-noise", title: "Bruit Rose : Le choix naturel" },
        { id: "brown-noise", title: "Bruit Marron : Le calme profond" },
        { id: "green-noise", title: "Bruit Vert : L'harmonie naturelle" },
        { id: "adhd-noise", title: "Quelle couleur de bruit est la meilleure pour le TDAH ?" },
        { id: "summary", title: "Lequel devriez-vous choisir ?" },
        { id: "comparison-table", title: "Tableau comparatif : Les couleurs du bruit" },
        { id: "faq", title: "Foire Aux Questions" },
      ]}
      relatedArticles={[
        {
          href: "/fr/blog/white-noise-for-sleep",
          title: "Bruit blanc pour dormir",
          description:
            "Découvrez comment le bruit blanc peut vous aider à vous endormir plus rapidement et à rester endormi plus longtemps.",
        },
        {
          href: "/fr/blog/best-sounds-for-studying",
          title: "Meilleurs sons pour étudier",
          description:
            "Découvrez quels sons de fond sont les plus efficaces pour la concentration.",
        },
      ]}
    >
      <ArticleSection id="video" title="Vidéo : Les couleurs du bruit expliquées">
        <p className="mb-6">
          Regardez notre guide rapide sur YouTube Shorts pour entendre la différence et voir quelle couleur pourrait être votre préférée.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <YouTubeEmbed
                    videoId="MlJNs1K66xc"
                    title="Les couleurs du bruit : Blanc, Rose, Marron et Vert"
                />
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Bruit Blanc : Le polyvalent">
        <p className="mt-4 leading-8 text-white/70">
          Le bruit blanc contient toutes les fréquences audibles jouées à la même intensité. Il ressemble à de la statique ou à un sifflement. Parce qu'il couvre toutes les fréquences, il est exceptionnellement efficace pour masquer les bruits soudains et distrayants, comme les portes qui claquent ou les klaxons.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Échantillon de Bruit Blanc" 
          description="Un son statique constant qui masque toutes les fréquences de manière égale."
          colorClass="bg-slate-500/20 text-slate-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>Idéal pour :</strong> Masquer le bruit ambiant, aider les bébés à dormir et créer un fond neutre dans les bureaux animés.
        </p>
      </ArticleSection>

      <ArticleSection id="pink-noise" title="Bruit Rose : Le choix naturel">
        <p className="mt-4 leading-8 text-white/70">
          Le bruit rose est similaire au bruit blanc mais possède plus d'énergie dans les basses fréquences. Cela crée un son plus doux et plus équilibré que beaucoup trouvent plus naturel que la rudesse du bruit blanc pur. Pensez au bruit d'une pluie régulière ou du vent bruissant dans les feuilles.
        </p>
        <AudioPlayer 
          src="/pink_noise.m4a" 
          title="Échantillon de Bruit Rose" 
          description="Un son mais doux et équilibré ressemblant à une pluie régulière."
          colorClass="bg-pink-500/20 text-pink-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          <strong>Idéal pour :</strong> Améliorer la qualité du sommeil, se détendre sans la sensation 'statique' du bruit blanc, et la concentration à long terme.
        </p>
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Bruit Marron : Le calme profond">
        <p className="mt-4 leading-8 text-white/70">
          Le bruit marron (également appelé bruit rouge) va encore plus loin que le bruit rose, en se concentrant fortement sur les basses fréquences. Il ressemble à un grondement sourd, à une cascade lointaine ou au bourdonnement sourd d'une cabine d'avion.
        </p>
        <AudioPlayer 
          src="/brown_noise.m4a" 
          title="Échantillon de Bruit Marron" 
          description="Basses fréquences profondes et grondantes idéales pour une concentration intense."
          colorClass="bg-orange-500/20 text-orange-300"
        />
        <p className="mt-4 leading-8 text-white/70">
          Récemment, le bruit marron a suscité un vif intérêt au sein de la communauté TDAH. De nombreuses personnes trouvent que sa qualité profonde et immersive aide à apaiser un esprit agité plus efficacement que les sons à plus haute fréquence.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>Idéal pour :</strong> La gestion du TDAH, la concentration profonde, la relaxation intense et les personnes qui trouvent les hautes fréquences irritantes.
        </p>
      </ArticleSection>

      <ArticleSection id="green-noise" title="Bruit Vert : L'harmonie naturelle">
        <p className="mt-4 leading-8 text-white/70">
          Le bruit vert est souvent décrit comme le son d'arrière-plan de la nature. Il se concentre sur les fréquences moyennes, similaires à ce que l'on pourrait entendre dans une forêt ou près d'un ruisseau tranquille. Il est moins agressif que le bruit blanc et moins riche en basses que le bruit marron, trouvant un juste milieu confortable.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          <strong>Idéal pour :</strong> Créer une atmosphère paisible, se détendre sans basses lourdes et pour les amoureux de paysages sonores naturels.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd-noise" title="Quelle couleur de bruit est la meilleure pour le TDAH ?">
        <p className="mt-4 leading-8 text-white/70">
          Une question fréquente dans les communautés neurodivergentes est : <strong>Quelle couleur de bruit est la meilleure pour le TDAH ?</strong> Bien que le cerveau de chacun soit différent, le <strong>bruit marron</strong> est souvent le grand favori.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Parce que le bruit marron est plus profond et ne contient pas la statique haute fréquence du bruit blanc, de nombreuses personnes atteintes de TDAH rapportent qu'il crée une « couverture lourde » de son qui calme naturellement les pensées qui défilent. Il fournit juste assez de stimulation sensorielle pour satisfaire le besoin d'éveil du cerveau, permettant au cortex préfrontal de se concentrer sur la tâche à accomplir sans être distrait par des interruptions internes ou externes.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Si vous comparez le <em>bruit marron vs le bruit blanc pour le TDAH</em>, commencez par le bruit marron pour étudier ou travailler en profondeur, et voyez s'il vous aide à entrer plus facilement dans un état de flow.
        </p>
      </ArticleSection>

      <ArticleSection id="summary" title="Lequel devriez-vous choisir ?">
        <p className="mt-4 leading-8 text-white/70">
          La 'meilleure' couleur est entièrement personnelle. Nous recommandons de commencer par le bruit blanc si vous devez bloquer des bruits forts spécifiques, puis de passer au rose ou au marron si vous trouvez la statique plus aiguë du bruit blanc trop dérangeante.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Avec <strong>Calma</strong>, vous n'avez pas à choisir. Vous pouvez mélanger différentes couches de bruit, ajouter des textures naturelles ou des sons d'ambiance pour créer un paysage sonore personnalisé adapté à votre cerveau unique.
        </p>
      </ArticleSection>
    
      <ArticleSection id="comparison-table" title="Tableau comparatif : Les couleurs du bruit">
        <div className="overflow-x-auto mt-6 rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Couleur du Bruit</th>
                <th className="px-4 py-3 font-semibold">Ressemble à</th>
                <th className="px-4 py-3 font-semibold">Idéal pour</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-4 py-3 font-medium text-white">Bruit Blanc</td>
                <td className="px-4 py-3">Statique, sifflement de TV, ventilateur</td>
                <td className="px-4 py-3">Masquer les bruits soudains, fond de bureau, sommeil des bébés</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Bruit Rose</td>
                <td className="px-4 py-3">Pluie régulière, bruissement de feuilles</td>
                <td className="px-4 py-3">Sommeil profond, concentration stable, atmosphère relaxante</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Bruit Marron</td>
                <td className="px-4 py-3">Tonnerre lointain, grondement sourd, forte pluie</td>
                <td className="px-4 py-3">Focus pour TDAH, relaxation profonde, lecture, étude</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Bruit Vert</td>
                <td className="px-4 py-3">Ambiance de forêt, ruisseau doux</td>
                <td className="px-4 py-3">Soulagement de l'anxiété, méditation, amoureux de la nature</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="faq" title="Foire Aux Questions">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Le bruit blanc aide-t-il à dormir ?</h3>
            <p className="mt-2 leading-7 text-white/70">Oui, le bruit blanc aide à dormir en masquant les bruits de fond perturbateurs (comme la circulation ou les voisins) et en fournissant un environnement acoustique constant qui signale au cerveau de se détendre.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Quelle est la différence entre le bruit blanc et le bruit rose ?</h3>
            <p className="mt-2 leading-7 text-white/70">Le bruit blanc contient toutes les fréquences à intensité égale, sonnant comme de la statique aiguë. Le bruit rose accentue les fréquences plus basses, ce qui le rend plus profond et plus doux, comme une pluie régulière.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Bruit marron vs bruit blanc pour le sommeil : quel est le meilleur ?</h3>
            <p className="mt-2 leading-7 text-white/70">Pour beaucoup, le bruit marron est meilleur pour le sommeil car son grondement profond à basse fréquence est plus apaisant et moins agressif que la statique aiguë du bruit blanc.</p>
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
                "name": "Le bruit blanc aide-t-il à dormir ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, le bruit blanc aide à dormir en masquant les bruits de fond perturbateurs (comme la circulation ou les voisins) et en fournissant un environnement acoustique constant qui signale au cerveau de se détendre."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la différence entre le bruit blanc et le bruit rose ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le bruit blanc contient toutes les fréquences à intensité égale, sonnant comme de la statique aiguë. Le bruit rose accentue les fréquences plus basses, ce qui le rend plus profond et plus doux, comme une pluie régulière."
                }
              },
              {
                "@type": "Question",
                "name": "Bruit marron vs bruit blanc pour le sommeil : quel est le meilleur ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pour beaucoup, le bruit marron est meilleur pour le sommeil car son grondement profond à basse fréquence est plus apaisant et moins agressif que la statique aiguë du bruit blanc."
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
          <p className="text-sm text-white/60">Défenseurs de l'hygiène du sommeil et concepteurs sonores passionnés par l'aide à la création de routines plus calmes.</p>
        </div>
      </div>
    </ArticlePage>
  );
}
