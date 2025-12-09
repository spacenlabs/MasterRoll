import React, { useState } from 'react';
import { Search, Calendar, Star, MapPin, BookOpen, CheckCircle2 } from '../components/Icons';
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
    <div className="pt-28 pb-20 bg-indigo-900 text-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Grow Your Institute with MasterRoll</h1>
        <p className="text-xl text-indigo-200 mb-12">
          List your courses on India's largest education marketplace. Manage bookings, payments, and student communication in one place.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
             <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
             <h3 className="font-bold text-xl mb-2">Zero Listing Fees</h3>
             <p className="text-indigo-200 text-sm">Start for free. We only charge a small commission on confirmed bookings.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
             <Calendar className="w-8 h-8 text-yellow-400 mb-4" />
             <h3 className="font-bold text-xl mb-2">Automated Scheduling</h3>
             <p className="text-indigo-200 text-sm">Sync your batches and let students book slots based on real-time availability.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
             <Star className="w-8 h-8 text-orange-400 mb-4" />
             <h3 className="font-bold text-xl mb-2">Build Brand</h3>
             <p className="text-indigo-200 text-sm">Collect verified reviews and showcase your success stories to attract more students.</p>
          </div>
        </div>
        <button onClick={() => navigate('demo')} className="bg-white text-indigo-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors">
          Partner with Us
        </button>
      </div>
    </div>
  );
};
