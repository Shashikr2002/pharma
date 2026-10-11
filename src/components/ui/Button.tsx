import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-navy text-white hover:bg-brand-navy-dark shadow-lg shadow-brand-navy/20 hover:shadow-xl hover:shadow-brand-navy/30',
  secondary:
    'bg-white text-brand-navy hover:bg-brand-light-blue border border-brand-navy/10',
  outline:
    'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
  ghost:
    'text-brand-navy hover:bg-brand-light-blue',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${base} group`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${base} group`} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${base} group`} onClick={onClick}>
      {content}
    </button>
  );
}
