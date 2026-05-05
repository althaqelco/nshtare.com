import React from 'react';

/**
 * WebSite Schema (Plan 04 §Layer 2)
 * Enables Google Sitelinks Search Box and establishes the website entity.
 */
export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nshtare.com/#website",
    "name": "نشتري | Nshtare",
    "url": "https://nshtare.com",
    "publisher": { "@id": "https://nshtare.com/#organization" },
    "inLanguage": ["ar-SA", "en"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nshtare.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
