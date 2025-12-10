import React, { useState } from 'react';
import { X, CheckCircle2, Loader2, Building2, FileText, ShoppingCart, User, Phone, Package } from './Icons';
import { VendorProduct } from '../types';

interface QuoteRequestModalProps {
  product: VendorProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200 border-t-4 border-blue-600">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Requested!</h3>
            <p className="text-slate-600 mb-8">
              Your request for <span className="font-bold">{quantity} units</span> of <span className="font-bold">{product.name}</span> has been sent to <span className="font-semibold text-blue-700">{product.supplier}</span>. You will receive a formal quotation via email shortly.
            </p>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Browse More Products
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-6 border-b border-slate-100 pb-6">
               <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-3">
                 Request for Quotation (RFQ)
               </div>
               <div className="flex gap-4">
                 <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover border border-slate-200" />
                 <div>
                   <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{product.name}</h3>
                   <div className="flex items-center text-sm text-slate-500 mt-1">
                     <Building2 className="w-3 h-3 mr-1" /> {product.supplier}
                   </div>
                   <div className="text-sm font-medium text-slate-900 mt-1">
                     MOQ: {product.minOrder}
                   </div>
                 </div>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
               
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Quantity Needed</label>
                   <div className="relative">
                     <Package className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                     <input 
                        type="number" 
                        required
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="e.g. 50"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                     />
                   </div>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">School Name</label>
                   <input 
                      type="text" 
                      required
                      placeholder="e.g. Modern Academy"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Contact Person</label>
                 <div className="relative">
                   <User className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                   <input 
                      type="text" 
                      required
                      placeholder="Full Name"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Phone / Mobile</label>
                 <div className="relative">
                   <Phone className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                   <input 
                      type="tel" 
                      required
                      placeholder="+91..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Additional Requirements</label>
                 <textarea 
                    rows={3}
                    placeholder="Specific brand, delivery timeline, or customization needed..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                 ></textarea>
               </div>

               <button 
                type="submit" 
                disabled={isLoading}
                className="w-full mt-2 bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Send Quote Request <FileText className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteRequestModal;