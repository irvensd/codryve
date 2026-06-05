import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use — Workloom Studio',
  description: 'Terms governing use of the Workloom Studio website and inquiry forms.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Use — Workloom Studio',
    description: 'Terms for using workloomstudio.com, content, liability, and Texas governing law.',
    url: '/terms',
  },
  twitter: {
    title: 'Terms of Use — Workloom Studio',
    description: 'Terms for using the Workloom Studio website and forms.',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      <article className="mx-auto max-w-3xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">Terms of use</h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: April 26, 2026</p>

        <div className="prose prose-zinc mt-10 max-w-none space-y-8 text-sm leading-relaxed text-zinc-700 sm:text-[15px]">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Agreement</h2>
            <p>
              By using workloomstudio.com (the “Site”), you agree to these terms. If you do not agree, please do not use the Site. Workloom Studio may update
              these terms; continued use after changes means you accept the updated terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">The Site</h2>
            <p>
              The Site describes Workloom Studio’s services and lets you send inquiries. Content is for general information only. It is not legal,
              financial, or professional advice for your specific situation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">No client relationship from browsing</h2>
            <p>
              Visiting the Site or sending a message does not create a client, contractor, or partnership relationship unless we both sign a
              separate written agreement that says so.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Your conduct</h2>
            <p>You agree not to misuse the Site—for example, by attempting unauthorized access, scraping in a way that harms the service, or submitting unlawful or harmful content.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Intellectual property</h2>
            <p>
              The Site’s design, text, graphics, and branding belong to Workloom Studio or its licensors. You may not copy or reuse them without
              permission, except as allowed by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Disclaimer of warranties</h2>
            <p>
              The Site is provided “as is.” To the fullest extent permitted by law, Workloom Studio disclaims warranties of merchantability, fitness
              for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Workloom Studio is not liable for indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or data, arising from your use of the Site. Our total liability for any claim relating to the
              Site is limited to the greater of one hundred U.S. dollars or the amount you paid us for the specific service giving rise to the
              claim in the twelve months before the claim (if any).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Governing law</h2>
            <p>
              These terms are governed by the laws of the State of Texas, without regard to conflict-of-law rules. Courts in Harris County,
              Texas have exclusive jurisdiction for disputes, unless applicable law requires otherwise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-zinc-950">Contact</h2>
            <p>
              Questions about these terms:{' '}
              <a
                href="mailto:hello@workloomstudio.com"
                className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500"
              >
                hello@workloomstudio.com
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          <Link href="/privacy" className="font-medium text-zinc-700 hover:text-zinc-950">
            Privacy policy
          </Link>
          <span className="mx-2 text-zinc-300">·</span>
          <Link href="/" className="font-medium text-zinc-700 hover:text-zinc-950">
            Home
          </Link>
        </p>
      </article>
    </main>
  );
}
