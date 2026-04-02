import React from 'react';
import {
  HiLightBulb,
  HiShieldCheck,
  HiCode,
  HiDeviceMobile,
  HiCloudDownload,
  HiSupport
} from 'react-icons/hi';

const features = [
  {
    icon: HiLightBulb,
    title: "AI-Powered Insights",
    description: "Summaries, key points, and structured takeaways—optimized for speed without losing context.",
  },
  {
    icon: HiShieldCheck,
    title: "Data Security",
    description: "Privacy-first handling with secure workflows designed for sensitive research and documents.",
  },
  {
    icon: HiCode,
    title: "Easy Integration",
    description: "Fits your workflow: upload PDFs, paste links, and move from reading → writing without friction.",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile Ready",
    description: "A responsive experience that stays readable, fast, and consistent across screen sizes.",
  },
  {
    icon: HiCloudDownload,
    title: "Cloud Access",
    description: "Pick up where you left off with reliable syncing and quick access across devices.",
  },
  {
    icon: HiSupport,
    title: "24/7 Support",
    description: "Get help when you need it, with priority paths for Pro and Teams users.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-28 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]" />
            Key features
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Designed for clarity and speed
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Everything is built to reduce cognitive load: a clean workspace, predictable actions, and outputs you can trust.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group h-full rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 ring-1 ring-indigo-600/15 transition group-hover:bg-indigo-600/15">
                <feature.icon className="h-6 w-6 text-indigo-700" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
