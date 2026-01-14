
import React, { useState, useEffect } from 'react';
import { 
  Shield, Building2, User, Baby, Truck, GraduationCap, 
  ArrowRight, LogIn, Lock, Mail, Loader2, Key, Info, 
  Eye, EyeOff, Facebook, Linkedin, AlertCircle, Google
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';
import { loginUser } from '../services/formService';

type UserRole = 'super_admin' | 'org_admin' | 'teacher' | 'student' | 'parent' | 'vendor';

const LoginPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

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
      color: 'bg-teal-600 text-white',
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

  useEffect(() => {
    setEmail('');
    setPassword('');
    setError(null);
  }, [selectedRole]);

  const currentRole = roles.find(r => r.id === selectedRole);

  const handleAutoFill = () => {
    if (currentRole) {
      setEmail(currentRole.demoEmail);
      setPassword(currentRole.demoPass);
      setError(null);
    }
  };

  const handleSocialLogin = (platform: string) => {
    setIsLoading(true);
    // Real Supabase OAuth Redirect
    // NOTE: Replace 'ckylljygiladdvlokbbf' if your project ID changes.
    const supabaseUrl = 'https://ckylljygiladdvlokbbf.supabase.co';
    const redirectUrl = window.location.origin;
    
    // Construct the authorize URL
    const authUrl = `${supabaseUrl}/auth/v1/authorize?provider=${platform}&redirect_to=${encodeURIComponent(redirectUrl)}`;
    
    // Redirect the entire page
    window.location.href = authUrl;
  };

  const handleNavigationByRole = (role: string) => {
    const roleMap: Record<string, any> = {
      'super_admin': 'super-admin-dashboard',
      'org_admin': 'org-dashboard',
      'org': 'org-dashboard',
      'teacher': 'teacher-dashboard',
      'student': 'student-dashboard',
      'parent': 'parent-dashboard',
      'vendor': 'vendor-dashboard',
    };
    
    const target = roleMap[role] || 'home';
    navigate(target);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const result = await loginUser(email, password);
    setIsLoading(false);
    
    if (result.success && result.user) {
      handleNavigationByRole(result.user.role);
    } else {
      setError(result.error || "Authentication failed.");
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-6xl overflow-hidden flex flex-col lg:flex-row border border-slate-200">
        
        {/* Left Side: Role Selection */}
        <div className="lg:w-5/12 bg-slate-100 p-8 border-r border-slate-200 flex flex-col">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Who are you?</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id as UserRole)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center h-32 ${
                  selectedRole === role.id 
                    ? `border-slate-900 shadow-xl transform scale-105 ${role.color}` 
                    : 'border-white bg-white hover:border-slate-300 text-slate-600 hover:shadow-md'
                }`}
              >
                <div className={`${selectedRole === role.id ? 'text-white' : 'text-slate-500'}`}>
                   {role.icon}
                </div>
                <span className="font-bold text-sm tracking-tight">{role.title}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-auto bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 shadow-sm">
             <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-2 rounded-xl text-white">
                  <Key size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 mb-1">Quick Access</h4>
                   <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                     Don't have an account? Use the auto-fill button to explore the <strong>{currentRole?.title}</strong> demo environment.
                   </p>
                   <button 
                     onClick={handleAutoFill}
                     className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center shadow-lg"
                   >
                     Auto-fill Demo Credentials
                   </button>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="lg:w-7/12 p-10 lg:p-20 flex flex-col justify-center relative bg-white">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10">
               <div className="flex items-center gap-2 mb-6">
                  <div className="bg-brand-500 p-2 rounded-lg">
                    <Shield size={20} className="text-white" />
                  </div>
                  <span className="text-xl font-bold tracking-tighter">Master<span className="text-brand-600">Roll</span></span>
               </div>
               <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                 Sign In
               </h1>
               <p className="text-slate-500 mt-2 text-lg">Enter your details to access your <span className="font-bold text-brand-600">{currentRole?.title}</span> space.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-center animate-in slide-in-from-top-1">
                <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <button 
                type="button"
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
                className="w-full py-4 px-4 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all font-bold text-slate-700 shadow-sm hover:shadow-md disabled:opacity-70 group"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin text-slate-400" /> : <Google size={20} />}
                Continue with Google
              </button>

              <div className="relative flex items-center justify-center my-8">
                <div className="absolute inset-0 flex items-center">
                   <div className="w-full border-t border-slate-100"></div>
                </div>
                <span className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Or login with email</span>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" 
                    placeholder="e.g. name@masterroll.in"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                   <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Password</label>
                   <button type="button" className="text-xs font-bold text-brand-600 hover:text-brand-700">Forgot Password?</button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-4 rounded-2xl border-2 border-slate-100 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" 
                    placeholder="Your secret passphrase"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full py-4 rounded-2xl text-white font-bold transition-all shadow-2xl flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] duration-200 ${currentRole?.color || 'bg-slate-900'}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-3 h-5 w-5" />
                    Checking Credentials...
                  </>
                ) : (
                  <>
                    Log In to Dashboard <ArrowRight className="ml-3 h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-10">
               <div className="relative flex items-center justify-center mb-8">
                  <div className="absolute inset-0 flex items-center">
                     <div className="w-full border-t border-slate-100"></div>
                  </div>
                  <span className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Other Social Sign-in</span>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleSocialLogin('facebook')}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors font-bold text-slate-600 text-sm"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" /> Facebook
                  </button>
                  <button 
                    onClick={() => handleSocialLogin('linkedin')}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors font-bold text-slate-600 text-sm"
                  >
                    <Linkedin className="w-4 h-4 text-blue-700" /> LinkedIn
                  </button>
               </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
               <p className="text-slate-500 text-sm font-medium">
                  Don't have a MasterRoll account? 
                  <button onClick={(e) => {e.preventDefault(); navigate('signup')}} className="ml-2 text-brand-600 font-bold hover:underline">Create one for free</button>
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
