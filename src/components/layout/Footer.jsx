import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Star, Send } from 'lucide-react';
import useInView from '../../hooks/useInView';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Countries', path: '/countries' },
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
  { label: 'Facebook', href: 'https://www.facebook.com/ancileincc', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { label: 'Instagram', href: 'https://www.instagram.com/ancileinc/', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ancile-inc-consulting/', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
];

const usOffices = [
  { name: 'Denton — Corporate HQ', address: '300 N Carroll Blvd, Suite 103, Denton, TX 76201', phone: '919.607.2143', tel: '9196072143' },
  { name: 'Austin — Branch', address: '2006 S Bagdad Rd, Suite 180, Leander, TX 78641', phone: '913.804.7687', tel: '9138047687' },
  { name: 'Milpitas — Branch', address: '329 Odyssey Lane, Milpitas, CA 95035', phone: '669.437.1139', tel: '6694371139' },
  { name: 'South Carolina — Branch', address: '148 Ravensara Ave, Fort Mill, SC 29715', phone: '424.242.4567', tel: '4242424567' },
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

        {/* Top: Logo + Newsletter + Socials */}
        <div ref={colsRef} className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-800 transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-block">
              <div className="bg-white rounded-xl p-2.5">
                <img src="/LOGO/Ancile.png" alt="Ancile Academy" className="h-9 w-auto" />
              </div>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">4.9</span>
                <span className="text-xs text-gray-500">of 5</span>
                <div className="flex gap-0.5 ml-1">{[1,2,3,4,5].map(n => <Star key={n} size={12} className="fill-amber-400 text-amber-400" />)}</div>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">14,348 Reviews on Google</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required
                className="w-52 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
              />
              <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors cursor-pointer">
                <Send size={16} />
              </button>
            </form>
            <div className="flex items-center gap-2">
              {socials.map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: Links + Addresses */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 mb-12 transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links], ci) => (
            <div key={heading} className="lg:col-span-2">
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

          {/* US Offices */}
          <div className="col-span-2 md:col-span-3 lg:col-span-6">
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-primary-400" /> Our Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usOffices.map((office) => (
                <div key={office.name} className="bg-gray-800/50 rounded-xl p-3.5 border border-gray-800 hover:border-gray-700 transition-colors">
                  <p className="text-gray-300 font-semibold text-xs mb-1">{office.name}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-1.5">{office.address}</p>
                  <a href={`tel:${office.tel}`} className="text-primary-400 hover:text-primary-300 text-xs font-medium transition-colors">
                    {office.phone}
                  </a>
                </div>
              ))}
              <div className="bg-gray-800/50 rounded-xl p-3.5 border border-gray-800 hover:border-gray-700 transition-colors sm:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-1">
                    <p className="text-gray-300 font-semibold text-xs mb-1">Vijayawada, India</p>
                    <p className="text-gray-500 text-xs leading-relaxed">D No: 5-141, Koudinya Nagar, Penamaluru (MD), (PO), Krishna District, Andhra Pradesh 521139</p>
                  </div>
                  <div className="flex flex-col gap-1.5 shrink-0">
                    <a href="mailto:Info@ancileinc.com" className="flex items-center gap-1.5 text-primary-400 hover:text-primary-300 text-xs transition-colors">
                      <Mail size={11} /> Info@ancileinc.com
                    </a>
                    <a href="tel:+918897057333" className="flex items-center gap-1.5 text-primary-400 hover:text-primary-300 text-xs transition-colors">
                      <Phone size={11} /> +91 89770 57333
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Ancile Academy. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600 mr-1">Connect with us:</span>
            {socials.map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white transition-all duration-200">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
