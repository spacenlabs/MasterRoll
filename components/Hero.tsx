import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, BrainCircuit } from './Icons';
import { useNavigation } from '../contexts/NavigationContext';

const Hero: React.FC = () => {
  const { navigate } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-slate-900 overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900/50 border border-brand-700 text-white text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2 animate-pulse"></span>
              The #1 EdTech Ecosystem for India
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              <span className={`inline-block transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} hover:text-brand-400 hover:-translate-y-1 cursor-default`}>
                Modernize
              </span> 
              <span className={`inline-block transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                 Your Institute.
              </span>
              <br />
              <span className={`inline-block transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">
                  <span className="inline-block transition-transform duration-300 hover:scale-110 cursor-default">
                     Empower
                  </span>
                   Your Future.
                </span>
              </span>
            </h1>
            
            <div className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From fee collection to AI-powered learning, MasterRoll unifies school management, teacher marketplaces, and student success into one seamless platform.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <button 
                onClick={() => navigate('demo')}
                className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center"
              >
                Book a Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all flex items-center justify-center">
                View Features
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-y-4 gap-x-8 text-sm text-slate-400 font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-brand-500 mr-2" />
                <span>NCERT Integrated</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-brand-500 mr-2" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-brand-500 mr-2" />
                <span>Mobile First</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
                alt="Institute Management Dashboard"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              
              {/* Floating Cards overlay */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px] border border-gray-100 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Fee Collected</p>
                    <p className="font-bold text-slate-800">₹ 12,45,000</p>
                  </div>
                </div>
              </div>
              
               <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[220px] border border-gray-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-100 p-2 rounded-full">
                    <BrainCircuit className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">AI Doubts Solved</p>
                    <p className="font-bold text-slate-800">850+ Today</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;