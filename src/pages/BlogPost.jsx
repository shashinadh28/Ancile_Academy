import { useParams, Navigate, Link } from 'react-router-dom';
import { Clock, ArrowLeft, User, Calendar } from 'lucide-react';
import SectionWrapper from '../components/shared/SectionWrapper';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';
import { BLOG_POSTS } from '../data/constants';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const [relatedRef, relatedInView] = useInView({ threshold: 0.2 });

  if (!post) return <Navigate to="/blog" replace />;
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="bg-gradient-to-br from-warm-900 via-warm-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-10 right-20 w-72 h-72 border border-white/10 rounded-full" /></div>
        <div className="container-custom relative z-10 py-24 md:py-32 px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
          <AnimateIn animation="fadeRight"><Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"><ArrowLeft size={16} />Back to Blog</Link></AnimateIn>
          <AnimateIn animation="fadeUp" delay={100}><span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-semibold mb-4">{post.category}</span></AnimateIn>
          <AnimateIn animation="fadeUp" delay={200}><h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">{post.title}</h1></AnimateIn>
          <AnimateIn animation="fadeUp" delay={300}>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <AnimateIn animation="scaleIn" duration="slow"><div className="rounded-2xl overflow-hidden mb-10"><img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover" /></div></AnimateIn>
          <article>
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) return <AnimateIn key={i} animation="fadeUp"><h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">{block.replace('## ', '')}</h2></AnimateIn>;
              if (block.startsWith('### ')) return <AnimateIn key={i} animation="fadeUp"><h3 className="text-xl font-bold text-warm-900 mt-8 mb-3">{block.replace('### ', '')}</h3></AnimateIn>;
              if (block.startsWith('- ')) return <AnimateIn key={i} animation="fadeUp"><ul className="space-y-2 my-4">{block.split('\n').map((item, j) => <li key={j} className="flex items-start gap-2 text-warm-500"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" />{item.replace('- ', '')}</li>)}</ul></AnimateIn>;
              return <AnimateIn key={i} animation="fadeUp"><p className="text-warm-500 leading-relaxed mb-4">{block}</p></AnimateIn>;
            })}
          </article>
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-warm-200">
              <AnimateIn animation="fadeUp"><h3 className="text-2xl font-bold text-warm-900 mb-6">Related Articles</h3></AnimateIn>
              <div ref={relatedRef} className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((r, i) => (
                  <div key={r.slug} className={`transition-all duration-700 ease-out ${relatedInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>
                    <Link to={`/blog/${r.slug}`} className="group flex gap-4 bg-warm-50 rounded-xl p-4 hover:bg-primary-50 transition-colors">
                      <img src={r.image} alt={r.title} className="w-24 h-24 rounded-lg object-cover shrink-0" />
                      <div><span className="text-xs text-primary-600 font-semibold">{r.category}</span><h4 className="font-bold text-warm-900 group-hover:text-primary-600 transition-colors line-clamp-2 mt-1">{r.title}</h4><span className="text-xs text-warm-400 mt-1 block">{r.readTime}</span></div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
