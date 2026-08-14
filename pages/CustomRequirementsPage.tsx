import React, { useState, useEffect } from 'react';
import { Calendar, Building, MapPin, User, Briefcase, Phone, Mail, DollarSign, AlertCircle, ArrowRight, CheckCircle2, ChevronRight, X, CreditCard } from 'lucide-react';
import { googleSignIn, getAccessToken, initAuth } from '../services/auth';

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const CustomRequirementsPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    instituteName: '',
    location: '',
    contactName: '',
    designation: '',
    phone: '',
    email: '',
    budgetType: 'Annual Budget',
    budgetAmount: '',
    issues: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [needsAuth, setNeedsAuth] = useState(true);
  const [isScheduling, setIsScheduling] = useState(false);
  const [scheduleSuccess, setScheduleSuccess] = useState(false);

  useEffect(() => {
    initAuth(
      () => setNeedsAuth(false),
      () => setNeedsAuth(true)
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1500);
  };

  const handleLogin = async () => {
    try {
      const result = await googleSignIn();
      if (result) {
        setNeedsAuth(false);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleBuyNow = async () => {
    const isLoaded = await loadRazorpay();
    
    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_live_TMZhjI3uGpOk6f", 
      amount: "9999900", // 99,999 * 100
      currency: "INR",
      name: "MasterRoll IT Solutions",
      description: "10-Year Master Subscription",
      handler: function (response: any) {
        alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: formData.contactName || "Valued Client",
        email: formData.email || "client@example.com",
        contact: formData.phone || "9999999999"
      },
      theme: {
        color: "#14b8a6"
      }
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.on('payment.failed', function (response: any) {
      alert("Payment Failed: " + response.error.description);
    });
    paymentObject.open();
  };

  const handleScheduleMeeting = async () => {
    if (needsAuth) {
      await handleLogin();
      return;
    }

    setIsScheduling(true);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("No access token available");

      // Set meeting time for tomorrow at 10 AM
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(10, 0, 0, 0);
      
      const endTime = new Date(tomorrow);
      endTime.setHours(11, 0, 0, 0);

      const event = {
        summary: `Consultation: ${formData.instituteName} & MasterRoll`,
        description: `Discussing IT solutions for issues: ${formData.issues}\nBudget: ${formData.budgetType} - ${formData.budgetAmount}`,
        start: {
          dateTime: tomorrow.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        attendees: [
          { email: formData.email }
        ],
      };

      const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });

      if (!response.ok) {
        throw new Error('Failed to create calendar event');
      }

      setScheduleSuccess(true);
    } catch (error) {
      console.error("Failed to schedule meeting:", error);
      alert("Failed to schedule meeting. Please try again.");
    } finally {
      setIsScheduling(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Custom IT <span className="text-brand-600">Solutions</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tell us about the challenges your institution is facing. Our expert IT consultants will design a tailored architecture to resolve vendor bottlenecks and scale your operations.
          </p>
        </div>

        {step === 1 && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Institution Profile</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Institute Name</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input required type="text" name="instituteName" value={formData.instituteName} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="Enter institute name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input required type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="City, State" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Person</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input required type="text" name="contactName" value={formData.contactName} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="Full name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Designation</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input required type="text" name="designation" value={formData.designation} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="e.g. Principal, IT Director" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="+91 9999999999" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Official Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="admin@institute.edu" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Budget Type</label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select name="budgetType" value={formData.budgetType} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all appearance-none">
                        <option>Annual Budget</option>
                        <option>One-time Budget</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated Budget Range</label>
                    <input required type="text" name="budgetAmount" value={formData.budgetAmount} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="e.g. ₹5,00,000 - ₹10,00,000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">What issues are you facing with current systems/vendors?</label>
                  <div className="relative">
                    <AlertCircle className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea required name="issues" value={formData.issues} onChange={handleInputChange} rows={4} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none" placeholder="Describe data silos, high recurring fees, poor support, etc..."></textarea>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <button type="submit" disabled={isSubmitting} className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-500/30 flex items-center disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Analyzing Requirements...' : 'Submit Requirements'} <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-slate-900 p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <CheckCircle2 className="w-16 h-16 text-brand-400 mx-auto mb-6" />
              <h2 className="text-3xl font-black mb-4">Requirements Analyzed successfully.</h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Based on your inputs regarding "{formData.issues.substring(0, 40)}...", our initial assessment indicates you would benefit heavily from our <strong className="text-white">Unified MasterRoll Architecture</strong>.
              </p>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Consultant's Initial Recommendation:</h3>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Eliminate Vendor Silos</h4>
                    <p className="text-slate-600 text-sm mt-1">Replace fragmented tools with a single centralized database architecture, removing data duplication.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Cost Restructuring</h4>
                    <p className="text-slate-600 text-sm mt-1">Transition from high recurring monthly models to a 10-Year One-Time Plan to fit your {formData.budgetType}.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dedicated Support SLA</h4>
                    <p className="text-slate-600 text-sm mt-1">Implement a strict Service Level Agreement to ensure rapid response times, addressing your current support pain points.</p>
                  </div>
                </div>
              </div>

              <div className="text-center border-t border-slate-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Let's discuss this architecture.</h3>
                <p className="text-slate-500 mb-8">Schedule a free 30-minute consultation call with our Lead IT Architect.</p>
                
                {scheduleSuccess ? (
                  <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 p-6 rounded-2xl flex flex-col items-center">
                    <CheckCircle2 className="w-10 h-10 mb-3" />
                    <h4 className="font-bold text-lg">Meeting Scheduled!</h4>
                    <p className="text-sm mt-1 text-emerald-600">Check your Google Calendar for tomorrow at 10:00 AM.</p>
                  </div>
                ) : (
                  <div className="max-w-md mx-auto space-y-4">
                    {needsAuth && (
                      <button 
                        onClick={handleLogin}
                        className="w-full flex items-center justify-center bg-white border border-slate-300 text-slate-700 font-bold py-3.5 px-6 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                          <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                        Sign in to Schedule with Google Meet
                      </button>
                    )}
                    <button 
                      onClick={handleScheduleMeeting}
                      disabled={isScheduling}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center disabled:opacity-70"
                    >
                      <Calendar className="w-5 h-5 mr-3" />
                      {isScheduling ? 'Scheduling...' : 'Schedule Call for Tomorrow @ 10 AM'}
                    </button>
                    
                    <div className="relative flex py-4 items-center">
                      <div className="flex-grow border-t border-slate-200"></div>
                      <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium uppercase tracking-wider">OR</span>
                      <div className="flex-grow border-t border-slate-200"></div>
                    </div>

                    <button 
                      onClick={handleBuyNow}
                      className="w-full bg-brand-500 hover:bg-brand-400 text-slate-950 font-black py-4 px-6 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(20,184,166,0.4)] flex items-center justify-center uppercase tracking-wider"
                    >
                      <CreditCard className="w-5 h-5 mr-3" /> Buy Now (₹99,999)
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomRequirementsPage;
