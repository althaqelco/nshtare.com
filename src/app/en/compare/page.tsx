"use client";

import React, { useState } from 'react';
import { products } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, X, Plus, ArrowLeft } from 'lucide-react';

export default function ComparePageEn() {
  const [selected, setSelected] = useState<string[]>([]);

  const addProduct = (slug: string) => {
    if (selected.length >= 3) return;
    if (!selected.includes(slug)) setSelected([...selected, slug]);
  };

  const removeProduct = (slug: string) => {
    setSelected(selected.filter(s => s !== slug));
  };

  const selectedProducts = selected.map(s => products.find(p => p.slug === s)).filter(Boolean);
  const available = products.filter(p => !selected.includes(p.slug));

  return (
    <div className="bg-bg min-h-screen py-12 md:py-20" dir="ltr">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black text-text mb-4">Compare Products</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Select up to 3 products to compare specs and prices side by side.
          </p>
        </div>

        {selected.length < 3 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-text mb-4">Add a product to compare ({selected.length}/3)</h2>
            <div className="flex flex-wrap gap-3">
              {available.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => addProduct(p.slug)}
                  className="px-4 py-2 bg-surface border border-border rounded-xl text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 flex items-center gap-2 text-sm font-medium"
                >
                  <Plus className="h-4 w-4" />
                  {p.nameEn}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedProducts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 bg-surface border border-border text-text font-bold text-start">Criteria</th>
                  {selectedProducts.map((p: any) => (
                    <th key={p.slug} className="p-4 bg-surface border border-border text-center min-w-[200px]">
                      <button onClick={() => removeProduct(p.slug)} className="text-error/60 hover:text-error float-end" title="Remove">
                        <X className="h-5 w-5" />
                      </button>
                      <div className="relative w-24 h-24 mx-auto mb-3">
                        <Image src={p.image} alt={p.nameEn} fill className="object-contain" />
                      </div>
                      <Link href={`/en/product/${p.slug}`} className="text-text font-bold hover:text-primary text-sm leading-tight block">{p.nameEn}</Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">Price</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center">
                      <div className="font-black text-primary text-xl">{p.price.toLocaleString()} SAR</div>
                      {p.originalPrice && <div className="text-sm text-text-secondary line-through">{p.originalPrice.toLocaleString()} SAR</div>}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">Rating</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center">
                      <div className="flex items-center justify-center gap-1 text-accent">
                        <Star className="h-5 w-5 fill-current" />
                        <span className="font-bold text-text text-lg">{p.rating}</span>
                      </div>
                      <div className="text-xs text-text-secondary">({p.reviewsCount} reviews)</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">COD</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center">
                      <ShieldCheck className="h-6 w-6 text-success mx-auto" />
                      <span className="text-sm text-success font-bold">Available</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">Warranty</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center text-text font-bold">1 Year</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border border-border font-bold text-text bg-surface">Order</td>
                  {selectedProducts.map((p: any) => (
                    <td key={p.slug} className="p-4 border border-border text-center">
                      <Link href={`/en/product/${p.slug}`} className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-bold text-sm transition-colors">
                        View Product <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-surface border border-border rounded-2xl p-12 text-center">
            <p className="text-text-secondary text-lg mb-4">Select products from the list above to start comparing.</p>
            <Link href="/en/electric-scooter" className="text-primary font-bold hover:underline">Or browse all products →</Link>
          </div>
        )}

      </div>
    </div>
  );
}
