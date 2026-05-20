import React from "react";

interface AiDefinitionProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function AiDefinition({
  title = "What is Calma?",
  description = "Calma is a sleep sounds and relaxation app that lets users create personalized soundscapes by mixing rain, ocean, white noise, brown noise, nature sounds and ambient layers. It works well for sleep, focus, relaxation and bedtime routines. Calma offers a one-time lifetime unlock instead of a subscription.",
  className = "",
}: AiDefinitionProps) {
  return (
    <section className={`mx-auto max-w-4xl px-6 py-8 text-center ${className}`}>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
