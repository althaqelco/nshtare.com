import React from 'react';
import { notFound } from 'next/navigation';
import { categories, cities, getCategoryBySlug, getCityBySlug, getProductsByCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Zap, MapPin, Truck } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateStaticParams() {
  const params: { category: string; city: string }[] = [];
  categories.forEach((cat) => {
    cities.forEach((city) => {
      params.push({ category: cat.slug, city: city.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: { category: string; city: string } }) {
  const category = getCategoryBySlug(params.category);
  const city = getCityBySlug(params.city);
  if (!category || !city) return {};
  
  const month = new Date().toLocaleString('en-US', { month: 'long' });
  const year = new Date().getFullYear();

  return {
    title: `Best ${category.nameEn} in ${city.nameEn} | ${month} ${year} Prices 🥇`,
    description: `Compare the best ${category.nameEn} in ${city.nameEn}. Updated prices for ${month} ${year}. Delivery to your door + Cash on Delivery.`,
  };
}

export default function CategoryCityPageEn({ params }: { params: { category: string; city: string } }) {
  const category = getCategoryBySlug(params.category);
  const city = getCityBySlug(params.city);
  if (!category || !city) notFound();

  const products = getProductsByCategory(category.slug);

  const breadcrumbItems = [
    { name: "Home", url: "/en" },
    { name: category.nameEn, url: `/en/${category.slug}` },
    { name: city.nameEn, url: `/en/${category.slug}/${city.slug}` }
  ];

  return (
    <div className="bg-bg min-h-screen py-8 md:py-12" dir="ltr">
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Local SEO Hero */}
        <div className="bg-gradient-to-bl from-primary to-primary-dark text-white rounded-3xl p-8 md:p-16 mb-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl gap-8">
          <div className="absolute inset-0 bg-[url('/images/ui/banner_flash_sale_1777999346027.png')] bg-cover bg-center opacity-10"></div>
          
          <div className="flex-1 relative z-10 text-center md:text-start">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <MapPin className="h-4 w-4" />
              Delivery available to {city.nameEn}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight">
              Best {category.nameEn} in {city.nameEn}
            </h1>
            <p className="text-lg text-white/90 max-w-xl">
              Discover the largest selection of official {category.nameEn}. We offer fast delivery to all neighborhoods in {city.nameEn} with Cash on Delivery options.
            </p>
          </div>

          <div className="relative z-10 text-8xl md:text-[120px] opacity-80 filter drop-shadow-2xl">
            {category.icon}
          </div>
        </div>

        {/* Featured Snippet Bait (Direct Answer) */}
        <div className="bg-surface rounded-2xl p-6 border border-border shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-secondary/10 p-4 rounded-full text-secondary">
            <Truck className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-text mb-2">Delivery Information for {city.nameEn}</h2>
            <p className="text-text-secondary">
              Delivering <strong>{category.nameEn}</strong> to <strong>{city.nameEn}</strong> typically takes 2 to 4 working days. All orders are eligible for Cash on Delivery and include a full 1-year local warranty.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-6">Available Products in {city.nameEn}</h2>
          
          {products.length === 0 ? (
            <div className="bg-surface p-12 rounded-2xl text-center border border-border">
              <p className="text-text-secondary text-lg">Products will be added to this section soon.</p>
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
