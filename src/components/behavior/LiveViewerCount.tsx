"use client";

import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { usePathname } from 'next/navigation';

/**
 * Live Viewer Count Component
 * Shows a realistic but deterministic viewer count based on product slug + hour.
 * Fluctuates gently to feel alive without being suspicious.
 */
export default function LiveViewerCount({ slug }: { slug: string }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const [count, setCount] = useState(0);

  useEffect(() => {
    function getViewerCount() {
      const hour = new Date().getHours();
      const minute = new Date().getMinutes();
      const hash = Array.from(slug).reduce((a, c) => a + c.charCodeAt(0), 0);

      // Peak hours: 9AM-11PM = higher numbers
      const isPeak = hour >= 9 && hour <= 23;
      const base = isPeak ? 15 : 5;
      // Add minute-based fluctuation (±3) for liveness
      const fluctuation = Math.abs((minute * 7 + hash) % 7) - 3;
      return Math.max(3, base + (hash % 20) + fluctuation);
    }

    setCount(getViewerCount());

    // Re-calculate every 30s for gentle fluctuation
    const interval = setInterval(() => setCount(getViewerCount()), 30000);
    return () => clearInterval(interval);
  }, [slug]);

  if (count === 0) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-text-secondary">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
      </span>
      <Eye className="h-4 w-4" />
      <span>
        {isEn
          ? `${count} people viewing this now`
          : `${count} شخص يشاهد هذا المنتج الآن`
        }
      </span>
    </div>
  );
}
