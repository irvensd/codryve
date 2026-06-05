import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Book a free call',
  description:
    "Tell us what you're trying to fix. Reach Workloom Studio by email or the contact form—we help you think in systems, whether we build together or not.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Workloom Studio — Book a free call',
    description:
      "Share where things break today. We'll reply with next steps and help you think in systems—whether we build together or not.",
    url: '/contact',
  },
  twitter: {
    title: 'Contact Workloom Studio — Book a free call',
    description:
      'Reach out about custom CRMs, automation, dashboards, and software for your team.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
