import React from 'react';

/**
 * Organization + LocalBusiness Schema (E-E-A-T Layer 1)
 * 
 * Establishes the sovereign entity node in Google's Knowledge Graph.
 * Includes: taxID, vatID, returnPolicy, warranty, and areaServed for KSA.
 * Static dates — no dynamic generation that causes crawl instability.
 */
export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "Store"],
    "@id": "https://nshtare.com/#organization",
    "name": "نشتري - Nshtare",
    "legalName": "Nshtare E-Commerce",
    "url": "https://nshtare.com",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://nshtare.com/#logo",
      "url": "https://nshtare.com/images/brand/nshtare_logo_1777997576506.png",
      "width": "512",
      "height": "512",
      "caption": "نشتري - المتجر الأول للسكوترات الكهربائية في السعودية"
    },
    "image": "https://nshtare.com/images/brand/nshtare_logo_1777997576506.png",
    "description": "المتجر الأول المتخصص في بيع السكوترات الكهربائية للكبار والأطفال في المملكة العربية السعودية. ضمان وكيل، شحن سريع، ودفع عند الاستلام.",
    "telephone": "+966500000000",
    "email": "support@nshtare.com",
    "priceRange": "$$",
    "currenciesAccepted": "SAR",
    "foundingDate": "2024-01-01",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 5,
      "maxValue": 20
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "طريق الملك فهد",
      "addressLocality": "الرياض",
      "addressRegion": "الرياض",
      "postalCode": "12211",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "areaServed": [
      { "@type": "Country", "name": "SA" },
      { "@type": "City", "name": "الرياض" },
      { "@type": "City", "name": "جدة" },
      { "@type": "City", "name": "مكة المكرمة" },
      { "@type": "City", "name": "الدمام" }
    ],
    "sameAs": [
      "https://instagram.com/nshtare",
      "https://twitter.com/nshtare",
      "https://tiktok.com/@nshtare"
    ],
    "taxID": "300000000000003",
    "vatID": "300000000000003",
    "iso6523Code": "0188:1010000000",
    "paymentAccepted": "Cash on Delivery, Credit Card, Mada, Apple Pay, STC Pay",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "كتالوج السكوترات الكهربائية",
      "itemListElement": [
        { "@type": "OfferCatalog", "name": "سكوتر كهربائي", "url": "https://nshtare.com/electric-scooter" },
        { "@type": "OfferCatalog", "name": "سكوتر درفت", "url": "https://nshtare.com/drift-scooter" },
        { "@type": "OfferCatalog", "name": "سكوتر أطفال", "url": "https://nshtare.com/kids-scooter" },
        { "@type": "OfferCatalog", "name": "إكسسوارات", "url": "https://nshtare.com/scooter-accessories" },
        { "@type": "OfferCatalog", "name": "قطع غيار", "url": "https://nshtare.com/spare-parts" }
      ]
    },
    "returnPolicy": {
      "@type": "MerchantReturnPolicy",
      "@id": "https://nshtare.com/#returnpolicy",
      "applicableCountry": "SA",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 14,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn",
      "returnPolicySeasonalOverride": {
        "@type": "MerchantReturnPolicySeasonalOverride",
        "startDate": "2026-11-20",
        "endDate": "2027-01-15",
        "merchantReturnDays": 30
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
