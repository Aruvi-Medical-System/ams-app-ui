import React, { useState,useEffect } from 'react';
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
import FloatingButtons from './components/FloatingButtons';
import ContactPage from './components/ContactPage';
import ServicesSection from './components/ServicesSection';
import AuthModal from './components/AuthModal';
import ProfilePage from './components/ProfilePage';
import { useHeaderHeight } from './hooks/useHeaderHeight';
import ShippingPolicy from "./components/policies/ShippingPolicy";
import RefundPolicy from "./components/policies/RefundPolicy";
import PaymentPolicy from "./components/policies/PaymentPolicy";
// import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import TermsConditions from "./components/policies/TermsConditions";
import useAuthStore from './store/authStore';
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  // Get authentication state
  const { isAuthenticated, user, logout } = useAuthStore();

  // Auto-logout after certain period (e.g., 24 hours)
  useEffect(() => {
    const checkAuthExpiry = () => {
      // You can implement token expiry check here
      // For example, check if token exists and is valid
    };
    
    checkAuthExpiry();
    
    // Check every minute
    const interval = setInterval(checkAuthExpiry, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handle browser tab close
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // You can choose to keep the session or clear it
      // For security, you might want to clear on tab close:
      // logout();
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [logout]);

  useHeaderHeight();

  // Home
  const renderHomePage = () => (
    <>
      <EnhancedHeader 
        company={companyConfig} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onNavigate={setCurrentPage}
      />

      <WelcomeMarquee />
      <EnhancedHero company={companyConfig} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TrustBadges />
      <About company={companyConfig} />
      <VisionMission company={companyConfig} />
      <ServicesSection />

      <section id="products" className="section light-bg">
        <div className="container">
          <EnhancedProductCategories />
          <FeaturedProducts />
        </div>
      </section>

      <ReviewsCarousel />
      <LocationMap />
      <Contact company={companyConfig} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
      <FloatingButtons />
      <WhatsAppButton />
    </>
  );

  // Contact
  const renderContactPage = () => (
    <>
      <EnhancedHeader company={companyConfig} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onNavigate={setCurrentPage} />
      <ContactPage onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </>
  );

  // Profile Page
  const renderProfilePage = () => {
  const { isAuthenticated } = useAuthStore.getState();
  
  if (!isAuthenticated) {
    // Redirect to home if not authenticated
    setCurrentPage('home');
    return null;
  }
  
  return (
    <>
      <EnhancedHeader company={companyConfig} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onNavigate={setCurrentPage} />
      <ProfilePage onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </>
  );
};
  // Policy pages
  const renderShippingPolicy = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <ShippingPolicy onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );

  const renderRefundPolicy = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <RefundPolicy onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );

  const renderPaymentPolicy = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <PaymentPolicy onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );
  const renderPrivacyPolicy = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <PrivacyPolicy onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );

  const renderTermsConditions = () => (
    <>
      <EnhancedHeader company={companyConfig} onNavigate={setCurrentPage} />
      <TermsConditions onBack={() => setCurrentPage('home')} />
      <Footer company={companyConfig} onNavigate={setCurrentPage} />
    </>
  );


  return (
    <div className="App">
      {!isAuthenticated && <AuthModal />}

      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'contact' && renderContactPage()}
      {currentPage === 'profile' && renderProfilePage()}
      {currentPage === 'shipping-policy' && renderShippingPolicy()}
      {currentPage === 'refund-policy' && renderRefundPolicy()}
      {currentPage === 'payment-policy' && renderPaymentPolicy()}
      {/* {currentPage === 'privacy-policy' && renderPrivacyPolicy()} */}
      {currentPage === 'terms' && renderTermsConditions()}

    </div>
  );
}

export default App;
