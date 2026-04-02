import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, FileCheck, FileText, Lock, MessageSquareText, Sparkles, Zap } from 'lucide-react';
import hero3d from '../../assets/hero3d.jpg';

const headlineWords = ['Research', 'smarter,', 'write', 'faster,', 'and', 'retain', 'more—'];

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduceMotion ? { duration: 0 } : { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14, filter: 'blur(6px)' },
    show: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[520px] w-[520px] rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl grid-cols-1 items-stretch gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12">
        {/* Left */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex h-full max-w-xl flex-col justify-center"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            AI-powered research workspace
          </motion.div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
            <span className="block">
              {headlineWords.map((w, idx) => (
                <motion.span key={`${w}-${idx}`} variants={item} className="mr-2 inline-block">
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span variants={item} className="mt-2 block">
              with{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Mindscribe
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[10px] -skew-x-6 rounded-full bg-indigo-200/70 blur-[1px]" />
              </span>
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            Upload PDFs, get clean summaries, and chat with your notes to extract key arguments, citations, and actionable
            insights—without losing context.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30">
              Get started
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/25">
              Explore features
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <Lock className="h-4 w-4 text-slate-500" />
              Private by design
            </span>
            <span className="inline-flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-slate-500" />
              Citation-friendly
            </span>
            <span className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-slate-500" />
              Fast summaries
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur">
              <FileText className="mt-0.5 h-5 w-5 text-indigo-600" />
              <div className="text-sm">
                <div className="font-semibold text-slate-900">PDF to outline</div>
                <div className="text-slate-600">Structured summaries in seconds.</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur">
              <MessageSquareText className="mt-0.5 h-5 w-5 text-indigo-600" />
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Ask your notes</div>
                <div className="text-slate-600">Clarify claims with context.</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur">
              <Sparkles className="mt-0.5 h-5 w-5 text-indigo-600" />
              <div className="text-sm">
                <div className="font-semibold text-slate-900">Insight highlights</div>
                <div className="text-slate-600">Key takeaways surfaced fast.</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 24 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto flex h-full w-full max-w-xl items-center"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-fuchsia-500/15 blur-2xl" />

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -10, 0],
                  }
            }
            transition={shouldReduceMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.12),transparent_50%)]" />
            <div className="relative flex-1">
              <img
                src={hero3d}
                alt="Mindscribe preview"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
            </div>
            <div className="relative border-t border-slate-200 bg-white/70 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-900">From PDF → answers</div>
                  <div className="text-xs text-slate-600">Search, summarize, and cite in one flow.</div>
                </div>
                <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Live</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


