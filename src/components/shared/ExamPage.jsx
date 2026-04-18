import { ArrowRight, CheckCircle, BookOpen, Clock, Award, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimateIn from './AnimateIn';

/* ─────────────────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────────────────── */

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm my-6">
      <table className="w-full text-sm text-left">
        <thead>
          <tr style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
            {headers.map((h) => (
              <th key={h} className="px-5 py-4 text-white font-semibold text-sm tracking-wide whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {rows.map((row, i) => (
            <tr
              key={i}
              className="transition-colors hover:bg-blue-50/50"
              style={{ background: i % 2 === 0 ? '#ffffff' : '#f8faff' }}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-5 py-4 text-sm leading-relaxed ${j === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3 my-5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/60 border border-blue-100/70 group hover:bg-blue-50 hover:border-blue-200 transition-all"
        >
          <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)' }}>
            <CheckCircle size={13} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CTABanner({ text }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden p-6 md:p-8 my-8 flex flex-col sm:flex-row items-center justify-between gap-5"
      style={{ background: 'linear-gradient(135deg, #172554 0%, #1d4ed8 50%, #6366f1 100%)' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      {/* Orb */}
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #818cf8, transparent 70%)' }} />

      <div className="relative flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
          <Award size={20} className="text-white" />
        </div>
        <p className="text-white font-semibold text-base leading-snug">{text}</p>
      </div>
      <Link
        to="/get-started"
        className="relative shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95"
        style={{ background: 'rgba(255,255,255,1)', color: '#1d4ed8', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
      >
        Get Free Guidance <ArrowRight size={15} />
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Section heading with decorative accent
───────────────────────────────────────────────────────────────────────── */
function SectionHeading({ text }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1.5 h-8 rounded-full shrink-0" style={{ background: 'linear-gradient(180deg, #2563eb, #6366f1)' }} />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{text}</h2>
    </div>
  );
}

function SubHeading({ text }) {
  return (
    <h3 className="text-base font-bold text-primary-700 uppercase tracking-widest mb-3 flex items-center gap-2">
      <ChevronRight size={16} className="text-primary-400" />{text}
    </h3>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Alternating section blocks
───────────────────────────────────────────────────────────────────────── */
const sectionStyles = [
  { bg: '#ffffff', accentGlow: false },
  { bg: '#f8faff', accentGlow: true },
];

function SectionBlock({ sec, index }) {
  const style = sectionStyles[index % 2];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: style.bg,
        borderTop: index % 2 === 1 ? '1px solid #e8eef6' : '1px solid #f1f5f9',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: index % 2 === 0
            ? 'radial-gradient(circle, rgba(37,99,235,0.035) 1px, transparent 1px)'
            : 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: index % 2 === 0 ? '28px 28px' : '40px 40px',
          opacity: index % 2 === 0 ? 1 : 0.45,
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      />
      {style.accentGlow && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 75% 50%, rgba(37,99,235,0.05) 0%, transparent 60%)' }} />
      )}

      <AnimateIn animation="fadeUp" delay={Math.min((index + 1) * 60, 250)}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {sec.heading && <SectionHeading text={sec.heading} />}
          {sec.subheading && <SubHeading text={sec.subheading} />}
          {sec.paragraphs && sec.paragraphs.map((p, j) => (
            <p key={j} className="text-gray-600 leading-[1.9] mb-4 text-[15px]">{p}</p>
          ))}
          {sec.bullets && <BulletList items={sec.bullets} />}
          {sec.table && <Table headers={sec.table.headers} rows={sec.table.rows} />}
          {sec.cta && <CTABanner text={sec.cta} />}
        </div>
      </AnimateIn>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Quick-stat pill used in the hero
───────────────────────────────────────────────────────────────────────── */
function StatPill({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
      <Icon size={14} className="text-blue-200 shrink-0" />
      <span className="text-white text-xs font-semibold whitespace-nowrap">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Main ExamPage
───────────────────────────────────────────────────────────────────────── */
export default function ExamPage({ title, breadcrumbs, subtitle, sections, image, stats }) {
  const firstSection = sections[0];
  const restSections = sections.slice(1);

  // Default quick stats if none supplied
  const quickStats = stats || [
    { icon: BookOpen, label: 'Globally Recognised' },
    { icon: Clock, label: 'Computer & Paper Based' },
    { icon: Users, label: '3M+ Test-takers / Year' },
    { icon: Award, label: 'Band 0–9 Scale' },
  ];

  return (
    <>
      {/* ── Hero section ─────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 45%, #1d4ed8 75%, #2563eb 100%)' }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
        {/* Ambient orbs */}
        <div className="absolute pointer-events-none" style={{ top: -60, right: -60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.30) 0%, transparent 70%)' }} />
        <div className="absolute pointer-events-none" style={{ bottom: -80, left: -40, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.20) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className={`grid ${image ? 'lg:grid-cols-2' : ''} gap-10 lg:gap-16 items-center`}>

            {/* Left: text */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
                style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)', color: '#bfdbfe' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Exam Preparation Guide
              </div>

              <AnimateIn animation="fadeUp">
                {subtitle && (
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">{subtitle}</p>
                )}
              </AnimateIn>

              {firstSection && firstSection.paragraphs && (
                <AnimateIn animation="fadeUp" delay={100}>
                  <p className="text-blue-200 leading-relaxed text-[15px] mb-8 max-w-xl mx-auto lg:mx-0">
                    {firstSection.paragraphs[0]}
                  </p>
                </AnimateIn>
              )}

              {/* Quick-stat pills */}
              <AnimateIn animation="fadeUp" delay={180}>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {quickStats.map(({ icon, label }) => (
                    <StatPill key={label} icon={icon} label={label} />
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn animation="fadeUp" delay={250}>
                <Link
                  to="/get-started"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-primary-700 transition-all hover:scale-105 active:scale-95"
                  style={{ background: '#ffffff', boxShadow: '0 8px 28px rgba(0,0,0,0.18)' }}
                >
                  Get Free Counselling <ArrowRight size={16} />
                </Link>
              </AnimateIn>
            </div>

            {/* Right: image */}
            {image && (
              <AnimateIn animation="fadeLeft" delay={120}>
                <div className="relative rounded-2xl overflow-hidden group shadow-2xl ring-1 ring-white/10">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />
                  {/* Bottom label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                      style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {title.split(':')[0]}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )}
          </div>
        </div>
      </div>

      {/* ── Table of Contents quick nav ─────────────────────── */}
      {restSections.filter(s => s.heading).length > 1 && (
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2">On this page:</span>
              {restSections.filter(s => s.heading).slice(0, 6).map((sec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium text-primary-700 bg-primary-50 border border-primary-100 hover:bg-primary-100 cursor-default transition-colors"
                >
                  {sec.heading}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Remaining sections ──────────────────────────────── */}
      {restSections.map((sec, i) => (
        <SectionBlock key={i} sec={sec} index={i} />
      ))}

      {/* ── Bottom CTA strip ────────────────────────────────── */}
      <div style={{ background: 'linear-gradient(135deg, #172554, #1d4ed8)' }} className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        <AnimateIn animation="fadeUp">
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to get started?</h2>
            <p className="text-blue-200 text-[15px] mb-7">Our expert counselors will help you with personalised exam prep and study abroad planning — completely free.</p>
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-primary-700 transition-all hover:scale-105 active:scale-95 text-sm"
              style={{ background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.20)' }}
            >
              Book Your Free Session <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </>
  );
}

export { Table, CTABanner, BulletList };
