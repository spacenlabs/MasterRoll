
import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, Upload, 
  Info, ShieldCheck, Mail, Phone, User, Landmark 
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

const OnlineAdmissionPublic: React.FC = () => {
  const { navigate } = useNavigation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    dob: '',
    gender: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    previousSchool: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const renderStep1 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
       <div className="grid md:grid-cols-2 gap-6">
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-2">Student Full Name *</label>
             <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-500/20" placeholder="John Doe" />
          </div>
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-2">Applying for Class *</label>
             <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none">
                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
             </select>
          </div>
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-2">Date of Birth *</label>
             <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" />
          </div>
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-2">Gender *</label>
             <div className="flex gap-4">
                {['Male', 'Female', 'Other'].map(g => (
                  <button key={g} className="flex-1 py-2 border rounded-xl font-bold text-slate-600 hover:bg-slate-50">{g}</button>
                ))}
             </div>
          </div>
       </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
       <div className="grid md:grid-cols-2 gap-6">
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-2">Parent / Guardian Name *</label>
             <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" />
          </div>
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-2">Primary Phone *</label>
             <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" placeholder="+91" />
          </div>
          <div className="md:col-span-2">
             <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
             <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" />
          </div>
          <div className="md:col-span-2">
             <label className="block text-sm font-bold text-slate-700 mb-2">Home Address *</label>
             <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" />
          </div>
       </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
       <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-3 text-brand-600 mb-4">
             <ShieldCheck size={24} />
             <h3 className="font-bold">Document Upload Check</h3>
          </div>
          <p className="text-sm text-slate-500 mb-6">Please upload scanned copies of original documents. Max file size: 2MB per file.</p>
          <div className="space-y-4">
             {['Birth Certificate', 'Previous Year Report Card', 'Aadhar Card (Student)', 'Address Proof'].map(doc => (
               <div key={doc} className="flex items-center justify-between p-3 bg-white border rounded-xl">
                  <span className="text-sm font-bold text-slate-700">{doc}</span>
                  <button className="text-brand-600 font-black text-[10px] uppercase flex items-center"><Upload size={12} className="mr-1"/> Select File</button>
               </div>
             ))}
          </div>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
       <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase mb-4">Official Admission Portal</div>
             <h1 className="text-4xl font-black text-slate-900 tracking-tight">Modern Academy Global</h1>
             <p className="text-slate-500 mt-2">New Academic Session 2024-25 Enrollment</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
             {/* Progress Bar */}
             <div className="bg-slate-900 p-6 flex justify-between">
                {[1, 2, 3].map(i => (
                   <div key={i} className={`flex items-center gap-2 ${step >= i ? 'text-white' : 'text-slate-600'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${step === i ? 'bg-brand-500' : step > i ? 'bg-green-500' : 'bg-slate-800'}`}>
                         {step > i ? <CheckCircle2 size={16} /> : i}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">
                         {i === 1 ? 'Student Info' : i === 2 ? 'Guardian Info' : 'Documents'}
                      </span>
                   </div>
                ))}
             </div>

             <div className="p-10">
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}

                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between">
                   <button 
                     disabled={step === 1}
                     onClick={prevStep}
                     className="px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest border border-slate-200 text-slate-400 hover:text-slate-900 disabled:opacity-30 flex items-center"
                   >
                      <ArrowLeft size={16} className="mr-2" /> Previous
                   </button>
                   {step < 3 ? (
                      <button 
                        onClick={nextStep}
                        className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl flex items-center"
                      >
                         Continue <ArrowRight size={16} className="ml-2" />
                      </button>
                   ) : (
                      <button 
                        onClick={() => { alert('Application Submitted!'); navigate('home'); }}
                        className="bg-brand-600 text-white px-10 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl shadow-brand-500/20"
                      >
                         Submit Final Application
                      </button>
                   )}
                </div>
             </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
             <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100">
                <ShieldCheck className="text-green-500" />
                <span className="text-[10px] font-black text-slate-500 uppercase">Encrypted Submission</span>
             </div>
             <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100">
                <Info className="text-blue-500" />
                <span className="text-[10px] font-black text-slate-500 uppercase">Track via SMS/Email</span>
             </div>
             <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100">
                <Landmark className="text-orange-500" />
                <span className="text-[10px] font-black text-slate-500 uppercase">Paperless Registration</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default OnlineAdmissionPublic;
