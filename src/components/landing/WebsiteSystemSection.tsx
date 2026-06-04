'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MousePointerClick, RefreshCw, Star } from 'lucide-react';
import { Section } from './Section';
import { inViewProps, motionDuration, transitionItem, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

const points = [
  {
    title: 'Clear messaging',
    body: 'Positioning and copy that explain what you do and why someone should reach out.',
    icon: MessageSquare,
  },
  {
    title: 'Conversion-focused website',
    body: 'Structure and flows built to turn visits into calls, bookings, and form fills.',
    icon: MousePointerClick,
  },
  {
    title: 'Automated follow-up',
    body: 'Lead capture and handoffs so new opportunities do not sit in an inbox.',
    icon: RefreshCw,
  },
  {
    title: 'Review and referral engine',
    body: 'Systems that ask for reviews at the right moment and make referrals easy.',
    icon: Star,
  },
];

export function WebsiteSystemSection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section className="border-t border-zinc-200/60 bg-[#f4f4f2] py-20 sm:py-24 lg:py-28">
      <motion.div
        {...inViewProps(mounted, reduce, 16)}
        viewport={viewportOnce}
        transition={{ duration: motionDuration(mounted, reduce, 0.55) }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-eyebrow">Why this works</p>
        <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.025em] text-zinc-950 sm:text-3xl sm:leading-[1.1]">
          A website is only one part of the system
        </h2>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-zinc-500 sm:text-base">
          A good website should not sit alone. It should connect to your booking flow, reviews, follow-up process,
          Google profile, and the way your team actually handles new opportunities.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
        {points.map((point, index) => (
          <motion.div
            key={point.title}
            {...inViewProps(mounted, reduce, 14)}
            viewport={viewportOnce}
            transition={{ ...transitionItem(index), duration: motionDuration(mounted, reduce, 0.48) }}
            className="rounded-2xl border border-zinc-200/70 bg-white p-6 card-hover-glow sm:p-7"
          >
            <point.icon className="h-5 w-5 text-brand" strokeWidth={1.5} aria-hidden />
            <h3 className="mt-4 text-base font-semibold tracking-tight text-zinc-950">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">{point.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
