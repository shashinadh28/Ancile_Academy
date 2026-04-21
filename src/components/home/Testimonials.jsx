import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import { TESTIMONIALS } from '../../data/constants';

const avatarGradients = [
  'from-blue-500 to-indigo-600',
  'from-violet-500 to-purple-600',
  'from-sky-500 to-cyan-600',
  'from-indigo-500 to-blue-600',
  'from-cyan-500 to-teal-600',
  'from-emerald-500 to-green-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-teal-500 to-emerald-600',
  'from-purple-500 to-violet-600',
];

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function TestimonialCard({ t, i }) {
  const avatarG = avatarGradients[i % avatarGradients.length];

  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[380px] md:w-[420px] px-2 py-1">
      <div
        className="group relative h-full flex flex-col rounded-3xl overflow-hidden
          bg-gradient-to-br from-primary-100/95 via-secondary-50/98 to-primary-50/92 backdrop-blur-xl
          border border-primary-200/50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_20px_50px_-12px_rgba(30,58,138,0.35)]
          transition-all duration-300 ease-out
          hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.35),0_24px_60px_-16px_rgba(15,23,42,0.45)]
          hover:-translate-y-1 hover:border-primary-300/65"
      >
        {/* Soft corner glow */}
        <div
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary-300/25 to-transparent blur-2xl pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-gradient-to-tr from-navy-400/10 to-transparent blur-2xl pointer-events-none"
          aria-hidden
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative z-10 flex flex-col h-full p-6 md:p-7">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/12 to-navy-500/10 text-primary-600 shadow-inner ring-1 ring-primary-500/15
                transition-transform duration-300 group-hover:scale-105 group-hover:from-primary-500/18"
            >
              <Quote size={22} className="opacity-90" strokeWidth={2} />
            </div>
            <div
              className="inline-flex items-center gap-0.5 rounded-full bg-amber-50/90 px-2.5 py-1 ring-1 ring-amber-200/60 shadow-sm"
            >
              {Array.from({ length: t.rating || 5 }).map((_, s) => (
                <Star key={s} size={13} className="fill-amber-400 text-amber-400 drop-shadow-sm" />
              ))}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 flex-1 text-[15px] md:text-base font-medium line-clamp-6 tracking-[0.01em]">
            {t.quote}
          </p>

          <div className="flex items-center gap-3.5 pt-5 mt-auto border-t border-primary-200/55 bg-gradient-to-b from-transparent to-primary-100/45 -mx-6 -mb-6 px-6 pb-6 md:-mx-7 md:px-7 md:pb-7 rounded-b-3xl">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarG} text-white text-xs font-bold shadow-lg shadow-primary-900/15 ring-[3px] ring-primary-50`}
            >
              {getInitials(t.name)}
            </div>
            <div className="min-w-0">
              <h4 className="text-gray-900 font-semibold text-sm truncate">{t.name}</h4>
              <p className="text-gray-500 text-xs font-medium tracking-wide">{t.country}</p>
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
