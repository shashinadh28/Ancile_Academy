import { BookOpen, Target, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import Card, { IconBox } from '../components/shared/Card';
import Button from '../components/shared/Button';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import ContactCTA from '../components/home/ContactCTA';

const exams = [
  {
    name: 'IELTS',
    full: 'International English Language Testing System',
    description: 'The most widely accepted English proficiency test for study, work, and migration to English-speaking countries.',
    features: ['Academic & General Training formats', 'Band score 0-9', 'Accepted by 11,000+ organizations', 'Paper & computer-based options'],
    color: 'bg-red-100 text-red-700',
  },
  {
    name: 'TOEFL',
    full: 'Test of English as a Foreign Language',
    description: 'Preferred by North American universities, TOEFL measures your ability to use and understand English at the university level.',
    features: ['Internet-based test (iBT)', 'Score range 0-120', 'Accepted by 12,000+ institutions', 'Reading, Listening, Speaking, Writing'],
    color: 'bg-primary-100 text-primary-700',
  },
  {
    name: 'PTE Academic',
    full: 'Pearson Test of English Academic',
    description: 'A computer-based English language test trusted by universities, colleges, and governments around the world.',
    features: ['AI-scored for fairness', 'Results in 2 business days', 'Accepted for Australian visas', 'Flexible test dates'],
    color: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Duolingo English Test',
    full: 'Duolingo English Test',
    description: 'A modern, convenient, and affordable English proficiency test you can take from home in under an hour.',
    features: ['Take from home, anytime', 'Results in 48 hours', 'Accepted by 4,500+ programs', 'Adaptive testing format'],
    color: 'bg-green-100 text-green-700',
  },
];

const whyUs = [
  { icon: Users, title: 'Expert Trainers', desc: 'Certified instructors with years of experience in English proficiency test coaching.' },
  { icon: Target, title: 'Personalized Plans', desc: 'Customized study plans based on your current level and target score.' },
  { icon: Clock, title: 'Flexible Scheduling', desc: 'Online and offline batches with weekend and weekday options.' },
  { icon: BookOpen, title: 'Comprehensive Material', desc: 'Access to official practice tests, study guides, and mock exam sessions.' },
];

export default function EnglishCoaching() {
  const [examsRef, examsInView] = useInView({ threshold: 0.05 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <PageBanner
        title="English Coaching"
        subtitle="Ace your English proficiency exams with expert coaching from Ancile Academy."
        breadcrumbs={[{ label: 'English Coaching' }]}
      />

      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <SectionHeader
            title="Prepare for Your English Proficiency Test"
            subtitle="We offer comprehensive coaching for all major English language tests required for studying abroad. Our expert trainers will help you achieve the scores you need."
            align="center"
          />
        </AnimateIn>
        <div ref={examsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exams.map(({ name, full, description, features, color }, i) => (
            <div
              key={name}
              className={`transition-all duration-700 ease-out ${examsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Card className="h-full" hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center font-bold text-sm`}>{name}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                    <p className="text-xs text-gray-400">{full}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-primary-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <AnimateIn animation="fadeUp">
          <SectionHeader title="Why Train With Us?" align="center" />
        </AnimateIn>
        <div ref={whyRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`transition-all duration-700 ease-out ${whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <AnimateIn animation="scaleIn" delay={300}>
          <div className="text-center mt-10">
            <Button to="/get-started" size="lg">
              Enroll Now — Get a Free Assessment
              <ArrowRight size={16} />
            </Button>
          </div>
        </AnimateIn>
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
