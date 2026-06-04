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

export const metadata: Metadata = {
  title: 'Codryve — Custom CRMs, Automation & Software Systems',
  description:
    'We replace chaos with systems. Custom websites, CRMs, automation, dashboards, local growth systems, and software for firms, practices, churches, restaurants, and growing businesses.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Codryve — We Replace Chaos With Systems',
    description:
      'Custom CRMs, automation, dashboards, and software solutions for firms, practices, churches, and growing businesses.',
    url: '/',
  },
  twitter: {
    title: 'Codryve — We Replace Chaos With Systems',
    description:
      'Custom CRMs, automation, dashboards, and software for organizations that need better systems.',
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
