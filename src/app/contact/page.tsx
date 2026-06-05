'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Book a Free Call</h1>
            <p className="mt-4 text-zinc-600">
              Share where things break today. We&apos;ll help you think in systems—whether we build together or not.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-sm">
                <h2 className="text-lg font-semibold text-zinc-950">Direct</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-blue-600">
                      <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">Email</p>
                      <a href="mailto:hello@workloomstudio.com" className="mt-0.5 block text-zinc-600 hover:text-brand">
                        hello@workloomstudio.com
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-blue-600">
                      <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">Location</p>
                      <p className="mt-0.5 text-zinc-600">Based in Florida. Serving local businesses everywhere.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
