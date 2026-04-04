// src/pages/Auth/Login.jsx
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen font-['Sora',sans-serif] overflow-hidden">

      {/* ── Left panel — brand / feature strip ── */}
      <div className="hidden md:flex w-[48%] bg-[#0a0a0f] flex-col justify-between p-10 relative overflow-hidden">

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
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

        {/* Tagline + features */}
        <div className="relative z-10">
          <p className="font-['DM_Serif_Display',serif] italic text-[2rem] text-slate-100 leading-snug mb-5">
            Think less,<br />
            <span className="text-indigo-400">understand more.</span>
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "AI-powered document summarization",
              "Context-aware note extraction",
              "Works with PDFs, articles & more",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-[12.5px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-[11px] text-slate-600">
          © 2025 Mindscribe. All rights reserved.
        </p>
      </div>

      {/* ── Right panel — form ── */}
      <div className="flex flex-col justify-center flex-1 md:w-[52%] bg-white px-10 md:px-16">
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-indigo-500 mb-2">
          Welcome back
        </p>

        <h1 className="text-[1.75rem] font-bold text-[#0f0f1a] tracking-tight leading-snug mb-1">
          Sign in to your<br />workspace
        </h1>

        <p className="text-[13px] text-slate-400 mb-8">Pick up right where you left off.</p>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

          <div>
            <label className="block text-[12px] font-medium text-gray-600 mb-1.5 tracking-wide">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-xl text-[13.5px] bg-gray-50 text-[#0f0f1a] placeholder-gray-300 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[12px] font-medium text-gray-600 mb-1.5 tracking-wide">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3.5 py-3 border-[1.5px] border-gray-200 rounded-xl text-[13.5px] bg-gray-50 text-[#0f0f1a] placeholder-gray-300 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          <div className="flex justify-end -mt-1">
            <Link
              to="/ForgotPasswordPage"
              className="text-[12px] font-medium text-indigo-500 hover:text-indigo-700 transition"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0f0f1a] hover:bg-indigo-900 active:scale-[0.99] text-white text-[14px] font-semibold rounded-xl transition tracking-tight"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-[11px] text-gray-300 font-medium">or continue with</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Google SSO */}
        <button className="w-full flex items-center justify-center gap-2 py-3 border-[1.5px] border-gray-200 rounded-xl text-[13px] font-medium text-gray-600 hover:border-indigo-400 hover:bg-gray-50 transition">
          <svg viewBox="0 0 18 18" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853" />
            <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9.009 9.009 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-[12.5px] text-slate-400 mt-6">
          No account yet?{" "}
          <Link to="/register" className="text-indigo-500 font-semibold hover:text-indigo-700 transition">
            Create one free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;