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
        className={`product-placeholder ${className}`}
        role="img"
        aria-label={item.name}
      >
        <div className="text-center p-4">
          <span className="text-4xl block mb-2">
            {item.category === 'churros' ? '🥨' :
             item.category === 'cakes' ? '🎂' :
             item.category === 'cupcakes' ? '🧁' :
             item.category === 'cookies' ? '🍪' :
             item.category === 'beverages' ? '☕' : '⭐'}
          </span>
          <span className="text-sm font-display text-muted">{item.name}</span>
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
