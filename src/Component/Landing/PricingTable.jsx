import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const PricingTable = () => {
  const plans = [
    {
      name: 'Starter',
      price: 19,
      tagline: 'For focused personal research.',
      cta: 'Start Starter',
      highlight: false,
      features: ['PDF + URL summaries', 'Chat with notes', 'Export highlights', 'Email support'],
    },
    {
      name: 'Pro',
      price: 49,
      tagline: 'For daily deep work and speed.',
      cta: 'Go Pro',
      highlight: true,
      features: ['Everything in Starter', 'Faster processing', 'Priority support', 'Advanced organization'],
    },
    {
      name: 'Teams',
      price: 99,
      tagline: 'For shared knowledge and review.',
      cta: 'Start Teams',
      highlight: false,
      features: ['Everything in Pro', 'Shared workspaces', 'Team roles', 'Dedicated onboarding'],
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-28 h-[520px] w-[520px] rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            Simple pricing, serious output
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Choose your plan</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Start small, upgrade when your workflow grows. Every plan is designed for clarity, speed, and focus.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                'relative h-full rounded-3xl border bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-lg hover:shadow-slate-900/5',
                p.highlight ? 'border-indigo-300/70 ring-1 ring-indigo-400/30' : 'border-slate-200',
              ].join(' ')}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    Most popular
                  </div>
                </div>
              )}

              <div className="flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <div className="text-4xl font-semibold tracking-tight text-slate-900">${p.price}</div>
                  <div className="pb-1 text-sm font-semibold text-slate-500">/month</div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600/10 ring-1 ring-indigo-600/15">
                        <Check className="h-3.5 w-3.5 text-indigo-700" />
                      </span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <button
                    className={[
                      'w-full rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2',
                      p.highlight
                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:ring-slate-900/30'
                        : 'border border-slate-200 bg-white text-slate-900 shadow-sm hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:ring-indigo-500/25',
                    ].join(' ')}
                    type="button"
                  >
                    {p.cta}
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-500">Cancel anytime. Upgrade in seconds.</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
          <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            No hidden fees
          </span>
          <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Built for deep work
          </span>
          <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Works with PDFs & links
          </span>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
