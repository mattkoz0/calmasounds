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
  },
  twitter: {
    card: "summary_large_image",
    title: "Calma | Sleep Sounds, Relaxation and Focus App",
    description:
      "Create personalized soundscapes for sleep, relaxation and deep focus with Calma.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}