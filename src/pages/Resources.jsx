import { useState } from 'react';
import { BookOpen, FileText, Video, Download, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import Button from '../components/shared/Button';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import ContactCTA from '../components/home/ContactCTA';

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Study Guides',
    description: 'Comprehensive guides for every step of your study abroad journey — from choosing a country to settling in.',
    items: ['Country-specific education guides', 'University ranking breakdowns', 'Course selection strategies', 'Application timeline planners'],
    accent: '#2563eb',
    border: 'border-blue-200',
  },
  {
    icon: FileText,
    title: 'SOP & LOR Templates',
    description: 'Expert-crafted templates and tips to help you write compelling Statements of Purpose and secure strong recommendation letters.',
    items: ['SOP writing framework', 'Sample SOPs by program', 'LOR request templates', 'Resume/CV formats for applications'],
    accent: '#d97706',
    border: 'border-amber-200',
  },
  {
    icon: Video,
    title: 'Webinars & Workshops',
    description: 'Free recorded sessions and live workshops covering test prep, visa interviews, scholarship applications, and more.',
    items: ['IELTS/TOEFL strategy sessions', 'Visa interview mock prep', 'Scholarship application workshops', 'Pre-departure orientation'],
    accent: '#0ea5e9',
    border: 'border-sky-200',
  },
  {
    icon: Download,
    title: 'Checklists & Tools',
    description: 'Downloadable checklists, budget calculators, and planning tools to keep your study abroad journey organized.',
    items: ['Visa document checklists by country', 'Budget & cost-of-living calculator', 'Application tracker spreadsheet', 'Pre-departure packing checklist'],
    accent: '#059669',
    border: 'border-emerald-200',
  },
];

const quickLinks = [
  { label: 'IELTS Official Website', url: 'https://www.ielts.org' },
  { label: 'TOEFL Official Website', url: 'https://www.ets.org/toefl' },
  { label: 'PTE Academic', url: 'https://www.pearsonpte.com' },
  { label: 'GRE Official Website', url: 'https://www.ets.org/gre' },
  { label: 'GMAT Official Website', url: 'https://www.mba.com' },
  { label: 'QS World University Rankings', url: 'https://www.topuniversities.com' },
];

export default function Resources() {
  const [linksRef, linksInView] = useInView({ threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <PageBanner
        title="Resources"
        subtitle="Stay informed with the latest tips, guides, and tools to help you prepare for your study abroad journey."
        breadcrumbs={[{ label: 'Resources' }]}
      />

      {/* ── "Everything You Need to Prepare" section with box grid bg ── */}
      <section className="relative overflow-hidden section-padding">
        {/* Box grid background at 50% opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          }}
        />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 65%)' }} />

        <div className="container-custom relative z-10">
          <AnimateIn animation="fadeUp">
            <SectionHeader
              title="Everything You Need to Prepare"
              subtitle="Access our curated collection of study abroad resources, guides, and tools — all designed to make your journey smoother."
              align="center"
            />
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceCategories.map(({ icon: Icon, title, description, items, accent, border }, i) => {
              const isHovered = hoveredCard === i;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative p-7 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${border}`}
                  style={{
                    background: isHovered ? accent : '#fff',
                    boxShadow: isHovered ? `0 20px 60px ${accent}30` : '0 2px 20px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 shadow-md"
                    style={{ background: isHovered ? 'rgba(255,255,255,0.2)' : accent }}
                  >
                    <Icon size={24} className="text-white" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className={`font-black text-xl mb-2 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${isHovered ? 'text-white/80' : 'text-gray-500'}`}>
                    {description}
                  </p>

                  {/* Item list */}
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300"
                          style={{ background: isHovered ? 'rgba(255,255,255,0.7)' : accent }}
                        />
                        <span className={`transition-colors duration-300 ${isHovered ? 'text-white/85' : 'text-gray-600'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent bar */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    style={{ background: 'rgba(255,255,255,0.3)' }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-gray-50">
        <AnimateIn animation="fadeUp">
          <SectionHeader title="Useful External Links" subtitle="Quick access to official test registration sites and ranking platforms." align="center" />
        </AnimateIn>
        <div ref={linksRef} className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickLinks.map(({ label, url }, i) => (
            <div
              key={label}
              className={`transition-all duration-600 ease-out ${linksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-primary-200 transition-all group"
              >
                <ExternalLink size={16} className="text-primary-500 shrink-0" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">{label}</span>
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Want Personalized Guidance?</h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">Our expert counselors can create a customized plan tailored to your academic profile, career goals, and preferred destinations.</p>
            <Button to="/get-started" size="lg">
              Get Started for Free
              <ArrowRight size={16} />
            </Button>
          </div>
        </AnimateIn>
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
