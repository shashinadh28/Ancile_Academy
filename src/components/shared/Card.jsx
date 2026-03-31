export default function Card({ children, className = '', hover = true, glass = false }) {
  return (
    <div
      className={`
        rounded-2xl p-6 
        ${glass ? 'glass' : 'bg-white border border-warm-100 shadow-sm'}
        ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function IconBox({ children, className = '' }) {
  return (
    <div className={`w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 ${className}`}>
      {children}
    </div>
  );
}
