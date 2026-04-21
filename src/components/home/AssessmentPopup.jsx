import { useState, useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

const DESTINATIONS = ['USA', 'UK', 'Canada', 'Australia', 'Ireland', 'Germany', 'New Zealand', 'Other'];
const COUNTDOWN_FROM = 10;

function CircleTimer({ seconds }) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const progress = (seconds / COUNTDOWN_FROM) * circumference;

  return (
    <div className="relative w-11 h-11 flex items-center justify-center">
      <svg width="44" height="44" viewBox="0 0 44 44" className="absolute inset-0 -rotate-90">
        {/* Track */}
        <circle cx="22" cy="22" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="3" />
        {/* Progress */}
        <circle
          cx="22" cy="22" r={radius}
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <span className="relative text-[11px] font-bold text-primary-700 tabular-nums">{seconds}s</span>
    </div>
  );
}

export default function AssessmentPopup() {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(COUNTDOWN_FROM);
  const [canClose, setCanClose] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const intervalRef = useRef(null);

  // Show popup after 2 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(showTimer);
  }, []);

  // Start countdown once popup is visible
  useEffect(() => {
    if (!visible) return;

    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setCanClose(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [visible]);

  const handleClose = () => {
    if (!canClose) return;
    setVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setVisible(false), 2200);
    }, 1000);
  };

  if (!visible) return null;

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget && canClose) handleClose(); }}
    >
      {/* ── Card ── */}
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ boxShadow: '0 24px 64px rgba(15,23,42,0.22), 0 4px 16px rgba(37,99,235,0.12)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient bar */}
        <div
          className="h-1.5 w-full"
          style={{ background: 'linear-gradient(90deg, #1d4ed8, #2563eb, #3b82f6)' }}
        />

        {/* ── Header ── */}
        <div className="px-6 pt-5 pb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-gray-900 font-bold text-[17px] leading-snug">
              Sign up &amp; Get{' '}
              <span className="text-primary-600">Free Assessment</span>
            </h3>
            <p className="text-gray-400 text-xs mt-1">Get personalized guidance from our certified counsellors in 24 hours.</p>
          </div>

          {/* Timer / Close button */}
          <div className="shrink-0">
            {canClose ? (
              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center text-gray-500 transition-all duration-200 cursor-pointer"
                aria-label="Close"
              >
                <X size={17} />
              </button>
            ) : (
              <CircleTimer seconds={countdown} />
            )}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="px-6 pb-6">
          {submitted ? (
            <div className="text-center py-8">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #dbeafe, #eff6ff)', border: '2px solid #bfdbfe' }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-gray-900 font-bold text-base mb-1">Thank you!</p>
              <p className="text-gray-500 text-sm">Our counsellor will reach out within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                placeholder="Full Name *"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
              />
              <input
                placeholder="Email ID *"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
              />
              <div className="flex items-center gap-2">
                <span className="px-3 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-500 shrink-0">+91</span>
                <input
                  placeholder="Phone Number *"
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                />
              </div>
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none"
              >
                <option value="" disabled>Preferred Destination *</option>
                {DESTINATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer pt-0.5">
                <input type="checkbox" required className="mt-0.5 accent-primary-600 shrink-0" />
                <span>
                  I agree to Ancile Academy's{' '}
                  <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>{' '}
                  and{' '}
                  <a href="#" className="text-primary-600 hover:underline">Terms &amp; Conditions</a>
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-1"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                  boxShadow: '0 8px 24px rgba(37,99,235,0.28)',
                }}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    Book a FREE Assessment
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
