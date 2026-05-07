"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const t = {
    cart: isEn ? "Your Cart" : "سلة المشتريات",
    empty: isEn ? "Your cart is empty" : "سلتك فارغة",
    startShopping: isEn ? "Start Shopping" : "تصفح المنتجات",
    subtotal: isEn ? "Subtotal" : "المجموع الفرعي",
    shipping: isEn ? "Shipping" : "الشحن",
    free: isEn ? "Free" : "مجاني",
    total: isEn ? "Total" : "الإجمالي",
    checkout: isEn ? "Complete Order (COD)" : "إتمام الطلب (الدفع عند الاستلام)",
    sar: isEn ? "SAR" : "ر.س",
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 z-[110] w-full max-w-md bg-surface shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isEn
            ? `right-0 ${isOpen ? "translate-x-0" : "translate-x-full"}`
            : `left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`
        }`}
        dir={isEn ? "ltr" : "rtl"}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h2 className="text-xl font-bold text-text flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            {t.cart} ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-bg text-text-secondary transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-6 text-center">
              <div className="relative w-48 h-48 opacity-80">
                <Image
                  src="/images/ui/empty-cart.webp"
                  alt="Empty Cart"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-medium text-text-secondary">{t.empty}</p>
              <button
                onClick={closeCart}
                className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors"
              >
                {t.startShopping}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-bg rounded-2xl border border-border">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl border border-border flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-text text-sm sm:text-base line-clamp-2">
                        {isEn ? item.nameEn : item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-text-secondary hover:text-error transition-colors p-1"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 bg-surface border border-border rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-text-secondary hover:text-primary transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-bold text-sm min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-text-secondary hover:text-primary transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="font-black text-primary">
                        {(item.price * item.quantity).toLocaleString()} {t.sar}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 sm:p-6 bg-surface">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-text-secondary">
                <span>{t.subtotal}</span>
                <span className="font-bold text-text">{cartTotal.toLocaleString()} {t.sar}</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>{t.shipping}</span>
                <span className="font-bold text-secondary uppercase">{t.free}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-border">
                <span className="font-bold text-lg text-text">{t.total}</span>
                <span className="font-black text-2xl text-primary">{cartTotal.toLocaleString()} {t.sar}</span>
              </div>
            </div>
            
            <Link
              href={isEn ? "/en/order" : "/order"}
              onClick={closeCart}
              className="w-full flex items-center justify-center bg-accent hover:bg-accent/90 text-white py-4 rounded-xl font-bold text-lg transition-transform transform hover:scale-[1.02] shadow-lg shadow-accent/20"
            >
              {t.checkout}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
