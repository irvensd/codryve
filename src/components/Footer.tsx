'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/70 bg-[#f0f0ee]">
      <div className="mx-auto max-w-[70rem] px-5 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[16px] font-semibold tracking-[-0.02em] text-zinc-950 transition hover:text-zinc-600 sm:text-[17px]"
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={112}
                height={112}
                className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
              />
              <span>Codryve</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Custom systems and automation for teams that value clarity over noise.
            </p>
            <a
              href="mailto:hello@codryve.com"
              className="mt-4 inline-block text-sm font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-500"
            >
              hello@codryve.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Navigate</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="text-zinc-700 hover:text-zinc-950">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-zinc-700 hover:text-zinc-950">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="text-zinc-700 hover:text-zinc-950">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-700 hover:text-zinc-950">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">More</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/projects" className="text-zinc-700 hover:text-zinc-950">
                    Work
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Social</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/codryve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-950"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/company/codryve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-300 hover:text-zinc-950"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200/80 pt-8 text-sm text-zinc-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>&copy; {year} Codryve. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/privacy" className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 hover:decoration-zinc-500">
                Privacy
              </Link>
              <Link href="/terms" className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 hover:decoration-zinc-500">
                Terms
              </Link>
            </div>
            <p className="text-zinc-400">Houston, TX · Remote-first</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
