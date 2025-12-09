import React from 'react';
import { Search, Calendar, CreditCard, ArrowRight } from './Icons';
import { useNavigation } from '../contexts/NavigationContext';

const TuitionBooking: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              For Parents & Students
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Book Top-Rated <span className="text-indigo-600">Classes & Tuitions</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Find the perfect extracurricular activities or academic tuitions for your child. Browse verified course listings, view schedules, and book securely in minutes.
            </p>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-100 text-indigo-600">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900">Curated Course Listings</h3>
                  <p className="mt-2 text-slate-600">
                    Explore a wide range of classes from verified institutes and tutors. Filter by subject, grade, location, and user ratings to find the best fit.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-100 text-purple-600">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900">Flexible Scheduling</h3>
                  <p className="mt-2 text-slate-600">
                    View real-time availability and book trial classes or full term courses. Manage all your child's activities from a single calendar.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100 text-green-600">
                    <CreditCard className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900">Secure Prepaid Payments</h3>
                  <p className="mt-2 text-slate-600">
                    Pay with confidence using our secure gateway. Funds are held in escrow and released to tutors only after classes are conducted.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('book-class')}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center"
              >
                Book a Class
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button onClick={() => navigate('list-institute')} className="px-8 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold rounded-xl transition-all flex items-center justify-center">
                List Your Institute
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-bl from-indigo-100 to-purple-50 rounded-full blur-3xl opacity-60 z-0"></div>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 z-10 bg-white">
               <img 
                 src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800" 
                 alt="Student attending an online class" 
                 className="w-full h-auto object-cover"
               />
               
               {/* Overlay Card */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900">Mathematics Masterclass</h4>
                      <p className="text-xs text-slate-500">By Sharma Tutorials</p>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Verified</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Student" />
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="Student" />
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">+12</div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Next Batch</p>
                      <p className="font-bold text-indigo-600">Starts Monday</p>
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

export default TuitionBooking;
