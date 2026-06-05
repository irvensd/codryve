import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Get in touch',
  description:
    "Tell us what you're trying to fix. Reach Workloom Studio by email or the contact form—we'll reply within one business day.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Workloom Studio — Get in touch',
    description:
      "Send a message or email us directly. We'll reply within one business day with next steps.",
    url: '/contact',
  },
  twitter: {
    title: 'Contact Workloom Studio — Get in touch',
    description:
      'Reach out about custom CRMs, automation, dashboards, and software for your team.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
