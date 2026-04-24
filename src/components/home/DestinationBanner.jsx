import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Destination data ──────────────────────────────────────────────── */
const destinations = [
  {
    slug: "uk",
    country: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    image: "/countries/UK.webp",
    headline: "Study in the UK",
    subline: "World-class degrees in as little as 3 years!",
    stats: [
      { v: "160+", l: "Universities" },
      { v: "Top 4", l: "Global Hub" },
      { v: "£12k+", l: "Avg Scholarship" },
      { v: "2yr PSW", l: "Work Rights" },
    ],
    universities: [
      "University of East London", "Teesside University", "Coventry University",
      "BPP University", "Northumbria University", "Swansea University",
      "Middlesex University", "University of Portsmouth", "University of Leicester",
      "Hertfordshire UH", "De Montfort University", "Edinburgh University",
    ],
  },
  {
    slug: "usa",
    country: "United States",
    code: "USA",
    flag: "🇺🇸",
    image: "/countries/USA.webp",
    headline: "Study in the USA",
    subline: "The world's most prestigious destination!",
    stats: [
      { v: "4000+", l: "Universities" },
      { v: "#1", l: "Global Ranking" },
      { v: "OPT 3yr", l: "Work Permit" },
      { v: "$20B+", l: "Scholarships" },
    ],
    universities: [
      "Harvard University", "MIT", "Stanford University", "Columbia University",
      "NYU", "UC Berkeley", "University of Michigan", "Arizona State Univ.",
      "Purdue University", "Northeastern Univ.", "Boston University", "Indiana University",
    ],
  },
  {
    slug: "canada",
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    image: "/countries/CANADA.webp",
    headline: "Study in Canada",
    subline: "Your path to PR starts here!",
    stats: [
      { v: "96%", l: "Visa Success" },
      { v: "3yr PGWP", l: "Work Permit" },
      { v: "PR Path", l: "After Study" },
      { v: "CAD 10k", l: "Avg Scholarship" },
    ],
    universities: [
      "University of Toronto", "UBC Vancouver", "McGill University",
      "University of Waterloo", "McMaster University", "University of Alberta",
      "Concordia University", "Seneca College", "Humber College",
      "George Brown College", "Carleton University", "Dalhousie University",
    ],
  },
  {
    slug: "australia",
    country: "Australia",
    code: "AU",
    flag: "🇦🇺",
    image: "/countries/AUSTRALIA.webp",
    headline: "Study in Australia",
    subline: "Sun, study & opportunity awaits!",
    stats: [
      { v: "Top 8", l: "Group of Eight" },
      { v: "2–4yr PSW", l: "Work Visa" },
      { v: "AUD 8k+", l: "Scholarships" },
      { v: "#3", l: "Study Dest." },
    ],
    universities: [
      "University of Sydney", "Melbourne University", "ANU Canberra",
      "Monash University", "University of QLD", "UNSW Sydney",
      "Deakin University", "RMIT University", "Griffith University",
      "La Trobe University", "Curtin University", "Bond University",
    ],
  },
  {
    slug: "europe",
    country: "Europe",
    code: "EU",
    flag: "🇪🇺",
    image: "/countries/EUROPE.webp",
    headline: "Study in Europe",
    subline: "Free tuition. World-class education!",
    stats: [
      { v: "Free", l: "Tuition (Many)" },
      { v: "18mo", l: "Job-seeker Visa" },
      { v: "400+", l: "English Programs" },
      { v: "#4", l: "Innovation Hub" },
    ],
    universities: [
      "TU Munich", "LMU Munich", "Heidelberg University",
      "Humboldt University", "RWTH Aachen", "KIT Karlsruhe",
      "ETH Zurich", "Sorbonne University", "TU Berlin",
      "Mannheim University", "Hamburg University", "Stuttgart University",
    ],
  },
];

/* ─── Framer variants ───────────────────────────────────────────────── */
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut", staggerChildren: 0.07 } },
  exit:   { opacity: 0, y: -16, transition: { duration: 0.22, ease: "easeIn" } },
};
const childVar = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

/* ─── University card initials ──────────────────────────────────────── */
function initials(name) {
  return name.split(" ").filter(w => w.length > 2).map(w => w[0]).slice(0, 2).join("");
}

export default function DestinationBanner() {
  const [active, setActive] = useState(0);
  const dest = destinations[active];

  const switchTo = (i) => { if (i !== active) setActive(i); };
  const prev = () => switchTo((active - 1 + destinations.length) % destinations.length);
  const next = () => switchTo((active + 1) % destinations.length);

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden" style={{ background: "#030712" }}>

      {/* ── Background block grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      />

      <div className="container-custom relative z-10">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#93c5fd" }}
          >
            Study Destinations
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
            style={{ color: "#ffffff" }}
          >
            Your Destination is{" "}
            <span style={{ color: "#3b82f6" }}>Just a Click Away</span>
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", maxWidth: "480px", margin: "0 auto" }}>
            Explore study opportunities across the globe — universities, scholarships &amp; visa guidance.
          </p>
        </motion.div>

        {/* ── Country Tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {destinations.map((d, i) => (
            <button
              key={d.code}
              onClick={() => switchTo(i)}
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                padding: "7px 18px", borderRadius: "30px",
                border: i === active ? "1.5px solid #3b82f6" : "1.5px solid rgba(255,255,255,0.1)",
                background: i === active ? "rgba(37,99,235,0.25)" : "rgba(255,255,255,0.04)",
                color: i === active ? "#fff" : "rgba(255,255,255,0.5)",
                fontSize: "13px", fontWeight: 700, cursor: "pointer",
                transition: "all 0.25s",
                backdropFilter: "blur(4px)",
              }}
            >
              <span style={{ fontSize: "16px" }}>{d.flag}</span>
              {d.code}
            </button>
          ))}
        </div>

        {/* ── Main Banner Card ── */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
            minHeight: "460px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* ── Country image background ── */}
          <AnimatePresence mode="sync">
            <motion.div
              key={dest.slug + "-bg"}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              style={{ position: "absolute", inset: 0 }}
            >
              <img
                src={dest.image}
                alt={dest.country}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Multi-layer dark overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(3,7,18,0.97) 0%, rgba(3,7,18,0.88) 35%, rgba(3,7,18,0.72) 55%, rgba(3,7,18,0.55) 100%)", }} />
          {/* Block grid on top of image */}
          <div
            style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Ambient glow matching active dest */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)" }} />

          {/* Nav arrows */}
          {[{ dir: "prev", side: "left" }, { dir: "next", side: "right" }].map(({ dir, side }) => (
            <button
              key={dir}
              onClick={dir === "prev" ? prev : next}
              style={{
                position: "absolute", top: "50%", [side]: "14px",
                transform: "translateY(-50%)",
                width: "38px", height: "38px", borderRadius: "50%",
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff", fontSize: "15px", cursor: "pointer", zIndex: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.25)"; e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
            >
              {dir === "prev" ? "◀" : "▶"}
            </button>
          ))}

          {/* ── Banner Content ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={dest.slug}
              variants={contentVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{
                position: "relative", zIndex: 10,
                display: "grid",
                gridTemplateColumns: "1fr 1.55fr",
                gap: "0",
                padding: "clamp(24px, 4vw, 48px) clamp(32px, 5vw, 64px) 0",
              }}
              className="max-md:!grid-cols-1"
            >
              {/* LEFT ─ text + CTA */}
              <motion.div
                variants={childVar}
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "clamp(16px, 3vw, 36px)", paddingBottom: "40px" }}
              >
                {/* Country pill */}
                <motion.div variants={childVar} style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(59,130,246,0.3)",
                  borderRadius: "30px", padding: "5px 14px 5px 8px",
                  marginBottom: "16px", width: "fit-content",
                  backdropFilter: "blur(6px)",
                }}>
                  <span style={{ fontSize: "22px" }}>{dest.flag}</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {dest.country}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2 variants={childVar} style={{
                  fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 900, lineHeight: 1.1,
                  margin: "0 0 6px", color: "#fff", letterSpacing: "-0.02em",
                  fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif",
                }}>
                  {dest.headline}
                </motion.h2>

                <motion.p variants={childVar} style={{
                  fontSize: "14px", fontWeight: 700, color: "#60a5fa",
                  margin: "0 0 22px", letterSpacing: "0.04em", textTransform: "uppercase",
                }}>
                  {dest.subline}
                </motion.p>

                {/* Stats */}
                <motion.div variants={childVar} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
                  {dest.stats.map(s => (
                    <div key={s.l} style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px", padding: "12px 14px",
                      backdropFilter: "blur(4px)",
                    }}>
                      <div style={{ fontSize: "19px", fontWeight: 800, color: "#3b82f6", lineHeight: 1 }}>{s.v}</div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "3px" }}>{s.l}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div variants={childVar}>
                  <Link
                    to={`/countries/${dest.slug}`}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      padding: "13px 22px",
                      background: "#2563eb", color: "#fff",
                      borderRadius: "12px",
                      fontSize: "13.5px", fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 4px 20px rgba(37,99,235,0.45)",
                      transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(37,99,235,0.6)"; e.currentTarget.style.background = "#1d4ed8"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.45)"; e.currentTarget.style.background = "#2563eb"; }}
                  >
                    Explore {dest.country}
                    <ArrowRight size={15} style={{ flexShrink: 0 }} />
                  </Link>
                </motion.div>
              </motion.div>

              {/* RIGHT ─ University grid */}
              <motion.div variants={childVar} className="max-md:hidden" style={{ paddingBottom: "40px" }}>
                <p style={{
                  fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 12px",
                }}>
                  Partner Universities
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                  {dest.universities.map(uni => (
                    <div
                      key={uni}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "10px", padding: "10px 10px",
                        display: "flex", flexDirection: "column",
                        gap: "6px", cursor: "pointer",
                        transition: "all 0.2s", backdropFilter: "blur(4px)",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "rgba(37,99,235,0.15)";
                        e.currentTarget.style.borderColor = "rgba(37,99,235,0.35)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "7px",
                        background: "rgba(37,99,235,0.25)", border: "1px solid rgba(59,130,246,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "10px", fontWeight: 800, color: "#60a5fa", flexShrink: 0,
                      }}>
                        {initials(uni)}
                      </div>
                      <span style={{ fontSize: "10.5px", fontWeight: 500, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                        {uni}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* ── Bottom bar ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={dest.slug + "-bar"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative", zIndex: 10,
                background: "rgba(0,0,0,0.4)",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                padding: "12px clamp(24px, 5vw, 64px)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: "12px",
                backdropFilter: "blur(6px)",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {["Free Counselling", "Visa Guidance", "SOP Assistance", "Scholarship Help"].map(item => (
                  <span key={item} style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />
                    {item}
                  </span>
                ))}
              </div>
              {/* Dot indicators */}
              <div style={{ display: "flex", gap: "6px" }}>
                {destinations.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => switchTo(i)}
                    style={{
                      width: i === active ? "22px" : "6px",
                      height: "6px", borderRadius: "3px",
                      background: i === active ? "#2563eb" : "rgba(255,255,255,0.2)",
                      cursor: "pointer", transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
