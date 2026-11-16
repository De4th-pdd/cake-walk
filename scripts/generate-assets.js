const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Product definitions with curated color themes and illustrations
const products = [
  {
    file: 'classic-churros.jpg',
    name: 'Classic Churros',
    tag: '5 Fluted Sticks',
    gradient: ['#F3E5AB', '#D4A373', '#8B5E3C'],
    accent: '#5A189A',
    icon: '🥨',
    sub: 'Cinnamon Sugar & Warm Caramel',
  },
  {
    file: 'churros-platter.jpg',
    name: 'Churros Platter',
    tag: '7 Sticks + Dips',
    gradient: ['#3E2723', '#5D4037', '#271206'],
    accent: '#7B2CBF',
    icon: '✨',
    sub: 'Hot Chocolate & Salted Caramel Cup',
  },
  {
    file: 'loaded-churros.jpg',
    name: 'Loaded Churros',
    tag: 'Crushed Oreos & Cream',
    gradient: ['#212121', '#424242', '#141414'],
    accent: '#9D4EDD',
    icon: '🍫',
    sub: 'Chocolate Ganache & Caramel Drizzle',
  },
  {
    file: 'churro-waffle.jpg',
    name: 'Churro Waffle',
    tag: 'Crispy Churro Batter',
    gradient: ['#E9C46A', '#F4A261', '#E76F51'],
    accent: '#5A189A',
    icon: '🧇',
    sub: 'Cinnamon Crust & Syrup',
  },
  {
    file: 'chocochino-cake.jpg',
    name: 'Chocochino Cake',
    tag: 'Signature Triple Layer',
    gradient: ['#4E342E', '#6D4C41', '#3E2723'],
    accent: '#C77DFF',
    icon: '🎂',
    sub: 'Espresso Caramel & Chocolate Chunks',
  },
  {
    file: 'double-chocolate-fudge-cake.jpg',
    name: 'Double Chocolate Fudge Cake',
    tag: 'Decadent Split Finish',
    gradient: ['#271206', '#3E2723', '#1A0C02'],
    accent: '#7B2CBF',
    icon: '🍫',
    sub: 'Molten Fudge & Cadbury Flake Shavings',
  },
  {
    file: 'vanilla-caramel-crunch-cake.jpg',
    name: 'Vanilla Caramel Crunch Cake',
    tag: 'Chiffon Sponge',
    gradient: ['#FFF8E7', '#FDE4CF', '#E6BA95'],
    accent: '#B77A4C',
    icon: '🍰',
    sub: 'Salted Caramel Drip & Honey Crunch',
  },
  {
    file: 'lotus-tres-leches.jpg',
    name: 'Lotus Tres Leches',
    tag: 'Three Milks Soak',
    gradient: ['#DDA15E', '#BC6C25', '#99582A'],
    accent: '#E0AAFF',
    icon: '⭐',
    sub: 'Biscoff Biscuit & Whipped Cream Cheese',
  },
  {
    file: 'ny-cheesecake.jpg',
    name: 'New York Cheesecake',
    tag: 'Slow-Baked Graham Crust',
    gradient: ['#FEFAE0', '#FAEDCD', '#D4A373'],
    accent: '#5A189A',
    icon: '🧀',
    sub: 'Dense Ivory Cream & Golden Brown Top',
  },
  {
    file: 'molten-lava-cake.jpg',
    name: 'Molten Lava Cake',
    tag: 'Gooey Dark Chocolate Core',
    gradient: ['#1C110A', '#3C2216', '#100804'],
    accent: '#9D4EDD',
    icon: '🌋',
    sub: 'Warm Oozing Center & Cocoa Dust',
  },
  {
    file: 'chocolate-fudge-brownie.jpg',
    name: 'Chocolate Fudge Brownie',
    tag: 'Shiny Crinkle Crust',
    gradient: ['#3A1F18', '#542D24', '#26120D'],
    accent: '#7B2CBF',
    icon: '🟫',
    sub: 'Dense, Chewy & Intensely Chocolaty',
  },
  {
    file: 'walnut-brownie.jpg',
    name: 'Walnut Chocolate Fudge Brownie',
    tag: 'Toasted Walnut Chunks',
    gradient: ['#42281D', '#633B2B', '#2C1B14'],
    accent: '#5A189A',
    icon: '🥜',
    sub: 'Buttery Walnuts in Rich Cocoa Batter',
  },
  {
    file: 'lemon-tart.jpg',
    name: 'Lemon Tart',
    tag: 'Fluted Pastry Shell',
    gradient: ['#FFF3B0', '#E3A857', '#C28434'],
    accent: '#5A189A',
    icon: '🍋',
    sub: 'Glossy Citrus Curd with Coconut Flakes',
  },
  {
    file: 'apple-pie.jpg',
    name: 'Apple Pie',
    tag: 'Flaky Golden Lattice Crust',
    gradient: ['#D4A373', '#A98467', '#6C584C'],
    accent: '#B77A4C',
    icon: '🥧',
    sub: 'Cinnamon & Nutmeg Spiced Apples',
  },
  {
    file: 'banana-bread.jpg',
    name: 'Banana Bread',
    tag: 'Moist Walnut Loaf Slice',
    gradient: ['#E6CCB2', '#DDB892', '#B08968'],
    accent: '#7B2CBF',
    icon: '🍌',
    sub: 'Sealed with Cake Walk Purple Seal',
  },
  {
    file: 'chocolate-chip-cookie.jpg',
    name: 'Chocolate Chip Cookie',
    tag: 'NYC Style Chunky Cookie',
    gradient: ['#E9D8A6', '#EE9B00', '#CA6702'],
    accent: '#5A189A',
    icon: '🍪',
    sub: 'Molten Dark Chocolate Blocks & Sea Salt',
  },
  {
    file: 'dark-chocolate-cookie.jpg',
    name: 'Dark Chocolate Cookie',
    tag: 'Double Cocoa Dough',
    gradient: ['#281612', '#41221B', '#1B0E0B'],
    accent: '#9D4EDD',
    icon: '🍪',
    sub: 'Intense Dark Cocoa & Salt Crystals',
  },
  {
    file: 'lotus-biscoff-cupcake.jpg',
    name: 'Lotus Biscoff Cupcake',
    tag: 'Tall Speculoos Swirl',
    gradient: ['#F5EBE0', '#E3D5CA', '#D5BDAF'],
    accent: '#5A189A',
    icon: '🧁',
    sub: 'Biscoff Biscuit Crumb & Caramel Core',
  },
  {
    file: 'nutella-cupcake.jpg',
    name: 'Nutella Cupcake',
    tag: 'Silky Hazelnut Ganache',
    gradient: ['#4A2810', '#6F3D17', '#331B0A'],
    accent: '#C77DFF',
    icon: '🧁',
    sub: 'Chocolate Sponge Filled with Pure Nutella',
  },
  {
    file: 'chocolate-fudge-cupcake.jpg',
    name: 'Chocolate Fudge Cupcake',
    tag: 'Whipped Ganache Rosette',
    gradient: ['#321E17', '#4E2F24', '#20130E'],
    accent: '#7B2CBF',
    icon: '🧁',
    sub: 'Dark Chocolate Curls & Cocoa Sponge',
  },
  {
    file: 'oreo-cupcake.jpg',
    name: 'Oreo Cookies n Cream Cupcake',
    tag: 'Chantilly Cream & Mini Oreo',
    gradient: ['#E0E1DD', '#778DA9', '#415A77'],
    accent: '#9D4EDD',
    icon: '🧁',
    sub: 'Crushed Oreo Dusting on Chocolate Base',
  },
  {
    file: 'red-velvet-cupcake.jpg',
    name: 'Red Velvet Cupcake',
    tag: 'Cream Cheese Crown',
    gradient: ['#7A1C28', '#A02334', '#561019'],
    accent: '#5A189A',
    icon: '🧁',
    sub: 'Velvet Crumb Dusting & Tangy Frosting',
  },
  {
    file: 'hot-chocolate.jpg',
    name: 'Hot Chocolate',
    tag: 'Dark Cocoa & Marshmallows',
    gradient: ['#2C1A14', '#4A2A20', '#1C100B'],
    accent: '#E0AAFF',
    icon: '☕',
    sub: 'Steamed Whole Milk & Velvety Belgian Chocolate',
  },
  {
    file: 'karak-chai.jpg',
    name: 'Karak Chai',
    tag: 'Cardamom & Slow Brew',
    gradient: ['#C58940', '#E5BA73', '#FAEAB1'],
    accent: '#7B2CBF',
    icon: '🫖',
    sub: 'Rich Frothy Tea Infused with Aromatic Spices',
  },
];

function generateSvg(p) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.gradient[0]}" />
      <stop offset="50%" stop-color="${p.gradient[1]}" />
      <stop offset="100%" stop-color="${p.gradient[2]}" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.45" />
    </radialGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <rect width="800" height="600" fill="url(#glow)"/>

  <!-- Bakery subtle geometric pattern -->
  <circle cx="400" cy="270" r="180" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="2" stroke-dasharray="6,6"/>
  <circle cx="400" cy="270" r="140" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1.5"/>

  <!-- Center Presentation Platter -->
  <ellipse cx="400" cy="360" rx="200" ry="40" fill="#000000" opacity="0.35" filter="url(#shadow)"/>
  <ellipse cx="400" cy="350" rx="170" ry="25" fill="#ffffff" opacity="0.18"/>

  <!-- Central Icon & Illustration -->
  <g filter="url(#shadow)">
    <circle cx="400" cy="260" r="85" fill="#ffffff" opacity="0.95"/>
    <circle cx="400" cy="260" r="78" fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.6"/>
    <text x="400" y="278" font-size="70" text-anchor="middle" dominant-baseline="central">${p.icon}</text>
  </g>

  <!-- Brand Signature Header -->
  <g opacity="0.9">
    <rect x="260" y="40" width="280" height="34" rx="17" fill="#241714" opacity="0.75"/>
    <text x="400" y="62" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#F7F1E8" text-anchor="middle" letter-spacing="3">CAKE WALK</text>
    <text x="400" y="76" font-family="'Courier New', monospace" font-size="9" fill="${p.accent}" text-anchor="middle" letter-spacing="4">BY AYSHA</text>
  </g>

  <!-- Product Tag Badge -->
  <g filter="url(#shadow)">
    <rect x="230" y="390" width="340" height="36" rx="18" fill="${p.accent}" opacity="0.95"/>
    <text x="400" y="413" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1">${escapeXml(p.tag.toUpperCase())}</text>
  </g>

  <!-- Product Name & Subtitle -->
  <g filter="url(#shadow)">
    <text x="400" y="475" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">${escapeXml(p.name)}</text>
    <text x="400" y="515" font-family="system-ui, -apple-system, sans-serif" font-size="15" fill="#F7F1E8" text-anchor="middle" opacity="0.9">${escapeXml(p.sub)}</text>
  </g>

  <!-- Elegant Footer Flourish -->
  <line x1="280" y1="550" x2="520" y2="550" stroke="#ffffff" stroke-opacity="0.3" stroke-width="1"/>
  <circle cx="400" cy="550" r="3" fill="#ffffff" opacity="0.6"/>
</svg>`;
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

for (const p of products) {
  const filePath = path.join(outDir, p.file);
  const svgContent = generateSvg(p);
  fs.writeFileSync(filePath, svgContent, 'utf8');
}

// Generate hero-bg.jpg
const heroBgPath = path.join(__dirname, '..', 'public', 'images', 'hero-bg.jpg');
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <radialGradient id="heroGlow" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#4A154B" stop-opacity="0.85"/>
      <stop offset="40%" stop-color="#241714" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#140B08" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="warmLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B77A4C" stop-opacity="0.25"/>
      <stop offset="50%" stop-color="#6A1B9A" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.6"/>
    </linearGradient>
  </defs>

  <rect width="1920" height="1080" fill="#140B08"/>
  <rect width="1920" height="1080" fill="url(#heroGlow)"/>
  <rect width="1920" height="1080" fill="url(#warmLight)"/>

  <!-- Bakery subtle circular flourishes -->
  <circle cx="960" cy="480" r="450" fill="none" stroke="#E0AAFF" stroke-opacity="0.04" stroke-width="2"/>
  <circle cx="960" cy="480" r="600" fill="none" stroke="#B77A4C" stroke-opacity="0.03" stroke-width="1.5" stroke-dasharray="10,15"/>
</svg>`;
fs.writeFileSync(heroBgPath, heroSvg, 'utf8');

console.log('Successfully generated all 24 product images and hero background!');
