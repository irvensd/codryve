'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Palette, Zap, Cpu, LifeBuoy } from 'lucide-react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { inViewProps, motionDuration, transitionItem, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

const reasons = [
  {
    title: 'Mapped to your workflow',
    body: 'We document how work really happens before we ship—so the product reinforces your standards.',
    icon: GitBranch,
  },
  {
    title: 'Restrained, sharp UX',
    body: 'Interfaces people adopt: hierarchy first, decoration second, speed throughout.',
    icon: Palette,
  },
  {
    title: 'Senior, small team',
    body: 'Direct access. Tight scope. Weekly momentum—without agency layers.',
    icon: Zap,
  },
  {
    title: 'AI where it compounds',
    body: 'We use it to move faster on delivery and rigor—not as a substitute for judgment.',
    icon: Cpu,
  },
  {
    title: 'After launch',
    body: 'Training, tuning, and the next version—systems evolve with you.',
    icon: LifeBuoy,
  },
];

export function WhySection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section
      id="why-codryve"
      className="relative overflow-hidden border-t border-zinc-800/50 bg-brand-navy py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[min(520px,90vw)] w-[min(900px,120%)] -translate-x-1/2 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.07),transparent_55%)]" />
        <div className="glow-blue-corner absolute right-0 top-0 h-[min(420px,70vw)] w-[min(420px,70vw)] opacity-80" />
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative">
        <SectionHeader
          variant="dark"
          eyebrow="Why Codryve"
          title="Product discipline, studio footprint"
          description="We build the way serious software teams build—clear UX, careful engineering, and respect for your name in the market."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {reasons.map((r, index) => (
            <motion.div
              key={r.title}
              {...inViewProps(mounted, reduce, 18)}
              viewport={viewportOnce}
              transition={{ ...transitionItem(index), duration: motionDuration(mounted, reduce, 0.48) }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 transition duration-500 hover:border-brand/30 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_-20px_rgba(37,99,235,0.2)] sm:p-8"
            >
              <r.icon className="h-5 w-5 text-brand-bright/90" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-5 text-base font-semibold tracking-tight text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
