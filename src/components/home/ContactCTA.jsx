import { ArrowRight, Phone } from 'lucide-react';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <AnimateIn animation="fadeDown">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
        </AnimateIn>
        <AnimateIn animation="fadeUp" delay={200}>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-10">
            Take the first step toward your dream university. Book a free consultation with our expert counselors today.
          </p>
        </AnimateIn>
        <AnimateIn animation="scaleIn" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="secondary" size="lg">
              Book Free Consultation
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" href="tel:+911234567890">
              <Phone size={18} />
              Call Us Now
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
