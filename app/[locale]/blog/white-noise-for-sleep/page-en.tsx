import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

const articleTitle = "Why Does White Noise Help You Sleep? Evidence & Limits | Calma";
const articleDescription =
  "White noise may mask changing bedroom sounds, but sleep evidence is mixed. Learn how it works, what trials found and how to listen cautiously.";
const articleUrl = "https://www.calmasounds.com/blog/white-noise-for-sleep";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "white noise for sleep",
    "why does white noise help you sleep",
    "white noise sound for sleeping",
    "white noise to help sleep",
    "best white noise for sleep",
    "does white noise help you sleep",
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
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does white noise help you sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White noise may help by reducing the contrast between steady background sound and sudden noises such as traffic or doors. This masking effect can make disruptions less noticeable, but studies do not show that it improves sleep for everyone."
      }
    },
    {
      "@type": "Question",
      "name": "What is white noise for sleep exactly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technical white noise has equal power per hertz and sounds like static. Many fans and air conditioners are broadband sounds rather than mathematically white noise, but they can still provide a steady masking background."
      }
    },
    {
      "@type": "Question",
      "name": "Is white or pink noise better for sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research does not establish a universal winner. Pink noise sounds softer because it contains less high-frequency energy, while white noise provides broader high-frequency masking. Comfort and the bedroom environment matter."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to sleep with white noise every night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keep white noise at the lowest comfortable level that serves its purpose and place the source away from your head. Stop if it causes discomfort, ringing or poorer sleep. There is no single volume or distance that suits every device and room."
      }
    },
    {
      "@type": "Question",
      "name": "Can you get addicted to sleeping with white noise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White noise is not considered physically addictive, but it can become part of a learned bedtime routine. If you no longer want it, lower the level or shorten the timer gradually."
      }
    }
  ]
};

const relatedArticles = [
  {
    href: "/blog/rain-sounds-vs-white-noise",
    title: "Rain Sounds vs White Noise",
    description: "Compare the emotional feel and practical differences between natural rain and artificial static.",
  },
  {
    href: "/blog/best-sounds-for-sleep",
    title: "Best Sounds for Sleep",
    description: "Explore different sleep sound styles, from pink noise to ocean waves.",
  },
];

export default function WhiteNoiseForSleepPage() {
  return (
    <ArticlePage
      slug="white-noise-for-sleep"
      jsonLd={articleJsonLd}
      topLinkHref="/white-noise-app"
      topLinkLabel="Explore white noise app"
      title="Why Does White Noise Help You Sleep? The Science Explained"
      intro="White noise can make an unpredictable bedroom sound more consistent, which may help when traffic, neighbors or doors interrupt sleep. That does not mean it deepens sleep or works for everyone. Here is the masking mechanism, the strongest evidence on both sides and a cautious way to decide whether it suits your room."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Download Calma App for Free"
      secondaryCtaHref="/white-noise-app"
      secondaryCtaLabel="Explore white noise player"
      tableOfContents={[
        { id: "how-it-works", title: "How sound masking may reduce disruption" },
        { id: "evidence", title: "What sleep studies found" },
        { id: "what-is-it", title: "What exactly is white noise?" },
        { id: "comparison-table", title: "White vs Pink vs Brown Noise" },
        { id: "best-practices", title: "How to use it safely" },
        { id: "faq", title: "Frequently Asked Questions" },
        { id: "sources", title: "Evidence and sources" },
      ]}
      relatedArticles={relatedArticles}
    >
      <ArticleSection id="how-it-works" title="How sound masking may reduce sleep disruption">
        <p className="mt-4 leading-8 text-white/70">
          White noise does not need to overpower a disturbance. Through <strong>sound masking</strong>, a steady background reduces the contrast between the room and an intermittent sound. A door closing may therefore stand out less against quiet broadband noise than against near-silence.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Masking is most relevant when changing environmental sound is the problem. It cannot fix an uncomfortable room, an inconsistent schedule, sleep apnea, pain or insomnia driven by factors unrelated to noise.
        </p>
      </ArticleSection>

      <ArticleSection id="evidence" title="Does white noise improve sleep? What the studies found">
        <p>
          One randomized crossover study tested broadband sound in 18 healthy young adults asked to go to bed 90 minutes earlier than usual—a model of temporary difficulty falling asleep. The sound condition shortened the median time to stable stage-2 sleep from 19 to 13 minutes, a 38% relative reduction. That is interesting, but it was a small, artificial experiment rather than a trial in people with chronic insomnia.
        </p>
        <p className="mt-4">
          A systematic review examined 38 studies of continuous white or similar broadband noise. Results ranged from improved to disrupted sleep, and the authors rated the evidence for benefit as very low certainty because sound, participants and sleep measurements varied substantially.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
            <p className="font-semibold text-emerald-100">Most plausible use</p>
            <p className="mt-2 text-sm leading-6 text-white/70">Masking intermittent traffic, household or neighbor noise at a low level.</p>
          </div>
          <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5">
            <p className="font-semibold text-amber-100">What is not established</p>
            <p className="mt-2 text-sm leading-6 text-white/70">That continuous noise deepens sleep, treats insomnia or benefits every listener.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="what-is-it" title="What exactly is white noise?">
        <p className="mt-4 leading-8 text-white/70">
          In physics, white noise is a sound that contains every frequency within the range of human hearing (between 20 hertz and 20,000 hertz) played at an equal intensity. Because it contains all frequencies simultaneously, it sounds like a \"shushing\" noise, similar to television static, an untuned radio, or a humming fan.
        </p>
        <AudioPlayer 
          src="/white_noise.m4a" 
          title="Pure White Noise" 
          description="A consistent, full-spectrum sound that blocks sharp noises."
          colorClass="bg-slate-500/20 text-slate-300"
        />
      </ArticleSection>

      <ArticleSection id="comparison-table" title="White vs Pink vs Brown Noise for Sleep">
        <p className="mt-4 leading-8 text-white/70">
          Not all \"white noise\" is technically white. Noise colors describe frequency balance. The difference changes how each sound feels, but research does not identify one color as universally best for sleep.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-slate-800/50 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Noise Color</th>
                <th className="px-6 py-4 font-semibold">Frequency Focus</th>
                <th className="px-6 py-4 font-semibold">Best Used For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-300">White Noise</td>
                <td className="px-6 py-4">Equal across all frequencies.</td>
                <td className="px-6 py-4">Masking sharp, unpredictable noises (snoring, dogs barking).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-pink-300">Pink Noise</td>
                <td className="px-6 py-4">Lower frequencies boosted (sounds like rain).</td>
                <td className="px-6 py-4">A softer background for listeners who dislike hiss.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-orange-300">Brown Noise</td>
                <td className="px-6 py-4">Deepest frequencies only (sounds like distant thunder).</td>
                <td className="px-6 py-4">A deeper background chosen mainly for comfort.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="best-practices" title="How to use white noise safely">
        <p className="mt-4 leading-8 text-white/70">
          If you test white noise, use the least sound needed for the room rather than treating louder playback as more effective:
        </p>
        <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
          <li><strong>Start at the lowest audible setting:</strong> Increase only enough to soften the contrast of the disturbance you are trying to mask.</li>
          <li><strong>Keep the source away from your head:</strong> A speaker elsewhere in the room usually creates a more even background than a phone beside the pillow.</li>
          <li><strong>Test a timer:</strong> If sound is only useful while settling, there is no reason to assume it must run all night.</li>
          <li><strong>Compare with a quiet night:</strong> Stop if you notice more awakenings, discomfort, morning fatigue or ringing.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="faq" title="Frequently Asked Questions (FAQ)">
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Why does white noise help you sleep?</h3>
            <p className="mt-2 leading-7 text-white/70">It may reduce the contrast between a steady room and sudden noises, making traffic or doors less noticeable. Evidence does not show that it helps everyone.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">What is white noise for sleep exactly?</h3>
            <p className="mt-2 leading-7 text-white/70">Technical white noise has equal power per hertz and sounds like static. Fans and air conditioners are usually broadband sounds rather than mathematically white noise.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Is white or pink noise better for sleep?</h3>
            <p className="mt-2 leading-7 text-white/70">Neither is universally better. Pink noise sounds softer because it has less high-frequency energy; white noise may provide broader masking. Preference and environment matter.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Is it safe to sleep with white noise every night?</h3>
            <p className="mt-2 leading-7 text-white/70">Use the lowest comfortable level, keep the source away from your head and stop if it causes discomfort, ringing or poorer sleep.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Can you get addicted to sleeping with white noise?</h3>
            <p className="mt-2 leading-7 text-white/70">It is not considered physically addictive, but it can become part of a learned bedtime routine. Lower the volume or shorten the timer gradually if you want to stop.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="sources" title="Evidence and sources">
        <ul className="list-disc space-y-3 pl-5 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/29312136/" target="_blank" rel="noopener noreferrer">
              Randomized crossover study of broadband sound and transient difficulty falling asleep
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/33007706/" target="_blank" rel="noopener noreferrer">
              Systematic review: continuous noise as a sleep aid
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9163611/" target="_blank" rel="noopener noreferrer">
              Review of white and pink noise for sleep in varied populations
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  );
}
