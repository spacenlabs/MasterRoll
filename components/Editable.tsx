import React from 'react';
import { useEditor } from '../contexts/EditorContext';
import { PenTool, ImageIcon } from './Icons';

interface EditableProps {
  id: string;
  defaultValue: string;
  type?: 'text' | 'textarea' | 'image';
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'img';
  placeholder?: string;
  alt?: string; // For images
}

const Editable: React.FC<EditableProps> = ({ 
  id, 
  defaultValue, 
  type = 'text', 
  className = '', 
  tag = 'div',
  placeholder,
  alt
}) => {
  const { isEditMode, getContent, setActiveElement } = useEditor();
  const content = getContent(id, defaultValue);

  if (!isEditMode) {
    // Render normal element
    if (type === 'image' || tag === 'img') {
      return <img src={content} alt={alt || 'Editable image'} className={className} />;
    }
    
    return React.createElement(tag, { className }, content);
  }

  // Edit Mode Render
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveElement(id, type);
  };

  if (type === 'image' || tag === 'img') {
    return (
      <div 
        onClick={handleClick}
        className={`relative group cursor-pointer border-2 border-dashed border-blue-400 hover:border-blue-600 rounded-lg overflow-hidden transition-all ${className}`}
        title="Click to change image"
      >
        <img src={content} alt={alt} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
            <ImageIcon size={24} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleClick}
      className={`relative group cursor-pointer border-2 border-dashed border-transparent hover:border-blue-500 hover:bg-blue-50/50 rounded px-1 -mx-1 transition-all ${className}`}
      title="Click to edit text"
    >
      {React.createElement(tag, { className: 'pointer-events-none' }, content || <span className="text-gray-400 italic">{placeholder || 'Empty...'}</span>)}
      <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 shadow-md transition-all z-10 scale-0 group-hover:scale-100">
        <PenTool size={12} />
      </div>
    </div>
  );
};

export default Editable;