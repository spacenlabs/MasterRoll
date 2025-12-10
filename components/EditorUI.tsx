import React, { useState, useEffect } from 'react';
import { useEditor } from '../contexts/EditorContext';
import { PenTool, Eye, RotateCcw, X, Save, ImageIcon, FileText } from './Icons';

const EditorUI: React.FC = () => {
  const { 
    isEditMode, 
    toggleEditMode, 
    resetContent, 
    activeElementId, 
    setActiveElement,
    getContent, 
    updateContent,
    activeElementType
  } = useEditor();

  const [inputValue, setInputValue] = useState('');

  // Update input when active element changes
  useEffect(() => {
    if (activeElementId) {
      setInputValue(getContent(activeElementId, ''));
    }
  }, [activeElementId, getContent]);

  const handleSave = () => {
    if (activeElementId) {
      updateContent(activeElementId, inputValue);
      setActiveElement(null); // Close modal
    }
  };

  const handleClose = () => {
    setActiveElement(null);
  };

  return (
    <>
      {/* Floating Toggle Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[90] flex items-center bg-slate-900 text-white p-1.5 rounded-full shadow-2xl border border-slate-700 transition-all hover:scale-105">
        <button
          onClick={toggleEditMode}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full font-bold transition-all ${
            isEditMode ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'hover:bg-slate-800 text-slate-300'
          }`}
        >
          {isEditMode ? (
            <>
              <PenTool size={16} />
              <span>Editing On</span>
            </>
          ) : (
            <>
              <Eye size={16} />
              <span>View Mode</span>
            </>
          )}
        </button>
        
        {isEditMode && (
          <div className="flex items-center ml-1 border-l border-slate-700 pl-1">
            <button 
              onClick={resetContent}
              className="p-2 hover:bg-red-900/50 hover:text-red-400 rounded-full text-slate-400 transition-colors tooltip"
              title="Reset all changes"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {activeElementId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in duration-200">
            
            <div className="bg-slate-50 border-b border-slate-100 p-4 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 flex items-center">
                {activeElementType === 'image' ? <ImageIcon className="w-4 h-4 mr-2" /> : <FileText className="w-4 h-4 mr-2" />}
                Edit {activeElementType === 'image' ? 'Image Source' : 'Content'}
              </h3>
              <button onClick={handleClose} className="p-1 hover:bg-slate-200 rounded-full text-slate-500">
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {activeElementType === 'image' ? 'Image URL' : 'Text Content'}
              </label>
              
              {activeElementType === 'textarea' ? (
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none min-h-[150px] text-slate-700"
                  autoFocus
                />
              ) : (
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-700"
                  autoFocus
                />
              )}

              {activeElementType === 'image' && (
                <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex justify-center">
                   <img src={inputValue} alt="Preview" className="h-32 object-contain rounded" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button onClick={handleClose} className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-200 rounded-lg">Cancel</button>
              <button 
                onClick={handleSave}
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-500/30 flex items-center"
              >
                <Save size={16} className="mr-2" /> Save Changes
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default EditorUI;