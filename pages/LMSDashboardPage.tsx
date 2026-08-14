import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Video, Users, DollarSign, Settings, LogOut, 
  Plus, Search, MoreVertical, PlayCircle, Star, TrendingUp, 
  UploadCloud, Image, Film, CheckCircle2, Loader2, ArrowLeft,
  MonitorPlay
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';
import { DigitalCourse } from '../types';
import { fetchCourses, postCourse } from '../services/formService';

const LMSDashboardPage: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const [activeTab, setActiveTab] = useState('courses');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [courses, setCourses] = useState<DigitalCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadCourses = async () => {
    setIsLoading(true);
    const data = await fetchCourses();
    if (data.length > 0) {
      setCourses(data);
    } else {
      // Mock data if DB empty
      setCourses([
        {
          id: '1',
          title: 'Complete Python Bootcamp 2024',
          thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=400',
          price: '₹499',
          sales: 1240,
          revenue: '₹6,18,760',
          status: 'Active',
          rating: 4.8
        }
      ]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadCourses();
  }, []);

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
             <button onClick={goBack} className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><ArrowLeft className="text-slate-900 w-6 h-6" /></button>
             <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Creator Studio</h1>
           </div>
           <button onClick={() => setIsUploadModalOpen(true)} className="bg-brand-600 text-white p-2 rounded-xl hover:bg-brand-700 shadow-md">
             <Plus size={20} />
           </button>
        </div>

        {/* Mobile Tab Switcheable Quick Bar (Horizontal Scrollable Chips List) */}
        <div className="lg:hidden mb-6 flex gap-2 overflow-x-auto pb-3 custom-scrollbar">
          {[
            { id: 'dashboard', label: 'Overview', icon: <LayoutDashboard size={14} /> },
            { id: 'courses', label: 'My Courses', icon: <Video size={14} /> },
            { id: 'students', label: 'Students', icon: <Users size={14} /> },
            { id: 'earnings', label: 'Earnings', icon: <DollarSign size={14} /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap border transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-500/25'
                  : 'bg-white text-slate-600 border-slate-205 hover:bg-slate-50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
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

        {/* Conditional Tab Rendering */}
        {(() => {
          switch (activeTab) {
            case 'dashboard':
              return (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h2 className="text-2xl font-bold text-slate-900">Creator Analytics</h2>
                  
                  {/* Visual Charts / Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="font-bold text-slate-800 mb-4 text-base">Daily Watch Time (Hours)</h3>
                      <div className="flex items-end gap-3 h-32 pt-4">
                        {[45, 60, 30, 80, 95, 70, 110].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full bg-brand-500 rounded-t-lg transition-all duration-500" style={{ height: `${(h / 120) * 100}%` }}></div>
                            <span className="text-[9px] text-slate-400 font-bold font-mono">Day {i+1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="font-bold text-slate-800 mb-4 text-base">Course Completion Rate</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs text-slate-600 mb-1">
                            <span className="font-medium">Python Bootcamp</span>
                            <span className="font-bold text-slate-900">78%</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full">
                            <div className="bg-brand-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs text-slate-600 mb-1">
                            <span className="font-medium">Mental Math Tricks</span>
                            <span className="font-bold text-slate-900">92%</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full">
                            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs text-slate-600 mb-1">
                            <span className="font-medium">NCERT Class 10 Physics</span>
                            <span className="font-bold text-slate-900">64%</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '64%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );

            case 'students':
              return (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h2 className="text-2xl font-bold text-slate-900">Enrolled Students</h2>
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-slate-50 text-slate-500 text-xs uppercase border-b">
                          <tr>
                            <th className="px-6 py-4 font-semibold">Student Name</th>
                            <th className="px-6 py-4 font-semibold">Course</th>
                            <th className="px-6 py-4 font-semibold">Enrollment Date</th>
                            <th className="px-6 py-4 font-semibold">Access Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm">
                          {[
                            { name: "Rahul Kumar", course: "Complete Python Bootcamp", date: "June 2, 2026", status: "Active" },
                            { name: "Ananya Sharma", course: "NCERT Class 10 Physics", date: "June 1, 2026", status: "Active" },
                            { name: "Vikram Singh", course: "Mental Math Tricks", date: "May 28, 2026", status: "Active" },
                            { name: "Priya Patel", course: "Complete Python Bootcamp/LMS", date: "May 25, 2026", status: "Expired" },
                          ].map((stu, i) => (
                            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-6 py-4 font-bold text-slate-900">{stu.name}</td>
                              <td className="px-6 py-4 text-slate-600 font-medium">{stu.course}</td>
                              <td className="px-6 py-4 text-slate-400 font-bold font-mono text-xs">{stu.date}</td>
                              <td className="px-6 py-4">
                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                  stu.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                                }`}>{stu.status}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );

            case 'earnings':
              return (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <h2 className="text-2xl font-bold text-slate-900">Earnings Summary</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="font-bold text-slate-800 mb-2 text-base">Next Payout Method</h3>
                      <p className="text-slate-500 text-sm mb-4 leading-relaxed">Earnings are automatically settled directly and securely to your verified bank account on the 1st of every month.</p>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Linked Settlement Account</p>
                        <p className="font-bold text-slate-900 mt-1">State Bank of India (Ending in 4021)</p>
                        <p className="text-xs text-emerald-600 font-bold mt-1.5 flex items-center">✓ Verified for Auto-Settlements</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Settled Creator Balance</h3>
                        <p className="text-slate-400 text-xs">Available for instant manual transfer</p>
                        <p className="text-4xl font-black text-slate-900 mt-4">₹ 45,710</p>
                      </div>
                      <button className="w-full bg-brand-600 text-white font-bold py-4 mt-6 rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-500/20 active:scale-95 transition-all text-sm uppercase tracking-widest">
                        Withdraw Cleared Balance
                      </button>
                    </div>
                  </div>
                </div>
              );

            case 'courses':
            default:
              return (
                <>
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

                  {isLoading ? (
                     <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="animate-spin h-10 w-10 text-brand-600 mb-4" />
                        <p className="text-slate-500 font-medium">Syncing courses with Supabase...</p>
                     </div>
                  ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow group animate-in zoom-in-95 duration-200">
                            <div className="relative h-48 bg-slate-100">
                              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                                  {course.status}
                              </div>
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform text-sm">
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
                      
                      <button 
                        onClick={() => setIsUploadModalOpen(true)}
                        className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center h-full min-h-[300px] hover:bg-slate-100 hover:border-brand-400 transition-all group animate-in fade-in duration-200"
                      >
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                            <Plus className="w-8 h-8 text-slate-400 group-hover:text-brand-600" />
                          </div>
                          <h3 className="font-bold text-slate-600 group-hover:text-brand-700">Add New Course</h3>
                          <p className="text-sm text-slate-400 mt-1">Video, PDF, or Live</p>
                      </button>
                    </div>
                  )}
                </>
              );
          }
        })()}
      </main>

      <UploadCourseModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} onRefresh={loadCourses} />
    </div>
  );
};

const UploadCourseModal: React.FC<{isOpen: boolean; onClose: () => void; onRefresh: () => void}> = ({isOpen, onClose, onRefresh}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Academic (School)');

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!title || !price) {
      alert("Please fill in course title and price.");
      return;
    }
    setIsLoading(true);
    const success = await postCourse({
      title,
      price: `₹${price}`,
      category,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400',
      sales: 0,
      revenue: '₹0',
      status: 'Active',
      rating: 5.0
    });

    if (success) {
      onRefresh();
      onClose();
    } else {
      alert("Failed to save course. Ensure the 'courses' table exists in Supabase.");
    }
    setIsLoading(false);
  };

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
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 outline-none" 
                  placeholder="e.g. Master React JS in 30 Days" 
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Price (INR)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3.5 text-slate-500">₹</span>
                      <input 
                        type="number" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 outline-none" 
                        placeholder="499" 
                      />
                    </div>
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    >
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
            <button 
              onClick={handleSubmit} 
              disabled={isLoading}
              className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-500/30 flex items-center justify-center min-w-[160px]"
            >
              {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Create & Publish"}
            </button>
         </div>
      </div>
    </div>
  )
}

export default LMSDashboardPage;