import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import MenuSection from '@/components/MenuSection';
import CustomCakes from '@/components/CustomCakes';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import VisitUs from '@/components/VisitUs';
import Checkout from '@/components/Checkout';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import StickyOrderButton from '@/components/StickyOrderButton';
import LocationModal from '@/components/LocationModal';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-cream-light text-cocoa selection:bg-purple-200 selection:text-purple-950">
      {/* Sticky Top Header with Location Pill */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow pt-16 sm:pt-20">
        <Hero />
        <FeaturedProducts />
        <MenuSection />
        <CustomCakes />
        <About />
        <Reviews />
        <VisitUs />
        <Checkout />
      </main>

      {/* Global Interactive Overlays */}
      <LocationModal />
      <CartDrawer />
      <StickyOrderButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
