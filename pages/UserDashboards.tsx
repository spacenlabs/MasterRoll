import React from 'react';
import { 
  LayoutDashboard, Users, CreditCard, School, LogOut, 
  TrendingUp, Activity, Bell, Calendar, BookOpen, 
  UserCheck, Shield, FileText, Settings, Baby, GraduationCap,
  CheckCircle2, AlertCircle, Clock, MapPin, Search, Plus, Filter,
  MoreVertical, Download, Mail, Phone, DollarSign
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

// --- Shared Components ---

const DashboardSidebar: React.FC<{ 
  title: string; 
  role: string; 
  menuItems: { id: string; label: string; icon: React.ReactNode }[]; 
  activeTab: string;
  setActiveTab: (id: any) => void;
}> = ({ title, role, menuItems, activeTab, setActiveTab }) => {
  const { navigate } = useNavigation();
  return (
    <aside className="w-64 bg-slate-900 text-white hidden lg:flex flex-col fixed h-full top-0 pt-20 z-10 left-0 border-r border-slate-800">
      <div className="px-6 py-6 border-b border-slate-800">
         <h2 className="text-lg font-bold">{title}</h2>
         <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">{role}</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(item => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800 pb-24">
        <button onClick={() => navigate('login')} className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-slate-800 rounded-xl transition-all">
          <LogOut size={20} className="mr-3" />
          Log Out
        </button>
      </div>
    </aside>
  );
};

const DashboardLayout: React.FC<{ 
  title: string; 
  role: string; 
  menuItems: any[];
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (id: any) => void;
}> = ({ title, role, menuItems, children, activeTab, setActiveTab }) => {
  const { navigate } = useNavigation();
  return (
    <div className="pt-20 bg-slate-50 min-h-screen flex">
      <DashboardSidebar 
        title={title} 
        role={role} 
        menuItems={menuItems} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-24 lg:pt-8">
        <div className="lg:hidden mb-6 flex justify-between items-center">
           <div>
             <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
             <p className="text-xs text-slate-500">{role}</p>
           </div>
           <button onClick={() => navigate('login')} className="text-red-500 bg-red-50 p-2 rounded-lg"><LogOut size={24} /></button>
        </div>
        {children}
      </main>
    </div>
  );
};


// --- 1. Super Admin Dashboard ---

export const SuperAdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('overview');
  
  const menuItems = [
    { id: 'overview', label: 'Platform Overview', icon: <Activity size={20} /> },
    { id: 'schools', label: 'Institutions', icon: <School size={20} /> },
    { id: 'revenue', label: 'Revenue', icon: <CreditCard size={20} /> },
    { id: 'users', label: 'User Management', icon: <Users size={20} /> },
    { id: 'settings', label: 'System Settings', icon: <Settings size={20} /> },
  ];

  return (
    <DashboardLayout title="MasterRoll Admin" role="Super Admin" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start">
                <div>
                   <p className="text-slate-500 text-sm font-medium">Total Institutions</p>
                   <h3 className="text-3xl font-bold text-slate-900 mt-2">542</h3>
                </div>
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><School size={20} /></div>
             </div>
             <span className="text-green-600 text-xs font-bold flex items-center mt-2"><TrendingUp size={14} className="mr-1"/> +12 this month</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start">
                <div>
                   <p className="text-slate-500 text-sm font-medium">Active Students</p>
                   <h3 className="text-3xl font-bold text-slate-900 mt-2">2.4M</h3>
                </div>
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Users size={20} /></div>
             </div>
             <span className="text-green-600 text-xs font-bold flex items-center mt-2"><TrendingUp size={14} className="mr-1"/> +5% growth</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start">
                <div>
                   <p className="text-slate-500 text-sm font-medium">Monthly Revenue</p>
                   <h3 className="text-3xl font-bold text-slate-900 mt-2">₹ 4.2 Cr</h3>
                </div>
                <div className="bg-green-100 p-2 rounded-lg text-green-600"><CreditCard size={20} /></div>
             </div>
             <span className="text-green-600 text-xs font-bold flex items-center mt-2"><TrendingUp size={14} className="mr-1"/> +18% vs last month</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start">
                <div>
                   <p className="text-slate-500 text-sm font-medium">System Health</p>
                   <h3 className="text-3xl font-bold text-green-600 mt-2">99.9%</h3>
                </div>
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Activity size={20} /></div>
             </div>
             <span className="text-slate-400 text-xs font-bold mt-2 block">Server Load: 42%</span>
          </div>
       </div>

       <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
             <h3 className="font-bold text-lg text-slate-900">Recent Institute Signups</h3>
             <button className="text-blue-600 text-sm font-bold">View All</button>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                   <tr>
                      <th className="px-6 py-4 font-semibold">Institute Name</th>
                      <th className="px-6 py-4 font-semibold">City</th>
                      <th className="px-6 py-4 font-semibold">Plan</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Date</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {[
                      { name: "St. Xavier's High School", city: "Mumbai", plan: "Enterprise", status: "Active", date: "Oct 24, 2024" },
                      { name: "Green Valley Public School", city: "Bangalore", plan: "Pro", status: "Pending", date: "Oct 23, 2024" },
                      { name: "Delhi Heritage Academy", city: "New Delhi", plan: "Pro", status: "Active", date: "Oct 22, 2024" },
                      { name: "Little Stars Kindergarten", city: "Pune", plan: "Basic", status: "Active", date: "Oct 21, 2024" },
                   ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                         <td className="px-6 py-4 font-bold text-slate-900">{row.name}</td>
                         <td className="px-6 py-4 text-slate-600">{row.city}</td>
                         <td className="px-6 py-4 text-slate-600"><span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold">{row.plan}</span></td>
                         <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                               {row.status}
                            </span>
                         </td>
                         <td className="px-6 py-4 text-slate-500 text-sm">{row.date}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </DashboardLayout>
  );
};

// --- 2. Organization Admin Dashboard ---

export const OrgDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('overview');
  
  const menuItems = [
    { id: 'overview', label: 'School Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'students', label: 'Students', icon: <Users size={20} /> },
    { id: 'fees', label: 'Fee Collection', icon: <CreditCard size={20} /> },
    { id: 'staff', label: 'Staff HR', icon: <UserCheck size={20} /> },
    { id: 'academics', label: 'Academics', icon: <BookOpen size={20} /> },
  ];

  return (
    <DashboardLayout title="Modern Academy" role="Principal Dashboard" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start">
               <div>
                  <p className="text-slate-500 text-sm font-medium">Total Students</p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">1,250</h3>
               </div>
               <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Users size={24} /></div>
             </div>
             <div className="w-full bg-slate-100 rounded-full h-1.5 mt-4">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
             </div>
             <p className="text-xs text-slate-400 mt-2">85% Capacity</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start">
               <div>
                  <p className="text-slate-500 text-sm font-medium">Fees Collected (Oct)</p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">₹ 45.2 L</h3>
               </div>
               <div className="p-3 bg-green-100 text-green-600 rounded-xl"><CreditCard size={24} /></div>
             </div>
             <div className="w-full bg-slate-100 rounded-full h-1.5 mt-4">
                <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '62%' }}></div>
             </div>
             <p className="text-xs text-slate-400 mt-2">62% of monthly target</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start">
               <div>
                  <p className="text-slate-500 text-sm font-medium">Staff Attendance</p>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">84 / 90</h3>
               </div>
               <div className="p-3 bg-purple-100 text-purple-600 rounded-xl"><UserCheck size={24} /></div>
             </div>
             <div className="flex -space-x-2 mt-4">
                {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">S{i}</div>)}
                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-slate-500 font-bold">+80</div>
             </div>
          </div>
       </div>

       <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-900">Recent Fee Payments</h3>
                <button className="text-xs font-bold text-blue-600">View Report</button>
             </div>
             <ul className="space-y-4">
                {[
                   { id: 1001, name: "Rahul Sharma", class: "10-A", amount: "12,500" },
                   { id: 1002, name: "Priya Verma", class: "9-B", amount: "12,500" },
                   { id: 1003, name: "Amit Singh", class: "12-Sci", amount: "18,000" },
                   { id: 1004, name: "Sneha Gupta", class: "8-C", amount: "10,500" }
                ].map((s, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                     <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold mr-3">{s.name.charAt(0)}</div>
                        <div>
                           <p className="text-sm font-bold text-slate-900">{s.name}</p>
                           <p className="text-xs text-slate-500">Class {s.class} • ID: {s.id}</p>
                        </div>
                     </div>
                     <span className="font-bold text-green-600">+ ₹ {s.amount}</span>
                  </li>
                ))}
             </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
             <h3 className="font-bold text-slate-900 mb-6">Pending Tasks</h3>
             <div className="space-y-4">
                <div className="flex items-start p-3 bg-yellow-50 rounded-xl border border-yellow-100">
                   <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                   <div>
                      <p className="text-sm font-bold text-yellow-800">Approve Staff Leave</p>
                      <p className="text-xs text-yellow-600 mt-1">3 pending requests from Science Dept.</p>
                   </div>
                   <button className="ml-auto text-xs bg-white border border-yellow-200 px-3 py-1 rounded font-bold text-yellow-700">View</button>
                </div>
                <div className="flex items-start p-3 bg-blue-50 rounded-xl border border-blue-100">
                   <FileText className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                   <div>
                      <p className="text-sm font-bold text-blue-800">Admission Enquiries</p>
                      <p className="text-xs text-blue-600 mt-1">12 new applications for next academic year.</p>
                   </div>
                   <button className="ml-auto text-xs bg-white border border-blue-200 px-3 py-1 rounded font-bold text-blue-700">Review</button>
                </div>
                <div className="flex items-start p-3 bg-red-50 rounded-xl border border-red-100">
                   <CreditCard className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                   <div>
                      <p className="text-sm font-bold text-red-800">Fee Defaulters</p>
                      <p className="text-xs text-red-600 mt-1">45 students have overdue fees > 30 days.</p>
                   </div>
                   <button className="ml-auto text-xs bg-white border border-red-200 px-3 py-1 rounded font-bold text-red-700">Alert</button>
                </div>
             </div>
          </div>
       </div>
    </DashboardLayout>
  );
};

// --- 3. Teacher Dashboard ---

export const TeacherDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('schedule');
  
  const menuItems = [
    { id: 'schedule', label: 'My Schedule', icon: <Calendar size={20} /> },
    { id: 'classes', label: 'My Classes', icon: <Users size={20} /> },
    { id: 'attendance', label: 'Mark Attendance', icon: <UserCheck size={20} /> },
    { id: 'lms', label: 'Course Content', icon: <BookOpen size={20} /> },
    { id: 'grades', label: 'Grades & Reports', icon: <FileText size={20} /> },
  ];

  return (
    <DashboardLayout title="Faculty Portal" role="Amit Verma (Physics)" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
       <div className="flex justify-between items-center mb-8">
          <div>
             <h2 className="text-2xl font-bold text-slate-900">Good Morning, Amit</h2>
             <p className="text-slate-600">You have 4 classes scheduled for today.</p>
          </div>
          <div className="text-right">
             <p className="text-3xl font-bold text-slate-900">10:45 AM</p>
             <p className="text-slate-500 text-sm">Wednesday, Oct 25</p>
          </div>
       </div>

       <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6">
             <h3 className="font-bold text-slate-900 text-lg">Today's Timeline</h3>
             {[
                { time: '09:00 AM', subject: 'Physics (Mechanics)', class: 'Class 10-A', status: 'Completed', color: 'green' },
                { time: '10:30 AM', subject: 'Physics Lab', class: 'Class 12-Sci', status: 'In Progress', color: 'blue' },
                { time: '01:00 PM', subject: 'Math Substitution', class: 'Class 8-B', status: 'Upcoming', color: 'orange' },
                { time: '02:30 PM', subject: 'Remedial Class', class: 'Library', status: 'Upcoming', color: 'purple' },
             ].map((cls, idx) => (
                <div key={idx} className={`bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-brand-300 transition-colors relative overflow-hidden`}>
                   <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-${cls.color}-500`}></div>
                   <div className="flex items-center pl-4">
                      <div className={`p-3 rounded-xl bg-${cls.color}-50 text-${cls.color}-600 mr-4`}>
                         <Clock size={20} />
                      </div>
                      <div>
                         <p className="font-bold text-slate-900">{cls.subject}</p>
                         <p className="text-sm text-slate-500">{cls.time} • {cls.class}</p>
                      </div>
                   </div>
                   {cls.status === 'In Progress' ? (
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/30">
                         Open Classroom
                      </button>
                   ) : (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${cls.color}-100 text-${cls.color}-700`}>
                         {cls.status}
                      </span>
                   )}
                </div>
             ))}
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
             <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                   <button className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex flex-col items-center justify-center text-center transition-colors">
                      <UserCheck className="w-6 h-6 text-blue-600 mb-2" />
                      <span className="text-xs font-bold text-slate-700">Attendance</span>
                   </button>
                   <button className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex flex-col items-center justify-center text-center transition-colors">
                      <FileText className="w-6 h-6 text-green-600 mb-2" />
                      <span className="text-xs font-bold text-slate-700">Marks Entry</span>
                   </button>
                   <button className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex flex-col items-center justify-center text-center transition-colors">
                      <BookOpen className="w-6 h-6 text-purple-600 mb-2" />
                      <span className="text-xs font-bold text-slate-700">Assignments</span>
                   </button>
                   <button className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex flex-col items-center justify-center text-center transition-colors">
                      <Calendar className="w-6 h-6 text-orange-600 mb-2" />
                      <span className="text-xs font-bold text-slate-700">Apply Leave</span>
                   </button>
                </div>
             </div>

             <div className="bg-indigo-900 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-bold mb-2">Notice Board</h3>
                <div className="bg-white/10 rounded-lg p-3 text-sm mb-2">
                   <p className="font-bold text-yellow-400 mb-1">Staff Meeting</p>
                   <p className="text-indigo-100">Tomorrow at 4:00 PM in the Conference Hall. Topic: Annual Day Prep.</p>
                </div>
             </div>
          </div>
       </div>
    </DashboardLayout>
  );
};

// --- 4. Student Dashboard ---

export const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('learning');
  
  const menuItems = [
    { id: 'learning', label: 'My Learning', icon: <GraduationCap size={20} /> },
    { id: 'assignments', label: 'Assignments', icon: <FileText size={20} /> },
    { id: 'timetable', label: 'Timetable', icon: <Calendar size={20} /> },
    { id: 'results', label: 'Exam Results', icon: <Activity size={20} /> },
    { id: 'fees', label: 'Fee Status', icon: <CreditCard size={20} /> },
  ];

  return (
    <DashboardLayout title="Student Portal" role="Rohan Das (Class 10-A)" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-gradient-to-r from-brand-600 to-brand-500 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Upcoming Exam</h3>
                <p className="text-brand-100 mb-6 text-lg">Physics Mid-Term Examination</p>
                <div className="flex gap-4">
                   <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-center min-w-[80px]">
                      <span className="block text-2xl font-bold">02</span>
                      <span className="text-xs uppercase">Days</span>
                   </div>
                   <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-center min-w-[80px]">
                      <span className="block text-2xl font-bold">14</span>
                      <span className="text-xs uppercase">Hours</span>
                   </div>
                </div>
                <button className="mt-6 bg-white text-brand-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-brand-50 transition-colors">
                   Start Revision
                </button>
             </div>
             <BookOpen className="absolute right-0 bottom-0 text-brand-700 opacity-50 w-48 h-48 -mr-10 -mb-10" />
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
             <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Attendance</h3>
                <p className="text-slate-500 text-sm">October 2024</p>
             </div>
             <div className="flex items-center justify-center py-6">
                <div className="relative w-32 h-32 flex items-center justify-center">
                   <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path className="text-green-500" strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                   </svg>
                   <span className="absolute text-3xl font-bold text-slate-900">92%</span>
                </div>
             </div>
             <div className="text-center text-sm font-medium text-slate-600 bg-slate-50 py-2 rounded-lg">
                You are doing great!
             </div>
          </div>
       </div>

       <div className="grid md:grid-cols-2 gap-8">
          <div>
             <h3 className="font-bold text-slate-900 text-lg mb-4">Pending Assignments</h3>
             <div className="space-y-4">
                {[
                   { subject: 'Physics', title: 'Thermodynamics Project', due: 'Tomorrow', color: 'orange' },
                   { subject: 'English', title: 'Essay on Climate Change', due: 'Oct 28', color: 'blue' },
                   { subject: 'Math', title: 'Quadratic Equations Worksheet', due: 'Oct 30', color: 'purple' },
                ].map((task, i) => (
                   <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center hover:shadow-md transition-shadow">
                      <div>
                         <span className={`text-xs font-bold bg-${task.color}-100 text-${task.color}-700 px-2 py-1 rounded`}>{task.subject}</span>
                         <h4 className="font-bold text-slate-900 mt-2">{task.title}</h4>
                         <p className="text-xs text-red-500 font-bold mt-1">Due: {task.due}</p>
                      </div>
                      <button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 text-slate-600">
                         <FileText size={20} />
                      </button>
                   </div>
                ))}
             </div>
          </div>

          <div>
             <h3 className="font-bold text-slate-900 text-lg mb-4">Performance Trends</h3>
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-[300px] flex items-end justify-between px-4 pb-0">
                {[65, 78, 82, 75, 90].map((score, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="relative w-12 bg-blue-100 rounded-t-lg group-hover:bg-blue-500 transition-colors" style={{ height: `${score*2.5}px` }}>
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {score}%
                         </div>
                      </div>
                      <span className="text-xs font-bold text-slate-500 mt-2 mb-4">Test {i+1}</span>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </DashboardLayout>
  );
};

// --- 5. Parent Dashboard ---

export const ParentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('overview');
  
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'fees', label: 'Fee Payments', icon: <CreditCard size={20} /> },
    { id: 'report', label: 'Report Card', icon: <FileText size={20} /> },
    { id: 'messages', label: 'Communication', icon: <Bell size={20} /> },
  ];

  return (
    <DashboardLayout title="Parent Portal" role="Guardian of Rohan Das" menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab}>
       <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
             <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4 font-bold text-2xl border-4 border-white shadow-sm">R</div>
             <div>
                <h3 className="font-bold text-xl text-slate-900">Rohan Das</h3>
                <p className="text-sm text-slate-500">Class 10-A • Roll No. 24</p>
                <p className="text-xs text-green-600 font-bold mt-1">Status: Present Today</p>
             </div>
          </div>
          <div className="flex gap-3">
             <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">View Profile</button>
             <button className="px-4 py-2 bg-slate-100 text-brand-600 rounded-xl text-sm font-bold hover:bg-slate-200">Switch Child</button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-red-50">
                <div className="flex items-center text-red-700">
                   <AlertCircle className="w-5 h-5 mr-2" />
                   <h3 className="font-bold">Fee Due Alert</h3>
                </div>
                <span className="bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-100">Overdue</span>
             </div>
             <div className="p-8 text-center">
                <p className="text-sm text-slate-500 mb-1">Quarter 3 Tuition Fee</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">₹ 15,000</h2>
                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 shadow-lg flex items-center justify-center">
                   Pay Now Securely <CreditCard className="ml-2 w-5 h-5" />
                </button>
                <p className="text-xs text-slate-400 mt-4">Powered by Secure Payment Gateway</p>
             </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Recent Invoices</h3>
                <button className="text-blue-600 text-xs font-bold">View History</button>
             </div>
             <div className="flex-1 overflow-auto">
                <table className="w-full text-left">
                   <tbody className="divide-y divide-slate-100">
                      {[
                         { id: "INV-003", desc: "Q2 Tuition Fee", date: "Jul 15", amount: "15,000", status: "Paid" },
                         { id: "INV-002", desc: "Annual Charges", date: "Apr 10", amount: "8,500", status: "Paid" },
                         { id: "INV-001", desc: "Transport Fee (Q1)", date: "Apr 05", amount: "4,500", status: "Paid" },
                      ].map((inv, i) => (
                         <tr key={i} className="hover:bg-slate-50">
                            <td className="p-4">
                               <p className="font-bold text-slate-900 text-sm">{inv.desc}</p>
                               <p className="text-xs text-slate-500">{inv.date} • {inv.id}</p>
                            </td>
                            <td className="p-4 text-right">
                               <p className="font-bold text-slate-900 text-sm">₹ {inv.amount}</p>
                               <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">{inv.status}</span>
                            </td>
                            <td className="p-4 text-right">
                               <button className="p-2 text-slate-400 hover:text-blue-600"><Download size={16} /></button>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
       </div>

       <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="font-bold text-slate-900 mb-4">School Circulars</h3>
          <div className="grid md:grid-cols-2 gap-4">
             <div className="border border-slate-100 rounded-xl p-4 flex gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg h-fit"><FileText size={20} /></div>
                <div>
                   <h4 className="font-bold text-slate-900 text-sm">Winter Uniform Schedule</h4>
                   <p className="text-xs text-slate-500 mt-1 line-clamp-2">Dear Parents, starting from Nov 1st, all students are required to wear the winter uniform...</p>
                   <span className="text-[10px] text-slate-400 mt-2 block">Yesterday, 10:00 AM</span>
                </div>
             </div>
             <div className="border border-slate-100 rounded-xl p-4 flex gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg h-fit"><Calendar size={20} /></div>
                <div>
                   <h4 className="font-bold text-slate-900 text-sm">Diwali Break Announced</h4>
                   <p className="text-xs text-slate-500 mt-1 line-clamp-2">The school will remain closed from Oct 31st to Nov 4th on account of Diwali.</p>
                   <span className="text-[10px] text-slate-400 mt-2 block">Oct 24, 2024</span>
                </div>
             </div>
          </div>
       </div>
    </DashboardLayout>
  );
};