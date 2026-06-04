'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Database, Workflow, LayoutDashboard, Globe, MapPinned } from 'lucide-react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { inViewProps, motionDuration, transitionItem, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

const services = [
  {
    title: 'Custom CRM',
    description:
      'One record for every relationship: pipeline, history, status, and next steps your team can trust.',
    icon: Database,
    bullets: [
      'Lead qualification and routing',
      'Client or matter history in context',
      'Intake that matches your standards',
    ],
  },
  {
    title: 'Workflow automation',
    description:
      'Repeatable follow-through. Forms, tasks, reminders, and notifications that run without someone remembering.',
    icon: Workflow,
    bullets: [
      'Sequences and handoffs',
      'Reminder flows that respect the work',
      'Internal process encoded into the system',
    ],
  },
  {
    title: 'Dashboards & reporting',
    description:
      'Clean visibility into the numbers and activity that matter, without another spreadsheet to reconcile.',
    icon: LayoutDashboard,
    bullets: [
      'Revenue and throughput',
      'Team load and accountability',
      'Operational visibility in one view',
    ],
  },
  {
    title: 'Websites & Product Development',
    description:
      'High-impact websites and product foundations built for conversion, clarity, and the systems your team uses behind the scenes.',
    icon: Globe,
    bullets: [
      'Premium websites that convert',
      'Booking and lead generation flows',
      'Startup MVP platforms',
      'Client portals and internal tools',
    ],
  },
];

export function ServicesSection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section id="services" className="border-t border-zinc-200/60 bg-[#f4f4f2] py-24 sm:py-28 lg:py-32">
      <SectionHeader
        eyebrow="Capabilities"
        title="What we build"
        description="Most projects start with one messy workflow: intake, follow-up, reporting, booking, or customer management. We build the software and systems your team can actually run."
      />

      <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-7">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            {...inViewProps(mounted, reduce, 22)}
            viewport={viewportOnce}
            transition={{ ...transitionItem(index), duration: motionDuration(mounted, reduce, 0.52) }}
            className="group flex flex-col rounded-3xl border border-zinc-200/70 bg-white p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset] card-hover-glow sm:p-9"
          >
            <div className="flex items-start gap-5">
              <div className="icon-box h-12 w-12 shrink-0 group-hover:border-brand/30 group-hover:bg-brand-muted">
                <service.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{service.description}</p>
              </div>
            </div>
            <ul className="mt-8 space-y-3 border-t border-zinc-100 pt-8">
              {service.bullets.map((b) => (
                <li key={b} className="bullet-brand text-sm leading-relaxed text-zinc-600">
                  {b}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}

        <motion.article
          {...inViewProps(mounted, reduce, 22)}
          viewport={viewportOnce}
          transition={{ ...transitionItem(4), duration: motionDuration(mounted, reduce, 0.52) }}
          className="group flex flex-col rounded-3xl border border-brand/20 bg-gradient-to-br from-white to-brand-soft/40 p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset] card-hover-glow sm:p-9 lg:col-span-2"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-5">
              <div className="icon-box h-12 w-12 shrink-0 group-hover:border-brand/35">
                <MapPinned className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </div>
              <div className="min-w-0 max-w-xl">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-950">Local Growth Systems</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  Websites built for conversion, plus the systems behind local growth: booking and follow-up flows,
                  Google Business Profile work, review and referral engines, and automated customer journeys.
                </p>
              </div>
            </div>
            <Link
              href="#local-growth"
              className="btn-secondary-brand h-11 shrink-0 gap-2 self-start bg-white px-6 text-[13px] font-medium tracking-wide"
            >
              View packages
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 border-t border-zinc-100 pt-8 sm:grid-cols-2">
            {[
              'Website redesign and messaging',
              'Booking, contact, and follow-up flows',
              'Google Business Profile optimization',
              'Review, referral, and Instagram DM automation',
            ].map((b) => (
              <li key={b} className="bullet-brand text-sm leading-relaxed text-zinc-600">
                {b}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </Section>
  );
}
