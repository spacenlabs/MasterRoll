import React, { useState } from 'react';
import { CheckCircle2, Loader2, School, Phone, MessageCircle } from '../components/Icons';

const DemoPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Information */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
              Book a Consultation
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Experience the Future of <span className="text-brand-600">Education Management</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              See firsthand how MasterRoll can streamline your fee collection, digitize your classrooms, and connect you with the best teachers in India.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-brand-100 p-3 rounded-lg mr-4">
                  <School className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Tailored for your Institution</h3>
                  <p className="text-slate-600 mt-2">Whether you are a small coaching center or a large university, our demo will be customized to your specific needs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">30-Day Free Trial Access</h3>
                  <p className="text-slate-600 mt-2">Get full access to the Pro plan features for 30 days after your demo session. No credit card required.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4">Direct Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center text-slate-600">
                  <Phone className="w-5 h-5 mr-3 text-slate-400" />
                  +91 7979078400 (Sales)
                </div>
                <div className="flex items-center text-slate-600">
                  <MessageCircle className="w-5 h-5 mr-3 text-slate-400" />
                  sales@masterroll.in
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            {isSuccess ? (
              <div className="p-16 text-center h-full flex flex-col justify-center items-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Submitted!</h3>
                <p className="text-slate-600 mb-8">
                  Our team has received your details. You will receive a call within 24 hours to schedule your personalized walkthrough.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Schedule Your Demo</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Institution Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                      <option>Principal / Owner</option>
                      <option>Teacher</option>
                      <option>Administrator</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">What are you most interested in?</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                      <option>Fee Management</option>
                      <option>Teacher Hiring</option>
                      <option>Student Learning Tools</option>
                      <option>Full ERP Suite</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Submitting...
                      </>
                    ) : (
                      "Confirm Schedule"
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;