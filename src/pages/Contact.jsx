import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { Mail, Phone, MapPin, Send, ArrowRight, Globe, Clock, MessageCircle } from 'lucide-react';
import PageBanner from '../components/shared/PageBanner';
import AnimateIn from '../components/shared/AnimateIn';
import useInView from '../hooks/useInView';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const MAP_OFFICES = [
  { id: 'denton', coordinates: [-97.1331, 33.2148], label: 'Headquarter', sub: 'Denton, TX' },
  { id: 'milpitas', coordinates: [-121.8996, 37.4323], label: 'Milpitas-Branch', sub: 'California' },
  { id: 'fortmill', coordinates: [-80.9423, 35.0071], label: 'South Carolina-Branch', sub: 'Fort Mill, SC' },
  { id: 'vijayawada', coordinates: [80.648, 16.5062], label: 'Vijayawada, India', sub: 'Andhra Pradesh' },
  { id: 'calgary', coordinates: [-114.0719, 51.0447], label: 'Canada, Calgary', sub: 'Alberta' },
  { id: 'hyderabad-kphb', coordinates: [78.3924, 17.4948], label: 'Hyderabad, India', sub: 'KPHB' },
  { id: 'hyderabad-gachibowli', coordinates: [78.3489, 17.4401], label: 'Hyderabad, India', sub: 'Gachibowli' },
];

const OFFICE_CARDS = [
  {
    title: 'Headquarter',
    address: '300 N Carroll Blvd, Suite 103, Denton, TX 76201',
    phones: [
      { display: '919.607.2143', tel: '+19196072143' },
      { display: '913.804.7687', tel: '+19138047687' },
    ],
    email: 'support@ancileacademy.com',
  },
  {
    title: 'Milpitas-Branch',
    address: '329 Odyssey Lane, Milpitas, CA 95035',
    phones: [{ display: '669.437.1139', tel: '+16694371139' }],
    email: 'support@ancileacademy.com',
  },
  {
    title: 'South Carolina-Branch',
    address: '148 Ravensara Ave, Fort Mill, SC 29715',
    phones: [{ display: '424.242.4567', tel: '+14242424567' }],
    email: 'support@ancileacademy.com',
  },
  {
    title: 'Vijayawada, India',
    address: 'D No: 5-141, Koudinya Nagar, Penamaluru (MD), (PO), Krishna District, Andhra Pradesh 521139',
    phones: [{ display: '+91 8885555474', tel: '+918885555474' }],
    email: 'support@ancileacademy.com',
  },
  {
    title: 'Canada, Calgary (Regus)',
    address: '8 Floor Bankers Hall West, 888, 5th Street SW, Suite 1000, Calgary, AB T2P 5C5',
    phones: [{ display: '(+91) 9177330029', tel: '+919177330029' }],
    email: 'support@ancileacademy.com',
  },
  {
    title: 'Hyderabad, India',
    address: 'My Co Office, Lift Lobby 4, 2nd Floor, 5th Phase, KPHB, Kukatpally, Hyderabad 500072',
    phones: [{ display: '+918977057333', tel: '+918977057333' }],
    email: 'support@ancileacademy.com',
  },
  {
    title: 'Hyderabad, India',
    address: 'Unit 8, 2nd floor, Vasavi sky city, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500081',
    phones: [{ display: '+918977057333', tel: '+918977057333' }],
    email: 'support@ancileacademy.com',
  },
];

export default function Contact() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ fullName: '', email: '', company: '', message: '' });

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will contact you shortly.');
    setForm({ fullName: '', email: '', company: '', message: '' });
  };

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get in touch — we typically respond within one business day." breadcrumbs={[{ label: 'Contact' }]} />

      {/* Main: info + form */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT */}
            <AnimateIn animation="fadeRight">
              <div>
                <div className="flex gap-4 mb-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-600/20">
                    <Mail className="h-6 w-6 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Let's talk</h2>
                    <p className="mt-1 text-gray-500 text-sm leading-relaxed max-w-md">
                      Have a question about studying abroad? Reach out and our expert counsellors will guide you.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Mail, label: 'Email', value: 'info@ancileacademy.com', href: 'mailto:info@ancileacademy.com', color: 'bg-blue-50 text-blue-600' },
                    { icon: Phone, label: 'Phone', value: '+91 89770 57333', href: 'tel:+918977057333', color: 'bg-emerald-50 text-emerald-600' },
                    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/918977057333', color: 'bg-green-50 text-green-600' },
                    { icon: Clock, label: 'Hours', value: 'Mon–Sat, 9 AM – 7 PM', href: null, color: 'bg-amber-50 text-amber-600' },
                  ].map(({ icon: Icon, label, value, href, color }) => (
                    <div key={label} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}><Icon size={18} /></div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">{label}</p>
                        {href ? (
                          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-medium text-gray-800 hover:text-primary-600 transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm font-medium text-gray-800">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                  <div className="h-[320px] md:h-[380px]">
                    <ComposableMap
                      projectionConfig={{ scale: 140, center: [10, 25] }}
                      className="w-full h-full"
                      style={{ width: '100%', height: '100%' }}
                    >
                      <ZoomableGroup>
                        <Geographies geography={geoUrl}>
                          {({ geographies }) =>
                            geographies.map((geo) => (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#e5e7eb"
                                stroke="#fff"
                                strokeWidth={0.6}
                                style={{
                                  default: { outline: 'none' },
                                  hover: { outline: 'none', fill: '#d1d5db' },
                                  pressed: { outline: 'none' },
                                }}
                              />
                            ))
                          }
                        </Geographies>
                        {MAP_OFFICES.map((office) => (
                          <Marker key={office.id} coordinates={office.coordinates}>
                            <g
                              onMouseEnter={() => setActiveMarker(office.id)}
                              onMouseLeave={() => setActiveMarker(null)}
                              className="cursor-pointer"
                            >
                              <circle r={8} fill="rgba(37,99,235,0.15)" />
                              <circle r={5} fill="#2563eb" stroke="white" strokeWidth={2} />
                              {activeMarker === office.id && (
                                <g className="pointer-events-none">
                                  <rect x={-70} y={-40} width={140} height={30} rx={6} fill="white" stroke="#e5e7eb" strokeWidth={1} filter="url(#shadow)" />
                                  <text textAnchor="middle" y={-22} style={{ fontSize: '10px', fontWeight: 700, fill: '#1f2937' }}>{office.label}</text>
                                  <text textAnchor="middle" y={-12} style={{ fontSize: '9px', fill: '#6b7280' }}>{office.sub}</text>
                                </g>
                              )}
                            </g>
                          </Marker>
                        ))}
                      </ZoomableGroup>
                    </ComposableMap>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* RIGHT: Form */}
            <AnimateIn animation="fadeLeft" delay={100}>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-lg shadow-gray-200/50 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{ backgroundImage: 'radial-gradient(circle, #1d4ed8 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Send us a message</h3>
                  <p className="text-sm text-gray-400 mb-6">We'll get back to you within 2 hours.</p>
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-300 mb-8" />

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-gray-700">Full Name</label>
                      <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange} autoComplete="name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} autoComplete="email"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-gray-700">Company <span className="text-gray-400 font-normal">(optional)</span></label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange} autoComplete="organization"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
                      <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                        className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold text-white cursor-pointer transition-all duration-200 active:scale-[0.98]"
                      style={{ background: 'linear-gradient(135deg, #1d4ed8, #4f46e5)', boxShadow: '0 6px 20px rgba(37,99,235,.25)' }}
                      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 28px rgba(37,99,235,.40)'}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,.25)'}
                    >
                      <Send size={16} /> Submit Message
                    </button>
                  </form>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Office cards */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <AnimateIn animation="fadeUp">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ background: '#dbeafe', border: '1px solid #93c5fd', color: '#1d4ed8' }}>
                <Globe size={11} /> Our Offices
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Visit Us</h2>
            </div>
          </AnimateIn>

          <div ref={cardsRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {OFFICE_CARDS.map((office, i) => (
              <div key={`${office.title}-${office.address}`}
                className={`transition-all duration-700 ease-out ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-xl hover:-translate-y-1 hover:border-primary-200 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className="text-primary-500 shrink-0" />
                    <h4 className="font-bold text-gray-900 text-sm leading-snug">{office.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{office.address}</p>
                  <div className="flex flex-col gap-2">
                    {office.phones.map((phone) => (
                      <a key={phone.tel} href={`tel:${phone.tel}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                        <Phone size={12} /> {phone.display}
                      </a>
                    ))}
                    <a href={`mailto:${office.email}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors break-all">
                      <Mail size={12} /> {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimateIn animation="scaleIn">
            <div className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #172554, #1e3a8a, #1d4ed8)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Start Your Journey?</h2>
                <p className="text-blue-200/80 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                  Book a free consultation with our expert counsellors and take the first step towards your dream education abroad.
                </p>
                <a href="/get-started" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary-700 font-bold text-sm hover:shadow-lg transition-shadow">
                  Get Started <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
