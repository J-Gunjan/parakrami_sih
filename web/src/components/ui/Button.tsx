import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const variants = {
      default: 'bg-nyaya-700 hover:bg-nyaya-800 text-white shadow-sm border border-transparent',
      outline: 'bg-transparent border border-slate-300 hover:bg-slate-50 text-slate-700',
      ghost: 'bg-transparent hover:bg-slate-50 text-slate-700',
      danger: 'bg-red-50 hover:bg-red-100 text-red-600 border border-red-200',
      success: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-6 text-base',
      icon: 'h-10 w-10 p-2',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-nyaya-500 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
