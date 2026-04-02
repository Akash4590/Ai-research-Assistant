import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const productLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Key features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const resourceLinks = [
    { label: 'Use cases', href: '#use-cases' },
    { label: 'Comparison', href: '#feature-comparison' },
    { label: 'Trust', href: '#trustSection' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-14 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Value */}
          <div className="lg:pr-6">
            <h4 className="text-2xl font-semibold tracking-tight text-white">Mindscribe</h4>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Built for people who read to think. Summarize sources, ask smarter questions, and turn research into clear output.
            </p>
            <p className="mt-4 text-xs text-slate-400">
              Made for students, founders, creators, and research teams.
            </p>
          </div>

          {/* Product */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Product</h5>
            <ul className="mt-4 space-y-2.5 text-sm">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-300 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Resources</h5>
            <ul className="mt-4 space-y-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-300 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Stay in the loop</h5>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Monthly product updates, practical research tips, and launch news.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="name@company.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Mindscribe. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" aria-label="Facebook" className="transition hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="transition hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition hover:text-white">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram" className="transition hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
            <a href="#" className="transition hover:text-slate-300">Privacy</a>
            <a href="#" className="transition hover:text-slate-300">Terms</a>
            <a href="#" className="transition hover:text-slate-300">Cookies</a>
            <a href="#cta" className="transition hover:text-slate-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
