import Hero from '../components/home/Hero';
import LeadForm from '../components/home/LeadForm';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Destinations from '../components/home/Destinations';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import UniversityLogos from '../components/home/UniversityLogos';
import BlogPreview from '../components/home/BlogPreview';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <LeadForm />
      <WhyChooseUs />
      <Destinations />
      <ServicesOverview />
      <Testimonials />
      <UniversityLogos />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
