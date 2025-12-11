import React, { useState, useEffect } from 'react';
import { 
  Shield, Building2, User, Baby, Truck, GraduationCap, 
  ArrowRight, LogIn, Lock, Mail, Loader2, Key, Info
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

type UserRole = 'super_admin' | 'org_admin' | 'teacher' | 'student' | 'parent' | 'vendor';

const LoginPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const roles = [
    { 
      id: 'super_admin', 
      title: 'Super Admin', 
      icon: <Shield size={24} />, 
      color: 'bg-slate-900 text-white',
      demoEmail: 'admin@masterroll.in',
      demoPass: 'masterroll2024' 
    },
    { 
      id: 'org_admin', 
      title: 'Organization', 
      icon: <Building2 size={24} />, 
      color: 'bg-blue-600 text-white',
      demoEmail: 'principal@modernacademy.edu',
      demoPass: 'school123'
    },
    { 
      id: 'teacher', 
      title: 'Teacher', 
      icon: <User size={24} />, 
      color: 'bg-green-600 text-white',
      demoEmail: 'amit.physics@school.com',
      demoPass: 'teach456'
    },
    { 
      id: 'student', 
      title: 'Student', 
      icon: <GraduationCap size={24} />, 
      color: 'bg-orange-500 text-white',
      demoEmail: 'rohan.class10@student.com',
      demoPass: 'learn789'
    },
    { 
      id: 'parent', 
      title: 'Parent', 
      icon: <Baby size={24} />, 
      color: 'bg-purple-600 text-white',
      demoEmail: 'mr.sharma@parent.com',
      demoPass: 'parent321'
    },
    { 
      id: 'vendor', 
      title: 'Supplier', 
      icon: <Truck size={24} />, 
      color: 'bg-indigo-600 text-white',
      demoEmail: 'sales@atlasstationery.com',
      demoPass: 'vendor555'
    },
  ];

  // Update form when role changes
  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [selectedRole]);

  const currentRole = roles.find(r => r.id === selectedRole);

  const handleAutoFill = () => {
    if (currentRole) {
      setEmail(currentRole.demoEmail);
      setPassword(currentRole.demoPass);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API Login Delay
    setTimeout(() => {
      setIsLoading(false);
      
      switch (selectedRole) {
        case 'super_admin':
          navigate('super-admin-dashboard');
          break;
        case 'org_admin':
          navigate('org-dashboard');
          break;
        case 'teacher':
          navigate('teacher-dashboard');
          break;
        case 'student':
          navigate('student-dashboard');
          break;
        case 'parent':
          navigate('parent-dashboard');
          break;
        case 'vendor':
          navigate('vendor-dashboard');
          break;
        default:
          navigate('home');
      }
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-6xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
        
        {/* Left Side: Role Selection */}
        <div className="md:w-5/12 bg-slate-100 p-8 border-r border-slate-200 flex flex-col">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Select User Type</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id as UserRole)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center gap-3 text-center h-32 ${
                  selectedRole === role.id 
                    ? `border-slate-900 shadow-lg transform scale-105 ${role.color}` 
                    : 'border-white bg-white hover:border-slate-300 text-slate-600 hover:shadow-sm'
                }`}
              >
                <div className={`${selectedRole === role.id ? 'text-white' : 'text-slate-500'}`}>
                   {role.icon}
                </div>
                <span className="font-bold text-sm">{role.title}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-auto bg-blue-50 p-6 rounded-2xl border border-blue-100">
             <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                   <h4 className="font-bold text-blue-900 mb-1">Demo Credentials</h4>
                   <p className="text-sm text-blue-700 mb-3">Use these to access the {currentRole?.title} dashboard:</p>
                   <div className="bg-white p-3 rounded-lg border border-blue-200 text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Email:</span>
                        <span className="font-mono font-bold text-slate-700">{currentRole?.demoEmail}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Pass:</span>
                        <span className="font-mono font-bold text-slate-700">{currentRole?.demoPass}</span>
                      </div>
                   </div>
                   <button 
                     onClick={handleAutoFill}
                     className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 rounded-lg transition-colors flex items-center justify-center"
                   >
                     <Key className="w-4 h-4 mr-2" /> Auto-fill Credentials
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-7/12 p-10 md:p-16 flex flex-col justify-center relative bg-white">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8">
               <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide mb-4">
                 Secure Access
               </div>
               <h1 className="text-4xl font-extrabold text-slate-900">
                 Welcome Back
               </h1>
               <p className="text-slate-500 mt-2 text-lg">Login as <span className="font-bold text-brand-600">{currentRole?.title}</span></p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email ID / Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white" 
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white" 
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex justify-end mt-2">
                  <a href="#" className="text-sm font-medium text-brand-600 hover:text-brand-700">Forgot Password?</a>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95 duration-200"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Accessing Dashboard...
                  </>
                ) : (
                  <>
                    Login Securely <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-10 pt-8 border-t border-slate-100 text-center text-sm text-slate-500">
               New to MasterRoll? <a href="#" onClick={(e) => {e.preventDefault(); navigate('demo')}} className="text-brand-600 font-bold hover:underline">Register your Institution</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;