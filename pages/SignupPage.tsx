
import React, { useState, useEffect } from 'react';
import { 
  User, GraduationCap, Building2, Truck, Baby,
  ArrowRight, Mail, Lock, Phone, Loader2, CheckCircle2,
  ShieldCheck, Sparkles, BookOpen, AlertCircle, Award, Book
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';
import { registerUser } from '../services/formService';

type SignupRole = 'student' | 'teacher' | 'parent' | 'org' | 'vendor';

const SignupPage: React.FC = () => {
  const { navigate, currentPage } = useNavigation();
  const [role, setRole] = useState<SignupRole>('student');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Categorized subjects for various boards
  const BOARD_SUBJECTS = {
    "CBSE / ICSE (K-12)": [
      "Mathematics", "Physics", "Chemistry", "Biology", "Accountancy", "Business Studies", 
      "Economics", "History", "Geography", "Political Science", "Sociology", "Psychology", 
      "Computer Science", "Informatics Practices", "Physical Education", "English Core", 
      "Hindi", "Sanskrit", "French", "German"
    ],
    "IB (International Baccalaureate)": [
      "Math Analysis & Approaches (SL/HL)", "Math Applications & Interpretation (SL/HL)",
      "Physics (SL/HL)", "Chemistry (SL/HL)", "Biology (SL/HL)", "Economics (SL/HL)",
      "Business Management", "Psychology (SL/HL)", "Global Politics", 
      "Environmental Systems & Societies", "Theory of Knowledge"
    ],
    "UGC / Higher Education": [
      "Commerce", "Management", "Computer Applications (MCA/BCA)", "Law", "Education (B.Ed/M.Ed)",
      "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", 
      "Electronics & Communication", "Philosophy", "Fine Arts", "Performing Arts",
      "Library & Information Science", "Social Work", "Mass Communication"
    ]
  };

  useEffect(() => {
    if (window.location.hash === '#teacher') setRole('teacher');
    if (window.location.hash === '#student') setRole('student');
    if (window.location.hash === '#school') setRole('org');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const payload = { ...data, account_role: role };
    const result = await registerUser(payload);

    setIsLoading(false);
    if (result.success) {
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setError((result as any).error || "Registration failed. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-xl text-center border border-slate-100">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Welcome to the Ecosystem!</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Your {role} account has been created. {role === 'teacher' ? 'Your profile is now being indexed in our hiring marketplace.' : 'You can now access your personalized dashboard.'}
          </p>
          <div className="space-y-4">
            <button onClick={() => navigate('login')} className="w-full py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/30 transform active:scale-[0.98]">
              Go to Login
            </button>
            <button onClick={() => navigate('home')} className="w-full py-4 bg-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-200 transition-all">
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Left Branding */}
        <div className="hidden lg:flex bg-slate-900 p-16 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-16">
               <div className="bg-brand-600 p-2 rounded-xl shadow-lg shadow-brand-600/20">
                 <ShieldCheck className="text-white w-8 h-8" />
               </div>
               <span className="text-2xl font-black text-white tracking-tighter uppercase italic">MasterRoll</span>
            </div>
            
            <h1 className="text-5xl font-black text-white leading-[1.1] mb-10">
              Transforming <span className="text-brand-400">Education</span> across Bharat.
            </h1>
            
            <div className="space-y-8">
               <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-2xl text-brand-400 shadow-inner">
                     <Award size={24} />
                  </div>
                  <div>
                     <p className="text-white font-bold text-lg">Verified Marketplace</p>
                     <p className="text-slate-400 text-sm">Every teacher and vendor is manually verified.</p>
                  </div>
               </div>
               <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-2xl text-brand-400 shadow-inner">
                     <BookOpen size={24} />
                  </div>
                  <div>
                     <p className="text-white font-bold text-lg">Centralized ERP</p>
                     <p className="text-slate-400 text-sm">One software to run your entire institution.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative z-10 pt-12 border-t border-white/10">
            <p className="text-slate-400 text-sm italic font-medium">
              "MasterRoll integrated our school with a 24/7 AI tutor and solved our fee leakage issues in months."
            </p>
            <div className="mt-6 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-slate-400">RK</div>
               <div>
                  <p className="text-white text-sm font-bold">Rajesh Khanna</p>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Principal, NIET</p>
               </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-8 md:p-14">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Create Account</h2>
            <p className="text-slate-500 mt-2 text-lg">Join the MasterRoll Education Ecosystem.</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-center animate-in slide-in-from-top-1 rounded-r-xl">
              <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              {error}
            </div>
          )}

          {/* Role Grid */}
          <div className="grid grid-cols-5 gap-3 mb-12">
             {[
               { id: 'student', icon: <GraduationCap size={20} />, label: 'Student' },
               { id: 'teacher', icon: <User size={20} />, label: 'Teacher' },
               { id: 'parent', icon: <Baby size={20} />, label: 'Parent' },
               { id: 'org', icon: <Building2 size={20} />, label: 'School' },
               { id: 'vendor', icon: <Truck size={20} />, label: 'Vendor' }
             ].map((r) => (
               <button
                 key={r.id}
                 type="button"
                 onClick={() => setRole(r.id as SignupRole)}
                 className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-2 group ${role === r.id ? 'bg-brand-50 border-brand-600 text-brand-700 shadow-xl ring-4 ring-brand-500/10' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'}`}
               >
                 <div className={`${role === r.id ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>{r.icon}</div>
                 <span className="text-[10px] font-black uppercase tracking-widest">{r.label}</span>
               </button>
             ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-widest">Full Name</label>
                <input name="full_name" required type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white outline-none transition-all font-bold" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-widest">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-5 top-[18px] text-slate-400 font-bold">+91</span>
                  <input name="phone" required type="tel" className="w-full pl-14 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 focus:bg-white outline-none transition-all font-bold" placeholder="9876543210" />
                </div>
              </div>
            </div>

            {/* Conditional Role-Based Fields */}
            {role === 'teacher' && (
              <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-1 duration-300">
                <div>
                   <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-widest">Primary Subject</label>
                   <select name="subject" required className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white outline-none font-bold appearance-none">
                      <option value="">Select Subject</option>
                      {Object.entries(BOARD_SUBJECTS).map(([board, subjects]) => (
                        <optgroup key={board} label={board}>
                          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                        </optgroup>
                      ))}
                   </select>
                </div>
                <div>
                   <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-widest">Experience</label>
                   <input name="experience" type="text" placeholder="e.g. 5+ Years" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white outline-none font-bold" />
                </div>
              </div>
            )}

            {role === 'student' && (
              <div className="animate-in fade-in slide-in-from-top-1 duration-300">
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-widest">Grade / Class</label>
                <select name="class" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white outline-none font-bold">
                   <option>Class 8</option><option>Class 9</option><option>Class 10</option><option>Class 11</option><option>Class 12</option><option>UG/PG</option>
                </select>
              </div>
            )}

            {role === 'org' && (
              <div className="animate-in fade-in slide-in-from-top-1 duration-300">
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-widest">Institution Name</label>
                <div className="relative">
                  <Building2 className="absolute left-5 top-4 text-slate-400 w-6 h-6" />
                  <input name="institution_name" required type="text" className="w-full pl-14 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white outline-none font-bold" placeholder="e.g. Modern Public School" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-widest">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-4 text-slate-400 w-6 h-6" />
                <input name="email" required type="email" className="w-full pl-14 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-bold" placeholder="name@domain.com" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-widest">Secret Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-4 text-slate-400 w-6 h-6" />
                <input name="password" required type="password" className="w-full pl-14 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-bold" placeholder="••••••••" />
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-slate-900 text-white font-black uppercase tracking-widest py-5 rounded-3xl hover:bg-brand-600 transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center disabled:opacity-70 transform active:scale-[0.98]"
              >
                {isLoading ? <Loader2 className="animate-spin mr-3 h-6 w-6" /> : "Complete Registration"}
                {!isLoading && <ArrowRight className="ml-3 h-5 w-5" />}
              </button>
            </div>

            <div className="text-center pt-8 border-t border-slate-100 mt-8">
               <p className="text-slate-500 text-sm font-medium">
                 Already on MasterRoll? <button type="button" onClick={() => navigate('login')} className="text-brand-600 font-black uppercase tracking-tighter hover:underline">Log in &rarr;</button>
               </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;
