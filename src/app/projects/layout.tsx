import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work — Systems & representative scenarios',
  description:
    'Representative scenarios and named builds: how Codryve designs intake, operations, growth sites, and internal products for real teams.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Work — Systems built for real operations',
    description:
      'See how we approach legal intake, hospitality growth, practice dashboards, and product platforms—plus patterns from industries we serve.',
    url: '/projects',
  },
  twitter: {
    title: 'Work — Systems built for real operations',
    description:
      'Representative scenarios and named product work from the Codryve studio.',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
