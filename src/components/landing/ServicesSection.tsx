'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Database, Workflow, LayoutDashboard, Globe } from 'lucide-react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { transitionItem, viewportOnce } from './motion';

const services = [
  {
    title: 'Custom CRM',
    description: 'One record for every relationship—pipeline, history, and next steps your partners can trust.',
    icon: Database,
    bullets: ['Lead qualification & routing', 'Matter or client history in context', 'Intake that matches your standards'],
  },
  {
    title: 'Workflow automation',
    description: 'Repeatable follow-through. Forms, tasks, and notifications that run without someone remembering.',
    icon: Workflow,
    bullets: ['Sequences & handoffs', 'Reminders that respect the work', 'Internal process, encoded'],
  },
  {
    title: 'Dashboards & reporting',
    description: 'Leadership sees what matters—clean numbers, not another export to reconcile.',
    icon: LayoutDashboard,
    bullets: ['Revenue & throughput', 'Team load & accountability', 'Operational visibility, one view'],
  },
  {
    title: 'Websites & Product Development',
    description: 'High-impact web presence and product foundations—from flagship sites to the platforms your team lives in.',
    icon: Globe,
    bullets: [
      'Premium websites that convert',
      'Booking / lead generation sites',
      'Startup MVP platforms',
      'Client portals & internal tools',
    ],
  },
];

export function ServicesSection() {
  const reduce = useReducedMotion();

  return (
    <Section id="services" className="border-t border-zinc-200/60 bg-[#f4f4f2] py-24 sm:py-28 lg:py-32">
      <SectionHeader
        eyebrow="Capabilities"
        title="What we build"
        description="Focused engagements. Each engagement is scoped for clarity, built for maintainability, and delivered with intent."
      />

      <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-7">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...transitionItem(index), duration: reduce ? 0 : 0.52 }}
            className="group flex flex-col rounded-3xl border border-zinc-200/70 bg-white p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset] transition duration-500 ease-out hover:border-zinc-300/90 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.1)] sm:p-9"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200/80 bg-zinc-50 text-zinc-900 transition duration-500 group-hover:border-zinc-300 group-hover:bg-white">
                <service.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{service.description}</p>
              </div>
            </div>
            <ul className="mt-8 space-y-3 border-t border-zinc-100 pt-8">
              {service.bullets.map((b) => (
                <li key={b} className="border-l-2 border-zinc-200 pl-4 text-sm leading-relaxed text-zinc-600">
                  {b}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
