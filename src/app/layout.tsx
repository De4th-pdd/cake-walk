import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { LocationProvider } from '@/context/LocationContext';
import { business } from '@/data/business';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cake Walk by Aysha | Handcrafted Churros & Cakes — DHA Phase 8 Lahore',
  description:
    'Handcrafted churros, signature celebration cakes, Lotus tres leches, molten lava cakes and artisan desserts by Aysha Salman in DHA Phase 8, Lahore.',
  keywords: [
    'Cake Walk',
    'Cake Walk by Aysha',
    'Churros Lahore',
    'Bakery DHA Phase 8 Lahore',
    'Custom Celebration Cakes Lahore',
    'Desserts Lahore',
    'Lotus Tres Leches Lahore',
    'Aysha Salman bakery',
  ],
  authors: [{ name: 'Aysha Salman', url: business.instagramUrl }],
  creator: 'Cake Walk by Aysha',
  publisher: 'Cake Walk by Aysha',
  metadataBase: new URL('https://cake-walk-iota.vercel.app'),
  // Canonical tag intentionally omitted for concept preview to avoid conflicting with cakewalk.com.pk
  openGraph: {
    title: 'Cake Walk by Aysha | Handcrafted Churros & Signature Cakes',
    description:
      'Handcrafted churros, bespoke celebration cakes, and artisan bakery desserts in DHA Phase 8, Lahore. Order for delivery or takeaway via WhatsApp.',
    url: 'https://cake-walk-iota.vercel.app',
    siteName: 'Cake Walk by Aysha',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: '/images/hero-banner.webp',
        width: 1200,
        height: 800,
        alt: 'Cake Walk by Aysha Signature Display',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cake Walk by Aysha | Bakery & Churros Lahore',
    description:
      'Handcrafted churros and signature celebration cakes in DHA Phase 8, Lahore by Aysha Salman.',
    images: ['/images/hero-banner.webp'],
  },
  // Set to noindex, nofollow for redesign concept preview
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Cake Walk by Aysha',
    alternateName: 'Cake Walk',
    description:
      'Bakery and dessert boutique known for fresh churros, signature cakes, Lotus tres leches, and handcrafted sweets in DHA Phase 8, Lahore.',
    image: 'https://cake-walk-iota.vercel.app/images/hero-banner.webp',
    founder: {
      '@type': 'Person',
      name: 'Aysha Salman',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '96 Q Street 10, Block Q, Ex Air Avenue',
      addressLocality: 'DHA Phase 8, Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.5032807,
      longitude: 74.4460708,
    },
    telephone: '+923217805555',
    servesCuisine: 'Bakery, Churros, Desserts, Cakes',
    priceRange: 'PKR 125 - 3250',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '13:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
        opens: '13:00',
        closes: '00:00',
      },
    ],
    sameAs: [
      business.instagramUrl,
      business.facebookUrl,
      business.rating.restaurantGuru.url,
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-cream text-cocoa selection:bg-purple-200 selection:text-purple-900">
        <LocationProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
