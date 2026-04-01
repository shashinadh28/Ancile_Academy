import { ArrowRight, Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { SERVICES } from '../../data/constants';

const iconMap = { Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin };

const colors = [
  'bg-primary-100 text-primary-700',
  'bg-sky-100 text-sky-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
  'bg-cyan-100 text-cyan-700',
  'bg-indigo-100 text-indigo-700',
  'bg-orange-100 text-orange-700',
];

export default function ServicesOverview() {
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper>
      <AnimateIn animation="fadeUp">
        <SectionHeader
          title="Our Services"
          subtitle="From your first consultation to settling in your dream university — we handle every detail of your journey."
          align="center"
        />
      </AnimateIn>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.slice(0, 8).map(({ title, description, icon }, i) => {
          const Icon = iconMap[icon];
          return (
            <div
              key={title}
              className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                <div className={`w-12 h-12 rounded-xl ${colors[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <AnimateIn animation="scaleIn" delay={300}>
        <div className="text-center mt-10">
          <Button to="/services" variant="outline-blue">
            View All Services
            <ArrowRight size={16} />
          </Button>
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
