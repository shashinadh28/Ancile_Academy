import { useState } from 'react';
import { ArrowRight, CheckCircle, GraduationCap, Globe, FileText, Star } from 'lucide-react';
import Button from '../components/shared/Button';
import AnimateIn from '../components/shared/AnimateIn';

const countries = ['USA', 'UK', 'Canada', 'Australia', 'New Zealand', 'Ireland', 'Europe', 'Other'];
const intakes = ['January', 'May', 'September'];

const highlights = [
  { icon: GraduationCap, text: '50,000+ Students Guided' },
  { icon: Globe, text: '200+ University Partners' },
  { icon: FileText, text: '98% Visa Approval Rate' },
  { icon: Star, text: '15+ Years of Expertise' },
];

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [hasTakenTest, setHasTakenTest] = useState('');
  const [otherIntake, setOtherIntake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4"
        style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 40%, #1d4ed8 70%, #2563eb 100%)' }}>
        {/* grid pattern */}
        <div className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
        <AnimateIn animation="scaleIn">
          <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-16 text-center max-w-lg mx-auto shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-green-400/20 border border-green-400/40 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">We've Received Your Details!</h2>
            <p className="text-blue-200 text-base leading-relaxed mb-8">
              Our expert counselors will reach out to you within <strong className="text-white">24–48 hours</strong> to schedule your free session.
            </p>
            <a href="/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white"
              style={{ background: 'rgba(255,255,255,.15)', border: '1.5px solid rgba(255,255,255,.30)', backdropFilter: 'blur(8px)' }}>
              Back to Home <ArrowRight size={15} />
            </a>
          </div>
        </AnimateIn>
      </div>
    );
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-primary-500 transition-all';
  const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5';

  return (
    <div className="relative min-h-screen overflow-hidden pt-[73px]"
      style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 40%, #1d4ed8 70%, #2563eb 100%)' }}>

      {/* ── grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

      {/* ── ambient orbs ── */}
      <div className="absolute pointer-events-none" style={{ top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.30) 0%, transparent 70%)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: -100, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,.22) 0%, transparent 70%)' }} />
      <div className="absolute pointer-events-none" style={{ top: '40%', left: '10%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,.15) 0%, transparent 70%)' }} />

      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── Left side ── */}
          <div className="lg:col-span-2">
            <AnimateIn animation="fadeRight">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
                style={{ background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.20)', color: '#bfdbfe' }}>
                <Star size={10} /> Free Consultation
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Start Your{' '}
                <span style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Global Journey
                </span>
              </h1>
              <p className="text-blue-200 leading-relaxed mb-8 text-[15px]">
                Fill in the form and our expert counselors will schedule your <strong className="text-white">free</strong> counseling session within 24–48 hours.
              </p>
            </AnimateIn>

            {/* Highlight stats */}
            <AnimateIn animation="fadeRight" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map(({ icon: Icon, text }) => (
                  <div key={text}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)' }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(255,255,255,.12)' }}>
                      <Icon size={16} className="text-sky-300" />
                    </div>
                    <span className="text-sm font-medium text-blue-100">{text}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: form card ── */}
          <div className="lg:col-span-3">
            <AnimateIn animation="fadeLeft" delay={100}>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Card header accent */}
                <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #2563eb, #6366f1, #38bdf8)' }} />

                {/* Form header */}
                <div className="px-6 md:px-10 pt-8 pb-6 border-b border-gray-100"
                  style={{ background: 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)' }}>
                      <GraduationCap size={22} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Ancile Academy</h2>
                      <p className="text-primary-600 text-sm font-semibold">Free Counseling Session Form</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mt-3">All fields marked with * are required</p>
                </div>

                <form onSubmit={handleSubmit} className="px-6 md:px-10 py-8 space-y-8">

                  {/* ── Personal Information ── */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">1</div>
                      <h3 className="text-base font-bold text-gray-900">Personal Information</h3>
                    </div>
                    <div className="space-y-4 pl-8">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input placeholder="Enter your full name" required className={inputClass} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Email Address *</label>
                          <input type="email" placeholder="you@example.com" required className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Phone Number *</label>
                          <div className="flex gap-2">
                            <span className="px-3 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-500 font-semibold shrink-0">+91</span>
                            <input type="tel" placeholder="98765 43210" required className={inputClass} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-200" />

                  {/* ── Academic Background ── */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">2</div>
                      <h3 className="text-base font-bold text-gray-900">Academic Background</h3>
                    </div>
                    <div className="space-y-4 pl-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Highest Qualification *</label>
                          <input placeholder="e.g., B.Tech, B.Sc, MBA…" required className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Year of Graduation *</label>
                          <input type="number" placeholder="e.g., 2024" min="1990" max="2030" required className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>CGPA / Percentage</label>
                        <input placeholder="e.g., 8.5 CGPA or 85%" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-200" />

                  {/* ── Study Abroad Interests ── */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">3</div>
                      <h3 className="text-base font-bold text-gray-900">Study Abroad Interests</h3>
                    </div>
                    <div className="space-y-4 pl-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Preferred Country *</label>
                          <select required className={inputClass + ' appearance-none'}>
                            <option value="">Select a country</option>
                            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Preferred Course / Program</label>
                          <input placeholder="e.g., MS in Computer Science, MBA" className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Planned Intake *</label>
                        <div className="flex flex-wrap gap-3 mt-1">
                          {intakes.map((intake) => (
                            <label key={intake} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-primary-300 has-[:checked]:bg-primary-50 has-[:checked]:border-primary-400 transition-all">
                              <input type="radio" name="intake" value={intake} required={!otherIntake} className="accent-primary-600" onChange={() => setOtherIntake(false)} />
                              {intake}
                            </label>
                          ))}
                          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-primary-300 has-[:checked]:bg-primary-50 has-[:checked]:border-primary-400 transition-all">
                            <input type="radio" name="intake" value="other" className="accent-primary-600" onChange={() => setOtherIntake(true)} />
                            Other
                          </label>
                        </div>
                        {otherIntake && (
                          <input placeholder="Specify your preferred intake" className={inputClass + ' mt-3'} />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-200" />

                  {/* ── English Proficiency ── */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">4</div>
                      <h3 className="text-base font-bold text-gray-900">English Proficiency Test</h3>
                    </div>
                    <div className="space-y-4 pl-8">
                      <div>
                        <label className={labelClass}>Have you taken an English proficiency test? *</label>
                        <div className="flex gap-3 mt-1">
                          {['Yes', 'No'].map((opt) => (
                            <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer bg-gray-50 px-5 py-2.5 rounded-xl border border-gray-200 hover:border-primary-300 has-[:checked]:bg-primary-50 has-[:checked]:border-primary-400 transition-all">
                              <input type="radio" name="englishTest" value={opt} required className="accent-primary-600" onChange={(e) => setHasTakenTest(e.target.value)} />
                              {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                      {hasTakenTest === 'Yes' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Test Name</label>
                            <input placeholder="e.g., IELTS, TOEFL, PTE…" className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Score</label>
                            <input placeholder="e.g., 7.5" className={inputClass} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-200" />

                  {/* ── Additional Info ── */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">5</div>
                      <h3 className="text-base font-bold text-gray-900">Additional Information</h3>
                    </div>
                    <div className="pl-8">
                      <label className={labelClass}>Any Specific Questions or Concerns?</label>
                      <textarea
                        rows={3}
                        placeholder="Optional — Let us know if you have any specific queries about studying abroad"
                        className={inputClass + ' resize-none'}
                      />
                    </div>
                  </div>

                  {/* ── Submit ── */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer mb-5">
                      <input type="checkbox" required className="mt-0.5 accent-primary-600" />
                      <span>I agree to Ancile Academy's <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-primary-600 hover:underline">Terms and Conditions</a> *</span>
                    </label>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-white font-bold text-sm transition-all duration-200 cursor-pointer"
                      style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', boxShadow: '0 8px 28px rgba(37,99,235,.35)' }}
                      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 36px rgba(37,99,235,.55)'}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,.35)'}
                    >
                      Submit Application <ArrowRight size={16} />
                    </button>
                    <p className="text-xs text-gray-400 mt-3 text-center">
                      Once submitted, our expert counselors will reach out within 24–48 hours to schedule your free session.
                    </p>
                  </div>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </div>
  );
}
