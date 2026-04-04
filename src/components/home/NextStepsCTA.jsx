import { useState } from 'react';
import { ArrowRight, CheckCircle, BookOpen, Building, FileText, Coins, Stamp } from 'lucide-react';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const steps = [
  {
    icon: BookOpen,
    title: 'Choose Your Programme',
    description: 'Select the course that inspires you and shapes your future.',
  },
  {
    icon: Building,
    title: 'Find Your University',
    description: 'Discover and shortlist top universities with expert guidance.',
  },
  {
    icon: FileText,
    title: 'Prepare for Tests & Applications',
    description: 'Get support to ace your English language test and craft a strong Statement of Purpose.',
  },
  {
    icon: Coins,
    title: 'Secure Funding',
    description: 'Apply for scholarships and manage your finances for a smooth visa process.',
  },
  {
    icon: Stamp,
    title: 'Visa & Beyond',
    description: 'Prepare confidently for your visa interview and take the first step towards your international future.',
  },
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
    <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-8">

      {/* Ambient decorative rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 border border-white/8 rounded-full" />
        <div className="absolute -bottom-20 left-1/3 w-56 h-56 border border-white/6 rounded-full" />
        <div className="absolute top-10 right-1/4 w-32 h-32 border border-white/6 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: steps ── */}
          <div>
            <AnimateIn animation="fadeRight">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Your Next Steps to<br />
                <span className="text-sky-300">Studying Abroad</span>
              </h2>
              <p className="text-primary-200/80 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                Unlock a world of global opportunities, personal growth, and career success with a study experience beyond borders. The investment you make today pays off tomorrow with job prospects and extended visa options.
              </p>
            </AnimateIn>

            <div ref={stepsRef} className="space-y-5">
              {steps.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={title}
                  className={`flex items-start gap-4 transition-all duration-700 ease-out ${stepsInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  {/* Icon box */}
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <Icon size={18} className="text-sky-300" />
                  </div>
                  {/* Text */}
                  <div className="pt-0.5">
                    <h4 className="text-white font-bold text-sm md:text-base mb-0.5">{title}</h4>
                    <p className="text-primary-200/70 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: floating white consultation card ── */}
          <AnimateIn animation="fadeLeft" delay={150}>
            <div className="bg-white rounded-3xl shadow-2xl shadow-primary-950/50 p-7 md:p-9">

              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-sky-500" />
                  </div>
                  <p className="text-gray-900 font-bold text-lg mb-2">Booking Confirmed!</p>
                  <p className="text-gray-500 text-sm">Our counsellor will reach you within 2 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-1 leading-snug">
                    Book Your{' '}
                    <span className="text-sky-500">FREE Consultation</span>{' '}
                    Call with Our Certified Counsellors
                  </h3>
                  <div className="w-10 h-0.5 bg-sky-400 mx-auto mb-7 rounded-full" />

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
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
                        onChange={handleChange}
                        type="tel"
                        placeholder="Mobile Number *"
                        required
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all"
                      />
                    </div>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email ID *"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all"
                    />
                    <div className="relative">
                      <select
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:border-sky-400 transition-all bg-white appearance-none pr-9 text-gray-500"
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
                      <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M6 8L1 3h10L6 8z" />
                        </svg>
                      </div>
                    </div>

                    {/* Privacy checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div className="relative mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          onClick={() => setAgreed(!agreed)}
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${agreed ? 'bg-sky-500 border-sky-500' : 'bg-white border-gray-300'}`}
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
                        <a href="/contact" className="text-sky-500 hover:underline font-semibold">Privacy Policy</a>
                        {' '}and{' '}
                        <a href="/contact" className="text-sky-500 hover:underline font-semibold">Terms and Conditions</a>
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
  );
}
