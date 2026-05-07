import React from 'react';
import { ShieldCheck, Truck, CreditCard, Clock } from 'lucide-react';

export default function TrustBar({ lang = 'ar' }: { lang?: 'ar' | 'en' }) {
  const isEn = lang === 'en';

  const features = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: isEn ? "Cash on Delivery" : "الدفع عند الاستلام",
      desc: isEn ? "Pay safely at your door" : "ادفع بأمان عند باب بيتك",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: isEn ? "1 Year Warranty" : "ضمان سنة كاملة",
      desc: isEn ? "Comprehensive cover" : "ضمان شامل للمحرك والبطارية",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: isEn ? "Fast Shipping" : "شحن سريع",
      desc: isEn ? "2-4 days anywhere in KSA" : "توصيل خلال ٢-٤ أيام للمملكة",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: isEn ? "24/7 Support" : "دعم فني ٢٤/٧",
      desc: isEn ? "Ready to help anytime" : "جاهزين لمساعدتك بأي وقت",
    }
  ];

  return (
    <div className="bg-surface border-y border-border py-6 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" dir={isEn ? "ltr" : "rtl"}>
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-3 p-2 rounded-lg hover:bg-bg transition-colors">
              <div className="p-2 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-text text-sm sm:text-base">{feature.title}</h3>
                <p className="text-text-secondary text-xs sm:text-sm mt-0.5">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
