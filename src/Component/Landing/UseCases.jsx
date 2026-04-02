import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Briefcase, Film, Bot, ArrowRight } from 'lucide-react';

const useCases = [
  {
    icon: BookOpen,
    title: "Students",
    desc: "Turn lectures and papers into study-ready summaries, flash points, and revision notes.",
    tags: ['Summaries', 'Key points', 'Study flow'],
  },
  {
    icon: Briefcase,
    title: "Founders",
    desc: "Extract market signals from reports and docs—then turn them into decisions and next steps.",
    tags: ['Research', 'Decision notes', 'Speed'],
  },
  {
    icon: Film,
    title: "Creators",
    desc: "Move from sources to scripts, outlines, and posts—without losing the original context.",
    tags: ['Outlines', 'Scripts', 'Ideas'],
  },
  {
    icon: Bot,
    title: "AI Builders",
    desc: "Prototype faster: summarize docs, ask questions, and keep a clean trail of what matters.",
    tags: ['Prototyping', 'Docs', 'Iteration'],
  },
];

const UseCases = () => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduceMotion ? { duration: 0 } : { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18, filter: 'blur(6px)' },
    show: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="use-cases"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-28 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]" />
            Built for real workflows
          </motion.div>

          <motion.h2 variants={item} className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Who is Mindscribe for?
          </motion.h2>

          <motion.p variants={item} className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            If your work starts with reading, your advantage is speed with understanding. Mindscribe helps you extract the
            signal and keep the context.
          </motion.p>
        </div>

        <motion.div variants={item} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((c, index) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.25, ease: 'easeOut' }}
                className="group relative h-full rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-lg hover:shadow-slate-900/5"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/0 via-indigo-500/0 to-fuchsia-500/0 opacity-0 transition group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 ring-1 ring-indigo-600/15">
                      <Icon className="h-6 w-6 text-indigo-700" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 text-xs font-semibold text-slate-500">
                    Typical outcome: <span className="text-slate-700">faster understanding</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
          <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Works with PDFs & web sources
          </span>
          <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Summaries + chat in one place
          </span>
          <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Designed for deep work
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UseCases;
