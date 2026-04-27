import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page not found — Codryve',
  description: 'That page does not exist or has moved.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-6rem)] bg-[#f5f5f3]">
      <section className="flex flex-col items-center justify-center px-5 py-20 text-center sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">404</p>
        <h1 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          This page isn&apos;t here
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
          The link may be broken or the page was removed. Head back home or reach out if you were expecting something specific.
        </p>
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-zinc-800"
          >
            <Home className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
