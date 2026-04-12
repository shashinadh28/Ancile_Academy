import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import * as topojson from 'topojson-client';
import AnimateIn from '../shared/AnimateIn';
import TextAnimation from '../ui/scroll-text';

// ── Destination config ───────────────────────────────────────────────────────
// coords = [lng, lat] — used to place the marker pin
const FEATURED = {
  '840': { name: 'United States',  path: '/countries/usa',         coords: [-100, 38]  },
  '826': { name: 'United Kingdom', path: '/countries/uk',          coords: [  -2, 54]  },
  '124': { name: 'Canada',         path: '/countries/canada',      coords: [ -96, 60]  },
  '784': { name: 'Dubai',          path: '/countries/dubai',       coords: [  55.27, 25.20] },
  '36':  { name: 'Australia',      path: '/countries/australia',   coords: [ 134, -25] },
  '372': { name: 'Ireland',        path: '/countries/ireland',     coords: [  -8, 53]  },
  '554': { name: 'New Zealand',    path: '/countries/new-zealand', coords: [ 172, -40] },
};

const EU_MARKER = { name: 'Europe', path: '/countries/europe', coords: [13, 52] };

// ISO-3166-1 numeric codes for European countries (rendered as "Europe" group)
const EU_CODES = new Set([
  '276','250','528','724','380','752','578','756','40','56',
  '208','246','620','616','300','703','203','348','705','191',
  '100','642','233','428','440','688','804',
]);

const LEGEND = [...Object.values(FEATURED), EU_MARKER];

// ── SVG viewport ─────────────────────────────────────────────────────────────
const W = 900;
const H = 450;

const projection = geoNaturalEarth1()
  .scale(153)
  .translate([W / 2, H / 2 + 20]);

const pathGen = geoPath().projection(projection);

// ── Colours ──────────────────────────────────────────────────────────────────
const C_DEFAULT  = '#cdd8e3';
const C_FEATURED = '#3b82f6';
const C_HOVER    = '#1d4ed8';

// TopoJSON stores IDs as raw numbers (e.g. 36 for Australia, 840 for USA).
// Normalise to a leading-zero-free string so FEATURED keys always match.
const toId = (raw) => {
  if (raw === undefined || raw === null) return '';
  const n = Number(raw);
  return isNaN(n) ? String(raw) : String(n);
};

// ── Component ────────────────────────────────────────────────────────────────
export default function WorldMap() {
  const navigate = useNavigate();

  const [geos, setGeos]       = useState([]);
  const [hovered, setHovered] = useState(null);   // country-id string OR 'EU'
  const [tooltip, setTooltip] = useState(null);   // { name, x, y }

  // Fetch TopoJSON from /public (bundled locally — no CDN dependency)
  useEffect(() => {
    fetch('/countries-110m.json')
      .then(r => r.json())
      .then(world => {
        const features = topojson.feature(world, world.objects.countries).features;
        setGeos(features);
      })
      .catch(err => console.error('WorldMap: failed to load geography', err));
  }, []);

  // Return destination info for a raw TopoJSON id, or null for non-destinations
  const getInfo = useCallback((rawId) => {
    const sid = toId(rawId);
    if (FEATURED[sid]) return { ...FEATURED[sid], group: sid };
    if (EU_CODES.has(sid)) return { ...EU_MARKER, group: 'EU' };
    return null;
  }, []);

  // Fill colour — driven by `hovered` group key
  const getFill = useCallback((rawId) => {
    const info = getInfo(rawId);
    if (!info) return C_DEFAULT;
    return hovered === info.group ? C_HOVER : C_FEATURED;
  }, [hovered, getInfo]);

  // ── Mouse handlers (country paths) ────────────────────────────────────────
  const onPathEnter = (e, rawId) => {
    const info = getInfo(rawId);
    if (!info) return;                              // ignore non-destinations
    setHovered(info.group);
    setTooltip({ name: info.name, x: e.clientX, y: e.clientY });
  };

  const onPathLeave = () => {
    setHovered(null);
    setTooltip(null);
  };

  // Use functional update — avoids stale closure where tooltip appears null
  // even though it was just set by a previous render cycle
  const onSvgMove = (e) => {
    setTooltip(t => t ? { ...t, x: e.clientX, y: e.clientY } : null);
  };

  const onPathClick = (rawId) => {
    const info = getInfo(rawId);
    if (info) navigate(info.path);
  };

  // ── Mouse handlers (markers) ──────────────────────────────────────────────
  const onMarkerEnter = (e, markerId, name) => {
    setHovered(markerId);
    setTooltip({ name, x: e.clientX, y: e.clientY });
  };

  // All markers: featured countries + Europe
  const allMarkers = [
    ...Object.entries(FEATURED).map(([id, data]) => ({ ...data, markerId: id })),
    { ...EU_MARKER, markerId: 'EU' },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Floating tooltip — only renders when hovering a destination */}
      {tooltip && (
        <div
          className="fixed z-[9999] pointer-events-none bg-gray-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap"
          style={{ left: tooltip.x + 14, top: tooltip.y - 42 }}
        >
          {tooltip.name}
          <span className="absolute left-4 -bottom-[5px] w-2.5 h-2.5 bg-gray-900/90 rotate-45 rounded-sm" />
        </div>
      )}

      <div className="container-custom">

        {/* Section header */}
        <AnimateIn animation="fadeUp">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-[11px] font-bold uppercase tracking-widest mb-4">
              Interactive Map
            </span>
            <TextAnimation
              as="h2"
              text="Explore Study Destinations Worldwide"
              lineAnime={true}
              classname="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight"
            />
            <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
              Click on any highlighted country to discover universities, scholarships, and visa information.
            </p>
          </div>
        </AnimateIn>

        {/* Map container */}
        <AnimateIn animation="fadeUp" delay={150}>
          <div className="relative bg-gradient-to-b from-[#e8f4fd] to-[#d4eaf7] rounded-3xl border border-blue-100 shadow-xl shadow-blue-100/40 overflow-hidden">

            {/* Ocean grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(99,155,210,0.1) 1px, transparent 1px),' +
                  'linear-gradient(90deg, rgba(99,155,210,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <svg
              viewBox={`0 0 ${W} ${H}`}
              width="100%"
              style={{ display: 'block' }}
              onMouseMove={onSvgMove}
              onMouseLeave={onPathLeave}
            >
              {/* ── Country fills ─────────────────────────────────────── */}
              {geos.map((geo) => {
                const info      = getInfo(geo.id);
                const fill      = getFill(geo.id);
                const clickable = !!info;
                return (
                  <path
                    key={`geo-${geo.id}`}
                    d={pathGen(geo)}
                    fill={fill}
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      cursor: clickable ? 'pointer' : 'default',
                      transition: 'fill 0.18s ease',
                    }}
                    onMouseEnter={e => onPathEnter(e, geo.id)}
                    onMouseLeave={onPathLeave}
                    onClick={() => onPathClick(geo.id)}
                  />
                );
              })}

              {/* ── Destination markers (rendered on top of fills) ─────── */}
              {geos.length > 0 && allMarkers.map(({ markerId, name, path: navPath, coords }) => {
                const projected = projection(coords);
                if (!projected) return null;
                const [x, y]  = projected;
                const isHov   = hovered === markerId;

                return (
                  <g
                    key={`marker-${markerId}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(navPath)}
                    onMouseEnter={e => onMarkerEnter(e, markerId, name)}
                    onMouseLeave={onPathLeave}
                  >
                    {/* Outer pulse ring */}
                    <circle
                      cx={x} cy={y}
                      r={isHov ? 14 : 10}
                      fill="#3b82f6"
                      opacity={isHov ? 0.28 : 0.15}
                      style={{ transition: 'all 0.2s ease' }}
                    />
                    {/* Inner filled dot */}
                    <circle
                      cx={x} cy={y}
                      r={isHov ? 6.5 : 5}
                      fill="#ffffff"
                      stroke={isHov ? '#1d4ed8' : '#2563eb'}
                      strokeWidth={isHov ? 3 : 2.5}
                      style={{ transition: 'all 0.2s ease' }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Map legend */}
            <div className="absolute bottom-3 left-4 flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-white/60">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-[10px] text-gray-600 font-medium">Destinations</span>
              </div>
              <div className="w-px h-3 bg-gray-200" />
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: C_DEFAULT }} />
                <span className="text-[10px] text-gray-400 font-medium">Other countries</span>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Country pill buttons */}
        <AnimateIn animation="fadeUp" delay={250}>
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {LEGEND.map(({ name, path }) => (
              <button
                key={name}
                onClick={() => navigate(path)}
                className="px-4 py-2 rounded-full border border-gray-200 bg-white hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 hover:shadow-md text-gray-700 text-sm font-medium transition-all duration-200 shadow-sm"
              >
                {name}
              </button>
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
