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

export default function ExamPage({ title, breadcrumbs, subtitle, sections, image }) {
  const firstSection = sections[0];
  const restSections = sections.slice(1);

  return (
    <>
      <PageBanner title={title} breadcrumbs={breadcrumbs} />
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero row: subtitle + first section on left, image on right */}
          {image ? (
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
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
                  <div className="mb-10">
                    {firstSection.heading && <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">{firstSection.heading}</h2>}
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

          {/* Remaining sections */}
          <div className="max-w-4xl">
            {restSections.map((sec, i) => (
              <AnimateIn key={i} animation="fadeUp" delay={Math.min((i + 1) * 60, 300)}>
                <div className="mb-10">
                  {sec.heading && <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4">{sec.heading}</h2>}
                  {sec.subheading && <h3 className="text-lg font-bold text-gray-800 mt-4 mb-3">{sec.subheading}</h3>}
                  {sec.paragraphs && sec.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-600 leading-[1.85] mb-4">{p}</p>
                  ))}
                  {sec.bullets && <BulletList items={sec.bullets} />}
                  {sec.table && <Table headers={sec.table.headers} rows={sec.table.rows} />}
                  {sec.cta && <CTABanner text={sec.cta} />}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export { Table, CTABanner, BulletList };
