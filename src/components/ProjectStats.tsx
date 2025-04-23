'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Stat {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
  description: string;
}

const stats: Stat[] = [
  {
    number: 9,
    label: 'Ongoing Projects',
    description: 'Currently in development'
  },
  {
    number: 100,
    label: 'Client Satisfaction',
    suffix: '%',
    description: 'Across all projects'
  },
  {
    number: 24,
    label: 'Hour Support',
    prefix: '',
    description: 'Always here to help'
  }
];

interface CounterProps {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
  description: string;
}

const Counter = ({ number, label, suffix = '', prefix = '', description }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100"
    >
      <div className="text-5xl md:text-6xl font-bold mb-4 flex items-baseline tracking-tight">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{prefix}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          {number}
        </motion.span>
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{suffix}</span>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 tracking-tight">{label}</h3>
      <p className="text-gray-500 text-center text-base">{description}</p>
    </motion.div>
  );
};

export default function ProjectStats() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We take pride in our growing portfolio and the trust our clients place in us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix || ''}
              prefix={stat.prefix || ''}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 