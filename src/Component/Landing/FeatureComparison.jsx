import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const data = [
  { feature: 'Upload PDFs, Videos, Notes', mindscribe: true, chatgpt: false, notion: true },
  { feature: 'Auto Summarization', mindscribe: true, chatgpt: true, notion: true },
  { feature: 'Personalized Q&A from Documents', mindscribe: true, chatgpt: false, notion: false },
  { feature: 'AI Chat with References', mindscribe: true, chatgpt: false, notion: false },
  { feature: 'Real-Time Voice Interaction', mindscribe: true, chatgpt: false, notion: false },
  { feature: 'Affordable Pricing', mindscribe: true, chatgpt: false, notion: false },
];

const FeatureComparison = () => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduceMotion ? { duration: 0 } : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16, filter: 'blur(6px)' },
    show: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const mark = (value) =>
    value ? (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-600/15">
        <Check className="h-4 w-4 text-emerald-700" />
      </span>
    ) : (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-500/10 ring-1 ring-slate-600/10">
        <X className="h-4 w-4 text-slate-600" />
      </span>
    );

  return (
    <section id="feature-comparison" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-28 h-[520px] w-[520px] rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]" />
            Comparison
          </motion.div>
          <motion.h2 variants={item} className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Feature comparison
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Mindscribe is built for research workflows: sources in, clarity out—with structure and context kept intact.
          </motion.p>
        </div>

        <motion.div variants={item} className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur">
          <div className="overflow-x-auto">
            <table className="min-w-[780px] w-full table-fixed text-left">
              <caption className="sr-only">Feature comparison across Mindscribe, ChatGPT, and Notion AI</caption>
              <thead className="bg-slate-50/80 text-slate-700">
                <tr className="border-b border-slate-200">
                  <th scope="col" className="w-[46%] px-6 py-4 text-xs font-semibold uppercase tracking-wide">
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="w-[18%] px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-900"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-600" />
                      Mindscribe
                    </span>
                  </th>
                  <th scope="col" className="w-[18%] px-6 py-4 text-xs font-semibold uppercase tracking-wide">
                    ChatGPT
                  </th>
                  <th scope="col" className="w-[18%] px-6 py-4 text-xs font-semibold uppercase tracking-wide">
                    Notion AI
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {data.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={[
                      'border-b border-slate-200/70',
                      index % 2 === 0 ? 'bg-white/40' : 'bg-transparent',
                      'hover:bg-indigo-50/30 transition-colors',
                    ].join(' ')}
                  >
                    <th scope="row" className="px-6 py-4 font-semibold text-slate-900">
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300" />
                        <span className="leading-relaxed">{row.feature}</span>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-center bg-indigo-50/35">
                      <span className="inline-flex items-center justify-center">{mark(row.mindscribe)}</span>
                    </td>
                    <td className="px-6 py-4 text-center">{mark(row.chatgpt)}</td>
                    <td className="px-6 py-4 text-center">{mark(row.notion)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-white/50 px-6 py-4 text-sm text-slate-600">
            <span>
              Tip: On mobile, swipe horizontally to view all columns.
            </span>
            <span className="text-xs text-slate-500">Comparison is illustrative and may vary by plan/version.</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureComparison;
