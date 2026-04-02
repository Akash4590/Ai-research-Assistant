import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Upload, Brain, Lightbulb } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Add your sources',
    description:
      'Drop PDFs, paste links, or bring in notes. Mindscribe ingests what you’re reading so you can stay in flow.',
    icon: Upload,
  },
  {
    step: '02',
    title: 'Analyze with context',
    description:
      'The system maps structure, key claims, and themes—so answers stay grounded in your material, not generic fluff.',
    icon: Brain,
  },
  {
    step: '03',
    title: 'Act on insights',
    description:
      'Turn output into summaries, Q&A, and highlights you can reuse—ready for writing, studying, or presenting.',
    icon: Lightbulb,
  },
];

const HowItWorks = () => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduceMotion ? { duration: 0 } : { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[360px] w-[360px] rounded-full bg-violet-400/10 blur-3xl" />
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
            How it works
          </motion.div>

          <motion.h2 variants={item} className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            From source to clarity in three steps
          </motion.h2>

          <motion.p variants={item} className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            A simple loop: bring content in, understand it faster, and export what matters—without juggling five tools.
          </motion.p>
        </div>

        <motion.div variants={item} className="relative mt-14">
          <div className="hidden md:block absolute left-0 right-0 top-[52px] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.step}
                  variants={item}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={shouldReduceMotion ? undefined : { duration: 0.25, ease: 'easeOut' }}
                  className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white/70 p-6 text-left shadow-sm backdrop-blur transition hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-bold tabular-nums text-indigo-600">{s.step}</span>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600/10 ring-1 ring-indigo-600/15 transition group-hover:bg-indigo-600/15">
                      <Icon className="h-6 w-6 text-indigo-700" aria-hidden />
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
