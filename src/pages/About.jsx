import { Target, Eye, Heart, Users, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import { TEAM_MEMBERS, TIMELINE } from '../data/constants';
import ContactCTA from '../components/home/ContactCTA';

const values = [
  { icon: Heart, title: 'Student First', description: 'Every decision is guided by what\'s best for our students\' academic and career growth.', color: 'bg-rose-100 text-rose-700', bar: 'bg-rose-500', badge: '01' },
  { icon: Target, title: 'Excellence', description: 'We maintain the highest standards in counseling, documentation, and service delivery.', color: 'bg-primary-100 text-primary-700', bar: 'bg-primary-600', badge: '02' },
  { icon: Users, title: 'Integrity', description: 'Transparent guidance with honest assessments — we never over-promise or mislead.', color: 'bg-sky-100 text-sky-700', bar: 'bg-sky-500', badge: '03' },
  { icon: Globe, title: 'Global Perspective', description: 'Our diverse team brings worldwide experience and deep cultural understanding.', color: 'bg-amber-100 text-amber-700', bar: 'bg-amber-500', badge: '04' },
];

export default function About() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <PageBanner title="About Ancile Academy" subtitle="Empowering students to achieve their international education dreams since 2010." breadcrumbs={[{ label: 'About Us' }]} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimateIn animation="fadeRight">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About <span className="text-primary-600">Ancile Academy</span></h2>
            </AnimateIn>
            <AnimateIn animation="fadeRight" delay={100}>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>At Ancile Academy, our mission is to empower students to achieve their educational aspirations abroad. Founded in [Year], we have successfully guided over [Number] students to prestigious institutions worldwide.</p>
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
                <div className={`rounded-2xl p-6 ${stat.accent ? 'bg-primary-600 text-white' : 'bg-gray-50 border border-gray-100'}`}>
                  <div className={`text-4xl font-bold mb-1 ${stat.accent ? '' : 'text-gray-900'}`}>{stat.value}</div>
                  <div className={`text-sm ${stat.accent ? 'text-primary-200' : 'text-gray-500'}`}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #1d4ed8 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative">
          <AnimateIn animation="fadeUp"><SectionHeader title="What Drives Us Forward" align="center" /></AnimateIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateIn animation="fadeRight" delay={200}>
              <div className="h-full rounded-2xl bg-white shadow-lg shadow-primary-600/5 border border-gray-100 overflow-hidden" style={{ borderLeft: '4px solid #2563eb' }}>
                <div className="p-8">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-600/25">
                      <Target size={28} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -left-2 text-6xl font-bold text-primary-100 leading-none select-none">&ldquo;</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-500 leading-relaxed">To democratize access to international education by providing expert, personalized, and affordable counseling services that empower students to study at the world's best universities.</p>
                  <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-300" />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn animation="fadeLeft" delay={300}>
              <div className="h-full rounded-2xl bg-white shadow-lg shadow-amber-600/5 border border-gray-100 overflow-hidden" style={{ borderLeft: '4px solid #d97706' }}>
                <div className="p-8">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-600/25">
                      <Eye size={28} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -left-2 text-6xl font-bold text-amber-100 leading-none select-none">&ldquo;</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-500 leading-relaxed">To become the world's most trusted international education consultancy, known for transforming lives through education and creating a global community of successful professionals.</p>
                  <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(45deg, #94a3b8 25%, transparent 25%), linear-gradient(-45deg, #94a3b8 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #94a3b8 75%), linear-gradient(-45deg, transparent 75%, #94a3b8 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }} />
        <div className="relative">
          <AnimateIn animation="fadeUp"><SectionHeader title="The Principles That Guide Us" align="center" /></AnimateIn>
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, description, color, bar, badge }, i) => (
              <div key={title} className={`transition-all duration-700 ease-out ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full text-center group overflow-hidden">
                  <div className={`h-1.5 ${bar} group-hover:h-2.5 transition-all duration-300`} />
                  <div className="p-6 pt-5">
                    <div className="relative inline-block mb-5">
                      <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={26} />
                      </div>
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">{badge}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper id="our-team" className="bg-gray-50">
        <AnimateIn animation="fadeUp"><SectionHeader title="Meet Our Expert Team" align="center" /></AnimateIn>
        <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.name} className={`transition-all duration-700 ease-out ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className='w-full relative mt-4 h-[430px] group mx-auto dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col'>
                <div className='w-full rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='h-full w-full scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300'
                  />
                </div>
                <article className='relative overflow-hidden grow'>
                  <div className='info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300 text-center'>
                    <p className='md:text-2xl font-semibold'>{member.name}</p>
                    <p className='sm:text-base text-sm'>{member.role}</p>
                  </div>
                  <button className='absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3 text-[1.15rem] font-bold group-hover:scale-105 transition-all duration-300 w-full text-center'>
                    {member.role}
                  </button>
                </article>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Our Journey */}
      <OurJourney />

      <ContactCTA />
    </>
  );
}

function OurJourney() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 50%, #1d4ed8 100%)' }}>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Milestones That Define Us</h2>
          </motion.div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-start justify-center gap-4">
          {TIMELINE.map((item, i) => (
            <div key={item.year} className="flex items-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center text-center max-w-[240px]"
              >
                <div className="relative mb-6">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl shadow-blue-900/30">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 160 160">
                    <circle cx="80" cy="80" r="76" fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="2" strokeDasharray="8 6" />
                  </svg>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-bold shadow-lg">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <span className="text-blue-300 text-sm font-medium mb-2">{item.year}</span>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>

              {i < TIMELINE.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                  className="flex items-center mt-16 mx-2"
                >
                  <div className="w-12 h-px bg-gradient-to-r from-blue-400/60 to-blue-400/20" />
                  <ArrowRight size={20} className="text-blue-400/60 -ml-1" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden flex-col items-center gap-6">
          {TIMELINE.map((item, i) => (
            <div key={item.year}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-5">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl shadow-blue-900/30">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 128 128">
                    <circle cx="64" cy="64" r="60" fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="2" strokeDasharray="8 6" />
                  </svg>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-bold shadow-lg">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <span className="text-blue-300 text-sm font-medium mb-2">{item.year}</span>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">{item.description}</p>
              </motion.div>

              {i < TIMELINE.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.2 }}
                  className="flex flex-col items-center my-2"
                >
                  <div className="h-8 w-px bg-gradient-to-b from-blue-400/60 to-blue-400/20" />
                  <ArrowRight size={16} className="text-blue-400/60 rotate-90 -mt-1" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
