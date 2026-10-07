import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AudioPlayer } from "../blog/_components/audio-player";
import SoftwareApplicationSchema from "./software-application-schema";

const storeLinks = [
  { label: "Download on App Store", href: "https://apps.apple.com/us/app/calma-sleep-sounds-relax/id6761824923" },
  { label: "Download on Google Play", href: "https://play.google.com/store/apps/details?id=pl.mitysoft.calma" },
];

const sounds = {
  rain: {
    path: "/rain-sounds-app",
    title: "Rain Sounds App — Free Offline Mixing | Calma",
    description: "Mix rain with brown noise or nature sounds in Calma. Free three-layer mixer, offline playback, a fade-out sleep timer and optional one-time PRO unlock.",
    h1: "A rain sounds app for your own bedtime and focus mixes",
    intro: "Choose rain as the starting point for a background sound you control. In Calma, you can layer it with brown noise, ocean waves or forest ambience, adjust each volume separately and set a timer that gently fades your mix out. Start with the free version on iPhone or Android, with no account or recurring subscription required.",
    sample: "/rain.m4a",
    sampleTitle: "Listen to steady rain",
    sampleDescription: "Try this short rain sample before building your mix in the app.",
    sections: [
      { title: "Build a rain mix instead of finding another long video", text: "A single recording may be too loud, too bright or too busy for your room. Use rain as one layer and adjust it independently from the rest of your mix. Add a quiet layer of brown noise for a deeper background, or nature sounds for a different texture. You can change the balance without switching to another recording." },
      { title: "Choose your sound for bedtime or focused work", text: "Start with a comfortable, low volume and a mix you find easy to ignore. Rain alone may suit a quiet evening; rain with another steady sound may suit reading or desk work. Your preferences and surroundings matter, so compare a few combinations rather than expecting one sound to work for everyone." },
      { title: "Play rain sounds offline", text: "Calma supports offline playback, so you can listen without relying on a continuous internet connection. Before travelling, check that your chosen sounds are available in the app and try your mix in airplane mode. You can keep the same background sound when Wi-Fi is unavailable." },
      { title: "Set a fade-out sleep timer", text: "Choose a playback duration and let the timer gradually lower the sound. This makes rain part of your evening routine without having to pick a video with exactly the right length. You can also use a timed mix for a reading session or a short break." },
    ],
    questions: [
      { question: "Is Calma a free rain sounds app?", answer: "Calma has a free version with a mixer for up to three sound layers. PRO is an optional one-time unlock that adds premium features, including up to six layers. A recurring subscription is not required." },
      { question: "Can I mix rain and brown noise?", answer: "Yes. Add rain and brown noise to the same mix and adjust their volumes separately. You can also combine rain with other available nature sounds." },
      { question: "Can I play rain sounds without Wi-Fi?", answer: "Yes. Calma supports offline playback. Check that the sounds you want are available in the app before going offline." },
      { question: "Is the rain sounds app available for iPhone and Android?", answer: "Yes. Download Calma from the App Store for iPhone or from Google Play for Android. No account is required to get started." },
    ],
    related: [
      { href: "/blog/rain-sounds-for-better-sleep-and-focus", label: "Rain sounds for sleep and focus: a practical guide" },
      { href: "/blog/rain-sounds-vs-white-noise", label: "Hear the difference between rain and white noise" },
      { href: "/nature-sounds-app", label: "Explore the nature sounds app" },
      { href: "/brown-noise-app", label: "Mix with brown noise" },
    ],
  },
  pink: {
    path: "/pink-noise-app",
    title: "Pink Noise App — Free Offline Mixing | Calma",
    description: "Try pink noise in Calma for iPhone and Android. Mix it with rain or nature sounds, play offline and use a sleep timer. Free tier, no required subscription.",
    h1: "A pink noise app with adjustable mixes and offline playback",
    intro: "Pink noise has a softer, less bright character than white noise. Calma lets you try it on its own or blend it with rain and nature sounds, with a separate volume control for each layer. Use the free three-layer mixer, listen offline and choose a fade-out timer for your evening routine.",
    sample: "/pink_noise.m4a",
    sampleTitle: "Listen to pink noise",
    sampleDescription: "Compare this sample with white and brown noise to find the texture you prefer.",
    sections: [
      { title: "Pink noise, white noise or brown noise?", text: "White noise sounds brighter; brown noise has a deeper rumble. Pink noise sits between them in perceived texture, with less emphasis on high frequencies than white noise. Listen at a comfortable volume and choose the sound that suits your room and preference. These are different sound options, not a promise of better sleep." },
      { title: "Make pink noise one layer of your own soundscape", text: "Try pink noise by itself, then add quiet rain or forest ambience. Each layer has its own volume, so the mix can stay subtle rather than overwhelming the room. The free version supports up to three layers; the optional PRO unlock supports up to six." },
      { title: "Keep your background sound available offline", text: "Calma supports offline listening without continuous streaming. Check your chosen sounds in the app before disconnecting, then use your mix without Wi-Fi or mobile data. This can be useful at bedtime, while travelling or wherever the connection is unreliable." },
      { title: "Use the timer for a quieter finish", text: "The sleep timer fades playback out gradually after the duration you choose. You can use it for your bedtime routine, a reading session or a break. Adjust the sound to a low, comfortable level and change or stop the mix if it does not feel right for you." },
    ],
    questions: [
      { question: "Is there a free pink noise app?", answer: "Calma offers a free version on iPhone and Android with a mixer for up to three sound layers. PRO is an optional one-time unlock, with no required recurring subscription." },
      { question: "Does Calma play pink noise offline?", answer: "Yes. Calma supports offline playback. Check that your chosen sounds are available in the app before disconnecting." },
      { question: "Can I mix pink noise with rain?", answer: "Yes. Add pink noise and rain to your mix and set each volume independently. You can also try other available nature sounds." },
      { question: "Is pink noise better than white noise?", answer: "Neither is best for everyone. Pink noise has a less bright texture than white noise, while brown noise sounds deeper. Try the samples and choose whichever feels comfortable to you." },
    ],
    related: [
      { href: "/blog/brown-noise-vs-white-noise-vs-pink-noise", label: "Compare white, brown and pink noise with samples" },
      { href: "/white-noise-app", label: "Try the white noise app" },
      { href: "/brown-noise-app", label: "Try the brown noise app" },
      { href: "/rain-sounds-app", label: "Add rain sounds to your mix" },
    ],
  },
};

export type SoundKind = keyof typeof sounds;

export function soundMetadata(kind: SoundKind, locale: string): Metadata {
  if (locale !== "en") notFound();
  const sound = sounds[kind];
  const url = `https://www.calmasounds.com${sound.path}`;
  return {
    title: sound.title,
    description: sound.description,
    alternates: { canonical: url, languages: { en: url, "x-default": url } },
    openGraph: { title: sound.title, description: sound.description, url, type: "website", locale: "en_US", images: ["/og-image.png"] },
    twitter: { card: "summary_large_image", title: sound.title, description: sound.description, images: ["/og-image.png"] },
  };
}

function StoreButtons({ location }: { location: string }) {
  return <div className="mt-8 flex flex-wrap justify-center gap-4">{storeLinks.map(link => (
    <a key={link.href} href={link.href} data-cta-location={location} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-100">{link.label}</a>
  ))}</div>;
}

export default function SoundLanding({ kind, locale }: { kind: SoundKind; locale: string }) {
  if (locale !== "en") notFound();
  const sound = sounds[kind];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.calmasounds.com" },
        { "@type": "ListItem", position: 2, name: `${kind === "rain" ? "Rain Sounds" : "Pink Noise"} App`, item: `https://www.calmasounds.com${sound.path}` },
      ] },
      { "@type": "FAQPage", mainEntity: sound.questions.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    ],
  };
  return <main className="min-h-screen bg-slate-950 text-white">
    <SoftwareApplicationSchema name="Calma — Sleep Sounds & Relaxation" description={sound.description} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="mx-auto max-w-5xl px-6 py-16 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">{kind === "rain" ? "Rain sounds app" : "Pink noise app"}</p>
      <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{sound.h1}</h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">{sound.intro}</p>
      <StoreButtons location="hero" />
      <p className="mt-4 text-sm text-white/60">Free version · iOS + Android · Optional one-time PRO unlock</p>
    </section>
    <section className="mx-auto max-w-3xl px-6 pb-12" aria-label="Sound preview">
      <AudioPlayer src={sound.sample} title={sound.sampleTitle} description={sound.sampleDescription} />
    </section>
    <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-2">
      {sound.sections.map(section => <div key={section.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">{section.title}</h2><p className="mt-4 leading-8 text-white/70">{section.text}</p>
      </div>)}
    </section>
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <h2 className="text-3xl font-semibold">See the mixer inside Calma</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {["2_en", "3_en"].map((name, index) => <Image key={name} src={`/screenshots/${name}.png`} width={450} height={1000} sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) calc((100vw - 72px) / 2), 476px" alt={index === 0 ? "Calma sound library on a phone" : "Calma mixer with separate sound volume controls"} className="h-auto w-full rounded-3xl" />)}
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <h2 className="text-3xl font-semibold">Questions before you download</h2>
      <div className="mt-8 space-y-5">{sound.questions.map(item => <div key={item.question} className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">{item.question}</h3><p className="mt-3 leading-7 text-white/70">{item.answer}</p>
      </div>)}</div>
    </section>
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <h2 className="text-3xl font-semibold">Explore related sounds</h2>
      <ul className="mt-6 space-y-4">{sound.related.map(link => <li key={link.href}><a href={link.href} className="text-emerald-300 underline underline-offset-4">{link.label}</a></li>)}</ul>
      <p className="mt-6 text-white/70">You can also explore the <a href="/sleep-sounds-app" className="underline underline-offset-4">sleep sounds app</a> or learn how to <a href="/sound-mixer-app" className="underline underline-offset-4">build a custom sound mix</a>.</p>
    </section>
    <section className="mx-auto max-w-5xl px-6 pb-16 text-center">
      <h2 className="text-3xl font-semibold">Try your own mix in Calma</h2><StoreButtons location="end" />
    </section>
  </main>;
}
