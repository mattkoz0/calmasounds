import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "Najlepsze Dźwięki na Szumy Uszne i Terapia Dźwiękiem | Calma";
const articleDescription = "Odkryj, jak terapia dźwiękiem i szum biały mogą pomóc w leczeniu szumów usznych. Dowiedz się, jak maskować piski w uszach (Tinnitus).";
const articleUrl = "https://www.calmasounds.com/pl/blog/sounds-for-tinnitus-relief";

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
    locale: "pl",
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
      "headline": "Najlepsze Dźwięki na Szumy Uszne: Poradnik Terapii",
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
          "name": "Jakie dźwięki są najlepsze na szumy uszne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Szum biały na wysokie piski, szum deszczu do relaksu."
          }
        },
        {
          "@type": "Question",
          "name": "Jak działa terapia dźwiękiem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ułatwia mózgowi ignorowanie szumów usznych poprzez zmniejszenie kontrastu akustycznego."
          }
        },
        {
          "@type": "Question",
          "name": "Czy należy całkowicie zagłuszać szumy uszne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nie, eksperci zalecają częściowe maskowanie w celu osiągnięcia habituacji."
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
      topLinkHref="/pl/tinnitus-sounds-app"
      topLinkLabel="Pobierz darmową aplikację na szumy uszne"
      title="Najlepsze Dźwięki na Szumy Uszne: Poradnik Terapii"
      intro="Życie z szumami usznymi bywa trudne. Terapia dźwiękiem to najskuteczniejsza metoda na maskowanie szumów usznych i trening mózgu, by przestał na nie zwracać uwagę."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Pobierz darmową aplikację na szumy uszne"
      secondaryCtaHref="/pl/tinnitus-sounds-app"
      secondaryCtaLabel="Dowiedz się więcej o aplikacji"
      tableOfContents={[
        { id: "what-is-sound-therapy", title: "Jak Działa Terapia Dźwiękiem" },
        { id: "white-noise", title: "Szum Biały" },
        { id: "brown-noise", title: "Szum Brązowy" },
        { id: "nature-sounds", title: "Dźwięki Natury" },
        { id: "habituation", title: "Habituacja: Sekret Sukcesu" },
        { id: "faq", title: "FAQ" },
      ]}
      relatedArticles={[]}
    >
      <ArticleSection id="what-is-sound-therapy" title="Jak Działa Terapia Dźwiękiem">
        <p className="mt-4 leading-8 text-white/70">
          Zapewnia neutralne tło dźwiękowe, które zmniejsza kontrast między ciszą a piskami w uchu.
        </p>
      </ArticleSection>

      <ArticleSection id="white-noise" title="Szum Biały">
        <p className="mt-4 leading-8 text-white/70">
          Szum biały to złoty standard w maskowaniu ostrych, wysokich dźwięków.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="White Noise" 
          description=""
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Szum Brązowy">
        <p className="mt-4 leading-8 text-white/70">
          Głęboki szum, idealny do relaksu i zasypiania.
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="Dźwięki Natury">
        <p className="mt-4 leading-8 text-white/70">
          Szum deszczu i fal morskich naturalnie odwracają uwagę mózgu.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Steady Rain" 
          description=""
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="habituation" title="Habituacja: Sekret Sukcesu">
        <p className="mt-4 leading-8 text-white/70">
          Celem jest habituacja (przyzwyczajenie). Głośność maskowania powinna być nieco cichsza niż sam szum.
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
            <h3 className="font-semibold text-lg text-emerald-400">Jakie dźwięki są najlepsze na szumy uszne?</h3>
            <p className="mt-2 leading-7 text-white/70">Szum biały na wysokie piski, szum deszczu do relaksu.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Jak działa terapia dźwiękiem?</h3>
            <p className="mt-2 leading-7 text-white/70">Ułatwia mózgowi ignorowanie szumów usznych poprzez zmniejszenie kontrastu akustycznego.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Czy należy całkowicie zagłuszać szumy uszne?</h3>
            <p className="mt-2 leading-7 text-white/70">Nie, eksperci zalecają częściowe maskowanie w celu osiągnięcia habituacji.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
