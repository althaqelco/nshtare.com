"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ShieldCheck, Truck, CreditCard, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { saudiCities } from '@/data/saudi_cities_districts';

// Zod Schema
const orderSchema = z.object({
  fullName: z.string().min(3, { message: "Name must be at least 3 characters" }),
  phone: z.string().regex(/^(05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/, { message: "Must be a valid KSA mobile number" }),
  city: z.string().min(2, { message: "Please select a city" }),
  district: z.string().min(2, { message: "District is required" }),
  address: z.string().min(5, { message: "Detailed address is required" }),
  notes: z.string().optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const isEn = pathname.startsWith('/en');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = {
    checkout: isEn ? "Checkout" : "إتمام الطلب",
    back: isEn ? "Back to Cart" : "العودة للسلة",
    shippingInfo: isEn ? "Shipping Information" : "معلومات الشحن",
    orderSummary: isEn ? "Order Summary" : "ملخص الطلب",
    fullName: isEn ? "Full Name" : "الاسم الكامل",
    phone: isEn ? "Phone Number (05XXXXXXX)" : "رقم الجوال (05XXXXXXX)",
    city: isEn ? "City" : "المدينة",
    district: isEn ? "District" : "الحي",
    address: isEn ? "Detailed Address (Street, Building...)" : "العنوان التفصيلي (الشارع، رقم المبنى...)",
    notes: isEn ? "Additional Notes (Optional)" : "ملاحظات إضافية (اختياري)",
    confirm: isEn ? "Confirm Order - Pay on Delivery" : "تأكيد الطلب - الدفع عند الاستلام",
    subtotal: isEn ? "Subtotal" : "المجموع الفرعي",
    shipping: isEn ? "Shipping" : "الشحن",
    free: isEn ? "Free" : "مجاني",
    total: isEn ? "Total" : "الإجمالي",
    sar: isEn ? "SAR" : "ر.س",
    empty: isEn ? "Your cart is empty. Please add items to proceed." : "سلتك فارغة. الرجاء إضافة منتجات للمتابعة.",
    returnShop: isEn ? "Return to Shop" : "العودة للتسوق",
    processing: isEn ? "Processing..." : "جاري تأكيد الطلب...",
  };
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema)
  });

  const selectedCityId = watch("city");
  const currentCity = saudiCities.find((c: any) => c.id === selectedCityId || c.nameAr === selectedCityId);
  const districts = currentCity ? currentCity.districts : [];

  const onSubmit = async (data: OrderFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create an order ID
      const orderId = `NSHT-${new Date().getFullYear()}${String(new Date().getMonth()+1).padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
      
      // Save to Firestore
      const orderData = {
        orderId,
        customerName: data.fullName,
        phone: data.phone,
        city: data.city,
        district: data.district,
        address: data.address,
        notes: data.notes || "",
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          nameEn: item.nameEn,
          price: item.price,
          quantity: item.quantity,
          image: item.image
        })),
        total: cartTotal,
        status: "جديد",
        language: isEn ? "en" : "ar",
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "orders"), orderData);
      
      console.log("Order Saved to Firebase:", { orderId });
      
      clearCart();
      
      // Redirect to confirmation
      router.push(isEn ? `/en/order/confirmation?id=${orderId}` : `/order/confirmation?id=${orderId}`);
    } catch (error) {
      console.error("Error placing order:", error);
      alert(isEn ? "Failed to place order. Please try again." : "فشل في إتمام الطلب. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-surface" dir={isEn ? "ltr" : "rtl"}>
        <div className="relative w-48 h-48 mb-6 opacity-80">
          <Image src="/images/ui/empty-cart.png" alt="Empty Cart" fill className="object-contain" />
        </div>
        <h2 className="text-2xl font-bold text-text mb-4">{t.empty}</h2>
        <Link href={isEn ? "/en" : "/"} className="bg-primary text-white px-8 py-3 rounded-xl font-bold">
          {t.returnShop}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-bg min-h-screen py-8 md:py-12" dir={isEn ? "ltr" : "rtl"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="mb-8 flex items-center gap-2 text-text-secondary hover:text-primary transition-colors w-fit">
          <Link href={isEn ? "/en" : "/"} className="flex items-center gap-1 font-medium">
            {isEn ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            {t.back}
          </Link>
        </div>

        <h1 className="text-3xl font-black text-text mb-8">{t.checkout}</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Form Section */}
          <div className="w-full lg:w-2/3">
            <div className="bg-surface rounded-3xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-xl font-bold text-text mb-6 pb-4 border-b border-border flex items-center gap-2">
                <Truck className="h-6 w-6 text-primary" />
                {t.shippingInfo}
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="checkout-form">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">{t.fullName}</label>
                    <input 
                      {...register("fullName")}
                      className={`w-full p-4 bg-bg border ${errors.fullName ? 'border-error' : 'border-border'} rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all`}
                      placeholder={isEn ? "Ahmed Salem" : "أحمد سالم"}
                    />
                    {errors.fullName && <p className="text-error text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">{t.phone}</label>
                    <input 
                      {...register("phone")}
                      className={`w-full p-4 bg-bg border ${errors.phone ? 'border-error' : 'border-border'} rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all`}
                      placeholder="05XXXXXXXX"
                      dir="ltr"
                    />
                    {errors.phone && <p className="text-error text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">{t.city}</label>
                    <select 
                      {...register("city")}
                      className={`w-full p-4 bg-bg border ${errors.city ? 'border-error' : 'border-border'} rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none`}
                    >
                      <option value="">{isEn ? "Select City..." : "اختر المدينة..."}</option>
                      {saudiCities.map((city: any) => (
                        <option key={city.id} value={city.id}>{isEn ? city.nameEn : city.nameAr}</option>
                      ))}
                    </select>
                    {errors.city && <p className="text-error text-xs mt-1">{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">{t.district}</label>
                    <select 
                      {...register("district")}
                      disabled={!selectedCityId}
                      className={`w-full p-4 bg-bg border ${errors.district ? 'border-error' : 'border-border'} rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none disabled:opacity-50`}
                    >
                      <option value="">{isEn ? "Select District..." : "اختر الحي..."}</option>
                      {districts.map((district: string) => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                    {errors.district && <p className="text-error text-xs mt-1">{errors.district.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">{t.address}</label>
                  <input 
                    {...register("address")}
                    className={`w-full p-4 bg-bg border ${errors.address ? 'border-error' : 'border-border'} rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all`}
                    placeholder={isEn ? "Street name, building number" : "اسم الشارع، رقم المبنى"}
                  />
                  {errors.address && <p className="text-error text-xs mt-1">{errors.address.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">{t.notes}</label>
                  <textarea 
                    {...register("notes")}
                    className="w-full p-4 bg-bg border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all min-h-[100px] resize-none"
                    placeholder={isEn ? "Any special instructions for delivery?" : "هل يوجد تعليمات خاصة للتوصيل؟"}
                  />
                </div>

              </form>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-surface rounded-3xl p-6 shadow-sm border border-border sticky top-28">
              <h2 className="text-xl font-bold text-text mb-6 pb-4 border-b border-border flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-primary" />
                {t.orderSummary}
              </h2>

              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 bg-bg rounded-lg border border-border flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-text line-clamp-1">{isEn ? item.nameEn : item.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-text-secondary">x{item.quantity}</span>
                        <span className="text-sm font-bold text-primary">{(item.price * item.quantity).toLocaleString()} {t.sar}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-border mb-6">
                <div className="flex justify-between text-text-secondary">
                  <span>{t.subtotal}</span>
                  <span className="font-bold text-text">{cartTotal.toLocaleString()} {t.sar}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>{t.shipping}</span>
                  <span className="font-bold text-secondary uppercase">{t.free}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border mt-2">
                  <span className="font-bold text-lg text-text">{t.total}</span>
                  <span className="font-black text-2xl text-primary">{cartTotal.toLocaleString()} {t.sar}</span>
                </div>
              </div>

              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 mb-6 flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-secondary text-sm">{isEn ? "100% Secure Shopping" : "تسوق آمن ١٠٠٪"}</h4>
                  <p className="text-xs text-secondary mt-1 opacity-80">{isEn ? "You only pay when you receive the product." : "لن تدفع أي مبلغ حتى تستلم المنتج بيدك."}</p>
                </div>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 disabled:bg-border disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-transform transform hover:scale-[1.02] shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t.processing}
                  </div>
                ) : (
                  t.confirm
                )}
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
