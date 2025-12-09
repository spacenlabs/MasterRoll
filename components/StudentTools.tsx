import React from 'react';
import { NotebookPen, Target, StickyNote, Clock, ArrowRight, CheckCircle2 } from './Icons';
import { useNavigation } from '../contexts/NavigationContext';

const StudentTools: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0">
             <div className="absolute inset-0 bg-orange-50 rounded-full blur-3xl opacity-60 transform -translate-x-10 z-0"></div>
             
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 z-10">
               <img 
                 src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" 
                 alt="Student studying with digital tools" 
                 className="w-full h-auto object-cover"
               />
               
               {/* Floating Overlay Card - Quiz Result */}
               <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block animate-bounce" style={{ animationDuration: '3.5s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-full">
                       <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Physics Quiz</p>
                      <p className="font-bold text-slate-900">Score: 10/10</p>
                    </div>
                  </div>
               </div>

               {/* Floating Overlay Card - Planner */}
               <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px] hidden md:block">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">Today's Plan</span>
                    <Clock className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <p className="text-xs text-slate-700">Revise Algebra Ch.3</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <p className="text-xs text-slate-700">History Notes</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              Student Success Suite
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Smart Tools for <span className="text-orange-600">Smarter Learning</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Go beyond the textbook. MasterRoll provides a personal digital workspace where students can organize notes, test their knowledge, and stay on top of exam schedules.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute top-0 left-0 -mt-1 -ml-1 w-10 h-10 bg-orange-100 rounded-lg -z-10"></div>
                <div className="flex items-center gap-3 mb-2">
                  <NotebookPen className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-slate-900">Smart Notes</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Create, organize, and share digital notes linked directly to your syllabus topics.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute top-0 left-0 -mt-1 -ml-1 w-10 h-10 bg-orange-100 rounded-lg -z-10"></div>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-slate-900">Interactive Quizzes</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Self-paced quizzes with instant feedback to help identify weak areas before exams.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute top-0 left-0 -mt-1 -ml-1 w-10 h-10 bg-orange-100 rounded-lg -z-10"></div>
                <div className="flex items-center gap-3 mb-2">
                  <StickyNote className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-slate-900">Revision Helpers</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Flashcards and summary generators powered by AI to make revision faster.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute top-0 left-0 -mt-1 -ml-1 w-10 h-10 bg-orange-100 rounded-lg -z-10"></div>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-slate-900">Digital Planner</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Track homework deadlines, exam dates, and study sessions in one unified calendar.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <button onClick={() => navigate('student-tools')} className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center transition-colors group">
                Try Student Tools <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentTools;
