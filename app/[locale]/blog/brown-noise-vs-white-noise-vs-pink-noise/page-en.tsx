import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import { YouTubeEmbed } from "@/app/_components/youtube-embed";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brown vs White vs Pink Noise: Differences & Uses | Calma",
  description:
    "Compare white, pink and brown noise by frequency, sound and evidence for sleep or focus. Hear each sample and see what ADHD research actually tested.",
  keywords: [
    "brown noise vs white noise",
    "pink noise vs white noise",
    "is brown noise better than white noise for sleep",
    "why does brown noise help adhd",
    "difference between pink brown and white noise",
    "best noise for focus",
    "noise for ADHD",
    "colors of noise explained",
    "calma blog",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/brown-noise-vs-white-noise-vs-pink-noise",
  },
  openGraph: {
    title: "Brown Noise vs White Noise: Which is Better for Sleep?",
    description:
      "Is brown noise better than white noise for sleep? Discover the scientific differences between pink, brown, and white noise.",
    url: "https://www.calmasounds.com/blog/brown-noise-vs-white-noise-vs-pink-noise",
    siteName: "Calma",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brown Noise vs White Noise: Which is Better?",
    description:
      "Discover the differences between pink, brown, and white noise and which is best for sleep or ADHD.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is brown noise better than white noise for sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no strong evidence that brown noise is universally better for sleep. It has relatively more low-frequency energy and may feel less bright than white noise, so preference and the sound environment matter."
      }
    },
    {
      "@type": "Question",
      "name": "Why does brown noise help ADHD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 2024 meta-analysis found a small task-performance benefit from white and pink noise for young people with ADHD or elevated attention problems. It found no eligible studies of brown noise, so claims that brown noise specifically treats ADHD are not established."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between pink, brown, and white noise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White noise has equal energy across all frequencies (like static). Pink noise reduces the high frequencies and boosts the lows (sounding like steady rain). Brown noise reduces the high frequencies even further, creating a very deep, bass-heavy rumble (like a distant thunderstorm)."
      }
    },
    {
      "@type": "Question",
      "name": "Is green noise better than brown noise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Green noise is centered in the mid-range frequencies, mimicking sounds of nature like a flowing river. It is often considered more balanced than the heavy bass of brown noise, but brown noise is typically better for intense focus and masking deep background sounds."
      }
    }
  ]
};

export default function NoiseColorsPage() {
  return (
    <ArticlePage
      slug="brown-noise-vs-white-noise-vs-pink-noise"
      jsonLd={articleJsonLd}
      topLinkHref="/white-noise-app"
      topLinkLabel="Explore white noise page"
      title="Brown Noise vs White Noise vs Pink Noise: What Is the Difference?"
      intro="Noise colors describe how acoustic energy is distributed across frequencies. White noise is brighter, pink noise rolls off toward higher frequencies, and brown noise is deeper still. Hear each sample, compare the profiles, and see where evidence for sleep and attention is promising—and where popular claims go beyond the research."
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Download Calma App Free"
      secondaryCtaHref="/sound-mixer-app"
      secondaryCtaLabel="Explore sound mixer app"
      tableOfContents={[
        { id: "video", title: "Video: Colors Explained" },
        { id: "difference", title: "What is the difference?" },
        { id: "is-brown-better", title: "Is brown noise better for sleep?" },
        { id: "adhd", title: "Why does brown noise help ADHD?" },
        { id: "comparison-table", title: "Comparison Table" },
        { id: "faq", title: "Frequently Asked Questions" },
      ]}
      relatedArticles={[
        {
          href: "/blog/white-noise-for-sleep",
          title: "White Noise for Sleep",
          description: "Learn how white noise can help you fall asleep faster.",
        },
        {
          href: "/blog/best-sounds-for-sleep",
          title: "Best Sounds for Sleep",
          description: "Discover the most effective sounds for concentration and rest.",
        },
      ]}
    >
      <ArticleSection id="video" title="Watch: The Colors of Noise Explained">
        <p className="mb-6 leading-8 text-white/70">
          Before diving into the science, check out our quick guide on YouTube Shorts to actually hear the difference and see which color your brain prefers.
        </p>
        <div className="flex justify-center">
            <div className="aspect-[9/16] w-full max-w-[350px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <YouTubeEmbed
                    videoId="MlJNs1K66xc"
                    title="The Colors of Noise: White, Pink, Brown and Green"
                />
            </div>
        </div>
      </ArticleSection>

      <ArticleSection id="difference" title="What is the difference between pink, brown, and white noise?">
        <div className="mt-6 space-y-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1. True White Noise</h3>
            <p className="mb-4 leading-8 text-white/70">
              White noise contains all audible frequencies played at the same intensity. It sounds like TV static. Because it covers all frequencies, it is exceptionally good at aggressively masking sudden, sharp sounds like doors slamming or dogs barking.
            </p>
            <AudioPlayer 
              src="/white_noise.m4a" 
              title="White Noise Sample" 
              description="Consistent static that masks all frequencies evenly."
              colorClass="bg-slate-500/20 text-slate-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">2. Pink Noise (Natural Sounds)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Pink noise lowers the volume of high frequencies and boosts the lower ones. This mimics the acoustic profile of natural environments, like steady rain or rustling leaves, making it much softer on the human ear than white noise.
            </p>
            <AudioPlayer 
              src="/pink_noise.m4a" 
              title="Pink Noise Sample" 
              description="Balanced sound, similar to heavy rain or wind."
              colorClass="bg-pink-500/20 text-pink-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">3. Brown Noise (Deep Bass)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Brown noise takes pink noise a step further. It removes almost all high-frequency sounds, leaving only a deep, powerful rumble. It sounds like the inside of an airplane cabin, a distant waterfall, or heavy thunder.
            </p>
            <AudioPlayer 
              src="/brown_noise.m4a" 
              title="Brown Noise Sample" 
              description="Deep, rumbling frequencies perfect for intense focus."
              colorClass="bg-orange-500/20 text-orange-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">4. Green Noise (Mid-Range)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Green noise focuses the energy directly in the center of the frequency spectrum, mimicking the sound of a rushing river. It avoids both the sharp hissing of white noise and the heavy bass of brown noise.
            </p>
            <AudioPlayer 
              src="/green_noise.m4a" 
              title="Green Noise Sample" 
              description="Mid-range frequencies, similar to a flowing river."
              colorClass="bg-emerald-500/20 text-emerald-300"
            />
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="is-brown-better" title="Is brown noise better than white noise for sleep?">
        <p className="mt-4 leading-8 text-white/70">
          There is no evidence that brown noise is better for a vast majority of people. White noise covers a broad frequency range, while brown noise places much more energy in lower frequencies and can sound less bright.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          That difference can affect preference and masking, but it does not prove that brown noise improves sleep. Reviews of continuous noise and sleep report mixed findings and low-certainty evidence, so use comfort and your actual environment as the deciding factors.
        </p>
      </ArticleSection>

      <ArticleSection id="adhd" title="Why does brown noise help ADHD?">
        <p className="mt-4 leading-8 text-white/70">
          Research does not show that brown noise satisfies a dopamine need or treats ADHD. A 2024 meta-analysis found a small improvement on laboratory attention tasks from <strong>white and pink noise</strong> in children and young adults with ADHD or elevated attention problems.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          Importantly, that review found no eligible studies of brown noise, did not establish changes in real-world ADHD symptoms, and found that white or pink noise could impair task performance in comparison groups without ADHD. Treat any noise color as an optional background preference, not therapy.
        </p>
      </ArticleSection>

      <ArticleSection id="comparison-table" title="Comparison Table: Which noise is for you?">
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-slate-800/50 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Color</th>
                <th className="px-6 py-4 font-semibold">Sounds Like</th>
                <th className="px-6 py-4 font-semibold">Best Used For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-300">White Noise</td>
                <td className="px-6 py-4">TV static, a hissing fan</td>
                <td className="px-6 py-4">Masking loud, unpredictable noises (snoring, traffic).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-pink-300">Pink Noise</td>
                <td className="px-6 py-4">Steady rain, rustling leaves</td>
                <td className="px-6 py-4">A softer broadband background; sleep evidence is mixed.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-orange-300">Brown Noise</td>
                <td className="px-6 py-4">Airplane cabin, distant thunder</td>
                <td className="px-6 py-4">A deeper background sound; brown-noise ADHD evidence is lacking.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-emerald-300">Green Noise</td>
                <td className="px-6 py-4">A flowing river, ocean waves</td>
                <td className="px-6 py-4">Meditation, relieving stress in a natural way.</td>
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
            aria-label="Download Calma App Free"
          >
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
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
            <h3 className="font-semibold text-lg text-emerald-400">Is brown noise better than white noise for sleep?</h3>
            <p className="mt-2 leading-7 text-white/70">There is no universal winner. Brown noise sounds deeper and may be more comfortable for some listeners, but research does not establish it as better for sleep.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Why does brown noise help ADHD?</h3>
            <p className="mt-2 leading-7 text-white/70">A meta-analysis found a small task-performance benefit from white and pink noise for some young people with ADHD. It found no eligible brown-noise studies, so brown-noise-specific claims remain unproven.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">What is the difference between pink, brown, and white noise?</h3>
            <p className="mt-2 leading-7 text-white/70">White noise has equal energy across all frequencies. Pink noise boosts the lows (steady rain). Brown noise creates a very deep, bass-heavy rumble (thunder).</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Is green noise better than brown noise?</h3>
            <p className="mt-2 leading-7 text-white/70">Green noise mimics a flowing river and is more balanced. Brown noise is deeper and typically better for intense focus and masking deep background sounds.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="sources" title="Evidence and sources">
        <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/38428577/" target="_blank" rel="noopener noreferrer">
              Nigg et al. — Meta-analysis of white and pink noise for task performance in ADHD
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/33007706/" target="_blank" rel="noopener noreferrer">
              Riedy et al. — Noise as a sleep aid: a systematic review
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  );
}
