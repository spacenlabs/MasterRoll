import React, { useState } from 'react';
import { X, CheckCircle2, Loader2 } from './Icons';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
            <p className="text-slate-600 mb-8">
              Thank you for your interest in MasterRoll. Our team will contact you within 24 hours to schedule your personalized demo.
            </p>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-8">
             <div className="mb-8">
               <h3 className="text-2xl font-bold text-slate-900">Schedule a Demo</h3>
               <p className="text-slate-500 mt-1">Fill in your details and we'll get back to you shortly.</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-4">
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                 <input 
                   required 
                   type="text" 
                   className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                   placeholder="John Doe"
                 />
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">School / Institution Name</label>
                 <input 
                   required 
                   type="text" 
                   className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                   placeholder="Modern Academy"
                 />
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                   <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                     <option>Principal / Owner</option>
                     <option>Teacher</option>
                     <option>Admin Staff</option>
                     <option>Other</option>
                   </select>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="+91 98765..."
                    />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Official Email</label>
                 <input 
                   required 
                   type="email" 
                   className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                   placeholder="admin@school.com"
                 />
               </div>

               <button 
                 type="submit" 
                 disabled={isLoading}
                 className="w-full mt-4 bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
               >
                 {isLoading ? (
                   <>
                     <Loader2 className="animate-spin mr-2 h-5 w-5" />
                     Submitting...
                   </>
                 ) : (
                   "Request Demo"
                 )}
               </button>
             </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoRequestModal;