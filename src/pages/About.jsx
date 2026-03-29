import { Target, Eye, Heart, Users, Globe } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import Card, { IconBox } from '../components/shared/Card';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import { TEAM_MEMBERS, TIMELINE } from '../data/constants';
import ContactCTA from '../components/home/ContactCTA';

const values = [
  { icon: Heart, title: 'Student First', description: 'Every decision we make is guided by what\'s best for our students\' academic and career growth.' },
  { icon: Target, title: 'Excellence', description: 'We maintain the highest standards in counseling, documentation, and service delivery.' },
  { icon: Users, title: 'Integrity', description: 'Transparent guidance with honest assessments — we never over-promise or mislead.' },
  { icon: Globe, title: 'Global Perspective', description: 'Our diverse team brings worldwide experience and deep cultural understanding.' },
];

export default function About() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <PageBanner
        title="About Ancile Academy"
        subtitle="Empowering students to achieve their international education dreams since 2010."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateIn animation="fadeRight">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-50 text-primary-600 mb-4">
                Our Story
              </span>
            </AnimateIn>
            <AnimateIn animation="fadeRight" delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Transforming Lives Through International Education
              </h2>
            </AnimateIn>
            <AnimateIn animation="fadeRight" delay={200}>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, Ancile Academy was born from a simple belief: every student deserves access to world-class education, regardless of their background. What started as a small counseling center in New Delhi has grown into one of India's most trusted study abroad consultancies.
                </p>
                <p>
                  Over the past 14 years, we've helped more than 50,000 students secure admissions at top universities across 15+ countries. Our team of 100+ certified counselors, visa specialists, and academic advisors brings decades of collective experience in international education.
                </p>
                <p>
                  We pride ourselves on our personalized approach — each student receives a customized roadmap tailored to their unique academic profile, career goals, and financial situation. Our 98% visa success rate and thousands of scholarship successes stand testament to our commitment to excellence.
                </p>
              </div>
            </AnimateIn>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {[
              { value: '50K+', label: 'Students Placed', gradient: true },
              { value: '15+', label: 'Countries Covered', gradient: false },
              { value: '98%', label: 'Visa Success Rate', gradient: false },
              { value: '1,500+', label: 'Partner Universities', gradient: true },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`transition-all duration-700 ease-out ${statsInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'} ${i % 2 === 1 ? 'mt-8' : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`rounded-2xl p-6 ${stat.gradient ? (i === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white' : 'bg-gradient-to-br from-navy-800 to-navy-900 text-white') : 'bg-gray-50 border border-gray-100'}`}>
                  <div className={`text-4xl font-bold mb-1 ${stat.gradient ? '' : 'text-navy-900'}`}>{stat.value}</div>
                  <div className={`text-sm ${stat.gradient ? (i === 0 ? 'text-primary-100' : 'text-gray-300') : 'text-gray-500'}`}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            badge="Mission & Vision"
            title="What Drives Us Forward"
            subtitle="Our mission and vision shape every interaction, every counseling session, and every success story."
          />
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimateIn animation="fadeRight" delay={200}>
            <Card className="relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <IconBox className="mb-5">
                <Target size={24} />
              </IconBox>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize access to international education by providing expert, personalized, and affordable counseling services that empower students to study at the world's best universities and build successful global careers.
              </p>
            </Card>
          </AnimateIn>
          <AnimateIn animation="fadeLeft" delay={300}>
            <Card className="relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <IconBox className="mb-5 bg-gradient-to-br from-accent-500 to-accent-600 shadow-accent-500/25">
                <Eye size={24} />
              </IconBox>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted international education consultancy, known for transforming lives through education and creating a global community of successful professionals who drive positive change.
              </p>
            </Card>
          </AnimateIn>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <SectionHeader
            badge="Our Values"
            title="The Principles That Guide Us"
            subtitle="Our core values define who we are and how we serve our students."
          />
        </AnimateIn>
        <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`transition-all duration-700 ease-out ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Card className="text-center group h-full">
                <IconBox className="mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </IconBox>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </Card>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            badge="Our Team"
            title="Meet the Experts Behind Your Success"
            subtitle="Our experienced team is dedicated to guiding you through every step of your study abroad journey."
          />
        </AnimateIn>
        <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={member.name}
              className={`transition-all duration-700 ease-out ${teamInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Card className="text-center group overflow-hidden h-full">
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary-100 group-hover:border-primary-300 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <SectionHeader
            badge="Our Journey"
            title="Milestones That Define Us"
            subtitle="A timeline of our growth and achievements over the years."
          />
        </AnimateIn>
        <div ref={timelineRef} className="max-w-3xl mx-auto">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`flex gap-6 mb-8 last:mb-0 transition-all duration-700 ease-out ${
                timelineInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/25 shrink-0">
                  {item.year}
                </div>
                {i < TIMELINE.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-3" />}
              </div>
              <div className="pt-2 pb-8">
                <h3 className="text-lg font-bold text-navy-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
