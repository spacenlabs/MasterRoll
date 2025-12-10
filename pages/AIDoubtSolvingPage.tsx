import React from 'react';
import { 
  BrainCircuit, Sparkles, MessageSquare, Bot, ScanLine, 
  Languages, Lightbulb, Clock, CheckCircle2, ArrowRight,
  Zap, GraduationCap, HelpCircle
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

const AIDoubtSolvingPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 animate-pulse">
          <BrainCircuit size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/50 text-brand-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Gemini AI
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Your Personal <span className="text-brand-400">AI Tutor</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Stuck on a problem? Get instant, step-by-step solutions for Math, Science, and more. Available 24/7 in your preferred language.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigate('demo')} className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center">
              Try AI Demo <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button onClick={() => navigate('pricing')} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
              View Plans
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* How It Works */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Three Ways to Ask</h2>
            <p className="text-slate-600 mt-4">We make asking questions as natural as chatting with a friend.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center hover:border-brand-300 transition-colors group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Type Your Doubt</h3>
              <p className="text-slate-600 text-sm">
                Chat naturally. "Explain Newton's third law with a real-life example" or "Solve x^2 + 5x + 6 = 0".
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center hover:border-brand-300 transition-colors group">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ScanLine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Snap a Photo</h3>
              <p className="text-slate-600 text-sm">
                Take a picture of your textbook question or handwritten math problem. Our OCR reads it instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center hover:border-brand-300 transition-colors group">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Voice Command</h3>
              <p className="text-slate-600 text-sm">
                Just speak your question. Perfect for language learning or when you're on the go.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
          <div className="order-2 lg:order-1">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide mb-6">
                Why Students Love It
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
               More Than Just Answers.<br/>
               <span className="text-brand-600">Understand the 'Why'.</span>
             </h2>
             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               MasterRoll AI doesn't just give you the final result. It breaks down complex problems into simple, manageable steps, acting like a private tutor that guides you to the solution.
             </p>
             
             <div className="space-y-6">
                <div className="flex">
                   <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                         <Lightbulb className="w-5 h-5 text-green-600" />
                      </div>
                   </div>
                   <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">Step-by-Step Logic</h4>
                      <p className="text-slate-600 text-sm mt-1">Detailed walkthroughs for every math and science problem.</p>
                   </div>
                </div>
                <div className="flex">
                   <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                         <Languages className="w-5 h-5 text-blue-600" />
                      </div>
                   </div>
                   <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">Multi-lingual Support</h4>
                      <p className="text-slate-600 text-sm mt-1">Ask in English, Hindi, or Hinglish. "Iska matlab kya hai?" works perfectly.</p>
                   </div>
                </div>
                <div className="flex">
                   <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                         <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                   </div>
                   <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">24/7 Availability</h4>
                      <p className="text-slate-600 text-sm mt-1">Late night study session? We're awake.</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-purple-50 rounded-full blur-3xl opacity-60"></div>
             <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 max-w-md mx-auto">
                {/* Chat Simulation */}
                <div className="space-y-4">
                   <div className="flex justify-end">
                      <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] text-sm">
                        Calculate the force needed to accelerate a 10kg mass at 5m/s².
                      </div>
                   </div>
                   <div className="flex justify-start">
                      <div className="bg-brand-50 border border-brand-100 text-slate-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[90%] text-sm">
                        <p className="font-bold text-brand-700 mb-1 flex items-center"><Bot className="w-3 h-3 mr-1"/> AI Tutor</p>
                        <p className="mb-2">To find the force, we use Newton's Second Law of Motion:</p>
                        <p className="font-mono bg-white p-2 rounded border border-brand-100 mb-2">F = m × a</p>
                        <ul className="list-disc pl-4 space-y-1 mb-2">
                           <li>Mass (m) = 10 kg</li>
                           <li>Acceleration (a) = 5 m/s²</li>
                        </ul>
                        <p className="font-bold">F = 10 × 5 = 50 Newtons.</p>
                      </div>
                   </div>
                   <div className="flex justify-end">
                      <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] text-sm">
                        Can you explain it in Hindi?
                      </div>
                   </div>
                   <div className="flex justify-start">
                      <div className="bg-brand-50 border border-brand-100 text-slate-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[90%] text-sm">
                        <p className="font-bold text-brand-700 mb-1 flex items-center"><Bot className="w-3 h-3 mr-1"/> AI Tutor</p>
                        <p>Haan, zaroor! Newton ke doosre niyam ke anusaar, bal (Force) mass aur acceleration ka guna hota hai.</p>
                        <p className="mt-1">Isliye, 10kg × 5m/s² = 50 Newtons.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Benefits for Everyone */}
        <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white overflow-hidden relative">
           <div className="absolute top-0 left-0 p-12 opacity-5">
              <Zap size={300} />
           </div>
           <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl font-bold">Empowering the Ecosystem</h2>
           </div>
           <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                 <div className="flex items-center mb-4">
                    <GraduationCap className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-2xl font-bold">For Students</h3>
                 </div>
                 <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> Homework help without waiting for class.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> Exam revision with summary notes.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> Personalized quizzes to test weak areas.</li>
                 </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                 <div className="flex items-center mb-4">
                    <HelpCircle className="w-8 h-8 text-brand-400 mr-3" />
                    <h3 className="text-2xl font-bold">For Teachers</h3>
                 </div>
                 <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> Auto-generate question papers.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> Create lesson plans in seconds.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> Spend less time grading, more time teaching.</li>
                 </ul>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AIDoubtSolvingPage;