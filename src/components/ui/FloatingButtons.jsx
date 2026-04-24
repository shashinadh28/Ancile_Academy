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
      <CallButton />
      <WhatsAppButton />
    </div>
  );
}
