'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Stethoscope, Users, Wrench, UtensilsCrossed } from 'lucide-react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { inViewProps, motionDuration, transitionItem, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

const examples = [
  {
    title: 'Firm intake & lead follow-up',
    description:
      'Structured intake, matter-ready stages, and follow-up that runs—so inquiries convert without manual chasing.',
    icon: Gavel,
  },
  {
    title: 'Practice rhythm & reminders',
    description:
      'Session cadence, lightweight client touchpoints, and dependable reminders—quiet, compliant, dependable.',
    icon: Stethoscope,
  },
  {
    title: 'Member engagement & care',
    description:
      'Signals from attendance and groups, pastoral queues, and communication that scales with the ministry.',
    icon: Users,
  },
  {
    title: 'Field & back-office workspace',
    description:
      'Jobs, technicians, and revenue in one workspace—fewer tabs, fewer “where did that go?” moments.',
    icon: Wrench,
  },
  {
    title: 'Restaurant Growth System',
    description:
      'Mobile website, reservations, loyalty campaigns, and repeat-customer automation in one modern system.',
    icon: UtensilsCrossed,
  },
];

export function SolutionsSection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section id="solutions" className="border-t border-zinc-200/60 bg-white py-24 sm:py-28 lg:py-32">
      <SectionHeader
        eyebrow="Reference builds"
        title="Systems at this level of finish"
        description="Illustrative—not case studies. Each example reflects the craft and scope we bring to client work."
      />

      <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
        {examples.map((ex, index) => (
          <motion.article
            key={ex.title}
            {...inViewProps(mounted, reduce, 20)}
            viewport={viewportOnce}
            transition={{ ...transitionItem(index), duration: motionDuration(mounted, reduce, 0.5) }}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-white to-brand-soft/30 p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.8)_inset] card-hover-glow sm:p-9"
          >
            <div className="absolute right-8 top-8 h-px w-8 bg-brand/25 transition duration-500 group-hover:w-12 group-hover:bg-brand" />
            <div className="icon-box-sm h-10 w-10 shadow-sm group-hover:border-brand/30">
              <ex.icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="mt-7 text-lg font-semibold leading-snug tracking-tight text-zinc-950">{ex.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">{ex.description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
