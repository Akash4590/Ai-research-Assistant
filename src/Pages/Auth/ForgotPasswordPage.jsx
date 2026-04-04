// src/pages/Auth/ForgotPassword.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(false);

    if (!email || !email.includes("@")) {
      setEmailError(true);
      return;
    }

    setLoading(true);
    try {
      // await sendPasswordReset({ email });  ← wire your API here
      await new Promise((r) => setTimeout(r, 1500)); // remove this stub
      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    setSent(false);
    setEmail("");
    setEmailError(false);
  };

  return (
    <div className="flex h-screen font-['Sora',sans-serif] overflow-hidden">

      {/* ── Left panel ── */}
      <div className="hidden md:flex w-[48%] bg-[#0a0a0f] flex-col justify-between p-10 relative overflow-hidden">

        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2.5">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4">
              <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white" />
              <rect x="10" y="2" width="6" height="6" rx="1.5" fill="white" opacity="0.5" />
              <rect x="2" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.5" />
              <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.3" />
            </svg>
          </div>
          <span className="text-[15px] font-semibold text-slate-100 tracking-tight">
            Mindscribe
          </span>
        </div>

        {/* Tagline + info card */}
        <div className="relative z-10">
          <p className="font-['DM_Serif_Display',serif] italic text-[1.75rem] text-slate-100 leading-snug mb-6">
            Locked out?<br />
            <span className="text-indigo-400">We've got you.</span>
          </p>

          <div className="bg-indigo-500/[0.08] border border-indigo-500/20 rounded-xl p-4 flex flex-col gap-4">
            {[
              {
                label: "Check your inbox",
                sub: "The reset link arrives in under a minute",
                icon: (
                  <path d="M4 8h8M8 4v8" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
                ),
                vb: "0 0 16 16",
              },
              {
                label: "Link expires in 15 minutes",
                sub: "For your account security",
                icon: (
                  <>
                    <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="#818cf8" strokeWidth="1.2" />
                    <path d="M5.5 7V5.5a2.5 2.5 0 0 1 5 0V7" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round" />
                  </>
                ),
                vb: "0 0 16 16",
              },
              {
                label: "Didn't get it?",
                sub: "Check spam or request a new link",
                icon: (
                  <>
                    <circle cx="8" cy="8" r="5.5" stroke="#818cf8" strokeWidth="1.2" />
                    <path d="M8 5.5V8.5l1.5 1.5" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round" />
                  </>
                ),
                vb: "0 0 16 16",
              },
            ].map(({ label, sub, icon, vb }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox={vb} fill="none" className="w-3 h-3">{icon}</svg>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-slate-400">{label}</p>
                  <p className="text-[11px] text-slate-600 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-[11px] text-slate-600">
          © 2025 Mindscribe. All rights reserved.
        </p>
      </div>

      {/* ── Right panel ── */}
      <div className="flex flex-col justify-center flex-1 md:w-[52%] bg-white px-10 md:px-16">

        <Link
          to="/login"
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-400 hover:text-indigo-500 transition mb-8 w-fit"
        >
          <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
            <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to sign in
        </Link>

        {!sent ? (
          <>
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-indigo-500 mb-2">
              Account recovery
            </p>
            <h1 className="text-[1.65rem] font-bold text-[#0f0f1a] tracking-tight leading-snug mb-1">
              Reset your<br />password
            </h1>
            <p className="text-[13px] text-slate-400 mb-7 leading-relaxed">
              Enter your email and we'll send you a secure link<br />to create a new password.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <label className="block text-[12px] font-medium text-gray-600 mb-1.5 tracking-wide">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                placeholder="you@example.com"
                autoFocus
                className={`w-full px-3.5 py-3 border-[1.5px] rounded-xl text-[13.5px] bg-gray-50 text-[#0f0f1a] placeholder-gray-300 outline-none transition focus:bg-white ${
                  emailError
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-indigo-500"
                }`}
              />
              {emailError && (
                <p className="text-[11.5px] text-red-500 mt-1.5">
                  Please enter a valid email address.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 mt-5 py-3 bg-[#0f0f1a] hover:bg-indigo-900 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[14px] font-semibold rounded-xl transition tracking-tight"
              >
                {loading && (
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity="0.25" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                )}
                {loading ? "Sending…" : "Send reset link"}
              </button>
            </form>

            <p className="text-center text-[12.5px] text-slate-400 mt-6">
              Remember your password?{" "}
              <Link to="/login" className="text-indigo-500 font-semibold hover:text-indigo-700 transition">
                Sign in
              </Link>
            </p>
          </>
        ) : (
          /* ── Success state ── */
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M20 7L9 18l-5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h2 className="text-[1.2rem] font-bold text-[#0f0f1a] tracking-tight mb-2">
              Check your email
            </h2>

            <p className="text-[13px] text-slate-400 leading-relaxed max-w-[280px]">
              We sent a reset link to{" "}
              <span className="font-semibold text-slate-700">{email}</span>.
              The link expires in 15 minutes.
            </p>

            <p className="text-[12px] text-slate-400 mt-1.5 max-w-[260px]">
              Don't forget to check your spam folder if you don't see it.
            </p>

            <p className="text-[12.5px] text-slate-400 mt-6">
              Didn't receive it?{" "}
              <button
                onClick={handleResend}
                className="text-indigo-500 font-semibold hover:text-indigo-700 transition bg-transparent border-none cursor-pointer p-0 font-['Sora',sans-serif] text-[12.5px]"
              >
                Resend email
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;