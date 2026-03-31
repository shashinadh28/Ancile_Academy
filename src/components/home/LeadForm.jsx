import { BookOpen, Search, FileText, Coins, Plane } from 'lucide-react';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const destinations = ['USA', 'UK', 'Canada', 'Australia', 'Ireland', 'Europe', 'Other'];

const steps = [
  { icon: BookOpen, title: 'Choose Your Programme', desc: 'Select the course that inspires you and shapes your future.' },
  { icon: Search, title: 'Find Your University', desc: 'Discover and shortlist top universities with expert guidance.' },
  { icon: FileText, title: 'Prepare for Tests & Applications', desc: 'Get support to ace your English language test and craft a strong Statement of Purpose.' },
  { icon: Coins, title: 'Secure Funding', desc: 'Apply for scholarships and manage your finances for a smooth visa process.' },
  { icon: Plane, title: 'Visa & Beyond', desc: 'Prepare confidently for your visa interview and take the first step towards your international future.' },
];

export default function LeadForm() {
  const [stepsRef, stepsInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.2 });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our certified counsellor will contact you within 24 hours.');
  };

  return (
    <section className="bg-gradient-to-br from-warm-800 via-warm-900 to-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <AnimateIn animation="fadeUp">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-3">
            Your Next Steps to Studying Abroad
          </h2>
          <p className="text-warm-400 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
            Unlock a world of global opportunities, personal growth, and career success with a study experience beyond borders.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div ref={stepsRef} className="space-y-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                  stepsInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary-600/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-0.5">{title}</h3>
                  <p className="text-warm-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={formRef}
            className={`transition-all duration-1000 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/10">
              <h3 className="text-warm-900 font-bold text-lg mb-1">
                Book Your <span className="text-primary-600">FREE Consultation</span> Call with Our Certified Counsellors
              </h3>
              <p className="text-warm-400 text-sm mb-6">Get personalized guidance in 24 hours</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input placeholder="Full Name *" required className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 text-sm placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" />
                <div className="flex items-center gap-2">
                  <span className="px-3 py-3 rounded-xl border border-warm-200 bg-warm-50 text-sm text-warm-500 shrink-0">+91</span>
                  <input placeholder="Mobile Number*" type="tel" required className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 text-sm placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" />
                </div>
                <input placeholder="Email ID *" type="email" required className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 text-sm placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all" />
                <select required className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-white text-warm-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none">
                  <option value="">Destination*</option>
                  {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
                <label className="flex items-start gap-2 text-xs text-warm-500 cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 accent-primary-600" />
                  <span>I agree to Ancile Academy's <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-primary-600 hover:underline">Terms and Conditions</a> *</span>
                </label>
                <Button type="submit" className="w-full" size="lg">
                  Book a FREE Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
