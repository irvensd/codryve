'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/brand';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/70 bg-[#f0f0ee]">
      <div className="mx-auto max-w-[70rem] px-5 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[16px] font-semibold tracking-[-0.02em] text-zinc-950 transition hover:text-brand sm:text-[17px]"
            >
              <Image
                src={BRAND.logoSrc}
                alt=""
                aria-hidden
                width={BRAND.logoWidth}
                height={BRAND.logoHeight}
                className="h-9 w-auto shrink-0 object-contain sm:h-10"
                sizes="48px"
              />
              <span>{BRAND.name}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">{BRAND.positioning}</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-4 inline-block text-sm font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:text-brand hover:decoration-brand/50"
            >
              {BRAND.email}
            </a>
            <p className="mt-3 text-sm text-zinc-400">{BRAND.location}</p>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:max-w-xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Quick Links</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/#services" className="link-brand-hover text-zinc-700">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#local-growth" className="link-brand-hover text-zinc-700">
                    Systems
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="link-brand-hover text-zinc-700">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="/#solutions" className="link-brand-hover text-zinc-700">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/#why-workloom" className="link-brand-hover text-zinc-700">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="link-brand-hover text-zinc-700">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Services</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/#services" className="link-brand-hover text-zinc-700">
                    Custom Websites
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="link-brand-hover text-zinc-700">
                    Automation & CRM
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="link-brand-hover text-zinc-700">
                    Dashboards
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="link-brand-hover text-zinc-700">
                    Ongoing Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200/80 pt-8 text-sm text-zinc-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p suppressHydrationWarning>
            &copy; {year} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link
              href="/privacy"
              className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition hover:text-brand hover:decoration-brand/50"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition hover:text-brand hover:decoration-brand/50"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
