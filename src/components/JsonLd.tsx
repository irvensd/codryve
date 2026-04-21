export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Codryve',
    description:
      'Custom software and automation studio. CRMs, workflow automation, dashboards, and MVP platforms for law firms, therapy practices, churches, and service businesses.',
    url: 'https://codryve.com',
    logo: 'https://codryve.com/og',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    sameAs: ['https://twitter.com/codryve', 'https://linkedin.com/company/codryve'],
    areaServed: 'US',
    knowsAbout: [
      'Custom CRM development',
      'Workflow automation',
      'Business intelligence dashboards',
      'MVP software development',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
