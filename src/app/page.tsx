import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Process />
      <Pricing />
      <Footer />
    </main>
  );
}
