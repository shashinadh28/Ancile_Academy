import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import SearchBar from '../shared/SearchBar';

const stats = [
  { value: '15+', label: 'Years of Expertise' },
  { value: '200+', label: 'University Partners' },
  { value: '98%', label: 'Visa Approval Rate' },
  { value: '50,000+', label: 'Students Guided' },
];

export default function Hero() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section
        className="relative overflow-hidden pt-[60px] lg:pt-[80px]"
        style={{ height: 'calc(100vh - 0px)', maxHeight: 720, minHeight: 480 }}
      >

        {/* ── left bg panel ── */}
        <div className="absolute inset-0 bg-[#f4f6f8]" />

        {/* ── mobile-only pulsing circles ── */}
        <div className="absolute pointer-events-none animate-hero-pulse md:hidden" style={{ top: '12%', left: '5%' }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#2563eb" strokeWidth="1.2" opacity="0.18" />
            <circle cx="30" cy="30" r="18" stroke="#2563eb" strokeWidth="1" opacity="0.12" />
            <circle cx="30" cy="30" r="9" stroke="#2563eb" strokeWidth="0.8" opacity="0.08" />
          </svg>
        </div>

        <div className="absolute pointer-events-none animate-hero-pulse-slow md:hidden" style={{ top: '55%', right: '8%' }}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="23" stroke="#3b82f6" strokeWidth="1" opacity="0.16" />
            <circle cx="25" cy="25" r="13" stroke="#3b82f6" strokeWidth="0.8" opacity="0.10" />
          </svg>
        </div>

        <div className="absolute pointer-events-none animate-hero-pulse md:hidden" style={{ bottom: '18%', left: '10%' }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" stroke="#3b82f6" strokeWidth="1.2" opacity="0.20" />
          </svg>
        </div>

        {/* ── mobile-only pulsing hexagons ── */}
        <img src="/hexagon.svg" alt="" aria-hidden="true"
          className="absolute pointer-events-none animate-hero-pulse-slow md:hidden"
          style={{ top: '8%', right: '10%', width: 70, opacity: 0.35 }} />
        <img src="/hexagon.svg" alt="" aria-hidden="true"
          className="absolute pointer-events-none animate-hero-pulse md:hidden"
          style={{ bottom: '25%', right: '5%', width: 50, opacity: 0.25 }} />
        <img src="/hexagon.svg" alt="" aria-hidden="true"
          className="absolute pointer-events-none animate-hero-pulse md:hidden"
          style={{ top: '40%', left: '2%', width: 45, opacity: 0.2 }} />

        {/* ── right blue panel ── */}
        <div
          className="absolute top-0 right-0 bottom-0 hidden lg:block"
          style={{ width: '38%', background: '#2563eb', clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <div className="absolute" style={{ top: -50, right: -50, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.10)' }} />
          <div className="absolute" style={{ bottom: -30, right: 30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />

          <div className="absolute" style={{ top: 50, right: 60 }}>
            {[0, 1, 2].map((r) =>
              <div key={r} className="flex gap-3 mb-3">
                {[0, 1, 2].map((c) =>
                  <div key={c} className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
                )}
              </div>
            )}
          </div>

          <svg className="absolute bottom-10 right-5" width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path d="M0 10 Q15 0, 30 10 T60 10 T90 10 T120 10" stroke="rgba(255,255,255,0.30)" strokeWidth="2" fill="none" />
            <path d="M0 25 Q15 15, 30 25 T60 25 T90 25 T120 25" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" />
          </svg>

          <div className="absolute animate-hero-pulse" style={{ top: '38%', right: '30%' }}>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="33" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
              <circle cx="35" cy="35" r="22" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
              <circle cx="35" cy="35" r="11" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
            </svg>
          </div>

          <div className="absolute animate-hero-pulse-slow" style={{ top: '15%', right: '60%' }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="20" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
              <circle cx="22" cy="22" r="10" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            </svg>
          </div>

          <div className="absolute animate-hero-pulse" style={{ bottom: '25%', right: '55%' }}>
            <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
          </div>

          <img src="/hexagon.svg" alt="" aria-hidden="true"
            className="absolute pointer-events-none animate-hero-pulse-slow"
            style={{ bottom: '15%', left: '10%', width: 90, opacity: 0.3, filter: 'brightness(3)' }} />
        </div>

        {/* ── three vertical bars ── */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-1.5 z-20">
          <div className="w-1 rounded-full bg-amber-400" style={{ height: 48 }} />
          <div className="w-1 rounded-full bg-emerald-400" style={{ height: 64 }} />
          <div className="w-1 rounded-full bg-blue-400" style={{ height: 36 }} />
        </div>

        {/* ── dot pattern bottom-left ── */}
        <div className="absolute bottom-8 left-10 hidden md:block">
          {[0, 1, 2, 3].map((r) =>
            <div key={r} className="flex gap-2 mb-2">
              {[0, 1, 2, 3, 4].map((c) =>
                <div key={c} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              )}
            </div>
          )}
        </div>

        {/* ── hexagon SVG overlap zone ── */}
        <img src="/hexagon.svg" alt="" aria-hidden="true"
          className="absolute hidden md:block pointer-events-none animate-hero-pulse-slow"
          style={{ top: '10%', left: '54%', width: 140, opacity: 0.5 }} />

        {/* ── pulsing circle outlines ── */}
        <div className="absolute hidden md:block pointer-events-none animate-hero-pulse" style={{ top: '60%', left: '6%' }}>
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <circle cx="45" cy="45" r="43" stroke="#2563eb" strokeWidth="1.2" opacity="0.18" />
            <circle cx="45" cy="45" r="30" stroke="#2563eb" strokeWidth="1" opacity="0.12" />
            <circle cx="45" cy="45" r="17" stroke="#2563eb" strokeWidth="0.8" opacity="0.08" />
          </svg>
        </div>

        <div className="absolute hidden md:block pointer-events-none animate-hero-pulse-slow" style={{ top: '14%', left: '32%' }}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="26" stroke="#2563eb" strokeWidth="1.2" opacity="0.16" />
            <circle cx="28" cy="28" r="14" stroke="#2563eb" strokeWidth="1" opacity="0.10" />
          </svg>
        </div>

        <div className="absolute hidden lg:block pointer-events-none animate-hero-pulse" style={{ top: '35%', left: '2%' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#3b82f6" strokeWidth="1.2" opacity="0.20" />
          </svg>
        </div>

        <div className="absolute hidden lg:block pointer-events-none animate-hero-pulse-slow" style={{ top: '78%', left: '28%' }}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="23" stroke="#3b82f6" strokeWidth="1" opacity="0.14" />
            <circle cx="25" cy="25" r="12" stroke="#3b82f6" strokeWidth="0.8" opacity="0.10" />
          </svg>
        </div>

        <img src="/hexagon.svg" alt="" aria-hidden="true"
          className="absolute hidden lg:block pointer-events-none animate-hero-pulse"
          style={{ bottom: '8%', left: '18%', width: 80, opacity: 0.3 }} />

        <img src="/hexagon.svg" alt="" aria-hidden="true"
          className="absolute hidden lg:block pointer-events-none animate-hero-pulse"
          style={{ bottom: '12%', right: '4%', width: 90, opacity: 0.25, filter: 'brightness(3)' }} />

        {/* ═══ CONTENT ═══ */}
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 h-full flex items-center py-10 md:py-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center w-full">

            {/* ── left: text content ── */}
            <div className="max-w-xl text-center lg:text-left pt-20 sm:pt-16 lg:pt-0">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ background: 'linear-gradient(135deg, #dbeafe, #ede9fe)', border: '1px solid #bfdbfe', color: '#1d4ed8', transitionDelay: '200ms' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                Trusted by 50,000+ Students
              </div>

              <div className={`transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
                <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-gray-900 leading-[1.10] mb-5">
                  Your Journey to{' '}
                  <span className="text-primary-600">Global Education</span>{' '}
                  Begins Here.
                </h1>
              </div>

              <div className={`transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '500ms' }}>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-7 max-w-md mx-auto lg:mx-0">
                  Our mission is to help students find the best programs and universities abroad, with expert guidance anytime, anywhere.
                </p>
              </div>

              <div className={`transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '650ms' }}>
                <SearchBar variant="hero" placeholder="Search destinations, exams, services…" />
              </div>

              {/* CTA buttons */}
              {/* CTA buttons */}
              <div className={`grid grid-cols-2 sm:flex items-center lg:justify-start gap-2 sm:gap-4 mt-6 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
                <Link
                  to="/get-started"
                  className="flex items-center justify-center gap-2 px-1.5 py-3 sm:px-6 sm:py-3 rounded-xl text-[11px] sm:text-sm font-bold text-white cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', boxShadow: '0 8px 24px rgba(37,99,235,.25)' }}
                >
                  <span className="text-center leading-[1.15]">Get Free Counselling</span>
                  <ArrowRight size={16} className="hidden sm:block shrink-0" />
                </Link>
                <Link
                  to="/countries"
                  className="flex items-center justify-center gap-2 px-1.5 py-3 sm:px-5 sm:py-3 rounded-xl text-[11px] sm:text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all cursor-pointer"
                >
                  <Play size={14} className="hidden sm:block shrink-0 text-primary-600" />
                  <span className="text-center leading-[1.15]">Explore<br className="sm:hidden" /> Destinations</span>
                </Link>
              </div>
            </div>

            {/* ── right: person image ── */}
            <div className={`relative flex justify-center lg:justify-center lg:-ml-8 xl:-ml-12 transition-all duration-1200 ease-out ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '400ms' }}>
              <div className="relative">
                <img
                  src="/landing_page/HomePage.webp"
                  alt="Happy student ready to study abroad"
                  className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-md xl:max-w-[460px] object-contain relative z-10"
                />

                <div className="absolute hidden md:block animate-hero-pulse z-0" style={{ top: -14, right: 10 }}>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="38" stroke="#93c5fd" strokeWidth="1.5" opacity="0.55" />
                    <circle cx="40" cy="40" r="26" stroke="#93c5fd" strokeWidth="1" opacity="0.35" />
                    <circle cx="40" cy="40" r="14" stroke="#93c5fd" strokeWidth="0.8" opacity="0.20" />
                  </svg>
                </div>

                <div className="absolute hidden md:block animate-hero-pulse-slow z-0" style={{ bottom: 10, left: -20 }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#93c5fd" strokeWidth="1.5" opacity="0.45" />
                    <circle cx="32" cy="32" r="18" stroke="#93c5fd" strokeWidth="1" opacity="0.28" />
                  </svg>
                </div>

                <div className="absolute hidden md:block z-0 animate-hero-pulse" style={{ top: '40%', right: -8 }}>
                  <div className="w-3.5 h-3.5 rounded-full bg-primary-400 opacity-55" />
                </div>

                <div className="absolute hidden md:block z-0 animate-hero-pulse-slow" style={{ top: '10%', left: '15%' }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-300 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <div className="bg-gradient-to-r from-gray-50 via-primary-50/30 to-gray-50 border-y border-gray-100">
        <div ref={statsRef} className="container-custom px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`text-center transition-all duration-700 ease-out ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
