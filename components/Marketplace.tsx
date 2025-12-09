import React from 'react';
import { ShoppingCart, Briefcase, CheckCircle2, ArrowRight } from './Icons';
import { useNavigation } from '../contexts/NavigationContext';

const Marketplace: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <div id="ecosystem" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wide uppercase text-sm">The Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">More Than Just Software</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            MasterRoll connects schools with essential resources, from qualified teachers to bulk supplies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Teacher Marketplace Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col lg:flex-row gap-6 items-center">
             <div className="w-full lg:w-1/3 flex justify-center">
                <div className="bg-orange-100 p-6 rounded-full">
                  <Briefcase className="w-12 h-12 text-orange-600" />
                </div>
             </div>
             <div className="w-full lg:w-2/3 text-center lg:text-left">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Teacher Hiring Portal</h3>
               <p className="text-slate-600 mb-4 text-sm">
                 Access a database of 10,000+ verified educators. Post vacancies or use our <strong>Premium Subscription</strong> to unlock unlimited teacher profiles and contact details.
               </p>
               <ul className="space-y-2 mb-6">
                 <li className="flex items-center text-sm text-slate-700">
                   <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> 
                   Background Verified Staff
                 </li>
                 <li className="flex items-center text-sm text-slate-700">
                   <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> 
                   Subject Specialists & Substitutes
                 </li>
                 <li className="flex items-center text-sm text-slate-700">
                   <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> 
                   <span className="font-semibold text-orange-600">Premium Subscription Access</span>
                 </li>
               </ul>
               <button onClick={() => navigate('teacher-hiring')} className="text-orange-600 font-bold hover:text-orange-700 transition-colors">
                 Find Teachers &rarr;
               </button>
             </div>
          </div>

          {/* Vendor Marketplace Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col lg:flex-row gap-6 items-center relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0"></div>
             
             <div className="w-full lg:w-1/3 flex justify-center z-10">
                <div className="bg-blue-100 p-6 rounded-full">
                  <ShoppingCart className="w-12 h-12 text-blue-600" />
                </div>
             </div>
             <div className="w-full lg:w-2/3 text-center lg:text-left z-10">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Vendor Marketplace</h3>
               <p className="text-slate-600 mb-4 text-sm">
                 Procure detailed product listings including <span className="font-semibold text-slate-800">Books, Uniforms, Electronics & more</span> at wholesale rates.
               </p>
               
               {/* Visual Filters Preview */}
               <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                 <span className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">Books</span>
                 <span className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">Stationery</span>
                 <span className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">Uniforms</span>
                 <span className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">Furniture</span>
               </div>

               <div className="flex flex-col sm:flex-row items-center gap-3">
                 <button onClick={() => navigate('vendor-marketplace')} className="text-blue-600 font-bold hover:text-blue-700 transition-colors whitespace-nowrap">
                   Start Buying &rarr;
                 </button>
                 <button onClick={() => navigate('vendor-registration')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-all shadow-md flex items-center">
                   Register as Vendor
                 </button>
               </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Marketplace;