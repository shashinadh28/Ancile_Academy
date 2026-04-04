import Hero from '../components/home/Hero';
import ProcessSteps from '../components/home/ProcessSteps';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Destinations from '../components/home/Destinations';
import WorldMap from '../components/home/WorldMap';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import UniversityLogos from '../components/home/UniversityLogos';
import BlogPreview from '../components/home/BlogPreview';
import NextStepsCTA from '../components/home/NextStepsCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessSteps />
      <WhyChooseUs />
      <Destinations />
      <WorldMap />
      <ServicesOverview />
      <Testimonials />
      <UniversityLogos />
      <BlogPreview />
      <NextStepsCTA />
    </>
  );
}
