import { Link } from 'react-router-dom';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { COUNTRIES } from '../../data/constants';
import DirectionAwareHover from '../ui/direction-aware-hover';

export default function Destinations() {
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <SectionWrapper className="pt-12 md:pt-16">
      <AnimateIn animation="fadeUp">
        <SectionHeader
          title="Your Destinations Is Just a Click Away"
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
            <Link to={`/countries/${country.slug}`} className="block">
              <DirectionAwareHover imageUrl={country.image} className="aspect-[4/3]">
                <h3 className="text-white font-bold text-base md:text-lg drop-shadow-lg">{country.name}</h3>
                <p className="text-white/80 text-xs mt-1 line-clamp-2">{country.tagline}</p>
              </DirectionAwareHover>
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
