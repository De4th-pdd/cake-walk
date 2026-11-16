// Cake Walk by Aysha — Product catalogue
// Sourced from official Foodpanda listing (Verified public catalogue: 24 items)
// NOTE: Prices and availability should be confirmed by Cake Walk before the website goes live.

export type MenuCategory =
  | 'churros'
  | 'cakes'
  | 'specialties'
  | 'cookies'
  | 'cupcakes'
  | 'beverages';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  isFromPrice: boolean;
  category: MenuCategory;
  image: string;
  featured?: boolean;
  inStock?: boolean;
}

export const categories: { id: MenuCategory; label: string; emoji: string }[] = [
  { id: 'churros', label: 'Churros', emoji: '🥨' },
  { id: 'cakes', label: 'Cakes', emoji: '🎂' },
  { id: 'specialties', label: 'Our Specialties', emoji: '⭐' },
  { id: 'cookies', label: 'Cookies', emoji: '🍪' },
  { id: 'cupcakes', label: 'Cupcakes', emoji: '🧁' },
  { id: 'beverages', label: 'Beverages', emoji: '☕' },
];

export const menuItems: MenuItem[] = [
  // ── CHURROS (4 items) ──
  {
    id: 1,
    name: 'Classic Churros',
    description: 'Five churro sticks rolled in cinnamon sugar.',
    price: 650,
    isFromPrice: true,
    category: 'churros',
    image: '/images/products/classic-churros.webp',
    featured: true,
    inStock: true,
  },
  {
    id: 2,
    name: 'Loaded Churros',
    description: 'Five churro sticks with chocolate and caramel drizzle, crushed Oreos and cream.',
    price: 1090,
    isFromPrice: true,
    category: 'churros',
    image: '/images/products/loaded-churros.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 3,
    name: 'Churro Waffle',
    description: 'Crispy waffle with classic churro flavour and cinnamon sugar.',
    price: 599,
    isFromPrice: true, // FROM Rs. 599 as per verified audit
    category: 'churros',
    image: '/images/products/churro-waffle.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 4,
    name: 'Churros Platter',
    description: 'Seven churro sticks, a churro cup filled with hot chocolate and salted caramel dip.',
    price: 1350,
    isFromPrice: true,
    category: 'churros',
    image: '/images/products/churros-platter.webp',
    featured: true,
    inStock: true,
  },

  // ── CAKES (3 items) ──
  {
    id: 5,
    name: 'Chocochino Cake',
    description: 'Chocolate, coffee and caramel with chocolate chunks.',
    price: 2990,
    isFromPrice: true,
    category: 'cakes',
    image: '/images/products/chocochino-cake.webp',
    featured: true,
    inStock: true,
  },
  {
    id: 6,
    name: 'Double Chocolate Fudge Cake',
    description: 'Chocolate cake loaded with chocolate chunks.',
    price: 3250,
    isFromPrice: true,
    category: 'cakes',
    image: '/images/products/double-chocolate-fudge-cake.webp',
    featured: true,
    inStock: true,
  },
  {
    id: 7,
    name: 'Vanilla Caramel Crunch Cake',
    description: 'Vanilla chiffon sponge, caramel frosting and caramel crunch.',
    price: 2550,
    isFromPrice: true,
    category: 'cakes',
    image: '/images/products/vanilla-caramel-crunch-cake.webp',
    featured: false,
    inStock: true,
  },

  // ── OUR SPECIALTIES (8 items) ──
  {
    id: 8,
    name: 'Lotus Tres Leches',
    description: 'Sponge soaked in three milks, with Lotus spread and cream cheese frosting.',
    price: 1150,
    isFromPrice: false, // Fixed Rs. 1,150
    category: 'specialties',
    image: '/images/products/lotus-tres-leches.webp',
    featured: true,
    inStock: true,
  },
  {
    id: 9,
    name: 'New York Cheesecake',
    description: 'Creamy cheesecake on a buttery graham cracker crust.',
    price: 950,
    isFromPrice: true,
    category: 'specialties',
    image: '/images/products/ny-cheesecake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 10,
    name: 'Molten Lava Cake',
    description: 'Warm chocolate cake with a gooey centre.',
    price: 650,
    isFromPrice: false,
    category: 'specialties', // Moved into Our Specialties as per audit
    image: '/images/products/molten-lava-cake.webp',
    featured: true,
    inStock: true,
  },
  {
    id: 11,
    name: 'Chocolate Fudge Brownie',
    description: 'Rich chocolate fudge brownie.',
    price: 425,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/chocolate-fudge-brownie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 12,
    name: 'Walnut Chocolate Fudge Brownie',
    description: 'Chocolate brownie with toasted walnuts.',
    price: 450,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/walnut-brownie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 13,
    name: 'Lemon Tart — one bite',
    description: 'Lemon curd in a buttery tart shell.',
    price: 125,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/lemon-tart.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 14,
    name: 'Apple Pie',
    description: 'Cinnamon-spiced apple filling in a flaky crust.',
    price: 480,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/apple-pie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 15,
    name: 'Banana Bread',
    description: 'Freshly baked homemade banana bread loaf.',
    price: 750,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/banana-bread.webp',
    featured: false,
    inStock: true,
  },

  // ── COOKIES (2 items) ──
  {
    id: 16,
    name: 'Chocolate Chip Cookie',
    description: 'Classic chocolate chip cookie with chocolate chunks.',
    price: 290,
    isFromPrice: false,
    category: 'cookies',
    image: '/images/products/chocolate-chip-cookie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 17,
    name: 'Dark Chocolate Cookie',
    description: 'Rich dark chocolate cookie.',
    price: 290,
    isFromPrice: false,
    category: 'cookies',
    image: '/images/products/dark-chocolate-cookie.webp',
    featured: false,
    inStock: true,
  },

  // ── CUPCAKES (5 items) ──
  {
    id: 18,
    name: 'Lotus Biscoff Cupcake',
    description: 'Cupcake with Lotus Biscoff swirl and biscuit crumb.',
    price: 490,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/lotus-biscoff-cupcake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 19,
    name: 'Nutella Cupcake',
    description: 'Moist chocolate cupcake with hazelnut Nutella frosting.',
    price: 490,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/nutella-cupcake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 20,
    name: 'Chocolate Fudge Cupcake',
    description: 'Rich cocoa cupcake with chocolate fudge ganache.',
    price: 390,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/chocolate-fudge-cupcake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 21,
    name: 'Oreo Cookies n Cream Cupcake',
    description: 'Dark cupcake with Oreo cookies and cream frosting.',
    price: 390,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/oreo-cupcake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 22,
    name: 'Red Velvet Cupcake',
    description: 'Classic crimson red velvet cupcake with cream cheese frosting.',
    price: 390,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/red-velvet-cupcake.webp',
    featured: false,
    inStock: true,
  },

  // ── BEVERAGES (2 items) ──
  {
    id: 23,
    name: 'Hot Chocolate',
    description: 'Velvety melted chocolate steamed with milk, topped with mini marshmallows.',
    price: 825,
    isFromPrice: false,
    category: 'beverages',
    image: '/images/products/hot-chocolate.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 24,
    name: 'Karak Chai',
    description: 'Slow-brewed spiced tea with evaporated milk and crushed cardamom.',
    price: 350,
    isFromPrice: false,
    category: 'beverages',
    image: '/images/products/karak-chai.webp',
    featured: false,
    inStock: true,
  },
];

// Preserved separate data for unconfirmed items (not active in public catalogue)
export const unconfirmedItems = [
  {
    id: 101,
    name: 'Cadbury Malt',
    category: 'cakes',
    price: 2850,
    isFromPrice: true,
    status: 'Pending availability confirmation by Cake Walk',
  },
  {
    id: 102,
    name: 'Red Velvet Cookie',
    category: 'cookies',
    price: 290,
    isFromPrice: false,
    status: 'Pending availability confirmation by Cake Walk',
  },
  {
    id: 103,
    name: 'Butterscotch Cookie',
    category: 'cookies',
    price: 290,
    isFromPrice: false,
    status: 'Pending availability confirmation by Cake Walk',
  },
];

export const featuredItems = menuItems.filter((item) => item.featured);

/**
 * Returns formatted price string.
 * Example: `from Rs. 650` (if isFromPrice) or `Rs. 1,150` (fixed price).
 * Ensures no duplicate "from from" prefixes occur.
 */
export function formatPrice(price: number, isFromPrice: boolean = false): string {
  const formatted = `Rs. ${price.toLocaleString('en-PK')}`;
  return isFromPrice ? `from ${formatted}` : formatted;
}
