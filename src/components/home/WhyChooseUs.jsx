import { Shield, Target, HeartHandshake, TrendingUp } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const features = [
  {
    icon: Shield,
    title: '98% Visa Success Rate',
    description: 'Expert documentation and interview prep ensure near-perfect visa approvals across all destinations.',
    color: 'bg-primary-100 text-primary-700',
  },
  {
    icon: Target,
    title: 'Personalized Roadmaps',
    description: 'Custom academic plans based on your profile, budget, and career goals — no generic advice.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    icon: HeartHandshake,
    title: '1,500+ Partner Universities',
    description: 'Direct partnerships give access to exclusive programs, fee waivers, and priority admissions.',
    color: 'bg-sky-100 text-sky-700',
  },
  {
    icon: TrendingUp,
    title: 'End-to-End Support',
    description: 'From first counseling to post-arrival help — test prep, applications, visa, accommodation.',
    color: 'bg-rose-100 text-rose-700',
  },
];

export default function WhyChooseUs() {
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper className="bg-gray-50">
      <AnimateIn animation="fadeUp">
        <SectionHeader
          title="Why Students Choose Ancile Academy"
          subtitle="We combine deep expertise, genuine care, and proven processes to make your study abroad journey smooth and successful."
          align="center"
        />
      </AnimateIn>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, title, description, color }, i) => (
          <div
            key={title}
            className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${i * 120}ms` }}
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
    </SectionWrapper>
  );
}
