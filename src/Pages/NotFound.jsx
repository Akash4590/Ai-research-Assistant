// src/pages/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#0a0a0f] overflow-hidden font-['Sora',sans-serif] px-6 py-20"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-16 right-20 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
      />

      {/* Logo */}
      <div className="absolute top-8 left-8 z-10 flex items-center gap-2.5">
        <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 18 18" fill="none" className="w-3.5 h-3.5">
            <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white" />
            <rect x="10" y="2" width="6" height="6" rx="1.5" fill="white" opacity="0.5" />
            <rect x="2" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.5" />
            <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.3" />
          </svg>
        </div>
        <span className="text-[14px] font-semibold text-slate-100 tracking-tight">Mindscribe</span>
      </div>

      {/* Big 404 */}
      <p
        className="relative z-10 font-bold leading-none select-none mb-2"
        style={{
          fontSize: "clamp(7rem, 18vw, 11rem)",
          letterSpacing: "-0.06em",
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(99,102,241,0.35)",
        }}
        aria-hidden
      >
        404
      </p>

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3.5 py-1 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-indigo-400">
          Page not found
        </span>
      </div>

      {/* Title */}
      <h1
        className="relative z-10 font-['DM_Serif_Display',serif] italic text-slate-100 text-center leading-snug mb-3"
        style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}
      >
        This page took a wrong turn<br />
        <span className="text-indigo-400">somewhere in the notes.</span>
      </h1>

      {/* Subtext */}
      <p className="relative z-10 text-[13.5px] text-slate-500 text-center leading-relaxed max-w-sm mb-9">
        The URL might be mistyped, the page may have moved, or it simply doesn't exist. Let's get you back on track.
      </p>

      {/* CTA buttons */}
      <div className="relative z-10 flex gap-3 flex-wrap justify-center mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] text-white text-[13.5px] font-semibold rounded-xl transition tracking-tight"
        >
          ← Back to home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border border-[#1e1e30] hover:border-indigo-500 text-slate-400 hover:text-slate-300 text-[13.5px] font-medium rounded-xl transition tracking-tight"
        >
          Contact support
        </Link>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-10 h-px bg-[#1e1e30] mb-5" />

      {/* Quick nav links */}
      <div className="relative z-10 flex gap-5 flex-wrap justify-center">
        {[
          { label: "Dashboard", to: "/dashboard" },
          { label: "Documentation", to: "/docs" },
          { label: "Sign in", to: "/login" },
        ].map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className="text-[12px] text-slate-600 hover:text-indigo-400 transition"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-slate-800 whitespace-nowrap z-10">
        © 2025 Mindscribe
      </p>
    </div>
  );
};

export default NotFound;