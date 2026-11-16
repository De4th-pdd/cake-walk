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
  title: 'Cake Walk by Aysha | Premium Bakery & Churros in DHA Phase 8 Lahore',
  description:
    'Experience Lahore’s favourite handcrafted churros, celebration cakes, Lotus tres leches, molten lava cakes and artisan desserts by Aysha Salman in DHA Phase 8.',
  keywords: [
    'Cake Walk',
    'Cake Walk by Aysha',
    'Churros Lahore',
    'Best Churros in Pakistan',
    'Bakery DHA Phase 8 Lahore',
    'Custom Birthday Cakes Lahore',
    'Desserts Lahore',
    'Lotus Tres Leches Lahore',
    'Aysha Salman bakery',
  ],
  authors: [{ name: 'Aysha Salman', url: business.instagramUrl }],
  creator: 'Cake Walk by Aysha',
  publisher: 'Cake Walk by Aysha',
  metadataBase: new URL('https://cakewalk.com.pk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cake Walk by Aysha | The Churros You Came For. The Cakes You’ll Come Back For.',
    description:
      'Handcrafted churros, bespoke celebration cakes, and artisan bakery desserts in DHA Phase 8, Lahore. Order for delivery or takeaway via WhatsApp.',
    url: 'https://cakewalk.com.pk',
    siteName: 'Cake Walk by Aysha',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cake Walk by Aysha | Bakery & Churros Lahore',
    description:
      'Handcrafted churros and signature celebration cakes in DHA Phase 8, Lahore by Aysha Salman.',
  },
  robots: {
    index: true,
    follow: true,
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
      'Artisanal bakery and dessert cafe famous for churros, custom celebration cakes, Lotus tres leches, and handcrafted sweets in Lahore.',
    image: 'https://cakewalk.com.pk/images/hero-banner.webp',
    founder: {
      '@type': 'Person',
      name: 'Aysha Salman',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '96 Q Street 10, Block Q, Ex Air Avenue',
      addressLocality: 'DHA Phase 8, Lahore',
      addressRegion: 'Punjab',
      postalCode: '54000',
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
        closes: '24:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/cakewalkbyaysha/',
      'https://www.facebook.com/cakewalkbyaysha',
      'https://restaurantguru.com/Cake-Walk-DHA-Phase-8-Lahore',
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased selection:bg-purple-200 selection:text-purple-950">
        <LocationProvider>
          <CartProvider>{children}</CartProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
