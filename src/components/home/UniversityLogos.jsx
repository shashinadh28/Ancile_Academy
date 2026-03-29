import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { UNIVERSITY_LOGOS } from '../../data/constants';

export default function UniversityLogos() {
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper className="bg-gray-50">
      <AnimateIn animation="fadeUp">
        <SectionHeader
          badge="Partner Universities"
          title="1,500+ University Partners Worldwide"
          subtitle="Direct partnerships with leading universities ensure our students get priority access and exclusive benefits."
        />
      </AnimateIn>
      <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
        {UNIVERSITY_LOGOS.map(({ name, initials }, i) => (
          <div
            key={name}
            className={`transition-all duration-600 ease-out ${gridInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center text-navy-800 font-bold text-sm group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                {initials}
              </div>
              <span className="text-xs text-gray-500 font-medium text-center">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
