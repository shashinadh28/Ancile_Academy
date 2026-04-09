export default function Card({ children, className = '', hover = true, glass = false }) {
  return (
    <div
      className={`
        rounded-2xl p-6
        ${glass ? 'glass' : 'bg-white border border-gray-100/80'}
        ${hover ? 'card-premium cursor-pointer' : 'shadow-sm'}
        ${className}
      `}
      style={!glass && !hover ? {
        boxShadow: '0 1px 3px rgba(0,0,0,.04), 0 4px 12px rgba(0,0,0,.04)',
        border: '1px solid rgba(229,231,235,.8)',
      } : {}}
    >
      {children}
    </div>
  );
}

export function IconBox({ children, className = '' }) {
  return (
    <div className={`w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 transition-transform duration-300 group-hover:scale-110 ${className}`}>
      {children}
    </div>
  );
}
