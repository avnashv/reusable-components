import React from 'react';
import { Drawer } from '@mui/material';
import { X } from 'lucide-react';
import clsx from 'clsx';

const CustomOffCanvasModal = ({
  isOpen,
  onClose,
  title,
  children,
  width = '649px',
  position = 'right', // default is right
}) => {
  const anchor = position === 'left' ? 'left' : 'right';

  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      onClose={onClose}
      slotProps={{
        paper: {
          className: clsx(
            'h-[85%] rounded-tl-[12px] rounded-bl-[12px] rounded-br-[12px] shadow-xl border border-[#CBDBE4] bg-white p-4 transition-transform duration-300 ease-in-out',
            {
              'border-r': position === 'left',
              'border-l': position === 'right',
            }
          ),
          style: {
            width: width,
            height: "85%",
            bottom: 0,
            top: 'auto',
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px"
          },
          onClick: (e) => e.stopPropagation(), // prevent closing on panel click
        }
      }}
      ModalProps={{
        BackdropProps: {
          className: clsx(
            'bg-black transition-opacity duration-300',
            isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
          ),
        },
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b border-[#DFE8ED] pb-2"
        style={{ width: '100%', height: '54px' }}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-hidden flex-1 px-4 py-4 custom-scroll h-[calc(100%-64px)]">
        {children}
      </div>
    </Drawer>
  );
};

export default CustomOffCanvasModal;
