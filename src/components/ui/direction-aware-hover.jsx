import { useState, useRef } from 'react';

export default function DirectionAwareHover({ children, imageUrl, className = '' }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState('top');

  const getDirection = (e) => {
    if (!ref.current) return 'top';
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI) + 180;
    if (angle >= 45 && angle < 135) return 'top';
    if (angle >= 135 && angle < 225) return 'right';
    if (angle >= 225 && angle < 315) return 'bottom';
    return 'left';
  };

  const gradientFrom = {
    top: 'from-top',
    right: 'from-right',
    bottom: 'from-bottom',
    left: 'from-left',
  };

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden ${className}`}
      onMouseEnter={(e) => {
        setDirection(getDirection(e));
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={imageUrl}
        alt=""
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: hovered
            ? direction === 'top'
              ? 'linear-gradient(to bottom, rgba(37,99,235,0.85) 0%, rgba(30,58,138,0.60) 100%)'
              : direction === 'bottom'
              ? 'linear-gradient(to top, rgba(37,99,235,0.85) 0%, rgba(30,58,138,0.60) 100%)'
              : direction === 'left'
              ? 'linear-gradient(to right, rgba(37,99,235,0.85) 0%, rgba(30,58,138,0.60) 100%)'
              : 'linear-gradient(to left, rgba(37,99,235,0.85) 0%, rgba(30,58,138,0.60) 100%)'
            : undefined,
        }}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-end p-4 transition-all duration-500 ease-out ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
