import { useCallback, useEffect, useRef, useState } from "react";

/* ─── Slide data ─────────────────────────────────────────────────────── */
const desktopSlides = [
  { src: "/Desktop_landing _pages/Newzealand2.png",        alt: "Study in New Zealand"        },
  { src: "/Desktop_landing _pages/usa.png",       alt: "Study in USA"       },
  { src: "/Desktop_landing _pages/australia.png",            alt: "Study in Australia" },
  { src: "/Desktop_landing _pages/Europe.png",    alt: "Study in Europe"    },
];

const mobileSlides = [
  { src: "/Mobile_landing_pages/UK_Mobile.webp",        alt: "Study in UK"        },
  { src: "/Mobile_landing_pages/USA_Mobile.webp",       alt: "Study in USA"       },
  { src: "/Mobile_landing_pages/Australia_Mobile.webp", alt: "Study in Australia" },
];

const AUTO_DELAY = 4500;

/* ─── Arrow Button ───────────────────────────────────────────────────── */
function Arrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      style={{
        position: "absolute",
        top: "50%",
        [direction === "prev" ? "left" : "right"]: "clamp(8px, 2vw, 24px)",
        transform: "translateY(-50%)",
        zIndex: 20,
        width: "clamp(36px, 4.5vw, 52px)",
        height: "clamp(36px, 4.5vw, 52px)",
        borderRadius: "50%",
        background: "rgba(0,0,0,0.45)",
        border: "1.5px solid rgba(255,255,255,0.25)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(37,99,235,0.75)";
        e.currentTarget.style.borderColor = "rgba(59,130,246,0.85)";
        e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.45)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
        e.currentTarget.style.transform = "translateY(-50%) scale(1)";
      }}
    >
      <svg
        width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
      >
        {direction === "prev"
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function LandingSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const timerRef = useRef(null);

  /* ── Breakpoint listener ── */
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;
  const count = slides.length;

  /* ── Navigation helpers ── */
  const go = useCallback(
    (dir) =>
      setIndex((prev) => (prev + dir + count) % count),
    [count]
  );

  /* ── Auto-advance ── */
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), AUTO_DELAY);
  }, [go]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  /* Reset index when switching between mobile/desktop */
  useEffect(() => setIndex(0), [isMobile]);

  const handlePrev = () => { go(-1); resetTimer(); };
  const handleNext = () => { go(1);  resetTimer(); };
  const handleDot  = (i) => { if (i !== index) { setIndex(i); resetTimer(); } };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        background: "#030712",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      {/* ── Image wrapper — shows full image, no cropping ── */}
      <div style={{ position: "relative", width: "100%", lineHeight: 0, paddingTop: "24px" }}>
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            draggable={false}
            loading={i === 0 ? "eager" : "lazy"}
            style={{
              /* First image sets the natural height; rest overlay on top */
              position: i === 0 ? "relative" : "absolute",
              top: slide.src.toLowerCase().includes("australia") ? "40px" : 0,
              left: 0,
              width: "100%",
              height: "auto",          /* ← preserves full aspect ratio */
              display: "block",
              objectFit: "contain",    /* ← never crops */
              transition: "opacity 0.6s ease",
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? "auto" : "none",
              zIndex: i === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* ── Arrows ── */}
      <Arrow direction="prev" onClick={handlePrev} />
      <Arrow direction="next" onClick={handleNext} />

      {/* ── Dot indicators ── */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(10px, 2vw, 22px)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 20,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === index ? "28px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === index ? "#3b82f6" : "rgba(255,255,255,0.5)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 0.35s ease, background 0.35s ease",
              boxShadow: i === index ? "0 0 10px rgba(59,130,246,0.7)" : "none",
            }}
          />
        ))}
      </div>
    </section>
  );
}
