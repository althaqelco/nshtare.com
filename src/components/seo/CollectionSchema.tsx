import React from 'react';

/**
 * CollectionPage Schema
 * Tells Google this is a category listing page with an ItemList.
 */
export default function CollectionSchema({ 
  name, url, productUrls, image, description 
}: { 
  name: string; 
  url: string; 
  productUrls: string[];
  image?: string;
  description?: string;
}) {
  // Spatial Image Anchor
  const imageObject = image ? {
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
  } : undefined;

  const schemaData: Record<string, unknown> = {
    "@context": "https://schema.org/",
    "@type": "CollectionPage",
    "@id": `https://nshtare.com${url}#collection`,
    "name": name,
    "description": description,
    "url": `https://nshtare.com${url}`,
    "image": imageObject,
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
