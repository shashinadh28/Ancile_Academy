import { Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin, CheckCircle } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import { IconBox } from '../components/shared/Card';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import FAQAccordion from '../components/services/FAQAccordion';
import ContactCTA from '../components/home/ContactCTA';
import { SERVICES } from '../data/constants';

const iconMap = { Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin };

const processSteps = [
  { step: '01', title: 'Initial Consultation', description: 'Free 30-minute session to understand your goals, assess your profile, and outline a personalized plan.' },
  { step: '02', title: 'Profile Evaluation', description: 'Detailed analysis of your academic background, test scores, work experience, and extracurriculars.' },
  { step: '03', title: 'University Shortlisting', description: 'Curated list of best-fit universities based on your profile, preferences, and career objectives.' },
  { step: '04', title: 'Application & Visa', description: 'End-to-end support for applications, documentation, SOP writing, and visa processing.' },
];

export default function ServicesPage() {
  const [processRef, processInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive support at every stage of your study abroad journey."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <SectionHeader
            badge="What We Offer"
            title="End-to-End Study Abroad Solutions"
            subtitle="From initial counseling to post-arrival assistance, we provide everything you need for a successful international education experience."
          />
        </AnimateIn>
        <div className="space-y-16">
          {SERVICES.map(({ title, description, icon }, i) => {
            const Icon = iconMap[icon];
            const isReverse = i % 2 !== 0;
            return (
              <AnimateIn key={title} animation={isReverse ? 'fadeLeft' : 'fadeRight'} delay={100} duration="slow">
                <div className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
                  <div className="flex-1">
                    <IconBox className="mb-5">
                      <Icon size={24} />
                    </IconBox>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
                    <ul className="space-y-2">
                      {['Personalized guidance', 'Expert consultants', 'Proven track record'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-2xl border border-gray-100 p-8 md:p-12 flex items-center justify-center min-h-[200px]">
                      <Icon size={80} className="text-primary-200" />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="A simple, transparent 4-step process to get you from here to your dream university."
          />
        </AnimateIn>
        <div ref={processRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map(({ step, title, description }, i) => (
            <div
              key={step}
              className={`transition-all duration-700 ease-out ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="text-5xl font-bold text-primary-100 absolute top-4 right-4">{step}</span>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-navy-900 mb-2 mt-8">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Find answers to the most common questions about studying abroad."
          />
        </AnimateIn>
        <FAQAccordion />
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
