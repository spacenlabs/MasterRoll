
import React, { useState, useEffect } from 'react';
import { 
  Search, MapPin, Briefcase, Star, Filter, ShoppingCart, Truck, CreditCard, Building2, 
  ArrowRight, Utensils, Award, LogOut, CheckCircle2, DollarSign, Clock, FileUp, Loader2,
  UserPlus, ShieldCheck, GraduationCap
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';
import { useJobs } from '../contexts/JobContext';
import JobApplicationModal from '../components/JobApplicationModal';
import QuoteRequestModal from '../components/QuoteRequestModal';
import TeacherProfileModal from '../components/TeacherProfileModal';
import { Job, VendorProduct, TeacherProfile } from '../types';
import { fetchTeachers, fetchVendorProducts } from '../services/formService';

// Fix: Added missing Badge component definition
const Badge = ({ children, variant = 'blue' }: any) => {
  const colors: any = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-emerald-100 text-emerald-700',
    red: 'bg-rose-100 text-rose-700',
    orange: 'bg-orange-100 text-orange-700',
    slate: 'bg-slate-100 text-slate-600',
  };
  return <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${colors[variant]}`}>{children}</span>;
};

export const TeacherHiringPage: React.FC = () => {
  const { navigate } = useNavigation();
  const { jobs, isLoading: isJobsLoading } = useJobs();
  const [activeTab, setActiveTab] = useState<'teachers' | 'jobs'>('teachers');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherProfile | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  const [teachers, setTeachers] = useState<TeacherProfile[]>([]);
  const [isLoadingTeachers, setIsLoadingTeachers] = useState(true);

  useEffect(() => {
    const loadTeachers = async () => {
      setIsLoadingTeachers(true);
      const data = await fetchTeachers();
      if (data.length > 0) {
        setTeachers(data);
      } else {
        setTeachers([
          { 
            id: '1',
            name: "Amit Verma", 
            subject: "Physics", 
            exp: "8 Years", 
            rating: 4.9, 
            location: "Delhi, NCR", 
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
            bio: "Passionate Physics educator with a track record of coaching students for JEE Advanced.",
            education: "M.Sc Physics, DU",
            skills: ["JEE Advanced", "Mechanics"],
            certifications: ["CSIR NET Qualified"],
            availability: "Immediate",
            languages: ["English", "Hindi"]
          }
        ]);
      }
      setIsLoadingTeachers(false);
    };
    loadTeachers();
  }, []);

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  const handleViewProfile = (teacher: TeacherProfile) => {
    setSelectedTeacher(teacher);
    setIsProfileModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Marketplace Banner */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 mb-12 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-12 opacity-10"><Briefcase size={240} /></div>
           <div className="relative z-10 grid lg:grid-cols-2 items-center gap-12">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/50 text-brand-300 text-[10px] font-black uppercase tracking-widest mb-6">
                   <ShieldCheck size={14} className="mr-2" /> Verified Talent Network
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Find Your Next <span className="text-brand-400">Expert Educator</span>
                </h1>
                <p className="text-slate-400 text-lg mb-8 max-w-md">
                   The largest database of verified teachers for physical schools and online digital academies.
                </p>
                <div className="flex flex-wrap gap-4">
                   <button onClick={() => navigate('signup')} className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-brand-600/20">
                      Join as Teacher
                   </button>
                   <button onClick={() => navigate('signup')} className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                      School Registration
                   </button>
                </div>
              </div>
              
              {/* Quick Search */}
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10">
                 <div className="space-y-4">
                    <div className="relative">
                       <Search className="absolute left-4 top-3.5 text-slate-500" size={18} />
                       <input type="text" placeholder="Search Subject..." className="w-full pl-12 pr-4 py-3.5 bg-white border-0 rounded-2xl outline-none text-slate-900 text-sm font-bold shadow-lg" />
                    </div>
                    <div className="relative">
                       <MapPin className="absolute left-4 top-3.5 text-slate-500" size={18} />
                       <input type="text" placeholder="Location..." className="w-full pl-12 pr-4 py-3.5 bg-white border-0 rounded-2xl outline-none text-slate-900 text-sm font-bold shadow-lg" />
                    </div>
                    <button className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Filter Marketplace</button>
                 </div>
              </div>
           </div>
        </div>

        {/* Toggle Nav */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl border border-slate-200 flex shadow-sm">
            <button 
              onClick={() => setActiveTab('teachers')}
              className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'teachers' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Browse Teachers
            </button>
            <button 
              onClick={() => setActiveTab('jobs')}
              className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'jobs' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Job Board
            </button>
          </div>
        </div>

        {activeTab === 'teachers' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoadingTeachers ? (
               <div className="col-span-full py-20 text-center"><Loader2 className="animate-spin mx-auto text-brand-600" /></div>
            ) : (
              teachers.map(teacher => (
                <div key={teacher.id} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4"><button className="text-slate-200 hover:text-red-500 transition-colors"><CheckCircle2 size={20}/></button></div>
                   <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-24 h-24 rounded-[2rem] overflow-hidden mb-4 border-4 border-slate-50 shadow-inner">
                         <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900">{teacher.name}</h3>
                      <p className="text-brand-600 text-[10px] font-black uppercase tracking-widest mt-1">{teacher.subject} Expert</p>
                   </div>
                   
                   <div className="space-y-3 mb-8 bg-slate-50 p-4 rounded-2xl">
                      <div className="flex items-center justify-between text-xs">
                         <span className="text-slate-400 font-bold uppercase tracking-tighter">Experience</span>
                         <span className="text-slate-900 font-black">{teacher.exp}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                         <span className="text-slate-400 font-bold uppercase tracking-tighter">Rating</span>
                         <span className="text-slate-900 font-black flex items-center"><Star className="w-3 h-3 text-yellow-400 mr-1 fill-current"/> {teacher.rating}</span>
                      </div>
                   </div>
                   
                   <button 
                     onClick={() => handleViewProfile(teacher)} 
                     className="w-full py-3.5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg group-hover:bg-brand-600 transition-all"
                   >
                     Unlock Profile
                   </button>
                </div>
              ))
            )}
            
            {/* CTA Card for unregistered teachers */}
            <div className="bg-brand-50 rounded-[2rem] p-8 border-2 border-dashed border-brand-200 flex flex-col items-center justify-center text-center">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-brand-600"><UserPlus size={28}/></div>
               <h3 className="text-xl font-black text-brand-900">Are you a Teacher?</h3>
               <p className="text-brand-700 text-sm mt-2 mb-6">Get discovered by top institutions across India.</p>
               <button onClick={() => navigate('signup')} className="px-8 py-3 bg-brand-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-brand-500/20">Create My Profile</button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {isJobsLoading ? (
               <div className="col-span-full py-20 text-center"><Loader2 className="animate-spin mx-auto text-brand-600" /></div>
            ) : (
              jobs.map(job => (
                <div key={job.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all relative">
                   <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-4">
                         <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><Building2 size={24}/></div>
                         <div>
                            <h3 className="text-xl font-black text-slate-900">{job.title}</h3>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{job.institution}</p>
                         </div>
                      </div>
                      <Badge variant="orange">{job.type}</Badge>
                   </div>
                   
                   <div className="flex flex-wrap gap-3 mb-8">
                      <div className="px-4 py-2 bg-slate-50 rounded-xl text-slate-600 text-xs font-bold flex items-center"><MapPin size={12} className="mr-2"/> {job.location}</div>
                      <div className="px-4 py-2 bg-slate-50 rounded-xl text-slate-600 text-xs font-bold flex items-center"><DollarSign size={12} className="mr-2"/> {job.salary}</div>
                   </div>

                   <button onClick={() => handleApply(job)} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-brand-600 transition-all shadow-xl">Apply Directly</button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      
      <JobApplicationModal job={selectedJob} isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
      <TeacherProfileModal teacher={selectedTeacher} isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </div>
  );
};

export const VendorMarketplacePage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [quoteProduct, setQuoteProduct] = useState<VendorProduct | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<VendorProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchVendorProducts().then(data => {
      setProducts(data.length > 0 ? data : []); // Realistically we'd have default items
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-blue-600 rounded-[3rem] p-12 mb-12 text-white text-center shadow-2xl shadow-blue-600/20">
            <h1 className="text-5xl font-black mb-6">Bulk Institutional Procurement</h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">Lowest wholesale rates for school uniforms, smart boards, and stationery.</p>
            <div className="flex justify-center gap-6">
               <button onClick={() => navigate('vendor-registration')} className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl">Register as Vendor</button>
               <button onClick={() => navigate('signup')} className="bg-blue-900/50 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest border border-blue-400/30">School Accounts</button>
            </div>
         </div>
         {/* ... (rest of vendor grid) */}
      </div>
    </div>
  );
};
