import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Star, Filter, ShoppingCart, Truck, CreditCard, Building2, ArrowRight, Utensils, Award, LogOut, CheckCircle2, DollarSign, Clock, FileUp } from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';
import { useJobs } from '../contexts/JobContext';
import JobApplicationModal from '../components/JobApplicationModal';
import { Job } from '../types';

export const TeacherHiringPage: React.FC = () => {
  const { navigate } = useNavigation();
  const { jobs } = useJobs();
  const [activeTab, setActiveTab] = useState<'teachers' | 'jobs'>('teachers');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Mock Data for Teachers
  const teachers = [
    { name: "Amit Verma", subject: "Physics", exp: "8 Years", rating: 4.9, location: "Delhi, NCR", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
    { name: "Sarah Jenkins", subject: "English Lit", exp: "5 Years", rating: 4.7, location: "Bangalore", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
    { name: "Rahul Dravid", subject: "Mathematics", exp: "12 Years", rating: 5.0, location: "Mumbai", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
    { name: "Priya Singh", subject: "Chemistry", exp: "6 Years", rating: 4.8, location: "Pune", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
  ];

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              Teacher Marketplace
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              {activeTab === 'teachers' ? 'Find the Perfect Educator' : 'Explore Teaching Opportunities'}
            </h1>
            <p className="text-slate-600 mt-2">
              {activeTab === 'teachers' 
                ? 'Browse 10,000+ verified profiles of qualified teachers.' 
                : 'Find your dream teaching job at top institutions.'}
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-4">
             <div className="bg-white p-1 rounded-xl border border-slate-200 flex shadow-sm">
                <button 
                  onClick={() => setActiveTab('teachers')}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'teachers' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  For Recruiters
                </button>
                <button 
                  onClick={() => setActiveTab('jobs')}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'jobs' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  For Teachers
                </button>
             </div>
             {activeTab === 'teachers' && (
                <button onClick={() => navigate('post-job')} className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/30 flex items-center">
                  <FileUp className="w-4 h-4 mr-2" /> Post a Job
                </button>
             )}
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'teachers' ? (
          <>
            {/* Search Bar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-12 flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                <input type="text" placeholder="Search by subject (e.g. Physics, Math)..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                <input type="text" placeholder="Location (e.g. Bangalore)..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-orange-200" />
              </div>
              <button className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors">Search</button>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {teachers.map((teacher, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={teacher.img} alt={teacher.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold text-slate-900">{teacher.name}</h3>
                      <p className="text-sm text-slate-500">{teacher.subject}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-slate-600">
                      <Briefcase className="w-4 h-4 mr-2 text-slate-400" />
                      {teacher.exp} Experience
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                      {teacher.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                      {teacher.rating}/5.0 Rating
                    </div>
                  </div>
                  <button onClick={() => navigate('demo')} className="w-full py-2 border border-orange-600 text-orange-600 rounded-lg font-bold hover:bg-orange-50 transition-colors">
                    View Profile
                  </button>
                </div>
              ))}
            </div>

            {/* Subscription Plans */}
            <div className="border-t border-slate-200 pt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Unlock Premium Access</h2>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                  Get direct access to phone numbers and emails of verified candidates. Choose a subscription plan that fits your hiring needs.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Free Plan */}
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Basic Access</h3>
                  <div className="text-3xl font-bold text-slate-900 mb-6">Free</div>
                  <ul className="space-y-4 mb-8 flex-1">
                     <li className="flex items-center text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Browse Verified Profiles</li>
                     <li className="flex items-center text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Post 1 Job Vacancy</li>
                     <li className="flex items-center text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> View Public Info</li>
                     <li className="flex items-center text-slate-400"><CheckCircle2 className="w-5 h-5 text-slate-300 mr-2" /> Contact Details</li>
                  </ul>
                  <button onClick={() => navigate('demo')} className="w-full py-3 border border-slate-300 rounded-xl font-bold text-slate-700 hover:bg-slate-50">Get Started</button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white rounded-2xl p-8 border-2 border-orange-500 shadow-xl relative flex flex-col transform md:scale-105 z-10">
                  <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">POPULAR</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Pro Recruiter</h3>
                  <div className="text-3xl font-bold text-slate-900 mb-6">₹4,999 <span className="text-sm text-slate-500 font-normal">/year</span></div>
                  <ul className="space-y-4 mb-8 flex-1">
                     <li className="flex items-center text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-2" /> Unlock 500 Contacts</li>
                     <li className="flex items-center text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-2" /> Unlimited Job Posts</li>
                     <li className="flex items-center text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-2" /> Verified Teacher Badge</li>
                     <li className="flex items-center text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-2" /> Priority Support</li>
                  </ul>
                  <button onClick={() => navigate('demo')} className="w-full py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 shadow-lg shadow-orange-500/30">Subscribe Now</button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">School Network</h3>
                  <div className="text-3xl font-bold text-slate-900 mb-6">₹12,999 <span className="text-sm text-slate-500 font-normal">/year</span></div>
                  <ul className="space-y-4 mb-8 flex-1">
                     <li className="flex items-center text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Unlimited Contact Access</li>
                     <li className="flex items-center text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Multi-Branch Access</li>
                     <li className="flex items-center text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Dedicated Account Manager</li>
                     <li className="flex items-center text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Bulk Data Export</li>
                  </ul>
                  <button onClick={() => navigate('demo')} className="w-full py-3 border border-slate-300 rounded-xl font-bold text-slate-700 hover:bg-slate-50">Contact Sales</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Jobs Board View */}
            <div className="grid lg:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <div className="flex items-center text-slate-600 mt-1 font-medium">
                        <Building2 className="w-4 h-4 mr-2" />
                        {job.institution}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{job.postedDate}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 my-6">
                     <div className="flex items-center text-sm text-slate-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                       <MapPin className="w-4 h-4 mr-2 text-blue-500" /> {job.location}
                     </div>
                     <div className="flex items-center text-sm text-slate-600 bg-green-50 px-3 py-1.5 rounded-lg">
                       <DollarSign className="w-4 h-4 mr-2 text-green-500" /> {job.salary}
                     </div>
                     <div className="flex items-center text-sm text-slate-600 bg-purple-50 px-3 py-1.5 rounded-lg">
                       <Briefcase className="w-4 h-4 mr-2 text-purple-500" /> {job.type}
                     </div>
                     <div className="flex items-center text-sm text-slate-600 bg-orange-50 px-3 py-1.5 rounded-lg">
                       <Clock className="w-4 h-4 mr-2 text-orange-500" /> {job.experience}
                     </div>
                  </div>

                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {job.description}
                  </p>

                  <button 
                    onClick={() => handleApply(job)}
                    className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
      
      {/* Modals */}
      <JobApplicationModal 
        job={selectedJob} 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
      />
    </div>
  );
};

export const VendorMarketplacePage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Books", "Stationery", "Uniforms", "Electronics", "Furniture", "Lab Equipment", "Sports", "Cafeteria"];

  const products = [
    {
      id: 1,
      name: "Complete NCERT Book Set (Class 1-12)",
      category: "Books",
      price: "₹850 - ₹2,200",
      minOrder: "50 Sets",
      supplier: "Saraswati Publications",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Ergonomic Student Desk & Chair",
      category: "Furniture",
      price: "₹2,400 / unit",
      minOrder: "20 Units",
      supplier: "Royal School Furniture",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1503602642458-232111445857?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Smart Classroom Interactive Board (75\")",
      category: "Electronics",
      price: "₹75,000",
      minOrder: "1 Unit",
      supplier: "EduTech Systems",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      name: "Premium School Uniform Fabric (Grey)",
      category: "Uniforms",
      price: "₹180 / meter",
      minOrder: "100 Meters",
      supplier: "TexFab Mills",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 5,
      name: "Bulk A4 Notebooks (172 Pages)",
      category: "Stationery",
      price: "₹28 / unit",
      minOrder: "500 Units",
      supplier: "Classmate Wholesale",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 6,
      name: "Physics Lab Equipment Kit",
      category: "Lab Equipment",
      price: "₹12,500 / kit",
      minOrder: "2 Kits",
      supplier: "Science Pro Labs",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 7,
      name: "CCTV Security System (16 Channel)",
      category: "Electronics",
      price: "₹24,000",
      minOrder: "1 Set",
      supplier: "SecureCam India",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 8,
      name: "Library Bookshelf (Double Sided)",
      category: "Furniture",
      price: "₹8,500",
      minOrder: "5 Units",
      supplier: "WoodCraft Educational",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1507842217121-e859c164fa9a?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 9,
      name: "Full Cricket Kit (Junior)",
      category: "Sports",
      price: "₹4,500 / kit",
      minOrder: "10 Kits",
      supplier: "Champion Sports",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 10,
      name: "Healthy Snack Packs (Bulk)",
      category: "Cafeteria",
      price: "₹20 / pack",
      minOrder: "200 Packs",
      supplier: "Fresh Foods Inc",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Vendor Procurement Marketplace
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Wholesale School Supplies</h1>
            <p className="text-slate-600 text-lg">
              One-stop shop for all institutional needs. Procure directly from verified manufacturers at unbeatable B2B rates.
            </p>
          </div>
          
          {/* Prominent Register as Vendor CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-1 rounded-2xl shadow-xl w-full lg:w-auto transform hover:scale-105 transition-transform duration-300">
             <div className="bg-white rounded-xl p-6 flex flex-col items-start lg:items-center">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">For Suppliers</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Sell to 500+ Schools</h3>
                <div className="flex gap-2 w-full">
                  <button 
                    onClick={() => navigate('vendor-registration')} 
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center whitespace-nowrap shadow-lg shadow-blue-500/30"
                  >
                    Register <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => navigate('vendor-dashboard')} 
                    className="px-4 py-3 bg-slate-100 text-slate-700 rounded-lg font-bold hover:bg-slate-200 transition-colors flex items-center justify-center"
                    title="Vendor Login"
                  >
                    Login
                  </button>
                </div>
             </div>
          </div>
        </div>

        {/* Search & Stats Bar */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
           <div className="md:col-span-2 relative">
             <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
             <input 
               type="text" 
               placeholder="Search products (e.g. Desks, Projectors)..." 
               className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm outline-none focus:ring-2 focus:ring-blue-500" 
             />
           </div>
           <div className="bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center gap-2">
             <Truck className="w-5 h-5 text-blue-600" />
             <span className="font-semibold text-slate-700 text-sm">Pan-India Delivery</span>
           </div>
           <div className="bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center gap-2">
             <CreditCard className="w-5 h-5 text-blue-600" />
             <span className="font-semibold text-slate-700 text-sm">Credit Available</span>
           </div>
        </div>

        {/* Filters */}
        <div className="mb-8 overflow-x-auto pb-4 hide-scrollbar">
           <div className="flex space-x-2">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                   activeCategory === cat 
                   ? 'bg-blue-600 text-white shadow-md' 
                   : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-slate-700 flex items-center shadow-sm">
                  <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                  {product.rating}
                </div>
                {product.category === 'Books' && (
                  <div className="absolute bottom-2 left-2 bg-blue-600/90 text-white text-[10px] font-bold px-2 py-1 rounded">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="text-xs font-bold text-blue-600 mb-1 uppercase tracking-wide">{product.category}</div>
                <h3 className="font-bold text-slate-900 mb-2 leading-tight h-10 line-clamp-2 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-slate-900">{product.price}</div>
                  <div className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">MOQ: {product.minOrder}</div>
                </div>
                <div className="border-t border-slate-100 pt-3 mb-4">
                  <div className="text-xs text-slate-500 mb-1">Supplier</div>
                  <div className="flex items-center text-sm font-medium text-slate-800">
                    <Building2 className="w-3 h-3 mr-1 text-slate-400" />
                    {product.supplier}
                  </div>
                </div>
                <button onClick={() => navigate('demo')} className="w-full py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
               <Truck className="w-5 h-5 text-blue-600" />
             </div>
             <h3 className="font-bold text-slate-900 mb-2">Fast Logistics</h3>
             <p className="text-sm text-slate-600">Integrated logistics ensures timely delivery for all bulk orders across India.</p>
           </div>
           <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
               <Award className="w-5 h-5 text-blue-600" />
             </div>
             <h3 className="font-bold text-slate-900 mb-2">Quality Verified</h3>
             <p className="text-sm text-slate-600">All vendors undergo a 3-step verification process including site visits.</p>
           </div>
           <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
               <CreditCard className="w-5 h-5 text-blue-600" />
             </div>
             <h3 className="font-bold text-slate-900 mb-2">Credit Terms</h3>
             <p className="text-sm text-slate-600">Flexible payment terms and credit lines available for verified institutions.</p>
           </div>
        </div>

      </div>
    </div>
  );
};