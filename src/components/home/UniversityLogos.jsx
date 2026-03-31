import SectionWrapper from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { UNIVERSITY_LOGOS } from '../../data/constants';

export default function UniversityLogos() {
  const [gridRef, gridInView] = useInView({ threshold: 0.2 });

  return (
    <SectionWrapper className="bg-gray-50 !py-12 md:!py-16">
      <AnimateIn animation="fadeUp">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Our Industry Partnerships</h2>
        <p className="text-gray-500 text-center mb-10 text-sm">Recognized and partnered with leading education bodies worldwide</p>
      </AnimateIn>
      <div
        ref={gridRef}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
      >
        {UNIVERSITY_LOGOS.map(({ name, initials }, i) => (
          <div
            key={name}
            className={`transition-all duration-600 ease-out ${gridInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl border border-gray-100 flex flex-col items-center justify-center gap-1.5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-xs group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                {initials}
              </div>
              <span className="text-[10px] text-gray-500 font-medium text-center px-1">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
