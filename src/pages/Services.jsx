import { Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin, CheckCircle } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import FAQAccordion from '../components/services/FAQAccordion';
import ContactCTA from '../components/home/ContactCTA';
import { SERVICES } from '../data/constants';

const iconMap = { Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin };
const colors = ['bg-violet-100 text-violet-600','bg-blue-100 text-blue-600','bg-emerald-100 text-emerald-600','bg-amber-100 text-amber-600','bg-rose-100 text-rose-600','bg-cyan-100 text-cyan-600','bg-indigo-100 text-indigo-600','bg-orange-100 text-orange-600'];

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
      <PageBanner title="Our Services" subtitle="Comprehensive support at every stage of your study abroad journey." breadcrumbs={[{ label: 'Services' }]} />

      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <SectionHeader title="End-to-End Study Abroad Solutions" subtitle="From initial counseling to post-arrival assistance, we provide everything you need for a successful international education experience." align="center" />
        </AnimateIn>
        <div className="space-y-20">
          {SERVICES.map(({ title, description, icon }, i) => {
            const Icon = iconMap[icon];
            const isReverse = i % 2 !== 0;
            return (
              <AnimateIn key={title} animation={isReverse ? 'fadeLeft' : 'fadeRight'} duration="slow">
                <div className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-14`}>
                  <div className="flex-1">
                    <div className={`w-12 h-12 rounded-xl ${colors[i]} flex items-center justify-center mb-5`}><Icon size={22} /></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-4">{description}</p>
                    <ul className="space-y-2">
                      {['Personalized guidance', 'Expert consultants', 'Proven track record'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-accent-500 shrink-0" />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-2xl border border-gray-100 p-10 md:p-14 flex items-center justify-center min-h-[200px]">
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
        <AnimateIn animation="fadeUp"><SectionHeader title="How We Work" subtitle="A simple, transparent 4-step process to get you from here to your dream university." align="center" /></AnimateIn>
        <div ref={processRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map(({ step, title, description }, i) => (
            <div key={step} className={`transition-all duration-700 ease-out ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="text-5xl font-bold text-primary-100 absolute top-4 right-4">{step}</span>
                <div className="relative z-10"><h3 className="text-base font-bold text-gray-900 mb-2 mt-8">{title}</h3><p className="text-sm text-gray-500 leading-relaxed">{description}</p></div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <AnimateIn animation="fadeUp"><SectionHeader title="Frequently Asked Questions" align="center" /></AnimateIn>
        <FAQAccordion />
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
