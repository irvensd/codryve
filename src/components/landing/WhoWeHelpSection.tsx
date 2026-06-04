'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, HeartHandshake, Church, UtensilsCrossed, Briefcase } from 'lucide-react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { inViewProps, motionDuration, transitionItem, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

const audiences = [
  {
    title: 'Law firms',
    description:
      'Intake, matter tracking, and follow-up in one layer so fewer leads fall between first call and engagement letter.',
    icon: Scale,
  },
  {
    title: 'Therapy practices',
    description:
      'Calm client flow, reminders, and lightweight dashboards built for discretion and day-to-day rhythm.',
    icon: HeartHandshake,
  },
  {
    title: 'Churches & ministries',
    description:
      'Engagement, volunteers, care follow-up, and communication systems without another patchwork of group chats.',
    icon: Church,
  },
  {
    title: 'Restaurants & hospitality',
    description:
      'Online ordering, reservations, loyalty systems, review flows, and local growth tools that help guests book, return, and refer.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Growing businesses',
    description:
      'One operational backbone instead of a patchwork of tools, built for how your business already runs and where it needs to go.',
    icon: Briefcase,
  },
];

export function WhoWeHelpSection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section id="who-we-help" className="border-t border-zinc-200/60 bg-white py-24 sm:py-28 lg:py-32">
      <SectionHeader
        eyebrow="Who we serve"
        title="Organizations outgrowing generic software"
        description="When off-the-shelf products fight your process, we shape systems to your standards—not the other way around."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6 xl:grid-cols-5">
        {audiences.map((item, index) => (
          <motion.article
            key={item.title}
            {...inViewProps(mounted, reduce, 20)}
            viewport={viewportOnce}
            transition={{ ...transitionItem(index), duration: motionDuration(mounted, reduce, 0.5) }}
            className="group flex flex-col rounded-3xl border border-zinc-200/70 bg-zinc-50/30 p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset] card-hover-lift sm:p-8"
          >
            <div className="icon-box h-11 w-11 group-hover:border-brand/30">
              <item.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
