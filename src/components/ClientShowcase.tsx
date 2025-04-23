'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'Target',
    logo: '/images/clients/target.webp',
    width: 160,
    height: 60
  },
  {
    name: 'Walmart',
    logo: '/images/clients/walmart-logo.png',
    width: 180,
    height: 60
  },
  {
    name: 'Walgreens',
    logo: '/images/clients/walgreens-logo_0.png',
    width: 200,
    height: 60
  }
];

export default function ClientShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;ve had the privilege of working with some of the most respected brands in their industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 