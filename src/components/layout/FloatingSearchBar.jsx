/**
 * FloatingSearchBar
 * ─────────────────
 * • Fixed pill centered just below the navbar on ALL pages.
 * • On the home page: hidden until user scrolls past the hero section (~600 px),
 *   so it doesn't overlap with the hero search bar.
 * • Hides when the user scrolls DOWN, reappears when scrolling UP.
 * • Also reappears 500 ms after the user stops scrolling.
 * • UI: semi-transparent, backdrop-blur, soft border — no heavy shadow.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import { searchItems, TYPE_META } from '../../data/searchData';

/* ─── Badge chip ─────────────────────────────────────────────────────── */
function Badge({ type }) {
  const meta = TYPE_META[type] || TYPE_META.Page;
  return (
    <span
      className={`inline-flex items-center text-[10px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${meta.badgeClass}`}
    >
      <span className={`w-1 h-1 rounded-full mr-1 ${meta.dotClass}`} />
      {type}
    </span>
  );
}

/* ─── Portal dropdown ────────────────────────────────────────────────── */
function Dropdown({ items, activeIndex, onItemClick, anchor, containerRef }) {
  if (!items.length || !anchor) return null;

  const dropdownStyle = {
    position: 'fixed',
    top: anchor.bottom + 10,
    left: anchor.left,
    width: Math.max(anchor.width, 400),
    zIndex: 99999,
    background: 'rgba(243, 244, 246, 0.9)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid black',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.10)',
  };

  const handleMouseDown = (e, path) => {
    e.preventDefault();
    onItemClick(path);
  };

  return createPortal(
    <div
      ref={containerRef}
      style={dropdownStyle}
      className="rounded-2xl overflow-hidden"
    >
      <ul className="max-h-72 overflow-y-auto py-1.5">
        {items.map((item, i) => (
          <li key={item.path + item.label}>
            <button
              type="button"
              onMouseDown={(e) => handleMouseDown(e, item.path)}
              className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors rounded-lg mx-2 my-0.5 w-[calc(100%-16px)] ${
                i === activeIndex ? 'bg-black/5 text-[#1f2937]' : 'text-[#1f2937] hover:bg-black/5'
              }`}
              data-index={i}
            >
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{item.label}</p>
                {item.description && (
                  <p className="text-xs text-[#6b7280] truncate mt-0.5">{item.description}</p>
                )}
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Badge type={item.type} />
                <ArrowRight
                  size={12}
                  className={i === activeIndex ? 'text-primary-400' : 'text-gray-300'}
                />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>,
    document.body
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */
export default function FloatingSearchBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery]             = useState('');
  const [isOpen, setIsOpen]           = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [visible, setVisible]         = useState(true);
  const [mounted, setMounted]         = useState(false);
  const [anchor, setAnchor]           = useState(null);
  const [pastHero, setPastHero]       = useState(false);

  const wrapperRef    = useRef(null);
  const dropdownRef   = useRef(null);
  const inputRef      = useRef(null);
  const lastScrollY   = useRef(window.scrollY);
  const scrollTimer   = useRef(null);

  const isHomePage = location.pathname === '/';

  /* mount with a small delay so entry animation plays */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  /* reset on route change */
  useEffect(() => {
    setQuery('');
    setIsOpen(false);
    setActiveIndex(-1);
    lastScrollY.current = window.scrollY;
    setVisible(true);
    // Reset hero detection on route change
    setPastHero(window.scrollY > 580);
  }, [location.pathname]);

  /* scroll direction + idle detection + hero detection */
  useEffect(() => {
    const HERO_THRESHOLD = 580; // px — height of the hero section

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta    = currentY - lastScrollY.current;

      // Hero detection: hide bar while inside hero on home page
      if (isHomePage) {
        setPastHero(currentY > HERO_THRESHOLD);
      }

      if (delta > 5) {
        // scrolling DOWN → hide
        setVisible(false);
        setIsOpen(false);
      } else if (delta < -5) {
        // scrolling UP → reveal
        setVisible(true);
      }

      lastScrollY.current = currentY;

      // reveal again once scrolling stops
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    };

    // Set initial state
    if (isHomePage) {
      setPastHero(window.scrollY > HERO_THRESHOLD);
    } else {
      setPastHero(true);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimer.current);
    };
  }, [isHomePage]);

  /* position the dropdown anchor */
  const updateAnchor = useCallback(() => {
    if (!wrapperRef.current) return;
    const r = wrapperRef.current.getBoundingClientRect();
    setAnchor({ top: r.top, bottom: r.bottom, left: r.left, width: r.width });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updateAnchor();
    window.addEventListener('resize', updateAnchor);
    return () => window.removeEventListener('resize', updateAnchor);
  }, [isOpen, updateAnchor]);

  /* outside click */
  useEffect(() => {
    const handler = (e) => {
      const inWrapper  = wrapperRef.current?.contains(e.target);
      const inDropdown = dropdownRef.current?.contains(e.target);
      if (!inWrapper && !inDropdown) { setIsOpen(false); setActiveIndex(-1); }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = query.trim() ? searchItems(query) : [];
  const close    = useCallback(() => { setIsOpen(false); setActiveIndex(-1); }, []);

  const handleItemClick = useCallback(
    (path) => { navigate(path); setQuery(''); close(); },
    [navigate, close]
  );

  const handleKeyDown = (e) => {
    const count = filtered.length;
    if (!isOpen) { if (e.key === 'ArrowDown') { setIsOpen(true); updateAnchor(); } return; }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((p) => (count ? (p + 1) % count : -1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((p) => (count ? (p <= 0 ? count - 1 : p - 1) : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && filtered[activeIndex]) handleItemClick(filtered[activeIndex].path);
        else if (filtered.length > 0) handleItemClick(filtered[0].path);
        break;
      case 'Escape':
        close(); inputRef.current?.blur();
        break;
    }
  };

  if (!mounted) return null;

  // On home page, hide bar entirely while inside hero section
  const shouldShow = isHomePage ? pastHero : true;

  /* ── pill visibility class ── */
  const pillClass = `fixed left-1/2 -translate-x-1/2 z-[48] transition-all duration-300 ease-in-out ${
    visible && shouldShow
      ? 'top-[68px] opacity-100 translate-y-0 pointer-events-auto'
      : 'top-[52px] opacity-0 -translate-y-3 pointer-events-none'
  }`;

  return (
    <>
      {/* ══ Floating pill ══ */}
      <div className={pillClass} style={{ willChange: 'transform, opacity' }}>
        <div
          ref={wrapperRef}
          className="flex items-center rounded-full overflow-hidden"
          style={{
            minWidth: 'min(460px, 88vw)',
            maxWidth: 680,
            width: '88vw',
            /* Frosted glass: light grey */
            background: 'rgba(243, 244, 246, 0.9)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid black',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.10)',
          }}
        >
          {/* icon */}
          <div className="pl-4 pr-2 shrink-0">
            <Search size={14} className="text-[#9ca3af]" />
          </div>

          {/* input */}
          <input
            ref={inputRef}
            id="floating-search-input"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
              setIsOpen(true);
              updateAnchor();
            }}
            onFocus={() => { if (query.trim()) { setIsOpen(true); updateAnchor(); } }}
            onKeyDown={handleKeyDown}
            placeholder="Search destinations, exams, services…"
            className="flex-1 bg-transparent py-2.5 text-[13px] text-[#1f2937] placeholder-[#6b7280] focus:outline-none"
            autoComplete="off"
            aria-label="Search site"
          />

          {/* clear */}
          {query && (
            <button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                setQuery('');
                setIsOpen(false);
                inputRef.current?.focus();
              }}
              className="p-2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
              aria-label="Clear"
            >
              <X size={12} />
            </button>
          )}

          {/* submit */}
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              if (filtered.length > 0) handleItemClick(filtered[0].path);
            }}
            className="mx-1.5 my-1.5 px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all flex items-center gap-1.5 shrink-0 bg-gradient-to-r from-primary-600 to-indigo-500 hover:from-primary-500 hover:to-indigo-400 text-white shadow-sm border border-white/10"
            style={{
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Search"
          >
            <Search size={11} />
            Search
          </button>
        </div>
      </div>

      {/* ══ Dropdown ══ */}
      {isOpen && filtered.length > 0 && (
        <Dropdown
          items={filtered}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
          anchor={anchor}
          containerRef={dropdownRef}
        />
      )}

      {/* ══ No results ══ */}
      {isOpen && query.trim() && filtered.length === 0 && anchor &&
        createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: 'fixed',
              top: anchor.bottom + 10,
              left: anchor.left,
              width: Math.max(anchor.width, 400),
              zIndex: 99999,
              background: 'rgba(243, 244, 246, 0.9)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid black',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.10)',
            }}
            className="rounded-2xl p-5 text-center"
          >
            <Search size={18} className="text-[#9ca3af] mx-auto mb-2" />
            <p className="text-sm text-[#6b7280]">
              No results for <strong className="text-[#1f2937]">&ldquo;{query}&rdquo;</strong>
            </p>
          </div>,
          document.body
        )}
    </>
  );
}
