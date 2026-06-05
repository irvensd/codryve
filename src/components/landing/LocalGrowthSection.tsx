'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutTemplate, MapPinned, Network } from 'lucide-react';
import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { inViewProps, motionDuration, transitionItem, viewportOnce } from './motion';
import { useMotionHydration } from './motion-hooks';

const packages = [
  {
    tier: 'Entry-level offer',
    title: 'Starter Website Refresh',
    summary: 'For businesses that need a cleaner, more professional web presence.',
    icon: LayoutTemplate,
    includes: [
      'Website redesign',
      'Mobile-first layout',
      'Clear service sections',
      'Strong calls to action',
      'Contact or booking flow',
      'Basic SEO cleanup',
    ],
  },
  {
    tier: 'Main offer',
    title: 'Local Growth Website',
    summary:
      'For businesses that want their website to turn more visitors into leads, calls, bookings, or customers.',
    icon: MapPinned,
    featured: true,
    includes: [
      'Brand messaging refinement',
      'High-converting website structure',
      'Booking and contact flow',
      'Google Business Profile cleanup',
      'Review link setup',
      'Local SEO basics',
    ],
  },
  {
    tier: 'Premium offer',
    title: 'Local Growth System',
    summary:
      'For businesses that want the website, follow-up, reviews, and customer journey connected in one system.',
    icon: Network,
    includes: [
      'Website redesign',
      'Brand positioning and messaging',
      'Google Business Profile optimization',
      'Instagram DM automation',
      'Review and referral engine',
      'Lead capture and follow-up automation',
      'Simple reporting or dashboard',
    ],
  },
];

export function LocalGrowthSection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section id="local-growth" className="border-t border-zinc-200/60 bg-white py-24 sm:py-28 lg:py-32">
      <SectionHeader
        eyebrow="Local growth systems"
        title="Done-For-You Systems. Built to Grow."
        description="Simple packages. Powerful systems. Built for local businesses."
      />

      <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-7">
        {packages.map((pkg, index) => (
          <motion.article
            key={pkg.title}
            {...inViewProps(mounted, reduce, 22)}
            viewport={viewportOnce}
            transition={{ ...transitionItem(index), duration: motionDuration(mounted, reduce, 0.52) }}
            className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset] transition duration-500 ease-out sm:p-9 ${
              pkg.featured
                ? 'border-brand/35 border-t-2 border-t-brand bg-brand-navy text-white shadow-[0_32px_64px_-28px_rgba(37,99,235,0.35)] ring-1 ring-brand/20'
                : 'border-zinc-200/70 bg-zinc-50/40 card-hover-glow hover:bg-white'
            }`}
          >
            {pkg.featured && (
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.25),transparent_70%)] blur-2xl"
                aria-hidden
              />
            )}
            <p
              className={`text-[10px] font-medium uppercase tracking-[0.22em] ${
                pkg.featured ? 'text-brand-bright' : 'text-zinc-400'
              }`}
            >
              {pkg.tier}
            </p>
            <div className="mt-5 flex items-start gap-4">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
                  pkg.featured
                    ? 'border-brand/30 bg-brand/15 text-brand-bright'
                    : 'border-brand/15 bg-brand-soft text-brand'
                }`}
              >
                <pkg.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-lg font-semibold tracking-[-0.02em] sm:text-xl ${
                    pkg.featured ? 'text-white' : 'text-zinc-950'
                  }`}
                >
                  {pkg.title}
                </h3>
              </div>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${pkg.featured ? 'text-zinc-400' : 'text-zinc-500'}`}>
              {pkg.summary}
            </p>
            <ul className={`mt-8 flex-1 space-y-2.5 border-t pt-8 ${pkg.featured ? 'border-brand/20' : 'border-zinc-200/80'}`}>
              {pkg.includes.map((item) => (
                <li
                  key={item}
                  className={`border-l-2 pl-3.5 text-sm leading-relaxed ${
                    pkg.featured ? 'border-brand/40 text-zinc-300' : 'border-brand/25 text-zinc-600'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <motion.p
        {...inViewProps(mounted, reduce, 12)}
        viewport={viewportOnce}
        transition={{ duration: motionDuration(mounted, reduce, 0.45) }}
        className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-zinc-500"
      >
        We build the systems behind local growth—websites, follow-up, reviews, and reporting—not a disconnected
        stack of marketing tasks.
      </motion.p>

      <motion.div
        {...inViewProps(mounted, reduce, 12)}
        viewport={viewportOnce}
        transition={{ duration: motionDuration(mounted, reduce, 0.5), delay: mounted && !reduce ? 0.05 : 0 }}
        className="mt-8 flex justify-center"
      >
        <Link
          href="/contact"
          className="btn-secondary-brand group h-11 gap-2 bg-white px-7 text-[13px] font-medium tracking-wide"
        >
          Book a Free Call
          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} aria-hidden />
        </Link>
      </motion.div>
    </Section>
  );
}
