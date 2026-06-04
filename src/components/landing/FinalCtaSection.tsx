'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { easeLux, inViewProps, motionDuration, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

export function FinalCtaSection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section className="border-t border-zinc-200/60 bg-white py-24 sm:py-28 lg:pb-32 lg:pt-28">
      <motion.div
        {...inViewProps(mounted, reduce, 24)}
        viewport={viewportOnce}
        transition={{ duration: motionDuration(mounted, reduce, 0.6), ease: easeLux }}
        className="relative overflow-hidden rounded-[1.75rem] border border-zinc-800/80 border-t-brand/40 bg-brand-navy px-8 py-16 text-center shadow-[0_32px_64px_-28px_rgba(37,99,235,0.25)] sm:px-14 sm:py-20 lg:rounded-[2rem] lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="glow-blue-corner pointer-events-none absolute inset-0 opacity-90" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

        <div className="relative mx-auto max-w-xl lg:max-w-2xl">
          <p className="text-eyebrow-dark">Next step</p>
          <h2 className="mt-4 text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-white sm:text-3xl lg:text-[2.35rem]">
            Ready to replace scattered tools with one clear system?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-[0.9375rem]">
            Book a strategy call and we&apos;ll map the friction, identify the highest-value workflow, and outline
            what Codryve can build first.
          </p>
          <Link
            href="/contact"
            className="group mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-9 text-[13px] font-medium tracking-wide text-zinc-950 shadow-[0_1px_0_0_rgba(0,0,0,0.04)_inset] ring-1 ring-white/10 transition duration-300 hover:bg-zinc-100 hover:shadow-[0_0_32px_-4px_rgba(59,130,246,0.45)] hover:ring-brand/30"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} aria-hidden />
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
