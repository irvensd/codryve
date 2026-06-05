import type { Metadata } from 'next';
import React from 'react';
import {
  HeroSection,
  WhoWeHelpSection,
  ServicesSection,
  LocalGrowthSection,
  WebsiteSystemSection,
  WhySection,
  SolutionsSection,
  ProcessSection,
  FinalCtaSection,
} from '../components/landing';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: `${BRAND.name} — Websites, Automation & Business Systems`,
  description: `${BRAND.tagline} ${BRAND.extendedPositioning}`,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.extendedPositioning,
    url: '/',
  },
  twitter: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.positioning,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      <HeroSection />
      <WhoWeHelpSection />
      <ServicesSection />
      <LocalGrowthSection />
      <WebsiteSystemSection />
      <WhySection />
      <SolutionsSection />
      <ProcessSection />
      <FinalCtaSection />
    </main>
  );
}
