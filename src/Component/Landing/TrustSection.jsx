import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CountUp from 'react-countup';
import { ShieldCheck, Star, Users, Server } from 'lucide-react';

const trustPoints = [
  {
    icon: Users,
    title: 'Researchers supported',
    count: 10000,
    suffix: '+',
    description: 'From students to teams—Mindscribe helps turn sources into clear, usable notes.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    description: 'Encryption in transit and at rest, with privacy-first handling of your documents.',
  },
  {
    icon: Server,
    title: 'Uptime target',
    count: 99.9,
    suffix: '%',
    decimals: 1,
    description: 'A reliable experience designed for daily work—fast, stable, and predictable.',
  },
  {
    icon: Star,
    title: 'Loved for clarity',
    description: 'Users consistently choose Mindscribe for a calm UI and outputs that stay easy to trust.',
  },
];

const TrustSection = () => {
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

  return (
    <section id="trust" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-28 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />
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
            Trust & reliability
          </motion.div>

          <motion.h2 variants={item} className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Why teams trust Mindscribe
          </motion.h2>

          <motion.p variants={item} className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Calm UX, predictable output, and security-conscious design—so your research workflow stays fast and reliable.
          </motion.p>
        </div>

        <motion.div variants={item} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.25, ease: 'easeOut' }}
                className="group h-full rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-lg hover:shadow-slate-900/5"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 ring-1 ring-indigo-600/15 transition group-hover:bg-indigo-600/15">
                    <Icon className="h-6 w-6 text-indigo-700" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      {point.count !== undefined && (
                        <div className="text-2xl font-semibold tracking-tight text-slate-900">
                          <CountUp
                            end={point.count}
                            duration={shouldReduceMotion ? 0 : 1.6}
                            separator=","
                            decimals={point.decimals || 0}
                            suffix={point.suffix || ''}
                            enableScrollSpy
                            scrollSpyDelay={200}
                          />
                        </div>
                      )}
                      <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
          <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Encryption in transit & at rest
          </span>
          <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Reliable sessions & autosave
          </span>
          <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Designed for deep work
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TrustSection;
