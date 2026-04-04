import { ArrowRight, GraduationCap, Stamp, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimateIn from '../shared/AnimateIn';
import Button from '../shared/Button';
import useInView from '../../hooks/useInView';
import { SERVICES } from '../../data/constants';

const iconMap = { GraduationCap, Stamp, Award, BookOpen };

const accents = [
  {
    overlay: 'from-primary-700/85 to-primary-950/95',
    iconRing: 'bg-primary-400/20 border-primary-400/30 text-primary-200',
    bar: 'bg-primary-400',
    glow: 'hover:shadow-primary-500/25',
  },
  {
    overlay: 'from-violet-600/85 to-indigo-950/95',
    iconRing: 'bg-violet-400/20 border-violet-400/30 text-violet-200',
    bar: 'bg-violet-400',
    glow: 'hover:shadow-violet-500/25',
  },
  {
    overlay: 'from-emerald-600/85 to-teal-950/95',
    iconRing: 'bg-emerald-400/20 border-emerald-400/30 text-emerald-200',
    bar: 'bg-emerald-400',
    glow: 'hover:shadow-emerald-500/25',
  },
  {
    overlay: 'from-amber-500/85 to-orange-950/95',
    iconRing: 'bg-amber-400/20 border-amber-400/30 text-amber-200',
    bar: 'bg-amber-400',
    glow: 'hover:shadow-amber-500/25',
  },
];

export default function ServicesOverview() {
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <section className="relative bg-gray-950 overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/3 w-[480px] h-[480px] bg-primary-500/8 rounded-full blur-[130px]" />
        <div className="absolute -bottom-40 right-1/4 w-[480px] h-[480px] bg-violet-500/6 rounded-full blur-[130px]" />
      </div>

      <div className="container-custom relative z-10">

        {/* Section header */}
        <AnimateIn animation="fadeUp">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-400 text-[11px] font-bold uppercase tracking-widest mb-5">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Featured Services
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
              From your first consultation to settling in your dream university — we handle every detail of your journey.
            </p>
          </div>
        </AnimateIn>

        {/* Cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.slice(0, 4).map(({ title, headline, description, image, icon }, i) => {
            const Icon = iconMap[icon];
            const accent = accents[i];

            return (
              <div
                key={title}
                className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <Link
                  to="/services"
                  className={`group relative flex flex-col rounded-2xl overflow-hidden h-[360px] shadow-xl shadow-black/50 ${accent.glow} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  {/* Photo */}
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                  />

                  {/* Static dark vignette — always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/15 transition-opacity duration-500" />

                  {/* Coloured tinted overlay — fades in on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${accent.overlay} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />

                  {/* ── Top row ── */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    {/* Icon badge */}
                    <div className={`w-9 h-9 rounded-xl ${accent.iconRing} border backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon size={16} />
                    </div>
                    {/* Number */}
                    <span className="text-[11px] font-bold text-white/25 group-hover:text-white/55 transition-colors duration-400 tabular-nums">
                      0{i + 1}
                    </span>
                  </div>

                  {/* ── Bottom content ── */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">

                    {/* Animated accent bar */}
                    <div className={`h-[2px] w-0 group-hover:w-8 ${accent.bar} rounded-full mb-3 transition-all duration-500 delay-75`} />

                    {/* Service title label */}
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45 group-hover:text-white/75 mb-1.5 transition-colors duration-300">
                      {title}
                    </p>

                    {/* Headline — always visible */}
                    <h3 className="text-white font-bold text-[15px] leading-snug">
                      {headline}
                    </h3>

                    {/* Description — max-h trick to smoothly reveal */}
                    <div className="max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-out delay-75">
                      <p className="text-white/70 text-xs leading-relaxed mt-2.5">
                        {description}
                      </p>
                    </div>

                    {/* Learn More CTA */}
                    <div className="flex items-center gap-1.5 max-h-0 group-hover:max-h-10 overflow-hidden transition-all duration-400 delay-100 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 mt-0 group-hover:mt-3">
                      <span className="text-white text-[11px] font-semibold">Learn More</span>
                      <ArrowRight size={11} className="text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover ring border */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 ring-white/20 transition-all duration-500 pointer-events-none" />

                  {/* Top-right shimmer flash on hover */}
                  <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 rotate-12 pointer-events-none" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <AnimateIn animation="fadeUp" delay={400}>
          <div className="text-center mt-12">
            <Button to="/services" variant="outline">
              View All Services
              <ArrowRight size={16} />
            </Button>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
