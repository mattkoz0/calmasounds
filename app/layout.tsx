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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calmasounds.com"),
  title: "Calma | Sleep Sounds, Relaxation and Focus App",
  description:
    "Calma is a beautifully simple sleep sounds and relaxation app that helps you create personalized audio mixes for better sleep, calmer evenings and deeper focus.",
  keywords: [
    "sleep sounds app",
    "relaxation app",
    "focus sounds app",
    "sound mixer app",
    "sleep sounds",
    "relaxing sounds",
    "focus sounds",
    "white noise app",
    "calma app",
    "ADHD focus sounds",
    "anxiety relief sounds",
    "calma sleep sounds",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Calma | Sleep Sounds, Relaxation and Focus App",
    description:
      "Create personalized soundscapes for sleep, relaxation and deep focus with Calma.",
    url: "https://www.calmasounds.com",
    siteName: "Calma",
    locale: "en_US",
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
    title: "Calma | Sleep Sounds, Relaxation and Focus App",
    description:
      "Create personalized soundscapes for sleep, relaxation and deep focus with Calma.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.calmasounds.com",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Calma",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <CookieConsent />
        
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