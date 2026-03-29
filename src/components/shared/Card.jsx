export default function Card({ children, className = '', hover = true, glass = false }) {
  return (
    <div
      className={`
        rounded-2xl p-6 
        ${glass ? 'glass' : 'bg-white border border-gray-100 shadow-sm'}
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
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/25 ${className}`}>
      {children}
    </div>
  );
}
