import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, ArrowUpRight, Globe, MessageSquare, Camera, Briefcase } from 'lucide-react';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const footerLinks = {
  'Quick Links': [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Countries', path: '/countries' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  'Study Destinations': [
    { label: 'Study in USA', path: '/countries/usa' },
    { label: 'Study in UK', path: '/countries/uk' },
    { label: 'Study in Canada', path: '/countries/canada' },
    { label: 'Study in Australia', path: '/countries/australia' },
    { label: 'Study in Ireland', path: '/countries/ireland' },
    { label: 'Study in Europe', path: '/countries/europe' },
  ],
  Services: [
    { label: 'Career Counseling', path: '/services' },
    { label: 'Test Preparation', path: '/services' },
    { label: 'Visa Assistance', path: '/services' },
    { label: 'Scholarship Guidance', path: '/services' },
    { label: 'University Selection', path: '/services' },
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
  const [bottomRef, bottomInView] = useInView({ threshold: 0.5 });

  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="container-custom px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-8">
        <div ref={colsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          <div
            className={`lg:col-span-2 transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
                <GraduationCap size={22} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Ancile <span className="text-primary-400">Academy</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Your trusted partner in international education. We've helped 50,000+ students achieve their dreams of studying at top universities worldwide.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@ancileacademy.com" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Mail size={16} />
                info@ancileacademy.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Phone size={16} />
                +91 123 456 7890
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Education Lane, Knowledge Park, New Delhi, India 110001</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links], ci) => (
            <div
              key={heading}
              className={`transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(ci + 1) * 150}ms` }}
            >
              <h4 className="text-white font-semibold mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          ref={bottomRef}
          className={`border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 ease-out ${
            bottomInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Ancile Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
