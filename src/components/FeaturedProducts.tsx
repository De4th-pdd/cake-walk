'use client';

import { useState } from 'react';
import { featuredItems, formatPrice, type MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import ProductImage from './ProductImage';
import ProductDetailModal from './ProductDetailModal';

export default function FeaturedProducts() {
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  return (
    <>
      <section id="featured" className="section-padding bg-white texture-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-block text-purple-700 text-xs sm:text-sm uppercase tracking-[0.25em] font-body font-bold mb-3">
              House Specialties · Lahore Favourite
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cocoa-deep mb-4 font-bold">
              The Signatures You Came For
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto font-body mb-4">
              Our most celebrated creations that established Cake Walk as Lahore&apos;s destination for crispy cinnamon churros and decadent artisan cakes.
            </p>
            <div className="divider-ornament max-w-xs mx-auto">
              <span className="text-purple-600 text-lg">✦</span>
            </div>
          </div>

          {/* Featured grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredItems.map((item, index) => (
              <article
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-border/80 flex flex-col justify-between"
              >
                <div>
                  {/* Image with quick view click */}
                  <div
                    onClick={() => setSelectedProduct(item)}
                    className="relative aspect-[4/3] overflow-hidden bg-cream-dark/60 cursor-pointer"
                  >
                    <ProductImage
                      item={item}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index < 3}
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-purple-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {item.category === 'churros' ? 'Signature Churros' :
                         item.category === 'cakes' ? 'Signature Cake' :
                         'Specialty'}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-cocoa-deep/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/95 text-cocoa-deep text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        Quick View
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      onClick={() => setSelectedProduct(item)}
                      className="font-display text-xl font-bold text-cocoa-deep mb-2 group-hover:text-purple-800 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h3>
                    <p className="text-muted text-sm mb-4 line-clamp-2 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-border/40 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] uppercase tracking-wider text-muted font-bold">
                      {item.isFromPrice ? 'Starting from' : 'Price'}
                    </span>
                    <span className="font-display text-xl text-purple-900 font-extrabold">
                      {formatPrice(item.price, item.isFromPrice)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(item)}
                      className="text-xs text-purple-800 hover:underline font-bold px-2 py-1"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      onClick={() => addItem(item)}
                      className="bg-purple-900 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-purple-800 transition-all shadow-sm hover:shadow flex items-center gap-1.5"
                      aria-label={`Add ${item.name} to cart`}
                    >
                      <span>+</span> Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
