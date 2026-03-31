import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper from '../components/shared/SectionWrapper';
import useInView from '../hooks/useInView';
import { COUNTRIES } from '../data/constants';

export default function Countries() {
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <>
      <PageBanner title="Study Destinations" subtitle="Explore the world's best countries for international education and find your perfect fit." breadcrumbs={[{ label: 'Countries' }]} />
      <SectionWrapper>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTRIES.map((country, i) => (
            <div key={country.slug} className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <Link to={`/countries/${country.slug}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-2xl">{country.flag}</span>
                    <h3 className="text-xl font-bold text-white">{country.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{country.tagline}</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(country.stats).map(([key, value]) => (
                      <div key={key} className="text-center bg-primary-50 rounded-xl p-2">
                        <div className="text-sm font-bold text-primary-700">{value}</div>
                        <div className="text-[10px] text-primary-600/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">Learn More <ArrowRight size={14} /></span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
