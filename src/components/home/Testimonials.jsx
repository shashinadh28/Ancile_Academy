import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { TESTIMONIALS } from '../../data/constants';

const cardBgColors = [
  'bg-blue-50',
  'bg-violet-50',
  'bg-sky-50',
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [cardsRef, cardsInView] = useInView({ threshold: 0.15 });
  const perPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 border border-white/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/5 rounded-full" />
      </div>
      <div className="container-custom relative z-10">
        <AnimateIn animation="fadeUp">
          <SectionHeader
            title="See what our students have to say..."
            light
          />
        </AnimateIn>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={t.name}
              className={`transition-all duration-700 ease-out ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`${cardBgColors[i % cardBgColors.length]} rounded-2xl p-6 md:p-7 h-full flex flex-col relative overflow-hidden`}>
                  {/* Box grid background at 70% opacity */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.7,
                  }} />
                  <div className="relative z-10 flex flex-col h-full">
                    <Quote size={32} className="text-primary-500 mb-4 shrink-0" />
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm md:text-base">
                      {t.quote}
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                      <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="text-gray-900 font-semibold text-sm">{t.name}</h4>
                        <p className="text-gray-500 text-xs">{t.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <AnimateIn animation="fadeUp" delay={400}>
            <div className="flex items-center justify-center gap-4 mt-10">
              <button onClick={prev} className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"><ChevronLeft size={18} /></button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button key={i} onClick={() => setPage(i)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === page ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"><ChevronRight size={18} /></button>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
