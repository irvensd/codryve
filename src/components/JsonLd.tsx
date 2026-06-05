import { BRAND } from '@/lib/brand';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    description: BRAND.extendedPositioning,
    url: BRAND.siteUrl,
    logo: `${BRAND.siteUrl}/og`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    email: BRAND.email,
    areaServed: 'US',
    knowsAbout: [
      'Custom website development',
      'Workflow automation',
      'CRM implementation',
      'Business dashboards',
      'Local growth systems',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
