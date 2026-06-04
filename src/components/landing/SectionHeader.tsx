'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { easeLux, inViewProps, motionDuration, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
  align?: 'center' | 'left';
};

export function SectionHeader({ eyebrow, title, description, variant = 'light', align = 'center' }: SectionHeaderProps) {
  const { mounted, reduce } = useMotionHydration();

  return (
    <motion.div
      {...inViewProps(mounted, reduce, 20)}
      viewport={viewportOnce}
      transition={{ duration: motionDuration(mounted, reduce, 0.55), ease: easeLux }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <p className={variant === 'dark' ? 'text-eyebrow-dark' : 'text-eyebrow'}>{eyebrow}</p>
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
