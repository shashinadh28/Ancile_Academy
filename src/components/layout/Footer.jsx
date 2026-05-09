import { Link } from 'react-router-dom';

/* ─── Column Data ──────────────────────────────────────── */
const columns = [
  {
    heading: 'Study Destinations',
    links: [
      { label: 'Australia', path: '/countries/australia' },
      { label: 'Canada', path: '/countries/canada' },
      { label: 'Ireland', path: '/countries/ireland' },
      { label: 'New Zealand', path: '/countries/new-zealand' },
      { label: 'UK', path: '/countries/uk' },
      { label: 'USA', path: '/countries/usa' },
      { label: 'Dubai', path: '/countries/dubai' },
    ],
  },
  {
    heading: 'Top Courses',
    links: [
      { label: 'Engineering courses', path: '/blog' },
      { label: 'Health and medicine', path: '/blog' },
      { label: 'Information technology', path: '/blog' },
      { label: 'Business', path: '/blog' },
      { label: 'Law', path: '/blog' },
      { label: 'Accounting', path: '/blog' },
      { label: 'Teaching', path: '/blog' },
      { label: 'Science', path: '/blog' },
    ],
  },
  {
    heading: 'About Ancile',
    links: [
      { label: 'News & articles', path: '/blog' },
      { label: 'Ask Ancile', path: '/contact' },
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
];

/* ─── Social Icons ─────────────────────────────────────── */
const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ancileacademy',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ancileacademy',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ancileacademy/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/showcase/ancile-academy/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

/* ─── Footer ───────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2b2b2b', color: '#b0b0b0', fontFamily: 'inherit' }}>

      {/* ── Top link columns ── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '56px 24px 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px 32px',
        }}
      >
        {columns.map((col) => (
          <div key={col.heading}>
            <p
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '15px',
                marginBottom: '18px',
                letterSpacing: '0.01em',
              }}
            >
              {col.heading}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#b0b0b0')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: '1px solid #444444' }} />

      {/* ── Bottom bar ── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: '8px' }}>
          <Link to="/">
            <div style={{ display: 'inline-block', backgroundColor: '#ffffff', borderRadius: '10px', padding: '8px 12px' }}>
              <img src="/LOGO/Ancile.png" alt="Ancile Academy" style={{ height: '36px', width: 'auto', display: 'block' }} />
            </div>
          </Link>
        </div>

        {/* Copyright lines */}
        <p style={{ fontSize: '13px', color: '#888888', margin: 0 }}>
          Copyright &copy;{new Date().getFullYear()} Ancile Academy
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '13px', color: '#888888', margin: 0, maxWidth: '700px', lineHeight: '1.6' }}>
            Copyright &copy; Ancile Academy Partners. All rights reserved. Ancile Academy is a registered study abroad consultancy.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #555555',
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s, background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ffffff';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#555555';
                  e.currentTarget.style.color = '#b0b0b0';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom policy links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 0', marginTop: '4px' }}>
          {[
            { label: 'Terms of Use', path: '/terms-of-use' },
            { label: 'Privacy Policy', path: '/privacy-policy' },
            { label: 'Disclaimer', path: '/disclaimer' },
          ].map((item, i, arr) => (
            <span key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
              <Link
                to={item.path}
                style={{ fontSize: '13px', color: '#888888', textDecoration: 'underline', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
              >
                {item.label}
              </Link>
              {i < arr.length - 1 && (
                <span style={{ margin: '0 10px', color: '#555555' }}>|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
