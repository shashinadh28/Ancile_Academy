import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, ArrowUpRight, Star, Globe, MessageSquare, Camera, Briefcase } from 'lucide-react';
import useInView from '../../hooks/useInView';

const footerLinks = {
  'Study Abroad': [
    { label: 'Study in Australia', path: '/countries/australia' },
    { label: 'Study in Canada', path: '/countries/canada' },
    { label: 'Study in UK', path: '/countries/uk' },
    { label: 'Study in USA', path: '/countries/usa' },
    { label: 'Study in Ireland', path: '/countries/ireland' },
  ],
  'Our Services': [
    { label: 'Education Counselling', path: '/services' },
    { label: 'Application Process', path: '/services' },
    { label: 'Visa Documentation', path: '/services' },
    { label: 'Scholarship Guidance', path: '/services' },
    { label: 'Test Preparation', path: '/services' },
  ],
  'Test Preparation': [
    { label: 'IELTS', path: '/services' },
    { label: 'TOEFL', path: '/services' },
    { label: 'PTE', path: '/services' },
    { label: 'GRE / GMAT', path: '/services' },
    { label: 'Duolingo', path: '/services' },
  ],
  'About Us': [
    { label: 'Who We Are', path: '/about' },
    { label: 'Our Timeline', path: '/about' },
    { label: 'Our Leadership', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

const socials = [
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: MessageSquare, href: '#', label: 'Twitter' },
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Briefcase, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const [colsRef, colsInView] = useInView({ threshold: 0.1 });

  return (
    <footer className="bg-warm-900 text-warm-400">
      <div className="container-custom px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-8">
        <div ref={colsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className={`col-span-2 md:col-span-3 lg:col-span-2 transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center"><GraduationCap size={20} className="text-white" /></div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold text-white tracking-tight">ancile</span>
                <span className="text-[10px] font-medium text-warm-500 tracking-widest uppercase">Academy</span>
              </div>
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">4.9</span>
              <span className="text-sm text-warm-500">of 5</span>
              <div className="flex gap-0.5 ml-1">{[1,2,3,4,5].map(n => <Star key={n} size={14} className="fill-amber-400 text-amber-400" />)}</div>
            </div>
            <p className="text-sm text-warm-500 mb-5">14,348 Reviews on Google</p>
            <div className="space-y-2 text-sm">
              <a href="mailto:info@ancileacademy.com" className="flex items-center gap-2 text-warm-400 hover:text-primary-400 transition-colors"><Mail size={14} /> info@ancileacademy.com</a>
              <a href="tel:+911234567890" className="flex items-center gap-2 text-warm-400 hover:text-primary-400 transition-colors"><Phone size={14} /> +91 123 456 7890</a>
              <div className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /><span>123 Education Lane, New Delhi 110001</span></div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links], ci) => (
            <div key={heading} className={`transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${(ci + 1) * 100}ms` }}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}><Link to={link.path} className="text-sm text-warm-500 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group">{link.label}<ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-warm-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-600">&copy; {new Date().getFullYear()} Ancile Academy. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="w-8 h-8 rounded-lg bg-warm-800 flex items-center justify-center text-warm-500 hover:bg-primary-600 hover:text-white transition-all duration-200"><Icon size={14} /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
