import type { ReactNode } from "react";

type ArticleSectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

export function ArticleSection({ title, children, id }: ArticleSectionProps) {
  return (
    <section id={id} className="rounded-3xl border border-white/10 bg-white/5 p-8 scroll-mt-24">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 leading-8 text-white/70">{children}</div>
    </section>
  );
}