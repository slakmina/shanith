import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shanith Dhanuja — Graphic Designer & 2D Motion Graphics Designer",
  description:
    "Shanith Dhanuja is a Graphic Designer and 2D Motion Graphics / Animation Designer specializing in brand identity, motion design, and visual storytelling.",
  keywords: [
    "Shanith Dhanuja",
    "Graphic Designer",
    "2D Motion Graphics",
    "Animation Designer",
    "Brand Identity",
    "Motion Design",
    "Portfolio",
  ],
  authors: [{ name: "Shanith Dhanuja" }],
  creator: "Shanith Dhanuja",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Shanith Dhanuja — Graphic Designer & 2D Motion Graphics Designer",
    description:
      "Premium portfolio showcasing graphic design, branding, and 2D motion graphics animation work.",
    siteName: "Shanith Dhanuja Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanith Dhanuja — Graphic Designer & 2D Motion Graphics Designer",
    description:
      "Premium portfolio showcasing graphic design, branding, and 2D motion graphics animation work.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}