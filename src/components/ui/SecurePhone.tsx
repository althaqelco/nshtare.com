"use client";

import React, { useState } from 'react';
import { Phone } from 'lucide-react';

interface SecurePhoneProps {
  encodedPhone: string; // Base64 encoded phone number
  className?: string;
  icon?: boolean;
}

export default function SecurePhone({ encodedPhone, className = "", icon = true }: SecurePhoneProps) {
  const [phone, setPhone] = useState<string>("انقر لإظهار الرقم");
  const [isRevealed, setIsRevealed] = useState(false);

  const revealPhone = () => {
    if (!isRevealed) {
      try {
        const decoded = atob(encodedPhone);
        setPhone(decoded);
        setIsRevealed(true);
      } catch (e) {
        console.error("Invalid phone encoding");
      }
    }
  };

  return (
    <button 
      onClick={revealPhone}
      onMouseEnter={revealPhone}
      className={`inline-flex items-center gap-2 group transition-all ${className} ${isRevealed ? 'cursor-default' : 'cursor-pointer hover:opacity-80'}`}
      dir="ltr"
      aria-label="Phone Number"
    >
      {icon && <Phone className="h-4 w-4 text-primary" />}
      <span className="font-bold tracking-wider">{phone}</span>
    </button>
  );
}
