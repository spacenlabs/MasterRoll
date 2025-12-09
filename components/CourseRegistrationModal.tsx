import React, { useState } from 'react';
import { X, CheckCircle2, Loader2, User, Phone, BookOpen, Calendar } from './Icons';

interface CourseRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CourseRegistrationModal: React.FC<CourseRegistrationModalProps> = ({ isOpen, onClose }) => {
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
        className="absolute inset-0 bg-indigo-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200 border-t-4 border-indigo-600">
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
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Booking Confirmed!</h3>
            <p className="text-slate-600 mb-8">
              Your registration request has been sent to the institute. You will receive a confirmation SMS and email shortly with the class schedule.
            </p>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-8">
             <div className="mb-8">
               <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-3">
                 New Registration
               </div>
               <h3 className="text-2xl font-bold text-slate-900">Book a Class</h3>
               <p className="text-slate-500 mt-1">Register now to secure your spot in the upcoming batch.</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-4">
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Student Name</label>
                 <div className="relative">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <User size={18} className="text-slate-400" />
                   </div>
                   <input 
                     required 
                     type="text" 
                     className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                     placeholder="Enter student name"
                   />
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Grade / Class</label>
                   <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white">
                     <option>Class 8</option>
                     <option>Class 9</option>
                     <option>Class 10</option>
                     <option>Class 11</option>
                     <option>Class 12</option>
                   </select>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BookOpen size={18} className="text-slate-400" />
                      </div>
                      <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white">
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>English</option>
                        <option>Computer Science</option>
                      </select>
                    </div>
                 </div>
               </div>

               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Parent's Mobile Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-slate-400" />
                    </div>
                    <input 
                      required 
                      type="tel" 
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Start Date</label>
                 <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-slate-400" />
                    </div>
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                 </div>
               </div>

               <div className="pt-2">
                 <button 
                   type="submit" 
                   disabled={isLoading}
                   className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {isLoading ? (
                     <>
                       <Loader2 className="animate-spin mr-2 h-5 w-5" />
                       Processing...
                     </>
                   ) : (
                     "Confirm Booking"
                   )}
                 </button>
                 <p className="text-xs text-center text-slate-400 mt-3">
                   By booking, you agree to our Terms of Service. Payment will be collected after confirmation.
                 </p>
               </div>
             </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseRegistrationModal;