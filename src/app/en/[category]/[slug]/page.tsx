import React from 'react';
import { notFound } from 'next/navigation';
import { categories, cities, getCategoryBySlug, getCityBySlug, getSubcategoryBySlug, getProductsByCategory, getProductsBySubcategory, getProductBySlug } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShieldCheck, Zap, MapPin, Truck, ChevronRight } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProductDetails from '@/components/product/ProductDetails';
import RelatedProducts from '@/components/product/RelatedProducts';

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  const { subcategories, products } = await import('@/lib/data');

  categories.forEach((cat) => {
    cities.forEach((city) => {
      params.push({ category: cat.slug, slug: city.slug });
    });
  });

  for (const sub of subcategories) {
    params.push({ category: sub.parentSlug, slug: sub.slug });
  }

  for (const product of products) {
    params.push({ category: product.categorySlug, slug: product.slug });
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: catSlug, slug } = await params;
  const category = getCategoryBySlug(catSlug);
  if (!category) return {};

  const product = getProductBySlug(slug);
  if (product && product.categorySlug === catSlug) {
    return {
      title: `${product.nameEn} | Nshtare`,
      description: `Shop ${product.nameEn} at the best price. 1-year warranty, fast shipping across Saudi Arabia, and Cash on Delivery.`,
    };
  }

  const city = getCityBySlug(slug);
  if (city) {
    return {
      title: `Best ${category.nameEn} in ${city.nameEn} | Nshtare`,
      description: `Compare the best ${category.nameEn} in ${city.nameEn}. Fast delivery + Cash on Delivery available.`,
    };
  }

  const sub = getSubcategoryBySlug(catSlug, slug);
  if (sub) {
    return {
      title: `${sub.nameEn} — Best Prices & Deals | Nshtare`,
      description: `Shop ${sub.nameEn} from Nshtare. Full 1-year warranty, fast shipping across Saudi Arabia, and Cash on Delivery.`,
    };
  }

  return {};
}

export default async function CategorySlugPageEn({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: catSlug, slug } = await params;
  const category = getCategoryBySlug(catSlug);
  if (!category) notFound();

  const product = getProductBySlug(slug);
  if (product && product.categorySlug === catSlug) {
    const productBreadcrumbs = [
      { name: "Home", url: "/en" },
      { name: category.nameEn, url: `/en/${category.slug}` },
      { name: product.nameEn, url: `/en/${product.categorySlug}/${product.slug}` },
    ];
    return (
      <>
        <BreadcrumbSchema items={productBreadcrumbs} />
        <ProductDetails product={product} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedProducts currentProductId={product.id} categorySlug={product.categorySlug} />
        </div>
      </>
    );
  }

  const city = getCityBySlug(slug);
  const sub = getSubcategoryBySlug(catSlug, slug);

  if (city) return <CityPageEn category={category} city={city} />;
  if (sub) return <SubcategoryPageEn category={category} sub={sub} />;

  notFound();
}

function CityPageEn({ category, city }: { category: any; city: any }) {
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

        <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-8 md:p-16 mb-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl gap-8">
          <div className="flex-1 relative z-10 text-center md:text-start">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <MapPin className="h-4 w-4" />
              Delivery available to {city.nameEn}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight">
              Best {category.nameEn} in {city.nameEn}
            </h1>
            <p className="text-lg text-white/90 max-w-xl">
              Discover the largest selection of certified {category.nameEn}. Fast delivery to all {city.nameEn} neighborhoods with Cash on Delivery.
            </p>
          </div>
          <div className="relative z-10 text-8xl md:text-[120px] opacity-80 filter drop-shadow-2xl">
            {category.icon}
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-6 border border-border shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-secondary/10 p-4 rounded-full text-secondary">
            <Truck className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-text mb-2">Delivery Info for {city.nameEn}</h2>
            <p className="text-text-secondary">
              Delivery of <strong>{category.nameEn}</strong> to <strong>{city.nameEn}</strong> usually takes 2 to 4 business days. All orders are eligible for Cash on Delivery with a full 1-year local warranty.
            </p>
          </div>
        </div>

        <ProductGridEn products={products} />
      </div>
    </div>
  );
}

function SubcategoryPageEn({ category, sub }: { category: any; sub: any }) {
  const products = getProductsBySubcategory(category.slug, sub.slug);
  const breadcrumbs = [
    { name: "Home", url: "/en" },
    { name: category.nameEn, url: `/en/${category.slug}` },
    { name: sub.nameEn, url: `/en/${category.slug}/${sub.slug}` },
  ];

  return (
    <div className="bg-bg min-h-screen py-8 md:py-12" dir="ltr">
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8 flex-wrap">
          <Link href="/en" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/en/${category.slug}`} className="hover:text-primary transition-colors">{category.nameEn}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-text font-bold">{sub.nameEn}</span>
        </nav>

        <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-3xl p-8 md:p-16 mb-12 text-center relative overflow-hidden shadow-xl">
          <span className="text-5xl md:text-7xl mb-6 block">{sub.icon}</span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{sub.nameEn}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover the best {sub.nameEn} at competitive prices. Official warranty + Cash on Delivery.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text mb-6">{sub.nameEn} Products ({products.length})</h2>

        {products.length === 0 ? (
          <div className="bg-surface p-12 rounded-2xl text-center border border-border">
            <p className="text-text-secondary text-lg mb-4">Products coming soon to this section.</p>
            <Link href={`/en/${category.slug}`} className="text-primary font-bold hover:underline">
              Browse all {category.nameEn} →
            </Link>
          </div>
        ) : (
          <ProductGridEn products={products} />
        )}

        <div className="mt-12 bg-surface p-8 rounded-3xl border border-border text-center">
          <p className="text-text-secondary mb-4">Looking for other {category.nameEn} sections?</p>
          <Link href={`/en/${category.slug}`} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-colors">
            View All {category.nameEn}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductGridEn({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
      {products.map((product: any) => (
        <div key={product.id} className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
          <Link href={`/en/${product.categorySlug}/${product.slug}`} className="relative h-64 bg-bg w-full p-6 block overflow-hidden">
            {product.originalPrice && (
              <div className="absolute top-3 left-3 z-10 bg-error text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                <Zap className="h-3 w-3 fill-current" />
                Sale
              </div>
            )}
            <Image src={product.image} alt={product.nameEn} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
          </Link>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center gap-1 text-accent mb-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-bold text-text">{product.rating}</span>
              <span className="text-xs text-text-secondary">({product.reviewsCount})</span>
            </div>
            <Link href={`/en/${product.categorySlug}/${product.slug}`} className="hover:text-primary transition-colors">
              <h3 className="font-bold text-text text-lg mb-2 line-clamp-2 leading-tight">{product.nameEn}</h3>
            </Link>
            <div className="mt-auto pt-4 flex items-center justify-between">
              <div>
                <div className="font-black text-primary text-xl">{product.price.toLocaleString()} SAR</div>
                {product.originalPrice && (
                  <div className="text-sm text-text-secondary line-through">{product.originalPrice.toLocaleString()} SAR</div>
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
  );
}
