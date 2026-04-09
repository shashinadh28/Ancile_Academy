import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Lazy-loaded pages — browser only downloads them when needed
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const Countries = lazy(() => import('./pages/Countries'));
const CountryDetail = lazy(() => import('./pages/CountryDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const GetStarted = lazy(() => import('./pages/GetStarted'));
const EnglishCoaching = lazy(() => import('./pages/EnglishCoaching'));
const Resources = lazy(() => import('./pages/Resources'));
const IELTS = lazy(() => import('./pages/exams/IELTS'));
const TOEFL = lazy(() => import('./pages/exams/TOEFL'));
const PTE = lazy(() => import('./pages/exams/PTE'));
const Duolingo = lazy(() => import('./pages/exams/Duolingo'));
const OET = lazy(() => import('./pages/exams/OET'));
const SAT = lazy(() => import('./pages/exams/SAT'));
const GRE = lazy(() => import('./pages/exams/GRE'));
const GMAT = lazy(() => import('./pages/exams/GMAT'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-primary-200 border-t-primary-600 animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/countries"
            element={
              <Suspense fallback={<PageLoader />}>
                <Countries />
              </Suspense>
            }
          />
          <Route
            path="/countries/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <CountryDetail />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<PageLoader />}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPost />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/get-started"
            element={
              <Suspense fallback={<PageLoader />}>
                <GetStarted />
              </Suspense>
            }
          />
          <Route
            path="/english-coaching"
            element={
              <Suspense fallback={<PageLoader />}>
                <EnglishCoaching />
              </Suspense>
            }
          />
          <Route
            path="/exams/ielts"
            element={
              <Suspense fallback={<PageLoader />}>
                <IELTS />
              </Suspense>
            }
          />
          <Route
            path="/exams/toefl"
            element={
              <Suspense fallback={<PageLoader />}>
                <TOEFL />
              </Suspense>
            }
          />
          <Route
            path="/exams/pte"
            element={
              <Suspense fallback={<PageLoader />}>
                <PTE />
              </Suspense>
            }
          />
          <Route
            path="/exams/duolingo"
            element={
              <Suspense fallback={<PageLoader />}>
                <Duolingo />
              </Suspense>
            }
          />
          <Route
            path="/exams/oet"
            element={
              <Suspense fallback={<PageLoader />}>
                <OET />
              </Suspense>
            }
          />
          <Route
            path="/exams/sat"
            element={
              <Suspense fallback={<PageLoader />}>
                <SAT />
              </Suspense>
            }
          />
          <Route
            path="/exams/gre"
            element={
              <Suspense fallback={<PageLoader />}>
                <GRE />
              </Suspense>
            }
          />
          <Route
            path="/exams/gmat"
            element={
              <Suspense fallback={<PageLoader />}>
                <GMAT />
              </Suspense>
            }
          />
          <Route
            path="/resources"
            element={
              <Suspense fallback={<PageLoader />}>
                <Resources />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
