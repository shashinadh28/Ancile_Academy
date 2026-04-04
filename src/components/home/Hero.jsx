import { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const stats = [
  { value: '15+', label: 'Years of Expertise' },
  { value: '200+', label: 'University Partners' },
  { value: '98%', label: 'Visa Approval Rate' },
  { value: '50,000+', label: 'Students Guided' },
];

export default function Hero() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="bg-white relative overflow-hidden pt-[104px] md:pt-[108px]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute top-16 right-0 w-[500px] h-[400px] text-primary-200/40" viewBox="0 0 500 400" fill="none">
            <path d="M450 50 C 350 50, 300 150, 350 200 S 500 300, 400 350" stroke="currentColor" strokeWidth="1.5" />
            <path d="M480 30 C 380 60, 320 160, 370 220 S 520 320, 420 370" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="absolute top-[55%] left-[42%] w-3 h-3 rounded-full bg-primary-300 animate-float" />
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <AnimateIn animation="fadeUp">
            <form onSubmit={handleSearch} className="flex items-center gap-2 max-w-lg mb-8">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our site..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all bg-gray-50"
                />
              </div>
              <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors cursor-pointer">
                Search
              </button>
            </form>
          </AnimateIn>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
            <div className="max-w-xl">
              <AnimateIn animation="fadeRight" duration="slow">
                <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-gray-900 leading-[1.12] mb-6">
                  Your Journey to{' '}
                  <span className="text-primary-600">Global Education</span>{' '}
                  Begins Here!
                </h1>
              </AnimateIn>

              <AnimateIn animation="fadeRight" delay={200}>
                <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-md">
                  Expert Guidance to Help You Achieve Your Abroad Education Dreams.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                  Welcome to Ancile Academy, where we provide comprehensive services to help you realize your dream of studying abroad. From university selection to visa guidance, we're with you every step of the way.
                </p>
              </AnimateIn>

              <AnimateIn animation="fadeUp" delay={400}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button to="/get-started" size="lg">
                    Get a Free Consultation
                    <ArrowRight size={16} />
                  </Button>
                  <Button to="/countries" variant="secondary" size="lg">
                    Explore Programs
                  </Button>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn animation="fadeLeft" delay={300} duration="slow">
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src="/landing_page/home.png"
                  alt="Happy student ready to study abroad"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain relative z-10"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-gray-50 via-primary-50/30 to-gray-50 border-y border-gray-100">
        <div ref={statsRef} className="container-custom px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`text-center transition-all duration-700 ease-out ${
                  statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
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
