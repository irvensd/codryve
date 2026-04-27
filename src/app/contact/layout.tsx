import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Book a strategy call',
  description:
    "Tell us what you're trying to fix. Reach Codryve by email or the contact form—we help you think in systems, whether we build together or not.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Codryve — Book a strategy call',
    description:
      "Share where things break today. We'll reply with next steps and help you think in systems—whether we build together or not.",
    url: '/contact',
  },
  twitter: {
    title: 'Contact Codryve — Book a strategy call',
    description:
      'Reach out about custom CRMs, automation, dashboards, and software for your team.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
