import type { Metadata } from "next";
import { ArticlePage } from "../_components/article-page";
import { ArticleSection } from "../_components/article-section";
import { AudioPlayer } from "../_components/audio-player";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Sounds for Sleep: Rain, White & Brown Noise | Calma",
  description:
    "Compare rain, white noise and brown noise for sleep, hear each sample, and learn what research does—and does not—show about continuous sound at night.",
  keywords: [
    "best sounds for sleep",
    "good sounds to sleep to",
    "sounds to sleep better",
    "noises to help you sleep",
    "best sleep sound",
    "what sound makes you sleep",
    "sounds to help sleep",
    "calma app",
  ],
  alternates: {
    canonical: "https://www.calmasounds.com/blog/best-sounds-for-sleep",
  },
  openGraph: {
    title: "Best Sounds for Sleep: Rain, White or Brown Noise?",
    description:
      "Compare rain, white noise and brown noise, hear each sample, and see what sleep research actually shows.",
    url: "https://www.calmasounds.com/blog/best-sounds-for-sleep",
    siteName: "Calma",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sounds for Sleep: Rain, White or Brown Noise?",
    description:
      "Compare three popular sleep sounds with audio samples and evidence-aware guidance.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What sound makes you sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no universal best sleep sound. A steady sound may reduce the contrast between background silence and sudden noise, but preference, volume and the bedroom environment all matter."
      }
    },
    {
      "@type": "Question",
      "name": "What are good sounds to sleep to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Good sounds to sleep to include steady rain, distant thunderstorms, ocean waves, white noise, and brown noise. The key is consistency—steady sounds create an acoustic blanket that helps the nervous system relax."
      }
    },
    {
      "@type": "Question",
      "name": "Which noises help you sleep better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White noise covers a broad frequency range, while rain and brown noise sound softer or deeper. Research on continuous noise for sleep is mixed, so choose the least intrusive sound that fits your environment."
      }
    },
    {
      "@type": "Question",
      "name": "Is it okay to sleep with sounds on all night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keep playback at a comfortable, low level and stop if it disturbs sleep or causes discomfort. Evidence on all-night continuous noise is limited, and individual hearing or health needs may require professional advice."
      }
    }
  ]
};

export default function BestSoundsForSleepPage() {
  return (
    <ArticlePage
      slug="best-sounds-for-sleep"
      jsonLd={articleJsonLd}
      title="Best Sounds for Sleep: Rain, White Noise, or Brown Noise?"
      intro="There is no single sound that makes everyone sleep. A steady background may reduce the contrast between a quiet room and sudden noise, while familiar rain can simply feel more comfortable. Compare three popular options below, hear each sample, and use the evidence as a guide rather than a promise."
      topLinkHref="/sleep-sounds-app"
      topLinkLabel="Explore sleep app"
      ctaHref="https://play.google.com/store/apps/details?id=pl.mitysoft.calma"
      ctaLabel="Download Calma Free"
      secondaryCtaHref="/white-noise-app"
      secondaryCtaLabel="Explore white noise app"
      tableOfContents={[
        { id: "what-makes-you-sleep", title: "What sound makes you sleep?" },
        { id: "best-sounds", title: "The 3 best sounds to sleep to" },
        { id: "how-to-mix", title: "How to mix sounds for better rest" },
        { id: "faq", title: "Frequently Asked Questions" },
      ]}
      relatedArticles={[
        {
          href: "/blog/rain-sounds-vs-white-noise",
          title: "Rain vs White Noise",
          description: "Which one is scientifically proven to help you sleep better?",
        },
        {
          href: "/blog/brown-noise-vs-white-noise-vs-pink-noise",
          title: "Noise Colors Explained",
          description: "Understand white, pink, brown, and green noise.",
        },
      ]}
    >
      <ArticleSection id="what-makes-you-sleep" title="What sound makes you sleep? The science of sound masking">
        <p className="mt-4 leading-8 text-white/70">
          Your brain never actually turns off its hearing, even during deep sleep. It is an evolutionary defense mechanism designed to wake you up if danger approaches. The problem? Your brain treats a door slamming or a dog barking with the same alarm.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          The best sound to make you sleep is one that utilizes <strong>sound masking</strong>. Sound masking works by raising the ambient background noise level of a room, which reduces the contrast between total silence and a sudden, sharp noise. Good sounds to sleep to are always steady, continuous, and lack sudden changes in pitch or volume.
        </p>
      </ArticleSection>

      <ArticleSection id="best-sounds" title="The 3 best sounds to sleep to">
        <div className="mt-8 space-y-12">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-3">1. Deep Rain (Pink Noise)</h3>
            <p className="mb-4 leading-8 text-white/70">
              Many steady rain recordings have a pink-noise-like spectrum, with relatively more energy in lower frequencies than white noise. The exact profile varies by rainfall and recording, and research does not establish rain as a universal sleep aid.
            </p>
            <AudioPlayer 
              src="/rain.m4a" 
              title="Deep Rain" 
              description="A cozy, emotional sound that naturally calms the nervous system."
              colorClass="bg-blue-500/20 text-blue-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">2. True White Noise</h3>
            <p className="mb-4 leading-8 text-white/70">
              White noise has equal power per hertz and sounds similar to radio static. Its broad spectrum can help reduce the contrast of intermittent sounds, although whether that improves sleep depends on the listener and environment.
            </p>
            <AudioPlayer 
              src="/white_noise.m4a" 
              title="White Noise" 
              description="The ultimate acoustic wall for blocking out sharp, sudden sounds."
              colorClass="bg-slate-500/20 text-slate-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-3">3. Brown Noise</h3>
            <p className="mb-4 leading-8 text-white/70">
              Brown noise rolls off high frequencies more steeply than pink noise, producing a deep rumble similar to a distant waterfall. It is popular online, but evidence does not establish brown noise as an ADHD treatment or a superior sleep sound.
            </p>
            <AudioPlayer 
              src="/brown_noise.m4a" 
              title="Brown Noise" 
              description="A deep, rumbling sound perfect for intense focus and calming an overactive mind."
              colorClass="bg-orange-500/20 text-orange-300"
            />
          </div>

        </div>
      </ArticleSection>

      <ArticleSection id="how-to-mix" title="How to mix noises to help you sleep better">
        <p className="mt-4 leading-8 text-white/70">
          Some listeners prefer one steady sound; others prefer a low-volume mix. Calma lets you compare layers and save a personal soundscape without assuming that more sounds are automatically better.
        </p>
        <p className="mt-4 leading-8 text-white/70">
          One mix to test is a “sandwich” approach: start with a quiet base of <strong>Brown Noise</strong>, add <strong>Rain</strong>, then adjust or remove layers until the result feels unobtrusive.
        </p>
        <div className="mt-8 flex justify-center">
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
            <h3 className="font-semibold text-lg text-emerald-400">What sound makes you sleep?</h3>
            <p className="mt-2 leading-7 text-white/70">There is no universal best sleep sound. A steady sound may reduce the contrast between silence and sudden noise, but preference, volume and the bedroom environment all matter.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">What are good sounds to sleep to?</h3>
            <p className="mt-2 leading-7 text-white/70">Good sounds to sleep to include steady rain, distant thunderstorms, ocean waves, white noise, and brown noise. The key is consistency—steady sounds create an acoustic blanket that helps the nervous system relax.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Which noises help you sleep better?</h3>
            <p className="mt-2 leading-7 text-white/70">White noise offers broad masking, while rain and brown noise sound softer or deeper. Research is mixed, so choose the least intrusive option that fits your environment.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-emerald-400">Is it okay to sleep with sounds on all night?</h3>
            <p className="mt-2 leading-7 text-white/70">Keep playback at a comfortable, low level and stop if it disturbs sleep or causes discomfort. A sleep timer is useful if you do not need sound throughout the night.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="sources" title="Evidence and sources">
        <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pubmed.ncbi.nlm.nih.gov/33007706/" target="_blank" rel="noopener noreferrer">
              Riedy et al. — Noise as a sleep aid: a systematic review
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4 hover:text-white" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9163611/" target="_blank" rel="noopener noreferrer">
              Capezuti et al. — Systematic review of white and pink noise for sleep
            </a>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  );
}
