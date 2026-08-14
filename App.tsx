
import React, { useState, useLayoutEffect, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoRequestModal from './components/DemoRequestModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { JobProvider } from './contexts/JobContext';
import { syncSocialUser } from './services/formService';
import { Loader2 } from './components/Icons';

// Pages
import Home from './pages/Home';
import DemoPage from './pages/DemoPage';
import SignupPage from './pages/SignupPage';
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
import CreateAdmissionPage from './pages/CreateAdmissionPage';
import AdmissionEnquiryPage from './pages/AdmissionEnquiryPage';
import SchoolSubscriptionPage from './pages/SchoolSubscriptionPage';
import CreateBranchPage from './pages/CreateBranchPage';
import OnlineAdmissionPublic from './pages/OnlineAdmissionPublic';
import { 
  SuperAdminDashboard, OrgDashboard, TeacherDashboard, 
  StudentDashboard, ParentDashboard 
} from './pages/UserDashboards';
import {
  TermsAndConditionsPage,
  PrivacyPolicyPage,
  RefundPolicyPage,
  ShippingPolicyPage,
  ContactUsPage
} from './pages/PolicyPages';
import ITServicesPage from './pages/ITServicesPage';

const AppContent: React.FC = () => {
  const { currentPage, navigate } = useNavigation();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false); 
  const [isSyncing, setIsSyncing] = useState(false);

  // 1. Detect OAuth Callback on Mount
  useEffect(() => {
    const handleAuthCallback = async () => {
      const hash = window.location.hash;
      if (hash && hash.includes('access_token=')) {
        setIsSyncing(true);
        // Extract token
        const params = new URLSearchParams(hash.substring(1));
        const accessToken = params.get('access_token');
        
        if (accessToken) {
          const result = await syncSocialUser(accessToken);
          if (result.success && result.user) {
            // Clean URL hash
            window.history.replaceState(null, '', window.location.pathname);
            
            // Navigate based on synced user role
            const roleMap: Record<string, any> = {
              'super_admin': 'super-admin-dashboard',
              'org': 'org-dashboard',
              'teacher': 'teacher-dashboard',
              'student': 'student-dashboard',
              'parent': 'parent-dashboard',
              'vendor': 'vendor-dashboard',
            };
            navigate(roleMap[result.user.role] || 'home');
          }
        }
        setIsSyncing(false);
      }
    };
    handleAuthCallback();
  }, []);

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [currentPage]);

  const isDashboard = [
    'vendor-dashboard', 'lms-dashboard', 'super-admin-dashboard', 
    'org-dashboard', 'teacher-dashboard', 'student-dashboard', 
    'parent-dashboard', 'create-admission', 'admission-enquiry',
    'school-subscription', 'create-branch'
  ].includes(currentPage);

  const renderPage = () => {
    if (isSyncing) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <Loader2 className="animate-spin text-brand-600 h-12 w-12 mb-4" />
          <h2 className="text-xl font-bold text-slate-900">Authenticating with Google...</h2>
          <p className="text-slate-500">Please wait while we set up your MasterRoll workspace.</p>
        </div>
      );
    }

    switch (currentPage) {
      case 'home': return <Home />;
      case 'demo': return <DemoPage />;
      case 'signup': return <SignupPage />;
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
      case 'create-admission': return <CreateAdmissionPage />;
      case 'admission-enquiry': return <AdmissionEnquiryPage />;
      case 'school-subscription': return <SchoolSubscriptionPage />;
      case 'create-branch': return <CreateBranchPage />;
      case 'online-admission-public': return <OnlineAdmissionPublic />;
      case 'terms-and-conditions': return <TermsAndConditionsPage />;
      case 'privacy-policy': return <PrivacyPolicyPage />;
      case 'refund-policy': return <RefundPolicyPage />;
      case 'shipping-policy': return <ShippingPolicyPage />;
      case 'contact-us': return <ContactUsPage />;
      case 'it-services': return <ITServicesPage />;
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
