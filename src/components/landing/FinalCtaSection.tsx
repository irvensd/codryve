'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { easeLux, viewportOnce } from './motion';

export function FinalCtaSection() {
  const reduce = useReducedMotion();

  return (
    <Section className="border-t border-zinc-200/60 bg-white py-24 sm:py-28 lg:pb-32 lg:pt-28">
      <motion.div
        initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: reduce ? 0 : 0.6, ease: easeLux }}
        className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-zinc-950 px-8 py-16 text-center shadow-[0_32px_64px_-28px_rgba(0,0,0,0.45)] sm:px-14 sm:py-20 lg:rounded-[2rem] lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(255,255,255,0.04),transparent_45%)]" />

        <div className="relative mx-auto max-w-xl lg:max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">Next step</p>
          <h2 className="mt-4 text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-white sm:text-3xl lg:text-[2.35rem]">
            You don&apos;t need another tool. You need a better system.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-[0.9375rem]">
            One conversation to map the friction, outline a clean path forward, and decide if we&apos;re the right
            build partner.
          </p>
          <Link
            href="/contact"
            className="group mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-9 text-[13px] font-medium tracking-wide text-zinc-950 shadow-[0_1px_0_0_rgba(0,0,0,0.04)_inset] ring-1 ring-white/10 transition duration-300 hover:bg-zinc-100"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} aria-hidden />
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
