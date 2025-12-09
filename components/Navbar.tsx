import React, { useState, useEffect } from 'react';
import { Menu, X, School, ArrowLeft } from './Icons';
import { useNavigation } from '../contexts/NavigationContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigate, currentPage, goBack, canGoBack } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setIsOpen(false);
    if (target === 'home-section') {
      if (currentPage !== 'home') {
        navigate('home');
        // Give time for render then scroll
        setTimeout(() => {
           const element = document.getElementById('products');
           if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
         const element = document.getElementById('products');
         if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (target === 'ecosystem') {
      if (currentPage !== 'home') {
        navigate('home');
        setTimeout(() => {
           const element = document.getElementById('ecosystem');
           if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
         const element = document.getElementById('ecosystem');
         if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (target === 'pricing') {
      navigate('pricing');
    } else if (target === 'demo') {
      navigate('demo');
    } else if (target === 'home') {
      navigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Back Button */}
          <div className="flex items-center gap-3">
            {canGoBack && (
              <button 
                onClick={goBack}
                className={`p-2 rounded-full transition-colors ${
                  scrolled || currentPage !== 'home' 
                    ? 'text-slate-600 hover:bg-slate-100' 
                    : 'text-white hover:bg-white/20'
                }`}
                aria-label="Go Back"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            )}

            <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2 focus:outline-none">
              <div className="bg-brand-600 p-2 rounded-lg">
                <School className="h-6 w-6 text-white" />
              </div>
              <span className={`text-2xl font-bold ${scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                Master<span className="text-brand-600">Roll</span>
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`font-medium hover:text-brand-500 transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-slate-100'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('home-section')}
              className={`font-medium hover:text-brand-500 transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-slate-100'}`}
            >
              Products
            </button>
             <button
              onClick={() => handleNavClick('ecosystem')}
              className={`font-medium hover:text-brand-500 transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-slate-100'}`}
            >
              Ecosystem
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className={`font-medium hover:text-brand-500 transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-slate-100'}`}
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavClick('demo')}
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-brand-500/30"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-slate-900'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <button onClick={() => handleNavClick('home')} className="text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md">Home</button>
            <button onClick={() => handleNavClick('home-section')} className="text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md">Products</button>
            <button onClick={() => handleNavClick('ecosystem')} className="text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md">Ecosystem</button>
            <button onClick={() => handleNavClick('pricing')} className="text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 rounded-md">Pricing</button>
            <button onClick={() => handleNavClick('demo')} className="w-full mt-4 bg-brand-600 text-white px-5 py-3 rounded-lg font-bold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;