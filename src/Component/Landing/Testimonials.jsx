import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia Lee',
    role: 'Startup founder',
    feedback:
      'Mindscribe turned dense market research into notes I could actually act on—without losing the original context.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Daniel Johnson',
    role: 'Medical student',
    feedback:
      'Lecture PDFs and notes finally get summarized in a way that matches how I study. Huge time saver.',
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    name: 'Ava Smith',
    role: 'Content creator',
    feedback:
      'Long sources become tight outlines and talking points. Less tab-hopping, more creating.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Product designer',
    feedback:
      'Clean UI, predictable flow. It feels like a tool for focus—not another noisy AI dashboard.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'James Brown',
    role: 'Software developer',
    feedback:
      'The best addition to my workflow this year for reading docs and turning them into decisions.',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Linda Parker',
    role: 'Educator',
    feedback:
      'Summaries and highlights help me prep materials faster while keeping sources easy to verify.',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduceMotion ? { duration: 0 } : { staggerChildren: 0.07, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    show: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]" />
            Social proof
          </motion.div>

          <motion.h2 variants={item} className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            What people say about Mindscribe
          </motion.h2>

          <motion.p variants={item} className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Real workflows, real outcomes—research, study, and content teams using Mindscribe every week.
          </motion.p>
        </div>

        <motion.div variants={item} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.article
              key={`${t.name}-${index}`}
              variants={item}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.25, ease: 'easeOut' }}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white/70 p-6 text-left shadow-sm backdrop-blur transition hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div className="flex items-start justify-between gap-3">
                <Quote className="h-8 w-8 shrink-0 text-indigo-200 transition group-hover:text-indigo-300" aria-hidden />
                <div className="flex gap-0.5" aria-hidden>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400/90 text-amber-400/90" />
                  ))}
                </div>
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                <p>{t.feedback}</p>
              </blockquote>

              <footer className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <img
                  src={t.image}
                  alt=""
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white ring-offset-2 ring-offset-slate-50"
                />
                <div className="min-w-0">
                  <cite className="not-italic">
                    <span className="block font-semibold text-slate-900">{t.name}</span>
                  </cite>
                  <span className="text-sm text-slate-500">{t.role}</span>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
