import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  BookOpen, Stamp, Building, CheckCircle, Globe, Briefcase, TrendingUp,
  Monitor, Settings2, BarChart2, Database, Palette, HeartPulse, Microscope,
  Brain, Scale, Stethoscope, Leaf, Building2, GraduationCap, Utensils,
  Film, FlaskConical, Users, DollarSign, Map, Shield, Sun, Landmark,
  Clock, TreePine, ArrowRight, Send,
} from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper, { SectionHeader } from '../components/shared/SectionWrapper';
import Card, { IconBox } from '../components/shared/Card';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import { COUNTRIES } from '../data/constants';

const iconMap = {
  BookOpen, Globe, Briefcase, TrendingUp, Monitor, Settings2, BarChart2,
  Database, Palette, HeartPulse, Microscope, Brain, Scale, Stethoscope,
  Leaf, Building2, GraduationCap, Utensils, Film, FlaskConical, Users,
  DollarSign, Map, Shield, Sun, Landmark, Clock, TreePine,
};

const courseColors = [
  'bg-primary-50 text-primary-600 border-primary-100',
  'bg-sky-50 text-sky-600 border-sky-100',
  'bg-violet-50 text-violet-600 border-violet-100',
  'bg-emerald-50 text-emerald-600 border-emerald-100',
  'bg-amber-50 text-amber-600 border-amber-100',
  'bg-rose-50 text-rose-600 border-rose-100',
  'bg-cyan-50 text-cyan-600 border-cyan-100',
  'bg-indigo-50 text-indigo-600 border-indigo-100',
];

const whyColors = [
  'bg-primary-100 text-primary-700',
  'bg-sky-100 text-sky-700',
  'bg-emerald-100 text-emerald-700',
];

export default function CountryDetail() {
  const { slug } = useParams();
  const country = COUNTRIES.find((c) => c.slug === slug);

  const [uniRef, uniInView] = useInView({ threshold: 0.1 });
  const [scholRef, scholInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [coursesRef, coursesInView] = useInView({ threshold: 0.05 });

  const [form, setForm] = useState({ name: '', phone: '', email: '', intake: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleFormChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', intake: '' });
  };

  if (!country) return <Navigate to="/countries" replace />;

  return (
    <>
      <PageBanner
        title={`Study in ${country.name}`}
        subtitle={country.tagline}
        breadcrumbs={[{ label: 'Countries', path: '/countries' }, { label: country.name }]}
      />

      {/* ── Overview + Quick Inquiry ── */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimateIn animation="fadeRight">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Study in {country.name}?
              </h2>
            </AnimateIn>
            <AnimateIn animation="fadeRight" delay={100}>
              <p className="text-gray-500 leading-relaxed mb-8">{country.description}</p>
            </AnimateIn>
            <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-10">
              {Object.entries(country.stats).map(([key, value], i) => (
                <div
                  key={key}
                  className={`bg-primary-50 rounded-2xl p-5 text-center transition-all duration-700 ease-out ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
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
                <button type="submit" className="w-full py-3 rounded-full bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 cursor-pointer">
                  Get Free Guidance
                </button>
              </form>
            </Card>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* ── Why Study — 3 Feature Cards ── */}
      {country.whyStudy && (
        <SectionWrapper className="bg-gray-50">
          <AnimateIn animation="fadeUp">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Why Study in {country.name}?
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl">
              {country.name} is a premier study destination, renowned for its leading universities and global opportunities. These compelling reasons make {country.name} a top choice for international students:
            </p>
          </AnimateIn>
          <div ref={whyRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {country.whyStudy.map(({ icon, title, description }, i) => {
              const Icon = iconMap[icon] || BookOpen;
              return (
                <div
                  key={title}
                  className={`transition-all duration-700 ease-out ${whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl ${whyColors[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      )}

      {/* ── Education System + Visa ── */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-6">
          <AnimateIn animation="fadeRight">
            <Card hover={false} className="h-full">
              <IconBox className="mb-5 bg-primary-100 text-primary-700"><BookOpen size={20} /></IconBox>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education System</h3>
              <p className="text-gray-500 leading-relaxed">{country.educationSystem}</p>
            </Card>
          </AnimateIn>
          <AnimateIn animation="fadeLeft" delay={200}>
            <Card hover={false} className="h-full">
              <IconBox className="mb-5 bg-amber-100 text-amber-700"><Stamp size={20} /></IconBox>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visa Information</h3>
              <p className="text-gray-500 leading-relaxed">{country.visaInfo}</p>
            </Card>
          </AnimateIn>
        </div>
      </SectionWrapper>

      {/* ── Popular Courses ── */}
      {country.popularCourses && (
        <SectionWrapper className="bg-gray-50">
          <AnimateIn animation="fadeUp">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Popular Courses in {country.name}
              </h2>
              <a href="#inquiry" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors mt-1">
                Explore More Courses <ArrowRight size={14} />
              </a>
            </div>
            <p className="text-gray-500 mb-10 max-w-3xl">
              International students can opt for popular courses to study in {country.name}, including computer science, engineering, business administration, and more.
            </p>
          </AnimateIn>

          <div ref={coursesRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {country.popularCourses.map(({ icon, name, students }, i) => {
              const Icon = iconMap[icon] || BookOpen;
              return (
                <div
                  key={name}
                  className={`transition-all duration-600 ease-out ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-1 hover:border-primary-100 transition-all duration-300 h-full">
                    <div className={`w-11 h-11 rounded-xl border ${courseColors[i % courseColors.length]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1 leading-snug">{name}</h4>
                    <p className="text-xs text-gray-400">{students} students chose this</p>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      )}

      {/* ── Top Universities ── */}
      <SectionWrapper>
        <AnimateIn animation="fadeUp">
          <SectionHeader title={`Leading Universities in ${country.name}`} align="center" />
        </AnimateIn>
        <div ref={uniRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {country.topUniversities.map((uni, i) => (
            <div
              key={uni}
              className={`transition-all duration-600 ease-out ${uniInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                  <Building size={18} className="text-primary-600" />
                </div>
                <span className="font-semibold text-gray-900 text-sm">{uni}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Scholarships ── */}
      <SectionWrapper className="bg-gray-50">
        <AnimateIn animation="fadeUp">
          <SectionHeader title={`Scholarships for ${country.name}`} align="center" />
        </AnimateIn>
        <div ref={scholRef} className="max-w-2xl mx-auto space-y-3">
          {country.scholarships.map((s, i) => (
            <div
              key={s}
              className={`transition-all duration-600 ease-out ${scholInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all">
                <CheckCircle size={18} className="text-primary-500 shrink-0" />
                <span className="font-medium text-gray-900 text-sm">{s}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA Consultation Section ── */}
      <section id="inquiry" className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-8">

        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 border border-white/10 rounded-full" />
          <div className="absolute top-8 left-1/4 w-40 h-40 border border-white/5 rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── Left: text + SVG curve ── */}
            <AnimateIn animation="fadeRight">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  Better futures begin with<br />
                  <span className="text-sky-300">Ancile Academy</span>
                </h2>
                <p className="text-primary-200/80 leading-relaxed mb-8 max-w-sm">
                  With a strong presence and expert counsellors, we are always ready to support your study abroad needs. Book an exclusive in-person or virtual consultation with us today.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-300"
                >
                  Explore Our Services
                </a>

                {/* Figure-8 SVG curve decoration — like AECC */}
                <div className="absolute -bottom-6 left-0 w-full pointer-events-none select-none mt-10 pt-8">
                  <svg viewBox="0 0 420 180" fill="none" className="w-full max-w-sm opacity-60" xmlns="http://www.w3.org/2000/svg">
                    {/* First loop */}
                    <path
                      d="M 30 130 C 30 60, 120 30, 160 80 C 200 130, 180 160, 140 140 C 100 120, 110 70, 160 80 C 210 90, 280 40, 320 80 C 360 120, 370 150, 390 140"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Teal dot at end */}
                    <circle cx="390" cy="140" r="9" fill="#38bdf8" />
                    <circle cx="390" cy="140" r="5" fill="#7dd3fc" />
                  </svg>
                </div>
              </div>
            </AnimateIn>

            {/* ── Right: floating white card ── */}
            <AnimateIn animation="fadeLeft" delay={150}>
              <div className="bg-white rounded-3xl shadow-2xl shadow-primary-950/40 p-7 md:p-9">

                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={28} className="text-sky-500" />
                    </div>
                    <p className="text-gray-900 font-bold text-lg mb-1">Booking Confirmed!</p>
                    <p className="text-gray-500 text-sm">Our counsellor will reach you within 2 hours.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-1 leading-snug">
                      Book your{' '}
                      <span className="text-sky-500">FREE consultation</span>{' '}
                      call with our certified counsellors
                    </h3>
                    <div className="w-10 h-0.5 bg-sky-400 mx-auto mb-6 rounded-full" />

                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleFormChange}
                        type="text"
                        placeholder="Full Name *"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all"
                      />
                      <div className="flex gap-2">
                        <span className="flex items-center justify-center px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 bg-gray-50 shrink-0 font-medium">
                          +91
                        </span>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleFormChange}
                          type="tel"
                          placeholder="Mobile Number *"
                          required
                          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all"
                        />
                      </div>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleFormChange}
                        type="email"
                        placeholder="Email ID *"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all"
                      />
                      <div className="relative">
                        <select
                          name="intake"
                          value={form.intake}
                          onChange={handleFormChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all bg-white appearance-none pr-10"
                        >
                          <option value="">Destination *</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Australia</option>
                          <option>New Zealand</option>
                          <option>Ireland</option>
                          <option>Europe</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z" /></svg>
                        </div>
                      </div>

                      {/* Privacy checkbox */}
                      <label className="flex items-start gap-2.5 cursor-pointer group">
                        <div className="relative mt-0.5 shrink-0">
                          <input type="checkbox" required className="sr-only peer" />
                          <div className="w-4 h-4 rounded border border-gray-300 peer-checked:bg-sky-500 peer-checked:border-sky-500 transition-colors flex items-center justify-center">
                            <svg className="hidden peer-checked:block w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2"><path d="M1.5 5l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 leading-relaxed">
                          I agree to Ancile Academy's{' '}
                          <a href="/contact" className="text-sky-500 hover:underline font-medium">Privacy Policy</a>
                          {' '}and{' '}
                          <a href="/contact" className="text-sky-500 hover:underline font-medium">Terms and Conditions</a>
                          {' '}*
                        </span>
                      </label>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-sky-500 text-white font-bold text-sm hover:bg-sky-400 active:scale-[0.98] transition-all shadow-lg shadow-sky-500/30 cursor-pointer"
                      >
                        Book a FREE Consultation
                        <ArrowRight size={15} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>
    </>
  );
}
