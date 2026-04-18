/**
 * SearchBar — professional, accessible search component.
 *
 * FIX: The dropdown is rendered via createPortal into document.body.
 * The "close on outside click" listener fires on *mousedown*, which runs BEFORE
 * the button *click* event — so the dropdown was unmounted before navigation  
 * could fire. Fix: track the portal DOM node with a ref and treat clicks inside
 * it as "inside" clicks so the dropdown stays open long enough for the click to land.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Search, X, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchItems, POPULAR_ITEMS, TYPE_META } from '../../data/searchData';

/* ─── Badge chip ─────────────────────────────────────────────────────── */
function Badge({ type }) {
  const meta = TYPE_META[type] || TYPE_META.Page;
  return (
    <span className={`inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${meta.badgeClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1 ${meta.dotClass}`} />
      {type}
    </span>
  );
}

/* ─── Group results by type ──────────────────────────────────────────── */
function groupByType(items) {
  const order = ['Country', 'Exam', 'Service', 'Page'];
  const map = {};
  for (const item of items) {
    if (!map[item.type]) map[item.type] = [];
    map[item.type].push(item);
  }
  return order.filter((t) => map[t]).map((t) => ({ type: t, items: map[t] }));
}

/* ─── Dropdown panel ─────────────────────────────────────────────────── */
/*
 * NOTE: All interactive elements use onMouseDown with e.preventDefault() so
 * that the "outside mousedown" handler on the document does NOT close the
 * dropdown before the click event fires on the button.
 */
function DropdownPanel({ query, filtered, popular, activeIndex, onItemClick, style, listRef, grouped, containerRef }) {
  const isEmpty = query.trim() && filtered.length === 0;
  const showPopular = !query.trim() && popular.length > 0;

  const handleMouseDown = (e, path) => {
    e.preventDefault();   // ← prevents the document mousedown from closing dropdown
    onItemClick(path);
  };

  /* ── No results ── */
  if (isEmpty) {
    return (
      <div ref={containerRef} style={style}
        className="fixed bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 text-center z-[9999]">
        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
          <Search size={20} className="text-gray-300" />
        </div>
        <p className="text-sm font-medium text-gray-700 mb-1">No results found</p>
        <p className="text-xs text-gray-400">
          Try a different keyword or{' '}
          <button type="button" onMouseDown={(e) => handleMouseDown(e, '/contact')}
            className="text-primary-600 hover:underline">contact us</button>.
        </p>
      </div>
    );
  }

  /* ── Popular (hero empty state) ── */
  if (showPopular) {
    return (
      <div ref={containerRef} style={style}
        className="fixed bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999]">
        <div className="px-4 pt-3 pb-1 flex items-center gap-1.5 border-b border-gray-50">
          <TrendingUp size={12} className="text-primary-500" />
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Popular searches</span>
        </div>
        <ul ref={listRef} className="py-1">
          {popular.map((item, i) => (
            <li key={item.path + item.label}>
              <button type="button"
                onMouseDown={(e) => handleMouseDown(e, item.path)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 transition-colors cursor-pointer text-left ${
                  i === activeIndex ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
                data-index={i}>
                <div className="flex items-center gap-2 min-w-0">
                  <Search size={12} className="text-gray-300 shrink-0" />
                  <span className="text-sm truncate">{item.label}</span>
                </div>
                <Badge type={item.type} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  /* ── Grouped results (hero variant) ── */
  if (grouped) {
    const groups = groupByType(filtered);
    const flatItems = groups.flatMap((g) => g.items);
    return (
      <div ref={containerRef} style={style}
        className="fixed bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999]">
        <div className="px-4 pt-3 pb-1 flex items-center gap-1.5 border-b border-gray-50">
          <Search size={12} className="text-primary-500" />
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
        <ul ref={listRef} className="max-h-72 overflow-y-auto py-1">
          {groups.map((group) => (
            <li key={group.type}>
              <div className="px-4 pt-2.5 pb-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {TYPE_META[group.type]?.label || group.type}
                </span>
              </div>
              {group.items.map((item) => {
                const idx = flatItems.indexOf(item);
                const isActive = idx === activeIndex;
                return (
                  <button key={item.path + item.label} type="button"
                    onMouseDown={(e) => handleMouseDown(e, item.path)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 transition-colors cursor-pointer text-left ${
                      isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    data-index={idx}>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{item.label}</p>
                      {item.description && (
                        <p className="text-xs text-gray-400 truncate mt-0.5">{item.description}</p>
                      )}
                    </div>
                    <ArrowRight size={13} className={`shrink-0 ${isActive ? 'text-primary-500' : 'text-gray-300'}`} />
                  </button>
                );
              })}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  /* ── Flat list (navbar variant) ── */
  return (
    <div ref={containerRef} style={style}
      className="fixed bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999]">
      <ul ref={listRef} className="max-h-64 overflow-y-auto py-1">
        {filtered.map((item, i) => (
          <li key={item.path + item.label}>
            <button type="button"
              onMouseDown={(e) => handleMouseDown(e, item.path)}
              className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 text-sm transition-colors cursor-pointer text-left ${
                i === activeIndex ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
              }`}
              data-index={i}>
              <span className="truncate">{item.label}</span>
              <Badge type={item.type} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Main SearchBar ─────────────────────────────────────────────────── */
export default function SearchBar({ variant = 'navbar', placeholder, className = '', onNavigate }) {
  const isHero = variant === 'hero';

  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });

  const wrapperRef = useRef(null);    // the search bar wrapper in the normal DOM
  const dropdownRef = useRef(null);   // ← the portal dropdown root (key fix!)
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const filtered = query.trim() ? searchItems(query) : [];
  const showDropdown = isOpen && (filtered.length > 0 || (!query.trim() && isHero) || (query.trim() && filtered.length === 0));

  /* position portal under the input */
  const updatePos = useCallback(() => {
    const el = isHero ? wrapperRef.current : inputRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setDropdownPos({ top: rect.bottom + 8, left: rect.left, width: Math.max(rect.width, 300) });
  }, [isHero]);

  /* ── KEY FIX: close only when click is OUTSIDE both the wrapper AND the portal ── */
  useEffect(() => {
    const handler = (e) => {
      const inWrapper  = wrapperRef.current?.contains(e.target);
      const inDropdown = dropdownRef.current?.contains(e.target);
      if (!inWrapper && !inDropdown) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* reposition on scroll/resize */
  useEffect(() => {
    if (!isOpen) return;
    updatePos();
    window.addEventListener('resize', updatePos);
    window.addEventListener('scroll', updatePos, true);
    return () => {
      window.removeEventListener('resize', updatePos);
      window.removeEventListener('scroll', updatePos, true);
    };
  }, [isOpen, updatePos]);

  /* scroll highlighted item into view */
  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) return;
    const el = listRef.current.querySelector(`[data-index="${activeIndex}"]`) || listRef.current.children[activeIndex];
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const close = useCallback(() => { setIsOpen(false); setActiveIndex(-1); }, []);

  const handleItemClick = useCallback((path) => {
    navigate(path);
    setQuery('');
    close();
    onNavigate?.();
  }, [navigate, close, onNavigate]);

  /* keyboard navigation */
  const handleKeyDown = (e) => {
    const items = query.trim() ? filtered : (isHero ? POPULAR_ITEMS : []);
    const count = items.length;

    if (!isOpen) {
      if (e.key === 'ArrowDown') { setIsOpen(true); updatePos(); }
      return;
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((p) => (count === 0 ? -1 : (p + 1) % count));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((p) => (count === 0 ? -1 : p <= 0 ? count - 1 : p - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && items[activeIndex]) handleItemClick(items[activeIndex].path);
        else if (query.trim() && filtered.length > 0) handleItemClick(filtered[0].path);
        break;
      case 'Escape':
        close(); inputRef.current?.blur();
        break;
    }
  };

  const handleChange = (e) => { setQuery(e.target.value); setActiveIndex(-1); setIsOpen(true); updatePos(); };
  const handleFocus  = () => { setIsOpen(true); updatePos(); };
  const clearQuery   = () => { setQuery(''); setActiveIndex(-1); inputRef.current?.focus(); };

  const dropStyle = { top: dropdownPos.top, left: dropdownPos.left, width: dropdownPos.width };

  const dropdownPanel = showDropdown ? (
    <DropdownPanel
      query={query}
      filtered={filtered}
      popular={POPULAR_ITEMS}
      activeIndex={activeIndex}
      onItemClick={handleItemClick}
      style={dropStyle}
      listRef={listRef}
      grouped={isHero}
      containerRef={dropdownRef}   /* ← pass ref so outside-click check works */
    />
  ) : null;

  /* ════ HERO VARIANT ════ */
  if (isHero) {
    return (
      <div ref={wrapperRef} className={`relative ${className}`}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const items = query.trim() ? filtered : POPULAR_ITEMS;
            if (activeIndex >= 0 && items[activeIndex]) handleItemClick(items[activeIndex].path);
            else if (query.trim() && filtered.length > 0) handleItemClick(filtered[0].path);
          }}
          className="flex items-center bg-white rounded-xl overflow-hidden"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,.10), 0 2px 8px rgba(0,0,0,.05)' }}
        >
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              ref={inputRef}
              id="hero-search-input"
              type="text"
              value={query}
              onChange={handleChange}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
              placeholder={placeholder || 'Search destinations, exams, services…'}
              className="w-full pl-11 pr-10 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
              aria-label="Search site"
              aria-expanded={isOpen}
              aria-autocomplete="list"
              aria-haspopup="listbox"
              role="combobox"
              autoComplete="off"
            />
            {query && (
              <button type="button" onClick={clearQuery}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search">
                <X size={14} />
              </button>
            )}
          </div>
          <button type="submit"
            className="px-5 sm:px-6 py-3.5 bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors cursor-pointer whitespace-nowrap rounded-r-xl flex items-center gap-1.5">
            <Search size={14} className="hidden sm:block" />
            Search
          </button>
        </form>
        {createPortal(dropdownPanel, document.body)}
      </div>
    );
  }

  /* ════ NAVBAR VARIANT ════ */
  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <div className={`flex items-center gap-2 bg-gray-50 border rounded-lg px-3 py-1.5 transition-all duration-200 ${
        isOpen ? 'border-primary-400 ring-2 ring-primary-100 bg-white' : 'border-gray-200 hover:border-gray-300'
      }`}>
        <Search size={14} className="text-gray-400 shrink-0" />
        <input
          ref={inputRef}
          id="navbar-search-input"
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || 'Search…'}
          className="bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none w-28 xl:w-40"
          aria-label="Search site"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          role="combobox"
          autoComplete="off"
        />
        {query && (
          <button type="button" onClick={clearQuery}
            className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Clear search">
            <X size={12} />
          </button>
        )}
      </div>
      {createPortal(dropdownPanel, document.body)}
    </div>
  );
}
