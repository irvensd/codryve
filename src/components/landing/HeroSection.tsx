'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { easeLux, entranceProps, motionDuration } from './motion';
import { useMotionHydration } from './motion-hooks';

const heroTags = ['Custom Websites', 'Automation & CRM', 'Dashboards', 'Ongoing Support'];

export function HeroSection() {
  const { mounted, reduce } = useMotionHydration();

  return (
    <Section className="overflow-hidden pt-[5.5rem] pb-24 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 0%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 0%, black 20%, transparent 70%)',
          }}
        />
        <div className="absolute -left-40 top-[-10%] h-[min(520px,80vw)] w-[min(520px,80vw)] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_68%)] blur-2xl" />
        <div className="absolute bottom-0 left-1/2 h-px w-[min(100%,64rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200/90 to-transparent" />
      </div>

      <div className="grid min-w-0 items-center gap-12 sm:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
        <div className="min-w-0 max-w-xl lg:max-w-none">
          <motion.p
            {...entranceProps(mounted, reduce, 12)}
            transition={{ duration: motionDuration(mounted, reduce, 0.5), ease: easeLux }}
            className="text-eyebrow inline-flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(37,99,235,0.5)]" aria-hidden />
            Systems that drive growth
          </motion.p>

          <motion.h1
            {...entranceProps(mounted, reduce, 20)}
            transition={{ duration: motionDuration(mounted, reduce, 0.6), delay: mounted && !reduce ? 0.04 : 0, ease: easeLux }}
            className="mt-5 text-[2.375rem] font-semibold leading-[1.06] tracking-[-0.035em] text-zinc-950 sm:text-5xl sm:leading-[1.05] lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            We Turn Scattered Work Into Clean Systems.
          </motion.h1>

          <motion.p
            {...entranceProps(mounted, reduce, 16)}
            transition={{ duration: motionDuration(mounted, reduce, 0.55), delay: mounted && !reduce ? 0.1 : 0, ease: easeLux }}
            className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.55] text-zinc-500 sm:text-lg sm:leading-relaxed"
          >
            Websites, automation, and systems for businesses that want clearer operations, more leads, and fewer
            things slipping through the cracks.
          </motion.p>

          <motion.div
            {...entranceProps(mounted, reduce, 16)}
            transition={{ duration: motionDuration(mounted, reduce, 0.55), delay: mounted && !reduce ? 0.16 : 0, ease: easeLux }}
            className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link href="/contact" className="btn-primary-brand group h-12 w-full gap-2 px-8 text-[13px] font-medium tracking-wide sm:w-auto">
              Get in touch
              <ArrowRight
                className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
            <Link href="#services" className="btn-secondary-brand h-12 w-full px-8 text-[13px] font-medium tracking-wide sm:w-auto">
              View services
            </Link>
          </motion.div>

          <motion.ul
            {...entranceProps(mounted, reduce, 12)}
            transition={{ duration: motionDuration(mounted, reduce, 0.55), delay: mounted && !reduce ? 0.2 : 0, ease: easeLux }}
            className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-medium text-zinc-600"
          >
            {heroTags.map((tag) => (
              <li key={tag} className="rounded-full border border-zinc-200/80 bg-white/70 px-3.5 py-1.5">
                {tag}
              </li>
            ))}
          </motion.ul>

          <motion.p
            {...entranceProps(mounted, reduce, 0)}
            transition={{ duration: motionDuration(mounted, reduce, 0.6), delay: mounted && !reduce ? 0.22 : 0, ease: easeLux }}
            className="mt-8 text-sm leading-relaxed text-zinc-400"
          >
            Systems behind the growth, not just another pretty website.
          </motion.p>
        </div>

        <motion.div
          {...entranceProps(mounted, reduce, 24)}
          transition={{ duration: motionDuration(mounted, reduce, 0.75), delay: mounted && !reduce ? 0.12 : 0, ease: easeLux }}
          className="relative mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(37,99,235,0.12),transparent_70%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white p-[1px] shadow-[0_32px_64px_-20px_rgba(37,99,235,0.12),0_0_0_1px_rgba(0,0,0,0.02)_inset] ring-1 ring-brand/5">
            <div className="rounded-[1.7rem] bg-zinc-50/90 p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3 border-b border-zinc-200/70 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-zinc-300" />
                  <span className="h-2 w-2 rounded-full bg-zinc-200" />
                  <span className="h-2 w-2 rounded-full bg-zinc-200" />
                </div>
                <span className="flex-1 truncate text-center font-mono text-[10px] font-medium tracking-wide text-zinc-400 sm:text-[11px]">
                  app.workloom.studio
                </span>
              </div>
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                <div className="col-span-4 space-y-1.5 rounded-xl border border-zinc-200/60 bg-white p-3 shadow-sm">
                  {['Pipeline', 'Clients', 'Reports'].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-lg px-2.5 py-2 text-[10px] font-medium sm:text-[11px] ${
                        i === 0 ? 'bg-brand text-white' : 'text-zinc-500'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="col-span-8 space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Inquiry', v: '128' },
                      { label: 'Active', v: '42' },
                      { label: 'Due', v: '19' },
                    ].map((k) => (
                      <div
                        key={k.label}
                        className={`rounded-xl border bg-white p-2.5 shadow-sm sm:p-3 ${
                          k.label === 'Active'
                            ? 'border-brand/25 ring-1 ring-brand/10'
                            : 'border-zinc-200/60'
                        }`}
                      >
                        <p
                          className={`text-[9px] font-medium uppercase tracking-wider sm:text-[10px] ${
                            k.label === 'Active' ? 'text-brand' : 'text-zinc-400'
                          }`}
                        >
                          {k.label}
                        </p>
                        <p
                          className={`mt-1 text-lg font-semibold tabular-nums tracking-tight sm:text-xl ${
                            k.label === 'Active' ? 'text-brand' : 'text-zinc-900'
                          }`}
                        >
                          {k.v}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-zinc-200/60 bg-white p-3.5 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Throughput</span>
                      <span className="text-[10px] font-medium tabular-nums text-brand-success">+18%</span>
                    </div>
                    <div className="flex h-[4.25rem] items-end gap-1">
                      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-[2px] ${i === 7 || i === 5 ? 'bg-brand' : 'bg-brand/35'}`}
                          style={{ height: `${h}%`, opacity: i === 7 || i === 5 ? 1 : 0.45 + (h / 100) * 0.4 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {mounted && !reduce && (
            <>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-4 hidden w-44 rounded-2xl border border-brand/15 bg-white/95 p-3.5 shadow-[0_20px_40px_-16px_rgba(37,99,235,0.15)] backdrop-blur-md sm:block"
              >
                <p className="text-[10px] font-medium uppercase tracking-wider text-brand">Automation</p>
                <p className="mt-1 text-xs font-semibold text-zinc-900">12 flows · 0 missed steps</p>
                <div className="mt-2.5 h-0.5 overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-[82%] rounded-full bg-brand-success" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-3 top-10 hidden w-40 rounded-2xl border border-zinc-200/80 bg-white/95 p-3.5 shadow-[0_20px_40px_-16px_rgba(37,99,235,0.1)] backdrop-blur-md sm:block"
              >
                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Intake</p>
                <p className="mt-1 text-xs font-semibold text-zinc-900">3 new · routed</p>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
