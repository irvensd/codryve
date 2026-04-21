'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeLux, viewportOnce } from './motion';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
  align?: 'center' | 'left';
};

export function SectionHeader({ eyebrow, title, description, variant = 'light', align = 'center' }: SectionHeaderProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: reduce ? 0 : 0.55, ease: easeLux }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">{eyebrow}</p>
      <h2
        className={`mt-4 text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.025em] sm:text-4xl sm:leading-[1.1] lg:text-[2.625rem] ${
          variant === 'dark' ? 'text-white' : 'text-zinc-950'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-[0.9375rem] leading-relaxed sm:text-base ${
          variant === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
