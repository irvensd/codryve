import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Workloom Studio',
  description:
    'How Workloom Studio collects, uses, and protects information when you use workloomstudio.com and our contact forms.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy — Workloom Studio',
    description:
      'How we handle information on workloomstudio.com, contact forms, cookies, and third parties.',
    url: '/privacy',
  },
  twitter: {
    title: 'Privacy Policy — Workloom Studio',
    description: 'Workloom Studio privacy practices for the website and inquiry forms.',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      <article className="mx-auto max-w-3xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">Privacy policy</h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: April 26, 2026</p>

        <div className="prose prose-zinc mt-10 max-w-none space-y-8 text-sm leading-relaxed text-zinc-700 sm:text-[15px]">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Who we are</h2>
            <p>
              Workloom Studio (“we,” “us”) operates this website at{' '}
              <Link href="/" className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500">
                workloomstudio.com
              </Link>
              . This policy describes how we handle information when you visit the site or submit a form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Information we collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-medium text-zinc-800">Contact and project inquiries.</strong> If you use our forms, we collect
                whatever you choose to provide (for example, name, email address, company, and details about your project).
              </li>
              <li>
                <strong className="font-medium text-zinc-800">Technical data.</strong> Like many sites, our hosting and infrastructure may
                log standard data such as IP address, browser type, and approximate region—typically to operate and secure the service.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">How we use information</h2>
            <p>We use submitted information to respond to you, evaluate fit for services, and follow up about your inquiry. We do not sell your personal information.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Retention</h2>
            <p>We keep inquiry records only as long as needed for business and legal purposes, then delete or anonymize them where appropriate.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Cookies and similar technologies</h2>
            <p>
              We may use cookies or similar tools required for the site to function, or added later for analytics. If we add non-essential
              cookies, we will update this policy and, where required, your choices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Third parties</h2>
            <p>
              Email delivery and hosting providers may process data on our behalf under their own terms. We choose vendors with reasonable
              security practices, but we do not control their infrastructure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Your choices</h2>
            <p>
              You may contact us to access, correct, or delete personal information we hold about you, subject to applicable law. We will
              respond within a reasonable time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Children</h2>
            <p>This site is not directed at children under 13, and we do not knowingly collect their personal information.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Changes</h2>
            <p>We may update this policy from time to time. The “Last updated” date at the top will change when we do.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Contact</h2>
            <p>
              Questions about this policy:{' '}
              <a
                href="mailto:hello@workloomstudio.com"
                className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500"
              >
                hello@workloomstudio.com
              </a>
              . We currently respond by email only.
            </p>
          </section>
        </div>

        <p className="mt-12 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-500">
          <Link href="/terms" className="font-medium text-zinc-700 hover:text-zinc-950">
            Terms of use
          </Link>
          <span className="text-zinc-300">·</span>
          <Link href="/" className="font-medium text-zinc-700 hover:text-zinc-950">
            ← Home
          </Link>
        </p>
      </article>
    </main>
  );
}
