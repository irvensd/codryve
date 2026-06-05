'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Workflow, LayoutDashboard, LifeBuoy } from 'lucide-react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { inViewProps, motionDuration, transitionItem, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

const services = [
  {
    title: 'Custom Websites',
    description:
      'High-converting, mobile-friendly websites built to build trust and turn visitors into customers.',
    icon: Globe,
  },
  {
    title: 'Automation & CRM',
    description:
      'We set up automations and CRM systems that help you capture leads, follow up, and close more business.',
    icon: Workflow,
  },
  {
    title: 'Dashboards',
    description:
      'Clear dashboards that show you what’s working, where leads are coming from, and how the business is performing.',
    icon: LayoutDashboard,
  },
  {
    title: 'Ongoing Support',
    description: 'Updates, optimizations, and support so your systems keep getting better.',
    icon: LifeBuoy,
  },
];

export function ServicesSection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section id="services" className="border-t border-zinc-200/60 bg-[#f4f4f2] py-24 sm:py-28 lg:py-32">
      <SectionHeader
        eyebrow="What we build"
        title="Custom Systems. Real Results."
        description="We design and build the systems that help your business look professional, win more leads, and run with less friction."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:gap-7">
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
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{service.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
