import Link from "next/link";

import { productCopy } from "@/app/utils/product-copy";

export default function ProductHighlights({ locale }: { locale: string }) {
  const text = productCopy[locale] ?? productCopy.en;
  const downloadHref = locale === "en" ? "/download" : `/${locale}/download`;
  const cards = [
    [text.sounds, text.soundsText],
    [text.mixer, text.mixerText],
    [text.offline, text.offlineText],
    [text.extras, text.extrasText],
  ];

  return (
    <section className="bg-slate-950 px-6 pb-20 text-white" aria-labelledby="product-highlights-title">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/10 to-white/[0.03] p-8 sm:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">{text.eyebrow}</p>
        <h2 id="product-highlights-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{text.title}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-white/70">{text.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/45 p-5">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href={downloadHref}
            data-cta-location="product_facts"
            className="rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            {text.cta}
          </Link>
          <p className="max-w-2xl text-sm leading-6 text-white/55">{text.note}</p>
        </div>
      </div>
    </section>
  );
}
