'use client';

import React from 'react';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

/** ~70rem content width — editorial rhythm, not full-bleed SaaS */
export function Section({ id, children, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div
        className={`mx-auto w-full max-w-[70rem] px-5 sm:px-8 lg:px-12 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
