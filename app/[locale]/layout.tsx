import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

import CookieConsent from "./_components/cookie-consent";
import Header from "./_components/header";
import Footer from "./_components/footer";
import ConversionTracking from "./_components/conversion-tracking";
import AnalyticsLoader from "./_components/analytics-loader";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const localeMap: Record<string, string> = {
    en: "en_US",
    pl: "pl_PL",
    es: "es_ES",
    de: "de_DE",
    fr: "fr_FR",
    ko: "ko_KR",
    ja: "ja_JP",
    "pt-BR": "pt_BR",
  };

  return {
    metadataBase: new URL("https://www.calmasounds.com"),
    title: t("title"),
    description: t("description"),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://www.calmasounds.com",
      siteName: "Calma",
      locale: localeMap[locale] || "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1024,
          height: 1024,
          alt: "Calma - Sleep Sounds and Relaxation App",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },

    manifest: "/manifest.json",
    appleWebApp: {
      title: "Calma",
      statusBarStyle: "black-translucent",
    },
    itunes: {
      appId: "6761824923",
    },
    other: {
      "color-scheme": "dark",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://play.google.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
          <ConversionTracking />
          <AnalyticsLoader />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
