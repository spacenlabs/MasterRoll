
import React, { useState } from 'react';
import { 
  Plus, Search, Filter, Mail, Phone, Calendar, User, 
  MapPin, GraduationCap, Briefcase, DollarSign, ArrowRight,
  Shield, CheckCircle2, LayoutDashboard, School, Users, 
  CreditCard, UserCheck, BookOpen, Settings, Save, X,
  // Fix: Removed non-existent List and added missing FileText import
  Baby, Truck, Building2, UserPlus, Bell, MessageSquare, FileText
} from '../components/Icons';
import { DashboardSidebar } from './UserDashboards';
import { useNavigation } from '../contexts/NavigationContext';

const AdmissionEnquiryPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState('admission-enquiry');
  const [formTab, setFormTab] = useState<'list' | 'add'>('add');

  const menuItems = [
    { id: 'overview', label: 'School Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'branch', label: 'Branch', icon: <MapPin size={20} /> },
    { id: 'subscription', label: 'School Subscription', icon: <CreditCard size={20} /> },
    { id: 'frontend', label: 'Frontend', icon: <Building2 size={20} /> },
    { 
      id: 'reception', 
      label: 'Reception', 
      icon: <Users size={20} />,
      subItems: [
        { id: 'admission-enquiry', label: 'Admission Enquiry' },
        { id: 'postal-record', label: 'Postal Record' },
        { id: 'call-log', label: 'Call Log' },
        { id: 'visitor-log', label: 'Visitor Log' },
        { id: 'complaint', label: 'Complaint' },
        { id: 'config-reception', label: 'Config Reception' },
      ]
    },
    { 
      id: 'admission', 
      label: 'Admission', 
      icon: <UserPlus size={20} />,
      subItems: [
        { id: 'admission-create', label: 'Create Admission' },
        { id: 'admission-online', label: 'Online Admission' },
        { id: 'admission-multi', label: 'Multi Class' },
        { id: 'admission-import', label: 'Multiple Import' },
        { id: 'category', label: 'Category' },
      ]
    },
    { id: 'student-details', label: 'Student Details', icon: <Users size={20} /> },
    { id: 'parents', label: 'Parents', icon: <Baby size={20} /> },
    { id: 'employee', label: 'Employee', icon: <UserCheck size={20} /> },
    { id: 'card-management', label: 'Card Management', icon: <CreditCard size={20} /> },
    { id: 'certificate', label: 'Certificate', icon: <FileText size={20} /> },
    { id: 'human-resource', label: 'Human Resource', icon: <Briefcase size={20} /> },
    { id: 'academic', label: 'Academic', icon: <BookOpen size={20} /> },
  ];

  const InputField = ({ label, name, required = false, type = "text", placeholder = "", icon: Icon }: any) => (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
      <label className="text-sm font-bold text-slate-700 w-full md:w-1/3 text-left md:text-right">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative group w-full md:w-2/3">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-500">
            <Icon size={16} />
          </div>
        )}
        <input 
          type={type} 
          name={name}
          placeholder={placeholder}
          className={`w-full ${Icon ? 'pl-10' : 'px-3'} py-2.5 bg-white border border-slate-200 rounded text-sm focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all shadow-sm`}
        />
      </div>
    </div>
  );

  const TextAreaField = ({ label, name, required = false, rows = 3 }: any) => (
    <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
      <label className="text-sm font-bold text-slate-700 w-full md:w-1/3 text-left md:text-right md:pt-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="w-full md:w-2/3">
        <textarea 
          name={name}
          rows={rows}
          className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded text-sm focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all shadow-sm"
        />
      </div>
    </div>
  );

  const SelectField = ({ label, name, required = false, options = [], icon: Icon, placeholder = "Select" }: any) => (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
      <label className="text-sm font-bold text-slate-700 w-full md:w-1/3 text-left md:text-right">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative group w-full md:w-2/3">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-500">
            <Icon size={16} />
          </div>
        )}
        <select 
          name={name}
          className={`w-full ${Icon ? 'pl-10' : 'px-3'} py-2.5 bg-white border border-slate-200 rounded text-sm focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all appearance-none shadow-sm`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
           <Plus size={12} className="rotate-45" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 bg-[#f4f7f6] min-h-screen flex">
      <DashboardSidebar 
        title="Modern Academy" 
        role="School ERP Admin" 
        menuItems={menuItems} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <main className="flex-1 lg:ml-64 p-4 lg:p-6">
        {/* Breadcrumb Header */}
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded shadow-sm border border-slate-100">
           <div className="flex items-center gap-2 text-slate-600">
              <div className="bg-brand-50 p-2 rounded">
                 <LayoutDashboard size={16} className="text-brand-600" />
              </div>
              <ArrowRight size={14} className="text-slate-300" />
              <span className="text-sm font-bold text-slate-800">Admission Enquiry</span>
           </div>
           <div className="flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:text-brand-600 transition-colors"><Settings size={18} /></button>
              <button className="p-2 text-slate-400 hover:text-brand-600 transition-colors relative">
                 <Bell size={18} />
                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-2 pl-4 border-l">
                 <div className="text-right hidden sm:block">
                    <p className="text-xs font-bold text-slate-900">Admin User</p>
                    <p className="text-[10px] text-slate-400">Super Admin</p>
                 </div>
                 <div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Admin&background=0d9488&color=fff" alt="Admin" />
                 </div>
              </div>
           </div>
        </div>

        {/* Tab Selection */}
        <div className="bg-white rounded-t border border-slate-200 border-b-0 shadow-sm">
           <div className="flex border-b border-slate-100">
              <button 
                onClick={() => setFormTab('list')}
                className={`px-6 py-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${formTab === 'list' ? 'border-brand-600 text-brand-600 bg-slate-50/50' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                <Plus size={14} className="rotate-45" /> Enquiry List
              </button>
              <button 
                onClick={() => setFormTab('add')}
                className={`px-6 py-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${formTab === 'add' ? 'border-brand-600 text-brand-600 bg-slate-50/50' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                <Plus size={14} /> Add Enquiry
              </button>
           </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-b border border-slate-200 border-t-0 shadow-sm overflow-hidden mb-8">
          <div className="p-8 md:p-12 max-w-4xl mx-auto space-y-8">
             
             {/* Branch Selection */}
             <SelectField label="Branch" name="branch" required options={["Main Branch", "Science Wing", "Arts Block"]} />

             {/* Personal Info */}
             <InputField label="Name" name="name" required />
             <SelectField label="Gender" name="gender" required options={["Male", "Female", "Other"]} />
             
             <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
               <label className="text-sm font-bold text-slate-700 w-full md:w-1/3 text-left md:text-right">Date Of Birth</label>
               <div className="relative group w-full md:w-2/3">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar size={16} />
                 </div>
                 <input type="date" className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded text-sm outline-none shadow-sm" />
               </div>
             </div>

             <TextAreaField label="Previous School" name="prev_school" />
             <InputField label="Father Name" name="father" required />
             <InputField label="Mother Name" name="mother" required />
             <InputField label="Mobile No" name="mobile" required />
             <InputField label="Email" name="email" type="email" />
             <TextAreaField label="Address" name="address" required />
             <InputField label="No Of Child" name="child_count" required type="number" />

             {/* Assignments & Refs */}
             <SelectField label="Assigned" name="assigned" required placeholder="First Select The Branch" options={["Staff 1", "Staff 2"]} />
             <SelectField label="Reference" name="reference" required placeholder="First Select The Branch" options={["Walk-in", "Newspaper", "Social Media", "Friend"]} />
             
             {/* Response Section */}
             <SelectField label="Response" name="response_type" required placeholder="First Select The Branch" options={["Cold", "Warm", "Hot"]} />
             <TextAreaField label="Response" name="response_text" />
             <TextAreaField label="Note" name="note" />

             {/* Date Selection */}
             <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
               <label className="text-sm font-bold text-slate-700 w-full md:w-1/3 text-left md:text-right">Date <span className="text-red-500">*</span></label>
               <div className="relative group w-full md:w-2/3">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar size={16} />
                 </div>
                 <input type="date" defaultValue="2026-01-14" className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded text-sm outline-none shadow-sm" />
               </div>
             </div>

             <SelectField label="Class Applying For" name="applying_class" required placeholder="First Select The Branch" options={["Class 1", "Class 2", "Class 3"]} />

          </div>

          {/* Bottom Actions */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-center">
             <button 
               onClick={() => {
                 alert("Admission enquiry saved successfully!");
                 navigate('org-dashboard');
               }}
               className="bg-brand-600 text-white px-10 py-3 rounded text-sm font-bold shadow-lg hover:bg-brand-700 transition-all flex items-center"
             >
                <Save className="mr-2" size={16} /> Save
             </button>
          </div>
        </div>

        {/* WhatsApp Floating Action Simulation */}
        <div className="fixed bottom-8 right-8 z-50">
           <div className="bg-[#25D366] p-4 rounded-full shadow-2xl text-white cursor-pointer hover:scale-110 transition-transform flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
           </div>
        </div>
      </main>
    </div>
  );
};

export default AdmissionEnquiryPage;
