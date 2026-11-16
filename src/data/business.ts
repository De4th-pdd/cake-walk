// Cake Walk by Aysha — Business Information
// Sourced from official public listings: Instagram (@cakewalkbyaysha), Foodpanda, RestaurantGuru
// All unverified claims and unofficial stories have been removed.

export interface BakeryBranch {
  id: string;
  name: string;
  address: string;
  shortAddress: string;
  isDefault: boolean;
  hours: {
    weekday: string;
    weekend: string;
  };
}

export const business = {
  name: 'Cake Walk',
  tagline: 'by Aysha',
  fullName: 'Cake Walk by Aysha',
  founder: 'Aysha Salman',

  phone: '+92 321 7805555',
  whatsapp: '923217805555',
  whatsappLink: 'https://wa.me/923217805555',

  instagram: 'cakewalkbyaysha',
  instagramUrl: 'https://www.instagram.com/cakewalkbyaysha/',
  // Official verified Facebook page:
  facebookUrl: 'https://www.facebook.com/cakewalkbyaysha',

  // Configurable branch data (currently 1 confirmed flagship branch in DHA Phase 8)
  branches: [
    {
      id: 'dha-phase-8',
      name: 'DHA Phase 8 Kitchen & Pickup',
      address: '96 Q Street 10, DHA Phase 8 – Ex Air Avenue, Block Q, Lahore, Punjab, Pakistan',
      shortAddress: 'DHA Phase 8 – Ex Air Avenue, Block Q, Lahore',
      isDefault: true,
      hours: {
        weekday: '1:00 PM – 11:00 PM (Mon–Thu)',
        weekend: '1:00 PM – 12:00 AM (Fri–Sun)',
      },
    },
  ] as BakeryBranch[],

  address: {
    full: '96 Q Street 10, DHA Phase 8 – Ex Air Avenue, Block Q, Lahore, Punjab, Pakistan',
    short: 'DHA Phase 8, Lahore',
    street: '96 Q Street 10',
    area: 'DHA Phase 8 – Ex Air Avenue, Block Q',
    city: 'Lahore',
    province: 'Punjab',
    country: 'Pakistan',
  },

  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Cake+Walk+DHA+Phase+8+Lahore',

  hours: {
    weekday: { days: 'Monday – Thursday', time: '1:00 PM – 11:00 PM' },
    weekend: { days: 'Friday – Sunday', time: '1:00 PM – 12:00 AM' },
  },

  services: ['Doorstep Delivery (Lahore)', 'Takeaway / Store Pickup (DHA Phase 8)'],

  // Public ratings from verified third-party listings
  rating: {
    google: {
      score: 4.3,
      platform: 'Google Reviews',
      url: 'https://www.google.com/maps/search/?api=1&query=Cake+Walk+DHA+Phase+8+Lahore',
      note: 'Verified public rating: 4.3/5. Exact count omitted due to varying public snapshots (79 to 91 reviews).',
    },
    facebook: {
      score: 4.9,
      platform: 'Facebook Reviews',
      url: 'https://www.facebook.com/cakewalkbyaysha/reviews',
    },
    restaurantGuru: {
      score: 4.0,
      platform: 'Restaurant Guru',
      url: 'https://restaurantguru.com/Cake-Walk-DHA-Phase-8-Lahore',
    },
  },

  about: {
    // Factual information supported by official profile and public listings
    intro:
      'Cake Walk by Aysha is an established bakery and dessert boutique based in DHA Phase 8, Lahore, founded by Aysha Salman.',
    specialty:
      'Known primarily for golden Spanish churros dusted with cinnamon sugar and served with rich dipping sauces, signature chocolate fudge and caramel cakes, and bespoke celebration cakes.',
    kitchen:
      'Operating out of Block Q, DHA Phase 8, Cake Walk offers both takeaway pickup and delivery coordination across Lahore via direct WhatsApp orders.',
  },
} as const;
