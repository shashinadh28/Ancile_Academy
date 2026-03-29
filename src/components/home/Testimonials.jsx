import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { TESTIMONIALS } from '../../data/constants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [cardRef, cardInView] = useInView({ threshold: 0.2 });

  const next = () => setCurrent((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <SectionWrapper dark>
      <AnimateIn animation="fadeUp">
        <SectionHeader
          badge="Testimonials"
          title="What Our Students Say"
          subtitle="Hear from students who've successfully achieved their study abroad dreams with our guidance."
          light
        />
      </AnimateIn>

      <div className="max-w-4xl mx-auto relative">
        <div
          ref={cardRef}
          className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-1000 ease-out ${
            cardInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          <Quote size={48} className="text-primary-500/30 mb-6" />
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            "{TESTIMONIALS[current].quote}"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={TESTIMONIALS[current].image}
              alt={TESTIMONIALS[current].name}
              className="w-14 h-14 rounded-full object-cover border-2 border-primary-500/30"
            />
            <div>
              <h4 className="text-white font-semibold">{TESTIMONIALS[current].name}</h4>
              <p className="text-gray-400 text-sm">
                {TESTIMONIALS[current].university} • {TESTIMONIALS[current].country}
              </p>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimateIn animation="fadeUp" delay={500}>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? 'w-8 bg-primary-500' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </AnimateIn>
      </div>
    </SectionWrapper>
  );
}
