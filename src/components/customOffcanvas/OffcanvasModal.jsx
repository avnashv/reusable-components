import React from 'react';
import { X } from 'lucide-react';

const OffcanvasModal = ({ isOpen, onClose, title, children, width = '649px' }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Offcanvas Panel */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white z-50 transition-transform duration-300 ease-in-out
        border border-[#CBDBE4] rounded-tl-[12px] rounded-bl-[12px] p-4 flex flex-col
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          width,
          boxShadow:
            'var(--sds-size-depth-0) var(--sds-size-depth-400) var(--sds-size-depth-800) var(--sds-size-depth-negative-100) var(--sds-color-black-200)',
          backdropFilter: 'blur(30px)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-2 py-2 border-b border-[#CBDBE4]">
          <h2 className="text-lg font-medium">{title}</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-2 py-4 custom-scroll">
          {children}
        </div>
      </div>
    </>
  );
};

export default OffcanvasModal;
