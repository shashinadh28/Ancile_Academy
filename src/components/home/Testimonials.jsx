import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import { TESTIMONIALS } from '../../data/constants';

const cardBgColors = [
  'bg-blue-50',
  'bg-violet-50',
  'bg-sky-50',
  'bg-indigo-50',
  'bg-cyan-50',
];

const avatarColors = [
  'bg-blue-500',
  'bg-violet-500',
  'bg-sky-500',
  'bg-indigo-500',
  'bg-cyan-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-teal-500',
  'bg-purple-500',
  'bg-pink-500',
];

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function TestimonialCard({ t, i }) {
  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[380px] md:w-[420px] px-2">
      <div className={`${cardBgColors[i % cardBgColors.length]} rounded-2xl p-6 md:p-7 h-full flex flex-col relative overflow-hidden`}>
        {/* Box grid background at 70% opacity */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.7,
        }} />
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-3">
            <Quote size={28} className="text-primary-500 shrink-0" />
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating || 5 }).map((_, s) => (
                <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-5 flex-1 text-sm md:text-base line-clamp-6">
            {t.quote}
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
            <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center shrink-0`}>
              <span className="text-white text-xs font-bold">{getInitials(t.name)}</span>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold text-sm">{t.name}</h4>
              <p className="text-gray-500 text-xs">{t.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const animationRef = useRef(null);
  const speed = 0.6;

  // Infinite marquee animation
  useEffect(() => {
    let pos = scrollPos;
    const animate = () => {
      if (!isPaused && trackRef.current) {
        pos += speed;
        // When we've scrolled past the first set, reset seamlessly
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (pos >= halfWidth) {
          pos -= halfWidth;
        }
        trackRef.current.style.transform = `translateX(-${pos}px)`;
        setScrollPos(pos);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, scrollPos]);

  const scrollBy = (direction) => {
    if (!trackRef.current) return;
    const amount = 420;
    const halfWidth = trackRef.current.scrollWidth / 2;
    let newPos = scrollPos + (direction === 'left' ? -amount : amount);
    if (newPos < 0) newPos += halfWidth;
    if (newPos >= halfWidth) newPos -= halfWidth;
    setScrollPos(newPos);
    trackRef.current.style.transform = `translateX(-${newPos}px)`;
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/5 rounded-full" />
      </div>
      <div className="container-custom relative z-10">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            title="See what our students have to say..."
            light
          />
        </AnimateIn>

        {/* Marquee carousel */}
        <div className="relative mt-8">
          {/* Left button */}
          <button
            onClick={() => scrollBy('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right button */}
          <button
            onClick={() => scrollBy('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Fade edges — full viewport width, reduced opacity */}
          <div className="absolute -left-4 sm:-left-8 md:-left-16 top-0 bottom-0 w-20 sm:w-28 md:w-36 bg-gradient-to-r from-primary-800/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute -right-4 sm:-right-8 md:-right-16 top-0 bottom-0 w-20 sm:w-28 md:w-36 bg-gradient-to-l from-primary-800/80 to-transparent z-10 pointer-events-none" />

          {/* Scrollable track */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={trackRef}
              className="flex"
              style={{ willChange: 'transform' }}
            >
              {/* Duplicate items for seamless loop */}
              {TESTIMONIALS.map((t, i) => (
                <TestimonialCard key={`a-${i}`} t={t} i={i} />
              ))}
              {TESTIMONIALS.map((t, i) => (
                <TestimonialCard key={`b-${i}`} t={t} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
