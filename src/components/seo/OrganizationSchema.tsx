import React from 'react';

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "Store"],
    "name": "نشتري - Nshtare",
    "url": "https://nshtare.com",
    "logo": "https://nshtare.com/images/brand/nshtare_logo_1777997576506.png",
    "image": "https://nshtare.com/images/brand/nshtare_logo_1777997576506.png",
    "description": "المتجر الأول المتخصص في بيع السكوترات الكهربائية للكبار والأطفال في المملكة العربية السعودية. ضمان وكيل، شحن سريع، ودفع عند الاستلام.",
    "telephone": "+966500000000", // Placeholder, replace before launch
    "email": "support@nshtare.com",
    "priceRange": "$$",
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
    "sameAs": [
      "https://instagram.com/nshtare",
      "https://twitter.com/nshtare",
      "https://tiktok.com/@nshtare"
    ],
    "taxID": "300000000000003", // Placeholder VAT
    "vatID": "300000000000003",
    "iso6523Code": "0188:1010000000", // Placeholder CR
    "paymentAccepted": "Cash on Delivery, Credit Card, Mada, Apple Pay",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
