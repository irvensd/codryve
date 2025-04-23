export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Codryve',
    description: 'Professional web development, SaaS solutions, and mobile applications tailored to your business needs.',
    url: 'https://codryve.com',
    logo: 'https://codryve.com/og',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US'
    },
    sameAs: [
      'https://twitter.com/codryve',
      'https://linkedin.com/company/codryve'
    ],
    offers: {
      '@type': 'AggregateOffer',
      offers: [
        {
          '@type': 'Offer',
          name: 'Web Development Services',
          description: 'Custom web development solutions for businesses'
        },
        {
          '@type': 'Offer',
          name: 'SaaS Development',
          description: 'Custom SaaS application development'
        },
        {
          '@type': 'Offer',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile application development'
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 