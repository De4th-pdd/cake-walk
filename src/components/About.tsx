'use client';

import { business } from '@/data/business';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white texture-paper">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-cream-dark to-cream overflow-hidden relative">
              {/* Decorative background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-lavender/10 flex items-center justify-center mb-6">
                    <span className="text-6xl">👩‍🍳</span>
                  </div>
                  <h3 className="font-display text-2xl text-cocoa-deep mb-2">Aysha Salman</h3>
                  <p className="text-muted text-sm font-body">Founder & Head Baker</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-caramel/10 flex items-center justify-center">
                <span className="text-2xl">🥨</span>
              </div>
              <div className="absolute bottom-8 left-6 w-14 h-14 rounded-full bg-lavender/10 flex items-center justify-center">
                <span className="text-xl">🎂</span>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 sm:right-4 bg-cocoa-deep text-white px-6 py-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <span className="text-caramel-light text-xs uppercase tracking-wider font-body block">Known For</span>
                <span className="font-display text-lg mt-1 block">Churros & Cakes</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-caramel text-sm uppercase tracking-[0.25em] font-body font-semibold mb-3">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-cocoa-deep mb-6 leading-tight">
              From a Home Kitchen{' '}
              <br className="hidden sm:block" />
              <span className="italic text-caramel">to Lahore&apos;s Favourite</span>
            </h2>

            <div className="space-y-4 text-muted font-body leading-relaxed">
              <p>
                {business.about.founderBackground}
              </p>
              <p>
                {business.about.origin}
              </p>
              <p>
                Today, Cake Walk is known across Lahore for its handcrafted churros,
                signature celebration cakes, and a menu of artisan desserts that keep
                customers coming back.
              </p>
              <p className="text-caramel-dark font-medium italic border-l-2 border-caramel pl-4">
                &ldquo;{business.about.mission}&rdquo;
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @cakewalkbyaysha
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
