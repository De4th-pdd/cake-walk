// Cake Walk by Aysha — Business information
// Source: Public listings, Instagram, RestaurantGuru

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
  facebookUrl: 'https://www.facebook.com/cakewalkbyaysha',

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
    'https://www.google.com/maps/search/?api=1&query=96+Q+Street+10+DHA+Phase+8+Ex+Air+Avenue+Block+Q+Lahore+Punjab+Pakistan',

  hours: {
    weekday: { days: 'Monday – Thursday', time: '1:00 PM – 11:00 PM' },
    weekend: { days: 'Friday – Sunday', time: '1:00 PM – 12:00 AM' },
  },

  services: ['Delivery', 'Takeaway / Pickup'],

  // Approximate rating from RestaurantGuru. Exact figure should be confirmed.
  rating: {
    score: 4.3,
    platform: 'Google',
    note: 'Rating approximate; verify current figure from original platform before displaying a count.',
  },

  about: {
    // Only verified facts from public sources
    founderBackground:
      'Aysha Salman holds a Master\'s degree in Interior Design and spent over a decade teaching before turning her passion for baking into Cake Walk.',
    origin:
      'What started as baking birthday cakes for friends and family grew organically through word-of-mouth into a beloved Lahore bakery and café.',
    knownFor: 'Churros, custom celebration cakes, and handcrafted desserts.',
    mission:
      'Alongside running Cake Walk, Aysha trains aspiring bakers and women entrepreneurs, sharing both culinary skills and business knowledge.',
  },
} as const;
