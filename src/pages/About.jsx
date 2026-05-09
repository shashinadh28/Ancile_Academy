import { useState } from 'react';
import { Target, Eye, Heart, Users, Globe, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import { TEAM_MEMBERS, TIMELINE } from '../data/constants';
import ContactCTA from '../components/home/ContactCTA';

const values = [
  { icon: Heart, title: 'Student First', description: 'Every decision is guided by what\'s best for our students\' academic and career growth.', accent: '#2563eb', border: 'border-blue-200' },
  { icon: Target, title: 'Excellence', description: 'We maintain the highest standards in counseling, documentation, and service delivery.', accent: '#0ea5e9', border: 'border-sky-200' },
  { icon: Users, title: 'Integrity', description: 'Transparent guidance with honest assessments — we never over-promise or mislead.', accent: '#2563eb', border: 'border-blue-200' },
  { icon: Globe, title: 'Global Perspective', description: 'Our diverse team brings worldwide experience and deep cultural understanding.', accent: '#0ea5e9', border: 'border-sky-200' },
];

export default function About() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [teamRef, teamInView] = useInView({ threshold: 0.1 });
  const [hoveredValue, setHoveredValue] = useState(null);
  const [expandedMember, setExpandedMember] = useState(null);

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
                <p>At Ancile Academy, our mission is to empower students to achieve their educational aspirations abroad. Founded in 2010, we have successfully guided students to prestigious institutions worldwide.</p>
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

      {/* Values — WhyPartner-style hover cards */}
      <SectionWrapper className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(37,99,235,0.04) 0%, transparent 60%)' }} />
        <div className="relative">
          <AnimateIn animation="fadeUp"><SectionHeader title="The Principles That Guide Us" align="center" /></AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => {
              const Icon = item.icon;
              const isHovered = hoveredValue === i;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className={`relative p-7 rounded-2xl border text-center flex flex-col items-center cursor-pointer transition-all duration-300 overflow-hidden ${item.border}`}
                  style={{
                    background: isHovered ? item.accent : '#fff',
                    boxShadow: isHovered ? `0 20px 60px ${item.accent}30` : '0 2px 20px rgba(0,0,0,0.06)',
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 shadow-md"
                    style={{ background: isHovered ? 'rgba(255,255,255,0.2)' : item.accent }}>
                    <Icon size={28} className="text-white" strokeWidth={2} />
                  </div>
                  <h3 className={`font-black text-xl mb-1.5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${isHovered ? 'text-white/80' : 'text-gray-500'}`}>
                    {item.description}
                  </p>
                  <div className={`absolute bottom-0 left-0 w-full h-1 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    style={{ background: 'rgba(255,255,255,0.3)' }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper id="our-team" className="bg-gray-50">
        <AnimateIn animation="fadeUp"><SectionHeader title="Meet Our Expert Team" align="center" /></AnimateIn>
        <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.name} className={`transition-all duration-700 ease-out ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className='w-full relative mt-4 group mx-auto bg-white border border-gray-200 rounded-2xl text-black flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
                <div className='w-full aspect-[4/5] overflow-hidden bg-gray-100'>
                  <img src={member.image} alt={member.name} className='h-full w-full object-cover object-top scale-105 grayscale group-hover:grayscale-0 group-hover:scale-100 transition-all duration-500' />
                </div>
                <article className='relative p-5 text-center'>
                  <div className='info transition-all duration-300'>
                    {/* Name + LinkedIn icon */}
                    <div className='flex items-center justify-center gap-2'>
                      <a
                        href={member.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-lg md:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200'
                        title={`${member.name} on LinkedIn`}
                      >
                        {member.name}
                      </a>
                      <a
                        href={member.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        title={`${member.name} on LinkedIn`}
                        className='flex-shrink-0 text-[#0077B5] hover:text-[#005885] transition-colors duration-200'
                      >
                        <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                        </svg>
                      </a>
                    </div>
                    <p className='text-sm text-gray-500 mt-1 leading-relaxed min-h-[44px]'>{member.role}</p>
                  </div>
                  {/* View More button */}
                  <button
                    onClick={() => setExpandedMember(member)}
                    className='mt-3 w-full py-2 px-4 text-sm font-semibold rounded-xl border border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-250'
                  >
                    View More
                  </button>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* ── Team Member Modal ── */}
        <AnimatePresence>
          {expandedMember && (
            <>
              {/* Blur overlay */}
              <motion.div
                key='overlay'
                className='fixed inset-0 z-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setExpandedMember(null)}
                style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
              />
              {/* Modal card */}
              <motion.div
                key='modal'
                className='fixed z-50 bg-white rounded-3xl shadow-2xl overflow-hidden'
                style={{
                  top: '50%',
                  left: '50%',
                  width: 'min(520px, 92vw)',
                  maxHeight: '88vh',
                  overflowY: 'auto',
                }}
                initial={{ opacity: 0, scale: 0.7, x: '-50%', y: '-50%' }}
                animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                exit={{ opacity: 0, scale: 0.7, x: '-50%', y: '-50%' }}
                transition={{ type: 'spring', stiffness: 340, damping: 28 }}
              >
                {/* Close button */}
                <button
                  onClick={() => setExpandedMember(null)}
                  className='absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors duration-200'
                >
                  <X size={18} />
                </button>

                {/* Photo */}
                <div className='w-full aspect-[16/9] bg-gray-100 overflow-hidden'>
                  <img
                    src={expandedMember.image}
                    alt={expandedMember.name}
                    className='w-full h-full object-cover object-top'
                  />
                </div>

                {/* Content */}
                <div className='p-7'>
                  {/* Name + LinkedIn */}
                  <div className='flex items-center gap-2 mb-1'>
                    <h3 className='text-2xl font-bold text-gray-900'>{expandedMember.name}</h3>
                    <a
                      href={expandedMember.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[#0077B5] hover:text-[#005885] transition-colors duration-200 flex-shrink-0'
                      title='LinkedIn Profile'
                    >
                      <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                      </svg>
                    </a>
                  </div>
                  <span className='inline-block text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4'>
                    {expandedMember.role}
                  </span>
                  <p className='text-gray-600 leading-relaxed text-[15px]'>{expandedMember.description}</p>

                  {/* LinkedIn CTA button */}
                  <a
                    href={expandedMember.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0077B5] text-white text-sm font-semibold hover:bg-[#005885] transition-colors duration-200'
                  >
                    <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                    View LinkedIn Profile
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </SectionWrapper>

      {/* Our Journey — HiringProcess-style with white background */}
      <OurJourney />

      <ContactCTA />
    </>
  );
}

function OurJourney() {
  return (
    <section className="pt-24 pb-24 lg:pt-28 lg:pb-28 relative overflow-hidden bg-white">
      {/* Box grid background */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }} 
      />
      
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-sky-400 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        <motion.div className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <motion.span
            className="inline-block bg-primary-600 text-white text-xs font-bold px-6 py-2.5 rounded-full uppercase tracking-widest mb-5 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(37,99,235,0.3)' }}
            transition={{ duration: 0.3 }}>
            Our Journey
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            <span className="text-primary-600">Milestones</span> That Define Us
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 items-center">
          {TIMELINE.map((step, index) => (
            <div key={step.year} className="contents">
              <motion.div className="flex-1 relative"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    <motion.div
                      className="w-48 h-48 rounded-full border-[3px] border-dashed absolute inset-0"
                      style={{ borderColor: 'rgba(37,99,235,0.3)' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} />
                    <div className="w-48 h-48 rounded-full flex items-center justify-center relative">
                      <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl">
                        <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-2 border-white">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center px-2">
                  <motion.h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1"
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.03, color: '#2563eb' }}>
                    {step.title}
                  </motion.h3>
                  <span className="text-primary-500 text-sm font-semibold">{step.year}</span>
                  <motion.p className="text-gray-500 leading-relaxed text-sm lg:text-base max-w-xs mx-auto mt-2"
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}>
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>

              {index < TIMELINE.length - 1 && (
                <motion.div className="hidden lg:flex items-center justify-center px-2 -mt-16"
                  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.4, type: 'spring', bounce: 0.3 }}>
                  <div className="relative">
                    <motion.div animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                      <ArrowRight className="w-8 h-8 text-primary-500" strokeWidth={2} />
                    </motion.div>
                    <motion.div className="absolute inset-0 w-8 h-8 bg-primary-500 rounded-full opacity-15 blur-lg"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.4, 0.15] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
                  </div>
                </motion.div>
              )}
              {index < TIMELINE.length - 1 && (
                <motion.div className="lg:hidden flex justify-center my-4"
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.15 + 0.8 }}>
                  <motion.div animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                    <ArrowRight className="w-6 h-6 text-primary-500 rotate-90" strokeWidth={2} />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
