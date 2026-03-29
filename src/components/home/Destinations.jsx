import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { COUNTRIES } from '../../data/constants';

export default function Destinations() {
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper className="bg-gray-50">
      <AnimateIn animation="fadeUp">
        <SectionHeader
          badge="Study Destinations"
          title="Explore Top Study Destinations"
          subtitle="Discover world-class education opportunities in the most sought-after countries for international students."
        />
      </AnimateIn>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {COUNTRIES.map((country, i) => (
          <div
            key={country.slug}
            className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <Link
              to={`/countries/${country.slug}`}
              className="group relative rounded-2xl overflow-hidden h-64 md:h-72 block"
            >
              <img
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">{country.flag}</span>
                  <h3 className="text-xl font-bold text-white">{country.name}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{country.tagline}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-300 group-hover:text-primary-200 transition-colors">
                  Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
