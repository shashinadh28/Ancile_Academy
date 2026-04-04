import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper from '../components/shared/SectionWrapper';
import Button from '../components/shared/Button';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';

const countries = ['USA', 'UK', 'Canada', 'Australia', 'New Zealand', 'Ireland', 'Europe', 'Other'];
const intakes = ['January', 'May', 'September'];

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [hasTakenTest, setHasTakenTest] = useState('');
  const [otherIntake, setOtherIntake] = useState(false);
  const [formRef, formInView] = useInView({ threshold: 0.05 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <>
        <PageBanner title="Thank You!" subtitle="Your free counseling session request has been received." breadcrumbs={[{ label: 'Get Started' }]} />
        <SectionWrapper>
          <div className="max-w-2xl mx-auto text-center">
            <AnimateIn animation="scaleIn">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">We've Received Your Details!</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Once submitted, our expert counselors will reach out to you within <strong className="text-gray-900">24-48 hours</strong> to schedule your free session.
              </p>
              <Button to="/">Back to Home <ArrowRight size={16} /></Button>
            </AnimateIn>
          </div>
        </SectionWrapper>
      </>
    );
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <>
      <PageBanner
        title="Get Started for Free"
        subtitle="Fill in the form below and our expert counselors will schedule your free counseling session."
        breadcrumbs={[{ label: 'Get Started' }]}
      />

      <SectionWrapper>
        <div ref={formRef} className="max-w-3xl mx-auto">
          <AnimateIn animation="fadeUp">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Ancile Academy — Free Counseling Session Form</h2>
              <p className="text-gray-400 text-sm mb-8">All fields marked with * are required</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Personal Information</h3>
                  <div className="space-y-4">
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
                          <span className="px-3 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-500 shrink-0">+91</span>
                          <input type="tel" placeholder="98765 43210" required className={inputClass} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Background */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Academic Background</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Highest Qualification *</label>
                        <input placeholder="e.g., B.Tech, B.Sc, MBA, etc." required className={inputClass} />
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

                {/* Study Abroad Interests */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Study Abroad Interests</h3>
                  <div className="space-y-4">
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

                {/* English Proficiency Test */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">English Proficiency Test</h3>
                  <div className="space-y-4">
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
                          <input placeholder="e.g., IELTS, TOEFL, PTE, etc." className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Score</label>
                          <input placeholder="e.g., 7.5" className={inputClass} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Additional Information</h3>
                  <div>
                    <label className={labelClass}>Any Specific Questions or Concerns?</label>
                    <textarea
                      rows={4}
                      placeholder="Optional — Let us know if you have any specific queries about studying abroad"
                      className={inputClass + ' resize-none'}
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer mb-4">
                    <input type="checkbox" required className="mt-0.5 accent-primary-600" />
                    <span>I agree to Ancile Academy's <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-primary-600 hover:underline">Terms and Conditions</a> *</span>
                  </label>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Application
                    <ArrowRight size={16} />
                  </Button>
                  <p className="text-xs text-gray-400 mt-3">
                    Once submitted, our expert counselors will reach out to you within 24-48 hours to schedule your free session.
                  </p>
                </div>
              </form>
            </div>
          </AnimateIn>
        </div>
      </SectionWrapper>
    </>
  );
}
