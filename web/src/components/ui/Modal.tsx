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
        className="absolute inset-0 bg-slate-900/40" 
        onClick={onClose}
      />
      <div 
        className={cn(
          "relative z-10 w-full max-w-md rounded-md border border-slate-200 bg-white shadow-xl overflow-hidden",
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <button 
              onClick={onClose}
              className="rounded-full p-1 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
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
