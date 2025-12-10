import React, { useState } from 'react';
import { 
  LayoutDashboard, Video, Users, DollarSign, Settings, LogOut, 
  Plus, Search, MoreVertical, PlayCircle, Star, TrendingUp, 
  UploadCloud, Image, Film, CheckCircle2, Loader2, ArrowLeft,
  MonitorPlay
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';
import { DigitalCourse } from '../types';

const LMSDashboardPage: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const [activeTab, setActiveTab] = useState('courses');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Mock Data
  const courses: DigitalCourse[] = [
    {
      id: '1',
      title: 'Complete Python Bootcamp 2024',
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=400',
      price: '₹499',
      sales: 1240,
      revenue: '₹6,18,760',
      status: 'Active',
      rating: 4.8
    },
    {
      id: '2',
      title: 'Vedic Maths Masterclass',
      thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=400',
      price: '₹299',
      sales: 850,
      revenue: '₹2,54,150',
      status: 'Active',
      rating: 4.9
    },
    {
      id: '3',
      title: 'IELTS Speaking Prep',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
      price: '₹999',
      sales: 45,
      revenue: '₹44,955',
      status: 'Draft',
      rating: 0
    }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden lg:flex flex-col fixed h-full top-0 pt-20 z-10 left-0 border-r border-slate-800">
        <div className="px-6 py-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
             <div className="bg-brand-600 p-2 rounded-lg">
                <MonitorPlay className="w-5 h-5 text-white" />
             </div>
             <div>
               <h2 className="text-lg font-bold">Creator Studio</h2>
               <p className="text-xs text-slate-400">Sharma Tutorials</p>
             </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <LayoutDashboard size={20} className="mr-3" />
            Dashboard
          </button>
          <button 
             onClick={() => setActiveTab('courses')}
             className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'courses' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Video size={20} className="mr-3" />
            My Courses
          </button>
          <button 
             onClick={() => setActiveTab('students')}
             className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'students' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Users size={20} className="mr-3" />
            Students
          </button>
          <button 
             onClick={() => setActiveTab('earnings')}
             className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'earnings' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <DollarSign size={20} className="mr-3" />
            Earnings
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800 pb-24">
          <button onClick={() => navigate('home')} className="w-full flex items-center px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
            <LogOut size={20} className="mr-3" />
            Exit Studio
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-24 lg:pt-8">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6 flex justify-between items-center">
           <div className="flex items-center gap-2">
             <button onClick={goBack}><ArrowLeft className="text-slate-900" /></button>
             <h1 className="text-2xl font-bold text-slate-900">Creator Studio</h1>
           </div>
           <button onClick={() => setIsUploadModalOpen(true)} className="bg-brand-600 text-white p-2 rounded-lg">
             <Plus size={24} />
           </button>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">Total Revenue</p>
                <h3 className="text-2xl font-bold text-slate-900">₹ 9,17,865</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-xl">
                 <DollarSign className="w-6 h-6 text-green-600" />
              </div>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">Total Enrollments</p>
                <h3 className="text-2xl font-bold text-slate-900">2,135</h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-xl">
                 <Users className="w-6 h-6 text-blue-600" />
              </div>
           </div>
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm font-medium">Avg. Rating</p>
                <h3 className="text-2xl font-bold text-slate-900">4.85</h3>
              </div>
              <div className="bg-yellow-100 p-3 rounded-xl">
                 <Star className="w-6 h-6 text-yellow-600" />
              </div>
           </div>
        </div>

        {/* Course List */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-slate-900">My Digital Courses</h2>
          <button 
            onClick={() => setIsUploadModalOpen(true)}
            className="hidden sm:flex bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-bold items-center shadow-lg shadow-brand-500/30 transition-all"
          >
            <Plus className="w-5 h-5 mr-2" /> Create New Course
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {courses.map((course) => (
             <div key={course.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 bg-slate-100">
                   <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                   <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                      {course.status}
                   </div>
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        Manage Content
                      </button>
                   </div>
                </div>
                <div className="p-5">
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900 line-clamp-1 text-lg">{course.title}</h3>
                      <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={20} /></button>
                   </div>
                   <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center"><Users size={14} className="mr-1" /> {course.sales} Sales</span>
                      <span className="flex items-center"><Star size={14} className="mr-1 text-yellow-500" /> {course.rating}</span>
                   </div>
                   <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-xs text-slate-500">Price</p>
                        <p className="font-bold text-slate-900">{course.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Total Revenue</p>
                        <p className="font-bold text-green-600">{course.revenue}</p>
                      </div>
                   </div>
                </div>
             </div>
           ))}
           
           {/* Add New Placeholer */}
           <button 
             onClick={() => setIsUploadModalOpen(true)}
             className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center h-full min-h-[300px] hover:bg-slate-100 hover:border-brand-400 transition-all group"
           >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                 <Plus className="w-8 h-8 text-slate-400 group-hover:text-brand-600" />
              </div>
              <h3 className="font-bold text-slate-600 group-hover:text-brand-700">Add New Course</h3>
              <p className="text-sm text-slate-400 mt-1">Video, PDF, or Live</p>
           </button>
        </div>
      </main>

      <UploadCourseModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} />
    </div>
  );
};

const UploadCourseModal: React.FC<{isOpen: boolean; onClose: () => void}> = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
         <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900">Upload New Course</h3>
            <button onClick={onClose}><div className="bg-slate-100 p-2 rounded-full hover:bg-slate-200"><Settings className="w-5 h-5" /></div></button>
         </div>
         
         <div className="p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Course Title</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="e.g. Master React JS in 30 Days" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Price (INR)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-slate-500">₹</span>
                      <input type="number" className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="499" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-500 outline-none">
                       <option>Academic (School)</option>
                       <option>Competitive Exams</option>
                       <option>Skill Development</option>
                       <option>Language Learning</option>
                    </select>
                 </div>
              </div>

              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 bg-slate-50 text-center">
                 <div className="flex justify-center mb-4">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                       <UploadCloud className="w-8 h-8 text-brand-600" />
                    </div>
                 </div>
                 <h4 className="font-bold text-slate-700">Upload Course Content</h4>
                 <p className="text-sm text-slate-500 mt-1">Drag and drop video files (MP4), PDFs, or select from device.</p>
                 <button className="mt-4 px-6 py-2 bg-brand-100 text-brand-700 font-bold rounded-lg text-sm hover:bg-brand-200">
                   Browse Files
                 </button>
              </div>
            </div>
         </div>

         <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
            <button onClick={onClose} className="px-6 py-3 text-slate-600 font-bold hover:bg-slate-200 rounded-xl">Cancel</button>
            <button onClick={onClose} className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-500/30">
              Create & Publish
            </button>
         </div>
      </div>
    </div>
  )
}

export default LMSDashboardPage;