import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

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
        { id: "evidence", title: "What clinical research found" },
        { id: "white-noise", title: "White Noise for Sharp Ringing" },
        { id: "brown-noise", title: "Brown Noise for Relaxation" },
        { id: "nature-sounds", title: "Nature Sounds & Water" },
        { id: "habituation", title: "Masking and habituation" },
        { id: "safe-test", title: "A cautious listening test" },
        { id: "medical-care", title: "When to seek medical care" },
        { id: "faq", title: "Frequently Asked Questions" },
        { id: "sources", title: "Evidence and sources" },
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
          description: "Learn how masking works and why sleep evidence remains mixed.",
        }
      ]}
    >
      <ArticleSection id="what-is-sound-therapy" title="How Sound Therapy Works">
        <p className="mt-4 leading-8 text-white/70">
          <strong>Sound therapy</strong> adds neutral or pleasant external audio. According to the U.S. National Institute on Deafness and Other Communication Disorders, it may work by masking tinnitus, helping a person become accustomed to it or providing a distraction. A smartphone sound generator can be used as an aid for relaxation or sleep.
        </p>
        <p className="mt-4 leading-8 text-white/70">Read the <a className="text-emerald-300 underline underline-offset-4" href="https://www.nidcd.nih.gov/health/tinnitus" target="_blank" rel="noopener noreferrer">NIDCD tinnitus guide</a>, and speak with a clinician or audiologist about persistent symptoms.</p>
      </ArticleSection>

      <ArticleSection id="evidence" title="What does clinical research say about tinnitus sound therapy?">
        <p>
          The evidence is more nuanced than “sound cures tinnitus.” A Cochrane review found that hearing aids, sound generators and combination devices may produce little or no difference in tinnitus severity compared with one another. The authors also emphasized that the available trials were limited and did not prove that sound is useless.
        </p>
        <p className="mt-4">
          A multicenter randomized trial of 151 people compared full tinnitus retraining therapy, counselling with placebo sound generators and standard care. All groups improved over 18 months, but the conventional sound generators did not produce a clear advantage over the other approaches. This suggests that education, support and time may matter alongside the sound itself.
        </p>
        <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
          <p className="font-semibold text-emerald-100">A realistic expectation</p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Background sound can be a practical coping tool—especially in quiet rooms or at bedtime—but it should not be presented as a cure or guaranteed long-term treatment.
          </p>
        </div>
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

      <ArticleSection id="habituation" title="Masking, partial masking and habituation are different goals">
        <p className="mt-4 leading-8 text-white/70">
          Avoid turning sound up simply to overpower tinnitus. Loud listening can damage hearing and may make symptoms more intrusive.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Habituation-based programs combine low-level sound with counselling, but the plan and mixing level should be individualized. If you want to use sound therapeutically rather than simply as a quiet bedtime background, an audiologist can help.
        </p>
      </ArticleSection>

      <ArticleSection id="safe-test" title="A cautious way to test background sound">
        <ol className="list-decimal space-y-3 pl-5 text-white/70">
          <li>Begin with a speaker rather than headphones when practical, especially for longer bedtime listening.</li>
          <li>Choose one neutral option—rain, waves, white noise or brown noise—and start at the lowest clearly audible level.</li>
          <li>Aim to reduce contrast with the room, not to drown out tinnitus completely.</li>
          <li>Listen for 10–15 minutes and note comfort, irritation and how often attention returns to tinnitus.</li>
          <li>Stop if the sound feels sharp, causes discomfort or appears to worsen symptoms.</li>
        </ol>
        <p className="mt-4">
          Pitch matching is not required for ordinary background sound. Personalized therapeutic protocols are different and should be designed with a qualified clinician.
        </p>
      </ArticleSection>

      <ArticleSection id="medical-care" title="When tinnitus needs medical evaluation">
        <p>
          Arrange medical or audiology assessment when tinnitus is persistent, distressing or affecting sleep and concentration. Seek prompt care when it begins suddenly, follows an injury, occurs with sudden hearing loss, is only on one side, pulses with your heartbeat, or comes with significant dizziness or neurological symptoms.
        </p>
        <p className="mt-4">
          A hearing test can identify hearing loss and help separate everyday sound enrichment from treatment that needs professional supervision. An app cannot determine the cause of tinnitus.
        </p>
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

      <ArticleSection id="sources" title="Evidence and sources">
        <ul className="list-disc space-y-3 pl-5 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://www.nidcd.nih.gov/health/tinnitus" target="_blank" rel="noopener noreferrer">
              National Institute on Deafness and Other Communication Disorders: tinnitus overview
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD013094.pub2/full" target="_blank" rel="noopener noreferrer">
              Cochrane review of sound therapy devices for tinnitus
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/31120533/" target="_blank" rel="noopener noreferrer">
              Randomized trial of tinnitus retraining therapy, sound generators and standard care
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  );
}
