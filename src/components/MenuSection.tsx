'use client';

import { useState, useMemo } from 'react';
import { menuItems, categories, formatPrice, type MenuCategory, type MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import ProductImage from './ProductImage';
import ProductDetailModal from './ProductDetailModal';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const { addItem } = useCart();

  const filteredItems = useMemo(() => {
    let items = menuItems;

    if (activeCategory !== 'all') {
      items = items.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    return items;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <section id="menu" className="section-padding bg-cream-light scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="inline-block text-purple-700 text-xs sm:text-sm uppercase tracking-[0.25em] font-body font-bold mb-2">
              Fresh From Our DHA Phase 8 Studio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cocoa-deep mb-3 font-bold">
              Artisan Bakery Menu
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto font-body mb-6">
              Handcrafted in small batches daily using pure dairy cream, Belgian chocolates, and freshly fried cinnamon churro dough.
            </p>
            <div className="divider-ornament max-w-xs mx-auto mb-8">
              <span className="text-purple-600 text-lg">✦</span>
            </div>

            {/* Search Input */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search churros, cakes, Lotus, cookies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 rounded-full bg-white border border-border text-cocoa placeholder:text-muted/60 focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200 transition-all font-body text-sm shadow-sm"
                  aria-label="Search menu items"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-cream text-muted transition-colors"
                    aria-label="Clear search"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-purple-900 text-white shadow-md scale-[1.02]'
                  : 'bg-white text-cocoa hover:bg-cream border border-border/80'
              }`}
            >
              All Items ({menuItems.length})
            </button>
            {categories.map((cat) => {
              const count = menuItems.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? 'bg-purple-900 text-white shadow-md scale-[1.02]'
                      : 'bg-white text-cocoa hover:bg-cream border border-border/80'
                  }`}
                >
                  <span>{cat.emoji}</span>
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Product grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-border p-8 max-w-lg mx-auto">
              <span className="text-5xl mb-4 block">🔍</span>
              <h3 className="font-display text-xl text-cocoa font-bold mb-2">No treats found</h3>
              <p className="text-muted font-body text-sm mb-4">
                We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;. Try another dessert name or browse our categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="btn-primary text-xs py-2 px-5 bg-purple-900 text-white rounded-full font-bold"
              >
                View Full Menu
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-border/70 flex flex-col justify-between"
                >
                  <div>
                    {/* Clickable Image Container */}
                    <div
                      onClick={() => setSelectedProduct(item)}
                      className="relative aspect-square overflow-hidden bg-cream-dark/50 cursor-pointer"
                    >
                      <ProductImage
                        item={item}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Category Tag */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-block bg-white/95 backdrop-blur-sm text-cocoa text-[0.65rem] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* Quick view hint pill */}
                      <div className="absolute inset-0 bg-cocoa-deep/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-cocoa-deep text-xs font-bold px-3 py-1.5 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          🔍 Quick View
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5">
                      <h3
                        onClick={() => setSelectedProduct(item)}
                        className="font-display text-base font-bold text-cocoa-deep mb-1 group-hover:text-purple-800 transition-colors cursor-pointer leading-snug"
                      >
                        {item.name}
                      </h3>
                      <p className="text-muted text-xs mb-3 line-clamp-2 font-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="p-4 sm:p-5 pt-0 border-t border-border/40 mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[0.65rem] uppercase tracking-wider text-muted font-bold">
                        {item.isFromPrice ? 'Starting from' : 'Price'}
                      </span>
                      <span className="font-display text-sm sm:text-base font-extrabold text-purple-900">
                        {formatPrice(item.price, item.isFromPrice)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(item)}
                        className="p-2 rounded-xl text-muted hover:text-purple-800 hover:bg-cream transition-colors text-xs font-semibold"
                        title="View details & add custom notes"
                      >
                        Details
                      </button>
                      <button
                        type="button"
                        onClick={() => addItem(item)}
                        className="px-3.5 py-2 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all flex items-center gap-1"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <span>+</span> Add
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Results count & disclaimer */}
          <div className="mt-10 text-center space-y-2">
            <p className="text-xs text-muted font-body">
              Showing {filteredItems.length} of {menuItems.length} handcrafted items
            </p>
            <p className="text-[0.7rem] text-muted/70 max-w-md mx-auto">
              Prices and availability reflect public Foodpanda snapshot. Final order amount and delivery charges will be confirmed directly with Cake Walk on WhatsApp.
            </p>
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
