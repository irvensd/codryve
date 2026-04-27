import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import JsonLd from "../components/JsonLd";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ICON_VERSION = "20260421c";

export const metadata: Metadata = {
  metadataBase: new URL("https://codryve.com"),
  title: "Codryve — Custom CRMs, Automation & Software Systems",
  description:
    "We replace chaos with systems. Custom websites, CRMs, automation, dashboards, and software for firms, practices, churches, restaurants, and growing businesses.",
  keywords:
    "custom CRM, workflow automation, business dashboards, MVP development, software studio, law firm software, therapy practice software, church management systems",
  authors: [{ name: "Codryve" }],
  creator: "Codryve",
  publisher: "Codryve",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    siteName: "Codryve",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Codryve — Custom software studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og"],
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
    nocache: false,
  },
  verification: {
    google: "jYCbowr2cGOE2_TRMayY1NA8uPpkR882CwE2BiRAR14",
  },
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
  icons: {
    icon: [
      { url: `/favicon.ico?v=${ICON_VERSION}`, sizes: "any" },
      { url: `/favicon-48x48.png?v=${ICON_VERSION}`, sizes: "48x48", type: "image/png" },
      { url: `/favicon-32x32.png?v=${ICON_VERSION}`, sizes: "32x32", type: "image/png" },
      { url: `/favicon-16x16.png?v=${ICON_VERSION}`, sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: `/apple-touch-icon.png?v=${ICON_VERSION}`, sizes: "180x180", type: "image/png" }],
    shortcut: `/favicon.ico?v=${ICON_VERSION}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        <link rel="icon" href={`/favicon.ico?v=${ICON_VERSION}`} sizes="any" />
        <link rel="shortcut icon" href={`/favicon.ico?v=${ICON_VERSION}`} />
        <link rel="icon" href={`/favicon-48x48.png?v=${ICON_VERSION}`} type="image/png" sizes="48x48" />
        <link rel="icon" href={`/favicon-32x32.png?v=${ICON_VERSION}`} type="image/png" sizes="32x32" />
        <link rel="icon" href={`/favicon-16x16.png?v=${ICON_VERSION}`} type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href={`/apple-touch-icon.png?v=${ICON_VERSION}`} sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f5f5f3" />
        <JsonLd />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Codryve" />
        <meta name="application-name" content="Codryve" />
        <meta name="msapplication-TileColor" content="#f5f5f3" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
      </head>
      <body className={`${sans.className} font-sans antialiased`}>
        <Layout>{children}</Layout>
        <div id="modal-root" />
      </body>
    </html>
  );
}
