import React, { useState } from 'react';
import { companyConfig } from './config/company';
import EnhancedHeader from './components/EnhancedHeader';
import EnhancedHero from './components/EnhancedHero';
import WelcomeMarquee from './components/WelcomeMarquee';
import About from './components/About';
import VisionMission from './components/VisionMission';
import TrustBadges from './components/TrustBadges';
import EnhancedProductCategories from './components/EnhancedProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Certifications from './components/Certifications';
import ReviewsCarousel from './components/ReviewsCarousel';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LeadCaptureModal from './components/LeadCaptureModal';
import FloatingButtons from './components/FloatingButtons';
import ContactPage from './components/ContactPage';
import { useHeaderHeight } from './hooks/useHeaderHeight';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'contact'
  useHeaderHeight();

  // Render Home Page
  const renderHomePage = () => (
    <>
      <EnhancedHeader 
        company={companyConfig} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onNavigate={setCurrentPage}
      />
      
      <WelcomeMarquee />
      
      <EnhancedHero 
        company={companyConfig}
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <TrustBadges />
      
      <About company={companyConfig} />
      <VisionMission company={companyConfig} />
      
      <section id="products" className="section light-bg">
        <div className="container">
          <h2 className="section-title">Our Medical Products</h2>
          <p className="section-subtitle">
            Premium quality surgical instruments and medical equipment trusted by healthcare professionals
          </p>
          <EnhancedProductCategories />
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
    </>
  );

  // Render Contact Page
  const renderContactPage = () => (
    <>
      <EnhancedHeader 
        company={companyConfig} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onNavigate={setCurrentPage}
      />
      <ContactPage onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} />
      <WhatsAppButton />
    </>
  );

  return (
    <div className="App">
      <LeadCaptureModal />
      {currentPage === 'home' ? renderHomePage() : renderContactPage()}
    </div>
  );
}

export default App;