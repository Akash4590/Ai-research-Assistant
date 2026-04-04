// src/pages/Auth/Register.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authapi";

const getStrength = (pw) => {
  if (!pw) return { level: 0, label: "Use 6+ characters" };
  if (pw.length < 6) return { level: 1, label: "Too short" };
  if (pw.length < 10 && !/[^a-zA-Z0-9]/.test(pw))
    return { level: 2, label: "Fair — add symbols or numbers" };
  return { level: 3, label: "Strong password" };
};

const barColor = (barIndex, level) => {
  if (barIndex > level) return "bg-gray-100";
  if (level === 1) return "bg-red-400";
  if (level === 2) return "bg-amber-400";
  return "bg-emerald-400";
};

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const strength = getStrength(formData.password);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) return setError("Please enter your full name.");
    if (!formData.email.includes("@")) return setError("Please enter a valid email.");
    if (formData.password.length < 6)
      return setError("Password must be at least 6 characters.");

    setLoading(true);
    try {
      await registerUser(formData);
      setSuccess(true);
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
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

        {/* Tagline + onboarding steps */}
        <div className="relative z-10">
          <p className="font-['DM_Serif_Display',serif] italic text-[1.85rem] text-slate-100 leading-snug mb-6">
            Start for free.<br />
            <span className="text-indigo-400">Think without limits.</span>
          </p>

          <ol className="flex flex-col gap-4">
            {[
              { step: "1", title: "Create your account", sub: "Takes less than 60 seconds" },
              { step: "2", title: "Upload your first document", sub: "PDFs, articles, lecture notes" },
              { step: "3", title: "Get your summary instantly", sub: "No setup, no configuration" },
            ].map(({ step, title, sub }) => (
              <li key={step} className="flex items-start gap-3">
                <span className="w-[22px] h-[22px] rounded-full border border-[#2d2d4a] flex items-center justify-center text-[10px] font-semibold text-indigo-400 flex-shrink-0 mt-0.5">
                  {step}
                </span>
                <div>
                  <p className="text-[12.5px] font-medium text-slate-400 leading-snug">{title}</p>
                  <p className="text-[12px] text-slate-600">{sub}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="relative z-10 text-[11px] text-slate-600">
          © 2025 Mindscribe. All rights reserved.
        </p>
      </div>

      {/* ── Right panel — form ── */}
      <div className="flex flex-col justify-center flex-1 md:w-[52%] bg-white px-10 md:px-16">

        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-indigo-500 mb-2">
          Get started
        </p>
        <h1 className="text-[1.65rem] font-bold text-[#0f0f1a] tracking-tight leading-snug mb-1">
          Create your<br />free account
        </h1>
        <p className="text-[13px] text-slate-400 mb-6">No credit card required.</p>

        {/* Error alert */}
        {error && (
          <div
            role="alert"
            className="flex items-center gap-2 mb-4 px-4 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[12.5px] font-medium"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {error}
          </div>
        )}

        {/* Success alert */}
        {success && (
          <div
            role="status"
            className="flex items-center gap-2 mb-4 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-[12.5px] font-medium"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Registration successful! Redirecting…
          </div>
        )}

        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit} autoComplete="off">

          {/* Full name */}
          <div>
            <label className="block text-[12px] font-medium text-gray-600 mb-1.5 tracking-wide">
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              autoFocus
              className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-xl text-[13.5px] bg-gray-50 text-[#0f0f1a] placeholder-gray-300 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[12px] font-medium text-gray-600 mb-1.5 tracking-wide">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-xl text-[13.5px] bg-gray-50 text-[#0f0f1a] placeholder-gray-300 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[12px] font-medium text-gray-600 mb-1.5 tracking-wide">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Min. 6 characters"
                minLength={6}
                className="w-full px-3.5 py-3 pr-14 border-[1.5px] border-gray-200 rounded-xl text-[13.5px] bg-gray-50 text-[#0f0f1a] placeholder-gray-300 outline-none transition focus:border-indigo-500 focus:bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] font-medium text-slate-400 hover:text-indigo-500 transition"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Strength bars */}
            <div className="flex gap-1 mt-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-[3px] rounded-full transition-all duration-300 ${barColor(i, strength.level)}`}
                />
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">{strength.label}</p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 mt-1 bg-[#0f0f1a] hover:bg-indigo-900 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[14px] font-semibold rounded-xl transition tracking-tight"
          >
            {loading && (
              <svg
                className="animate-spin w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity="0.25" />
                <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </svg>
            )}
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="text-center text-[11px] text-slate-400 mt-3 leading-relaxed">
          By signing up you agree to our{" "}
          <Link to="/terms" className="text-indigo-500 hover:text-indigo-700 transition">Terms</Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-indigo-500 hover:text-indigo-700 transition">Privacy Policy</Link>.
        </p>

        <p className="text-center text-[12.5px] text-slate-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 font-semibold hover:text-indigo-700 transition">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;