import { Award, Globe, TrendingUp } from 'lucide-react';
import { SectionHeader } from '../shared/SectionWrapper';
import { BackgroundRippleEffect } from '../ui/background-ripple-effect';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const features = [
  {
    icon: Award,
    title: 'Experience',
    description: '15+ years of expertise in guiding students to success.',
    color: 'bg-primary-100 text-primary-700',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Partnerships with 200+ top universities worldwide.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    icon: TrendingUp,
    title: 'High Success Rate',
    description: '98% visa approval rate for our students.',
    color: 'bg-sky-100 text-sky-700',
  },
];

export default function WhyChooseUs() {
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden py-8 md:py-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <BackgroundRippleEffect rows={10} cols={30} cellSize={52} />
      <div className="container-custom relative z-10">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            title="Why Choose Ancile Academy?"
            subtitle="We combine deep expertise, genuine care, and proven processes to make your study abroad journey smooth and successful."
            align="center"
          />
        </AnimateIn>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {features.map(({ icon: Icon, title, description, color }, i) => (
            <div
              key={title}
              className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
