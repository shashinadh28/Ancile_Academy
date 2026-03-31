import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimateIn from './AnimateIn';

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="bg-gradient-to-br from-warm-900 via-warm-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-72 h-72 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl" />
      </div>
      <div className="container-custom relative z-10 py-24 md:py-32 px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
        {breadcrumbs.length > 0 && (
          <AnimateIn animation="fadeRight">
            <nav className="flex items-center gap-1 text-sm text-white/60 mb-4">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
        </AnimateIn>
        {subtitle && (
          <AnimateIn animation="fadeUp" delay={250}>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">{subtitle}</p>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
