import { ArrowRight } from 'lucide-react';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const stats = [
  { value: '1,500+', label: 'Institution Partners' },
  { value: '50,000+', label: 'Students Assisted' },
  { value: '200,000+', label: 'Courses Offered' },
  { value: '15+', label: 'Destinations Served' },
];

export default function Hero() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  return (
    <>
      <section className="bg-white relative overflow-hidden pt-20 md:pt-[72px]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute top-16 right-0 w-[500px] h-[400px] text-primary-200/40" viewBox="0 0 500 400" fill="none">
            <path d="M450 50 C 350 50, 300 150, 350 200 S 500 300, 400 350" stroke="currentColor" strokeWidth="1.5" />
            <path d="M480 30 C 380 60, 320 160, 370 220 S 520 320, 420 370" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="absolute top-[55%] left-[42%] w-3 h-3 rounded-full bg-accent-400 animate-float" />
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
            <div className="max-w-xl">
              <AnimateIn animation="fadeRight" duration="slow">
                <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-warm-900 leading-[1.12] mb-6">
                  Study Abroad With a{' '}
                  <span className="text-primary-600">Clear Career Outcome</span>{' '}
                  in Mind
                </h1>
              </AnimateIn>

              <AnimateIn animation="fadeRight" delay={200}>
                <p className="text-warm-500 text-lg leading-relaxed mb-8 max-w-md">
                  Get transparent course recommendations, scholarship clarity, error-free application and expert visa support — so you move forward with total confidence.
                </p>
              </AnimateIn>

              <AnimateIn animation="fadeUp" delay={400}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <span className="absolute -top-3 -left-1 bg-primary-100 text-primary-800 text-[11px] font-semibold px-3 py-0.5 rounded-full">
                      Talk to a Trusted Expert
                    </span>
                    <Button to="/contact" size="lg">
                      Book FREE Consultation
                      <ArrowRight size={16} />
                    </Button>
                  </div>
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

      <div className="bg-gradient-to-r from-warm-50 via-primary-50/30 to-warm-50 border-y border-warm-100">
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
                <div className="text-sm text-warm-500">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-warm-400 mt-4">(As of Mar '25)</p>
        </div>
      </div>
    </>
  );
}
