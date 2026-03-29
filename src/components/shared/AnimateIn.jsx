import useInView from '../../hooks/useInView';

const animations = {
  fadeUp: { hidden: 'opacity-0 translate-y-8', visible: 'opacity-100 translate-y-0' },
  fadeDown: { hidden: 'opacity-0 -translate-y-8', visible: 'opacity-100 translate-y-0' },
  fadeLeft: { hidden: 'opacity-0 translate-x-8', visible: 'opacity-100 translate-x-0' },
  fadeRight: { hidden: 'opacity-0 -translate-x-8', visible: 'opacity-100 translate-x-0' },
  fadeIn: { hidden: 'opacity-0', visible: 'opacity-100' },
  scaleUp: { hidden: 'opacity-0 scale-90', visible: 'opacity-100 scale-100' },
  scaleIn: { hidden: 'opacity-0 scale-95', visible: 'opacity-100 scale-100' },
  slideUp: { hidden: 'opacity-0 translate-y-12', visible: 'opacity-100 translate-y-0' },
  slideLeft: { hidden: 'opacity-0 translate-x-16', visible: 'opacity-100 translate-x-0' },
  slideRight: { hidden: 'opacity-0 -translate-x-16', visible: 'opacity-100 translate-x-0' },
  blur: { hidden: 'opacity-0 blur-sm scale-95', visible: 'opacity-100 blur-0 scale-100' },
};

const durations = {
  fast: 'duration-500',
  normal: 'duration-700',
  slow: 'duration-1000',
};

const delays = {
  0: 'delay-0',
  100: 'delay-100',
  150: 'delay-150',
  200: 'delay-200',
  300: 'delay-300',
  400: 'delay-[400ms]',
  500: 'delay-500',
  600: 'delay-[600ms]',
  700: 'delay-700',
  800: 'delay-[800ms]',
  900: 'delay-[900ms]',
  1000: 'delay-1000',
};

export default function AnimateIn({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 'normal',
  className = '',
  as: Tag = 'div',
  threshold = 0.15,
  ...props
}) {
  const [ref, isInView] = useInView({ threshold });

  const anim = animations[animation] || animations.fadeUp;
  const dur = durations[duration] || durations.normal;
  const del = delays[delay] || `delay-[${delay}ms]`;

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${dur} ${del} ${isInView ? anim.visible : anim.hidden} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function StaggerChildren({
  children,
  animation = 'fadeUp',
  staggerDelay = 100,
  baseDelay = 0,
  duration = 'normal',
  className = '',
  childClassName = '',
  threshold = 0.1,
}) {
  const [ref, isInView] = useInView({ threshold });

  const anim = animations[animation] || animations.fadeUp;
  const dur = durations[duration] || durations.normal;

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              className={`transition-all ease-out ${dur} ${isInView ? anim.visible : anim.hidden} ${childClassName}`}
              style={{ transitionDelay: `${baseDelay + i * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
