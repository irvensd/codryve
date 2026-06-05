'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { BRAND } from '@/lib/brand';

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

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, closeMenu]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const onChange = () => {
      if (media.matches) closeMenu();
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [closeMenu]);

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-zinc-950/30 backdrop-blur-[1px] md:hidden"
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top)] transition-[border-color,background-color] duration-500 ${
          scrolled || isOpen
            ? 'border-zinc-200/70 bg-[#f5f5f3]/90 backdrop-blur-md backdrop-saturate-150'
            : 'border-transparent bg-[#f5f5f3]/50 backdrop-blur-sm'
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-[70rem] items-center justify-between gap-3 px-5 sm:h-[4.25rem] sm:px-8 lg:px-12"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 text-[15px] font-semibold tracking-[-0.02em] text-zinc-950 transition hover:text-brand sm:gap-3 sm:text-[16px] md:gap-3.5 md:text-[17px]"
            onClick={closeMenu}
          >
            <Image
              src={BRAND.logoSrc}
              alt=""
              aria-hidden
              width={BRAND.logoWidth}
              height={BRAND.logoHeight}
              className="h-8 w-auto shrink-0 object-contain sm:h-9 md:h-10"
              sizes="48px"
              priority
            />
            <span className="truncate">{BRAND.name}</span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="link-brand-hover text-[13px] font-medium text-zinc-500">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary-brand h-10 px-5 text-[13px] font-medium tracking-wide">
              Get in touch
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200/90 bg-white/80 text-zinc-800 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </nav>

        <div
          id="mobile-nav-menu"
          className={`border-t border-zinc-200/70 bg-[#f5f5f3]/95 backdrop-blur-md backdrop-saturate-150 md:hidden ${
            isOpen ? 'max-h-[min(70vh,24rem)] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
          } transition-all duration-500 ease-out`}
        >
          <div className="flex flex-col gap-0.5 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-[13px] font-medium text-zinc-800 transition hover:bg-brand-soft hover:text-brand"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary-brand mt-3 h-11 text-[13px] font-medium tracking-wide"
              onClick={closeMenu}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
