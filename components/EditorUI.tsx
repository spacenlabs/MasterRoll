import React from 'react';
import { useEditor } from '../contexts/EditorContext';
import { Pencil, Save, RotateCcw, Eye } from './Icons';

const EditorUI: React.FC = () => {
  const { isEditMode, toggleEditMode, saveChanges, resetChanges } = useEditor();

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col gap-3">
      {isEditMode && (
        <>
          <button 
            onClick={saveChanges}
            className="p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-110"
            title="Save Changes"
          >
            <Save size={20} />
          </button>
          <button 
            onClick={resetChanges}
            className="p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all transform hover:scale-110"
            title="Reset All"
          >
            <RotateCcw size={20} />
          </button>
        </>
      )}
      
      <button 
        onClick={toggleEditMode}
        className={`p-3 rounded-full shadow-xl transition-all transform hover:scale-110 ${isEditMode ? 'bg-blue-600 text-white ring-4 ring-blue-500/30' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
        title={isEditMode ? "Exit Editor" : "Edit Content"}
      >
        {isEditMode ? <Eye size={20} /> : <Pencil size={20} />}
      </button>
    </div>
  );
};

export default EditorUI;