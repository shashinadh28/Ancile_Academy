import { Link } from 'react-router-dom';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { COUNTRIES } from '../../data/constants';

export default function Destinations() {
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper>
      <AnimateIn animation="fadeUp">
        <SectionHeader
          title="Countries We Serve"
          subtitle="Explore study opportunities across the globe. Click on any destination to learn more about universities, scholarships, and visa requirements."
        />
      </AnimateIn>
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {COUNTRIES.map((country, i) => (
          <div
            key={country.slug}
            className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <Link
              to={`/countries/${country.slug}`}
              className="group relative rounded-2xl overflow-hidden block aspect-[4/3]"
            >
              <img src={country.image} alt={country.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">{country.name}</h3>
                </div>
                <p className="text-white/70 text-xs mt-1 line-clamp-1">{country.tagline}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
