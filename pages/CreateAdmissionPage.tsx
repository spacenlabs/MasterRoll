
import React, { useState } from 'react';
import { 
  Plus, Search, Filter, Mail, Phone, Calendar, User, 
  MapPin, GraduationCap, Briefcase, DollarSign, ArrowRight,
  Shield, CheckCircle2, LayoutDashboard, School, Users, 
  CreditCard, UserCheck, BookOpen, Settings, Save, X,
  Baby, Truck, Building2, UserPlus, Bell, Loader2,
  // Fix: Added missing Layers icon import to resolve Cannot find name 'Layers'
  Layers
} from '../components/Icons';
import { DashboardLayout } from './UserDashboards';
import { useNavigation } from '../contexts/NavigationContext';
import { registerStudent } from '../services/formService';

const CreateAdmissionPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState('admission-create');
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: '',
    class_name: 'Class 10',
    section: 'A',
    parent_name: '',
    phone: '',
    email: '',
  });

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { 
      id: 'admission', label: 'Admission', icon: <UserPlus size={20} />,
      subItems: [{ id: 'admission-create', label: 'Direct Admission' }]
    },
    { id: 'students', label: 'Students', icon: <Users size={20} /> },
    { id: 'fees', label: 'Fee Center', icon: <CreditCard size={20} /> },
  ];

  const handleSave = async () => {
    if (!formData.full_name || !formData.phone) {
        alert('Please fill mandatory fields (Full Name, Phone).');
        return;
    }
    setSaving(true);
    await registerStudent(formData);
    setSaving(false);
    alert('Student Successfully Admitted to MasterRoll SIS!');
    navigate('org-dashboard');
  };

  const InputField = ({ label, name, required = false, type = "text", placeholder = "", icon: Icon }: any) => (
    <div className="space-y-1">
      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center">
        {label} {required && <span className="text-rose-500 ml-1 font-black">*</span>}
      </label>
      <div className="relative group">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-300 group-focus-within:text-brand-500 transition-colors">
            <Icon size={16} />
          </div>
        )}
        <input 
          type={type} 
          name={name}
          value={(formData as any)[name]}
          onChange={(e) => setFormData({...formData, [name]: e.target.value})}
          placeholder={placeholder}
          className={`w-full ${Icon ? 'pl-10' : 'px-4'} py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-brand-500 outline-none transition-all shadow-inner`}
        />
      </div>
    </div>
  );

  const SelectField = ({ label, name, required = false, options = [], icon: Icon }: any) => (
    <div className="space-y-1">
      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center">
        {label} {required && <span className="text-rose-500 ml-1 font-black">*</span>}
      </label>
      <div className="relative group">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-300">
            <Icon size={16} />
          </div>
        )}
        <select 
          name={name}
          value={(formData as any)[name]}
          onChange={(e) => setFormData({...formData, [name]: e.target.value})}
          className={`w-full ${Icon ? 'pl-10' : 'px-4'} py-3 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold focus:bg-white focus:border-brand-500 outline-none transition-all appearance-none shadow-inner`}
        >
          <option value="">Select Option</option>
          {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
    </div>
  );

  return (
    <DashboardLayout title="Modern Academy" role="School ERP Admin" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
        <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100">
           <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-50 rounded-2xl text-brand-600"><UserPlus size={20} /></div>
              <div>
                <h1 className="text-xl font-black text-slate-900 tracking-tight">Direct Enrollment</h1>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Manual Student Entry Profile</p>
              </div>
           </div>
        </div>

        <div className="bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden">
            <div className="p-10 md:p-16 space-y-12">
                 <div>
                    <h4 className="text-xs font-black text-brand-600 uppercase tracking-[0.2em] flex items-center gap-3 mb-10 border-b border-slate-100 pb-4">
                       <GraduationCap size={18} /> Primary Student Data
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                       <InputField label="Student Full Name" name="full_name" required placeholder="e.g. John Doe" icon={User} />
                       <SelectField label="Grade / Class" name="class_name" required options={["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"]} icon={School} />
                       <SelectField label="Section" name="section" required options={["A", "B", "C", "D"]} icon={Layers} />
                       <InputField label="Primary Guardian" name="parent_name" required placeholder="Parent/Guardian Name" icon={Baby} />
                       <InputField label="Mobile Number" name="phone" required placeholder="+91" icon={Phone} />
                       <InputField label="Email Address" name="email" type="email" placeholder="student@school.com" icon={Mail} />
                    </div>
                 </div>
            </div>

            <div className="p-10 bg-slate-50 border-t border-slate-100 flex justify-end">
                 <button 
                   disabled={saving}
                   onClick={handleSave}
                   className="bg-slate-900 text-white px-12 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl hover:bg-brand-600 transition-all flex items-center transform active:scale-95 duration-200"
                 >
                    {saving ? <Loader2 size={16} className="animate-spin mr-3" /> : <Save className="mr-3" size={16} />} 
                    Finalize Admission
                 </button>
            </div>
        </div>
    </DashboardLayout>
  );
};

export default CreateAdmissionPage;
