"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Star, ShieldCheck, Truck, Zap, Plus, Minus, ShoppingCart, MessageCircle, Eye } from "lucide-react";
import ProductSchema from "@/components/seo/ProductSchema";
import ProductSpecs from "@/components/product/ProductSpecs";

export default function ProductDetails({ product }: { product: any }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const { addToCart, openCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [liveViewers, setLiveViewers] = useState(12);
  const [activeImage, setActiveImage] = useState(product?.gallery ? product.gallery[0] : product?.image);

  // Navboost: Social Proof Engine (Plan 05)
  useEffect(() => {
    if (!product?.slug) return;
    const hour = new Date().getHours();
    const hash = Array.from(product.slug as string).reduce((a: number, c: string) => a + c.charCodeAt(0), 0);
    const isPeakHour = hour >= 9 && hour <= 23;
    const base = isPeakHour ? 15 : 5;
    setLiveViewers(base + (hash % 20));

    // Dynamic viewer fluctuation
    const interval = setInterval(() => {
      setLiveViewers((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 15000);
    return () => clearInterval(interval);
  }, [product?.slug]);

  if (!product) return null;

  const t = {
    addCart: isEn ? "Add to Cart" : "أضف للسلة",
    quickBuy: isEn ? "Buy Now" : "شراء سريع",
    whatsappBuy: isEn ? "Order via WhatsApp" : "اطلب عبر الواتساب",
    reviews: isEn ? "Reviews" : "تقييم",
    sar: isEn ? "SAR" : "ر.س",
    save: isEn ? "Save" : "توفير",
    specs: isEn ? "Key Features" : "أبرز المواصفات",
    stock: isEn ? "In Stock - Ships Today!" : "متوفر في المخزون - يشحن اليوم!",
    viewing: isEn ? "people are viewing this right now" : "شخص يشاهد هذا المنتج الآن",
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      nameEn: product.nameEn,
      price: product.price,
      image: product.image,
      quantity,
    });
  };

  const handleQuickBuy = () => {
    handleAddToCart();
    window.location.href = isEn ? "/en/order" : "/order";
  };

  const whatsappMessage = encodeURIComponent(
    isEn 
    ? `Hello, I want to order: ${product.nameEn} (Quantity: ${quantity})` 
    : `مرحباً، أريد طلب: ${product.name} (الكمية: ${quantity})`
  );

  return (
    <div className="bg-surface min-h-screen pb-24 md:pb-12" dir={isEn ? "ltr" : "rtl"}>
      <ProductSchema 
        name={product.name}
        nameEn={product.nameEn}
        image={product.image}
        gallery={product.gallery}
        description={`${product.name} - ${isEn ? 'Buy online with free shipping across Saudi Arabia. 1 year warranty. Cash on delivery available.' : 'اشترِ اونلاين مع شحن مجاني لجميع مدن السعودية. ضمان سنة كاملة. الدفع عند الاستلام.'}`}
        sku={product.id}
        url={isEn ? `/en/${product.categorySlug}/${product.slug}` : `/${product.categorySlug}/${product.slug}`}
        price={product.price}
        originalPrice={product.originalPrice}
        rating={product.rating}
        reviewsCount={product.reviewsCount}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Image Gallery (Left) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="relative aspect-square bg-bg rounded-3xl border border-border overflow-hidden flex items-center justify-center p-8 group">
              {product.originalPrice && (
                <div className="absolute top-4 right-4 z-10 bg-error text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg animate-pulse">
                  <Zap className="h-4 w-4 fill-current" />
                  {t.save} {(product.originalPrice - product.price).toLocaleString()} {t.sar}
                </div>
              )}
              <Image 
                src={activeImage || product.image} 
                alt={product.name} 
                fill 
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Image Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 0 ? (
              <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-2">
                {product.gallery.map((img: string, idx: number) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary shadow-md' : 'border-border hover:border-primary/50 opacity-70 hover:opacity-100'}`}
                  >
                    <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                <div className="relative aspect-square bg-bg rounded-xl border border-border overflow-hidden">
                   <Image src="/images/ui/feature_battery.png" alt="Battery" fill className="object-cover hover:scale-110 transition-transform" />
                </div>
                <div className="relative aspect-square bg-bg rounded-xl border border-border overflow-hidden">
                   <Image src="/images/ui/feature_motor.png" alt="Motor" fill className="object-cover hover:scale-110 transition-transform" />
                </div>
                <div className="relative aspect-square bg-bg rounded-xl border border-border overflow-hidden">
                   <Image src="/images/ui/feature_display.png" alt="Display" fill className="object-cover hover:scale-110 transition-transform" />
                </div>
              </div>
            )}
          </div>

          {/* Product Details (Right) */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            {/* Live Viewers Hook */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-error/10 text-error text-sm font-bold w-fit mb-4">
              <Eye className="h-4 w-4 animate-pulse" />
              <span>{liveViewers} {t.viewing} 👁️</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text mb-4 leading-tight">
              {isEn ? product.nameEn : product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6 border-b border-border pb-6">
              <div className="flex items-center text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : ""}`} />
                ))}
              </div>
              <span className="text-text-secondary font-medium">{product.rating} ({product.reviewsCount} {t.reviews})</span>
              <span className="text-success font-bold flex items-center gap-1 text-sm bg-success/10 px-2 py-1 rounded">
                <ShieldCheck className="h-4 w-4" />
                {t.stock}
              </span>
            </div>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl sm:text-5xl font-black text-primary">
                {product.price.toLocaleString()} <span className="text-2xl">{t.sar}</span>
              </span>
              {product.originalPrice && (
                <span className="text-xl sm:text-2xl text-text-secondary line-through font-bold mb-1">
                  {product.originalPrice.toLocaleString()} {t.sar}
                </span>
              )}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex flex-col gap-4 mt-auto">
              
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-bg border border-border rounded-xl p-1 h-14">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-text-secondary hover:text-primary transition-colors"><Minus className="h-5 w-5" /></button>
                  <span className="font-bold text-lg min-w-[2rem] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-text-secondary hover:text-primary transition-colors"><Plus className="h-5 w-5" /></button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary/5 h-14 rounded-xl font-bold text-lg transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {t.addCart}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={handleQuickBuy}
                  className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 transition-all transform hover:scale-[1.02]"
                >
                  {t.quickBuy}
                </button>
                
                <a 
                  href={`https://wa.me/966500000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-[#25D366]/25 transition-all transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t.whatsappBuy}
                </a>
              </div>

              {/* Trust Badges Minimal */}
              <div className="flex items-center justify-between py-4 mt-4 border-t border-border text-sm text-text-secondary font-medium">
                <div className="flex items-center gap-1"><Truck className="h-4 w-4 text-primary" /> {isEn ? "Free Shipping" : "شحن مجاني"}</div>
                <div className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-secondary" /> {isEn ? "1 Year Warranty" : "ضمان سنة"}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Specifications — Plan 05 §4.2 Dwell Time Maximizer */}
        {product.specs && product.specs.length > 0 && (
          <ProductSpecs specs={product.specs} />
        )}
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-border p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3">
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-white border-2 border-primary text-primary w-14 h-14 rounded-xl flex-shrink-0"
          >
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button 
            onClick={handleQuickBuy}
            className="flex-1 flex items-center justify-center bg-primary text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-primary/25"
          >
            {t.quickBuy}
          </button>
        </div>
      </div>

    </div>
  );
}
