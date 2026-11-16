// Cake Walk by Aysha — Product catalogue
// Sourced from official Foodpanda listing (Latest snapshot: 27 items)
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
    description: 'Five fresh fluted churro sticks rolled generously in cinnamon sugar.',
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
    description: 'Five churro sticks drizzled with chocolate and caramel, crushed Oreos and cream.',
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
    description: 'Crispy golden waffle crafted from signature churro batter dusted with cinnamon sugar.',
    price: 599,
    isFromPrice: false,
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

  // ── CAKES (5 items) ──
  {
    id: 5,
    name: 'Chocochino',
    description: 'Rich chocolate, freshly brewed coffee and caramel infusion loaded with chocolate chunks.',
    price: 2990,
    isFromPrice: true,
    category: 'cakes',
    image: '/images/products/chocochino-cake.webp',
    featured: true,
    inStock: true,
  },
  {
    id: 6,
    name: 'Double Chocolate Fudge',
    description: 'Decadent multi-layered chocolate cake loaded with chocolate chunks and fudge ganache.',
    price: 3250,
    isFromPrice: true,
    category: 'cakes',
    image: '/images/products/double-chocolate-fudge-cake.webp',
    featured: true,
    inStock: true,
  },
  {
    id: 7,
    name: 'Vanilla Caramel Crunch',
    description: 'Airy vanilla chiffon sponge, smooth caramel frosting, salted caramel drip and honeycomb crunch.',
    price: 2550,
    isFromPrice: true,
    category: 'cakes',
    image: '/images/products/vanilla-caramel-crunch-cake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 8,
    name: 'Cadbury Malt',
    description: 'Rich malt-infused chocolate sponge layered with creamy Cadbury milk chocolate frosting.',
    price: 3250,
    isFromPrice: true,
    category: 'cakes',
    image: '/images/products/cadbury-malt.webp',
    featured: true,
    inStock: true,
  },
  {
    id: 9,
    name: 'Molten Lava Cake',
    description: 'Warm dark chocolate cake with a luscious, gooey molten chocolate center.',
    price: 650,
    isFromPrice: false,
    category: 'cakes',
    image: '/images/products/molten-lava-cake.webp',
    featured: true,
    inStock: true,
  },

  // ── OUR SPECIALTIES (7 items) ──
  {
    id: 10,
    name: 'Tres Leches',
    description: 'Traditional sponge soaked in three rich milks, finished with Lotus Biscoff spread and whipped frosting.',
    price: 1150,
    isFromPrice: true,
    category: 'specialties',
    image: '/images/products/lotus-tres-leches.webp',
    featured: true,
    inStock: true,
  },
  {
    id: 11,
    name: 'New York Cheesecake',
    description: 'Dense, velvety baked cheesecake on a rich buttery graham cracker crust.',
    price: 950,
    isFromPrice: true,
    category: 'specialties',
    image: '/images/products/ny-cheesecake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 12,
    name: 'Chocolate Fudge Brownie',
    description: 'Thick, chewy dark chocolate fudge brownie with a delicate paper-thin shiny crinkle crust.',
    price: 425,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/chocolate-fudge-brownie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 13,
    name: 'Walnut Chocolate Brownie',
    description: 'Classic chocolate fudge brownie topped with generous toasted golden walnut halves.',
    price: 450,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/walnut-brownie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 14,
    name: 'Lemon and Chocolate Tart',
    description: 'One-bite buttery fluted tart shell filled with tangy lemon curd and rich chocolate accent.',
    price: 125,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/lemon-tart.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 15,
    name: 'Apple Pie',
    description: 'Flaky double-crusted pie packed with tender cinnamon-spiced apple filling.',
    price: 480,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/apple-pie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 16,
    name: 'Banana Bread',
    description: 'Freshly baked moist banana bread loaf packed with crushed walnuts and warm spices.',
    price: 750,
    isFromPrice: false,
    category: 'specialties',
    image: '/images/products/banana-bread.webp',
    featured: false,
    inStock: true,
  },

  // ── COOKIES (4 items) ──
  {
    id: 17,
    name: 'Chocolate Chip Cookie',
    description: 'NYC-style thick golden baked cookie studded with molten dark chocolate square chunks.',
    price: 290,
    isFromPrice: false,
    category: 'cookies',
    image: '/images/products/chocolate-chip-cookie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 18,
    name: 'Dark Chocolate Cookie',
    description: 'Intensely rich double-chocolate cookie crafted with premium dark cocoa and sea salt flakes.',
    price: 290,
    isFromPrice: false,
    category: 'cookies',
    image: '/images/products/dark-chocolate-cookie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 19,
    name: 'Red Velvet Cookie',
    description: 'Soft-baked vibrant red velvet cookie studded with white chocolate chips and cream cheese swirl.',
    price: 290,
    isFromPrice: false,
    category: 'cookies',
    image: '/images/products/red-velvet-cookie.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 20,
    name: 'Butterscotch Cookie',
    description: 'Chewy golden butter cookie loaded with sweet caramelized butterscotch morsels.',
    price: 290,
    isFromPrice: false,
    category: 'cookies',
    image: '/images/products/butterscotch-cookie.webp',
    featured: false,
    inStock: true,
  },

  // ── CUPCAKES (5 items) ──
  {
    id: 21,
    name: 'Lotus Biscoff Cupcake',
    description: 'Vanilla cupcake crowned with a swirl of Lotus Biscoff buttercream and biscuit crumb.',
    price: 490,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/lotus-biscoff-cupcake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 22,
    name: 'Nutella Cupcake',
    description: 'Moist chocolate sponge filled with hazelnut cream and topped with silky Nutella frosting.',
    price: 490,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/nutella-cupcake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 23,
    name: 'Chocolate Fudge Cupcake',
    description: 'Deep cocoa cupcake finished with whipped dark chocolate ganache and chocolate curls.',
    price: 390,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/chocolate-fudge-cupcake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 24,
    name: 'Oreo Cookies and Cream Cupcake',
    description: 'Dark cupcake crowned with whipped Oreo Chantilly cream and an Oreo cookie topper.',
    price: 390,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/oreo-cupcake.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 25,
    name: 'Red Velvet Cupcake',
    description: 'Classic crimson red velvet cake with creamy vanilla cream cheese frosting.',
    price: 390,
    isFromPrice: false,
    category: 'cupcakes',
    image: '/images/products/red-velvet-cupcake.webp',
    featured: false,
    inStock: true,
  },

  // ── BEVERAGES (2 items) ──
  {
    id: 26,
    name: 'Hot Chocolate',
    description: 'Velvety melted Belgian chocolate steamed with whole milk, topped with mini marshmallows.',
    price: 825,
    isFromPrice: false,
    category: 'beverages',
    image: '/images/products/hot-chocolate.webp',
    featured: false,
    inStock: true,
  },
  {
    id: 27,
    name: 'Karak Chai',
    description: 'Traditional slow-brewed spiced tea with evaporated milk and crushed cardamom pods.',
    price: 350,
    isFromPrice: false,
    category: 'beverages',
    image: '/images/products/karak-chai.webp',
    featured: false,
    inStock: true,
  },
];

export const featuredItems = menuItems.filter((item) => item.featured);

export function formatPrice(price: number, isFromPrice: boolean): string {
  const formatted = `Rs. ${price.toLocaleString('en-PK')}`;
  return isFromPrice ? `from ${formatted}` : formatted;
}
