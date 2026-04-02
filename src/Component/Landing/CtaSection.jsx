import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-indigo-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-8 py-14 text-center shadow-2xl shadow-slate-900/20 md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.35), transparent 45%), radial-gradient(circle at 80% 60%, rgba(139,92,246,0.25), transparent 40%)',
            }}
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-100 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-indigo-300" aria-hidden />
              Start in minutes
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl md:leading-tight">
              Ready to research with less noise?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-indigo-100/90 md:text-lg">
              Join Mindscribe and turn PDFs and links into summaries, answers, and notes you can trust—without switching tools all day.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                to="/auth/register"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Get started free
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                See pricing
              </a>
            </div>

            <p className="mt-6 text-xs text-indigo-200/80">
              No credit card required to explore · Cancel anytime on paid plans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
