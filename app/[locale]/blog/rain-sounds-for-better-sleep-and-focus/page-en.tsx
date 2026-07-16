import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";

const articleUrl = "https://www.calmasounds.com/blog/rain-sounds-for-better-sleep-and-focus";
const articleTitle = "Rain Sounds for Sleep and Focus: Evidence & Tips | Calma";
const articleDescription =
  "Rain can mask changing background noise, but it is not a proven sleep or ADHD treatment. Explore the evidence and build a steadier listening routine.";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "rain sounds for sleep",
    "rain sounds for focus",
    "rain noise for sleeping",
    "rain sounds for studying",
    "does rain help you sleep",
    "rain ambience",
  ],
  alternates: { canonical: articleUrl },
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
  "@type": "Article",
  headline: "Rain Sounds for Sleep and Focus: Evidence and Practical Tips",
  description: articleDescription,
  mainEntityOfPage: articleUrl,
  author: { "@type": "Organization", name: "Calma" },
  publisher: { "@type": "Organization", name: "Calma" },
};

export default function RainSoundsBlogPage() {
  return (
    <ArticlePage
      slug="rain-sounds-for-better-sleep-and-focus"
      jsonLd={articleJsonLd}
      title="Rain Sounds for Sleep and Focus: What Can They Actually Do?"
      intro="Steady rain can make traffic, voices and household sounds less noticeable. It may also feel easier to ignore than static. Those are practical reasons to try it—but rain is not a proven insomnia or ADHD treatment, and dramatic recordings can be more distracting than helpful."
      topLinkHref="/nature-sounds-app"
      topLinkLabel="Explore nature sounds app"
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Try rain sounds in Calma"
      secondaryCtaHref="/sound-mixer-app"
      secondaryCtaLabel="Explore sound mixing"
      tableOfContents={[
        { id: "what-rain-is", title: "What kind of noise is rain?" },
        { id: "sleep", title: "Rain and sleep evidence" },
        { id: "focus", title: "Rain and focus evidence" },
        { id: "choose", title: "Choose a useful recording" },
        { id: "routines", title: "Sleep and focus routines" },
        { id: "mistakes", title: "Common mistakes" },
        { id: "sources", title: "Evidence and sources" },
      ]}
      relatedArticles={[
        {
          href: "/blog/rain-sounds-vs-white-noise",
          title: "Is Rain White Noise?",
          description: "Compare rain, white noise and pink noise with audio samples.",
        },
        {
          href: "/blog/best-sounds-for-sleep",
          title: "Best Sounds for Sleep",
          description: "Use a decision guide to compare rain and noise colors.",
        },
        {
          href: "/blog/best-sounds-for-studying",
          title: "Best Sounds for Studying",
          description: "Compare steady sound, nature ambience and instrumental music.",
        },
      ]}
    >
      <ArticleSection id="what-rain-is" title="What kind of noise is rain?">
        <p>
          Rain is not one fixed acoustic signal. Light rain on leaves, heavy rain on a roof and a distant storm all have different spectra and changes over time. Many steady recordings sound pink-noise-like because lower frequencies carry more energy than the upper hiss, but microphone placement and processing can change that balance.
        </p>
        <p className="mt-4">
          For sleep and focus, the color label matters less than stability. A useful recording has no sudden thunder, close bird calls, abrupt stereo movement or obvious loop boundary.
        </p>
        <AudioPlayer
          src="/rain.m4a"
          title="Steady rain sample"
          description="Listen for texture without sharp events or dramatic volume changes."
          colorClass="bg-blue-500/20 text-blue-300"
        />
      </ArticleSection>

      <ArticleSection id="sleep" title="Do rain sounds help you sleep?">
        <p>
          The strongest mechanism is masking: steady rain reduces the contrast between the room and intermittent traffic, plumbing or voices. Research on continuous broadband noise shows mixed results. One small randomized crossover study found faster sleep onset in a model of temporary insomnia, while a systematic review of 38 studies rated the overall evidence for continuous noise as very low certainty.
        </p>
        <p className="mt-4">
          Those findings concern broadband sound generally, not rain specifically. Rain may still be a comfortable choice, but claims that it reliably increases deep sleep or “switches off” the brain go beyond the evidence.
        </p>
        <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
          <p className="font-semibold text-emerald-100">Rain is most likely to be useful when…</p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            your bedroom contains unpredictable sound and a quiet rain layer makes those changes less noticeable without becoming a disturbance itself.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="focus" title="Can rain improve focus or studying?">
        <p>
          Direct evidence that rain improves real-world studying is limited. Natural-sound studies more often measure short-term stress recovery or mood than exam scores, sustained work or ADHD symptoms. A 2024 meta-analysis found potential restorative effects of natural sound exposure, but cognitive findings were not consistent and studies differed substantially.
        </p>
        <p className="mt-4">
          In practice, rain may help when it masks speech or office changes without carrying semantic content. It may hurt when the recording contains thunder, birds or a rhythm that repeatedly captures attention. Treat it as a workspace variable, not a productivity guarantee.
        </p>
      </ArticleSection>

      <ArticleSection id="choose" title="How to choose a rain recording that stays in the background">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/15 text-white">
                <th className="px-4 py-3">Recording feature</th>
                <th className="px-4 py-3">Sleep</th>
                <th className="px-4 py-3">Focus</th>
                <th className="px-4 py-3">Why it matters</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/10">
                <td className="px-4 py-3 font-medium text-white">Steady level</td>
                <td className="px-4 py-3">Prefer</td>
                <td className="px-4 py-3">Prefer</td>
                <td className="px-4 py-3">Fewer attention-grabbing changes</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-4 py-3 font-medium text-white">Thunder</td>
                <td className="px-4 py-3">Usually avoid</td>
                <td className="px-4 py-3">Use only if truly distant</td>
                <td className="px-4 py-3">Sharp peaks can defeat masking</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="px-4 py-3 font-medium text-white">Birds or voices</td>
                <td className="px-4 py-3">Avoid</td>
                <td className="px-4 py-3">Avoid for language tasks</td>
                <td className="px-4 py-3">Distinct events pull attention</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Smooth loop</td>
                <td className="px-4 py-3">Essential</td>
                <td className="px-4 py-3">Important</td>
                <td className="px-4 py-3">A repeated seam becomes predictable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="routines" title="Two simple rain-sound routines to test">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white">For bedtime</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/70">
              <li>Place a speaker away from your head.</li>
              <li>Start at the lowest audible level.</li>
              <li>Use the same steady recording for three nights.</li>
              <li>Try a timer if sound is only needed while settling.</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white">For focused work</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/70">
              <li>Choose a repeatable 25-minute task.</li>
              <li>Compare one session with rain and one in quiet.</li>
              <li>Keep volume below the level of speech or instruction.</li>
              <li>Track completed work and errors, not only mood.</li>
            </ol>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="mistakes" title="Common mistakes that make rain less useful">
        <ul className="list-disc space-y-3 pl-5 text-white/70">
          <li><strong>Turning it up to cover everything:</strong> masking does not require overpowering the room.</li>
          <li><strong>Choosing a cinematic storm:</strong> thunder and dramatic wind are interesting, which is precisely why they can interrupt sleep or work.</li>
          <li><strong>Changing the mix every night:</strong> constant switching makes it difficult to learn what actually helps.</li>
          <li><strong>Assuming relaxation equals performance:</strong> feeling calmer does not automatically mean reading faster or making fewer mistakes.</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="sources" title="Evidence and sources">
        <ul className="list-disc space-y-3 pl-5 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/33007706/" target="_blank" rel="noopener noreferrer">
              Systematic review of continuous noise as a sleep aid
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/29312136/" target="_blank" rel="noopener noreferrer">
              Randomized crossover study of broadband sound and sleep onset
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/38373459/" target="_blank" rel="noopener noreferrer">
              Meta-analysis of natural sound exposure and recovery outcomes
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/30999690/" target="_blank" rel="noopener noreferrer">
              Controlled study finding no clear stress-recovery advantage from bird sound
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  );
}
