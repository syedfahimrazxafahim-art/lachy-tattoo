import React from 'react';

interface CornerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CornerButton: React.FC<CornerButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  onClick,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wider',
    md: 'px-5 py-2.5 text-xs sm:text-sm tracking-widest font-semibold',
    lg: 'px-7 py-3.5 text-sm sm:text-base tracking-widest font-semibold',
  }[size];

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-amber-500/90 to-amber-600/90 text-zinc-950 font-bold hover:from-amber-400 hover:to-amber-500 border-amber-400/80 shadow-[0_0_25px_rgba(234,179,8,0.25)]',
    secondary:
      'bg-zinc-900/90 text-zinc-100 hover:text-amber-300 border-zinc-700/80 hover:border-amber-400/60 shadow-md',
    outline:
      'bg-transparent text-amber-300 hover:text-white border-amber-500/40 hover:border-amber-400 hover:bg-amber-500/10',
    ghost:
      'bg-transparent text-zinc-300 hover:text-amber-300 border-transparent hover:border-zinc-700 hover:bg-zinc-900/40',
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 uppercase select-none transition-all duration-300 cursor-pointer overflow-hidden ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {/* 4 Corner Geometric Accents (VengenceUI Corner Button Reference) */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-amber-400 transition-all duration-300 group-hover:w-3.5 group-hover:h-3.5 group-hover:border-amber-300 pointer-events-none" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-amber-400 transition-all duration-300 group-hover:w-3.5 group-hover:h-3.5 group-hover:border-amber-300 pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-amber-400 transition-all duration-300 group-hover:w-3.5 group-hover:h-3.5 group-hover:border-amber-300 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-amber-400 transition-all duration-300 group-hover:w-3.5 group-hover:h-3.5 group-hover:border-amber-300 pointer-events-none" />

      {/* Subtle light sweep reflection */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
        {children}
      </span>
    </button>
  );
};
