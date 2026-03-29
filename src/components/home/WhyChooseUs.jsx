import { Shield, Target, HeartHandshake, TrendingUp } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import Card, { IconBox } from '../shared/Card';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const features = [
  {
    icon: Shield,
    title: '98% Visa Success Rate',
    description: 'Our meticulous documentation process and expert interview preparation ensure near-perfect visa approval rates across all destinations.',
  },
  {
    icon: Target,
    title: 'Personalized Approach',
    description: 'No cookie-cutter advice. Each student receives a customized roadmap based on their unique academic profile, goals, and budget.',
  },
  {
    icon: HeartHandshake,
    title: '1,500+ University Partners',
    description: 'Direct partnerships with top universities worldwide give our students access to exclusive programs, fee waivers, and priority processing.',
  },
  {
    icon: TrendingUp,
    title: 'End-to-End Support',
    description: 'From initial counseling to post-arrival assistance, we\'re with you at every step — test prep, applications, visa, accommodation, and beyond.',
  },
];

export default function WhyChooseUs() {
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper>
      <AnimateIn animation="fadeUp">
        <SectionHeader
          badge="Why Choose Us"
          title="Your Success Is Our Mission"
          subtitle="We combine deep expertise, genuine care, and proven processes to make your study abroad journey smooth and successful."
        />
      </AnimateIn>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, description }, i) => (
          <div
            key={title}
            className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <Card className="text-center group h-full">
              <IconBox className="mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
              </IconBox>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
