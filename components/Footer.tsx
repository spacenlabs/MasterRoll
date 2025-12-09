import React from 'react';
import { School, Twitter, Linkedin, Facebook } from './Icons';
import { useNavigation } from '../contexts/NavigationContext';

const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <School className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Master<span className="text-brand-600">Roll</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Building the digital infrastructure for India's educational future. Trusted by 500+ institutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('school-erp')} className="hover:text-brand-500 transition-colors">School ERP Suite</button></li>
              <li><button onClick={() => navigate('teacher-features')} className="hover:text-brand-500 transition-colors">Teacher App</button></li>
              <li><button onClick={() => navigate('teacher-hiring')} className="hover:text-brand-500 transition-colors">Teacher Marketplace</button></li>
              <li><button onClick={() => navigate('vendor-marketplace')} className="hover:text-brand-500 transition-colors">Vendor Procurement</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('home')} className="hover:text-brand-500 transition-colors">Blog</button></li>
              <li><button onClick={() => navigate('demo')} className="hover:text-brand-500 transition-colors">Help Center</button></li>
              <li><button onClick={() => navigate('student-tools')} className="hover:text-brand-500 transition-colors">NCERT Library</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Bengaluru, India</li>
              <li>support@masterroll.in</li>
              <li>+91 7979078400</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} MasterRoll Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-white">Privacy Policy</button>
            <button className="hover:text-white">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;