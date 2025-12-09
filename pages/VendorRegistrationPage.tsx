import React, { useState } from 'react';
import { 
  Building2, User, Phone, MapPin, Briefcase, FileText, 
  UploadCloud, CheckCircle2, Loader2, ArrowRight, Truck 
} from '../components/Icons';
import { useNavigation } from '../contexts/NavigationContext';

const VendorRegistrationPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    merchantName: '',
    contactPerson: '',
    designation: '',
    phone: '',
    email: '',
    gst: '',
    address: '',
    turnover: '',
    schoolCount: '',
    primaryCategory: '',
    website: '',
  });

  const categories = [
    "Books & Publications",
    "Stationery Supplies",
    "Photocopier & Printers",
    "School Furniture",
    "Computers & Electronics",
    "Laboratory Equipment",
    "School Uniforms",
    "Educational Kits & Toys",
    "Sports Equipment",
    "Training & Workshops",
    "Security Systems (CCTV)",
    "Transport Vehicles",
    "Cafeteria Supplies",
    "Software Solutions"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-28 pb-20 bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl text-center border border-slate-200">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Registration Successful!</h2>
          <p className="text-slate-600 mb-8 text-lg">
            Thank you for registering with MasterRoll. Your application ID is <span className="font-mono font-bold text-slate-900">#MR-VND-2024-889</span>. 
            Our procurement team will verify your GST and documents within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigate('home')} className="px-8 py-3 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
              Return to Home
            </button>
            <button onClick={() => navigate('vendor-dashboard')} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
              Go to Vendor Dashboard (Demo)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Vendor Partner Program
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Grow Your B2B Sales</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Join India's largest school procurement network. Connect directly with 500+ verified institutions and streamline your bulk orders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sidebar - Benefits */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Why Partner with Us?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">National Reach</h4>
                      <p className="text-blue-100 text-sm mt-1">Access schools across tier-1, tier-2, and tier-3 cities instantly.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Guaranteed Payments</h4>
                      <p className="text-blue-100 text-sm mt-1">Our escrow system ensures you get paid on time, every time.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Digital Invoicing</h4>
                      <p className="text-blue-100 text-sm mt-1">Automated POs and GST-compliant invoicing workflows.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <Building2 size={200} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Need Help?</h4>
              <p className="text-slate-500 text-sm mb-4">Contact our vendor onboarding team.</p>
              <div className="flex items-center text-slate-700 font-medium">
                <Phone className="w-4 h-4 mr-2" />
                +91 7979078400
              </div>
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                Supplier Registration Form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Business Identity Section */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                    Business Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Merchant / Business Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="merchantName"
                        required
                        placeholder="e.g. Atlas Stationery Pvt Ltd"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">GSTIN Number <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="gst"
                        required
                        placeholder="22AAAAA0000A1Z5"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all uppercase"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Website</label>
                      <input 
                        type="url" 
                        name="website"
                        placeholder="https://..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-600" />
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Contact Person Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="contactPerson"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Designation</label>
                      <input 
                        type="text" 
                        name="designation"
                        placeholder="e.g. Sales Manager"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="+91"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Official Email <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="sales@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Registered Office Address <span className="text-red-500">*</span></label>
                      <textarea 
                        rows={3}
                        name="address"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Business Metrics */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                    Business Profile
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Annual Turnover <span className="text-red-500">*</span></label>
                      <select 
                        name="turnover"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                        onChange={handleChange}
                      >
                        <option value="">Select Turnover Range</option>
                        <option value="<10L">Less than ₹10 Lakhs</option>
                        <option value="10L-50L">₹10 Lakhs - ₹50 Lakhs</option>
                        <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                        <option value="1Cr-5Cr">₹1 Crore - ₹5 Crores</option>
                        <option value=">5Cr">More than ₹5 Crores</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Schools Currently Dealing With <span className="text-red-500">*</span></label>
                      <input 
                        type="number" 
                        name="schoolCount"
                        required
                        min="0"
                        placeholder="e.g. 15"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Primary Product Category <span className="text-red-500">*</span></label>
                      <select 
                        name="primaryCategory"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                        onChange={handleChange}
                      >
                        <option value="">Select Primary Category</option>
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Document Upload Simulation */}
                <div>
                   <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <UploadCloud className="w-5 h-5 mr-2 text-blue-600" />
                    Verification Documents
                  </h3>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-slate-700 font-medium">Upload Company Profile & GST Certificate</p>
                    <p className="text-slate-500 text-sm mt-1">PDF, JPG or PNG (Max 5MB)</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-8">
                  <div className="flex items-start mb-6">
                    <input type="checkbox" required className="mt-1 mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                    <p className="text-sm text-slate-600">
                      I agree to MasterRoll's <a href="#" className="text-blue-600 font-bold hover:underline">Vendor Terms of Service</a> and confirm that the details provided are accurate to the best of my knowledge.
                    </p>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Processing Application...
                      </>
                    ) : (
                      <>
                        Register Business
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VendorRegistrationPage;