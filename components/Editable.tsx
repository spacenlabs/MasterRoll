import React, { useState, useEffect } from 'react';
import { useEditor } from '../contexts/EditorContext';
import { Pencil } from './Icons';

interface EditableProps {
  id: string;
  defaultContent: string;
  type?: 'text' | 'image' | 'textarea';
  className?: string;
  children?: React.ReactNode; // In case we wrap
}

const Editable: React.FC<EditableProps> = ({ id, defaultContent, type = 'text', className = '', children }) => {
  const { isEditMode, content, updateContent } = useEditor();
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(content[id] || defaultContent);

  // Sync temp value if content changes externally or on load
  useEffect(() => {
    if (content[id]) {
        setTempValue(content[id]);
    }
  }, [content, id]);

  const currentVal = content[id] || defaultContent;

  const handleSave = () => {
    updateContent(id, tempValue);
    setIsEditing(false);
  };

  if (isEditMode) {
    return (
      <div className={`relative group ${type === 'image' ? 'inline-block' : ''} ${className} border-2 border-transparent hover:border-blue-400 rounded p-1 transition-all cursor-pointer`} onClick={() => !isEditing && setIsEditing(true)}>
         {/* Edit Badge */}
         <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-md">
           <Pencil size={12} />
         </div>

         {isEditing ? (
            <div className="absolute top-full left-0 z-50 bg-white shadow-xl p-3 rounded-lg border border-slate-200 min-w-[300px] mt-2 animate-in fade-in zoom-in duration-150" onClick={e => e.stopPropagation()}>
               <div className="mb-2 text-xs font-bold text-slate-500 uppercase">Editing: {id}</div>
               {type === 'textarea' ? (
                 <textarea 
                   className="w-full h-32 p-2 border border-slate-300 rounded text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none" 
                   value={tempValue} 
                   onChange={e => setTempValue(e.target.value)}
                 />
               ) : (
                 <input 
                   type="text" 
                   className="w-full p-2 border border-slate-300 rounded text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                   value={tempValue}
                   onChange={e => setTempValue(e.target.value)}
                 />
               )}
               <div className="flex gap-2 mt-3 justify-end">
                 <button onClick={(e) => { e.stopPropagation(); setIsEditing(false); }} className="px-3 py-1.5 text-xs bg-slate-100 rounded text-slate-700 hover:bg-slate-200 font-medium">Cancel</button>
                 <button onClick={(e) => { e.stopPropagation(); handleSave(); }} className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 font-bold">Save Changes</button>
               </div>
            </div>
         ) : null}

         {type === 'image' ? (
           <img src={currentVal} alt="Editable" className={`block ${className}`} />
         ) : (
           <span className={className}>{currentVal}</span>
         )}
      </div>
    );
  }

  // Normal render
  if (type === 'image') {
    return <img src={currentVal} alt="Content" className={className} />;
  }

  return <span className={className}>{currentVal}</span>;
};

export default Editable;