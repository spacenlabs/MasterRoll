import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutDashboard, ShoppingBag, Package, MessageSquare, 
  Settings, LogOut, TrendingUp, Plus, Search, 
  MoreVertical, Filter, ArrowRight, Send, CheckCircle2,
  User, Loader2
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';
import { generateAiResponse } from '../services/geminiService';

type Tab = 'overview' | 'listings' | 'orders' | 'support';

const VendorDashboardPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  
  // Chat State
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'support', text: 'Hello! Welcome to MasterRoll Vendor Support. I am your AI assistant. How can I help you manage your school supplies business today?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isAiThinking) return;
    
    const userMessageText = chatInput;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setChatMessages(prev => [...prev, { id: Date.now(), sender: 'me', text: userMessageText, time: timestamp }]);
    setChatInput('');
    setIsAiThinking(true);
    
    // Create context-aware prompt for Gemini
    const supportPrompt = `The following is a support request from a Vendor on MasterRoll (a school procurement and ERP platform).
    Vendor Question: "${userMessageText}"
    
    Instructions:
    - You are the 'MasterRoll Vendor Success Agent'.
    - Help the vendor with dashboard usage, listing products, or order fulfillment queries.
    - Be professional, empathetic, and concise.
    - If you don't know something specific about our internal policies, ask them to wait for a human agent.`;

    try {
      const aiResponse = await generateAiResponse(supportPrompt);
      setChatMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'support', 
        text: aiResponse, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'support', 
        text: "I'm having trouble connecting right now. Please try again or email support@masterroll.in", 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    } finally {
      setIsAiThinking(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isAiThinking]);


  // Mock Data
  const stats = [
    { title: "Total Revenue", value: "₹ 12,45,000", change: "+12.5%", positive: true, icon: <TrendingUp /> },
    { title: "Active Orders", value: "24", change: "+4", positive: true, icon: <ShoppingBag /> },
    { title: "Total Listings", value: "156", change: "-2", positive: false, icon: <Package /> },
    { title: "Avg. Rating", value: "4.8", change: "+0.1", positive: true, icon: <CheckCircle2 /> },
  ];

  const recentOrders = [
    { id: "ORD-2024-001", school: "Modern Public School", items: "20x Lab Kits", amount: "₹ 45,000", date: "Oct 24, 2024", status: "Shipped" },
    { id: "ORD-2024-002", school: "Delhi Heritage School", items: "500x Notebooks", amount: "₹ 12,500", date: "Oct 23, 2024", status: "Processing" },
    { id: "ORD-2024-003", school: "St. Xavier's High", items: "5x Smart Boards", amount: "₹ 3,75,000", date: "Oct 22, 2024", status: "Delivered" },
    { id: "ORD-2024-004", school: "Global Int. School", items: "100x Uniform Sets", amount: "₹ 85,000", date: "Oct 21, 2024", status: "Pending" },
  ];

  const listings = [
    { id: 1, name: "Physics Lab Kit (Standard)", price: "₹ 2,500", stock: 150, category: "Lab Equipment", status: "Active" },
    { id: 2, name: "Classmate Notebook A4", price: "₹ 45", stock: 5000, category: "Stationery", status: "Active" },
    { id: 3, name: "School Desk (Double Seater)", price: "₹ 4,500", stock: 45, category: "Furniture", status: "Low Stock" },
    { id: 4, name: "Smart Projector 4K", price: "₹ 35,000", stock: 12, category: "Electronics", status: "Active" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                      {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-slate-500 text-sm font-medium">{stat.title}</h3>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-lg text-slate-900">Recent Orders</h3>
                <button onClick={() => setActiveTab('orders')} className="text-blue-600 text-sm font-bold hover:text-blue-700">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Order ID</th>
                      <th className="px-6 py-4 font-semibold">School Name</th>
                      <th className="px-6 py-4 font-semibold">Items</th>
                      <th className="px-6 py-4 font-semibold">Amount</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentOrders.map((order, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-blue-600">{order.id}</td>
                        <td className="px-6 py-4 text-slate-900">{order.school}</td>
                        <td className="px-6 py-4 text-slate-600">{order.items}</td>
                        <td className="px-6 py-4 font-bold text-slate-900">{order.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                            order.status === 'Processing' ? 'bg-orange-100 text-orange-700' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'listings':
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-bold text-slate-900">My Products</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center shadow-lg shadow-blue-500/30">
                <Plus className="w-5 h-5 mr-2" /> Add New Product
              </button>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex gap-4">
                 <div className="relative flex-1">
                   <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                   <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
                 </div>
                 <button className="px-4 py-2 border border-slate-200 rounded-lg flex items-center text-slate-600 hover:bg-slate-50">
                   <Filter className="w-5 h-5 mr-2" /> Filter
                 </button>
              </div>
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Product Name</th>
                    <th className="px-6 py-4 font-semibold">Category</th>
                    <th className="px-6 py-4 font-semibold">Price</th>
                    <th className="px-6 py-4 font-semibold">Stock</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {listings.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                      <td className="px-6 py-4 text-slate-600">{item.category}</td>
                      <td className="px-6 py-4 font-bold text-slate-900">{item.price}</td>
                      <td className="px-6 py-4 text-slate-600">{item.stock} Units</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-blue-600 p-2">
                          <MoreVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Order History</h2>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
               <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                 <ShoppingBag className="w-8 h-8 text-slate-400" />
               </div>
               <p className="text-slate-500">Full order history functionality coming soon...</p>
               <button onClick={() => setActiveTab('overview')} className="mt-4 text-blue-600 font-bold hover:underline">Go back to Overview</button>
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="h-[calc(100vh-200px)] flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3 shadow-md">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">MasterRoll Vendor Support</h3>
                  <p className="text-xs text-green-600 flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span> Agent is Online</p>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50 custom-scrollbar">
               {chatMessages.map((msg) => (
                 <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-1 duration-200`}>
                   <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                     msg.sender === 'me' 
                     ? 'bg-blue-600 text-white rounded-br-none' 
                     : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                   }`}>
                     <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                     <p className={`text-[10px] mt-1.5 text-right font-medium ${msg.sender === 'me' ? 'text-blue-100' : 'text-slate-400'}`}>{msg.time}</p>
                   </div>
                 </div>
               ))}
               {isAiThinking && (
                 <div className="flex justify-start animate-in fade-in duration-200">
                    <div className="bg-white border border-slate-200 text-slate-500 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-3 shadow-sm">
                       <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                       <span className="text-xs font-medium">Agent is typing...</span>
                    </div>
                 </div>
               )}
               <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-100 bg-white flex gap-2">
              <input 
                type="text" 
                value={chatInput} 
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="How can we help with your listings or orders?" 
                className="flex-1 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                disabled={isAiThinking}
              />
              <button 
                type="submit"
                disabled={!chatInput.trim() || isAiThinking}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 transform active:scale-95"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden lg:flex flex-col fixed h-full top-0 pt-20 z-10 left-0 border-r border-slate-800">
        <div className="px-6 py-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">Atlas Stationery</h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Vendor ID: VND-889</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <LayoutDashboard size={20} className="mr-3" />
            Dashboard
          </button>
          <button 
             onClick={() => setActiveTab('listings')}
             className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'listings' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Package size={20} className="mr-3" />
            My Products
          </button>
          <button 
             onClick={() => setActiveTab('orders')}
             className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'orders' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <ShoppingBag size={20} className="mr-3" />
            Orders
          </button>
          <button 
             onClick={() => setActiveTab('support')}
             className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'support' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <MessageSquare size={20} className="mr-3" />
            Support Chat
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800 pb-24">
          <button onClick={() => navigate('vendor-marketplace')} className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-slate-800 rounded-xl transition-all">
            <LogOut size={20} className="mr-3" />
            Exit Dashboard
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-24 lg:pt-8">
        {/* Mobile Header Toggle (All 4 Tabs Supported) */}
        <div className="lg:hidden mb-6 flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4.5 rounded-[2rem] shadow-sm border border-slate-200">
           <div className="flex justify-between items-center w-full md:w-auto">
             <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">Vendor Portal</h1>
             <span className="text-[9px] font-black uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded md:hidden">VND-889</span>
           </div>
           <div className="flex gap-2 justify-around w-full md:w-auto border-t border-slate-100 pt-3.5 md:pt-0 md:border-t-0">
             <button 
               onClick={() => setActiveTab('overview')} 
               className={`flex-1 md:flex-initial p-3.5 rounded-xl border transition-all flex justify-center items-center gap-1.5 ${activeTab === 'overview' ? 'bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-500/20' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
               title="Dashboard Metrics"
             >
               <LayoutDashboard size={18} />
               <span className="text-[10px] font-black uppercase tracking-wider md:hidden">Stats</span>
             </button>
             <button 
               onClick={() => setActiveTab('listings')} 
               className={`flex-1 md:flex-initial p-3.5 rounded-xl border transition-all flex justify-center items-center gap-1.5 ${activeTab === 'listings' ? 'bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-500/20' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
               title="My Products"
             >
               <Package size={18} />
               <span className="text-[10px] font-black uppercase tracking-wider md:hidden">Items</span>
             </button>
             <button 
               onClick={() => setActiveTab('orders')} 
               className={`flex-1 md:flex-initial p-3.5 rounded-xl border transition-all flex justify-center items-center gap-1.5 ${activeTab === 'orders' ? 'bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-500/20' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
               title="Active Orders"
             >
               <ShoppingBag size={18} />
               <span className="text-[10px] font-black uppercase tracking-wider md:hidden">Orders</span>
             </button>
             <button 
               onClick={() => setActiveTab('support')} 
               className={`flex-1 md:flex-initial p-3.5 rounded-xl border transition-all flex justify-center items-center gap-1.5 ${activeTab === 'support' ? 'bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-500/20' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
               title="AI Helpdesk"
             >
               <MessageSquare size={18} />
               <span className="text-[10px] font-black uppercase tracking-wider md:hidden">Support</span>
             </button>
           </div>
        </div>

        {renderContent()}
      </main>
    </div>
  );
};

export default VendorDashboardPage;