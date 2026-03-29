import { ArrowRight, Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import Card, { IconBox } from '../shared/Card';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { SERVICES } from '../../data/constants';

const iconMap = { Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin };

export default function ServicesOverview() {
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper>
      <AnimateIn animation="fadeUp">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Study Abroad Services"
          subtitle="From your first consultation to settling in your dream university — we handle every detail of your journey."
        />
      </AnimateIn>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.slice(0, 8).map(({ title, description, icon }, i) => {
          const Icon = iconMap[icon];
          return (
            <div
              key={title}
              className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Card className="group h-full">
                <IconBox className="mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </IconBox>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </Card>
            </div>
          );
        })}
      </div>
      <AnimateIn animation="scaleIn" delay={400}>
        <div className="text-center mt-10">
          <Button to="/services" variant="secondary">
            View All Services
            <ArrowRight size={16} />
          </Button>
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
