'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#who-we-help', label: 'Industries' },
  { href: '/#services', label: 'Services' },
  { href: '/#solutions', label: 'Work' },
  { href: '/#process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background-color] duration-500 ${
        scrolled || isOpen
          ? 'border-zinc-200/70 bg-[#f5f5f3]/90 backdrop-blur-md backdrop-saturate-150'
          : 'border-transparent bg-[#f5f5f3]/50 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-[70rem] items-center justify-between px-5 sm:h-[4.25rem] sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-[16px] font-semibold tracking-[-0.02em] text-zinc-950 transition hover:text-brand sm:gap-3.5 sm:text-[17px]"
        >
          <Image
            src="/images/logo.png"
            alt="Codryve"
            width={112}
            height={112}
            className="h-11 w-11 shrink-0 object-contain sm:h-[3.25rem] sm:w-[3.25rem] lg:h-14 lg:w-14"
            priority
          />
          <span aria-hidden="true">Codryve</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-brand-hover text-[13px] font-medium text-zinc-500"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary-brand h-10 px-5 text-[13px] font-medium tracking-wide"
          >
            Book a call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/80 text-zinc-800 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
      </nav>

      <div
        className={`border-t border-zinc-200/70 bg-[#f5f5f3]/95 backdrop-blur-md backdrop-saturate-150 md:hidden ${
          isOpen ? 'max-h-[min(70vh,24rem)] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        } transition-all duration-500 ease-out`}
      >
        <div className="flex flex-col gap-0.5 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-[13px] font-medium text-zinc-800 transition hover:bg-brand-soft hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary-brand mt-3 h-11 text-[13px] font-medium tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            Book a strategy call
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
