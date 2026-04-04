import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import AnimateIn from '../shared/AnimateIn';
import useInView from '../../hooks/useInView';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// ISO 3166-1 numeric codes (no leading zeros — TopoJSON stores as numbers)
const FEATURED = {
  '840': { name: 'United States', flag: '🇺🇸', path: '/countries/usa', coords: [-100, 40] },
  '826': { name: 'United Kingdom', flag: '🇬🇧', path: '/countries/uk', coords: [-1.5, 52] },
  '124': { name: 'Canada', flag: '🇨🇦', path: '/countries/canada', coords: [-95, 60] },
  '36': { name: 'Australia', flag: '🇦🇺', path: '/countries/australia', coords: [134, -26] },
  '372': { name: 'Ireland', flag: '🇮🇪', path: '/countries/ireland', coords: [-8, 53] },
  '554': { name: 'New Zealand', flag: '🇳🇿', path: '/countries/new-zealand', coords: [172, -40] },
};

// Highlight these as "Europe" destination
const EU_CODES = new Set([
  '276', '250', '528', '724', '380', '752', '578', '756', '40', '56',
  '208', '246', '620', '616', '300', '703', '203', '348', '705', '191',
  '100', '642', '233', '428', '440', '688', '804', '826', // note: UK is separate
]);
// Remove UK from EU (it's featured separately)
EU_CODES.delete('826');

const EU_MARKER = [13, 50]; // Central Europe

const LEGEND = [
  ...Object.values(FEATURED),
  { name: 'Europe', flag: '🇪🇺', path: '/countries/europe' },
];

export default function WorldMap() {
  const navigate = useNavigate();
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [activeId, setActiveId] = useState(null);
  const [tooltip, setTooltip] = useState(null); // { name, x, y }

  const getConfig = useCallback((geoId) => {
    if (FEATURED[geoId]) return { ...FEATURED[geoId], group: geoId };
    if (EU_CODES.has(geoId)) return { name: 'Europe', flag: '🇪🇺', path: '/countries/europe', group: 'EU' };
    return null;
  }, []);

  const getFill = useCallback((geoId) => {
    const config = getConfig(geoId);
    if (!config) return '#dde6f0'; // non-featured — soft ocean gray

    const isActive =
      activeId === geoId ||
      (config.group === 'EU' && getConfig(activeId)?.group === 'EU');

    if (FEATURED[geoId]) return isActive ? '#1d4ed8' : '#3b82f6';
    return isActive ? '#1d4ed8' : '#3b82f6'; // EU same colour
  }, [activeId, getConfig]);

  const handleEnter = useCallback((geoId, x, y) => {
    const config = getConfig(geoId);
    if (!config) return;
    setActiveId(geoId);
    setTooltip({ name: config.name, x, y });
  }, [getConfig]);

  const handleMove = useCallback((x, y) => {
    if (tooltip) setTooltip(p => ({ ...p, x, y }));
  }, [tooltip]);

  const handleLeave = useCallback(() => {
    setActiveId(null);
    setTooltip(null);
  }, []);

  const handleClick = useCallback((geoId) => {
    const config = getConfig(geoId);
    if (config) navigate(config.path);
  }, [getConfig, navigate]);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Tooltip — fixed so it follows cursor across scroll */}
      {tooltip && (
        <div
          className="fixed z-[9999] pointer-events-none flex items-center gap-1.5 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl"
          style={{ left: tooltip.x + 14, top: tooltip.y - 42 }}
        >
          {tooltip.name}
          {/* Arrow */}
          <span className="absolute left-3 -bottom-[5px] w-2.5 h-2.5 bg-gray-900 rotate-45 rounded-sm" />
        </div>
      )}

      <div className="container-custom">
        {/* Header */}
        <AnimateIn animation="fadeUp">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-[11px] font-bold uppercase tracking-widest mb-4">
              Interactive Map
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Explore Study Destinations Worldwide
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
              Click on any highlighted country to discover universities, scholarships, and visa information.
            </p>
          </div>
        </AnimateIn>

        {/* Map container */}
        <AnimateIn animation="fadeUp" delay={150}>
          <div
            ref={sectionRef}
            className={`relative bg-gradient-to-b from-[#e8f4fd] to-[#d4eaf7] rounded-3xl border border-blue-100 shadow-xl shadow-blue-100/40 overflow-hidden transition-all duration-700 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Subtle grid lines for ocean */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(99,155,210,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,155,210,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <ComposableMap
              projectionConfig={{ scale: 155, center: [15, 5] }}
              width={900}
              height={440}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const config = getConfig(geo.id);
                    const fill = getFill(geo.id);
                    const featured = !!config;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={(evt) => handleEnter(geo.id, evt.clientX, evt.clientY)}
                        onMouseMove={(evt) => handleMove(evt.clientX, evt.clientY)}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick(geo.id)}
                        style={{
                          default: {
                            fill,
                            stroke: '#ffffff',
                            strokeWidth: 0.5,
                            outline: 'none',
                            cursor: featured ? 'pointer' : 'default',
                            transition: 'fill 0.2s ease',
                          },
                          hover: {
                            fill,          // state-driven — don't override
                            stroke: '#ffffff',
                            strokeWidth: 0.5,
                            outline: 'none',
                            cursor: featured ? 'pointer' : 'default',
                          },
                          pressed: {
                            fill: '#1e40af',
                            outline: 'none',
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Markers — featured countries */}
              {Object.entries(FEATURED).map(([id, { name, coords, path }]) => (
                <Marker key={id} coordinates={coords}>
                  {/* Pulse ring */}
                  <circle r={10} fill="#3b82f6" opacity={0.15} />
                  {/* Main dot */}
                  <circle
                    r={5}
                    fill="#ffffff"
                    stroke="#2563eb"
                    strokeWidth={2.5}
                    className="cursor-pointer drop-shadow-md"
                    onClick={() => navigate(path)}
                    onMouseEnter={(evt) => setTooltip({ name, x: evt.clientX, y: evt.clientY })}
                    onMouseLeave={() => setTooltip(null)}
                  />
                </Marker>
              ))}

              {/* Europe marker */}
              <Marker coordinates={EU_MARKER}>
                <circle r={10} fill="#3b82f6" opacity={0.15} />
                <circle
                  r={5}
                  fill="#ffffff"
                  stroke="#2563eb"
                  strokeWidth={2.5}
                  className="cursor-pointer drop-shadow-md"
                  onClick={() => navigate('/countries/europe')}
                  onMouseEnter={(evt) => setTooltip({ name: 'Europe', x: evt.clientX, y: evt.clientY })}
                  onMouseLeave={() => setTooltip(null)}
                />
              </Marker>
            </ComposableMap>

            {/* Map legend overlay — bottom left */}
            <div className="absolute bottom-3 left-4 flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-white/60">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary-500" />
                <span className="text-[10px] text-gray-600 font-medium">Destinations</span>
              </div>
              <div className="w-px h-3 bg-gray-200" />
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#dde6f0]" />
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
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 hover:shadow-md text-gray-700 text-sm font-medium transition-all duration-200 shadow-sm"
              >
                <span>{name}</span>
              </button>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
