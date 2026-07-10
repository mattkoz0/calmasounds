import type { ReactNode } from "react";
import ProductHighlights from "../_components/product-highlights";
import WellnessNote from "../_components/wellness-note";

export default async function Layout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <>{children}<WellnessNote locale={locale} topic="tinnitus" /><ProductHighlights locale={locale} /></>;
}
