'use client';

import { useCart } from '@/context/CartContext';
import { useLocation } from '@/context/LocationContext';
import { formatPrice } from '@/data/menu';
import { useEffect, useRef } from 'react';
import ProductImage from './ProductImage';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    subtotal,
    clearCart,
  } = useCart();

  const {
    orderType,
    area,
    pickupDate,
    openLocationModal,
  } = useLocation();

  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeCart();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeCart]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isOpen]);

  const scrollToCheckout = () => {
    closeCart();
    setTimeout(() => {
      document.querySelector('#checkout')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  if (!isOpen) return null;

  const fulfillmentSummary =
    orderType === 'delivery'
      ? `🚗 Delivery to ${area || 'Lahore'}`
      : `🏪 Pickup from DHA Phase 8 (${pickupDate || 'Today'})`;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cocoa-deep/60 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl animate-slide-in-right flex flex-col z-10"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border bg-cream-light/60">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <h2 className="font-display text-xl text-cocoa-deep font-bold">
                Your Cart
                {totalItems > 0 && (
                  <span className="text-xs font-body text-purple-800 ml-2 font-semibold">
                    ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                  </span>
                )}
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="w-8 h-8 rounded-full hover:bg-cream text-muted flex items-center justify-center transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Active Fulfilment Pill */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-50 border border-purple-200/80 text-xs">
            <span className="text-purple-900 font-semibold truncate max-w-[240px]">
              {fulfillmentSummary}
            </span>
            <button
              type="button"
              onClick={() => {
                closeCart();
                openLocationModal();
              }}
              className="text-purple-800 font-bold underline hover:text-purple-950 text-[0.7rem]"
            >
              Change
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <span className="text-5xl mb-4">🧁</span>
              <h3 className="font-display text-lg text-cocoa font-bold mb-2">Your cart is empty</h3>
              <p className="text-muted text-sm font-body mb-6">
                Discover our fresh churros, signature cakes, and handcrafted desserts!
              </p>
              <button
                onClick={() => {
                  closeCart();
                  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary text-xs py-2.5 px-6 bg-purple-900 text-white rounded-full font-bold"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border/60">
              {items.map((cartItem) => (
                <li key={cartItem.product.id} className="p-4 sm:px-6 hover:bg-cream-light/40 transition-colors">
                  <div className="flex gap-3.5 items-center">
                    {/* Item Thumbnail */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-cream-dark flex-shrink-0 border border-border">
                      <ProductImage
                        item={cartItem.product}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm font-bold text-cocoa-deep truncate">
                        {cartItem.product.name}
                      </h4>
                      <p className="text-xs text-muted font-body mb-1">
                        {formatPrice(cartItem.product.price, cartItem.product.isFromPrice)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              cartItem.product.id,
                              cartItem.quantity - 1
                            )
                          }
                          className="w-6 h-6 rounded-md border border-border text-cocoa flex items-center justify-center hover:bg-cream transition-colors text-xs font-bold"
                          aria-label={`Decrease ${cartItem.product.name} quantity`}
                        >
                          −
                        </button>
                        <span className="w-5 text-center font-body font-bold text-xs text-cocoa">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              cartItem.product.id,
                              cartItem.quantity + 1
                            )
                          }
                          className="w-6 h-6 rounded-md border border-border text-cocoa flex items-center justify-center hover:bg-cream transition-colors text-xs font-bold"
                          aria-label={`Increase ${cartItem.product.name} quantity`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Line Total & Remove */}
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-sm font-extrabold text-purple-900 font-display">
                        Rs. {(cartItem.product.price * cartItem.quantity).toLocaleString('en-PK')}
                      </span>
                      <button
                        onClick={() => removeItem(cartItem.product.id)}
                        className="text-[0.7rem] text-rose-600 hover:text-red-700 transition-colors underline"
                        aria-label={`Remove ${cartItem.product.name} from cart`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 bg-cream-light/80 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-bold text-cocoa-deep">
                {items.some((i) => i.product.isFromPrice) ? 'Estimated Starting Subtotal' : 'Estimated Subtotal'}
              </span>
              <span className="font-display text-xl text-purple-900 font-extrabold">
                {items.some((i) => i.product.isFromPrice) ? 'from ' : ''}Rs. {subtotal.toLocaleString('en-PK')}
              </span>
            </div>

            <p className="text-[0.7rem] text-muted font-body leading-tight">
              Taxes and delivery fee (if applicable) confirmed with Cake Walk upon order handoff on WhatsApp.
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={scrollToCheckout}
                className="w-full py-3.5 px-6 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all text-center"
              >
                Proceed to Checkout →
              </button>
              <button
                onClick={clearCart}
                className="text-xs text-muted hover:text-red-600 transition-colors py-1 text-center"
              >
                Clear Entire Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
