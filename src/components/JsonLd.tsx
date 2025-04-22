export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Codryve",
    "url": "https://codryve.com",
    "logo": "https://codryve.com/logo.png",
    "description": "Professional web development, SaaS solutions, and mobile applications tailored to your business needs. Expert team delivering innovative digital solutions in Houston, TX.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(203) 807-0250",
      "contactType": "customer service",
      "email": "support@codryve.com"
    },
    "sameAs": [
      "https://linkedin.com/company/codryve",
      "https://github.com/codryve"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "description": "Web Development, SaaS Development, Mobile App Development, and Digital Marketing services",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 