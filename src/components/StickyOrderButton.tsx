'use client';

import { useCart } from '@/context/CartContext';

export default function StickyOrderButton() {
  const { totalItems, toggleCart, subtotal } = useCart();

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
      <button
        onClick={toggleCart}
        className="group relative flex items-center gap-3 bg-purple-900 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:bg-purple-800 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-purple-400/40"
        aria-label="View shopping cart and proceed to order"
      >
        <div className="relative">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-400 text-cocoa-deep text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
              {totalItems}
            </span>
          )}
        </div>

        <div className="flex flex-col text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-200 leading-tight">
            {totalItems > 0 ? `${totalItems} ${totalItems === 1 ? 'Treat' : 'Treats'}` : 'Start Order'}
          </span>
          <span className="text-sm font-bold leading-tight font-display text-white">
            {totalItems > 0 ? `Rs. ${subtotal.toLocaleString('en-PK')}` : 'Cart'}
          </span>
        </div>

        <span className="text-lg group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>
    </div>
  );
}
