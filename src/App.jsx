import React, { useState } from 'react';
import { companyConfig } from './config/company';
import EnhancedHeader from './components/EnhancedHeader';
import EnhancedHero from './components/EnhancedHero';
import WelcomeMarquee from './components/WelcomeMarquee';
import About from './components/About';
import VisionMission from './components/VisionMission';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Certifications from './components/Certifications';
import ReviewsCarousel from './components/ReviewsCarousel';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LeadCaptureModal from './components/LeadCaptureModal';
import FloatingButtons from './components/FloatingButtons';
import { useHeaderHeight } from './hooks/useHeaderHeight';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  useHeaderHeight(); // This will dynamically set the marquee margin

  return (
    <div className="App">
      <LeadCaptureModal />
      
      {/* HEADER FIRST */}
      <EnhancedHeader 
        company={companyConfig} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      {/* MARQUEE SECOND - margin will be set dynamically */}
      <WelcomeMarquee />
      
      {/* HERO THIRD */}
      <EnhancedHero 
        company={companyConfig}
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <About company={companyConfig} />
      <VisionMission company={companyConfig} />
      
      <section id="products" className="section light-bg">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <ProductCategories />
          <FeaturedProducts />
        </div>
      </section>

      <Certifications company={companyConfig} />
      <ReviewsCarousel />
      <LocationMap />
      <Contact company={companyConfig} />
      <Footer company={companyConfig} />
      
      <FloatingButtons />
      <WhatsAppButton />
    </div>
  );
}

export default App;