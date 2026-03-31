import { useParams, Navigate } from 'react-router-dom';
import { BookOpen, Stamp, Building, CheckCircle } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import Card, { IconBox } from '../components/shared/Card';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import ContactCTA from '../components/home/ContactCTA';
import { COUNTRIES } from '../data/constants';

export default function CountryDetail() {
  const { slug } = useParams();
  const country = COUNTRIES.find((c) => c.slug === slug);
  const [uniRef, uniInView] = useInView({ threshold: 0.1 });
  const [scholRef, scholInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });

  if (!country) return <Navigate to="/countries" replace />;

  return (
    <>
      <PageBanner title={`Study in ${country.name} ${country.flag}`} subtitle={country.tagline} breadcrumbs={[{ label: 'Countries', path: '/countries' }, { label: country.name }]} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimateIn animation="fadeRight"><h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Study in {country.name}?</h2></AnimateIn>
            <AnimateIn animation="fadeRight" delay={100}><p className="text-gray-500 leading-relaxed mb-8">{country.description}</p></AnimateIn>
            <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-10">
              {Object.entries(country.stats).map(([key, value], i) => (
                <div key={key} className={`bg-primary-50 rounded-2xl p-5 text-center transition-all duration-700 ease-out ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="text-2xl font-bold text-primary-700">{value}</div>
                  <div className="text-sm text-primary-600/60 capitalize mt-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </div>
          <AnimateIn animation="fadeLeft" delay={200}>
            <Card className="sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Inquiry</h3>
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will contact you soon.'); }}>
                <input placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                <input placeholder="Email" type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                <input placeholder="Phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                <button type="submit" className="w-full py-3 rounded-full bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 cursor-pointer">Get Free Guidance</button>
              </form>
            </Card>
          </AnimateIn>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn animation="fadeRight"><Card hover={false} className="h-full"><IconBox className="mb-5 bg-primary-100 text-primary-600"><BookOpen size={20} /></IconBox><h3 className="text-xl font-bold text-gray-900 mb-3">Education System</h3><p className="text-gray-500 leading-relaxed">{country.educationSystem}</p></Card></AnimateIn>
          <AnimateIn animation="fadeLeft" delay={200}><Card hover={false} className="h-full"><IconBox className="mb-5 bg-violet-100 text-violet-600"><Stamp size={20} /></IconBox><h3 className="text-xl font-bold text-gray-900 mb-3">Visa Information</h3><p className="text-gray-500 leading-relaxed">{country.visaInfo}</p></Card></AnimateIn>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <AnimateIn animation="fadeUp"><SectionHeader title={`Leading Universities in ${country.name}`} align="center" /></AnimateIn>
        <div ref={uniRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {country.topUniversities.map((uni, i) => (
            <div key={uni} className={`transition-all duration-600 ease-out ${uniInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0"><Building size={18} className="text-primary-600" /></div>
                <span className="font-semibold text-gray-900 text-sm">{uni}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <AnimateIn animation="fadeUp"><SectionHeader title={`Scholarships for ${country.name}`} align="center" /></AnimateIn>
        <div ref={scholRef} className="max-w-2xl mx-auto space-y-3">
          {country.scholarships.map((s, i) => (
            <div key={s} className={`transition-all duration-600 ease-out ${scholInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all"><CheckCircle size={18} className="text-accent-500 shrink-0" /><span className="font-medium text-gray-900 text-sm">{s}</span></div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <ContactCTA />
    </>
  );
}
