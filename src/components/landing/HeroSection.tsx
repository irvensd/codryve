'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from './Section';
import { easeLux } from './motion';

export function HeroSection() {
  const reduce = useReducedMotion();

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
        <div className="absolute -left-40 top-[-10%] h-[min(520px,80vw)] w-[min(520px,80vw)] rounded-full bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.04),transparent_68%)] blur-2xl" />
        <div className="absolute bottom-0 left-1/2 h-px w-[min(100%,64rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-200/90 to-transparent" />
      </div>

      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
        <div className="max-w-xl lg:max-w-none">
          <motion.p
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: easeLux }}
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500"
          >
            Software studio · Custom systems
          </motion.p>

          <motion.h1
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.04, ease: easeLux }}
            className="mt-5 text-[2.375rem] font-semibold leading-[1.06] tracking-[-0.035em] text-zinc-950 sm:text-5xl sm:leading-[1.05] lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            We Replace Chaos With Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.1, ease: easeLux }}
            className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.55] text-zinc-500 sm:text-lg sm:leading-relaxed"
          >
            Custom websites, CRMs, dashboards, and automations for businesses that need fewer manual steps,
            cleaner operations, and better follow-up.
          </motion.p>

          <motion.div
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.16, ease: easeLux }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 text-[13px] font-medium tracking-wide text-white shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_12px_40px_-12px_rgba(0,0,0,0.35)] ring-1 ring-zinc-950/5 transition duration-300 hover:bg-zinc-800"
            >
              Book a strategy call
              <ArrowRight
                className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>
            <Link
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300/90 bg-white/60 px-8 text-[13px] font-medium tracking-wide text-zinc-800 backdrop-blur-sm transition duration-300 hover:border-zinc-400/90 hover:bg-white"
            >
              What We Build
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.22, ease: easeLux }}
            className="mt-12 text-sm leading-relaxed text-zinc-400"
          >
            Fewer tools. Clearer operations. Work that stays on the rails.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.75, delay: reduce ? 0 : 0.12, ease: easeLux }}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-zinc-200/40 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white p-[1px] shadow-[0_32px_64px_-20px_rgba(15,23,42,0.14),0_0_0_1px_rgba(0,0,0,0.02)_inset]">
            <div className="rounded-[1.7rem] bg-zinc-50/90 p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3 border-b border-zinc-200/70 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-zinc-300" />
                  <span className="h-2 w-2 rounded-full bg-zinc-200" />
                  <span className="h-2 w-2 rounded-full bg-zinc-200" />
                </div>
                <span className="flex-1 truncate text-center font-mono text-[10px] font-medium tracking-wide text-zinc-400 sm:text-[11px]">
                  app.codryve.io
                </span>
              </div>
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                <div className="col-span-4 space-y-1.5 rounded-xl border border-zinc-200/60 bg-white p-3 shadow-sm">
                  {['Pipeline', 'Clients', 'Reports'].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-lg px-2.5 py-2 text-[10px] font-medium sm:text-[11px] ${
                        i === 0 ? 'bg-zinc-900 text-white' : 'text-zinc-500'
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
                        className="rounded-xl border border-zinc-200/60 bg-white p-2.5 shadow-sm sm:p-3"
                      >
                        <p className="text-[9px] font-medium uppercase tracking-wider text-zinc-400 sm:text-[10px]">
                          {k.label}
                        </p>
                        <p className="mt-1 text-lg font-semibold tabular-nums tracking-tight text-zinc-900 sm:text-xl">
                          {k.v}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-zinc-200/60 bg-white p-3.5 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Throughput</span>
                      <span className="text-[10px] font-medium tabular-nums text-zinc-600">+18%</span>
                    </div>
                    <div className="flex h-[4.25rem] items-end gap-1">
                      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-[2px] bg-zinc-900/85"
                          style={{ height: `${h}%`, opacity: 0.35 + (h / 100) * 0.65 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {!reduce && (
            <>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-4 hidden w-44 rounded-2xl border border-zinc-200/80 bg-white/90 p-3.5 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.12)] backdrop-blur-md sm:block"
              >
                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Automation</p>
                <p className="mt-1 text-xs font-semibold text-zinc-900">12 flows · 0 missed steps</p>
                <div className="mt-2.5 h-0.5 overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-[82%] rounded-full bg-zinc-900" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-3 top-10 hidden w-40 rounded-2xl border border-zinc-200/80 bg-white/90 p-3.5 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.12)] backdrop-blur-md sm:block"
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
