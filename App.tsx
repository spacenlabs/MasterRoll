import React, { useState, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoRequestModal from './components/DemoRequestModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';

// Pages
import Home from './pages/Home';
import DemoPage from './pages/DemoPage';
import PricingPage from './pages/PricingPage';
import { TeacherHiringPage, VendorMarketplacePage } from './pages/MarketplacePages';
import VendorRegistrationPage from './pages/VendorRegistrationPage';
import VendorDashboardPage from './pages/VendorDashboardPage';
import { BookClassPage, ListInstitutePage } from './pages/TuitionPages';
import { TeacherFeaturesPage, StudentToolsPage } from './pages/FeaturePages';
import SchoolERPPage from './pages/SchoolERPPage';
import FeeCollectionPromoPage from './pages/FeeCollectionPromoPage';
import { Page } from './types';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();
  // We keep the modal for specific "quick actions" if needed, but primarily use full pages now.
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false); 

  // STRICT SCROLL HANDLING:
  // This ensures the app ALWAYS starts at the top (0,0) on load/refresh,
  // overriding mobile browser "scroll restoration" features.
  useLayoutEffect(() => {
    // 1. Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Force scroll to top immediately
    window.scrollTo(0, 0);

    // 3. Fallback for slower mobile rendering cycles
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array = runs only on mount (initial load/refresh)

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'demo': return <DemoPage />;
      case 'pricing': return <PricingPage />;
      case 'teacher-hiring': return <TeacherHiringPage />;
      case 'vendor-marketplace': return <VendorMarketplacePage />;
      case 'vendor-registration': return <VendorRegistrationPage />;
      case 'vendor-dashboard': return <VendorDashboardPage />;
      case 'book-class': return <BookClassPage />;
      case 'list-institute': return <ListInstitutePage />;
      case 'teacher-features': return <TeacherFeaturesPage />;
      case 'student-tools': return <StudentToolsPage />;
      case 'school-erp': return <SchoolERPPage />;
      case 'fee-collection-promo': return <FeeCollectionPromoPage />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <ScrollToTopButton />
      {/* Keeping modal available if we want to re-enable it for specific smaller buttons later, currently unused in favor of DemoPage */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;