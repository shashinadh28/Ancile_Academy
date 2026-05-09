import { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, CheckCircle, Star, GraduationCap, Globe, Award } from 'lucide-react';

const DESTINATIONS = ['USA', 'UK', 'Canada', 'Australia', 'Ireland', 'Germany', 'New Zealand', 'Dubai', 'Other'];
const COUNTDOWN_FROM = 10;

/* ── Animated ring timer ───────────────────────────────── */
function CircleTimer({ seconds }) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const progress = (seconds / COUNTDOWN_FROM) * circumference;
  return (
    <div className="relative w-11 h-11 flex items-center justify-center">
      <svg width="44" height="44" viewBox="0 0 44 44" className="absolute inset-0 -rotate-90">
        <circle cx="22" cy="22" r={radius} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
        <circle
          cx="22" cy="22" r={radius}
          fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <span className="relative text-[11px] font-bold text-white tabular-nums">{seconds}s</span>
    </div>
  );
}

/* ── Circle timer for white panel (dark colors) ────────── */
function CircleTimerDark({ seconds }) {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const progress = (seconds / COUNTDOWN_FROM) * circumference;
  return (
    <div className="relative w-9 h-9 flex items-center justify-center">
      <svg width="36" height="36" viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
        <circle cx="18" cy="18" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="2.5" />
        <circle
          cx="18" cy="18" r={radius}
          fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <span className="relative text-[10px] font-bold text-primary-700 tabular-nums">{seconds}s</span>
    </div>
  );
}

/* ── Trust badge pill ──────────────────────────────────── */
function Badge({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-white/80 text-xs">
      <Icon size={13} className="text-white/70 shrink-0" />
      <span>{text}</span>
    </div>
  );
}

/* ── Input field ───────────────────────────────────────── */
function Field({ children }) {
  return <div className="relative">{children}</div>;
}

/* ── Main popup ────────────────────────────────────────── */
export default function AssessmentPopup() {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(COUNTDOWN_FROM);
  const [canClose, setCanClose] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const intervalRef = useRef(null);

  /* Show popup after 20 seconds */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20000);
    return () => clearTimeout(t);
  }, []);

  /* Countdown once visible */
  useEffect(() => {
    if (!visible) return;
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { clearInterval(intervalRef.current); setCanClose(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [visible]);

  const handleClose = () => { if (canClose) setVisible(false); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setVisible(false), 2400);
    }, 1200);
  };

  if (!visible) return null;

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,18,38,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget && canClose) handleClose(); }}
    >
      {/* ── Card ── */}
      <div
        className="relative w-full flex rounded-2xl overflow-hidden shadow-2xl"
        style={{
          maxWidth: '780px',
          boxShadow: '0 32px 80px rgba(10,18,38,0.40), 0 0 0 1px rgba(255,255,255,0.07)',
          animation: 'popupIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes popupIn {
            from { opacity: 0; transform: scale(0.88) translateY(24px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes checkIn {
            from { opacity: 0; transform: scale(0.5); }
            to   { opacity: 1; transform: scale(1); }
          }
        `}</style>

        {/* ══ LEFT PANEL ══════════════════════════════════════════ */}
        <div
          className="hidden md:flex flex-col justify-between w-[46%] shrink-0 p-8 relative overflow-hidden"
          style={{ background: 'linear-gradient(155deg, #0f2160 0%, #1d4ed8 55%, #2563eb 100%)' }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-white/10" />
          <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full border border-white/8" />
          <div className="absolute top-1/2 right-4 w-32 h-32 rounded-full bg-white/5 blur-2xl" />

          {/* Left panel top spacer - no logo */}
          <div className="relative" />

          {/* Middle: headline */}
          <div className="relative my-6">
            <p className="text-white/60 text-[11px] uppercase tracking-widest font-semibold mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-white/40" />
              Limited Time Offer
            </p>
            <h2 className="text-white font-extrabold text-2xl leading-tight">
              Get Your Free<br />
              <span style={{ color: '#93c5fd' }}>Profile Assessment</span>
            </h2>
            <p className="text-white/65 text-sm mt-3 leading-relaxed">
              Talk to our certified counsellors and discover the best universities for your profile — absolutely free.
            </p>
          </div>

          {/* Trust badges */}
          <div className="relative space-y-2.5">
            <div className="h-px bg-white/10 mb-4" />
            <Badge icon={GraduationCap} text="Expert counsellors across 8 countries" />
            <Badge icon={Globe} text="500+ university partnerships worldwide" />
            <Badge icon={Award} text="10,000+ successful student placements" />
            {/* Stars */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(n => <Star key={n} size={12} className="fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-white/60 text-xs">4.9 / 5 — Google Reviews</span>
            </div>
          </div>
        </div>

        {/* ══ RIGHT PANEL ═════════════════════════════════════════ */}
        <div className="flex-1 bg-white flex flex-col relative">

          {/* ── Close / Timer — absolute top-right of white panel ── */}
          <div className="absolute top-4 right-4 z-10">
            {canClose ? (
              <button
                onClick={handleClose}
                aria-label="Close"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                style={{
                  background: '#f1f5f9',
                  color: '#64748b',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  border: '1.5px solid #e2e8f0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fee2e2';
                  e.currentTarget.style.color = '#ef4444';
                  e.currentTarget.style.borderColor = '#fca5a5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f1f5f9';
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <X size={16} />
              </button>
            ) : (
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: '#f1f5f9', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
              >
                <CircleTimerDark seconds={countdown} />
              </div>
            )}
          </div>

          {/* Mobile-only title strip */}
          <div
            className="md:hidden px-5 pt-5 pb-4"
            style={{ borderBottom: '1px solid #f1f5f9' }}
          >
            <h3 className="font-bold text-gray-900 text-base leading-snug pr-12">
              Sign up &amp; Get <span className="text-primary-600">Free Assessment</span>
            </h3>
            <p className="text-gray-400 text-xs mt-0.5">Certified counsellors · 24-hr response</p>
          </div>

          {/* Form area */}
          <div className="flex-1 px-6 md:px-8 pt-6 md:pt-7 pb-7">
            {/* Desktop heading */}
            <div className="hidden md:block mb-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary-500 mb-1">Step 1 of 1</p>
              <h3 className="text-gray-900 font-extrabold text-xl leading-snug">
                Book Your Free Consultation
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Fill in your details — our counsellor will reach out in 24 hours.
              </p>
              <div className="h-0.5 w-10 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full mt-4" />
            </div>

            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center justify-center py-10 text-center"
                style={{ animation: 'checkIn 0.5s ease' }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #dbeafe, #eff6ff)', border: '2px solid #93c5fd' }}
                >
                  <CheckCircle size={30} className="text-primary-600" strokeWidth={2} />
                </div>
                <p className="text-gray-900 font-bold text-lg mb-1">You're all set! 🎉</p>
                <p className="text-gray-500 text-sm max-w-xs">
                  Our expert counsellor will contact you within 24 hours with your personalized assessment.
                </p>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Name */}
                <Field>
                  <input
                    placeholder="Full Name *"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/25 focus:border-primary-500 focus:bg-white transition-all"
                  />
                </Field>

                {/* Email */}
                <Field>
                  <input
                    placeholder="Email Address *"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/25 focus:border-primary-500 focus:bg-white transition-all"
                  />
                </Field>

                {/* Phone */}
                <div className="flex gap-2">
                  <div className="px-3 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600 font-semibold shrink-0 flex items-center gap-1.5">
                    <span>🇮🇳</span> +91
                  </div>
                  <input
                    placeholder="Phone Number *"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/25 focus:border-primary-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Destination */}
                <div className="relative">
                  <select
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/25 focus:border-primary-500 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Preferred Destination *</option>
                    {DESTINATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Consent */}
                <label className="flex items-start gap-2.5 cursor-pointer pt-0.5">
                  <input type="checkbox" required className="mt-0.5 accent-primary-600 shrink-0 w-3.5 h-3.5" />
                  <span className="text-[11.5px] text-gray-400 leading-relaxed">
                    I agree to Ancile Academy's{' '}
                    <a href="/privacy-policy" target="_blank" className="text-primary-600 hover:underline font-medium">Privacy Policy</a>{' '}
                    and{' '}
                    <a href="/terms-of-use" target="_blank" className="text-primary-600 hover:underline font-medium">Terms of Use</a>.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed mt-1"
                  style={{
                    backgroundColor: '#2563eb',
                    boxShadow: '0 6px 20px rgba(37,99,235,0.30)',
                  }}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    <>
                      Book My Free Assessment
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

                {/* Reassurance */}
                <p className="text-center text-[11px] text-gray-400 pt-0.5 flex items-center justify-center gap-1.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  100% Free · No spam · Secure & confidential
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
