import React, { useState, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoRequestModal from './components/DemoRequestModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { JobProvider } from './contexts/JobContext';

// Pages
import Home from './pages/Home';
import DemoPage from './pages/DemoPage';
import PricingPage from './pages/PricingPage';
import { TeacherHiringPage, VendorMarketplacePage } from './pages/MarketplacePages';
import JobPostingPage from './pages/JobPostingPage';
import VendorRegistrationPage from './pages/VendorRegistrationPage';
import VendorDashboardPage from './pages/VendorDashboardPage';
import { BookClassPage, ListInstitutePage } from './pages/TuitionPages';
import { TeacherFeaturesPage, StudentToolsPage } from './pages/FeaturePages';
import SchoolERPPage from './pages/SchoolERPPage';
import FeeCollectionPromoPage from './pages/FeeCollectionPromoPage';
import LMSDashboardPage from './pages/LMSDashboardPage';
import TransportSecurityPage from './pages/TransportSecurityPage';
import AnalyticsSuitePage from './pages/AnalyticsSuitePage';
import AIDoubtSolvingPage from './pages/AIDoubtSolvingPage';
import DigitalLibraryPage from './pages/DigitalLibraryPage';
import LoginPage from './pages/LoginPage';
import { 
  SuperAdminDashboard, OrgDashboard, TeacherDashboard, 
  StudentDashboard, ParentDashboard 
} from './pages/UserDashboards';
import { Page } from './types';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();
  // We keep the modal for specific "quick actions" if needed, but primarily use full pages now.
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false); 

  // STRICT SCROLL HANDLING:
  // This ensures the app ALWAYS starts at the top (0,0) on load/refresh/navigation
  useLayoutEffect(() => {
    // 1. Disable browser's default scroll restoration to prevent "remembering" scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Force scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  }, [currentPage]); // TRIGGER ON EVERY PAGE CHANGE

  // Logic to hide Navbar/Footer on dashboard pages if desired, but for now we keep them or let the page handle it.
  // Actually, standard dashboards usually replace the public navbar. 
  // Let's hide the public Navbar/Footer for dashboard routes to give a true "app" feel.
  const isDashboard = [
    'vendor-dashboard', 'lms-dashboard', 'super-admin-dashboard', 
    'org-dashboard', 'teacher-dashboard', 'student-dashboard', 
    'parent-dashboard'
  ].includes(currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'demo': return <DemoPage />;
      case 'pricing': return <PricingPage />;
      case 'teacher-hiring': return <TeacherHiringPage />;
      case 'post-job': return <JobPostingPage />;
      case 'vendor-marketplace': return <VendorMarketplacePage />;
      case 'vendor-registration': return <VendorRegistrationPage />;
      case 'vendor-dashboard': return <VendorDashboardPage />;
      case 'book-class': return <BookClassPage />;
      case 'list-institute': return <ListInstitutePage />;
      case 'lms-dashboard': return <LMSDashboardPage />;
      case 'teacher-features': return <TeacherFeaturesPage />;
      case 'student-tools': return <StudentToolsPage />;
      case 'school-erp': return <SchoolERPPage />;
      case 'fee-collection-promo': return <FeeCollectionPromoPage />;
      case 'transport-security': return <TransportSecurityPage />;
      case 'analytics-suite': return <AnalyticsSuitePage />;
      case 'ai-doubt-solving': return <AIDoubtSolvingPage />;
      case 'digital-library': return <DigitalLibraryPage />;
      case 'login': return <LoginPage />;
      case 'super-admin-dashboard': return <SuperAdminDashboard />;
      case 'org-dashboard': return <OrgDashboard />;
      case 'teacher-dashboard': return <TeacherDashboard />;
      case 'student-dashboard': return <StudentDashboard />;
      case 'parent-dashboard': return <ParentDashboard />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {!isDashboard && <Navbar />}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {!isDashboard && <Footer />}
      <ScrollToTopButton />
      {/* Keeping modal available if we want to re-enable it for specific smaller buttons later, currently unused in favor of DemoPage */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};

function App() {
  return (
    <NavigationProvider>
      <JobProvider>
        <AppContent />
      </JobProvider>
    </NavigationProvider>
  );
}

export default App;