import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Script from "next/script";
import CookieConsent from "./_components/cookie-consent";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.calmasounds.com"),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(",").map(k => k.trim()),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://www.calmasounds.com",
      siteName: "Calma",
      locale: locale === "es" ? "es_ES" : locale === "pl" ? "pl_PL" : "en_US",
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
    alternates: {
      canonical: "https://www.calmasounds.com",
      languages: {
        "en": "https://www.calmasounds.com",
        "es": "https://www.calmasounds.com/es",
        "pl": "https://www.calmasounds.com/pl",
      }
    },
    manifest: "/manifest.json",
    appleWebApp: {
      title: "Calma",
      statusBarStyle: "black-translucent",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://play.google.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DKG7861ZMZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DKG7861ZMZ');
          `}
        </Script>
      </body>
    </html>
  );
}