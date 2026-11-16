'use client';

import { useState } from 'react';
import type { MenuItem } from '@/data/menu';
import { formatPrice } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import ProductImage from './ProductImage';

interface ProductDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ProductDetailModal({ item, onClose }: ProductDetailModalProps) {
  const { addItem, items } = useCart();
  const [localQty, setLocalQty] = useState(1);
  const [specialNote, setSpecialNote] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!item) return null;

  const existingInCart = items.find((i) => i.product.id === item.id);

  const handleAddToCart = () => {
    // Add item by localQty
    for (let i = 0; i < localQty; i++) {
      addItem(item);
    }
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-cocoa-deep/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-detail-title"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-border/80 overflow-hidden z-10 animate-fade-in-up my-8"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-cocoa flex items-center justify-center shadow-md transition-colors text-base font-bold z-20"
          aria-label="Close product view"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-cream-dark overflow-hidden">
            <ProductImage
              item={item}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block bg-purple-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {item.category}
              </span>
            </div>
          </div>

          {/* Details & Controls */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-purple-700">
                  Cake Walk Artisan
                </span>
                <span className="text-xs text-muted">· Freshly Prepared</span>
              </div>

              <h2
                id="product-detail-title"
                className="font-display text-2xl sm:text-3xl text-cocoa-deep font-bold mb-3 leading-tight"
              >
                {item.name}
              </h2>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-2xl text-purple-900 font-extrabold">
                  {formatPrice(item.price, item.isFromPrice)}
                </span>
                {item.isFromPrice && (
                  <span className="text-xs text-muted italic">
                    (Starting price based on standard size)
                  </span>
                )}
              </div>

              <p className="text-muted text-sm font-body leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Special instructions */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                  Special Notes for Baker (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Extra cinnamon, message card, less sweet..."
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border text-xs text-cocoa placeholder:text-muted/60 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-200"
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-border space-y-3">
              {/* Quantity selector */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cocoa">
                  Quantity
                </span>
                <div className="flex items-center gap-3 bg-cream px-3 py-1.5 rounded-xl border border-border">
                  <button
                    type="button"
                    onClick={() => setLocalQty(Math.max(1, localQty - 1))}
                    className="w-7 h-7 rounded-lg bg-white text-cocoa font-bold flex items-center justify-center hover:bg-cream-dark transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="font-body font-bold text-sm text-cocoa-deep w-6 text-center">
                    {localQty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLocalQty(localQty + 1)}
                    className="w-7 h-7 rounded-lg bg-white text-cocoa font-bold flex items-center justify-center hover:bg-cream-dark transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 ${
                  addedAnimation
                    ? 'bg-emerald-600 text-white scale-[0.98]'
                    : 'bg-purple-900 hover:bg-purple-800 text-white'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <span>✓</span> Added to Cart!
                  </>
                ) : (
                  <>
                    <span>+</span> Add {localQty} to Cart · Rs. {(item.price * localQty).toLocaleString('en-PK')}
                  </>
                )}
              </button>

              {existingInCart && (
                <p className="text-center text-[0.7rem] text-purple-700 font-medium">
                  Currently {existingInCart.quantity} in your cart
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
