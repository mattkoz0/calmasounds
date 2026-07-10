import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "Sounds for Tinnitus Masking: A Practical Guide | Calma";
const articleDescription =
  "Learn how white noise and nature sounds may make tinnitus less noticeable, how to listen safely and when to seek professional care.";
const articleUrl = "https://www.calmasounds.com/blog/sounds-for-tinnitus-relief";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "tinnitus sounds",
    "tinnitus relief",
    "best sounds for tinnitus",
    "masking tinnitus",
    "tinnitus sound therapy",
    "how to mask tinnitus",
    "tinnitus habituation",
    "calma blog",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
    siteName: "Calma",
    locale: "en_US",
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
      "headline": "Sounds for Tinnitus Masking: A Practical Guide",
      "description": articleDescription,
      "author": { "@type": "Organization", "name": "Calma Team" },
      "publisher": { "@type": "Organization", "name": "Calma" },
      "mainEntityOfPage": articleUrl,
      "datePublished": "2026-05-09",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What sounds can be used for tinnitus masking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Preferences vary. Some people use quiet white noise, rain, waves, a fan or other neutral sounds to reduce the contrast with tinnitus. Use a comfortable level and stop if symptoms worsen."
          }
        },
        {
          "@type": "Question",
          "name": "How does sound therapy work for tinnitus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sound therapy adds external sound that may mask tinnitus, distract from it or support habituation for some people. Outcomes vary and professional guidance can help."
          }
        },
        {
          "@type": "Question",
          "name": "Should you completely mask tinnitus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no single level that suits everyone. Keep sound comfortable and avoid trying to overpower tinnitus with loud audio. An audiologist can help select an approach."
          }
        },
        {
          "@type": "Question",
          "name": "Can white noise make tinnitus worse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Loud or uncomfortable audio can harm hearing or aggravate symptoms. Keep the volume low and seek advice if tinnitus is new, sudden, one-sided, pulsatile or worsening."
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
      topLinkHref="/tinnitus-sounds-app"
      topLinkLabel="Explore Tinnitus Sounds App"
      title="Sounds for Tinnitus Masking: A Practical Guide"
      intro="Tinnitus can feel more noticeable in a quiet room. External sound may reduce that contrast, distract attention or support habituation for some people, but it is not a cure and there is no universally best sound. This guide helps you compare gentle options and listen safely."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Download Free Tinnitus App"
      secondaryCtaHref="/tinnitus-sounds-app"
      secondaryCtaLabel="Learn more about the app"
      tableOfContents={[
        { id: "what-is-sound-therapy", title: "How Sound Therapy Works" },
        { id: "white-noise", title: "White Noise for Sharp Ringing" },
        { id: "brown-noise", title: "Brown Noise for Relaxation" },
        { id: "nature-sounds", title: "Nature Sounds & Water" },
        { id: "habituation", title: "The Secret to Tinnitus Habituation" },
        { id: "faq", title: "Frequently Asked Questions" },
      ]}
      relatedArticles={[
        {
          href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
          title: "Noise Colors Explained",
          description: "Explore the differences between white, pink, and brown noises.",
        },
        {
          href: "/blog/white-noise-for-sleep",
          title: "White Noise for Sleep",
          description: "Learn how sound masking improves the quality of your deep sleep.",
        }
      ]}
    >
      <ArticleSection id="what-is-sound-therapy" title="How Sound Therapy Works">
        <p className="mt-4 leading-8 text-white/70">
          <strong>Sound therapy</strong> adds neutral or pleasant external audio. According to the U.S. National Institute on Deafness and Other Communication Disorders, it may work by masking tinnitus, helping a person become accustomed to it or providing a distraction. A smartphone sound generator can be used as an aid for relaxation or sleep.
        </p>
        <p className="mt-4 leading-8 text-white/70">Read the <a className="text-emerald-300 underline underline-offset-4" href="https://www.nidcd.nih.gov/health/tinnitus" target="_blank" rel="noopener noreferrer">NIDCD tinnitus guide</a>, and speak with a clinician or audiologist about persistent symptoms.</p>
      </ArticleSection>

      <ArticleSection id="white-noise" title="White Noise for Sharp Ringing">
        <p className="mt-4 leading-8 text-white/70">
          White noise is a steady, broad-spectrum sound. Some people find that it makes high-pitched tinnitus less prominent; others prefer a softer or more natural option.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Pure White Noise" 
          description="A consistent &quot;shhh&quot; sound to try quietly as background masking."
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Brown Noise for Deep Relaxation">
        <p className="mt-4 leading-8 text-white/70">
          If white noise sounds too harsh, <strong>brown noise</strong> is a deeper alternative with more low-frequency energy. Comfort is personal, so compare it at a low volume rather than assuming one color will match the pitch of your tinnitus.
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="Nature Sounds: Rain and Ocean Waves">
        <p className="mt-4 leading-8 text-white/70">
          Water sounds such as steady rain, ocean waves or a flowing river provide a less synthetic background. Their changing texture may be easier for some listeners to keep at a comfortable level.
        </p>
        <AudioPlayer 
          src="/rain.m4a" 
          title="Steady Rain (Pink Noise)" 
          description="An organic, textured sound that distracts the brain naturally."
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="habituation" title="The Secret: Partial Masking and Habituation">
        <p className="mt-4 leading-8 text-white/70">
          Avoid turning sound up simply to overpower tinnitus. Loud listening can damage hearing and may make symptoms more intrusive.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Habituation-based programs combine low-level sound with counselling, but the plan and mixing level should be individualized. If you want to use sound therapeutically rather than simply as a quiet bedtime background, an audiologist can help.
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

      <ArticleSection id="faq" title="Frequently Asked Questions (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">What sounds are best for tinnitus relief?</h3>
            <p className="mt-2 leading-7 text-white/70">There is no universal best sound. Try quiet white noise, rain, waves or another neutral sound and keep only what feels comfortable.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">How does sound therapy work for tinnitus?</h3>
            <p className="mt-2 leading-7 text-white/70">It adds external audio that may mask tinnitus, distract from it or support habituation for some people.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Should you completely mask tinnitus?</h3>
            <p className="mt-2 leading-7 text-white/70">Avoid loud audio intended to overpower it. The appropriate level and approach vary; an audiologist can help.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Can white noise make tinnitus worse?</h3>
            <p className="mt-2 leading-7 text-white/70">Any loud or uncomfortable sound can harm hearing or aggravate symptoms. Keep the level low and stop if symptoms worsen.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
