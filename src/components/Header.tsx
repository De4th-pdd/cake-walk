'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useLocation } from '@/context/LocationContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Custom Cakes', href: '#custom-cakes' },
  { label: 'Our Story', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#visit' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const {
    orderType,
    area,
    pickupDate,
    openLocationModal,
  } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const locationDisplayText =
    orderType === 'delivery'
      ? `🚗 Delivery · ${area || 'Lahore'}`
      : `🏪 Pickup · DHA Phase 8 (${pickupDate || 'Today'})`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-cocoa-deep/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2 group flex-shrink-0"
            >
              <div className="flex flex-col">
                <span
                  className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-cocoa-deep' : 'text-white'
                  }`}
                >
                  Cake Walk
                </span>
                <span
                  className={`text-[0.65rem] uppercase tracking-[0.25em] font-body font-semibold -mt-1 transition-colors duration-300 ${
                    isScrolled ? 'text-purple-700' : 'text-purple-300'
                  }`}
                >
                  by Aysha
                </span>
              </div>
            </a>

            {/* Layers-Style Location Selector Pill (Desktop) */}
            <button
              type="button"
              onClick={openLocationModal}
              className={`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isScrolled
                  ? 'bg-cream text-cocoa-deep border-border hover:bg-cream-dark/80'
                  : 'bg-white/10 text-white/95 border-white/20 hover:bg-white/20'
              }`}
              title="Click to change your delivery location or switch to pickup"
            >
              <span className="truncate max-w-[220px]">{locationDisplayText}</span>
              <span className={`text-[0.7rem] underline font-semibold ${isScrolled ? 'text-purple-800' : 'text-purple-300'}`}>
                Change
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-purple-600 ${
                    isScrolled ? 'text-cocoa' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions: Cart + Order CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={toggleCart}
                className={`relative p-2 rounded-xl transition-colors duration-200 flex items-center gap-2 ${
                  isScrolled
                    ? 'text-cocoa hover:bg-cream'
                    : 'text-white/90 hover:bg-white/10'
                }`}
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <div className="relative">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-2 bg-purple-700 text-white text-[0.65rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold hidden md:inline">Cart</span>
              </button>

              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#menu');
                }}
                className="btn-primary text-xs py-2 px-5 bg-purple-900 hover:bg-purple-800 text-white rounded-full font-bold shadow-sm"
              >
                Order Now
              </a>
            </div>

            {/* Mobile Nav: Location Button + Cart + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={openLocationModal}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1 ${
                  isScrolled ? 'text-purple-800 bg-purple-50' : 'text-purple-200 bg-white/10'
                }`}
                title="Change location"
              >
                <span>📍</span>
                <span className="hidden xs:inline truncate max-w-[80px]">
                  {orderType === 'delivery' ? area.split(' ')[0] : 'Pickup'}
                </span>
              </button>

              <button
                onClick={toggleCart}
                className={`relative p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-cocoa' : 'text-white'
                }`}
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-700 text-white text-[0.65rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-cocoa' : 'text-white'
                }`}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-cocoa-deep/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl animate-slide-in-right flex flex-col justify-between">
            <div className="pt-20 px-6 pb-6">
              {/* Active Location Card in Mobile Drawer */}
              <div className="p-3.5 mb-5 rounded-2xl bg-purple-50 border border-purple-200 text-xs">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-purple-800 block mb-1">
                  Active Fulfilment
                </span>
                <p className="font-semibold text-cocoa-deep truncate">{locationDisplayText}</p>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openLocationModal();
                  }}
                  className="mt-2 text-purple-700 font-bold underline text-xs"
                >
                  Change Location / Time →
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="py-3 px-4 text-cocoa font-medium text-base rounded-xl hover:bg-cream transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-border bg-cream-light">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#menu');
                }}
                className="w-full py-3 px-4 bg-purple-900 text-white rounded-xl font-bold text-center block shadow-md"
              >
                Order Online
              </a>
              <p className="text-[0.7rem] text-center text-muted mt-3">
                📍 96 Q Street 10, DHA Phase 8, Lahore
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
