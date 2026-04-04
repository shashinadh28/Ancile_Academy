import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionWrapper, { SectionHeader } from '../shared/SectionWrapper';
import Button from '../shared/Button';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';
import { BLOG_POSTS } from '../../data/constants';

export default function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper>
      <AnimateIn animation="fadeUp">
        <SectionHeader
          title="Study Abroad Blog & Resources"
          subtitle="Expert advice, guides, and tips to help you prepare for your international education journey."
          align="center"
        />
      </AnimateIn>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <div
            key={post.slug}
            className={`transition-all duration-700 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">{post.category}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{post.date}</span><span>•</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600">
                  Read More <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <AnimateIn animation="scaleIn" delay={300}>
        <div className="text-center mt-10">
          <Button to="/blog" variant="outline-blue">Read More on Our Blog <ArrowRight size={16} /></Button>
        </div>
      </AnimateIn>
    </SectionWrapper>
  );
}
