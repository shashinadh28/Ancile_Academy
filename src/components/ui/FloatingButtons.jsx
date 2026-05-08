import React from 'react';

/* ─── Shared inline styles ──────────────────────────────── */
const baseBtn = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '52px',
  height: '52px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  transition: 'width 0.3s, border-radius 0.3s',
  boxShadow: '2px 2px 14px rgba(0,0,0,0.22)',
  outline: 'none',
  flexShrink: 0,
};

/* ─── WhatsApp Button ───────────────────────────────────── */
function WhatsAppButton() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href="https://wa.me/918977057333"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...baseBtn,
        backgroundColor: '#00d757',
        width: hovered ? '155px' : '52px',
        borderRadius: hovered ? '40px' : '50%',
        textDecoration: 'none',
        transform: 'translateZ(0)',
      }}
    >
      {/* Icon wrapper */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: hovered ? '30%' : '100%',
          transition: 'width 0.3s',
          paddingLeft: hovered ? '10px' : '0',
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 16 16"
          style={{ width: '24px', height: '24px', fill: 'white', flexShrink: 0 }}
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </span>

      {/* Label */}
      <span
        style={{
          position: 'absolute',
          right: 0,
          width: hovered ? '70%' : '0%',
          opacity: hovered ? 1 : 0,
          color: 'white',
          fontSize: '1em',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          transition: 'opacity 0.3s, width 0.3s',
          paddingRight: hovered ? '10px' : '0',
          fontFamily: 'inherit',
        }}
      >
        WhatsApp
      </span>
    </a>
  );
}

/* ─── LinkedIn Button ───────────────────────────────────── */
function LinkedInButton() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href="https://www.linkedin.com/showcase/ancile-academy/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Connect on LinkedIn"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...baseBtn,
        backgroundColor: '#0a66c2',
        width: hovered ? '148px' : '52px',
        borderRadius: hovered ? '40px' : '50%',
        textDecoration: 'none',
        transform: 'translateZ(0)',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: hovered ? '30%' : '100%',
          transition: 'width 0.3s',
          paddingLeft: hovered ? '10px' : '0',
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{ width: '24px', height: '24px', fill: 'white', flexShrink: 0 }}
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </span>
      <span
        style={{
          position: 'absolute',
          right: 0,
          width: hovered ? '70%' : '0%',
          opacity: hovered ? 1 : 0,
          color: 'white',
          fontSize: '1em',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          transition: 'opacity 0.3s, width 0.3s',
          paddingRight: hovered ? '10px' : '0',
          fontFamily: 'inherit',
        }}
      >
        LinkedIn
      </span>
    </a>
  );
}

/* ─── Instagram Button ──────────────────────────────────── */
function InstagramButton() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href="https://www.instagram.com/ancileacademy/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow on Instagram"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...baseBtn,
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)',
        width: hovered ? '158px' : '52px',
        borderRadius: hovered ? '40px' : '50%',
        textDecoration: 'none',
        transform: 'translateZ(0)',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: hovered ? '30%' : '100%',
          transition: 'width 0.3s',
          paddingLeft: hovered ? '10px' : '0',
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{ width: '24px', height: '24px', fill: 'white', flexShrink: 0 }}
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      </span>
      <span
        style={{
          position: 'absolute',
          right: 0,
          width: hovered ? '70%' : '0%',
          opacity: hovered ? 1 : 0,
          color: 'white',
          fontSize: '1em',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          transition: 'opacity 0.3s, width 0.3s',
          paddingRight: hovered ? '10px' : '0',
          fontFamily: 'inherit',
        }}
      >
        Instagram
      </span>
    </a>
  );
}

/* ─── Facebook Button ───────────────────────────────────── */
function FacebookButton() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href="https://www.facebook.com/ancileacademy"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow on Facebook"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...baseBtn,
        backgroundColor: '#1877f2',
        width: hovered ? '152px' : '52px',
        borderRadius: hovered ? '40px' : '50%',
        textDecoration: 'none',
        transform: 'translateZ(0)',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: hovered ? '30%' : '100%',
          transition: 'width 0.3s',
          paddingLeft: hovered ? '10px' : '0',
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{ width: '24px', height: '24px', fill: 'white', flexShrink: 0 }}
        >
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      </span>
      <span
        style={{
          position: 'absolute',
          right: 0,
          width: hovered ? '70%' : '0%',
          opacity: hovered ? 1 : 0,
          color: 'white',
          fontSize: '1em',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          transition: 'opacity 0.3s, width 0.3s',
          paddingRight: hovered ? '10px' : '0',
          fontFamily: 'inherit',
        }}
      >
        Facebook
      </span>
    </a>
  );
}

/* ─── Call Button ───────────────────────────────────────── */
function CallButton() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href="tel:+918977057333"
      aria-label="Call us"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...baseBtn,
        backgroundColor: '#1d6eea',
        width: hovered ? '175px' : '52px',
        borderRadius: hovered ? '40px' : '50%',
        textDecoration: 'none',
        transform: 'translateZ(0)',
      }}
    >
      {/* Icon wrapper */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: hovered ? '30%' : '100%',
          transition: 'width 0.3s',
          paddingLeft: hovered ? '10px' : '0',
          flexShrink: 0,
        }}
      >
        {/* Phone icon */}
        <svg
          viewBox="0 0 24 24"
          style={{ width: '22px', height: '22px', fill: 'white', flexShrink: 0 }}
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </span>

      {/* Label */}
      <span
        style={{
          position: 'absolute',
          right: 0,
          width: hovered ? '70%' : '0%',
          opacity: hovered ? 1 : 0,
          color: 'white',
          fontSize: '.85em',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          transition: 'opacity 0.3s, width 0.3s',
          paddingRight: hovered ? '10px' : '0',
          fontFamily: 'inherit',
        }}
      >
        +91 89770 57333
      </span>
    </a>
  );
}

/* ─── Floating Container ────────────────────────────────── */
export default function FloatingButtons() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 9999,
        alignItems: 'flex-end',
      }}
    >
      <FacebookButton />
      <InstagramButton />
      <LinkedInButton />
      <CallButton />
      <WhatsAppButton />
    </div>
  );
}
