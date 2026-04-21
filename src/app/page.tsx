import React from 'react';
import {
  HeroSection,
  WhoWeHelpSection,
  ServicesSection,
  WhySection,
  SolutionsSection,
  ProcessSection,
  FinalCtaSection,
} from '../components/landing';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      <HeroSection />
      <WhoWeHelpSection />
      <ServicesSection />
      <WhySection />
      <SolutionsSection />
      <ProcessSection />
      <FinalCtaSection />
    </main>
  );
}
