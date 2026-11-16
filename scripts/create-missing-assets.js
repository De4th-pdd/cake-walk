const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '..', 'public', 'images', 'products');
const customDir = path.join(__dirname, '..', 'public', 'images', 'custom');
if (!fs.existsSync(customDir)) {
  fs.mkdirSync(customDir, { recursive: true });
}

// 1. Cadbury Malt Cake
// Malt-infused chocolate sponge layered with creamy Cadbury milk chocolate frosting
function generateCadburyMaltSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <defs>
      <radialGradient id="cadburyBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#3C096C"/>
        <stop offset="60%" stop-color="#240046"/>
        <stop offset="100%" stop-color="#10002B"/>
      </radialGradient>
      <linearGradient id="chocolateDrip" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#5C3D2E"/>
        <stop offset="100%" stop-color="#2D1B11"/>
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#cadburyBg)"/>
    <circle cx="300" cy="300" r="220" fill="#ffffff" opacity="0.05"/>
    <ellipse cx="300" cy="380" rx="160" ry="35" fill="#000000" opacity="0.4"/>
    
    <!-- Cake Base -->
    <path d="M 180 340 L 180 240 Q 300 280 420 240 L 420 340 Q 300 380 180 340 Z" fill="url(#chocolateDrip)"/>
    <ellipse cx="300" cy="240" rx="120" ry="35" fill="#8B5A2B"/>
    
    <!-- Malt / Cadbury Accents -->
    <circle cx="260" cy="235" r="14" fill="#5A189A"/>
    <circle cx="300" cy="230" r="16" fill="#7B2CBF"/>
    <circle cx="340" cy="235" r="14" fill="#9D4EDD"/>
    
    <!-- Text Badge -->
    <rect x="175" y="440" width="250" height="32" rx="16" fill="#7B2CBF" opacity="0.95"/>
    <text x="300" y="461" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">CADBURY MALT CAKE</text>
    <text x="300" y="500" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">Cadbury Malt</text>
    <text x="300" y="525" font-family="system-ui, sans-serif" font-size="13" fill="#E0AAFF" text-anchor="middle">Rich Malt Sponge with Cadbury Milk Chocolate</text>
  </svg>`;
}

// 2. Red Velvet Cookie
function generateRedVelvetCookieSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <defs>
      <radialGradient id="rvBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#4A154B"/>
        <stop offset="70%" stop-color="#241714"/>
        <stop offset="100%" stop-color="#140B08"/>
      </radialGradient>
    </defs>
    <rect width="600" height="600" fill="url(#rvBg)"/>
    <ellipse cx="300" cy="380" rx="150" ry="30" fill="#000000" opacity="0.35"/>
    
    <!-- Red Velvet Cookie -->
    <circle cx="300" cy="290" r="115" fill="#800F2F"/>
    <circle cx="300" cy="290" r="110" fill="#A4133C"/>
    
    <!-- White chocolate chips -->
    <rect x="250" y="240" width="18" height="18" rx="4" fill="#FFF0F3" transform="rotate(25 250 240)"/>
    <rect x="320" y="260" width="20" height="20" rx="4" fill="#FFF0F3" transform="rotate(-15 320 260)"/>
    <rect x="270" y="310" width="22" height="22" rx="5" fill="#FFF0F3" transform="rotate(40 270 310)"/>
    <rect x="340" y="315" width="16" height="16" rx="4" fill="#FFF0F3" transform="rotate(10 340 315)"/>
    
    <!-- Badge -->
    <rect x="180" y="440" width="240" height="32" rx="16" fill="#C9184A" opacity="0.95"/>
    <text x="300" y="461" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">FRESH BAKED COOKIE</text>
    <text x="300" y="500" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">Red Velvet Cookie</text>
    <text x="300" y="525" font-family="system-ui, sans-serif" font-size="13" fill="#FFCCD5" text-anchor="middle">White Chocolate Chunks & Cream Cheese Swirl</text>
  </svg>`;
}

// 3. Butterscotch Cookie
function generateButterscotchCookieSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <defs>
      <radialGradient id="bsBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#5A189A"/>
        <stop offset="70%" stop-color="#241714"/>
        <stop offset="100%" stop-color="#140B08"/>
      </radialGradient>
    </defs>
    <rect width="600" height="600" fill="url(#bsBg)"/>
    <ellipse cx="300" cy="380" rx="150" ry="30" fill="#000000" opacity="0.35"/>
    
    <!-- Butterscotch Cookie -->
    <circle cx="300" cy="290" r="115" fill="#D4A373"/>
    <circle cx="300" cy="290" r="110" fill="#E9C46A"/>
    
    <!-- Butterscotch chips -->
    <circle cx="260" cy="250" r="12" fill="#E76F51"/>
    <circle cx="330" cy="270" r="14" fill="#F4A261"/>
    <circle cx="280" cy="320" r="13" fill="#E76F51"/>
    <circle cx="340" cy="330" r="11" fill="#DDA15E"/>
    
    <!-- Badge -->
    <rect x="180" y="440" width="240" height="32" rx="16" fill="#F4A261" opacity="0.95"/>
    <text x="300" y="461" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="bold" fill="#241714" text-anchor="middle" letter-spacing="1">FRESH BAKED COOKIE</text>
    <text x="300" y="500" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">Butterscotch Cookie</text>
    <text x="300" y="525" font-family="system-ui, sans-serif" font-size="13" fill="#FFE8D6" text-anchor="middle">Sweet Golden Butterscotch Morsels</text>
  </svg>`;
}

fs.writeFileSync(path.join(productsDir, 'cadbury-malt.webp'), generateCadburyMaltSvg(), 'utf8');
fs.writeFileSync(path.join(productsDir, 'red-velvet-cookie.webp'), generateRedVelvetCookieSvg(), 'utf8');
fs.writeFileSync(path.join(productsDir, 'butterscotch-cookie.webp'), generateButterscotchCookieSvg(), 'utf8');

// Also write custom celebration cake showcase images
const customCakes = [
  { name: 'birthday-floral.webp', title: 'Tiered Floral Celebration', emoji: '🌸', color: '#7B2CBF' },
  { name: 'lambeth-vintage.webp', title: 'Vintage Lambeth Piped Cake', emoji: '🍒', color: '#5A189A' },
  { name: 'character-kids.webp', title: 'Themed Birthday Creations', emoji: '👑', color: '#9D4EDD' },
  { name: 'drip-chocochino.webp', title: 'Artisan Drip & Macaron Tier', emoji: '🍫', color: '#3C096C' },
];

for (const c of customCakes) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <rect width="600" height="600" fill="${c.color}"/>
    <circle cx="300" cy="270" r="120" fill="#ffffff" opacity="0.12"/>
    <text x="300" y="295" font-size="80" text-anchor="middle" dominant-baseline="central">${c.emoji}</text>
    <rect x="150" y="420" width="300" height="34" rx="17" fill="#ffffff" opacity="0.2"/>
    <text x="300" y="442" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="2">CAKE WALK CUSTOM</text>
    <text x="300" y="490" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">${c.title}</text>
    <text x="300" y="525" font-family="system-ui, sans-serif" font-size="13" fill="#E0AAFF" text-anchor="middle">Handcrafted by Aysha Salman · DHA Phase 8 Lahore</text>
  </svg>`;
  fs.writeFileSync(path.join(customDir, c.name), svg, 'utf8');
}

console.log('Successfully created remaining assets and custom cake gallery images!');
