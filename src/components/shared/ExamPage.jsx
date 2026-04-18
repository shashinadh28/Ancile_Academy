import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from './PageBanner';
import AnimateIn from './AnimateIn';

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
          <tr>{headers.map((h) => <th key={h} className="px-5 py-3.5">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className={`px-5 py-3.5 ${j === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
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

function CTABanner({ text }) {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 my-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-white font-semibold text-base md:text-lg text-center md:text-left">{text}</p>
      <Link to="/get-started" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary-700 font-bold text-sm hover:bg-primary-50 transition-colors">
        Get Free Guidance <ArrowRight size={15} />
      </Link>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5 my-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
          <CheckCircle size={16} className="text-primary-500 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Alternating section backgrounds ── */
const sectionBgs = [
  // even index: white with subtle dot pattern
  {
    bg: '#ffffff',
    pattern: 'radial-gradient(circle, rgba(37,99,235,0.04) 1px, transparent 1px)',
    patternSize: '24px 24px',
    patternOpacity: 1,
    borderTop: '1px solid #f1f5f9',
  },
  // odd index: very light blue-grey grid
  {
    bg: '#f8faff',
    pattern: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
    patternSize: '36px 36px',
    patternOpacity: 0.5,
    borderTop: '1px solid #e8eef6',
  },
];

function SectionBlock({ sec, index }) {
  const style = sectionBgs[index % 2];

  return (
    <div className="relative overflow-hidden" style={{ background: style.bg, borderTop: style.borderTop }}>
      {/* Pattern layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: style.pattern,
          backgroundSize: style.patternSize,
          opacity: style.patternOpacity,
          maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
        }}
      />
      {/* Subtle glow on odd sections */}
      {index % 2 === 1 && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(37,99,235,0.04) 0%, transparent 60%)' }} />
      )}
      <AnimateIn animation="fadeUp" delay={Math.min((index + 1) * 60, 300)}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {sec.heading && <h2 className="text-2xl font-bold text-gray-900 mb-4">{sec.heading}</h2>}
          {sec.subheading && <h3 className="text-lg font-bold text-gray-800 mb-3">{sec.subheading}</h3>}
          {sec.paragraphs && sec.paragraphs.map((p, j) => (
            <p key={j} className="text-gray-600 leading-[1.85] mb-4">{p}</p>
          ))}
          {sec.bullets && <BulletList items={sec.bullets} />}
          {sec.table && <Table headers={sec.table.headers} rows={sec.table.rows} />}
          {sec.cta && <CTABanner text={sec.cta} />}
        </div>
      </AnimateIn>
    </div>
  );
}

export default function ExamPage({ title, breadcrumbs, subtitle, sections, image }) {
  const firstSection = sections[0];
  const restSections = sections.slice(1);

  return (
    <>
      <PageBanner title={title} breadcrumbs={breadcrumbs} />

      {/* ── Hero row: first section + image ── */}
      <div className="relative overflow-hidden" style={{ background: '#f8faff', borderTop: '1px solid #e8eef6' }}>
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            opacity: 0.45,
            maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {image ? (
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                {subtitle && (
                  <AnimateIn animation="fadeUp">
                    <p className="text-2xl text-gray-900 font-extrabold mb-6">{subtitle}</p>
                  </AnimateIn>
                )}
                {firstSection && (
                  <AnimateIn animation="fadeUp" delay={60}>
                    <div>
                      {firstSection.heading && <h2 className="text-xl font-bold text-gray-900 mt-2 mb-4">{firstSection.heading}</h2>}
                      {firstSection.paragraphs && firstSection.paragraphs.map((p, j) => (
                        <p key={j} className="text-gray-600 leading-[1.85] mb-4">{p}</p>
                      ))}
                      {firstSection.bullets && <BulletList items={firstSection.bullets} />}
                      {firstSection.table && <Table headers={firstSection.table.headers} rows={firstSection.table.rows} />}
                      {firstSection.cta && <CTABanner text={firstSection.cta} />}
                    </div>
                  </AnimateIn>
                )}
              </div>
              <div>
                <AnimateIn animation="fadeLeft" delay={100}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl sticky top-28">
                    <img src={image} alt={title} className="w-full h-64 md:h-80 lg:h-96 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </AnimateIn>
              </div>
            </div>
          ) : (
            <>
              {subtitle && (
                <AnimateIn animation="fadeUp">
                  <p className="text-xl text-primary-600 font-semibold mb-8">{subtitle}</p>
                </AnimateIn>
              )}
              {firstSection && (
                <AnimateIn animation="fadeUp" delay={60}>
                  <div className="max-w-4xl">
                    {firstSection.heading && <h2 className="text-2xl font-bold text-gray-900 mb-4">{firstSection.heading}</h2>}
                    {firstSection.paragraphs && firstSection.paragraphs.map((p, j) => (
                      <p key={j} className="text-gray-600 leading-[1.85] mb-4">{p}</p>
                    ))}
                    {firstSection.bullets && <BulletList items={firstSection.bullets} />}
                    {firstSection.table && <Table headers={firstSection.table.headers} rows={firstSection.table.rows} />}
                    {firstSection.cta && <CTABanner text={firstSection.cta} />}
                  </div>
                </AnimateIn>
              )}
            </>
          )}
        </div>
      </div>

      {/* ── Remaining sections with alternating backgrounds ── */}
      {restSections.map((sec, i) => (
        <SectionBlock key={i} sec={sec} index={i + 1} />
      ))}
    </>
  );
}

export { Table, CTABanner, BulletList };
