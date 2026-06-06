import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DownloadClient from "./_components/download-client";
import SoftwareApplicationSchema from "../_components/software-application-schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Download" });
  const canonicalUrl = locale === "en" ? "https://www.calmasounds.com/download" : `https://www.calmasounds.com/${locale}/download`;

  return {
    title: `${t("title")} | Calma`,
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": "https://www.calmasounds.com/download",
        en: "https://www.calmasounds.com/download",
        es: "https://www.calmasounds.com/es/download",
        pl: "https://www.calmasounds.com/pl/download",
        de: "https://www.calmasounds.com/de/download",
        fr: "https://www.calmasounds.com/fr/download",
        ko: "https://www.calmasounds.com/ko/download",
        ja: "https://www.calmasounds.com/ja/download",
        "pt-BR": "https://www.calmasounds.com/pt-BR/download",
      },
    },
    openGraph: {
      title: `${t("title")} | Calma`,
      description: t("description"),
      url: canonicalUrl,
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
  return (
    <>
      <SoftwareApplicationSchema
        name="Calma - Sleep Sounds & Relaxation"
        description="Beautifully simple app for sleep, relaxation, focus and personalized soundscapes."
      />
      <DownloadClient />
    </>
  );
}
