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
    { label: 'Study in Dubai', path: '/countries/dubai' },
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
  {
    label: 'Facebook', href: 'https://www.facebook.com/ancileacademy', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
    )
  },
  {
    label: 'Instagram', href: 'https://www.instagram.com/ancileacademy/', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
    )
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/showcase/ancile-academy/', icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
    )
  },
];

const officeLocations = [
  {
    name: 'Headquarter',
    address: '300 N Carroll Blvd, Suite 103, Denton, TX 76201',
    phones: [
      { display: '919.607.2143', tel: '+19196072143' },
      { display: '913.804.7687', tel: '+19138047687' },
    ],
    email: 'info@ancileacademy.com',
  },
  {
    name: 'Milpitas-Branch',
    address: '329 Odyssey Lane, Milpitas, CA 95035',
    phones: [{ display: '669.437.1139', tel: '+16694371139' }],
    email: 'info@ancileacademy.com',
  },
  {
    name: 'South Carolina-Branch',
    address: '148 Ravensara Ave, Fort Mill, SC 29715',
    phones: [{ display: '424.242.4567', tel: '+14242424567' }],
    email: 'info@ancileacademy.com',
  },
  {
    name: 'Vijayawada, India',
    address: 'D No: 5-141, Koudinya Nagar, Penamaluru (MD), (PO), Krishna District, Andhra Pradesh 521139',
    phones: [{ display: '+91 8885555474', tel: '+918885555474' }],
    email: 'info@ancileacademy.com',
  },
  {
    name: 'Canada, Calgary (Regus)',
    address: '8 Floor Bankers Hall West, 888, 5th Street SW, Suite 1000, Calgary, AB T2P 5C5',
    phones: [{ display: '(+91) 9177330029', tel: '+919177330029' }],
    email: 'info@ancileacademy.com',
  },
  {
    name: 'Hyderabad, India',
    address: 'My Co Office, Lift Lobby 4, 2nd Floor, 5th Phase, KPHB, Kukatpally, Hyderabad 500072',
    phones: [{ display: '+918977057333', tel: '+918977057333' }],
    email: 'info@ancileacademy.com',
  },
  {
    name: 'Hyderabad, India',
    address: 'Unit 8, 2nd floor, Vasavi sky city, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500081',
    phones: [{ display: '+918977057333', tel: '+918977057333' }],
    email: 'info@ancileacademy.com',
  },
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
        <div ref={colsRef} className={`flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-800 transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Link to="/" className="inline-block">
              <div className="bg-white rounded-xl p-2.5">
                <img src="/LOGO/Ancile.png" alt="Ancile Academy" className="h-9 w-auto" />
              </div>
            </Link>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-lg font-bold text-white">4.9</span>
                <span className="text-xs text-gray-500">of 5</span>
                <div className="flex gap-0.5 ml-1">{[1, 2, 3, 4, 5].map(n => <Star key={n} size={12} className="fill-amber-400 text-amber-400" />)}</div>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">14,348 Reviews on Google</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start gap-4">
            <form onSubmit={handleNewsletter} className="flex gap-2 w-full sm:w-auto justify-center">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required
                className="w-48 sm:w-52 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
              />
              <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors cursor-pointer">
                <Send size={16} />
              </button>
            </form>
            <div className="flex items-center justify-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
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
        <div className={`mb-12 transition-all duration-700 ease-out ${colsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 text-center sm:text-left">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.path} className="text-sm text-gray-500 hover:text-primary-400 transition-colors inline-flex justify-center sm:justify-start items-center gap-1 group">
                        {link.label}
                        <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold text-sm mb-4 flex items-center justify-center sm:justify-start gap-2">
              <MapPin size={14} className="text-primary-400" /> Our Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {officeLocations.map((office) => (
                <div key={`${office.name}-${office.address}`} className="bg-gray-800/50 rounded-xl p-3.5 border border-gray-800 hover:border-gray-700 transition-colors flex flex-col items-center sm:items-start text-center sm:text-left">
                  <p className="text-gray-300 font-semibold text-xs mb-1">{office.name}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-1.5">{office.address}</p>
                  <div className="flex flex-col gap-1.5 w-full items-center sm:items-start">
                    {office.phones.map((phone) => (
                      <a key={phone.tel} href={`tel:${phone.tel}`} className="flex items-center justify-center sm:justify-start gap-1.5 text-primary-400 hover:text-primary-300 text-xs transition-colors">
                        <Phone size={11} /> {phone.display}
                      </a>
                    ))}
                    <a href={`mailto:${office.email}`} className="flex items-center justify-center sm:justify-start gap-1.5 text-primary-400 hover:text-primary-300 text-xs transition-colors break-all">
                      <Mail size={11} /> {office.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Ancile Academy. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs text-gray-600 mr-1">Connect with us:</span>
            <div className="flex items-center gap-3">
              {socials.map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
