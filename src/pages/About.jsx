import { Target, Eye, Heart, Users, Globe } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import Card, { IconBox } from '../components/shared/Card';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import { TEAM_MEMBERS, TIMELINE } from '../data/constants';
import ContactCTA from '../components/home/ContactCTA';

const values = [
  { icon: Heart, title: 'Student First', description: 'Every decision is guided by what\'s best for our students\' academic and career growth.', color: 'bg-rose-100 text-rose-700' },
  { icon: Target, title: 'Excellence', description: 'We maintain the highest standards in counseling, documentation, and service delivery.', color: 'bg-primary-100 text-primary-700' },
  { icon: Users, title: 'Integrity', description: 'Transparent guidance with honest assessments — we never over-promise or mislead.', color: 'bg-sky-100 text-sky-700' },
  { icon: Globe, title: 'Global Perspective', description: 'Our diverse team brings worldwide experience and deep cultural understanding.', color: 'bg-amber-100 text-amber-700' },
];

export default function About() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <PageBanner title="About Ancile Academy" subtitle="Empowering students to achieve their international education dreams since 2010." breadcrumbs={[{ label: 'About Us' }]} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateIn animation="fadeRight">
              <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mb-6">Transforming Lives Through <span className="text-primary-600">International Education</span></h2>
            </AnimateIn>
            <AnimateIn animation="fadeRight" delay={100}>
              <div className="space-y-4 text-warm-500 leading-relaxed">
                <p>Founded in 2010, Ancile Academy was born from a simple belief: every student deserves access to world-class education. What started as a small counseling center has grown into one of India's most trusted study abroad consultancies.</p>
                <p>Over 14 years, we've helped more than 50,000 students secure admissions at top universities across 15+ countries. Our 100+ certified counselors bring decades of collective experience.</p>
                <p>Our 98% visa success rate and thousands of scholarship successes stand testament to our commitment to excellence.</p>
              </div>
            </AnimateIn>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {[
              { value: '50K+', label: 'Students Placed', accent: true },
              { value: '15+', label: 'Countries Covered', accent: false },
              { value: '98%', label: 'Visa Success Rate', accent: false },
              { value: '1,500+', label: 'Partner Universities', accent: true },
            ].map((stat, i) => (
              <div key={stat.label} className={`transition-all duration-700 ease-out ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${i % 2 === 1 ? 'mt-8' : ''}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className={`rounded-2xl p-6 ${stat.accent ? 'bg-primary-600 text-white' : 'bg-warm-50 border border-warm-100'}`}>
                  <div className={`text-4xl font-bold mb-1 ${stat.accent ? '' : 'text-warm-900'}`}>{stat.value}</div>
                  <div className={`text-sm ${stat.accent ? 'text-primary-200' : 'text-warm-500'}`}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-warm-50">
        <AnimateIn animation="fadeUp"><SectionHeader title="What Drives Us Forward" align="center" /></AnimateIn>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimateIn animation="fadeRight" delay={200}>
            <Card className="h-full" hover={false}>
              <IconBox className="mb-5 bg-primary-100 text-primary-700"><Target size={22} /></IconBox>
              <h3 className="text-xl font-bold text-warm-900 mb-3">Our Mission</h3>
              <p className="text-warm-500 leading-relaxed">To democratize access to international education by providing expert, personalized, and affordable counseling services that empower students to study at the world's best universities.</p>
            </Card>
          </AnimateIn>
          <AnimateIn animation="fadeLeft" delay={300}>
            <Card className="h-full" hover={false}>
              <IconBox className="mb-5 bg-amber-100 text-amber-700"><Eye size={22} /></IconBox>
              <h3 className="text-xl font-bold text-warm-900 mb-3">Our Vision</h3>
              <p className="text-warm-500 leading-relaxed">To become the world's most trusted international education consultancy, known for transforming lives through education and creating a global community of successful professionals.</p>
            </Card>
          </AnimateIn>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <AnimateIn animation="fadeUp"><SectionHeader title="The Principles That Guide Us" align="center" /></AnimateIn>
        <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon: Icon, title, description, color }, i) => (
            <div key={title} className={`transition-all duration-700 ease-out ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="bg-white rounded-2xl p-6 border border-warm-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full text-center group">
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}><Icon size={22} /></div>
                <h3 className="text-base font-bold text-warm-900 mb-2">{title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-warm-50">
        <AnimateIn animation="fadeUp"><SectionHeader title="Meet the Experts Behind Your Success" align="center" /></AnimateIn>
        <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.name} className={`transition-all duration-700 ease-out ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="bg-white rounded-2xl p-6 border border-warm-100 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary-100 group-hover:border-primary-300 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-warm-900">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-warm-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <AnimateIn animation="fadeUp"><SectionHeader title="Milestones That Define Us" align="center" /></AnimateIn>
        <div ref={timelineRef} className="max-w-3xl mx-auto">
          {TIMELINE.map((item, i) => (
            <div key={item.year} className={`flex gap-6 mb-8 last:mb-0 transition-all duration-700 ease-out ${timelineInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${i * 180}ms` }}>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-600/25 shrink-0">{item.year}</div>
                {i < TIMELINE.length - 1 && <div className="w-0.5 flex-1 bg-warm-200 mt-3" />}
              </div>
              <div className="pt-2 pb-8">
                <h3 className="text-lg font-bold text-warm-900 mb-1">{item.title}</h3>
                <p className="text-warm-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
