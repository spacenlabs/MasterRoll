import React from 'react';
import { 
  Bus, Navigation, ShieldCheck, Map, Bell, Video, 
  Fuel, User, AlertCircle, Smartphone, Radio, LocateFixed,
  Calendar, CheckCircle2
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

const TransportSecurityPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Bus size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4 mr-2" />
            Student Safety First
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Smart <span className="text-yellow-500">Transport & Security</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Real-time GPS tracking, RFID attendance, and automated parent alerts. Ensure every student's journey is safe, tracked, and efficient.
          </p>
          <button onClick={() => navigate('demo')} className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-yellow-500/25">
            Book a Transport Demo
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
               <Navigation className="w-7 h-7 text-blue-600 group-hover:text-white" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Live GPS Tracking</h3>
             <p className="text-slate-600 leading-relaxed">
               Track school buses in real-time on a map interface. Admins and parents can see exactly where the bus is at any moment.
             </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
               <Radio className="w-7 h-7 text-purple-600 group-hover:text-white" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">RFID Attendance</h3>
             <p className="text-slate-600 leading-relaxed">
               Automated attendance when students tap their ID cards upon boarding and deboarding. Zero manual errors.
             </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
               <Bell className="w-7 h-7 text-green-600 group-hover:text-white" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Alerts</h3>
             <p className="text-slate-600 leading-relaxed">
               SMS and App notifications sent to parents for bus delays, route deviations, and arrival at pickup/drop points.
             </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
               <Video className="w-7 h-7 text-red-600 group-hover:text-white" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">CCTV Integration</h3>
             <p className="text-slate-600 leading-relaxed">
               Live stream from inside the bus to monitor driver behavior and student safety. Cloud storage for incident review.
             </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
               <Fuel className="w-7 h-7 text-orange-600 group-hover:text-white" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Fleet Management</h3>
             <p className="text-slate-600 leading-relaxed">
               Monitor fuel consumption, schedule maintenance checks, and manage insurance renewals from a single dashboard.
             </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
               <Map className="w-7 h-7 text-teal-600 group-hover:text-white" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Route Optimization</h3>
             <p className="text-slate-600 leading-relaxed">
               AI-powered route planning to minimize travel time and fuel costs. Adjust routes dynamically based on traffic.
             </p>
          </div>
        </div>

        {/* Visual Showcase Section */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden mb-20">
          <div className="grid lg:grid-cols-2">
             <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide mb-6 self-start">
                   Parent App Preview
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Peace of Mind for Parents</h2>
                <ul className="space-y-6">
                   <li className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                         <LocateFixed className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                         <strong className="block text-slate-900">Real-time Map View</strong>
                         <p className="text-slate-500 text-sm">Watch the bus move live on the map.</p>
                      </div>
                   </li>
                   <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                         <AlertCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                         <strong className="block text-slate-900">ETA Notifications</strong>
                         <p className="text-slate-500 text-sm">"Bus is 5 mins away" alerts.</p>
                      </div>
                   </li>
                   <li className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                         <User className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                         <strong className="block text-slate-900">Driver Details</strong>
                         <p className="text-slate-500 text-sm">Photo, Name, and Phone number access.</p>
                      </div>
                   </li>
                </ul>
             </div>
             <div className="bg-slate-100 relative h-96 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=800" 
                  alt="School Bus Map Tracking" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30"></div>
                
                {/* Floating Map UI Card */}
                <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-2xl border border-slate-200 max-w-xs animate-pulse hidden md:block">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                         <Bus className="text-slate-900 w-5 h-5" />
                      </div>
                      <div>
                         <p className="font-bold text-slate-900 text-sm">School Bus #12</p>
                         <p className="text-xs text-green-600 font-bold">Moving • 45 km/h</p>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full w-3/4 bg-blue-500"></div>
                      </div>
                      <div className="flex justify-between text-xs text-slate-500">
                         <span>School</span>
                         <span>Home (10 min)</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Secure Your Campus Today</h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Join 500+ schools that trust MasterRoll for their transport and security needs. Get a customized implementation plan.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button onClick={() => navigate('demo')} className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                    Schedule Consultation
                 </button>
                 <button onClick={() => navigate('pricing')} className="border border-slate-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                    View Pricing
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default TransportSecurityPage;