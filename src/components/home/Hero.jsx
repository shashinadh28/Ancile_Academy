import { ArrowRight, Play, Star, Users, Award, Globe } from 'lucide-react';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const stats = [
  { icon: Users, value: '50,000+', label: 'Students Placed' },
  { icon: Globe, value: '15+', label: 'Countries' },
  { icon: Award, value: '98%', label: 'Visa Success' },
  { icon: Star, value: '4.9/5', label: 'Student Rating' },
];

export default function Hero() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });

  return (
    <section className="gradient-hero relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn animation="fadeDown" duration="slow">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-primary-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Trusted by 50,000+ students worldwide
            </div>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={200} duration="slow">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Your Journey to a{' '}
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
                World-Class
              </span>{' '}
              Education Starts Here
            </h1>
          </AnimateIn>

          <AnimateIn animation="fadeUp" delay={400} duration="slow">
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Expert guidance for studying in the USA, UK, Canada, Australia, and beyond.
              We turn your study abroad dreams into reality with personalized counseling and end-to-end support.
            </p>
          </AnimateIn>

          <AnimateIn animation="scaleIn" delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button to="/contact" size="lg">
                Start Your Journey
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="#lead-form">
                <Play size={18} />
                Free Consultation
              </Button>
            </div>
          </AnimateIn>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-5 hover:bg-white/10 transition-all duration-700 ease-out ${
                  statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + i * 150}ms` }}
              >
                <Icon size={22} className="text-primary-400 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
                <div className="text-xs md:text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
