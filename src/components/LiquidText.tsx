import React from 'react';

interface LiquidTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  variant?: 'gold' | 'silver' | 'amber';
}

export const LiquidText: React.FC<LiquidTextProps> = ({
  text,
  className = '',
  as: Component = 'span',
  variant = 'gold',
}) => {
  const gradientStyles = {
    gold: 'from-amber-100 via-amber-300 via-yellow-500 via-amber-200 to-amber-100',
    silver: 'from-zinc-100 via-zinc-300 via-slate-100 via-zinc-400 to-zinc-100',
    amber: 'from-amber-200 via-yellow-400 via-orange-300 via-amber-100 to-amber-200',
  }[variant];

  return (
    <Component
      className={`relative inline-block font-display tracking-wide uppercase ${className}`}
    >
      <span
        className={`bg-gradient-to-r ${gradientStyles} bg-[length:250%_auto] bg-clip-text text-transparent animate-[liquid-flow_7s_linear_infinite] select-none`}
        style={{
          textShadow: '0 0 40px rgba(234, 179, 8, 0.18)',
        }}
      >
        {text}
      </span>
    </Component>
  );
};
