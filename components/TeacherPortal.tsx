import React from 'react';
import { Video, BarChart3, Calendar, ArrowRight, Users, AlertCircle, MessageCircle, Wallet, Star } from './Icons';
import { useNavigation } from '../contexts/NavigationContext';

const TeacherPortal: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0 order-2 lg:order-1">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-white rounded-3xl transform -rotate-3 scale-105 z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
               alt="Teacher Dashboard displaying schedule and earnings" 
               className="relative rounded-2xl shadow-2xl w-full z-10 border border-slate-100 object-cover"
             />
             
             {/* Floating Schedule Card with Image */}
             <div className="absolute top-8 -left-8 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block max-w-[220px] transform transition-transform hover:scale-105 duration-300">
               <img 
                 src="https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80&w=400&h=250" 
                 alt="Calendar Schedule Interface" 
                 className="rounded-lg mb-3 w-full h-28 object-cover shadow-sm"
               />
               <div className="flex items-center space-x-3 px-1">
                 <div className="p-2 bg-indigo-100 rounded-lg shrink-0">
                   <Calendar className="text-indigo-600 h-5 w-5" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Next Up</p>
                   <p className="text-xs font-bold text-slate-900">Physics • 10:00 AM</p>
                 </div>
               </div>
             </div>

             {/* Conflict Alert Card */}
             <div className="absolute top-1/2 -right-4 lg:-right-8 bg-white p-3 rounded-xl shadow-xl border border-red-100 z-30 hidden md:flex items-center space-x-3 transform translate-y-[-50%] animate-pulse">
                 <div className="p-2 bg-red-50 rounded-lg shrink-0">
                   <AlertCircle className="text-red-500 h-5 w-5" />
                 </div>
                 <div>
                   <p className="text-xs text-red-500 font-bold uppercase tracking-wide">Conflict Alert</p>
                   <p className="text-xs font-semibold text-slate-700">10:00 AM - 11:00 AM</p>
                   <p className="text-[10px] text-slate-500">Overlap: 10th Grade Math</p>
                 </div>
             </div>

             {/* Floating Stats Card */}
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 z-20 hidden md:block">
               <div className="flex items-center space-x-4">
                 <div className="p-3 bg-green-100 rounded-lg">
                   <BarChart3 className="text-green-600 h-6 w-6" />
                 </div>
                 <div>
                   <p className="text-sm text-slate-500 font-medium">Monthly Earnings</p>
                   <p className="text-2xl font-bold text-slate-900">₹ 45,200</p>
                 </div>
               </div>
             </div>

             {/* Floating Rating Card (New) */}
             <div className="absolute -bottom-10 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-30 hidden md:block animate-bounce" style={{ animationDuration: '4s' }}>
               <div className="flex items-center gap-2 mb-1">
                 <div className="flex">
                   {[1,2,3,4,5].map(i => (
                     <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                   ))}
                 </div>
                 <span className="font-bold text-slate-900">4.9</span>
               </div>
               <p className="text-xs text-slate-500 font-medium mb-2">128 Verified Reviews</p>
               <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Reviewer" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="Reviewer" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Reviewer" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+125</div>
               </div>
             </div>

          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6">
              For Educators
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The Ultimate <span className="text-brand-600">Teacher Portal</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you teach online or offline, manage your entire teaching career on MasterRoll. Track classes, manage student attendance, and receive payments instantly.
            </p>
            
            <div className="space-y-8">
              <div className="flex group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Video className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900">Hybrid Class Management</h3>
                  <p className="mt-2 text-slate-600">
                    Seamlessly switch between online video classes and offline classroom modes. Mark attendance with a single tap.
                  </p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900">Batch & Student Management</h3>
                  <p className="mt-2 text-slate-600">
                    Organize students into batches, assign specific courses, and track syllabus progress for both physical and virtual cohorts.
                  </p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Wallet className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900">Earnings Tracking</h3>
                  <p className="mt-2 text-slate-600">
                    View your income from classes, track payments received, and monitor outstanding amounts with a dedicated financial dashboard.
                  </p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900">Class Scheduling</h3>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200 font-medium">Drag & Drop</span>
                  </div>
                  <p className="mt-2 text-slate-600">
                    Effortlessly reorder classes with our intuitive drag-and-drop interface. Visual alerts instantly highlight potential time conflicts.
                  </p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900">Student Communication</h3>
                  <p className="mt-2 text-slate-600">
                    Send direct messages, announcements, and performance updates. Attach files (PDFs, images) to share resources instantly with students and parents.
                  </p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                    <Star className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900">Ratings & Reviews</h3>
                  <p className="mt-2 text-slate-600">
                    Build your professional reputation with verified reviews and ratings from students and parents after every completed session.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <button onClick={() => navigate('teacher-features')} className="text-brand-600 font-bold hover:text-brand-700 inline-flex items-center transition-colors group">
                Explore Teacher Features <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeacherPortal;