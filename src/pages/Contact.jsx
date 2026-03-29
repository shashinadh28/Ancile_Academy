import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper from '../components/shared/SectionWrapper';
import { Input, Select, Textarea } from '../components/shared/FormInput';
import Button from '../components/shared/Button';
import Card, { IconBox } from '../components/shared/Card';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';

const contactInfo = [
  { icon: Mail, title: 'Email Us', details: ['info@ancileacademy.com', 'admissions@ancileacademy.com'] },
  { icon: Phone, title: 'Call Us', details: ['+91 123 456 7890', '+91 987 654 3210'] },
  { icon: MapPin, title: 'Visit Us', details: ['123 Education Lane', 'Knowledge Park, New Delhi 110001'] },
  { icon: Clock, title: 'Working Hours', details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'] },
];

export default function Contact() {
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will contact you within 24 hours.');
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our expert counselors. We're here to help you every step of the way."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <AnimateIn animation="fadeRight">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-50 text-primary-600 mb-4">
                Send a Message
              </span>
              <h2 className="text-3xl font-bold text-navy-900 mb-2">Let's Start a Conversation</h2>
              <p className="text-gray-500 mb-8">
                Fill in the form below and our counselors will get back to you within 24 hours.
              </p>
            </AnimateIn>
            <div ref={formRef}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    <Input key="fn" label="First Name" name="firstName" placeholder="John" required />,
                    <Input key="ln" label="Last Name" name="lastName" placeholder="Doe" required />,
                  ].map((field, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {field}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    <Input key="email" label="Email" name="email" type="email" placeholder="john@example.com" required />,
                    <Input key="phone" label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" required />,
                  ].map((field, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                      style={{ transitionDelay: `${200 + i * 100}ms` }}
                    >
                      {field}
                    </div>
                  ))}
                </div>
                <div
                  className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: '400ms' }}
                >
                  <Select
                    label="Subject"
                    name="subject"
                    placeholder="What can we help you with?"
                    options={['University Admission', 'Visa Assistance', 'Test Preparation', 'Scholarship Guidance', 'General Inquiry']}
                    required
                  />
                </div>
                <div
                  className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: '500ms' }}
                >
                  <Textarea
                    label="Your Message"
                    name="message"
                    placeholder="Tell us about your study abroad plans and how we can help..."
                    rows={5}
                    required
                  />
                </div>
                <div
                  className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: '600ms' }}
                >
                  <Button type="submit" size="lg">
                    <Send size={18} />
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div ref={cardsRef} className="lg:col-span-2 space-y-5">
            {contactInfo.map(({ icon: Icon, title, details }, i) => (
              <div
                key={title}
                className={`transition-all duration-700 ease-out ${cardsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Card className="flex items-start gap-4">
                  <IconBox className="shrink-0">
                    <Icon size={20} />
                  </IconBox>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">{title}</h3>
                    {details.map((d) => (
                      <p key={d} className="text-sm text-gray-500">{d}</p>
                    ))}
                  </div>
                </Card>
              </div>
            ))}

            <div
              className={`transition-all duration-700 ease-out ${cardsInView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="bg-gradient-to-br from-primary-600 to-navy-900 rounded-2xl p-6 text-white">
                <MessageCircle size={32} className="mb-4 text-primary-200" />
                <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
                <p className="text-primary-100 text-sm mb-4">
                  Chat with our counselors instantly on WhatsApp for quick answers to your questions.
                </p>
                <Button variant="secondary" size="sm" href="https://wa.me/911234567890">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <AnimateIn animation="scaleIn" duration="slow">
          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">Interactive Map</p>
              <p className="text-sm text-gray-400">123 Education Lane, Knowledge Park, New Delhi</p>
            </div>
          </div>
        </AnimateIn>
      </SectionWrapper>
    </>
  );
}
