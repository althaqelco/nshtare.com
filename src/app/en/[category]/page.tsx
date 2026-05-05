import React from 'react';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug, getProductsByCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Zap } from 'lucide-react';

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);
  if (!category) return {};
  
  return {
    title: `Shop Best ${category.nameEn} in Saudi Arabia | Nshtare`,
    description: `Explore our wide range of ${category.nameEn}. 1-Year Warranty, Free Shipping, and Cash on Delivery from Nshtare.`,
  };
}

export default function CategoryPageEn({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <div className="bg-bg min-h-screen py-8 md:py-12" dir="ltr">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Hero */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-16 mb-12 flex flex-col items-center text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('/images/ui/banner_flash_sale_1777999346027.png')] bg-cover bg-center opacity-10"></div>
          <span className="text-5xl md:text-7xl mb-6 relative z-10">{category.icon}</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 relative z-10 tracking-tight">
            Best {category.nameEn} in Saudi Arabia
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl relative z-10">
            Shop now with official warranty, fast shipping to your door, and Cash on Delivery.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text mb-6">{category.nameEn} Products ({products.length})</h2>
          
          {products.length === 0 ? (
            <div className="bg-surface p-12 rounded-2xl text-center border border-border">
              <p className="text-text-secondary text-lg">Products will be added to this category soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                  
                  <Link href={`/en/product/${product.slug}`} className="relative h-64 bg-bg w-full p-6 block overflow-hidden">
                    {product.originalPrice && (
                      <div className="absolute top-3 left-3 z-10 bg-error text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                        <Zap className="h-3 w-3 fill-current" />
                        Sale
                      </div>
                    )}
                    <Image 
                      src={product.image} 
                      alt={product.nameEn} 
                      fill 
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" 
                    />
                  </Link>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1 text-accent mb-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-bold text-text">{product.rating}</span>
                      <span className="text-xs text-text-secondary">({product.reviewsCount})</span>
                    </div>

                    <Link href={`/en/product/${product.slug}`} className="hover:text-primary transition-colors">
                      <h3 className="font-bold text-text text-lg mb-2 line-clamp-2 leading-tight">
                        {product.nameEn}
                      </h3>
                    </Link>

                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div>
                        <div className="font-black text-primary text-xl">
                          {product.price.toLocaleString()} SAR
                        </div>
                        {product.originalPrice && (
                          <div className="text-sm text-text-secondary line-through">
                            {product.originalPrice.toLocaleString()} SAR
                          </div>
                        )}
                      </div>
                      <div className="bg-success/10 text-success rounded p-2" title="Cash on Delivery">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
