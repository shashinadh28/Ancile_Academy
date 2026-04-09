import { useState } from 'react';
import { Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin, CheckCircle } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import FAQAccordion from '../components/services/FAQAccordion';
import ContactCTA from '../components/home/ContactCTA';
import { BackgroundRippleEffect } from '../components/ui/background-ripple-effect';
import { SERVICES } from '../data/constants';

const iconMap = { Compass, GraduationCap, FileText, Stamp, BookOpen, Award, Plane, MapPin };
const colors = ['bg-primary-100 text-primary-700','bg-sky-100 text-sky-700','bg-emerald-100 text-emerald-700','bg-amber-100 text-amber-700'];

const processSteps = [
  { step: '01', title: 'Initial Consultation', description: 'Free 30-minute session to understand your goals, assess your profile, and outline a personalized plan.' },
  { step: '02', title: 'Profile Evaluation', description: 'Detailed analysis of your academic background, test scores, work experience, and extracurriculars.' },
  { step: '03', title: 'University Shortlisting', description: 'Curated list of best-fit universities based on your profile, preferences, and career objectives.' },
  { step: '04', title: 'Application & Visa', description: 'End-to-end support for applications, documentation, SOP writing, and visa processing.' },
];

export default function ServicesPage() {
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive support at every stage of your study abroad journey."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* ── Services alternating layout ── */}
      <section className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }} />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateIn animation="fadeUp">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block bg-primary-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Comprehensive{' '}
                <span className="relative inline-block">
                  <span className="text-primary-600">Guidance</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-primary-600 opacity-60" />
                </span>
                {' '}Services
              </h2>
              <p className="text-gray-500 leading-relaxed mt-3">
                Personalized support at every step of your journey to study abroad.
              </p>
            </div>
          </AnimateIn>

          <div className="flex flex-col gap-7 max-w-5xl mx-auto">
            {SERVICES.slice(0, 4).map(({ title, headline, fullDescription, icon, image }, i) => {
              const Icon = iconMap[icon];
              const isReverse = i % 2 !== 0;
              const isHovered = hovered === i;
              const isOther = hovered !== null && !isHovered;

              return (
                <AnimateIn key={title} animation="fadeUp" delay={i * 80}>
                  <div
                    className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer
                      ${isHovered ? 'border-primary-400 shadow-2xl z-10' : 'border-gray-100 shadow-md'}
                      ${isOther ? 'opacity-60 blur-[1px]' : ''}`}
                    style={isHovered ? { transform: 'scale(1.02)' } : { transform: 'scale(1)' }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className={`flex flex-col lg:flex-row ${isReverse ? 'lg:flex-row-reverse' : ''} min-h-[260px]`}>
                      <div className="lg:w-5/12 overflow-hidden bg-gray-50">
                        <img
                          src={image}
                          alt={title}
                          className="w-full h-56 lg:h-full object-cover"
                          style={{
                            transform: isHovered ? 'scale(1.07)' : 'scale(1)',
                            transition: 'transform 0.5s ease',
                          }}
                        />
                      </div>
                      <div className="lg:w-7/12 p-7 md:p-9 flex flex-col justify-center bg-white">
                        <div className="flex items-start gap-4 mb-5">
                          <div className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center shadow-sm transition-colors duration-300 ${isHovered ? 'bg-primary-50' : 'bg-gray-50'}`}>
                            <Icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? 'text-primary-600' : 'text-gray-600'}`} strokeWidth={2} />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary-400 mb-1">{title}</p>
                            <h3 className={`text-xl font-bold leading-tight transition-colors duration-300 ${isHovered ? 'text-primary-600' : 'text-gray-800'}`}>
                              {headline}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">{fullDescription}</p>
                        <ul className="space-y-2.5">
                          {['Personalized guidance', 'Expert consultants', 'Proven track record'].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div
                          className="mt-6 h-0.5 rounded-full transition-all duration-500"
                          style={{
                            width: isHovered ? '100%' : '0%',
                            background: 'linear-gradient(90deg, #2563eb, #6366f1)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <BackgroundRippleEffect rows={10} cols={30} cellSize={52} />
        <div className="container-custom relative z-10">
          <AnimateIn animation="fadeUp">
            <SectionHeader title="How We Work" subtitle="A simple, transparent 4-step process." align="center" />
          </AnimateIn>
          <div ref={processRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map(({ step, title, description }, i) => (
              <div
                key={step}
                className={`transition-all duration-700 ease-out ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 hover:border-primary-100 transition-all duration-300 h-full overflow-hidden">
                  <span className="text-6xl font-black text-primary-50 group-hover:text-primary-100 absolute -top-1 right-3 leading-none select-none transition-colors duration-300">
                    {step}
                  </span>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-primary-500 transition-all duration-500 rounded-b-2xl" />
                  <div className="relative z-10 mt-10">
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <SectionHeader title="Frequently Asked Questions" align="center" />
        </AnimateIn>
        <FAQAccordion />
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
