
import React from 'react';
import { CheckCircle2, X } from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

const PricingPage: React.FC = () => {
  const { navigate } = useNavigation();

  const plans = [
    {
      name: "Basic",
      price: "₹0",
      period: "/month",
      desc: "Essential tools for small coaching centers.",
      features: [
        "Fee Collection (Online Only)",
        "Student Database (Up to 50)",
        "Basic Attendance",
        "Parent Communication App"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonClass: "bg-slate-100 text-slate-700 hover:bg-slate-200"
    },
    {
      name: "Pro",
      price: "₹4,999",
      period: "/year",
      desc: "Complete ERP for growing schools.",
      popular: true,
      features: [
        "Fee Collection (Online + Offline)",
        "Unlimited Students",
        "Teacher & Staff Hiring Portal",
        "Library Management",
        "Transport Tracking",
        "Exam & Report Cards"
      ],
      buttonText: "Get Started",
      buttonClass: "bg-brand-600 text-white hover:bg-brand-700"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large institutions and universities.",
      popular: false,
      features: [
        "Everything in Pro",
        "Multi-branch Management",
        "White-label Android/iOS App",
        "Dedicated Server",
        "Vendor Marketplace API",
        "24/7 Priority Support"
      ],
      buttonText: "Contact Sales",
      buttonClass: "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Simple, Transparent <span className="text-brand-500">Pricing</span>
        </h1>
        <p className="text-xl text-slate-600 mb-20 max-w-2xl mx-auto font-medium">
          Choose the plan that fits your institution's needs. No hidden fees.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-white rounded-[2rem] shadow-xl border-2 transition-all duration-300 flex flex-col p-10 ${
                plan.popular 
                ? 'border-brand-500 ring-4 ring-brand-500/10 transform scale-105 z-10' 
                : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-3">{plan.name}</h3>
                <p className="text-slate-500 text-base leading-relaxed h-12">{plan.desc}</p>
              </div>

              <div className="mb-10 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-bold text-lg">{plan.period}</span>
              </div>

              <button 
                onClick={() => navigate('demo')}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all mb-10 shadow-md ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>

              <div className="space-y-5 text-left flex-1 border-t border-slate-50 pt-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`mr-4 p-0.5 rounded-full border-2 ${plan.popular ? 'border-brand-500 text-brand-500' : 'border-blue-500 text-blue-500'}`}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CheckCircle2 size={200} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-2">Need a Enterprise solution?</h3>
                <p className="text-slate-400">Custom modules and dedicated support for large universities.</p>
              </div>
              <button 
                onClick={() => navigate('demo')}
                className="bg-brand-500 hover:bg-brand-400 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all whitespace-nowrap shadow-lg shadow-brand-500/30"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
