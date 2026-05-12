import { lazy, Suspense } from 'react';
import LandingSlider from '../components/home/LandingSlider';
import ProcessSteps from '../components/home/ProcessSteps';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AssessmentPopup from '../components/home/AssessmentPopup';

const Destinations = lazy(() => import('../components/home/Destinations'));
const OptimalRouteSection = lazy(() => import('../components/home/OptimalRouteSection'));
const WorldMap = lazy(() => import('../components/home/WorldMap'));
const ServicesOverview = lazy(() => import('../components/home/ServicesOverview'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const BlogPreview = lazy(() => import('../components/home/BlogPreview'));
const NextStepsCTA = lazy(() => import('../components/home/NextStepsCTA'));

export default function Home() {
  return (
    <>
      <AssessmentPopup />
      <LandingSlider />
      <ProcessSteps />
      <WhyChooseUs />
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
        <Destinations />
        <OptimalRouteSection />
        <WorldMap />
        <ServicesOverview />
        <Testimonials />
        <BlogPreview />
        <NextStepsCTA />
      </Suspense>
    </>
  );
}
