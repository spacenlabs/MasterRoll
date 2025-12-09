import React, { useState } from 'react';
import { 
  CreditCard, Users, Calendar, BookOpen, MessageCircle, 
  BarChart3, Bus, ShieldCheck, ShoppingCart, Briefcase, 
  Video, FileText, Library, Landmark
} from './Icons';
import { ProductModule } from '../types';
import { useNavigation } from '../contexts/NavigationContext';

const categories = ["Management", "Learning", "Marketplace", "Operations"];

const products: ProductModule[] = [
  // Management
  {
    id: 'fees',
    category: 'Management',
    title: 'University Fee Suite',
    description: 'Enterprise-grade financial management for Colleges & Universities. Handle semester fees, grants, hostel dues, and alumni donations in one unified ledger.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    features: [
      { title: 'Semester Management', description: 'Complex fee structures.', icon: <Landmark size={18} /> },
      { title: 'Zero MDR Options', description: 'Maximize revenue.', icon: <CreditCard size={18} /> },
      { title: 'Grant Tracking', description: 'Scholarship mgmt.', icon: <FileText size={18} /> },
    ]
  },
  {
    id: 'erp',
    category: 'Management',
    title: 'Complete School ERP',
    description: 'A robust backbone for your institution. Manage students, staff, timetables, and attendance seamlessly.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
    features: [
      { title: 'Attendance Tracking', description: 'Biometric & Mobile app.', icon: <Users size={18} /> },
      { title: 'Timetable Manager', description: 'Conflict-free scheduling.', icon: <Calendar size={18} /> },
      { title: 'Parent Portal', description: 'Real-time student progress tracking & direct communication channels.', icon: <Users size={18} /> },
    ]
  },
  // Learning
  {
    id: 'ai',
    category: 'Learning',
    title: 'AI Doubt Solving',
    description: 'Empower students with 24/7 assistance. Our Gemini-powered AI helps solve doubts in real-time.',
    image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800',
    features: [
      { title: 'Instant Answers', description: 'Context-aware responses.', icon: <MessageCircle size={18} /> },
      { title: 'Exam Prep', description: 'Custom quizzes generated.', icon: <FileText size={18} /> },
      { title: 'NCERT Linked', description: 'Answers mapped to syllabus.', icon: <BookOpen size={18} /> },
    ]
  },
  {
    id: 'library',
    category: 'Learning',
    title: 'Digital Library & NCERT',
    description: 'Access thousands of curated e-books and official videos mapped to the Indian curriculum.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800',
    features: [
      { title: 'E-Books', description: 'Complete NCERT repository.', icon: <Library size={18} /> },
      { title: 'Video Lessons', description: 'Topic-wise curated content.', icon: <Video size={18} /> },
      { title: 'Revision Tools', description: 'Smart notes & planners.', icon: <BookOpen size={18} /> },
    ]
  },
  // Marketplace
  {
    id: 'hiring',
    category: 'Marketplace',
    title: 'Teacher Hiring Portal',
    description: 'Find the best talent for your school. Post jobs, review applications, and access premium teacher profiles via subscription.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    features: [
      { title: 'Job Postings', description: 'Reach thousands of educators.', icon: <Briefcase size={18} /> },
      { title: 'Substitute Supply', description: 'On-demand teacher supply.', icon: <Users size={18} /> },
      { title: 'Premium Access', description: 'Unlock teacher contacts.', icon: <ShieldCheck size={18} /> },
    ]
  },
  {
    id: 'vendor',
    category: 'Marketplace',
    title: 'Vendor Procurement',
    description: 'Bulk order school supplies at wholesale rates. From uniforms to smart boards, get it all here.',
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e37d74e?auto=format&fit=crop&q=80&w=800',
    features: [
      { title: 'Bulk Ordering', description: 'Streamlined workflows.', icon: <ShoppingCart size={18} /> },
      { title: 'Verified Vendors', description: 'Quality assured network.', icon: <ShieldCheck size={18} /> },
      { title: 'Best Rates', description: 'Competitive B2B pricing.', icon: <CreditCard size={18} /> },
    ]
  },
  // Operations
  {
    id: 'transport',
    category: 'Operations',
    title: 'Transport & Security',
    description: 'Ensure student safety with live tracking and automated alerts for parents.',
    image: 'https://images.unsplash.com/photo-1570126618953-d437136e8c03?auto=format&fit=crop&q=80&w=800',
    features: [
      { title: 'GPS Tracking', description: 'Live bus location.', icon: <Bus size={18} /> },
      { title: 'RFID Attendance', description: 'Automated boarding logs.', icon: <ShieldCheck size={18} /> },
      { title: 'Insurance', description: 'Integrated vehicle insurance.', icon: <FileText size={18} /> },
    ]
  },
  {
    id: 'analytics',
    category: 'Operations',
    title: 'Analytics Suite',
    description: 'Data-driven decisions for school owners. Visualize financial health and academic performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    features: [
      { title: 'Fee Analytics', description: 'Revenue forecasting.', icon: <BarChart3 size={18} /> },
      { title: 'Engagement Stats', description: 'Student participation.', icon: <BarChart3 size={18} /> },
      { title: 'Role Dashboards', description: 'Custom views for admins.', icon: <Users size={18} /> },
    ]
  },
  // Operations
];

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Management");
  const { navigate } = useNavigation();

  const filteredProducts = products.filter(p => p.category === activeTab);

  const handleLearnMore = (productId: string) => {
    if (productId === 'fees') {
      navigate('fee-collection-promo');
    } else if (productId === 'erp') {
      navigate('school-erp');
    } else if (productId === 'hiring') {
      navigate('teacher-hiring');
    } else if (productId === 'vendor') {
      navigate('vendor-marketplace');
    } else {
      navigate('demo'); // Default fallback
    }
  };

  return (
    <div id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Everything Your Institution Needs to <span className="text-brand-600">Excel</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive suite of tools designed for schools, colleges, and universities in the Indian educational landscape.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 bg-slate-100 p-1 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === cat 
                    ? 'bg-white text-brand-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {product.id === 'fees' && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20 animate-pulse">
                    Limited Free Lifetime Offer
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  {product.description}
                </p>
                <div className="space-y-4 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 p-1 bg-brand-100 rounded text-brand-600">
                        {feature.icon}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-slate-900">{feature.title}</p>
                        <p className="text-sm text-slate-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => handleLearnMore(product.id)}
                  className={`w-full py-3 border font-bold rounded-xl transition-all flex items-center justify-center ${
                    product.id === 'fees'
                    ? 'bg-brand-600 text-white border-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/30'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200'
                  }`}
                >
                  {product.id === 'fees' ? 'Apply for Free License' : 'Explore Features'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;