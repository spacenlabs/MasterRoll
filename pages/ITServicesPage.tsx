import React from 'react';
import { Code, Database, Smartphone, Zap, Shield, Globe, CheckCircle2, CreditCard, ArrowRight } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const ITServicesPage: React.FC = () => {
  const { navigate } = useNavigation();

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Custom Website Development',
      description: 'Fully responsive, SEO-optimized, and visually stunning websites tailored to your brand.'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Enterprise ERP Solutions',
      description: 'Comprehensive ERP systems to streamline operations, HR, finance, and inventory.'
    },
    {
      icon: <Code className="w-8 h-8 text-emerald-500" />,
      title: 'Custom Software Development',
      description: 'Bespoke software built from scratch to solve your unique business challenges.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'SaaS Architecture',
      description: 'Scalable cloud architectures and microservices for high-performance applications.'
    },
    {
      icon: <Shield className="w-8 h-8 text-rose-500" />,
      title: 'IT Security & Maintenance',
      description: 'Ongoing support, security audits, and infrastructure maintenance.'
    }
  ];

  const handlePurchase = async (plan: string) => {
    const isLoaded = await loadRazorpay();
    
    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      // NOTE: Enter your actual Key ID here from Razorpay Dashboard
      key: "rzp_live_TMZhjI3uGpOk6f", 
      amount: "9999900", // Amount is in currency subunits (99,999 * 100 paise)
      currency: "INR",
      name: "MasterRoll IT Solutions",
      description: plan,
      image: "https://example.com/your_logo", // Optional logo
      handler: function (response: any) {
        alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Valued Client",
        email: "client@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "MasterRoll Corporate Office"
      },
      theme: {
        color: "#14b8a6" // Your brand color
      }
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.on('payment.failed', function (response: any) {
      alert("Payment Failed: " + response.error.description);
    });
    paymentObject.open();
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-indigo-900 opacity-90"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-sm font-bold tracking-widest uppercase mb-6">
            MasterRoll IT Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">Digital Empire</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            From stunning custom websites to robust enterprise ERP systems, we deliver fully customized, scalable, and secure IT solutions tailored to your specific business needs.
          </p>
          <button 
            onClick={() => handlePurchase('Custom Consultation')}
            className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] flex items-center mx-auto"
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Everything You Need</h2>
          <p className="text-slate-500 mt-4 text-lg">Fully customized. Expertly engineered. Beautifully designed.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages / Payment Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">The 10-Year Master Plan</h2>
            <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">Stop paying endless monthly subscriptions. Get complete peace of mind for a decade with our all-inclusive, one-time investment.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold tracking-widest uppercase mb-6">
                  Unbeatable Value
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                  Everything You Need. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">Zero Recurring Fees.</span>
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Get a fully customized Website, Software, Mobile App, and ERP system with 10 years of validity. No server fee hikes, no maintenance retainers, just pure business growth.
                </p>
                
                <div className="flex items-end gap-4 mb-8">
                  <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">₹99,999</span>
                  <span className="text-slate-400 mb-2 font-medium">/ one-time</span>
                </div>

                <button 
                  onClick={() => handlePurchase('10-Year Master Subscription (₹99,999)')}
                  className="w-full sm:w-auto bg-brand-500 hover:bg-brand-400 text-slate-950 font-black px-8 py-4 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(20,184,166,0.4)] flex items-center justify-center uppercase tracking-wider"
                >
                  <CreditCard className="w-5 h-5 mr-3" /> Buy Now
                </button>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-b border-slate-700 pb-4">The MasterRoll Advantage</h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Traditional Agency (10 Years)</span>
                      <span className="text-rose-400 font-bold">₹12,00,000+</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2">
                      <div className="bg-rose-500 h-2 rounded-full w-full"></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-right">Monthly retainers, domain renewals, server hikes</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white font-bold">MasterRoll 10-Year Plan</span>
                      <span className="text-brand-400 font-bold">₹99,999</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2">
                      <div className="bg-brand-500 h-2 rounded-full w-[8%]"></div>
                    </div>
                    <p className="text-xs text-brand-200 mt-2 text-right opacity-80">One payment. Decades of peace.</p>
                  </div>
                </div>

                <ul className="mt-8 space-y-3 pt-6 border-t border-slate-700">
                  {[
                    'Fully Custom Website & Mobile App',
                    'Enterprise-Grade ERP System',
                    '10 Years Domain & Hosting Included',
                    '10 Years SSL & Security Maintenance',
                    'Zero Hidden Fees or Surprise Bills'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-brand-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-200 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;

