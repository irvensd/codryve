'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Scale, HeartHandshake, Church, UtensilsCrossed, Briefcase } from 'lucide-react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { transitionItem, viewportOnce } from './motion';

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
      'Online ordering, reservations, loyalty systems, and local growth tools so guests return and operations stay smooth.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Growing businesses',
    description:
      'One operational backbone instead of a patchwork of tools, built for how the business already runs.',
    icon: Briefcase,
  },
];

export function WhoWeHelpSection() {
  const reduce = useReducedMotion();

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
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...transitionItem(index), duration: reduce ? 0 : 0.5 }}
            className="group flex flex-col rounded-3xl border border-zinc-200/70 bg-zinc-50/30 p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset] transition duration-500 ease-out hover:-translate-y-0.5 hover:border-zinc-300/80 hover:bg-white hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.08)] sm:p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200/80 bg-white text-zinc-800 transition duration-500 group-hover:border-zinc-300">
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
