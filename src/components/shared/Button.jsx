import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30',
  secondary: 'bg-white text-warm-900 border border-warm-200 hover:border-primary-300 hover:bg-primary-50 shadow-sm hover:shadow-md',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-700',
  'outline-teal': 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
  ghost: 'text-primary-600 hover:bg-primary-50',
  dark: 'bg-warm-900 text-white hover:bg-warm-800 shadow-lg',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25',
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
