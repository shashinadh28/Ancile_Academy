import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

/* ─── Step data ─────────────────────────────────────────────────────── */
const steps = [
  { id: 1, label: "Profile assessment & enhancement", position: "bottom", icon: "👤" },
  { id: 2, label: "University shortlisting",           position: "top",    icon: "🏛️" },
  { id: 3, label: "GMAT / GRE / SAT prep",             position: "bottom", icon: "📝" },
  { id: 4, label: "Application essays",                position: "top",    icon: "✍️" },
  { id: 5, label: "Financial planning",                position: "bottom", icon: "💰" },
  { id: 6, label: "Interview training",                position: "top",    icon: "🎤" },
  { id: 7, label: "Visa counselling",                  position: "bottom", icon: "🛂" },
  { id: 8, label: "Pre-departure support",             position: "top",    icon: "🧳" },
];

const STEP_COUNT = steps.length;

/* ─── Step Card ─────────────────────────────────────────────────────── */
function StepCard({ step, index, active }) {
  const isTop = step.position === "top";
  const xPercent = (index / (STEP_COUNT - 1)) * 100;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${xPercent}%`,
        top: isTop ? "0%" : "auto",
        bottom: isTop ? "auto" : "0%",
        width: "120px",
        zIndex: 10,
        transform: "translateX(-50%)",
      }}
      initial={{ opacity: 0, y: isTop ? -16 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
    >
      {/* Card */}
      <motion.div
        animate={{
          scale: active ? 1.06 : 1,
          borderColor: active ? "#2563eb" : "rgba(255,255,255,0.1)",
          backgroundColor: active ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
          boxShadow: active
            ? "0 8px 28px rgba(37,99,235,0.35)"
            : "0 2px 8px rgba(0,0,0,0.2)",
        }}
        transition={{ duration: 0.4, ease: [0.34, 1.2, 0.64, 1] }}
        style={{
          padding: "10px 10px",
          borderRadius: "12px",
          border: "1.5px solid rgba(255,255,255,0.1)",
          textAlign: "center",
          cursor: "default",
          backdropFilter: "blur(4px)",
        }}
      >
        <motion.div
          animate={{ scale: active ? 1.15 : 1 }}
          transition={{ duration: 0.35 }}
          style={{ fontSize: "16px", marginBottom: "5px" }}
        >
          {step.icon}
        </motion.div>
        <div style={{
          fontSize: "8.5px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: active ? "#93c5fd" : "rgba(255,255,255,0.35)",
          marginBottom: "3px",
          transition: "color 0.4s",
        }}>
          Step {String(step.id).padStart(2, "0")}
        </div>
        <motion.div
          animate={{ color: active ? "#ffffff" : "rgba(255,255,255,0.45)" }}
          transition={{ duration: 0.4 }}
          style={{ fontSize: "10.5px", fontWeight: active ? 600 : 400, lineHeight: 1.4 }}
        >
          {step.label}
        </motion.div>
      </motion.div>

      {/* Connector line */}
      <div style={{ position: "relative", height: "28px" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1.5px",
            height: "100%",
            background: active
              ? "linear-gradient(180deg, #3b82f6, #1d4ed8)"
              : "rgba(255,255,255,0.1)",
            transition: "background 0.5s ease",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Track dot */}
      <motion.div
        animate={{
          width: active ? "13px" : "8px",
          height: active ? "13px" : "8px",
          backgroundColor: active ? "#2563eb" : "rgba(255,255,255,0.2)",
          borderColor: active ? "#93c5fd" : "rgba(255,255,255,0.15)",
          boxShadow: active ? "0 0 0 5px rgba(37,99,235,0.25)" : "none",
        }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          left: "50%",
          [isTop ? "bottom" : "top"]: "-6px",
          transform: "translate(-50%, 0)",
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.15)",
        }}
      />
    </motion.div>
  );
}

/* ─── Main Export ────────────────────────────────────────────────────── */
export default function OptimalRouteSection() {
  const sectionRef = useRef(null);
  const [rawProgress, setRawProgress] = useState(0);

  const springProgress = useSpring(0, { stiffness: 55, damping: 20, restDelta: 0.001 });
  useEffect(() => { springProgress.set(rawProgress); }, [rawProgress, springProgress]);

  const handleScroll = useCallback(() => {
    const s = sectionRef.current;
    if (!s) return;
    const rect = s.getBoundingClientRect();
    const wh = window.innerHeight;
    const start = wh * 0.8;
    const end   = -(rect.height * 0.2);
    setRawProgress(Math.min(1, Math.max(0, (start - rect.top) / (start - end))));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const getStepActive = (i) => rawProgress >= (i / (STEP_COUNT - 1)) - 0.01;

  /* motionValue for track width string */
  const trackWidthMv = useTransform(springProgress, [0, 1], ["3%", "97%"]);
  const planeLeftMv  = useTransform(springProgress, [0, 1], ["3%", "97%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#030712", paddingTop: "88px", paddingBottom: "104px" }}
    >
      {/* ── Block grid background (matches Destinations) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />

      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div style={{ position: "absolute", top: "-80px", left: "20%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "-60px", right: "15%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(29,78,216,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#93c5fd",
            }}
          >
            ✈️ &nbsp;Pathway to Success
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: "#ffffff" }}
          >
            The{" "}
            <span style={{ color: "#3b82f6" }}>
              Optimal Route
            </span>{" "}
            to Your Dream University
          </h2>

          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
            A clear, guided path from profile to pre-departure — expert support at every milestone.
          </p>
        </motion.div>

        {/* ══════════ DESKTOP TRACK ══════════ */}
        <div
          className="hidden md:block relative max-w-6xl mx-auto"
          style={{ height: "290px" }}
        >
          {/* Ghost runway */}
          <div style={{
            position: "absolute", left: 0, right: 0,
            top: "50%", transform: "translateY(-50%)",
            height: "2px", borderRadius: "4px",
            background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 8px, transparent 8px, transparent 18px)",
          }} />

          {/* Animated filled track */}
          <motion.div style={{
            position: "absolute", left: 0,
            top: "50%", transform: "translateY(-50%)",
            height: "3px",
            width: trackWidthMv,
            background: "linear-gradient(90deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)",
            borderRadius: "4px",
            boxShadow: "0 0 12px rgba(59,130,246,0.4)",
          }} />

          {/* ── Airplane ── */}
          <motion.div style={{
            position: "absolute",
            left: planeLeftMv,
            top: "50%", transform: "translate(-50%, -50%)",
            zIndex: 30,
          }}>
            {/* Pulsing halo */}
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", inset: "-12px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            {/* Trail */}
            <div style={{
              position: "absolute",
              right: "calc(100% - 2px)", top: "50%", transform: "translateY(-50%)",
              width: "56px", height: "6px",
              background: "linear-gradient(270deg, rgba(59,130,246,0.7), rgba(29,78,216,0.2), transparent)",
              borderRadius: "4px", filter: "blur(1.5px)",
            }} />
            {/* Plane emoji */}
            <span style={{ fontSize: "30px", lineHeight: 1, display: "block", filter: "drop-shadow(0 0 10px rgba(59,130,246,0.8))" }}>
              ✈️
            </span>
          </motion.div>

          {/* ── Step Cards ── */}
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              active={getStepActive(index)}
            />
          ))}
        </div>

        {/* ── Step number indicators ── */}
        <div className="hidden md:flex justify-between items-center max-w-6xl mx-auto mt-6 px-1">
          {steps.map((step, index) => {
            const active = getStepActive(index);
            return (
              <motion.div
                key={step.id}
                animate={{ opacity: active ? 0.9 : 0.2 }}
                transition={{ duration: 0.35 }}
                style={{ textAlign: "center", fontSize: "9px", fontWeight: 700, color: "#60a5fa", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                {String(step.id).padStart(2, "0")}
              </motion.div>
            );
          })}
        </div>

        {/* ══════════ MOBILE TRACK ══════════ */}
        <div className="md:hidden relative">
          {/* Spine ghost */}
          <div style={{
            position: "absolute", left: "20px", top: 0, bottom: 0, width: "2px",
            borderRadius: "4px",
            background: "repeating-linear-gradient(180deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 6px, transparent 6px, transparent 14px)",
          }} />
          {/* Spine fill */}
          <motion.div style={{
            position: "absolute", left: "20px", top: 0, width: "2px",
            height: useTransform(springProgress, (v) => `${v * 100}%`),
            background: "linear-gradient(180deg, #1d4ed8 0%, #3b82f6 60%, #60a5fa 100%)",
            borderRadius: "4px",
            boxShadow: "0 0 8px rgba(59,130,246,0.4)",
          }} />

          {/* Vertical plane */}
          <motion.div
            style={{
              position: "absolute", left: "7px",
              top: useTransform(springProgress, (v) => `calc(${v * 100}% - 18px)`),
              zIndex: 20,
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.45, 0, 0.45] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ position: "absolute", inset: "-6px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }}
            />
            <span style={{ fontSize: "26px", display: "block", transform: "rotate(90deg)", filter: "drop-shadow(0 0 6px rgba(59,130,246,0.6))" }}>✈️</span>
          </motion.div>

          <div style={{ paddingLeft: "48px", paddingTop: "8px", paddingBottom: "8px" }}>
            {steps.map((step, index) => {
              const active = getStepActive(index);
              return (
                <motion.div
                  key={step.id}
                  className="relative mb-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  {/* Spine dot */}
                  <motion.div
                    animate={{
                      width: active ? "12px" : "8px",
                      height: active ? "12px" : "8px",
                      backgroundColor: active ? "#2563eb" : "rgba(255,255,255,0.15)",
                      borderColor: active ? "#60a5fa" : "rgba(255,255,255,0.1)",
                      boxShadow: active ? "0 0 0 4px rgba(37,99,235,0.25)" : "none",
                    }}
                    transition={{ duration: 0.35 }}
                    style={{
                      position: "absolute", left: "-34px", top: "50%", transform: "translateY(-50%)",
                      borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.1)",
                    }}
                  />

                  {/* Card */}
                  <motion.div
                    animate={{
                      borderColor: active ? "#2563eb" : "rgba(255,255,255,0.08)",
                      backgroundColor: active ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.03)",
                      boxShadow: active ? "0 6px 20px rgba(37,99,235,0.2)" : "none",
                      x: active ? 4 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    style={{
                      padding: "12px 14px", borderRadius: "12px",
                      border: "1.5px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", gap: "12px",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <motion.span
                      animate={{ scale: active ? 1.18 : 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ fontSize: "20px", flexShrink: 0 }}
                    >
                      {step.icon}
                    </motion.span>
                    <div>
                      <div style={{
                        fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase", color: active ? "#60a5fa" : "rgba(255,255,255,0.3)",
                        marginBottom: "2px", transition: "color 0.4s",
                      }}>
                        Step {String(step.id).padStart(2, "0")}
                      </div>
                      <motion.div
                        animate={{ color: active ? "#ffffff" : "rgba(255,255,255,0.45)" }}
                        transition={{ duration: 0.4 }}
                        style={{ fontSize: "13px", fontWeight: active ? 600 : 400, lineHeight: 1.4 }}
                      >
                        {step.label}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
