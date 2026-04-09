export default function SectionWrapper({
  children,
  className = '',
  id,
}) {
  return (
    <section
      id={id}
      className={`section-padding ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}

import TextAnimation from '../ui/scroll-text';

export function SectionHeader({ badge, title, subtitle, light = false, align = 'left' }) {
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${light ? 'bg-white/10 text-white/80' : 'bg-primary-50 text-primary-700'}`}>
          {badge}
        </span>
      )}
      <TextAnimation
        as="h2"
        text={title}
        lineAnime={true}
        classname={`text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}
      />
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
