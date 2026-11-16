'use client';

import { business } from '@/data/business';

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-cream texture-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-purple-700 text-xs sm:text-sm uppercase tracking-[0.25em] font-body font-bold mb-3">
            Public Customer Ratings
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cocoa-deep mb-4 font-bold">
            Verified Reviews & Community Feedback
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl mx-auto font-body">
            Direct ratings from public listings for Cake Walk in DHA Phase 8, Lahore.
          </p>
          <div className="divider-ornament max-w-xs mx-auto mt-4">
            <span className="text-purple-600 text-lg">✦</span>
          </div>
        </div>

        {/* Rating cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Google Reviews */}
          <a
            href={business.rating.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-base font-bold text-cocoa-deep">Google Reviews</p>
                <p className="text-muted text-xs font-body">DHA Phase 8, Lahore</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display text-3xl text-cocoa-deep font-bold">
                {business.rating.google.score}
              </span>
              <div className="flex text-amber-400">
                {'★★★★'.split('').map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 70% 0 0)' }}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p className="text-xs text-purple-700 font-semibold group-hover:underline">
              View Google Listing & Reviews →
            </p>
          </a>

          {/* Facebook Reviews */}
          <a
            href={business.rating.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-base font-bold text-cocoa-deep">Facebook Community</p>
                <p className="text-muted text-xs font-body">Official Page</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display text-3xl text-cocoa-deep font-bold">
                {business.rating.facebook.score}
              </span>
              <div className="flex text-amber-400">
                {'★★★★★'.split('').map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-xs text-purple-700 font-semibold group-hover:underline">
              View Facebook Page & Feedback →
            </p>
          </a>

          {/* Restaurant Guru */}
          <a
            href={business.rating.restaurantGuru.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 group sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <span className="text-lg">🍽️</span>
              </div>
              <div>
                <p className="font-display text-base font-bold text-cocoa-deep">Restaurant Guru</p>
                <p className="text-muted text-xs font-body">Public Directory</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display text-3xl text-cocoa-deep font-bold">
                {business.rating.restaurantGuru.score}
              </span>
              <div className="flex text-amber-400">
                {'★★★★'.split('').map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-xs text-purple-700 font-semibold group-hover:underline">
              View Restaurant Guru Listing →
            </p>
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted/70 text-xs font-body mt-4 max-w-xl mx-auto">
          Ratings sourced from Google, Facebook, and Restaurant Guru public listings for Cake Walk in Lahore.
          Review counts are omitted due to differing live platform figures.
        </p>
      </div>
    </section>
  );
}
