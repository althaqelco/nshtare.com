import React from 'react';

interface ProductSchemaProps {
  name: string;
  nameEn?: string;
  image: string;
  gallery?: string[];
  description: string;
  sku: string;
  url: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  currency?: string;
  inStock?: boolean;
}

/**
 * Product Schema (E-E-A-T Layer 3)
 * 
 * Full Google Merchant Center compliant schema including:
 * - Multi-image gallery support (Google Images SEO)
 * - WarrantyPromise (1 year)
 * - MerchantReturnPolicy (linked to org-level @id)
 * - ShippingDetails for KSA with realistic delivery windows
 * - AggregateRating with proper bestRating/worstRating
 * - Static priceValidUntil date (no crawl instability)
 */
export default function ProductSchema({
  name,
  nameEn,
  image,
  gallery,
  description,
  sku,
  url,
  price,
  originalPrice,
  rating,
  reviewsCount,
  currency = 'SAR',
  inStock = true,
}: ProductSchemaProps) {
  // Build image array from gallery or fallback to single image
  const imageUrls = gallery && gallery.length > 0
    ? gallery.map(img => `https://nshtare.com${img}`)
    : [`https://nshtare.com${image}`];

  const schemaData: Record<string, unknown> = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "alternateName": nameEn,
    "image": imageUrls,
    "description": description,
    "sku": sku,
    "mpn": sku,
    "gtin13": undefined, // Add real GTIN when available
    "brand": {
      "@type": "Brand",
      "name": "نشتري - Nshtare"
    },
    "manufacturer": {
      "@type": "Organization",
      "@id": "https://nshtare.com/#organization"
    },
    "category": "Electric Scooters",
    "offers": {
      "@type": "Offer",
      "url": `https://nshtare.com${url}`,
      "priceCurrency": currency,
      "price": price,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "@id": "https://nshtare.com/#organization"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "SAR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "SA"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "d"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 4,
            "unitCode": "d"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@id": "https://nshtare.com/#returnpolicy"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewsCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Warranty",
        "value": "1 Year Official Warranty"
      },
      {
        "@type": "PropertyValue",
        "name": "Payment Method",
        "value": "Cash on Delivery"
      }
    ]
  };

  // Remove undefined fields
  if (!schemaData.gtin13) delete schemaData.gtin13;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
