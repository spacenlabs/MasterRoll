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
      notIncluded: ["Teacher Marketplace", "Inventory Management", "Custom Reports"],
      color: "blue"
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
      notIncluded: ["White-label App", "Dedicated Success Manager"],
      color: "brand"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large institutions and universities.",
      features: [
        "Everything in Pro",
        "Multi-branch Management",
        "White-label Android/iOS App",
        "Dedicated Server",
        "Vendor Marketplace API",
        "24/7 Priority Support"
      ],
      notIncluded: [],
      color: "indigo"
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Simple, Transparent <span className="text-brand-600">Pricing</span>
        </h1>
        <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
          Choose the plan that fits your institution's needs. No hidden fees.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative bg-white rounded-2xl shadow-xl border ${plan.popular ? 'border-brand-500 ring-2 ring-brand-500/20' : 'border-slate-200'} p-8 flex flex-col`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 mb-6 h-12">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-500">{plan.period}</span>
              </div>

              <button 
                onClick={() => navigate('demo')}
                className={`w-full py-3 rounded-xl font-bold transition-colors mb-8 ${
                  plan.popular 
                  ? 'bg-brand-600 text-white hover:bg-brand-700' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>

              <div className="space-y-4 text-left flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-brand-500' : 'text-blue-500'}`} />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-start opacity-50">
                    <X className="w-5 h-5 mr-3 text-slate-400 flex-shrink-0" />
                    <span className="text-slate-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Can I upgrade later?</h4>
              <p className="text-slate-600 text-sm">Yes, you can upgrade your plan at any time. Your billing will be adjusted on a pro-rata basis.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Is data secure?</h4>
              <p className="text-slate-600 text-sm">Absolutely. We use bank-grade encryption and daily backups to ensure your institution's data is always safe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
