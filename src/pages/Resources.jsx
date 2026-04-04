import { BookOpen, FileText, Video, Download, ArrowRight, ExternalLink } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import Card, { IconBox } from '../components/shared/Card';
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
    color: 'bg-primary-100 text-primary-700',
  },
  {
    icon: FileText,
    title: 'SOP & LOR Templates',
    description: 'Expert-crafted templates and tips to help you write compelling Statements of Purpose and secure strong recommendation letters.',
    items: ['SOP writing framework', 'Sample SOPs by program', 'LOR request templates', 'Resume/CV formats for applications'],
    color: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Video,
    title: 'Webinars & Workshops',
    description: 'Free recorded sessions and live workshops covering test prep, visa interviews, scholarship applications, and more.',
    items: ['IELTS/TOEFL strategy sessions', 'Visa interview mock prep', 'Scholarship application workshops', 'Pre-departure orientation'],
    color: 'bg-sky-100 text-sky-700',
  },
  {
    icon: Download,
    title: 'Checklists & Tools',
    description: 'Downloadable checklists, budget calculators, and planning tools to keep your study abroad journey organized.',
    items: ['Visa document checklists by country', 'Budget & cost-of-living calculator', 'Application tracker spreadsheet', 'Pre-departure packing checklist'],
    color: 'bg-emerald-100 text-emerald-700',
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
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });
  const [linksRef, linksInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <PageBanner
        title="Resources"
        subtitle="Stay informed with the latest tips, guides, and tools to help you prepare for your study abroad journey."
        breadcrumbs={[{ label: 'Resources' }]}
      />

      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <SectionHeader
            title="Everything You Need to Prepare"
            subtitle="Access our curated collection of study abroad resources, guides, and tools — all designed to make your journey smoother."
            align="center"
          />
        </AnimateIn>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceCategories.map(({ icon: Icon, title, description, items, color }, i) => (
            <div
              key={title}
              className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Card className="h-full" hover={false}>
                <IconBox className={`mb-5 ${color}`}><Icon size={22} /></IconBox>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                      {item}
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
