
import React, { useEffect, useState } from 'react';
import { 
  LayoutDashboard, Users, CreditCard, School, LogOut, 
  TrendingUp, Activity, Bell, Calendar, BookOpen, 
  UserCheck, Shield, FileText, Settings, Plus, Search, 
  Filter, MoreVertical, Download, Mail, Phone, DollarSign, 
  Loader2, CheckCircle2, AlertCircle, X, MapPin, UserPlus, Menu,
  ArrowRight, Landmark, Zap, ClipboardList, Trash2,
  GraduationCap, MessageSquare, Briefcase, Building2,
  Baby, Pencil, Eye, Printer, FileSpreadsheet, Globe, Smartphone,
  Sparkles, History, Ban, Percent, FileWarning, Timer, Save, User,
  PlaySquare, ListChecks, HelpCircle, FileQuestion, GraduationCap as GradIcon,
  Wallet, Layers, LineChart, FileBarChart, ArrowDownRight, TrendingDown,
  Award, ShieldCheck, Lock, UploadCloud, MonitorPlay,
  // Added missing Video icon
  Video,
  Clock, Megaphone, Database, Send, Image as ImageIcon, BarChart3, Pin, FileDown, 
  MessageCircle, Cake, Info, Bus, Navigation, Fuel, Radio, LocateFixed, Utensils, Bed, Package, Barcode, Library, Bookmark,
  Fingerprint, Terminal, RefreshCcw, ShieldAlert, Palette, AppWindow, GitBranch, KeyRound, Image as UserCircle
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';
import { 
  fetchEnquiries, fetchStudents, registerStudent, 
  fetchFeeRecords, recordFeePayment, markAttendance, 
  fetchAttendanceByDate, fetchExamMarks, submitMarks,
  fetchUserProfile, updateUserProfile
} from '../services/formService';

// --- SHARED COMPONENTS ---

const Card = ({ children, title, action }: any) => (
  <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
     {(title || action) && (
       <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">{title}</h3>
          {action}
       </div>
     )}
     <div className="p-6 flex-1">
        {children}
     </div>
  </div>
);

const Badge = ({ children, variant = 'blue' }: any) => {
  const colors: any = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-emerald-100 text-emerald-700',
    red: 'bg-rose-100 text-rose-700',
    orange: 'bg-orange-100 text-orange-700',
    slate: 'bg-slate-100 text-slate-600',
  };
  return <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${colors[variant]}`}>{children}</span>;
};

// --- SETTINGS COMPONENT (REUSABLE) ---

const ProfileSettings: React.FC<{ role: string }> = ({ role }) => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchUserProfile(role).then(data => {
      setProfile(data);
      setLoading(false);
    });
  }, [role]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await updateUserProfile(role, profile);
    setSaving(false);
    alert('Profile Updated Successfully!');
  };

  if (loading) return <div className="p-20 text-center"><Loader2 className="animate-spin mx-auto text-brand-600" /></div>;

  const isOrg = role === 'org_admin';
  const isVendor = role === 'vendor';

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Account Settings</h2>
            <p className="text-slate-500 text-xs font-bold uppercase mt-1">Manage your identity & preferences</p>
          </div>
          <button 
            onClick={handleSave} 
            disabled={saving}
            className="bg-brand-600 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl flex items-center transform active:scale-95 transition-all"
          >
            {saving ? <Loader2 size={16} className="animate-spin mr-2" /> : <Save size={16} className="mr-2" />} 
            Save All Changes
          </button>
       </div>

       <div className="grid lg:grid-cols-3 gap-8">
          {/* Avatar Section */}
          <div className="lg:col-span-1">
             <Card title="Profile Image">
                <div className="flex flex-col items-center py-4">
                   <div className="relative group">
                      <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-slate-50 shadow-xl">
                         <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                      <button className="absolute -bottom-2 -right-2 bg-brand-600 text-white p-2 rounded-xl shadow-lg border-4 border-white hover:bg-brand-700 transition-colors">
                         <UploadCloud size={16} />
                      </button>
                   </div>
                   <p className="mt-6 text-[10px] font-bold text-slate-400 uppercase text-center leading-relaxed">
                      Recommended: 400x400px<br/>PNG or JPG (Max 2MB)
                   </p>
                </div>
             </Card>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-2 space-y-6">
             <Card title="Personal Details">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Full Name</label>
                      <input 
                        type="text" 
                        value={profile.full_name} 
                        onChange={(e) => setProfile({...profile, full_name: e.target.value})}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:bg-white focus:border-brand-500 outline-none transition-all" 
                      />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Email Address</label>
                      <input 
                        type="email" 
                        value={profile.email} 
                        readOnly
                        className="w-full px-4 py-2.5 bg-slate-100 border border-slate-100 rounded-xl text-sm font-bold text-slate-400 outline-none cursor-not-allowed" 
                      />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Mobile Number</label>
                      <input 
                        type="tel" 
                        value={profile.phone} 
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:bg-white focus:border-brand-500 outline-none transition-all" 
                      />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Designation</label>
                      <input 
                        type="text" 
                        value={profile.designation || 'Principal'} 
                        onChange={(e) => setProfile({...profile, designation: e.target.value})}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:bg-white focus:border-brand-500 outline-none transition-all" 
                      />
                   </div>
                </div>
             </Card>

             {(isOrg || isVendor) && (
               <Card title={isOrg ? "Institutional Details" : "Business Details"}>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-1">
                          <label className="text-[9px] font-black text-slate-400 uppercase">{isOrg ? 'School/College Name' : 'Company Name'}</label>
                          <input 
                            type="text" 
                            value={profile.institution_name} 
                            onChange={(e) => setProfile({...profile, institution_name: e.target.value})}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:bg-white focus:border-brand-500 outline-none transition-all" 
                          />
                       </div>
                       <div className="space-y-1">
                          <label className="text-[9px] font-black text-slate-400 uppercase">GST Registration</label>
                          <input 
                            type="text" 
                            value={profile.gst} 
                            onChange={(e) => setProfile({...profile, gst: e.target.value})}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:bg-white focus:border-brand-500 outline-none transition-all uppercase" 
                          />
                       </div>
                    </div>
                    
                    <div className="space-y-1">
                       <label className="text-[9px] font-black text-slate-400 uppercase">Registered Address</label>
                       <textarea 
                         rows={3}
                         value={profile.address}
                         onChange={(e) => setProfile({...profile, address: e.target.value})}
                         className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:bg-white focus:border-brand-500 outline-none transition-all"
                       />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase">Institutional Logo</label>
                          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-4 flex items-center justify-between group hover:border-brand-500 transition-colors">
                             <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                <School size={20} className="text-slate-300" />
                             </div>
                             <button className="text-[10px] font-black text-brand-600 uppercase flex items-center px-4">
                                <UploadCloud size={14} className="mr-2" /> Replace
                             </button>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <label className="text-[9px] font-black text-slate-400 uppercase">Textual Branding</label>
                          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-4 flex items-center justify-between group hover:border-brand-500 transition-colors">
                             <div className="h-8 w-24 bg-slate-200 rounded animate-pulse"></div>
                             <button className="text-[10px] font-black text-brand-600 uppercase flex items-center px-4">
                                <UploadCloud size={14} className="mr-2" /> Upload
                             </button>
                          </div>
                       </div>
                    </div>
                  </div>
               </Card>
             )}

             <Card title="Security & Access">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                   <div className="flex items-center gap-4">
                      <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                         <Lock size={20} />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-slate-900">Password Security</p>
                         <p className="text-xs text-slate-500">Last changed 45 days ago</p>
                      </div>
                   </div>
                   <button className="px-6 py-2 border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">Update Credentials</button>
                </div>
             </Card>
          </div>
       </div>
    </div>
  );
};

// --- MODULE 1: RECEPTION (ENQUIRY CRM) ---

const EnquiryModule: React.FC = () => {
  const { navigate } = useNavigation();
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnquiries().then(data => {
      setEnquiries(data);
      setLoading(false);
    });
  }, []);

  const handleConvert = async (enquiry: any) => {
    const confirm = window.confirm(`Convert ${enquiry.payload.name} to a student?`);
    if (confirm) {
      await registerStudent({
        full_name: enquiry.payload.name,
        class_name: enquiry.payload.applying_class,
        section: 'A',
        parent_name: enquiry.payload.father,
        phone: enquiry.payload.mobile,
        email: enquiry.payload.email
      });
      alert('Admission Created Successfully!');
      navigate('org-dashboard');
    }
  };

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Lead Pipeline</h2>
            <p className="text-slate-500 text-xs font-bold uppercase mt-1">Convert Enquiries to Admissions</p>
          </div>
          <button onClick={() => navigate('admission-enquiry')} className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg flex items-center"><Plus size={14} className="mr-2" /> New Enquiry</button>
       </div>

       <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          {loading ? (
             <div className="p-20 text-center"><Loader2 className="animate-spin mx-auto text-brand-600" /></div>
          ) : enquiries.length === 0 ? (
             <div className="p-20 text-center text-slate-400 italic">No enquiries logged yet.</div>
          ) : (
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b">
                     <tr className="text-[10px] font-black uppercase text-slate-400">
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Interested Class</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4 text-right">Action</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                     {enquiries.map((e: any) => (
                        <tr key={e.id} className="text-sm hover:bg-slate-50 transition-colors">
                           <td className="px-6 py-4 font-bold text-slate-900">{e.payload?.name || 'Walk-in'}</td>
                           <td className="px-6 py-4 font-medium text-slate-600">{e.payload?.applying_class || 'Class 1'}</td>
                           <td className="px-6 py-4 text-xs text-slate-400">{new Date(e.created_at).toLocaleDateString()}</td>
                           <td className="px-6 py-4 text-right">
                              <button onClick={() => handleConvert(e)} className="bg-brand-50 text-brand-700 px-4 py-1.5 rounded-lg font-black text-[10px] uppercase hover:bg-brand-600 hover:text-white transition-all">Convert</button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          )}
       </div>
    </div>
  );
};

// --- MODULE 2: ATTENDANCE (BULK MARKING) ---

const AttendanceWorkspace: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchStudents().then(data => {
      setStudents(data);
      const init: any = {};
      data.forEach((s: any) => init[s.student_id] = 'Present');
      setAttendance(init);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const date = new Date().toISOString().split('T')[0];
    const records = Object.entries(attendance).map(([sid, status]) => ({ student_id: sid, status, date }));
    await markAttendance(records);
    setSaving(false);
    alert('Attendance Saved for Today!');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
       <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Bulk Attendance Marking</h2>
            <p className="text-slate-500 text-xs font-bold uppercase mt-1">Class 10A • {new Date().toDateString()}</p>
          </div>
          <button 
            disabled={saving} 
            onClick={handleSave} 
            className="bg-brand-600 text-white px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl flex items-center"
          >
            {saving ? <Loader2 size={14} className="animate-spin mr-2" /> : <Save size={14} className="mr-2" />} 
            Finalize Roll Call
          </button>
       </div>

       <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
             <thead className="bg-slate-900 text-[9px] font-black uppercase text-slate-400">
                <tr>
                   <th className="px-6 py-4">ID</th>
                   <th className="px-6 py-4">Student Name</th>
                   <th className="px-6 py-4 text-center">Present</th>
                   <th className="px-6 py-4 text-center">Absent</th>
                   <th className="px-6 py-4 text-center">Late</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-slate-100">
                {students.map((s) => (
                  <tr key={s.student_id} className="text-sm hover:bg-slate-50 transition-colors">
                     <td className="px-6 py-4 font-mono text-[10px] text-slate-400 font-bold">{s.student_id}</td>
                     <td className="px-6 py-4 font-black text-slate-800">{s.full_name}</td>
                     <td className="px-6 py-4 text-center">
                        <input type="radio" name={`att_${s.id}`} checked={attendance[s.student_id] === 'Present'} onChange={() => setAttendance({...attendance, [s.student_id]: 'Present'})} className="w-4 h-4 accent-emerald-500" />
                     </td>
                     <td className="px-6 py-4 text-center">
                        <input type="radio" name={`att_${s.id}`} checked={attendance[s.student_id] === 'Absent'} onChange={() => setAttendance({...attendance, [s.student_id]: 'Absent'})} className="w-4 h-4 accent-rose-500" />
                     </td>
                     <td className="px-6 py-4 text-center">
                        <input type="radio" name={`att_${s.id}`} checked={attendance[s.student_id] === 'Late'} onChange={() => setAttendance({...attendance, [s.student_id]: 'Late'})} className="w-4 h-4 accent-amber-500" />
                     </td>
                  </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );
};

// --- MODULE 3: FINANCE (FEE COLLECTION) ---

const FinanceWorkspace: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [feeRecords, setFeeRecords] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [paying, setPaying] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchStudents(), fetchFeeRecords()]).then(([s, f]) => {
      setStudents(s);
      setFeeRecords(f);
    });
  }, []);

  const handlePay = async (sid: string) => {
    setPaying(sid);
    await recordFeePayment(sid, 15000);
    const updated = await fetchFeeRecords();
    setFeeRecords(updated);
    setPaying(null);
    alert('Payment Successful! E-Receipt Sent.');
  };

  const filtered = students.filter(s => s.full_name.toLowerCase().includes(search.toLowerCase()) || s.student_id.includes(search));

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Cashier Console</h2>
            <p className="text-slate-500 text-xs font-bold uppercase mt-1">Institutional Fee Collection Ledger</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest"><Printer size={14} className="mr-2 inline" /> Print Day Book</button>
            <button className="bg-brand-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-500/30">Bulk Billing</button>
          </div>
       </div>

       <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b bg-slate-50/50">
             <div className="relative">
                <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Scan Barcode or Search Student Name / ID..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-brand-500/20 shadow-sm"
                />
             </div>
          </div>
          
          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead className="bg-slate-50 text-[9px] font-black uppercase text-slate-400 border-b">
                   <tr>
                      <th className="px-6 py-4">Student</th>
                      <th className="px-6 py-4">Class/Section</th>
                      <th className="px-6 py-4">Outstanding</th>
                      <th className="px-6 py-4 text-center">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {filtered.map(s => {
                      const record = feeRecords.find(f => f.student_id === s.student_id);
                      const isPaid = record?.status === 'Paid';
                      return (
                        <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                           <td className="px-6 py-4">
                              <div className="font-black text-slate-900">{s.full_name}</div>
                              <div className="text-[10px] font-mono text-slate-400">{s.student_id}</div>
                           </td>
                           <td className="px-6 py-4 font-bold text-slate-600">{s.class_name} - {s.section}</td>
                           <td className="px-6 py-4 font-black text-slate-900">₹ {isPaid ? '0' : '15,000'}</td>
                           <td className="px-6 py-4 text-center">
                              <Badge variant={isPaid ? 'green' : 'orange'}>{record?.status || 'Pending'}</Badge>
                           </td>
                           <td className="px-6 py-4 text-right">
                              {isPaid ? (
                                <button className="p-2 text-slate-400 hover:text-brand-600 transition-colors"><FileText size={18}/></button>
                              ) : (
                                <button 
                                  disabled={paying === s.student_id}
                                  onClick={() => handlePay(s.student_id)} 
                                  className="bg-slate-900 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-brand-600 transition-all shadow-md"
                                >
                                   {paying === s.student_id ? <Loader2 size={12} className="animate-spin" /> : 'Pay Now'}
                                </button>
                              )}
                           </td>
                        </tr>
                      )
                   })}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
};

// --- MODULE 4: EXAMS & RESULTS ---

const ExamsWorkspace: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [marks, setMarks] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  useEffect(() => {
    Promise.all([fetchStudents(), fetchExamMarks()]).then(([s, m]) => {
      setStudents(s);
      setMarks(m);
    });
  }, []);

  const handleMarkEntry = async (sid: string, score: string) => {
    const val = parseInt(score);
    if (isNaN(val)) return;
    await submitMarks({ student_id: sid, subject: selectedSubject, max_marks: 100, obtained_marks: val, grade: val > 80 ? 'A+' : val > 60 ? 'B' : 'C' });
    fetchExamMarks().then(setMarks);
  };

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Examinations Hub</h2>
            <p className="text-slate-500 text-xs font-bold uppercase mt-1">Result Processing & Gradecard Generation</p>
          </div>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl flex items-center">
             <Award className="mr-2" size={16} /> Batch Print Results
          </button>
       </div>

       <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
             <Card title="Configuration">
                <div className="space-y-4">
                   <div>
                      <label className="text-[9px] font-black text-slate-400 uppercase">Subject</label>
                      <select 
                        value={selectedSubject} 
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-xl text-sm font-bold bg-slate-50 outline-none focus:ring-1 focus:ring-brand-500"
                      >
                         {['Mathematics', 'Physics', 'Chemistry', 'English', 'History'].map(s => <option key={s}>{s}</option>)}
                      </select>
                   </div>
                   <div>
                      <label className="text-[9px] font-black text-slate-400 uppercase">Exam Type</label>
                      <select className="w-full mt-1 px-3 py-2 border rounded-xl text-sm font-bold bg-slate-50 outline-none">
                         <option>Mid-Term 2024</option>
                         <option>Final 2024</option>
                      </select>
                   </div>
                </div>
             </Card>
          </div>

          <div className="lg:col-span-3 bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-4 border-b bg-slate-50 flex justify-between items-center">
                <h3 className="text-xs font-black text-slate-700 uppercase tracking-widest">{selectedSubject} Marksheet</h3>
                <Filter size={14} className="text-slate-400" />
             </div>
             <table className="w-full text-left">
                <thead className="bg-white text-[9px] font-black uppercase text-slate-400 border-b">
                   <tr>
                      <th className="px-6 py-4">Student</th>
                      <th className="px-6 py-4">Max Marks</th>
                      <th className="px-6 py-4">Obtained</th>
                      <th className="px-6 py-4 text-right">Current Grade</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {students.map(s => {
                      const m = marks.find(mark => mark.student_id === s.student_id && mark.subject === selectedSubject);
                      return (
                        <tr key={s.id} className="text-sm">
                           <td className="px-6 py-4 font-bold text-slate-800">{s.full_name}</td>
                           <td className="px-6 py-4 text-slate-400">100</td>
                           <td className="px-6 py-4">
                              <input 
                                type="number" 
                                defaultValue={m?.obtained_marks || ''} 
                                onBlur={(e) => handleMarkEntry(s.student_id, e.target.value)}
                                className="w-20 px-3 py-1.5 bg-slate-50 border rounded-lg text-sm font-black focus:ring-1 focus:ring-brand-500 outline-none"
                              />
                           </td>
                           <td className="px-6 py-4 text-right">
                              <Badge variant={m?.grade?.startsWith('A') ? 'green' : m?.grade ? 'blue' : 'slate'}>{m?.grade || '--'}</Badge>
                           </td>
                        </tr>
                      )
                   })}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
};

// --- ORG DASHBOARD OVERVIEW ---

const OrgOverview: React.FC<{setActiveTab: any}> = ({setActiveTab}) => {
  const [counts, setCounts] = useState({ s: 0, e: 0, fees: 0 });
  
  useEffect(() => {
    Promise.all([fetchStudents(), fetchEnquiries(), fetchFeeRecords()]).then(([s, e, f]) => {
      setCounts({ 
        s: s.length, 
        e: e.length, 
        fees: f.filter((fee: any) => fee.status === 'Pending').length * 15000 
      });
    });
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
       <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
             <h2 className="text-3xl font-black text-slate-900 tracking-tight">Namaste, Principal Singh</h2>
             <p className="text-slate-500 font-bold mt-1 uppercase tracking-widest text-[10px]">Institutional Health Index: <span className="text-emerald-600">Optimal (9.4/10)</span></p>
          </div>
          <div className="flex gap-2">
             <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-brand-600 transition-colors cursor-pointer shadow-sm"><Calendar size={20}/></div>
             <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-slate-400 relative hover:text-brand-600 transition-colors cursor-pointer shadow-sm">
                <Bell size={20}/>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </div>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm group hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveTab('students')}>
             <div className="flex justify-between items-start mb-4">
                <div className="bg-brand-50 p-3 rounded-2xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors shadow-inner"><Users size={24} /></div>
                <span className="text-[9px] font-black text-green-600 uppercase bg-green-50 px-2 py-0.5 rounded">+12 This Month</span>
             </div>
             <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Active Enrollment</p>
             <h3 className="text-4xl font-black text-slate-900 mt-1">{counts.s}</h3>
          </div>
          
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm group hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveTab('admission-enquiry')}>
             <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner"><MessageSquare size={24} /></div>
                <span className="text-[9px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded">Real-time Feed</span>
             </div>
             <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Enquiry Pool</p>
             <h3 className="text-4xl font-black text-slate-900 mt-1">{counts.e}</h3>
          </div>

          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm group hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveTab('fee-center')}>
             <div className="flex justify-between items-start mb-4">
                <div className="bg-orange-50 p-3 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-inner"><DollarSign size={24} /></div>
                <span className="text-[9px] font-black text-rose-600 uppercase bg-rose-50 px-2 py-0.5 rounded">Pending Collection</span>
             </div>
             <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Revenue at Risk</p>
             <h3 className="text-4xl font-black text-slate-900 mt-1">₹ {counts.fees.toLocaleString()}</h3>
          </div>

          <div className="bg-slate-900 p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Database size={100} /></div>
             <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest relative z-10">Platform Status</p>
             <h3 className="text-3xl font-black text-white mt-1 relative z-10">ACTIVE</h3>
             <span className="text-brand-400 text-[10px] font-black uppercase tracking-wider block mt-4 relative z-10">99.99% Uptime SLA</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-6 pb-12">
          {[
            { id: 'attendance', label: 'Roll Call', icon: <CheckCircle2 />, color: 'brand' },
            { id: 'fee-center', label: 'Cashier', icon: <CreditCard />, color: 'blue' },
            { id: 'exams', label: 'Exams', icon: <Award />, color: 'emerald' },
            { id: 'students', label: 'Directory', icon: <Users />, color: 'purple' },
          ].map(btn => (
            <button key={btn.id} onClick={() => setActiveTab(btn.id)} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all text-center flex flex-col items-center group transform hover:-translate-y-1">
               <div className={`w-14 h-14 bg-${btn.color}-50 rounded-3xl flex items-center justify-center text-${btn.color}-600 mb-6 group-hover:scale-110 group-hover:bg-${btn.color}-600 group-hover:text-white transition-all shadow-inner`}>
                  {React.cloneElement(btn.icon as any, { size: 24 })}
               </div>
               <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">{btn.label}</span>
            </button>
          ))}
       </div>
    </div>
  );
};

// --- CORE DASHBOARD WRAPPERS ---

export const OrgDashboard: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = React.useState('overview');
  
  const menuItems = [
    { id: 'overview', label: 'Insights', icon: <LayoutDashboard size={18} /> },
    { 
      id: 'reception', label: 'Front Desk', icon: <MessageSquare size={18} />,
      subItems: [{ id: 'admission-enquiry', label: 'Admission CRM' }, { id: 'visitor-log', label: 'Visitor Book' }]
    },
    { 
      id: 'academics', label: 'L&D Center', icon: <BookOpen size={18} />,
      subItems: [{ id: 'attendance', label: 'Attendance' }, { id: 'exams', label: 'Examinations' }, { id: 'timetable', label: 'Schedule' }]
    },
    { 
      id: 'financials', label: 'Accounts', icon: <DollarSign size={18} />,
      subItems: [{ id: 'fee-center', label: 'Fee Center' }, { id: 'expense', label: 'Expenses' }]
    },
    { id: 'students', label: 'SIS Records', icon: <Users size={18} /> },
    { id: 'settings', label: 'Config', icon: <Settings size={18} /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OrgOverview setActiveTab={setActiveTab} />;
      case 'admission-enquiry': return <EnquiryModule />;
      case 'attendance': return <AttendanceWorkspace />;
      case 'fee-center': return <FinanceWorkspace />;
      case 'exams': return <ExamsWorkspace />;
      case 'settings': return <ProfileSettings role="org_admin" />;
      case 'students': return (
        <div className="space-y-6">
           <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Student Information System</h2>
              <button onClick={() => navigate('create-admission')} className="bg-brand-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl flex items-center hover:bg-brand-700 transition-all"><UserPlus size={16} className="mr-2"/> New Student</button>
           </div>
           <SISDirectory />
        </div>
      );
      default: return (
        <div className="flex flex-col items-center justify-center py-40 bg-white rounded-[3rem] border border-slate-100 shadow-inner">
           <div className="bg-slate-100 p-8 rounded-full mb-8"><Settings size={40} className="text-slate-300 animate-spin-slow" /></div>
           <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest">{activeTab} Work In Progress</h2>
           <p className="text-slate-400 mt-2 font-bold max-w-xs text-center">We are optimizing the database for this module. Please check back shortly.</p>
        </div>
      );
    }
  };

  return (
    <DashboardLayout title="Modern Academy Global" role="Institutional ERP Admin" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
       {renderContent()}
    </DashboardLayout>
  );
};

export const TeacherDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const menuItems = [
    { id: 'overview', label: 'Planner', icon: <LayoutDashboard size={18} /> },
    { id: 'classes', label: 'Live Sessions', icon: <Video size={18} /> },
    { id: 'students', label: 'My Batches', icon: <Users size={18} /> },
    { id: 'earnings', label: 'Payouts', icon: <DollarSign size={18} /> },
    { id: 'settings', label: 'Profile', icon: <Settings size={18} /> }
  ];

  return (
    <DashboardLayout title="Faculty Hub" role="Certified Educator" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
       {activeTab === 'settings' ? <ProfileSettings role="teacher" /> : (
         <div className="py-20 text-center text-slate-400 font-bold uppercase tracking-widest">Faculty Management Console Ready</div>
       )}
    </DashboardLayout>
  );
};

export const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const menuItems = [
    { id: 'overview', label: 'My Learning', icon: <BookOpen size={18} /> },
    { id: 'exams', label: 'Results', icon: <Award size={18} /> },
    { id: 'fee-payment', label: 'Pay Dues', icon: <CreditCard size={18} /> },
    { id: 'settings', label: 'Profile', icon: <Settings size={18} /> }
  ];

  return (
    <DashboardLayout title="Student Workspace" role="Class 10A" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
       {activeTab === 'settings' ? <ProfileSettings role="student" /> : (
         <div className="py-20 text-center text-slate-400 font-bold uppercase tracking-widest">Student Portal Active</div>
       )}
    </DashboardLayout>
  );
};

export const ParentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const menuItems = [
    { id: 'overview', label: 'Wards', icon: <Baby size={18} /> },
    { id: 'fees', label: 'Ledger', icon: <DollarSign size={18} /> },
    { id: 'transport', label: 'Fleet Sync', icon: <Bus size={18} /> },
    { id: 'settings', label: 'Account', icon: <Settings size={18} /> }
  ];

  return (
    <DashboardLayout title="Parental Control" role="Primary Guardian" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
       {activeTab === 'settings' ? <ProfileSettings role="parent" /> : (
         <div className="py-20 text-center text-slate-400 font-bold uppercase tracking-widest">Guardian Dashboard Active</div>
       )}
    </DashboardLayout>
  );
};

const SISDirectory = () => {
  const [students, setStudents] = useState<any[]>([]);
  useEffect(() => { fetchStudents().then(setStudents); }, []);
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
       <div className="p-4 border-b bg-slate-50/50 flex justify-between items-center">
          <div className="relative w-64">
             <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
             <input placeholder="Fast Search..." className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border outline-none focus:border-brand-500" />
          </div>
          <button className="p-2 text-slate-400 hover:text-brand-600 transition-colors"><Download size={18}/></button>
       </div>
       <table className="w-full text-left">
          <thead className="bg-white text-[9px] font-black uppercase text-slate-400 border-b">
             <tr>
                <th className="px-6 py-4">Student ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Parent</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4 text-right">Status</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
             {students.map(s => (
                <tr key={s.student_id} className="hover:bg-slate-50/50 transition-colors">
                   <td className="px-6 py-4 font-mono font-bold text-brand-600 text-xs">{s.student_id}</td>
                   <td className="px-6 py-4 font-black text-slate-900">{s.full_name}</td>
                   <td className="px-6 py-4 text-slate-500">{s.parent_name}</td>
                   <td className="px-6 py-4 font-medium text-slate-600">{s.phone}</td>
                   <td className="px-6 py-4 text-right"><Badge variant="green">{s.status}</Badge></td>
                </tr>
             ))}
          </tbody>
       </table>
    </div>
  );
};

// --- BASE COMPONENTS ---

export const DashboardSidebar: React.FC<{
  title: string;
  role: string;
  menuItems: any[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}> = ({ title, role, menuItems, activeTab, setActiveTab }) => {
  const { navigate } = useNavigation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  return (
    <aside className="w-64 bg-slate-900 text-white hidden lg:flex flex-col fixed h-full top-0 pt-20 z-10 left-0 border-r border-slate-800">
      <div className="px-6 py-8 border-b border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-600 rounded-2xl flex items-center justify-center shadow-lg"><School size={20}/></div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-tight truncate w-32">{title}</h2>
          <p className="text-[8px] text-slate-500 mt-0.5 uppercase tracking-widest font-black">{role}</p>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto custom-scrollbar pb-24">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button 
              onClick={() => {
                if (item.subItems) {
                  setOpenMenus(prev => prev.includes(item.id) ? prev.filter(i => i !== item.id) : [...prev, item.id]);
                } else {
                  setActiveTab(item.id);
                }
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                activeTab === item.id || (item.subItems && item.subItems.some((s: any) => s.id === activeTab))
                ? 'bg-brand-600 text-white shadow-xl shadow-brand-500/10' 
                : 'text-slate-500 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center">
                <span className={`mr-3 transition-colors ${activeTab === item.id ? 'text-white' : 'text-slate-600 group-hover:text-white'}`}>{item.icon}</span>
                <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
              </div>
              {item.subItems && (
                <Plus size={10} className={`transition-transform duration-300 ${openMenus.includes(item.id) ? 'rotate-45' : ''}`} />
              )}
            </button>
            {item.subItems && openMenus.includes(item.id) && (
              <div className="ml-9 mt-1 space-y-1 border-l border-slate-800 pl-4 animate-in slide-in-from-left-2 duration-200">
                {item.subItems.map((sub: any) => (
                  <button 
                    key={sub.id}
                    onClick={() => setActiveTab(sub.id)}
                    className={`w-full text-left px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                      activeTab === sub.id ? 'text-brand-400' : 'text-slate-600 hover:text-slate-300'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800 bg-slate-900 absolute bottom-0 w-full">
        <button onClick={() => navigate('home')} className="w-full flex items-center px-4 py-3 text-rose-500 hover:bg-rose-500/10 rounded-2xl transition-all group">
          <LogOut size={18} className="mr-3 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Terminate Session</span>
        </button>
      </div>
    </aside>
  );
};

export const DashboardLayout: React.FC<{
  title: string;
  role: string;
  menuItems: any[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  children: React.ReactNode;
}> = ({ title, role, menuItems, activeTab, setActiveTab, children }) => {
  const { navigate } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);

  return (
    <div className="pt-16 lg:pt-20 bg-slate-50 min-h-screen flex font-sans">
      {/* Mobile Top Header Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 z-40 text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg"><School size={16}/></div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-tight truncate max-w-[150px]">{title}</h2>
            <p className="text-[7px] text-slate-500 uppercase tracking-widest font-black">{role}</p>
          </div>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 hover:bg-slate-800 rounded-xl transition-all"
          aria-label="Open Navigation Drawer"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Navigation Drawer Modal Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop screen mask */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Main Slide-out Drawer */}
          <div className="relative flex flex-col w-72 max-w-xs bg-slate-900 text-white h-full shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center"><School size={18}/></div>
                <div>
                  <h2 className="text-xs font-black uppercase tracking-tight truncate max-w-[120px]">{title}</h2>
                  <p className="text-[7px] text-slate-500 uppercase tracking-widest font-black">{role}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto pb-24">
              {menuItems.map((item) => {
                const isItemActive = activeTab === item.id || (item.subItems && item.subItems.some((s: any) => s.id === activeTab));
                return (
                  <div key={item.id}>
                    <button 
                      onClick={() => {
                        if (item.subItems) {
                          setOpenMobileMenus(prev => prev.includes(item.id) ? prev.filter(i => i !== item.id) : [...prev, item.id]);
                        } else {
                          setActiveTab(item.id);
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                        isItemActive
                        ? 'bg-brand-600 text-white shadow-xl shadow-brand-500/10' 
                        : 'text-slate-500 hover:bg-slate-850 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className={`mr-3 ${isItemActive ? 'text-white' : 'text-slate-600'}`}>{item.icon}</span>
                        <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                      </div>
                      {item.subItems && (
                        <Plus size={10} className={`transition-transform duration-300 ${openMobileMenus.includes(item.id) ? 'rotate-45' : ''}`} />
                      )}
                    </button>
                    {item.subItems && openMobileMenus.includes(item.id) && (
                      <div className="ml-9 mt-1 space-y-1 border-l border-slate-805 pl-4">
                        {item.subItems.map((sub: any) => (
                          <button 
                            key={sub.id}
                            onClick={() => {
                              setActiveTab(sub.id);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                              activeTab === sub.id ? 'text-brand-405' : 'text-slate-500 hover:text-slate-300'
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="p-4 border-t border-slate-800 bg-slate-900 absolute bottom-0 w-full">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('home');
                }} 
                className="w-full flex items-center px-4 py-3 text-rose-500 hover:bg-rose-500/10 rounded-2xl transition-all"
              >
                <LogOut size={18} className="mr-3" />
                <span className="text-xs font-black uppercase tracking-widest">Terminate Session</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <DashboardSidebar 
        title={title} 
        role={role} 
        menuItems={menuItems} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-24 lg:pt-8 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export const SuperAdminDashboard = () => <div>Super Admin Console</div>;
