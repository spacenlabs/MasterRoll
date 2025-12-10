import React, { useState } from 'react';
import { 
  Search, Calendar, Star, MapPin, BookOpen, CheckCircle2, 
  MonitorPlay, Video, DollarSign, UploadCloud, ShieldCheck,
  ArrowRight
} from '../components/Icons';
import CourseRegistrationModal from '../components/CourseRegistrationModal';
import { useNavigation } from '../contexts/NavigationContext';

export const BookClassPage: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const classes = [
    { title: "Advanced Mathematics", institute: "Sharma Tutorials", grade: "Class 10", rating: 4.8, price: "₹2,500/mo", tags: ["Online", "Weekend Batch"] },
    { title: "Physics Crash Course", institute: "Momentum Academy", grade: "Class 12", rating: 4.9, price: "₹5,000", tags: ["Offline", "Indiranagar"] },
    { title: "English Spoken", institute: "Lingua Franca", grade: "All Ages", rating: 4.6, price: "₹1,200/mo", tags: ["Online", "Evening"] },
    { title: "Java Programming", institute: "CodeKids", grade: "Class 8+", rating: 5.0, price: "₹3,000", tags: ["Online", "Certificate"] },
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-indigo-100 mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Find the Best Classes Near You</h1>
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <div className="flex-1 relative">
               <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
               <input type="text" placeholder="Subject or Skill..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500" />
            </div>
            <div className="flex-1 relative">
               <MapPin className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
               <input type="text" placeholder="Location..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500" />
            </div>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700">Search</button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-6">Trending Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex items-center text-sm font-bold text-slate-700">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  {cls.rating}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{cls.title}</h3>
              <p className="text-sm text-slate-500 mb-4">by {cls.institute}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {cls.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-slate-900">{cls.price}</span>
                <button onClick={() => setIsRegisterOpen(true)} className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700">Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CourseRegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
};

export const ListInstitutePage: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <div className="pt-28 pb-20 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900/50 border border-brand-700 text-brand-300 text-sm font-medium mb-6">
            For Institutes, Teachers & Creators
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Grow Your Institute with MasterRoll</h1>
          <p className="text-xl text-slate-300 mb-12">
            Whether you run a physical coaching center or sell digital courses online, we provide the platform to scale your education business.
          </p>
          
          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={() => navigate('demo')} className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
              List Offline Institute
            </button>
            <button onClick={() => navigate('lms-dashboard')} className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/25 flex items-center justify-center">
              <MonitorPlay className="w-5 h-5 mr-2" />
              Sell Digital Courses (LMS)
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left mb-24">
          <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-brand-500/50 transition-colors">
             <div className="bg-brand-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
             </div>
             <h3 className="font-bold text-xl mb-3">Zero Listing Fees</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               List your offline classes for free. We only charge a small commission on confirmed bookings made through our platform.
             </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-brand-500/50 transition-colors">
             <div className="bg-brand-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-yellow-400" />
             </div>
             <h3 className="font-bold text-xl mb-3">Automated Scheduling</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               Sync your batches and let students book slots based on real-time availability. Say goodbye to manual coordination.
             </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-brand-500/50 transition-colors">
             <div className="bg-brand-900/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-orange-400" />
             </div>
             <h3 className="font-bold text-xl mb-3">Brand Building</h3>
             <p className="text-slate-400 text-sm leading-relaxed">
               Collect verified reviews and showcase your success stories to attract more students from your city.
             </p>
          </div>
        </div>

        {/* LMS Feature Spotlight */}
        <div className="bg-gradient-to-br from-brand-900 to-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden border border-white/10">
           <div className="absolute top-0 right-0 p-12 opacity-5">
             <MonitorPlay size={400} />
           </div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-widest mb-4">
                   New Feature
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Launch Your Own Digital Academy</h2>
                 <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                   Are you a freelancer, subject expert, or institute? Monetize your knowledge with our built-in Learning Management System (LMS). Upload pre-recorded courses and sell them securely.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start">
                       <UploadCloud className="w-6 h-6 text-brand-400 mr-3 mt-1" />
                       <div className="text-left">
                          <strong className="block text-white">Easy Upload</strong>
                          <span className="text-sm text-slate-400">Drag & drop video hosting</span>
                       </div>
                    </div>
                    <div className="flex items-start">
                       <ShieldCheck className="w-6 h-6 text-brand-400 mr-3 mt-1" />
                       <div className="text-left">
                          <strong className="block text-white">Piracy Protection</strong>
                          <span className="text-sm text-slate-400">Encrypted video playback</span>
                       </div>
                    </div>
                    <div className="flex items-start">
                       <DollarSign className="w-6 h-6 text-brand-400 mr-3 mt-1" />
                       <div className="text-left">
                          <strong className="block text-white">Instant Payouts</strong>
                          <span className="text-sm text-slate-400">T+1 settlement cycle</span>
                       </div>
                    </div>
                    <div className="flex items-start">
                       <Video className="w-6 h-6 text-brand-400 mr-3 mt-1" />
                       <div className="text-left">
                          <strong className="block text-white">Live Classes</strong>
                          <span className="text-sm text-slate-400">Zoom/Meet integration</span>
                       </div>
                    </div>
                 </div>

                 <button onClick={() => navigate('lms-dashboard')} className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg flex items-center mx-auto lg:mx-0">
                    Try Creator Studio <ArrowRight className="ml-2 w-5 h-5" />
                 </button>
              </div>

              {/* Visual Graphic */}
              <div className="flex-1 w-full max-w-lg">
                 <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       <div className="ml-2 text-xs text-slate-400">MasterRoll Creator Dashboard</div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex gap-4">
                          <div className="flex-1 bg-slate-700 h-24 rounded-lg animate-pulse"></div>
                          <div className="flex-1 bg-slate-700 h-24 rounded-lg animate-pulse"></div>
                       </div>
                       <div className="bg-slate-700 h-40 rounded-lg animate-pulse"></div>
                       <div className="flex gap-4">
                          <div className="w-1/3 bg-slate-700 h-10 rounded-lg animate-pulse"></div>
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