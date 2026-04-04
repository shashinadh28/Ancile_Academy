import { Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/shared/PageBanner';
import SectionWrapper from '../components/shared/SectionWrapper';
import useInView from '../hooks/useInView';
import { BLOG_POSTS } from '../data/constants';

export default function Blog() {
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  return (
    <>
      <PageBanner title="Blog & Resources" subtitle="Stay informed with the latest news, tips, and insights on studying abroad from Ancile Academy." breadcrumbs={[{ label: 'Blog' }]} />
      <SectionWrapper>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <div key={post.slug} className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <Link to={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3"><span className="px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">{post.category}</span></div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{post.date}</span><span>•</span><span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span></div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between"><span className="text-xs text-gray-400">By {post.author}</span><span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600">Read More <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></span></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
