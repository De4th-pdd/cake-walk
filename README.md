# Cake Walk by Aysha — Premium Bakery Online Ordering Platform

An artisanal, high-converting digital storefront for **Cake Walk by Aysha** (DHA Phase 8, Lahore, Pakistan), inspired by the location-first customer journey of **Layers Pakistan (`layers.pk`)**.

![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Status](https://img.shields.io/badge/Production-Ready-success?style=for-the-badge)

---

## Highlights & Features

### 1. Layers-Inspired Location & Fulfilment UX
- **First-Visit Location Modal**: Greets new customers with an intuitive *"Where should we send your treats?"* modal.
- **Delivery vs. Store Pickup**: Seamless toggle between doorstep delivery across Lahore and local pickup from the DHA Phase 8 store.
- **GPS Location Detection**: Quick one-click geolocation button (`Use Current Location`) with graceful manual fallback.
- **Header Location Pill**: Persistent sticky pill in the navigation (`🚗 Delivery · DHA Phase 8` / `🏪 Pickup`) with a quick **Change** modal trigger.
- **Location Persistence**: Preserves customer preferences across browsing sessions via `localStorage`.

### 2. Product Browsing & Ordering
- **27-Item Catalogue**: Organized across 6 categories (Signature Churros, Artisan Cakes, Specialties, Cookies, Cupcakes, and Beverages) with genuine PKR pricing and `"from"` indicators.
- **Product Detail Modal**: Quick-view modal with high-resolution imagery, portion notes, quantity steppers (`- 1 +`), and special instructions for the baker (e.g. custom cake piping messages).
- **Slide-Over Cart Drawer**: Real-time cart state with itemized line totals, notes, and responsive checkout trigger.
- **3-Step Streamlined Checkout**:
  1. *Fulfilment Details*: Validates street address or pickup scheduling.
  2. *Customer Contact*: Collects name, phone, and optional email.
  3. *Review & WhatsApp Handoff*: Formats an itemized order summary and opens Cake Walk's official WhatsApp (`+92 321 7805555`) with a pre-filled ticket.

### 3. Custom Cakes & Celebrations Studio
- Interactive celebration cake consultation gallery showcasing 4 artisanal styles (Floral Tiered, Vintage Lambeth, Character/Kids, and Modern Drip).
- Interactive enquiry form with occasion, serving size, and flavor selectors that direct inquiries straight to Cake Walk's bespoke design team.

### 4. Brand Aesthetic & Assets
- Authentic visual identity drawn from Cake Walk's packaging and logo stickers: **Royal Violet** (`#5A189A`), **Pastel Lilac** (`#C77DFF`), **Warm Cream** (`#F7F1E8`), and **Deep Cocoa** (`#241714`).
- Real product photography sourced from official listings and catalogued in [`src/data/image-manifest.ts`](src/data/image-manifest.ts).

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Playfair Display (Serif headings) & Inter (Sans-serif UI)
- **State Management**: React Context (`LocationContext`, `CartContext`) with `localStorage` synchronization
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm / yarn / pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/De4th-pdd/cake-walk.git
cd cake-walk

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Type check and build
npm run build

# Start production server
npm run start
```

---

## Business Information

- **Brand**: Cake Walk by Aysha
- **Founder**: Aysha Salman
- **Flagship Kitchen**: 96 Q Street 10, DHA Phase 8 – Ex Air Avenue, Block Q, Lahore, Punjab, Pakistan
- **Phone / WhatsApp**: [+92 321 7805555](https://wa.me/923217805555)
- **Instagram**: [@cakewalkbyaysha](https://www.instagram.com/cakewalkbyaysha/)
- **Known for**: Signature Churros, Loaded Churro Platters, Chocochino Cake, and Custom Celebration Bakes.
