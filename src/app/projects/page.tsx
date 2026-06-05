'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, UtensilsCrossed, HeartPulse, Church, Database, BookOpen, Check } from 'lucide-react';
import { easeLux, entranceProps, inViewProps, motionDuration, viewportOnce } from '../../components/landing/motion';
import { useMotionHydration } from '../../components/landing/motion-hooks';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'Law firm intake & pipeline',
    industry: 'Legal operations',
    disclosure: 'Representative scenario',
    framing:
      'A composite of how we approach intake: closing the gap between first inquiry and signed engagement—with compliance, conflicts, and partner visibility handled deliberately.',
    outcomes: ['Conflict-aware intake stages', 'Matter-ready follow-up automation', 'Clear ownership across staff and attorneys'],
    icon: Scale,
  },
  {
    title: 'Restaurant growth & retention',
    industry: 'Hospitality',
    disclosure: 'Representative scenario',
    framing:
      'Illustrative of hospitality work: local discovery, reservations, and campaigns tied together so repeat visits are measurable—not guessed.',
    outcomes: ['Fast, mobile-first conversion pages', 'Reservation and campaign workflows in one loop', 'Loyalty and repeat-customer automation'],
    icon: UtensilsCrossed,
  },
];

const supportingSystems = [
  {
    title: 'Therapist practice dashboard',
    industry: 'Mental health',
    disclosure: 'Representative pattern',
    summary: 'Session visibility, reminders, and day-to-day operations in one calm dashboard—typical of clinic-facing builds.',
    icon: HeartPulse,
  },
  {
    title: 'Church engagement & volunteers',
    industry: 'Ministry',
    disclosure: 'Representative pattern',
    summary: 'Member engagement, volunteer routing, and follow-up workflows coordinated in one place.',
    icon: Church,
  },
  {
    title: 'Credexis CRM',
    industry: 'Product',
    disclosure: 'Named build',
    summary: 'Custom CRM for lifecycle management, sales accountability, and cleaner team execution.',
    icon: Database,
  },
  {
    title: 'BibleStem platform',
    industry: 'Platform',
    disclosure: 'Named build',
    summary: 'Structured content and user journeys built for long-term product scale.',
    icon: BookOpen,
  },
];

const buildDifferently = [
  'Designed around real workflows',
  'Clean UX teams actually adopt',
  'Automation without operational confusion',
  'Built to scale without unnecessary complexity',
];

function LawMockup() {
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-zinc-200/80 bg-gradient-to-br from-zinc-100 to-white p-4 shadow-sm transition duration-500 group-hover:-translate-y-0.5 group-hover:shadow-[0_30px_50px_-28px_rgba(0,0,0,0.25)] sm:p-6">
      <div className="rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.22)] sm:p-5">
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-2">
            <p className="text-[10px] uppercase tracking-wide text-zinc-400">Inquiries</p>
            <p className="text-lg font-semibold text-zinc-900">128</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-2">
            <p className="text-[10px] uppercase tracking-wide text-zinc-400">Qualified</p>
            <p className="text-lg font-semibold text-zinc-900">54</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-2">
            <p className="text-[10px] uppercase tracking-wide text-zinc-400">Signed</p>
            <p className="text-lg font-semibold text-zinc-900">21</p>
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
          <div className="mb-2 h-2 w-24 rounded-full bg-zinc-200" />
          <div className="space-y-2">
            <div className="h-6 rounded-md bg-white" />
            <div className="h-6 rounded-md bg-white" />
            <div className="h-6 rounded-md bg-white" />
          </div>
        </div>
      </div>
      <div className="absolute -right-1 top-7 rounded-xl border border-zinc-200/80 bg-white/95 px-3 py-2 text-xs font-medium text-zinc-700 shadow-lg transition duration-500 group-hover:-translate-y-0.5">
        Follow-up sent
      </div>
    </div>
  );
}

function RestaurantMockup() {
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-zinc-200/80 bg-gradient-to-br from-zinc-100 to-white p-4 shadow-sm transition duration-500 group-hover:-translate-y-0.5 group-hover:shadow-[0_30px_50px_-28px_rgba(0,0,0,0.25)] sm:p-6">
      <div className="rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.22)] sm:p-5">
        <div className="mb-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
          <div className="h-20 rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-700" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-2">
            <p className="text-[10px] uppercase tracking-wide text-zinc-400">Reservations</p>
            <p className="text-lg font-semibold text-zinc-900">+34%</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-2">
            <p className="text-[10px] uppercase tracking-wide text-zinc-400">Repeat Guests</p>
            <p className="text-lg font-semibold text-zinc-900">+22%</p>
          </div>
        </div>
      </div>
      <div className="absolute -left-1 bottom-7 rounded-xl border border-zinc-200/80 bg-white/95 px-3 py-2 text-xs font-medium text-zinc-700 shadow-lg transition duration-500 group-hover:translate-y-0.5">
        Loyalty flow live
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      <section className="border-b border-zinc-200/60 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[70rem] px-5 sm:px-8 lg:px-12">
          <motion.div
            {...entranceProps(mounted, reduce, 16)}
            transition={{ duration: motionDuration(mounted, reduce, 0.55), ease: easeLux }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">Work & scenarios</p>
            <h1 className="mt-4 text-[2.45rem] font-semibold tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[3.25rem]">
              Systems built for real operations
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-zinc-500 sm:text-[1.075rem]">
              The deep dives below are <span className="font-medium text-zinc-700">representative scenarios</span>—they show how we
              think about workflows and outcomes, not a public case study for a single named client. Many engagements stay under NDA; we
              share <span className="font-medium text-zinc-700">appropriate references</span> when you&apos;re evaluating a fit. Named
              product work appears in the grid further down.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[70rem] px-5 sm:px-8 lg:px-12">
          <div className="space-y-10 lg:space-y-14">
            {featuredProjects.map((project, i) => (
              <motion.article
                key={project.title}
                {...inViewProps(mounted, reduce, 20)}
                viewport={viewportOnce}
                transition={{ duration: motionDuration(mounted, reduce, 0.55), delay: mounted && !reduce ? i * 0.05 : 0, ease: easeLux }}
                className={`group grid gap-8 rounded-[2rem] border border-zinc-200/75 bg-white p-7 shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset] transition duration-500 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-[0_30px_60px_-28px_rgba(0,0,0,0.15)] sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10 ${
                  i % 2 === 1 ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''
                }`}
              >
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-700/90">{project.disclosure}</p>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">{project.industry}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-[2rem]">{project.title}</h2>
                  <p className="mt-4 text-[0.97rem] leading-relaxed text-zinc-500">{project.framing}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-zinc-100 pt-6">
                    {project.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="relative transition duration-500 group-hover:translate-x-0.5">
                  <div>
                    {i === 0 ? <LawMockup /> : <RestaurantMockup />}
                  </div>
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/90 text-zinc-800 shadow-sm transition duration-500 group-hover:scale-105">
                    <project.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div className="absolute right-4 top-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4 text-zinc-500" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200/60 py-14 sm:py-16">
        <div className="mx-auto max-w-[70rem] px-5 sm:px-8 lg:px-12">
          <div className="rounded-[1.8rem] border border-zinc-200/80 bg-zinc-950 px-8 py-12 text-center shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)] sm:px-10 sm:py-14">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
              Need a system like this?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              We build custom websites, CRMs, dashboards, and automation systems tailored to real workflows.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200/60 bg-[#f1f1ef] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[70rem] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">More work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-zinc-950 sm:text-4xl">Patterns and named builds</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
              <span className="font-medium text-zinc-700">Representative patterns</span> mirror industries we serve;{' '}
              <span className="font-medium text-zinc-700">named builds</span> are products we can point to by name. Adjust labels anytime
              your public portfolio grows.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {supportingSystems.map((system, i) => (
              <motion.article
                key={system.title}
                {...inViewProps(mounted, reduce, 16)}
                viewport={viewportOnce}
                transition={{ duration: motionDuration(mounted, reduce, 0.45), delay: mounted && !reduce ? i * 0.06 : 0, ease: easeLux }}
                className="rounded-2xl border border-zinc-200/80 bg-white p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-blue-700/90">{system.disclosure}</p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">{system.industry}</p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800">
                    <system.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-zinc-950">{system.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{system.summary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[70rem] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">How Workloom Studio builds differently</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-zinc-950 sm:text-4xl">
              Why these systems work
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {buildDifferently.map((item, i) => (
              <motion.div
                key={item}
                {...inViewProps(mounted, reduce, 16)}
                viewport={viewportOnce}
                transition={{ duration: motionDuration(mounted, reduce, 0.45), delay: mounted && !reduce ? i * 0.06 : 0, ease: easeLux }}
                className="rounded-2xl border border-zinc-200/80 bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-zinc-800">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </div>
                  <p className="text-[0.97rem] font-medium leading-relaxed text-zinc-800">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
