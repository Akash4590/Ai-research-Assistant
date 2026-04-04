import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Mindscribe?',
      answer:
        'Mindscribe is an AI research workspace: upload PDFs or add links, get structured summaries, and ask questions grounded in your sources.',
    },
    {
      question: 'How does Mindscribe work?',
      answer:
        'You bring the material; Mindscribe extracts structure, key claims, and themes so you can summarize, search, and chat without losing context.',
    },
    {
      question: 'What platforms does Mindscribe support?',
      answer:
        'Mindscribe runs in the browser today. Mobile and desktop apps may follow—your account and projects stay aligned with the web experience.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'We use encryption in transit and at rest, and design flows so your documents are handled with privacy in mind. Review our Privacy policy for details.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Create an account, upload a PDF or paste a link, and start with a summary or a question. You can explore core flows before upgrading.',
    },
  ];

  return (
    <section className="faq-section-font relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 antialiased">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 md:px-10 lg:px-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]" />
            FAQ
          </div>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-[2.375rem] md:leading-[1.1]">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600 md:text-[1.0625rem] md:leading-[1.6]">
            Straight answers about how Mindscribe fits into your research workflow.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={buttonId}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur transition hover:border-slate-300"
              >
                <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-[-0.01em] md:text-[1.0625rem]">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAnswer(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-slate-900 transition hover:bg-slate-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/30 md:px-6 md:py-[1.125rem]"
                  >
                    <span className="pr-2">{faq.question}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition ${
                        isOpen ? 'border-indigo-200 bg-indigo-50 text-indigo-700' : ''
                      }`}
                      aria-hidden
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${isOpen ? '-rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen &&
                    (shouldReduceMotion ? (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="border-t border-slate-100"
                      >
                        <p className="px-5 pb-5 pt-1 text-[0.9375rem] font-normal leading-[1.65] text-slate-600 md:px-6 md:pb-6 md:text-base md:leading-[1.7]">
                          {faq.answer}
                        </p>
                      </div>
                    ) : (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-slate-100"
                      >
                        <p className="px-5 pb-5 pt-1 text-[0.9375rem] font-normal leading-[1.65] text-slate-600 md:px-6 md:pb-6 md:text-base md:leading-[1.7]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
