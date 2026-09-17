import React from 'react';
import { cn } from '../../lib/utils';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div 
        className={cn(
          "relative z-10 w-full max-w-md rounded-xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden",
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-900/50">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <button 
              onClick={onClose}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
