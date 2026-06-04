'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { easeLux, inViewProps, motionDuration, transitionItem, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

const steps = [
  { title: 'Discover', description: 'Process, constraints, and a shared picture of “done.”', icon: Search },
  { title: 'Design', description: 'UX, data model, and plan—aligned before engineering starts.', icon: PenTool },
  { title: 'Build', description: 'Iterations you can see. Feedback baked in, not bolted on.', icon: Code2 },
  { title: 'Launch & refine', description: 'Go live, then improve with real usage—not assumptions.', icon: Rocket },
];

export function ProcessSection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section id="process" className="border-t border-zinc-200/60 bg-[#f4f4f2] py-24 sm:py-28 lg:py-32">
      <SectionHeader
        eyebrow="Process"
        title="From ambiguity to a system you trust"
        description="No mystery phases. You always know where things stand and what happens next."
      />

      <div className="relative mt-16 lg:mt-20">
        <div className="absolute left-0 right-0 top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block" aria-hidden />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              {...inViewProps(mounted, reduce, 20)}
              viewport={viewportOnce}
              transition={{ ...transitionItem(index), duration: motionDuration(mounted, reduce, 0.5), ease: easeLux }}
              className="relative rounded-3xl border border-zinc-200/70 bg-white p-7 text-left shadow-[0_1px_0_0_rgba(255,255,255,0.8)_inset] card-hover-glow sm:p-8 lg:text-center"
            >
              <div className="flex items-center gap-4 lg:flex-col lg:gap-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand-soft text-xs font-semibold tabular-nums text-brand lg:mx-auto">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="icon-box h-11 w-11 shrink-0 lg:mx-auto lg:mt-5">
                  <step.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </div>
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-zinc-950 lg:mt-6">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
