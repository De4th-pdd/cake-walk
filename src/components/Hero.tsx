'use client';

import { useLocation } from '@/context/LocationContext';
import { menuItems } from '@/data/menu';

export default function Hero() {
  const { openLocationModal, getFormattedLocationString } = useLocation();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16"
    >
      {/* Background with real signature spread */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50 contrast-110 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/hero-banner.webp')`,
            backgroundColor: '#1b120c',
          }}
        />
        {/* Refined gradient overlay combining chocolate and royal purple */}
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep via-cocoa-deep/80 to-purple-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Location selector banner pill */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <button
            type="button"
            onClick={openLocationModal}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-purple-200 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-lg hover:scale-105"
          >
            <span>📍</span>
            <span>{getFormattedLocationString()}</span>
            <span className="text-[0.65rem] bg-purple-700 text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
              Change
            </span>
          </button>
        </div>

        {/* Main heading */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold !text-white mb-6 leading-[1.1] animate-fade-in-up drop-shadow-md"
          style={{ animationDelay: '0.2s', color: '#ffffff' }}
        >
          The Churros You{' '}
          <span className="italic text-purple-300">Came For.</span>
          <br />
          The Cakes You&apos;ll{' '}
          <span className="italic text-purple-300">Come Back For.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Handcrafted fluted churros, custom milestone cakes, and artisan bakery desserts baked with passion in Lahore by Aysha Salman.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up max-w-md mx-auto sm:max-w-none"
          style={{ animationDelay: '0.6s' }}
        >
          <button
            onClick={() => scrollTo('#menu')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 border border-purple-400/30"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Explore Menu ({menuItems.length} Items)
          </button>

          <a
            href="https://wa.me/923217805555"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
