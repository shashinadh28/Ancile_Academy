import { useState } from 'react';
import { ArrowRight, BookOpen, Building, FileText, Coins, Stamp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const steps = [
  { icon: BookOpen, title: 'Choose Your Programme', description: 'Select the course that inspires you and shapes your future.' },
  { icon: Building, title: 'Find Your University', description: 'Discover and shortlist top universities with expert guidance.' },
  { icon: FileText, title: 'Prepare for Tests & Applications', description: 'Get support to ace your English language test and craft a strong Statement of Purpose.' },
  { icon: Coins, title: 'Secure Funding', description: 'Apply for scholarships and manage your finances for a smooth visa process.' },
  { icon: Stamp, title: 'Visa & Beyond', description: 'Prepare confidently for your visa interview and take the first step towards your international future.' },
];


export default function NextStepsCTA() {
  const [stepsRef, stepsInView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', phone: '', email: '', destination: '' });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', destination: '' });
    setAgreed(false);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 40%, #1d4ed8 70%, #2563eb 100%)' }}>

      {/* grid pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* glow orbs */}
      <div className="absolute pointer-events-none" style={{ top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.25) 0%, transparent 70%)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: -100, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,.18) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: headline, steps, checklist ── */}
          <div>
            <AnimateIn animation="fadeRight">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
                style={{ background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.20)', color: '#bfdbfe' }}>
                <Star size={10} /> Free Consultation
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Better futures begin<br className="hidden md:block" />
                with{' '}<span style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ancile Academy</span>
              </h2>
              <p className="leading-[1.9] mb-8 max-w-sm text-[15px]" style={{ color: 'rgba(191,219,254,.85)' }}>
                With expert counsellors and a strong global presence, we're always ready to support your study abroad needs.
              </p>
            </AnimateIn>

            <div ref={stepsRef} className="space-y-4 mb-8">
              {steps.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={title}
                  className={`flex items-start gap-4 transition-all duration-700 ease-out ${stepsInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.15)' }}>
                    <Icon size={17} className="text-sky-300" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-white font-bold text-sm mb-0.5">{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(191,219,254,.65)' }}>{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <AnimateIn animation="fadeUp" delay={300}>
              <Link to="/get-started" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white"
                style={{ background: 'rgba(255,255,255,.12)', border: '1.5px solid rgba(255,255,255,.30)', backdropFilter: 'blur(8px)', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.22)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.30)'; }}
              >Get Started <ArrowRight size={15} /></Link>
            </AnimateIn>
          </div>

          {/* ── Right: consultation form card ── */}
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
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" required
                      className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                      style={{ border: '1.5px solid #e5e7eb' }}
                    />
                    <div className="flex gap-2">
                      <span className="flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold shrink-0"
                        style={{ border: '1.5px solid #e5e7eb', background: '#f9fafb', color: '#374151' }}>+91</span>
                      <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Mobile Number *" required
                        className="flex-1 px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                        style={{ border: '1.5px solid #e5e7eb' }}
                      />
                    </div>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email ID *" required
                      className="w-full px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all"
                      style={{ border: '1.5px solid #e5e7eb' }}
                    />
                    <div className="relative">
                      <select name="destination" value={form.destination} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 transition-all bg-white appearance-none pr-10"
                        style={{ border: '1.5px solid #e5e7eb', color: form.destination ? '#111827' : '#9ca3af' }}>
                        <option value="">Destination *</option>
                        <option>United States</option><option>United Kingdom</option><option>Canada</option>
                        <option>Australia</option><option>New Zealand</option><option>Ireland</option><option>Europe</option>
                      </select>
                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z" /></svg>
                      </div>
                    </div>

                    <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                      <div className="relative mt-0.5 shrink-0">
                        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="sr-only" />
                        <div
                          onClick={() => setAgreed(!agreed)}
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${agreed ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'}`}
                        >
                          {agreed && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5">
                              <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 leading-relaxed">
                        I agree to Ancile Academy's{' '}
                        <a href="/contact" className="text-blue-600 hover:underline font-semibold">Privacy Policy</a>
                        {' '}and{' '}
                        <a href="/contact" className="text-blue-600 hover:underline font-semibold">Terms and Conditions</a> *
                      </span>
                    </label>

                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold text-sm active:scale-[0.98] transition-all duration-200 cursor-pointer mt-1"
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
  );
}
