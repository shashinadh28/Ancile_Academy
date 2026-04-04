import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper from '../components/shared/SectionWrapper';
import { Input, Textarea } from '../components/shared/FormInput';
import Button from '../components/shared/Button';
import Card, { IconBox } from '../components/shared/Card';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';

const contactInfo = [
  { icon: Mail, title: 'Email Us', details: ['info@ancileacademy.com', 'admissions@ancileacademy.com'], color: 'bg-primary-100 text-primary-700' },
  { icon: Phone, title: 'Call Us', details: ['+91 123 456 7890', '+91 987 654 3210'], color: 'bg-sky-100 text-sky-700' },
  { icon: MapPin, title: 'Visit Us', details: ['123 Education Lane', 'Knowledge Park, New Delhi 110001'], color: 'bg-emerald-100 text-emerald-700' },
  { icon: Clock, title: 'Working Hours', details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'], color: 'bg-amber-100 text-amber-700' },
];

export default function Contact() {
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });

  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you for reaching out! Our team will contact you within 2 hours.'); };

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get in touch with our expert counselors. We're here to help you every step of the way." breadcrumbs={[{ label: 'Contact' }]} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <AnimateIn animation="fadeRight">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact <span className="text-primary-600">Us</span></h2>
              <p className="text-gray-500 mb-8">We're here to help! Whether you have questions or are ready to start your journey, reach out to us.</p>
            </AnimateIn>
            <div ref={formRef}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0ms' }}>
                  <Input label="Name" name="name" placeholder="Your name" required />
                </div>
                <div className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '100ms' }}>
                  <Input label="Email" name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
                  <Input label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
                </div>
                <div className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '300ms' }}>
                  <Textarea label="Message" name="message" placeholder="Your message..." rows={5} required />
                </div>
                <div className={`transition-all duration-700 ease-out ${formInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '400ms' }}>
                  <Button type="submit" size="lg"><Send size={16} />Submit</Button>
                </div>
                <p className="text-sm text-gray-400">Our team will get back to you within 2 hours.</p>
              </form>
            </div>
          </div>

          <div ref={cardsRef} className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, title, details, color }, i) => (
              <div key={title} className={`transition-all duration-700 ease-out ${cardsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <Card className="flex items-start gap-4">
                  <IconBox className={`shrink-0 ${color}`}><Icon size={18} /></IconBox>
                  <div><h3 className="font-bold text-gray-900 mb-1 text-sm">{title}</h3>{details.map(d => <p key={d} className="text-sm text-gray-500">{d}</p>)}</div>
                </Card>
              </div>
            ))}
            <div className={`transition-all duration-700 ease-out ${cardsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '500ms' }}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
                <MessageCircle size={28} className="mb-3 text-primary-200" />
                <h3 className="font-bold mb-1">Need Immediate Help?</h3>
                <p className="text-white/70 text-sm mb-4">Chat with our counselors on WhatsApp for quick answers.</p>
                <Button variant="secondary" size="sm" href="https://wa.me/911234567890">Chat on WhatsApp</Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <AnimateIn animation="scaleIn" duration="slow">
          <div className="bg-gray-200 rounded-2xl h-72 flex items-center justify-center">
            <div className="text-center"><MapPin size={40} className="text-gray-400 mx-auto mb-2" /><p className="text-gray-600 font-medium text-sm">Interactive Map</p><p className="text-xs text-gray-400">123 Education Lane, Knowledge Park, New Delhi</p></div>
          </div>
        </AnimateIn>
      </SectionWrapper>
    </>
  );
}
