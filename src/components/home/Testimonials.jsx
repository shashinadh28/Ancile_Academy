import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, BookOpen } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { TESTIMONIALS } from '../../data/constants';

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
              <div className="bg-white rounded-2xl p-6 md:p-7 h-full flex flex-col shadow-xl shadow-primary-900/10">
                <Quote size={32} className="text-primary-500 mb-4 shrink-0" />
                <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm md:text-base">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-gray-900 font-semibold text-sm">{t.name}</h4>
                    <p className="text-gray-400 text-xs">{t.country}</p>
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

        <AnimateIn animation="fadeUp" delay={500}>
          <div className="mt-10 bg-white/10 border border-white/20 rounded-2xl px-6 py-5 flex items-center gap-4 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <BookOpen size={22} className="text-white" />
            </div>
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Case Study</p>
              <p className="text-white font-semibold text-sm leading-relaxed">How We Helped [Student Name] Secure a Scholarship in Canada.</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
