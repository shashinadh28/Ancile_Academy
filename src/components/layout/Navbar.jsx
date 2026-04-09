import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Globe, MapPin, MessageSquare } from 'lucide-react';
import { NAV_LINKS } from '../../data/constants';
import Button from '../shared/Button';

const topLinks = [
  { label: 'Resources', path: '/resources' },
  { label: 'Blog', path: '/blog' },
];

/* Dropdown definitions for nav items that need them */
const DROPDOWNS = {
  'Study Destinations': [
    { label: 'United States', path: '/countries/usa' },
    { label: 'United Kingdom', path: '/countries/uk' },
    { label: 'Canada', path: '/countries/canada' },
    { label: 'Australia', path: '/countries/australia' },
    { label: 'New Zealand', path: '/countries/new-zealand' },
    { label: 'Ireland', path: '/countries/ireland' },
    { label: 'Europe', path: '/countries/europe' },
  ],
  'Exams': [
    {
      label: 'English Language Proficiency',
      type: 'nested',
      items: [
        { label: 'IELTS', path: '/exams/ielts' },
        { label: 'TOEFL', path: '/exams/toefl' },
        { label: 'PTE', path: '/exams/pte' },
        { label: 'Duolingo', path: '/exams/duolingo' },
        { label: 'OET', path: '/exams/oet' },
      ],
    },
    {
      label: 'Undergraduate',
      type: 'nested',
      items: [
        { label: 'SAT', path: '/exams/sat' },
      ],
    },
    {
      label: 'Standard Exams',
      type: 'nested',
      items: [
        { label: 'GRE', path: '/exams/gre' },
        { label: 'GMAT', path: '/exams/gmat' },
      ],
    },
  ],
};

function DropdownMenu({ items, isOpen }) {
  const [hoveredNested, setHoveredNested] = useState(null);

  return (
    <div
      className={`absolute top-full left-0 pt-2 w-56 z-50 transition-all duration-200 origin-top ${isOpen
        ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 scale-y-95 -translate-y-1 pointer-events-none'
        }`}
      style={{ transformOrigin: 'top center' }}
    >
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-visible relative">
        {items.map((item, index) => {
          if (item.type === 'nested') {
            return (
              <div
                key={item.label + index}
                className="relative"
                onMouseEnter={() => setHoveredNested(item.label)}
                onMouseLeave={() => setHoveredNested(null)}
              >
                <div className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors cursor-pointer">
                  {item.label}
                  <ChevronDown size={14} className="-rotate-90 opacity-60" />
                </div>
                {hoveredNested === item.label && (
                  <div className="absolute top-0 left-full pl-1 w-52">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                      {item.items.map((nestedItem) => (
                        <Link
                          key={nestedItem.path + nestedItem.label}
                          to={nestedItem.path}
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {nestedItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.path + item.label}
              to={item.path}
              className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [openNestedMobileDropdown, setOpenNestedMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setTopBarVisible(y <= 60);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close on route change */
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    setOpenNestedMobileDropdown(null);
  }, [location]);

  /* Close desktop dropdown when clicking outside */
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const mainLinks = NAV_LINKS.filter(
    (l) => l.path !== '/blog' && l.path !== '/resources'
  );

  const toggleDropdown = (label) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  const toggleMobileDropdown = (label) =>
    setOpenMobileDropdown((prev) => (prev === label ? null : label));

  const toggleNestedMobileDropdown = (label) =>
    setOpenNestedMobileDropdown((prev) => (prev === label ? null : label));

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top bar */}
      <div
        className={`border-b border-gray-100 transition-all duration-300 overflow-hidden ${topBarVisible ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-10 gap-1">
            {topLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-1 text-[13px] text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="flex items-center gap-1.5 px-3 py-1 text-[13px] text-gray-600 hover:text-primary-600 transition-colors font-medium"
            >
              <MapPin size={13} />
              <span>Find us</span>
            </Link>

            <div className="w-px h-4 bg-gray-200 mx-1" />

            <a
              href="tel:+918897057333"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gray-200 text-[13px] font-semibold text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              <Phone size={12} />
              +91 89770 57333
            </a>

            <a
              href="https://wa.me/918897057333"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-gray-200 text-[13px] font-semibold text-gray-700 hover:border-green-400 hover:text-green-600 transition-all"
            >
              <MessageSquare size={12} />
              WhatsApp
            </a>

            <div className="w-px h-4 bg-gray-200 mx-1" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[13px] text-gray-600 hover:text-primary-600 transition-colors cursor-pointer font-medium">
              <Globe size={13} />
              <span>Global</span>
              <ChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className={`transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/5' : ''}`}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link to="/" className="flex items-center shrink-0">
              <img src="/LOGO/Ancile.png" alt="Ancile Academy" className="h-9 md:h-10 w-auto" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {mainLinks.map((link) => {
                const hasDropdown = Boolean(DROPDOWNS[link.label]);
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== '/' && location.pathname.startsWith(link.path));
                const isDropOpen = openDropdown === link.label;

                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => hasDropdown && setOpenDropdown(link.label)}
                    onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                  >
                    {hasDropdown ? (
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-medium transition-colors duration-200 rounded-lg ${isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                          }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`opacity-60 transition-transform duration-200 ${isDropOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    ) : link.path.includes('#') ? (
                      <Link
                        to={link.path}
                        className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-medium transition-colors duration-200 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        to={link.path}
                        className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-medium transition-colors duration-200 rounded-lg ${isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                          }`}
                      >
                        {link.label}
                      </Link>
                    )}

                    {hasDropdown && (
                      <DropdownMenu items={DROPDOWNS[link.label]} isOpen={isDropOpen} />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center">
              <Button to="/get-started" size="sm">Get Started</Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div className="h-[3px] bg-gradient-to-r from-primary-400 via-primary-500 to-primary-300" />
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[75vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const hasDropdown = Boolean(DROPDOWNS[link.label]);
              const isMobDropOpen = openMobileDropdown === link.label;

              return (
                <div key={link.path}>
                  {hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location.pathname.startsWith(link.path)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                          }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`opacity-50 transition-transform duration-200 ${isMobDropOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isMobDropOpen && (
                        <div className="ml-4 mt-1 mb-2 border-l-2 border-primary-100 pl-3 space-y-0.5">
                          {DROPDOWNS[link.label].map((item, idx) => {
                            if (item.type === 'nested') {
                              const isNestedOpen = openNestedMobileDropdown === item.label;
                              return (
                                <div key={item.label + idx}>
                                  <button
                                    onClick={() => toggleNestedMobileDropdown(item.label)}
                                    className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors font-medium"
                                  >
                                    {item.label}
                                    <ChevronDown
                                      size={14}
                                      className={`opacity-50 transition-transform duration-200 ${isNestedOpen ? 'rotate-180' : ''}`}
                                    />
                                  </button>
                                  {isNestedOpen && (
                                    <div className="ml-3 mt-1 border-l-2 border-primary-100 pl-3 space-y-0.5">
                                      {item.items.map((nestedItem) => (
                                        <Link
                                          key={nestedItem.path + nestedItem.label}
                                          to={nestedItem.path}
                                          className="block py-2 px-3 rounded-lg text-sm text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                        >
                                          {nestedItem.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            }
                            return (
                              <Link
                                key={item.path + item.label}
                                to={item.path}
                                className="block py-2 px-3 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                              >
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : link.path.includes('#') ? (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location.pathname === link.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-3 space-y-2">
              <Button to="/get-started" className="w-full">Get Started</Button>
              <a
                href="tel:+918897057333"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700"
              >
                <Phone size={14} /> +91 89770 57333
              </a>
              <a
                href="https://wa.me/918897057333"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-green-50 border border-green-200 text-sm font-semibold text-green-700"
              >
                <MessageSquare size={14} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
