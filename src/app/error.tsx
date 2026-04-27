'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[calc(100vh-6rem)] bg-[#f5f5f3]">
      <section className="flex flex-col items-center justify-center px-5 py-20 text-center sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Something went wrong</p>
        <h1 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          We hit a snag
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
          This page couldn&apos;t load properly. You can try again, or go home and keep browsing.
        </p>
        {error.digest ? (
          <p className="mt-6 font-mono text-xs text-zinc-400">Reference: {error.digest}</p>
        ) : null}
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-zinc-800"
          >
            <RefreshCw className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            <Home className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
