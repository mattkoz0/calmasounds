import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DownloadClient from "./_components/download-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Download" });

  return {
    title: `${t("title")} | Calma`,
    description: t("description"),
    alternates: {
      canonical: `https://www.calmasounds.com/download`,
    },
    openGraph: {
      title: `${t("title")} | Calma`,
      description: t("description"),
      url: `https://www.calmasounds.com/download`,
      siteName: "Calma",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} | Calma`,
      description: t("description"),
    },
  };
}

export default function DownloadPage() {
  return <DownloadClient />;
}
