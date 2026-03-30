import type { ReactNode } from "react";

type ArticleSectionProps = {
  title: string;
  children: ReactNode;
};

export function ArticleSection({ title, children }: ArticleSectionProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 leading-8 text-white/70">{children}</div>
    </section>
  );
}