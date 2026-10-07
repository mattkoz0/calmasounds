import { useLocale } from "next-intl";
import { getProductDefinition } from "@/app/utils/product";
import { productCopy } from "@/app/utils/product-copy";

interface AiDefinitionProps {
  title?: string;
  description?: string;
  className?: string;
  showFacts?: boolean;
}

export default function AiDefinition({ title, description, className = "", showFacts = false }: AiDefinitionProps) {
  const locale = useLocale();
  const definition = getProductDefinition(locale);
  const text = productCopy[locale] ?? productCopy.en;
  const facts = [
    [text.sounds, text.soundsText],
    [text.mixer, text.mixerText],
    [text.offline, text.offlineText],
  ];
  return (
    <section className={`mx-auto max-w-4xl px-6 py-8 text-center ${className}`}>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">{title ?? definition.title}</h2>
        <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
          {description ?? definition.description}
        </p>
        {showFacts && (
          <>
            <dl className="mt-6 grid gap-4 text-left sm:grid-cols-3">
              {facts.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <dt className="font-semibold text-emerald-200">{label}</dt>
                  <dd className="mt-2 text-sm leading-6 text-white/70">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-6 text-white/65">{text.note}</p>
          </>
        )}
      </div>
    </section>
  );
}
