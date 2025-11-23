import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "ZuiderAir - Airco Specialist Rotterdam | Installatie & Onderhoud",
  description:
    "Professionele airco installatie, onderhoud en reparatie in Rotterdam en omgeving. 15+ jaar ervaring. Erkend installateur. Gratis offerte. Bel 06 27972804.",
  keywords: [
    "airco installatie Rotterdam",
    "airco onderhoud",
    "airco reparatie",
    "warmtepomp",
    "airconditionering",
    "klimaattechniek",
    "Zuid-Holland",
  ],
  authors: [{ name: "ZuiderAir" }],
  openGraph: {
    title: "ZuiderAir - Airco Specialist Rotterdam",
    description:
      "Professionele airco diensten in Rotterdam. 15+ jaar ervaring, erkend installateur. Gratis offerte.",
    type: "website",
    locale: "nl_NL",
    siteName: "ZuiderAir",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
