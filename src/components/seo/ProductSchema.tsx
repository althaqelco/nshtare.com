import React from 'react';

interface ProductSchemaProps {
  name: string;
  nameEn?: string;
  image: string;
  description: string;
  sku: string;
  url: string;
  price: number;
  rating: number;
  reviewsCount: number;
  currency?: string;
  inStock?: boolean;
}

export default function ProductSchema({
  name,
  nameEn,
  image,
  description,
  sku,
  url,
  price,
  rating,
  reviewsCount,
  currency = 'SAR',
  inStock = true,
}: ProductSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "alternateName": nameEn,
    "image": [
      `https://nshtare.com${image}`
    ],
    "description": description,
    "sku": sku,
    "brand": {
      "@type": "Brand",
      "name": "نشتري - Nshtare"
    },
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
        "name": "Nshtare"
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
            "maxValue": 3,
            "unitCode": "d"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "SA",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewsCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
