import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import ClientShowcase from '../components/ClientShowcase';
import ProjectStats from '../components/ProjectStats';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Process />
      <ClientShowcase />
      <ProjectStats />
      <Pricing />
    </main>
  );
}
