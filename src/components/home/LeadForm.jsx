import { Send } from 'lucide-react';
import SectionWrapper from '../shared/SectionWrapper';
import { Input, Select, Textarea } from '../shared/FormInput';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const destinations = ['USA', 'UK', 'Canada', 'Australia', 'Ireland', 'Europe', 'Other'];
const intakes = ['Fall 2025', 'Spring 2026', 'Fall 2026', 'Spring 2027'];
const studyLevels = ['Undergraduate', 'Postgraduate', 'PhD', 'Diploma/Certificate'];

export default function LeadForm() {
  const [formRef, formInView] = useInView({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our counselor will contact you within 24 hours.');
  };

  return (
    <SectionWrapper id="lead-form" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <AnimateIn animation="fadeDown">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-50 text-primary-600 mb-4">
              Free Consultation
            </span>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Get Your Free Counseling Session
            </h2>
          </AnimateIn>
          <AnimateIn animation="fadeUp" delay={200}>
            <p className="text-gray-500 text-lg">
              Fill in your details and our expert counselors will reach out within 24 hours
            </p>
          </AnimateIn>
        </div>

        <AnimateIn animation="slideUp" delay={300} duration="slow">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 md:p-10"
          >
            <div ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                <Input key="name" label="Full Name" name="fullName" placeholder="John Doe" required />,
                <Input key="email" label="Email Address" name="email" type="email" placeholder="john@example.com" required />,
                <Input key="phone" label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" required />,
                <Select key="dest" label="Preferred Destination" name="destination" placeholder="Select country" options={destinations} required />,
                <Select key="level" label="Study Level" name="studyLevel" placeholder="Select level" options={studyLevels} required />,
                <Select key="intake" label="Preferred Intake" name="intake" placeholder="Select intake" options={intakes} required />,
              ].map((field, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  {field}
                </div>
              ))}
            </div>
            <div
              className={`mt-5 transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              <Textarea
                label="Tell us about your goals"
                name="message"
                placeholder="Share your academic background, goals, and any specific questions..."
                rows={3}
              />
            </div>
            <div
              className={`mt-6 text-center transition-all duration-700 ease-out ${formInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: '1100ms' }}
            >
              <Button type="submit" size="lg">
                <Send size={18} />
                Book Free Session
              </Button>
            </div>
          </form>
        </AnimateIn>
      </div>
    </SectionWrapper>
  );
}
