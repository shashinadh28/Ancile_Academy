import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Star, Globe, MessageSquare, Camera, Briefcase, Send } from 'lucide-react';
import useInView from '../../hooks/useInView';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Countries', path: '/countries' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
  'Study Abroad': [
    { label: 'Study in USA', path: '/countries/usa' },
    { label: 'Study in UK', path: '/countries/uk' },
    { label: 'Study in Canada', path: '/countries/canada' },
    { label: 'Study in Australia', path: '/countries/australia' },
    { label: 'Study in New Zealand', path: '/countries/new-zealand' },
    { label: 'Study in Ireland', path: '/countries/ireland' },
  ],
  'Our Services': [
    { label: 'University Selection', path: '/services' },
    { label: 'Visa Assistance', path: '/services' },
    { label: 'Scholarship Guidance', path: '/services' },
    { label: 'English Coaching', path: '/english-coaching' },
    { label: 'Test Preparation', path: '/english-coaching' },
    { label: 'Resources', path: '/resources' },
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
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! You\'ll receive our latest updates.');
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container-custom px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-8">
        <div ref={colsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 mb-12">
          <div className={`col-span-2 md:col-span-3 lg:col-span-4 transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/" className="inline-block mb-5">
              <img src="/LOGO/Ancile.png" alt="Ancile Academy" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">4.9</span>
              <span className="text-sm text-gray-500">of 5</span>
              <div className="flex gap-0.5 ml-1">{[1,2,3,4,5].map(n => <Star key={n} size={14} className="fill-amber-400 text-amber-400" />)}</div>
            </div>
            <p className="text-sm text-gray-500 mb-5">14,348 Reviews on Google</p>
            <div className="space-y-2 text-sm">
              <p className="text-white font-semibold text-sm">Reach Us At:</p>
              <div className="flex items-start gap-2 text-gray-400"><MapPin size={14} className="mt-0.5 shrink-0" /><span>123 Education Lane, New Delhi 110001</span></div>
              <a href="tel:+911234567890" className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"><Phone size={14} /> +91 123 456 7890</a>
              <a href="mailto:info@ancileacademy.com" className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"><Mail size={14} /> info@ancileacademy.com</a>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3">Stay Updated! Subscribe to Our Newsletter</h4>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                />
                <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors cursor-pointer">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links], ci) => (
            <div
              key={heading}
              className={`lg:col-span-2 transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(ci + 1) * 100}ms` }}
            >
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-gray-500 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Ancile Academy. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600 mr-1">Connect with us:</span>
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white transition-all duration-200"><Icon size={14} /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
