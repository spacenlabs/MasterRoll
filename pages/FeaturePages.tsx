import React from 'react';
import { Video, Calendar, DollarSign, MessageCircle, BarChart3, NotebookPen, Target, BrainCircuit } from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

export const TeacherFeaturesPage: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Tools Built for the Modern Educator</h1>
          <p className="text-lg text-slate-600">
            MasterRoll empowers teachers with a suite of digital tools to manage their classroom, finances, and reputation.
          </p>
        </div>

        <div className="space-y-16">
           <section className="flex flex-col md:flex-row gap-8 items-center">
             <div className="flex-1 bg-blue-50 p-8 rounded-3xl">
               <Video className="w-12 h-12 text-blue-600 mb-4" />
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Hybrid Classroom</h3>
               <p className="text-slate-700">Conduct live classes with integrated video conferencing or manage attendance for offline batches. Share study materials instantly.</p>
             </div>
             <div className="flex-1">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" alt="Classroom" className="rounded-3xl shadow-lg" />
             </div>
           </section>

           <section className="flex flex-col md:flex-row-reverse gap-8 items-center">
             <div className="flex-1 bg-green-50 p-8 rounded-3xl">
               <DollarSign className="w-12 h-12 text-green-600 mb-4" />
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Automated Billing</h3>
               <p className="text-slate-700">Track student fees, send automated reminders via WhatsApp, and generate professional invoices with one click.</p>
             </div>
             <div className="flex-1">
               <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600" alt="Finance" className="rounded-3xl shadow-lg" />
             </div>
           </section>
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => navigate('demo')} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800">
            Start Your Teaching Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export const StudentToolsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Your Personal Learning Dashboard</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Stay organized, track your progress, and crush your exams with MasterRoll's student success suite.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-orange-100">
            <NotebookPen className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Notes</h3>
            <p className="text-slate-500 mb-6">
              Create rich-text notes with images and formulas. Tag them by subject and chapter for easy retrieval during exam week.
            </p>
            <div className="h-32 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
              Note Preview UI
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-orange-100">
            <Target className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Goal Tracker</h3>
            <p className="text-slate-500 mb-6">
              Set daily study goals and track your streaks. Visual progress bars help you stay motivated and disciplined.
            </p>
            <div className="h-32 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
              Progress Graph UI
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-orange-100">
            <BrainCircuit className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Quiz Gen</h3>
            <p className="text-slate-500 mb-6">
              Upload your textbook PDF and let AI generate practice quizzes instantly. Test your knowledge in real-time.
            </p>
            <div className="h-32 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
              Quiz Interface UI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
