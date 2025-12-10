import React from 'react';
import { X, MapPin, Briefcase, Star, GraduationCap, Award, Calendar, Languages, CheckCircle2, Phone, Mail, Lock } from './Icons';
import { TeacherProfile } from '../types';

interface TeacherProfileModalProps {
  teacher: TeacherProfile | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeacherProfileModal: React.FC<TeacherProfileModalProps> = ({ teacher, isOpen, onClose }) => {
  if (!isOpen || !teacher) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header with Background */}
        <div className="relative h-32 bg-slate-900">
           <button 
             onClick={onClose}
             className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-10"
           >
             <X size={20} />
           </button>
           <div className="absolute -bottom-12 left-8">
             <img 
               src={teacher.img} 
               alt={teacher.name} 
               className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md" 
             />
           </div>
        </div>

        {/* Scrollable Content */}
        <div className="pt-14 px-8 pb-8 overflow-y-auto flex-1 custom-scrollbar">
           
           {/* Basic Info */}
           <div className="flex justify-between items-start mb-6">
             <div>
               <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                 {teacher.name}
                 <CheckCircle2 className="w-5 h-5 text-blue-500 ml-2" />
               </h2>
               <p className="text-lg text-slate-600 font-medium">{teacher.subject} Specialist</p>
               <div className="flex items-center text-sm text-slate-500 mt-1">
                 <MapPin className="w-4 h-4 mr-1" /> {teacher.location}
               </div>
             </div>
             <div className="flex flex-col items-end">
               <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-100">
                 <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                 <span className="font-bold text-slate-900">{teacher.rating}</span>
                 <span className="text-slate-400 text-xs ml-1">/ 5.0</span>
               </div>
               <span className="text-xs text-slate-400 mt-1">Verified Educator</span>
             </div>
           </div>

           {/* Quick Stats */}
           <div className="grid grid-cols-3 gap-4 mb-8">
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
               <Briefcase className="w-5 h-5 text-slate-400 mx-auto mb-2" />
               <span className="block font-bold text-slate-900">{teacher.exp}</span>
               <span className="text-xs text-slate-500">Experience</span>
             </div>
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
               <GraduationCap className="w-5 h-5 text-slate-400 mx-auto mb-2" />
               <span className="block font-bold text-slate-900 truncate px-1">{teacher.education}</span>
               <span className="text-xs text-slate-500">Education</span>
             </div>
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
               <Calendar className="w-5 h-5 text-slate-400 mx-auto mb-2" />
               <span className="block font-bold text-slate-900">{teacher.availability}</span>
               <span className="text-xs text-slate-500">Notice Period</span>
             </div>
           </div>

           {/* Bio */}
           <div className="mb-8">
             <h3 className="text-lg font-bold text-slate-900 mb-2">About</h3>
             <p className="text-slate-600 leading-relaxed text-sm">
               {teacher.bio}
             </p>
           </div>

           {/* Skills & Certs */}
           <div className="grid md:grid-cols-2 gap-8 mb-8">
             <div>
               <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Expertise</h3>
               <div className="flex flex-wrap gap-2">
                 {teacher.skills.map((skill, i) => (
                   <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                     {skill}
                   </span>
                 ))}
               </div>
             </div>
             <div>
               <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Certifications</h3>
               <div className="space-y-2">
                 {teacher.certifications.map((cert, i) => (
                   <div key={i} className="flex items-center text-sm text-slate-600">
                     <Award className="w-4 h-4 text-orange-500 mr-2" />
                     {cert}
                   </div>
                 ))}
               </div>
             </div>
           </div>
           
           {/* Languages */}
           <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Languages</h3>
              <div className="flex items-center text-slate-600">
                <Languages className="w-4 h-4 mr-2 text-slate-400" />
                {teacher.languages.join(", ")}
              </div>
           </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <div className="flex gap-4">
             {/* Locked Contact Details Simulation */}
             <div className="flex-1 bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between opacity-70">
                <div className="flex items-center text-slate-500 text-sm">
                   <Phone className="w-4 h-4 mr-2" /> +91 98*******
                </div>
                <Lock className="w-4 h-4 text-slate-400" />
             </div>
             <div className="flex-1 bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between opacity-70">
                <div className="flex items-center text-slate-500 text-sm">
                   <Mail className="w-4 h-4 mr-2" /> *****@gmail.com
                </div>
                <Lock className="w-4 h-4 text-slate-400" />
             </div>
          </div>
          <button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center">
            Unlock Contact Details (Premium)
          </button>
        </div>

      </div>
    </div>
  );
};

export default TeacherProfileModal;