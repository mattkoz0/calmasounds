import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

const articleTitle = "Best Sounds for Tinnitus Relief & Sound Therapy | Calma";
const articleDescription =
  "Discover how sound therapy, white noise, and nature sounds can provide relief from tinnitus. Learn how to mask ringing in the ears and achieve habituation.";
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
      "headline": "Best Sounds for Tinnitus Relief: A Sound Therapy Guide",
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
          "name": "What sounds are best for tinnitus relief?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best sounds for tinnitus relief vary by person. High-frequency white noise is excellent for sharp ringing, while deeper brown noise or nature sounds (like rain or ocean waves) are better for relaxation and deep sleep."
          }
        },
        {
          "@type": "Question",
          "name": "How does sound therapy work for tinnitus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sound therapy introduces a soothing background noise to reduce the contrast between silence and the ringing in your ears. Over time, this helps your brain \"habituate\" or learn to ignore the tinnitus, providing long-term relief."
          }
        },
        {
          "@type": "Question",
          "name": "Should you completely mask tinnitus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, experts recommend partial masking. You should set your background sound level just below the volume of your tinnitus. This \"mixing point\" allows your brain to hear the ringing but not be bothered by it, which is crucial for habituation."
          }
        },
        {
          "@type": "Question",
          "name": "Can white noise make tinnitus worse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When used at safe, comfortable volumes (below 60 decibels), white noise is safe and highly recommended for tinnitus. However, playing any sound too loudly through headphones can potentially aggravate tinnitus or cause hearing fatigue."
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
      title="Best Sounds for Tinnitus Relief: A Sound Therapy Guide"
      intro="Living with tinnitus can be incredibly challenging, especially when trying to focus, relax, or sleep in a quiet room. Silence often makes the ringing or buzzing seem much louder. Fortunately, sound therapy is one of the most effective, scientifically backed ways to manage tinnitus. By introducing the right background noise, you can not only mask the ringing but actually train your brain to ignore it over time."
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
          When you are in a quiet room, your brain actively searches for acoustic input. For someone with tinnitus, this means the brain latches onto the internal ringing, amplifying it. <strong>Sound therapy</strong> (or sound masking) solves this by providing a continuous, neutral external sound. This reduces the contrast between the silence and the tinnitus, making the ringing much less noticeable and intrusive.
        </p>
      </ArticleSection>

      <ArticleSection id="white-noise" title="White Noise for Sharp Ringing">
        <p className="mt-4 leading-8 text-white/70">
          White noise is a steady, consistent sound that covers all audible frequencies equally. It is considered the gold standard for masking high-pitched ringing (tonal tinnitus) because its full-spectrum nature essentially &quot;swallows&quot; the sharp frequencies of the ringing.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Pure White Noise" 
          description="A consistent &quot;shhh&quot; sound that aggressively masks high-pitched ringing."
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="brown-noise" title="Brown Noise for Deep Relaxation">
        <p className="mt-4 leading-8 text-white/70">
          If white noise sounds too harsh or hissy to your ears, <strong>Brown noise</strong> is a fantastic alternative. It focuses heavily on deep, lower frequencies, resembling the rumbling of a distant waterfall or heavy thunder. For many people, it is much more soothing and can be very comforting when trying to sleep with tinnitus.
        </p>
      </ArticleSection>

      <ArticleSection id="nature-sounds" title="Nature Sounds: Rain and Ocean Waves">
        <p className="mt-4 leading-8 text-white/70">
          Water sounds, like steady rain, ocean waves, or a flowing river, are incredibly popular for tinnitus relief. They offer a dynamic, organic texture that distracts the brain naturally. Most natural water sounds act similarly to <strong>Pink noise</strong>—they are balanced and softer on the ears, making them ideal for long-term listening.
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
          Many people make the mistake of turning up their sound therapy volume until they can't hear their tinnitus at all. While this provides immediate relief, the long-term goal of sound therapy is <strong>habituation</strong>—training your brain to classify the tinnitus as &quot;unimportant background noise.&quot;
        </p>
        <p className="mt-4 leading-8 text-white/70">
          To achieve habituation, audiologists recommend <strong>partial masking</strong>. You should set your background sound (like rain or white noise) just <em>below</em> the volume of your tinnitus. You want the &quot;mixing point&quot; where you can still hear the ringing if you listen for it, but the background sound makes it easy to ignore.
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
            <p className="mt-2 leading-7 text-white/70">High-frequency white noise is excellent for sharp ringing, while deeper brown noise or nature sounds are better for relaxation and sleep. The best sound is the one that brings you the most comfort.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">How does sound therapy work for tinnitus?</h3>
            <p className="mt-2 leading-7 text-white/70">It introduces a soothing background noise to reduce the contrast between silence and the ringing. Over time, this helps your brain habituate and ignore the tinnitus.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Should you completely mask tinnitus?</h3>
            <p className="mt-2 leading-7 text-white/70">No, experts recommend partial masking. Set your background sound level just below the volume of your tinnitus to allow your brain to habituate to the ringing.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Can white noise make tinnitus worse?</h3>
            <p className="mt-2 leading-7 text-white/70">When used at safe volumes (below 60 decibels), white noise is safe. However, playing any sound too loudly can potentially aggravate tinnitus or cause hearing fatigue.</p>
          </div>
        </div>
      </ArticleSection>
    </ArticlePage>
  );
}
