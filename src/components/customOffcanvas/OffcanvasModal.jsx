import React from 'react';
import { X } from 'lucide-react';

const CustomOffCanvasModal = ({
  isOpen,
  onClose,
  title,
  children,
  width = '649px',
  position = 'right', // <- default to right
}) => {
  const isLeft = position === 'left';

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[50] transition-opacity duration-300 ${
          isOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Off-Canvas Panel */}
      <div
        className={`fixed ${isLeft ? 'left-0' : 'right-0'} h-screen bg-white z-[500] transition-transform duration-300 ease-in-out rounded-tl-[12px] rounded-bl-[12px] rounded-br-[12px] border-${isLeft ? 'r' : 'l'} border-[#CBDBE4] shadow-xl
        ${isOpen ? 'translate-x-0' : isLeft ? '-translate-x-full' : 'translate-x-full'}`}
        style={{ width , height:"85%", bottom:0, right:0}}
        onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking inside
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#CBDBE4]">
          <h2 className="text-lg font-medium">{title}</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-4 py-4 custom-scroll h-[calc(100%-64px)]">
          {children}
        </div>
      </div>
    </>
  );
};

export default CustomOffCanvasModal;
