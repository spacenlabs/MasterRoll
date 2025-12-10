import React, { useState } from 'react';
import { 
  Library, Search, BookOpen, Video, FileText, Filter, 
  DownloadCloud, PlayCircle, Book, Bookmark, GraduationCap,
  CheckCircle2, ArrowRight
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

const DigitalLibraryPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState<'books' | 'videos' | 'notes'>('books');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Data
  const resources = [
    {
      id: 1,
      title: "Physics: Force and Laws of Motion",
      type: "books",
      class: "Class 9",
      subject: "Science",
      author: "NCERT Official",
      format: "PDF",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 2,
      title: "Algebra II: Quadratic Equations",
      type: "videos",
      class: "Class 10",
      subject: "Mathematics",
      author: "MasterRoll Faculty",
      duration: "45 mins",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 3,
      title: "History: The French Revolution",
      type: "notes",
      class: "Class 9",
      subject: "Social Science",
      author: "Exam Prep Team",
      format: "PDF Summary",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 4,
      title: "Chemistry: Periodic Classification",
      type: "books",
      class: "Class 10",
      subject: "Science",
      author: "NCERT Official",
      format: "PDF",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 5,
      title: "Biology: Life Processes Full Chapter",
      type: "videos",
      class: "Class 10",
      subject: "Science",
      author: "Dr. Anjali Gupta",
      duration: "60 mins",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 6,
      title: "English: Grammar & Composition Rules",
      type: "notes",
      class: "Class 11",
      subject: "English",
      author: "MasterRoll Faculty",
      format: "Quick Cheatsheet",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=300"
    }
  ];

  const filteredResources = resources.filter(res => 
    res.type === activeTab && 
    res.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 animate-pulse">
          <Library size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Centralized Learning Repository
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            India's Largest <span className="text-blue-400">Digital Library</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Access 10,000+ NCERT e-books, exclusive video lectures, and exam-ready revision notes. Curated for the modern student.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigate('student-tools')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center">
              Start Learning Now <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
           {/* Tab Switcher */}
           <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-sm flex overflow-x-auto max-w-full">
              <button 
                onClick={() => setActiveTab('books')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center transition-all ${activeTab === 'books' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Book className="w-4 h-4 mr-2" /> NCERT Books
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center transition-all ${activeTab === 'videos' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Video className="w-4 h-4 mr-2" /> Video Lectures
              </button>
              <button 
                onClick={() => setActiveTab('notes')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center transition-all ${activeTab === 'notes' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <FileText className="w-4 h-4 mr-2" /> Revision Notes
              </button>
           </div>

           {/* Search Bar */}
           <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search chapters, subjects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm outline-none focus:ring-2 focus:ring-blue-500" 
              />
           </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
           <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center">
             <Filter className="w-4 h-4 mr-2" /> Class 10
           </button>
           <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Class 12</button>
           <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Science</button>
           <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Mathematics</button>
           <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">English</button>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
           {filteredResources.map((res) => (
             <div key={res.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                   <img src={res.image} alt={res.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold shadow-sm text-slate-800">
                      {res.class}
                   </div>
                   {/* Overlay Icon */}
                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                         {res.type === 'videos' ? <PlayCircle size={32} /> : <DownloadCloud size={32} />}
                      </div>
                   </div>
                </div>
                <div className="p-6">
                   <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">{res.subject}</div>
                   <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 h-14">{res.title}</h3>
                   <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center text-sm text-slate-500">
                         {res.type === 'videos' ? <Video size={14} className="mr-1" /> : <Book size={14} className="mr-1" />}
                         {res.type === 'videos' ? res.duration : res.format}
                      </div>
                      <button className="text-slate-400 hover:text-blue-600">
                         <Bookmark size={20} />
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Features Bottom */}
        <div className="bg-blue-50 rounded-[2.5rem] p-12 relative overflow-hidden">
           <div className="absolute top-0 left-0 p-12 opacity-5">
              <GraduationCap size={300} />
           </div>
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use MasterRoll Library?</h2>
                 <ul className="space-y-4">
                    <li className="flex items-start">
                       <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                       <div>
                          <strong className="block text-slate-900">100% Curriculum Mapped</strong>
                          <p className="text-slate-600 text-sm">Content updated weekly to match latest CBSE/ICSE guidelines.</p>
                       </div>
                    </li>
                    <li className="flex items-start">
                       <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                       <div>
                          <strong className="block text-slate-900">Offline Access</strong>
                          <p className="text-slate-600 text-sm">Download notes and videos to study without internet.</p>
                       </div>
                    </li>
                    <li className="flex items-start">
                       <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                       <div>
                          <strong className="block text-slate-900">Verified Authors</strong>
                          <p className="text-slate-600 text-sm">Material prepared by top faculty from across India.</p>
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="text-center">
                 <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 inline-block">
                    <h3 className="text-4xl font-extrabold text-blue-600 mb-2">FREE</h3>
                    <p className="text-slate-900 font-bold mb-4">For all registered students</p>
                    <button onClick={() => navigate('demo')} className="w-full bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800">
                       Create Student Account
                    </button>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default DigitalLibraryPage;