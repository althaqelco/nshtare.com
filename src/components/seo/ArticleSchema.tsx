import React from 'react';

/**
 * Article Schema
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
  // Spatial Image Anchor: ربط الصورة بالرياض (مقر الشركة) لتأكيد واقعية الـ UGC
  const imageObject = {
    "@type": "ImageObject",
    "url": `https://nshtare.com${image}`,
    "contentUrl": `https://nshtare.com${image}`,
    "author": {
      "@type": "Organization",
      "name": "نشتري - Nshtare"
    },
    "locationCreated": {
      "@type": "Place",
      "name": "الرياض، المملكة العربية السعودية",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.7136,
        "longitude": 46.6753
      }
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "image": imageObject,
    "author": { "@type": "Organization", "@id": "https://nshtare.com/#organization" },
    "publisher": { "@id": "https://nshtare.com/#organization" },
    "datePublished": `${datePublished}T00:00:00Z`,
    "dateModified": `${dateModified || datePublished}T00:00:00Z`,
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
