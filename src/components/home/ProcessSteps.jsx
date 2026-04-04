import { useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * ProcessSteps — accordion/expand gallery layout.
 * Collapsed strips expand on hover to reveal title, description & step badge.
 * Adapted from ui-layouts accordion gallery for Ancile Academy's process steps.
 */

const steps = [
  {
    id: 1,
    image: '/Our_Process/career_counsling.webp',
    title: 'Student Profile Analysis',
    description:
      'We map your academics, goals, and budget to shape a personalised roadmap for your study abroad journey.',
  },
  {
    id: 2,
    image: '/Our_Process/course_university_selection.webp',
    title: 'Course & University Selection',
    description:
      'Shortlisted programs and institutions that perfectly match your aspirations and career goals.',
  },
  {
    id: 3,
    image: '/Our_Process/financialaid_and_scholarship.webp',
    title: 'Financial Aid & Scholarships',
    description:
      'Expert guidance on funding opportunities, scholarships, and realistic cost planning for your education.',
  },
  {
    id: 4,
    image: '/Our_Process/application_and_admission_assistance.webp',
    title: 'Application & Admission',
    description:
      'Documents, deadlines, and submissions — all handled with precision to maximise your admission chances.',
  },
  {
    id: 5,
    image: '/Our_Process/visa_guidancee.webp',
    title: 'Visa Guidance',
    description:
      'Complete documentation support and interview preparation for a smooth, confident visa process.',
  },
  {
    id: 6,
    image: '/Our_Process/pre_departure_briefing.webp',
    title: 'Pre-Departure Briefing',
    description:
      'Travel, housing essentials, and cultural tips so you arrive in your new country fully prepared.',
  },
  {
    id: 7,
    image: '/Our_Process/post_arrival.webp',
    title: 'Post-Arrival Assistance',
    description:
      'Ongoing support after landing — settling in, local orientation, and your first steps abroad.',
  },
];

const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      delayChildren: 0.15,
      staggerChildren: 0.08,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function ProcessSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Soft bg blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] bg-primary-50/70 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary-50/50 rounded-full blur-[80px]" />
      </div>
      <div className="container-custom relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-12 md:mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold tracking-wider uppercase mb-4">
              Step by step process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4 text-gray-900">
              We&apos;re with you at{' '}
              <span className="text-primary-600">every step</span>{' '}
              of your study abroad journey.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-500">
              A clear, guided path from profile to post-arrival — structured support at every milestone.
            </p>
          </div>
        </motion.div>

        {/* ── Desktop: Accordion Gallery ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex gap-2 pb-4 pt-2 w-full justify-center h-[460px]"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-2xl overflow-hidden shrink-0 cursor-pointer"
              style={{
                width: activeIndex === i ? 500 : 64,
                height: 460,
                transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
              }}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {/* Image */}
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
                style={{ minWidth: activeIndex === i ? 500 : 64 }}
              />

              {/* Step number — collapsed */}
              {activeIndex !== i && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary-900/30 hover:bg-primary-900/20 transition-colors">
                  <div
                    className="text-white font-bold text-sm"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', letterSpacing: '0.06em' }}
                  >
                    {String(step.id).padStart(2, '0')}
                  </div>
                </div>
              )}

              {/* Expanded overlay */}
              <AnimatePresence mode="wait">
                {activeIndex === i && (
                  <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="absolute inset-0 flex flex-col justify-end p-8 overflow-hidden"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.4) 45%, transparent 75%)',
                    }}
                  >
                    <motion.div variants={childVariant} className="mb-3">
                      <span className="inline-block bg-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                        Step {String(step.id).padStart(2, '0')}
                      </span>
                    </motion.div>
                    <motion.h3
                      variants={childVariant}
                      className="text-white text-2xl font-bold leading-snug mb-2"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      variants={childVariant}
                      className="text-white/80 text-sm leading-relaxed max-w-lg"
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Mobile / tablet: vertical list ── */}
        <div className="relative lg:hidden">
          <div
            className="absolute left-[38px] top-3 bottom-3 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200"
            aria-hidden
          />
          <ol className="relative space-y-6">
            {steps.map((step, i) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-5 items-center"
              >
                {/* Thumb */}
                <div className="relative z-10 shrink-0 w-[76px] h-[76px] rounded-2xl overflow-hidden ring-2 ring-primary-200 shadow-md">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-[10px] font-bold shadow">
                    {step.id}
                  </div>
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary-600 mb-0.5">
                    Step {String(step.id).padStart(2, '0')}
                  </p>
                  <h3 className="text-[15px] font-bold text-gray-900 leading-snug">{step.title}</h3>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

      </div>
    </section >
  );
}
