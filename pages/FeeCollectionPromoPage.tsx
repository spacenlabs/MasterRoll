import React, { useState, useEffect } from 'react';
import { 
  Landmark, Timer, Zap, CheckCircle2, Ban, Percent, 
  History, FileWarning, ArrowRight, Loader2, CreditCard,
  Building2, Users, FileText
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

const FeeCollectionPromoPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });

  // FOMO Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev; // Expired
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    }, 2000);
  };

  const extensiveFeatures = [
    { title: "Semester & Year Fees", desc: "Automated carry-forward of dues to next semester." },
    { title: "Hostel & Mess Billing", desc: "Separate ledgers for residential and dining charges." },
    { title: "Exam & Cert Fees", desc: "Ad-hoc payment links for hall tickets and certificates." },
    { title: "Alumni Donations", desc: "Dedicated portal for alumni contributions and grants." },
    { title: "Scholarship Mgmt", desc: "Auto-adjust invoices based on student scholarship grants." },
    { title: "Department Dues", desc: "Lab breakage, library fines, and dept. specific charges." },
    { title: "Split Payments", desc: "Allow students to pay fees in custom installments." },
    { title: "Tally/SAP Sync", desc: "Real-time ledger reconciliation with existing ERPs." },
    { title: "100+ Payment Modes", desc: "UPI, NEFT, RTGS, Credit Cards, EMI, Pay Later." },
    { title: "International Payments", desc: "Accept USD/Euro for NRI/Foreign students." },
    { title: "Automated Receipts", desc: "GST-compliant receipts sent instantly via Email/WhatsApp." },
    { title: "Defaulter Dashboard", desc: "One-click block for students with overdue payments." },
  ];

  if (isSuccess) {
    return (
      <div className="pt-28 pb-20 bg-slate-900 min-h-screen flex items-center justify-center">
        <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-2xl text-center border-4 border-brand-500">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Application Received!</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Your university has been added to the <span className="font-bold text-brand-600">Priority Selection List</span>. 
            Our Grant Committee will review your student strength and institutional profile within 24 hours.
          </p>
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 mb-8">
            <p className="text-orange-800 font-bold text-sm">
              <Timer className="inline w-4 h-4 mr-1" />
              Due to high demand, verify your official email immediately to secure your spot.
            </p>
          </div>
          <button onClick={() => navigate('home')} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Sticky Urgency Header */}
      <div className="fixed top-0 left-0 w-full bg-red-600 text-white z-[60] py-2 text-center text-sm font-bold shadow-md">
        <span className="animate-pulse mr-2">🔥 HIGH DEMAND:</span> 
        Only 14 Lifetime Free Licenses remaining for this quarter. Offer closes in {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </div>

      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
              {/* Background Glows */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/40 via-slate-900 to-slate-900 z-0 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-brand-500/50 text-brand-300 text-sm font-bold uppercase tracking-widest mb-8">
                   <Landmark className="w-4 h-4 mr-2" /> Digital Campus Initiative
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
                  Get The World's Most Advanced<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-yellow-400">
                    Fee Collection Software
                  </span>
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                   <div className="flex items-center text-white text-xl md:text-2xl font-bold bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                      <Ban className="text-red-500 w-8 h-8 mr-3" />
                      ₹0 Setup Cost
                   </div>
                   <div className="flex items-center text-white text-xl md:text-2xl font-bold bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                      <History className="text-brand-400 w-8 h-8 mr-3" />
                      FREE for Lifetime*
                   </div>
                </div>
                <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-10">
                  Exclusively for selected Colleges & Universities in India. Eliminate leakage, automate reconciliation, and give your students a modern payment experience without paying a penny for the software.
                </p>
                <div className="inline-block animate-bounce">
                  <a href="#apply-form" className="inline-flex items-center bg-brand-600 hover:bg-brand-500 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-xl shadow-brand-600/30 transition-all transform hover:scale-105">
                    Claim Your Free License
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </a>
                </div>
                <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">No Credit Card Required • No Hidden Integration Fees</p>
              </div>
           </div>
        </div>

        {/* The "Why Free?" Credibility Section */}
        <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
           <h3 className="text-2xl font-bold text-slate-900 mb-4">Why are we doing this?</h3>
           <p className="text-slate-600 leading-relaxed text-lg">
             As part of our mission to digitize 1,000 Indian campuses by 2025, MasterRoll is waiving off all software licensing costs for qualifying institutions. We profit only when you grow—via optional premium add-ons in the future. 
             <br /><br />
             <span className="font-bold text-slate-900 bg-yellow-100 px-2 py-1 rounded">There is absolutely NO catch.</span> You get the Enterprise Edition.
           </p>
        </div>

        {/* Extensive Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Extensive University Features</h2>
             <p className="text-brand-600 font-bold mt-2 uppercase tracking-wide">Included in the Free License</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {extensiveFeatures.map((feat, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-sm">{feat.desc}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Application Form Section */}
        <div id="apply-form" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
             
             {/* Form Left Side (Dark) */}
             <div className="md:w-2/5 bg-slate-900 p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                   <Landmark size={200} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Selection Criteria</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <Users className="w-6 h-6 text-brand-400 mr-4 mt-1" />
                      <div>
                        <strong className="block text-lg">Student Strength</strong>
                        <p className="text-slate-400 text-sm">Ideally 500+ students. We support scale.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Building2 className="w-6 h-6 text-brand-400 mr-4 mt-1" />
                      <div>
                        <strong className="block text-lg">Institute Type</strong>
                        <p className="text-slate-400 text-sm">Colleges, Universities, and Group of Institutions.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-6 h-6 text-brand-400 mr-4 mt-1" />
                      <div>
                        <strong className="block text-lg">Fast Track</strong>
                        <p className="text-slate-400 text-sm">Institutes ready to go live within 30 days get priority.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-12 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="flex items-center text-red-400 font-bold mb-2">
                      <FileWarning className="w-5 h-5 mr-2" /> 
                      Offer Ending Soon
                    </div>
                    <p className="text-sm text-slate-300">
                      We can only onboard 50 institutions in this cohort to ensure quality support. Apply now to avoid waitlist.
                    </p>
                  </div>
                </div>
             </div>

             {/* Form Right Side */}
             <div className="md:w-3/5 p-10 md:p-12">
                <div className="text-center md:text-left mb-8">
                   <h2 className="text-3xl font-bold text-slate-900">Request Free License</h2>
                   <p className="text-slate-500 mt-2">Fill in accurate details for faster approval.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="space-y-4">
                     <div>
                       <label className="block text-sm font-bold text-slate-700 mb-1">University / College Name</label>
                       <div className="relative">
                         <Building2 className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                         <input required type="text" placeholder="e.g. National Institute of Technology..." className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                       </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-1">Total Students</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-500 outline-none">
                            <option>500 - 1,000</option>
                            <option>1,000 - 5,000</option>
                            <option>5,000 - 10,000</option>
                            <option>10,000+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-1">Your Role</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-500 outline-none">
                            <option>Principal / Dean</option>
                            <option>Registrar / Admin</option>
                            <option>Owner / Trustee</option>
                            <option>Finance Officer</option>
                          </select>
                        </div>
                     </div>

                     <div>
                       <label className="block text-sm font-bold text-slate-700 mb-1">Official Email Address</label>
                       <div className="relative">
                         <FileText className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                         <input required type="email" placeholder="registrar@university.edu.in" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                       </div>
                       <p className="text-xs text-slate-500 mt-1 ml-1">* Please use official institutional email domain.</p>
                     </div>

                     <div>
                       <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                       <input required type="tel" placeholder="+91 98765..." className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
                     </div>
                   </div>

                   <button 
                     type="submit" 
                     disabled={isLoading}
                     className="w-full bg-brand-600 hover:bg-brand-700 text-white text-xl font-bold py-4 rounded-xl shadow-xl shadow-brand-500/30 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95"
                   >
                     {isLoading ? (
                       <>
                         <Loader2 className="animate-spin mr-2 h-6 w-6" />
                         Submitting Application...
                       </>
                     ) : (
                       "Apply for Lifetime Free License"
                     )}
                   </button>
                   <p className="text-center text-xs text-slate-500 mt-4">
                     By submitting, you agree to our Terms. Zero software fees guaranteed for approved applicants.
                   </p>
                </form>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeeCollectionPromoPage;