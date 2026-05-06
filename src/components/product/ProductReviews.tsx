"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";

export default function ProductReviews({ product }: { product?: any }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");

  if (!product || !product.reviewsData) {
    return null;
  }

  const { aggregateRating, reviews } = product.reviewsData;
  const productName = isEn ? product.nameEn : product.name;

  return (
    <div className="mt-16 max-w-5xl mx-auto" dir={isEn ? "ltr" : "rtl"}>
      <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
        <MessageSquareQuote className="h-7 w-7 text-primary" />
        <h3 className="text-2xl font-black text-text">
          {isEn ? "Customer Reviews" : "تجارب العملاء"}
        </h3>
        <div className="flex items-center gap-2 mr-auto rtl:mr-0 rtl:ml-auto bg-surface px-4 py-1.5 rounded-full border border-border">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="font-bold">{aggregateRating.ratingValue}</span>
          <span className="text-text-secondary text-sm">({aggregateRating.reviewCount})</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review: any, idx: number) => (
          <div key={idx} className="bg-bg border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-text">{review.author}</h4>
                {review.verified && (
                  <span className="flex items-center gap-1 text-xs text-success mt-1 font-medium">
                    <CheckCircle2 className="h-3 w-3" />
                    {isEn ? "Verified Purchase" : "مشتري مؤكد"}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < review.rating ? "fill-accent text-accent" : "fill-border text-border"}`} 
                  />
                ))}
              </div>
            </div>
            
            <h5 className="font-bold text-text-secondary mb-2 text-sm">{review.title}</h5>
            <p className="text-text-secondary leading-relaxed text-sm">
              "{review.text}"
            </p>
            <div className="mt-4 text-xs text-text-secondary/60">
              {review.date}
            </div>
          </div>
        ))}
      </div>

      {/* JSON-LD Product Reviews Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: productName,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: aggregateRating.ratingValue,
              reviewCount: aggregateRating.reviewCount
            },
            review: reviews.map((r: any) => ({
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating
              },
              author: {
                "@type": "Person",
                name: r.author
              },
              datePublished: r.date,
              reviewBody: r.text
            }))
          }),
        }}
      />
    </div>
  );
}
