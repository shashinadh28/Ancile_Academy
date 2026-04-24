// import Hero from '../components/home/Hero'; // ← kept, just swapped out below
import LandingSlider from '../components/home/LandingSlider';
import ProcessSteps from '../components/home/ProcessSteps';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Destinations from '../components/home/Destinations';
import OptimalRouteSection from '../components/home/OptimalRouteSection';
import WorldMap from '../components/home/WorldMap';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import NextStepsCTA from '../components/home/NextStepsCTA';
import AssessmentPopup from '../components/home/AssessmentPopup';

export default function Home() {
  return (
    <>
      <AssessmentPopup />
      {/* New image-slider landing — swap back to <Hero /> any time */}
      <LandingSlider />
      <ProcessSteps />
      <WhyChooseUs />
      <Destinations />
      <OptimalRouteSection />
      <WorldMap />
      <ServicesOverview />
      <Testimonials />
      <BlogPreview />
      <NextStepsCTA />
    </>
  );
}
