import React from 'react';
import { 
  BarChart3, PieChart, LineChart, Activity, TrendingUp, 
  TrendingDown, Download, Layers, Users, CreditCard, 
  FileBarChart, ArrowRight, BrainCircuit, CheckCircle2
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

const AnalyticsSuitePage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Activity size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Business Intelligence for Education
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Turn Data into <span className="text-purple-400">Decisions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Stop guessing. Visualize financial health, academic trends, and operational efficiency with our enterprise-grade analytics suite.
          </p>
          <button onClick={() => navigate('demo')} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-purple-500/25">
            Request Analytics Demo
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mock Dashboard Visual */}
        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden mb-20 transform hover:-translate-y-1 transition-transform duration-500">
           <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-4">
              <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">MasterRoll Admin Dashboard</div>
           </div>
           
           <div className="p-8 lg:p-12">
              {/* Stats Row */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                 <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-slate-500 text-sm font-medium mb-1">Total Revenue (YTD)</p>
                    <h3 className="text-2xl font-bold text-slate-900">₹ 2.45 Cr</h3>
                    <div className="flex items-center text-green-600 text-xs mt-2 font-bold">
                       <TrendingUp className="w-3 h-3 mr-1" /> +12% vs last year
                    </div>
                 </div>
                 <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-slate-500 text-sm font-medium mb-1">Fee Collection Rate</p>
                    <h3 className="text-2xl font-bold text-slate-900">88.5%</h3>
                    <div className="flex items-center text-red-500 text-xs mt-2 font-bold">
                       <TrendingDown className="w-3 h-3 mr-1" /> 2% Pending
                    </div>
                 </div>
                 <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-slate-500 text-sm font-medium mb-1">Student Attendance</p>
                    <h3 className="text-2xl font-bold text-slate-900">94.2%</h3>
                    <div className="flex items-center text-green-600 text-xs mt-2 font-bold">
                       <TrendingUp className="w-3 h-3 mr-1" /> Consistent
                    </div>
                 </div>
                 <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-slate-500 text-sm font-medium mb-1">Admission Leads</p>
                    <h3 className="text-2xl font-bold text-slate-900">1,240</h3>
                    <div className="flex items-center text-green-600 text-xs mt-2 font-bold">
                       <TrendingUp className="w-3 h-3 mr-1" /> +145 this month
                    </div>
                 </div>
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                       <h4 className="font-bold text-slate-800">Revenue Flow</h4>
                       <select className="bg-slate-50 border border-slate-200 rounded-lg text-xs px-2 py-1 outline-none">
                          <option>This Year</option>
                       </select>
                    </div>
                    {/* Mock Bar Chart */}
                    <div className="h-64 flex items-end justify-between gap-2 px-2">
                       {[40, 60, 45, 70, 50, 65, 80, 55, 90, 75, 85, 95].map((h, i) => (
                          <div key={i} className="w-full bg-purple-100 hover:bg-purple-500 rounded-t-lg transition-colors relative group" style={{ height: `${h}%` }}>
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {h}%
                             </div>
                          </div>
                       ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-400">
                       <span>Jan</span><span>Dec</span>
                    </div>
                 </div>

                 <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col">
                    <h4 className="font-bold text-slate-800 mb-6">Expense Breakdown</h4>
                    {/* Mock Pie Chart Visualization */}
                    <div className="flex-1 flex items-center justify-center relative">
                       <div className="w-40 h-40 rounded-full border-[16px] border-orange-100 border-l-orange-500 border-t-purple-500 border-r-blue-500 transform rotate-45"></div>
                       <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-700">Total</div>
                    </div>
                    <div className="space-y-3 mt-6">
                       <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center text-slate-600"><div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div> Salaries</span>
                          <span className="font-bold">45%</span>
                       </div>
                       <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center text-slate-600"><div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div> Infrastructure</span>
                          <span className="font-bold">30%</span>
                       </div>
                       <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center text-slate-600"><div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div> Logistics</span>
                          <span className="font-bold">25%</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Feature Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Financial */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all">
             <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
               <CreditCard className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Health</h3>
             <ul className="space-y-3 text-slate-600">
                <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Real-time Fee Collection Status</li>
                <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Defaulter Aging Reports</li>
                <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Cash Flow Forecasting</li>
             </ul>
          </div>

          {/* Academic */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
               <BrainCircuit className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Academic Intelligence</h3>
             <ul className="space-y-3 text-slate-600">
                <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5" /> Subject-wise Class Performance</li>
                <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5" /> Weak Student Identification</li>
                <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5" /> Exam Trend Analysis</li>
             </ul>
          </div>

          {/* Operational */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all">
             <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
               <Layers className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Operational Metrics</h3>
             <ul className="space-y-3 text-slate-600">
                <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5" /> Teacher Attendance & Efficiency</li>
                <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5" /> Transport Route Utilization</li>
                <li className="flex items-start text-sm"><CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 mt-0.5" /> Inventory Turnover Rates</li>
             </ul>
          </div>

        </div>

        {/* Custom Reports Section */}
        <div className="bg-slate-100 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12 border border-slate-200">
           <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Report Builder</h2>
              <p className="text-slate-600 text-lg mb-8">
                Don't see the metric you need? Use our drag-and-drop report builder to create custom views and export them instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium">
                    <FileBarChart className="w-4 h-4 mr-2 text-slate-500" /> PDF Export
                 </div>
                 <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium">
                    <FileBarChart className="w-4 h-4 mr-2 text-slate-500" /> Excel / CSV
                 </div>
                 <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium">
                    <Download className="w-4 h-4 mr-2 text-slate-500" /> Scheduled Email Reports
                 </div>
              </div>
           </div>
           <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                 <span className="font-bold text-slate-800">New Report</span>
                 <ArrowRight className="text-slate-400 w-5 h-5" />
              </div>
              <div className="space-y-3">
                 <div className="h-10 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-xs text-slate-400">Drag Metric Here</div>
                 <div className="h-10 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-xs text-slate-400">Drag Dimension Here</div>
                 <div className="h-10 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-xs text-slate-400">Drag Filter Here</div>
              </div>
              <button className="w-full mt-6 bg-slate-900 text-white py-3 rounded-xl font-bold text-sm">Generate Report</button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AnalyticsSuitePage;