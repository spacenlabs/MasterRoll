import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Marketplace from '../components/Marketplace';
import TuitionBooking from '../components/TuitionBooking';
import StudentTools from '../components/StudentTools';
import TeacherPortal from '../components/TeacherPortal';
import GeminiDemo from '../components/GeminiDemo';
import { useNavigation } from '../contexts/NavigationContext';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <Hero />
      <Features />
      <Marketplace />
      <TuitionBooking />
      <StudentTools />
      <TeacherPortal />
      <GeminiDemo />
      
      {/* CTA Section */}
      <section id="contact" className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to transform your institution?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Join 500+ schools in India using MasterRoll to streamline operations and improve learning outcomes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigate('demo')}
              className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors shadow-lg"
            >
              Schedule a Demo
            </button>
            <button 
              onClick={() => navigate('demo')}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-slate-700 border border-slate-300 font-bold rounded-lg transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
