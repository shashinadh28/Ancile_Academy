import { ArrowRight } from 'lucide-react';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';

export default function ContactCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <AnimateIn animation="scaleIn" duration="slow">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-navy-600 rounded-2xl px-6 md:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-white text-lg md:text-xl font-bold text-center md:text-left">
              Book Your <span className="text-accent-300">FREE Consultation</span> with Our Experts
            </h3>
            <Button to="/contact" variant="secondary" size="md" className="shrink-0">
              Talk to Us
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
