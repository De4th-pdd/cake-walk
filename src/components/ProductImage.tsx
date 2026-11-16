'use client';
/* eslint-disable @next/next/no-img-element */

import { useState, useCallback } from 'react';
import { getPlaceholderSvg } from '@/lib/placeholders';
import type { MenuItem } from '@/data/menu';

interface ProductImageProps {
  item: MenuItem;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ProductImage({
  item,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const placeholderSrc = getPlaceholderSvg(item.name, item.category);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div
        className={`bg-cream flex items-center justify-center border border-border/40 ${className}`}
        role="img"
        aria-label={item.name}
      >
        <div className="text-center p-4">
          <span className="font-display text-xs sm:text-sm font-bold text-cocoa-deep block mb-1">
            Cake Walk
          </span>
          <span className="text-[0.7rem] sm:text-xs text-muted block font-body">{item.name}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={item.image}
      alt={item.name}
      className={`object-cover ${className}`}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      onError={handleError}
      // Fallback placeholder if the image doesn't load
      style={{
        backgroundImage: `url("${placeholderSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
