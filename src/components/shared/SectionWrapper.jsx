export default function SectionWrapper({
  children,
  className = '',
  id,
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? 'bg-navy-950 text-white' : 'bg-white'} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}

export function SectionHeader({ badge, title, subtitle, light = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${light ? 'bg-white/10 text-primary-300' : 'bg-primary-50 text-primary-600'}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
