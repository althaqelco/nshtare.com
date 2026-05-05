import React from 'react';

/**
 * Article Schema (Plan 04 §Layer 7)
 * Structured data for blog articles with Speakable specification.
 */
export default function ArticleSchema({
  headline,
  datePublished,
  dateModified,
  image,
}: {
  headline: string;
  datePublished: string;
  dateModified?: string;
  image: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "author": { "@type": "Organization", "@id": "https://nshtare.com/#organization" },
    "publisher": { "@id": "https://nshtare.com/#organization" },
    "datePublished": `${datePublished}T00:00:00Z`,
    "dateModified": `${dateModified || datePublished}T00:00:00Z`,
    "image": `https://nshtare.com${image}`,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".direct-answer"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
