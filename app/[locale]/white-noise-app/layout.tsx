import type { ReactNode } from "react";
import ProductHighlights from "../_components/product-highlights";

export default async function Layout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <>{children}<ProductHighlights locale={locale} /></>;
}
