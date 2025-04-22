import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import JsonLd from "../components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codryve - Web Development & SaaS Solutions",
  description: "Professional web development, SaaS solutions, and mobile applications tailored to your business needs. Expert team delivering innovative digital solutions in Houston, TX.",
  keywords: "web development, SaaS development, mobile apps, digital marketing, Houston web development, Texas tech solutions, custom software development",
  authors: [{ name: "Codryve" }],
  creator: "Codryve",
  publisher: "Codryve",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://codryve.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Codryve - Web Development & SaaS Solutions',
    description: 'Professional web development, SaaS solutions, and mobile applications tailored to your business needs. Expert team delivering innovative digital solutions in Houston, TX.',
    url: 'https://codryve.com',
    siteName: 'Codryve',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Codryve - Web Development & SaaS Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codryve - Web Development & SaaS Solutions',
    description: 'Professional web development, SaaS solutions, and mobile applications tailored to your business needs.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <JsonLd />
      </head>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
