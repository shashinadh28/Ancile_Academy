import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimateIn from './AnimateIn';

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <AnimateIn animation="fadeRight">
            <nav className="flex items-center gap-1 text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  <ChevronRight size={14} />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-primary-300">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </AnimateIn>
        )}
        <AnimateIn animation="fadeUp" delay={100} duration="slow">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
        </AnimateIn>
        {subtitle && (
          <AnimateIn animation="fadeUp" delay={250}>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              {subtitle}
            </p>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
