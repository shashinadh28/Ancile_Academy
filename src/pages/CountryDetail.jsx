import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import {
  BookOpen, Stamp, Building, CheckCircle, Globe, Briefcase, TrendingUp,
  Monitor, Settings2, BarChart2, Database, Palette, HeartPulse, Microscope,
  Brain, Scale, Stethoscope, Leaf, Building2, GraduationCap, Utensils,
  Film, FlaskConical, Users, DollarSign, Map, Shield, Sun, Landmark,
  Clock, TreePine, ArrowRight, Sparkles, Star, Award, ChevronRight, Plus,
} from 'lucide-react';
import LinearCardDialog from '../components/ui/linear-card-dialog';
import {
  TabsProvider, TabList, TabItem, TabHeader, TabDes,
  TabImageContainer, TabImage,
} from '../components/ui/image-tabs';
import PageBanner from '../components/shared/PageBanner';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import { COUNTRIES } from '../data/constants';

const iconMap = {
  BookOpen, Globe, Briefcase, TrendingUp, Monitor, Settings2, BarChart2,
  Database, Palette, HeartPulse, Microscope, Brain, Scale, Stethoscope,
  Leaf, Building2, GraduationCap, Utensils, Film, FlaskConical, Users,
  DollarSign, Map, Shield, Sun, Landmark, Clock, TreePine,
};

const courseIconStyles = [
  { bg: '#eff6ff', border: '#bfdbfe', text: '#2563eb' },
  { bg: '#ecfdf5', border: '#a7f3d0', text: '#059669' },
  { bg: '#f5f3ff', border: '#ddd6fe', text: '#7c3aed' },
  { bg: '#fff7ed', border: '#fed7aa', text: '#ea580c' },
  { bg: '#fff1f2', border: '#fecdd3', text: '#e11d48' },
  { bg: '#f0fdfa', border: '#99f6e4', text: '#0d9488' },
  { bg: '#fefce8', border: '#fde68a', text: '#d97706' },
  { bg: '#eef2ff', border: '#c7d2fe', text: '#4338ca' },
];

const whyCardStyles = [
  { iconBg: '#dbeafe', iconColor: '#1d4ed8', accentColor: '#3b82f6' },
  { iconBg: '#d1fae5', iconColor: '#065f46', accentColor: '#10b981' },
  { iconBg: '#ede9fe', iconColor: '#5b21b6', accentColor: '#8b5cf6' },
];

export default function CountryDetail() {
  const { slug } = useParams();
  const country = COUNTRIES.find((c) => c.slug === slug);

  const [statsRef, statsInView]     = useInView({ threshold: 0.15 });
  const [whyRef, whyInView]         = useInView({ threshold: 0.08 });
  const [coursesRef, coursesInView] = useInView({ threshold: 0.04 });
  const [scholRef, scholInView]     = useInView({ threshold: 0.08 });

  const [form, setForm] = useState({ name: '', phone: '', email: '', intake: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', intake: '' });
  };

  if (!country) return <Navigate to="/countries" replace />;

  const uniTabs = country.topUniversities
    .filter((u) => typeof u === 'object' && u.image)
    .map((u) => ({ ...u, id: u.name.replace(/\s+/g, '-').toLowerCase() }));

  return (
    <>
      <PageBanner
        title={`Study in ${country.name}`}
        subtitle={country.tagline}
        breadcrumbs={[{ label: 'Countries', path: '/countries' }, { label: country.name }]}
      />

      {/* ═══════════════  SECTION 1 — Overview + Inquiry  ═══════════════ */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <AnimateIn animation="fadeRight">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
                  style={{ background: '#dbeafe', border: '1px solid #93c5fd', color: '#1d4ed8' }}>
                  <Sparkles size={11} /> Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                  Discover <span style={{ color: '#2563eb' }}>{country.name}</span>
                </h2>
              </AnimateIn>
              <AnimateIn animation="fadeRight" delay={100}>
                <p className="text-gray-500 leading-[1.9] mb-10 text-[15.5px] max-w-2xl">{country.description}</p>
              </AnimateIn>

              <div ref={statsRef} className="grid grid-cols-3 gap-4">
                {Object.entries(country.stats).map(([key, value], i) => (
                  <div key={key}
                    className={`text-center transition-all duration-700 ease-out ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{
                      transitionDelay: `${i * 120}ms`,
                      background: 'linear-gradient(135deg, #eef2ff, #dbeafe, #e0f2fe)',
                      border: '1.5px solid #93c5fd', borderRadius: 20, padding: '28px 20px',
                      boxShadow: '0 4px 16px rgba(37,99,235,.10)',
                    }}>
                    <div className="text-2xl md:text-3xl font-extrabold mb-1" style={{
                      background: 'linear-gradient(135deg, #2563eb, #6366f1)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{value}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: '#3b82f6' }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AnimateIn animation="fadeLeft" delay={200}>
              <div className="sticky top-28">
                <div style={{
                  background: '#fff', borderRadius: 24, border: '1.5px solid #e5e7eb', padding: '32px 28px',
                  boxShadow: '0 8px 32px rgba(37,99,235,.10), 0 2px 8px rgba(0,0,0,.04)',
                }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg, #dbeafe, #ede9fe)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Star size={18} style={{ color: '#2563eb' }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-none mb-0.5">Quick Inquiry</h3>
                      <p className="text-[11px] text-gray-400">Response within 2 hours</p>
                    </div>
                  </div>
                  <div style={{ height: 1, background: 'linear-gradient(90deg, #bfdbfe, #e5e7eb, transparent)', marginBottom: 20 }} />
                  <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will contact you soon.'); }}>
                    <input placeholder="Your Name" className="inquiry-input" />
                    <input placeholder="Email Address" type="email" className="inquiry-input" />
                    <input placeholder="Phone Number" type="tel" className="inquiry-input" />
                    <button type="submit" className="cursor-pointer" style={{
                      width: '100%', padding: '14px 0', borderRadius: 14,
                      background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: '#fff',
                      fontWeight: 700, fontSize: 14, border: 'none',
                      boxShadow: '0 6px 20px rgba(37,99,235,.30)',
                    }}>Get Free Guidance <ArrowRight size={14} className="inline ml-1" /></button>
                  </form>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ═══════════════  SECTION 2 — Why Study (LinearCardDialog)  ═══════════════ */}
      {country.whyStudy && (
        <section className="px-4 sm:px-6 lg:px-8" style={{
          background: '#f8faff',
          backgroundImage: 'radial-gradient(#b8c8e0 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}>
          <div className="max-w-7xl mx-auto">
            <AnimateIn animation="fadeUp">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
                  style={{ background: '#dbeafe', border: '1px solid #93c5fd', color: '#1d4ed8' }}>
                  <Award size={11} /> Key Highlights
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Why Study in {country.name}?
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                  Click any card to explore in detail. Drag to browse.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fadeUp" delay={100}>
              <LinearCardDialog
                items={country.whyStudy.map(({ icon, title, description, image, tags }, i) => {
                  const Icon = iconMap[icon] || BookOpen;
                  const accent = whyCardStyles[i] || whyCardStyles[0];
                  return {
                    id: i + 1,
                    title,
                    description,
                    image: image || '/countries/UK.webp',
                    tags: tags || [],
                    iconBg: accent.iconBg,
                    iconColor: accent.iconColor,
                    iconNode: <Icon size={20} style={{ color: accent.iconColor }} />,
                    footerNode: (
                      <div className="pt-5 flex items-center gap-2" style={{ borderTop: `2px solid ${accent.iconBg}` }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent.accentColor }} />
                        <span className="text-sm font-bold" style={{ color: accent.accentColor }}>
                          Key highlight for studying in {country.name}
                        </span>
                      </div>
                    ),
                  };
                })}
              />
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ═══════════════  SECTION 3 — Education & Visa  ═══════════════ */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateIn animation="fadeUp">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
                style={{ background: '#dbeafe', border: '1px solid #93c5fd', color: '#1d4ed8' }}>
                <BookOpen size={11} /> System & Visa
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Education & Visa Information</h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
                Everything you need to know about studying and getting your visa in {country.name}.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-7">
            {[
              { icon: BookOpen, title: 'Education System', text: country.educationSystem, iconBg: '#dbeafe', iconColor: '#1d4ed8', tagBg: '#eff6ff', tagColor: '#2563eb', footerText: 'Internationally recognized degrees', footerBorder: '#dbeafe' },
              { icon: Stamp, title: 'Visa Information', text: country.visaInfo, iconBg: '#fef3c7', iconColor: '#b45309', tagBg: '#fffbeb', tagColor: '#d97706', footerText: 'Expert visa guidance available', footerBorder: '#fde68a' },
            ].map((card, idx) => (
              <AnimateIn key={card.title} animation={idx === 0 ? 'fadeRight' : 'fadeLeft'} delay={idx * 150}>
                <div className="h-full" style={{
                  background: '#ffffff', borderRadius: 22, border: '1.5px solid #e5e7eb', padding: '40px 34px',
                  boxShadow: '0 4px 16px rgba(0,0,0,.05), 0 10px 28px rgba(0,0,0,.04)',
                  transition: 'transform .3s ease, box-shadow .3s ease, border-color .3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 18px 48px rgba(37,99,235,.12), 0 4px 12px rgba(0,0,0,.06)'; e.currentTarget.style.borderColor = '#93c5fd'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,.05), 0 10px 28px rgba(0,0,0,.04)'; e.currentTarget.style.borderColor = '#e5e7eb'; }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: card.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                    <card.icon size={26} style={{ color: card.iconColor }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-500 leading-[1.85] text-[15px]">{card.text}</p>
                  <div className="mt-8 pt-6 flex items-center gap-3" style={{ borderTop: `1px solid ${card.footerBorder}` }}>
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: card.tagBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle size={16} style={{ color: card.tagColor }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: card.iconColor }}>{card.footerText}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════  SECTION 4 — Popular Courses  ═══════════════ */}
      {country.popularCourses && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          style={{
            background: '#f8faff',
            backgroundImage: 'radial-gradient(#b8c8e0 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: 'absolute', top: -100, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,.08) 0%, transparent 70%)' }} />
            <div style={{ position: 'absolute', bottom: -100, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.06) 0%, transparent 70%)' }} />
          </div>
          <div className="max-w-7xl mx-auto relative">
            <AnimateIn animation="fadeUp">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
                    style={{ background: '#dbeafe', border: '1px solid #93c5fd', color: '#1d4ed8' }}>
                    <GraduationCap size={11} /> What to Study
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Popular Courses in {country.name}</h2>
                  <p className="text-gray-500 max-w-xl text-sm leading-relaxed">Explore the most sought-after programs chosen by international students.</p>
                </div>
                <Link to="/get-started" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold shrink-0 self-start sm:self-auto cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #eff6ff, #eef2ff)', color: '#2563eb', border: '1.5px solid #bfdbfe', transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb, #4f46e5)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #eff6ff, #eef2ff)'; e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.borderColor = '#bfdbfe'; e.currentTarget.style.boxShadow = 'none'; }}
                >Explore All Courses <ArrowRight size={14} /></Link>
              </div>
            </AnimateIn>

            <div ref={coursesRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {country.popularCourses.map(({ icon, name, students, image }, i) => {
                const Icon = iconMap[icon] || BookOpen;
                const clr = courseIconStyles[i % courseIconStyles.length];
                return (
                  <div key={name}
                    className={`transition-all duration-700 ease-out ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${i * 65}ms` }}>
                    <div className="h-full cursor-pointer" style={{
                      background: '#ffffff', borderRadius: 20, border: '1.5px solid #e5e7eb', overflow: 'hidden',
                      display: 'flex', flexDirection: 'column',
                      boxShadow: '0 2px 8px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.04)',
                      transition: 'transform .3s cubic-bezier(.34,1.2,.64,1), box-shadow .3s, border-color .3s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(37,99,235,.14), 0 4px 14px rgba(0,0,0,.07)'; e.currentTarget.style.borderColor = '#93c5fd'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.04)'; e.currentTarget.style.borderColor = '#e5e7eb'; }}
                    >
                      {image ? (
                        <div style={{ height: 156, overflow: 'hidden', position: 'relative' }}>
                          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                          />
                        </div>
                      ) : (
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 30, paddingBottom: 8 }}>
                          <div style={{ width: 60, height: 60, borderRadius: 16, background: clr.bg, border: `1.5px solid ${clr.border}`, color: clr.text, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon size={26} />
                          </div>
                        </div>
                      )}
                      <div style={{ padding: image ? '14px 16px' : '16px 16px', textAlign: 'center', flex: 1 }}>
                        <h4 className="text-sm font-bold text-gray-900 mb-1 leading-snug">{name}</h4>
                        <p className="text-xs font-medium" style={{ color: '#9ca3af' }}>{students} students chose this</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════  SECTION 5 — Universities (Image Tabs)  ═══════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: '#f8faff',
          backgroundImage: 'radial-gradient(#d1ddf0 1px, transparent 1px), linear-gradient(180deg, rgba(59,130,246,.04), rgba(99,102,241,.04))',
          backgroundSize: '28px 28px, 100% 100%',
        }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{ position: 'absolute', top: -110, right: -90, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,.14) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: -120, left: -80, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.12) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', top: '28%', right: -60, width: 180, height: 180, transform: 'rotate(28deg)', borderRadius: 24, background: 'linear-gradient(135deg, rgba(219,234,254,.55), rgba(237,233,254,.55))', border: '1.5px solid rgba(191,219,254,.8)', boxShadow: '0 8px 24px rgba(37,99,235,.10)' }} />
          <div style={{ position: 'absolute', bottom: 60, left: '18%', width: 96, height: 96, borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(56,189,248,.28), transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <AnimateIn animation="fadeUp">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
                style={{ background: '#dbeafe', border: '1px solid #93c5fd', color: '#1d4ed8' }}>
                <Building size={11} /> Institutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Leading Universities in {country.name}</h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
                Choose from world-class institutions renowned for academic excellence and cutting-edge research.
              </p>
            </div>
          </AnimateIn>

          {uniTabs.length > 0 ? (
            <AnimateIn animation="fadeUp" delay={100}>
              <div style={{ background: '#ffffff', borderRadius: 24, border: '1.5px solid #e5e7eb', padding: '32px 28px', boxShadow: '0 4px 20px rgba(0,0,0,.05), 0 10px 32px rgba(0,0,0,.04)' }}>
                <TabsProvider defaultValue={uniTabs[0].id} className="md:grid md:grid-cols-12 gap-8 items-start">
                  <TabList className="md:col-span-5">
                    {uniTabs.map((tab) => (
                      <TabItem key={tab.id} value={tab.id}>
                        <TabHeader value={tab.id}>{tab.name}</TabHeader>
                        <TabDes value={tab.id}>
                          <p className="text-gray-500 text-sm leading-relaxed mt-1 mb-3">
                            {tab.description || 'A world-class institution with exceptional academic standards and global recognition.'}
                          </p>
                          {/* Mobile-only image */}
                          <img src={tab.image} alt={tab.name} className="md:hidden block rounded-xl w-full h-48 object-cover" style={{ border: '1.5px solid #e5e7eb' }} />
                        </TabDes>
                      </TabItem>
                    ))}
                  </TabList>
                  <TabImageContainer className="md:col-span-7">
                    {uniTabs.map((tab) => (
                      <TabImage key={tab.id} value={tab.id}>
                        <img src={tab.image} alt={tab.name} className="w-full h-full object-cover rounded-xl" />
                      </TabImage>
                    ))}
                  </TabImageContainer>
                </TabsProvider>
              </div>
            </AnimateIn>
          ) : (
            /* Fallback for countries without tab-ready uni data */
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {country.topUniversities.map((uni, i) => {
                const isObj = typeof uni === 'object';
                const uniName = isObj ? uni.name : uni;
                const uniImage = isObj ? uni.image : null;
                return (
                  <AnimateIn key={uniName} animation="fadeUp" delay={i * 80}>
                    <div className="flex items-center gap-4 cursor-pointer" style={{
                      background: '#ffffff', borderRadius: 20, border: '1.5px solid #e5e7eb', padding: '20px 22px',
                      boxShadow: '0 2px 8px rgba(0,0,0,.04)', position: 'relative', overflow: 'hidden',
                      transition: 'transform .3s ease, box-shadow .3s ease, border-color .3s ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px) translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,99,235,.12)'; e.currentTarget.style.borderColor = '#93c5fd'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.04)'; e.currentTarget.style.borderColor = '#e5e7eb'; }}
                    >
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, #3b82f6, #6366f1)', borderRadius: '2px 0 0 2px' }} />
                      {uniImage ? (
                        <img src={uniImage} alt={uniName} style={{ width: 56, height: 56, borderRadius: 14, objectFit: 'cover', flexShrink: 0, boxShadow: '0 3px 10px rgba(0,0,0,.10)' }} />
                      ) : (
                        <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, #dbeafe, #ede9fe)', border: '1.5px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Building size={20} style={{ color: '#2563eb' }} />
                        </div>
                      )}
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <span className="font-bold text-gray-900 text-[15px] leading-snug block mb-0.5">{uniName}</span>
                        <span className="text-xs font-medium" style={{ color: '#9ca3af' }}>Top-ranked university</span>
                      </div>
                      <ChevronRight size={18} style={{ color: '#bfdbfe', flexShrink: 0 }} />
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════  SECTION 6 — Scholarships  ═══════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{
        background: '#f8faff', backgroundImage: 'radial-gradient(#d1ddf0 1px, transparent 1px)', backgroundSize: '28px 28px',
      }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn animation="fadeUp">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
                style={{ background: '#dbeafe', border: '1px solid #93c5fd', color: '#1d4ed8' }}>
                <Award size={11} /> Financial Aid
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Scholarships for {country.name}</h2>
              <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">Explore funding opportunities to make your international education aspirations a reality.</p>
            </div>
          </AnimateIn>

          <div ref={scholRef} className="max-w-2xl mx-auto flex flex-col gap-3.5">
            {country.scholarships.map((s, i) => (
              <div key={s}
                className={`transition-all duration-700 ease-out ${scholInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="flex items-center gap-4 cursor-pointer" style={{
                  background: '#ffffff', borderRadius: 16, border: '1.5px solid #e5e7eb', padding: '18px 22px',
                  boxShadow: '0 2px 6px rgba(0,0,0,.04)', transition: 'transform .3s ease, box-shadow .3s ease, border-color .3s ease, padding-left .3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.paddingLeft = '28px'; e.currentTarget.style.background = 'linear-gradient(90deg, #eff6ff, #ffffff 80%)'; e.currentTarget.style.borderColor = '#93c5fd'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.paddingLeft = '22px'; e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,.04)'; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, #dbeafe, #ede9fe)', border: '1.5px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle size={18} style={{ color: '#2563eb' }} />
                  </div>
                  <span className="font-semibold text-gray-800 text-[15px] flex-1">{s}</span>
                  <ChevronRight size={16} style={{ color: '#bfdbfe' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════  SECTION 7 — CTA / Consultation  ═══════════════ */}
      <section id="inquiry" className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 40%, #1d4ed8 70%, #2563eb 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="max-w-7xl mx-auto relative" style={{ zIndex: 10 }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn animation="fadeRight">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
                  style={{ background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.20)', color: '#bfdbfe' }}>
                  <Star size={10} /> Free Consultation
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Better futures begin<br className="hidden md:block" />
                  with{' '}<span style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ancile Academy</span>
                </h2>
                <p className="leading-[1.9] mb-8 max-w-sm text-[15px]" style={{ color: 'rgba(191,219,254,.85)' }}>
                  With expert counsellors and a strong global presence, we're always ready to support your study abroad needs.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {['Personalized country & course guidance', 'University shortlisting & application help', 'Visa documentation & interview prep'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(56,189,248,.20)', border: '1px solid rgba(56,189,248,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <CheckCircle size={13} style={{ color: '#38bdf8' }} />
                      </div>
                      <span className="text-sm font-medium" style={{ color: 'rgba(219,234,254,.9)' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white"
                  style={{ background: 'rgba(255,255,255,.12)', border: '1.5px solid rgba(255,255,255,.30)', backdropFilter: 'blur(8px)', transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.22)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.50)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.30)'; }}
                >Explore Our Services <ArrowRight size={15} /></Link>
              </div>
            </AnimateIn>

            <AnimateIn animation="fadeLeft" delay={150}>
              <div style={{ background: '#fff', borderRadius: 28, padding: '36px 32px', boxShadow: '0 24px 64px rgba(0,0,0,.22), 0 4px 16px rgba(0,0,0,.10)' }}>
                {submitted ? (
                  <div className="py-10 text-center">
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #dbeafe, #ede9fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <CheckCircle size={30} style={{ color: '#2563eb' }} />
                    </div>
                    <p className="text-gray-900 font-bold text-xl mb-2">Booking Confirmed!</p>
                    <p className="text-gray-500 text-sm">Our counsellor will reach you within 2 hours.</p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 leading-snug mb-1">
                        Book your{' '}<span style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FREE consultation</span>
                      </h3>
                      <p className="text-sm text-gray-400">Speak with a certified study abroad counsellor</p>
                      <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #3b82f6, #6366f1)', borderRadius: 999, margin: '14px auto 0' }} />
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" required className="inquiry-input" />
                      <div className="flex gap-2">
                        <span className="flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold shrink-0" style={{ border: '1.5px solid #e5e7eb', background: '#f9fafb', color: '#374151' }}>+91</span>
                        <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Mobile Number *" required className="inquiry-input" style={{ flex: 1 }} />
                      </div>
                      <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email ID *" required className="inquiry-input" />
                      <div className="relative">
                        <select name="intake" value={form.intake} onChange={handleChange} required className="inquiry-input appearance-none pr-10" style={{ color: form.intake ? '#111827' : '#9ca3af' }}>
                          <option value="">Destination *</option>
                          <option>United States</option><option>United Kingdom</option><option>Canada</option><option>Dubai</option>
                          <option>Australia</option><option>New Zealand</option><option>Ireland</option><option>Europe</option>
                        </select>
                        <div style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z" /></svg>
                        </div>
                      </div>
                      <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                        <div className="relative mt-0.5 shrink-0">
                          <input type="checkbox" required className="sr-only peer" />
                          <div className="w-4 h-4 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-colors" style={{ border: '1.5px solid #d1d5db' }}>
                            <svg className="hidden peer-checked:block w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2"><path d="M1.5 5l2.5 2.5 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 leading-relaxed">I agree to Ancile Academy's{' '}<a href="/contact" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>{' '}and{' '}<a href="/contact" className="text-blue-600 hover:underline font-medium">Terms and Conditions</a> *</span>
                      </label>
                      <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold text-sm active:scale-[0.98] transition-all duration-200 cursor-pointer mt-1"
                        style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', boxShadow: '0 8px 24px rgba(37,99,235,.35)' }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,99,235,.50)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,.35)'}
                      >Book a FREE Consultation <ArrowRight size={16} /></button>
                      <p className="text-center text-xs text-gray-400 mt-1">Your data is 100% secure & never shared</p>
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
