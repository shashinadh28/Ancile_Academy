export default function BackgroundGradient({ children, className = '', containerClassName = '' }) {
  return (
    <div className={`relative group rounded-2xl p-[2px] ${containerClassName}`}>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'conic-gradient(from 0deg, #3b82f6, #6366f1, #8b5cf6, #3b82f6)',
          animation: 'bg-gradient-spin 3s linear infinite',
        }}
      />
      <div className={`relative rounded-[14px] h-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
