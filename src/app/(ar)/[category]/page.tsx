import React from 'react';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug, getProductsByCategory, getSubcategoriesByParent } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Zap } from 'lucide-react';
import CollectionSchema from '@/components/seo/CollectionSchema';
import RobinHoodLinks from '@/components/behavior/RobinHoodLinks';
import PriceComparisonTable from '@/components/product/PriceComparisonTable';
import CategoryRichContent from '@/components/category/CategoryRichContent';

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  
  return {
    title: `تسوق أفضل ${category.nameAr} في السعودية | نشتري`,
    description: `استكشف تشكيلتنا الواسعة من ${category.nameAr}. ضمان سنة، شحن مجاني، والدفع عند الاستلام من نشتري.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <div className="bg-bg min-h-screen py-8 md:py-12">
      <CollectionSchema
        name={`أفضل ${category.nameAr} في السعودية`}
        url={`/${category.slug}`}
        productUrls={products.map(p => `/${p.categorySlug}/${p.slug}`)}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Hero */}
        <div className="rounded-3xl mb-12 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-xl min-h-[250px] md:min-h-[400px]">
          {category.banner ? (
            <Image 
              src={category.banner} 
              alt={category.nameAr} 
              fill
              className="object-cover z-0"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-primary z-0"></div>
          )}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="relative z-20 p-8 md:p-16 text-white flex flex-col items-center">
            <span className="text-4xl md:text-6xl mb-4">{category.icon}</span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              أفضل {category.nameAr} في السعودية
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              تسوق الآن بضمان الوكيل وشحن سريع لباب بيتك مع خيار الدفع عند الاستلام.
            </p>
          </div>
        </div>

        {/* Subcategory Navigation Chips */}
        {(() => {
          const subs = getSubcategoriesByParent(category.slug);
          if (subs.length === 0) return null;
          return (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-text mb-4">تصفح حسب النوع</h2>
              <div className="flex flex-wrap gap-3">
                {subs.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/${category.slug}/${sub.slug}`}
                    className="px-5 py-2.5 bg-surface hover:bg-primary hover:text-white border border-border rounded-xl text-text font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <span>{sub.icon}</span>
                    {sub.nameAr}
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Product Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text mb-6">منتجات {category.nameAr} ({products.length})</h2>
          
          {products.length === 0 ? (
            <div className="bg-surface p-12 rounded-2xl text-center border border-border">
              <p className="text-text-secondary text-lg">قريباً سيتم إضافة منتجات في هذا القسم.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                  
                  <Link href={`/${product.categorySlug}/${product.slug}`} className="relative h-64 bg-bg w-full p-6 block overflow-hidden">
                    {product.originalPrice && (
                      <div className="absolute top-3 right-3 z-10 bg-error text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                        <Zap className="h-3 w-3 fill-current" />
                        خصم
                      </div>
                    )}
                    <Image 
                      src={product.image} 
                      alt={product.name} 
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

                    <Link href={`/${product.categorySlug}/${product.slug}`} className="hover:text-primary transition-colors">
                      <h3 className="font-bold text-text text-lg mb-2 line-clamp-2 leading-tight">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div>
                        <div className="font-black text-primary text-xl">
                          {product.price.toLocaleString()} ر.س
                        </div>
                        {product.originalPrice && (
                          <div className="text-sm text-text-secondary line-through">
                            {product.originalPrice.toLocaleString()} ر.س
                          </div>
                        )}
                      </div>
                      <div className="bg-success/10 text-success rounded p-2" title="دفع عند الاستلام">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Comparison Table (Plan 03 §3.1) */}
        <PriceComparisonTable 
          products={products}
          categoryAr={category.nameAr}
        />

        {/* Semantic SEO & E-E-A-T Content Layer */}
        <CategoryRichContent category={category} isEn={false} />

        {/* Local SEO Cities Linking Block */}
        <div className="mt-16 bg-surface p-8 rounded-3xl border border-border shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-text mb-2">
              تسوق {category.nameAr} في مدينتك
            </h2>
            <p className="text-text-secondary">
              نوفر خدمة التوصيل السريع والتركيب لجميع مناطق المملكة
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['riyadh', 'jeddah', 'makkah', 'dammam'].map((citySlug) => {
              const cityName = citySlug === 'riyadh' ? 'الرياض' : citySlug === 'jeddah' ? 'جدة' : citySlug === 'makkah' ? 'مكة المكرمة' : 'الدمام';
              return (
                <Link 
                  key={citySlug}
                  href={`/${category.slug}/${citySlug}`}
                  className="px-6 py-3 bg-bg hover:bg-primary hover:text-white border border-border rounded-xl text-text font-semibold transition-all duration-300"
                >
                  {category.nameAr} في {cityName}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Robin Hood Links (Plan 06 §4.1) */}
        <RobinHoodLinks currentCategory={category.slug} />

      </div>
    </div>
  );
}
