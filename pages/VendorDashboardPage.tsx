import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutDashboard, ShoppingBag, Package, MessageSquare, 
  Settings, LogOut, TrendingUp, Plus, Search, 
  MoreVertical, Filter, ArrowRight, Send, CheckCircle2,
  User
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

type Tab = 'overview' | 'listings' | 'orders' | 'support';

const VendorDashboardPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  
  // Chat State
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'support', text: 'Hello! Welcome to the MasterRoll Vendor Support. How can we assist you today?', time: '10:00 AM' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, { id: Date.now(), sender: 'me', text: chatInput, time: 'Now' }]);
    setChatInput('');
    
    // Auto-reply simulation
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'support', 
        text: 'Thanks for reaching out. A support agent will review your query and reply shortly.', 
        time: 'Now' 
      }]);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);


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
          <div className="h-[calc(100vh-200px)] flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">MasterRoll Support</h3>
                  <p className="text-xs text-green-600 flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Online</p>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-500">
                <MoreVertical size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
               {chatMessages.map((msg) => (
                 <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                   <div className={`max-w-[70%] p-4 rounded-2xl ${
                     msg.sender === 'me' 
                     ? 'bg-blue-600 text-white rounded-br-none' 
                     : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                   }`}>
                     <p className="text-sm">{msg.text}</p>
                     <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-blue-100' : 'text-slate-400'}`}>{msg.time}</p>
                   </div>
                 </div>
               ))}
               <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-100 bg-white flex gap-2">
              <input 
                type="text" 
                value={chatInput} 
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                disabled={!chatInput.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors"
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
      <aside className="w-64 bg-slate-900 text-white hidden lg:flex flex-col fixed h-full top-0 pt-20 z-10 left-0">
        <div className="px-6 py-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">Atlas Stationery</h2>
          <p className="text-xs text-slate-400 mt-1">Vendor ID: VND-889</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <LayoutDashboard size={20} className="mr-3" />
            Dashboard
          </button>
          <button 
             onClick={() => setActiveTab('listings')}
             className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'listings' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <Package size={20} className="mr-3" />
            My Products
          </button>
          <button 
             onClick={() => setActiveTab('orders')}
             className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'orders' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <ShoppingBag size={20} className="mr-3" />
            Orders
          </button>
          <button 
             onClick={() => setActiveTab('support')}
             className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeTab === 'support' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <MessageSquare size={20} className="mr-3" />
            Support Chat
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800 pb-24">
          <button onClick={() => navigate('vendor-marketplace')} className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-slate-800 rounded-xl transition-all">
            <LogOut size={20} className="mr-3" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-24 lg:pt-8">
        {/* Mobile Header Toggle (Simplified) */}
        <div className="lg:hidden mb-6 flex justify-between items-center">
           <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
           <div className="flex gap-2">
             <button onClick={() => setActiveTab('overview')} className="p-2 bg-white rounded-lg border border-slate-200"><LayoutDashboard size={20} /></button>
             <button onClick={() => setActiveTab('support')} className="p-2 bg-white rounded-lg border border-slate-200"><MessageSquare size={20} /></button>
           </div>
        </div>

        {renderContent()}
      </main>
    </div>
  );
};

export default VendorDashboardPage;