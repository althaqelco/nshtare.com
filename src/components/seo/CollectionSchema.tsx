import React from 'react';

/**
 * CollectionPage Schema (Plan 04 §Layer 4)
 * Tells Google this is a category listing page with an ItemList.
 */
export default function CollectionSchema({ 
  name, url, productUrls 
}: { 
  name: string; 
  url: string; 
  productUrls: string[] 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `https://nshtare.com${url}#collection`,
    "name": name,
    "url": `https://nshtare.com${url}`,
    "isPartOf": { "@id": "https://nshtare.com/#website" },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": productUrls.length,
      "itemListElement": productUrls.map((pUrl, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `https://nshtare.com${pUrl}`,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
