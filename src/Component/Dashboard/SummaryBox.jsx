import React, { useState } from "react";
import { ChevronDown, ChevronUp, TrendingUp, Clock, CheckCircle2, Layers } from "lucide-react";

const SUMMARIES = {
  short:  "Machine learning pipeline improvements yielded a 37% accuracy gain over Q3 2024 baseline.",
  medium: "The report covers an ML pipeline upgrade delivering 37% better accuracy. Key metrics improved across all dimensions. Stakeholders should review the appendix for technical specs and methodology details.",
  long:   "A comprehensive ML pipeline redesign was implemented, resulting in a 37% accuracy improvement over the Q3 2024 baseline. The initiative spanned data preprocessing, model architecture, and deployment optimizations. Validation procedures were rigorous, using cross-validation and holdout sets across diverse datasets. All KPIs showed sustained improvement. The appendix includes full technical specifications, hyperparameter tunings, and ablation studies.",
};

const INSIGHTS = [
  { icon: TrendingUp, label: "37% accuracy gain", color: "text-[#34d399]",  bg: "bg-[#34d399]/10" },
  { icon: Clock,       label: "Q3 → Q4 timeline",  color: "text-[#fbbf24]", bg: "bg-[#fbbf24]/10" },
  { icon: CheckCircle2,label: "All KPIs met",       color: "text-[#4f8ef7]", bg: "bg-[#4f8ef7]/10" },
  { icon: Layers,      label: "12 pages analyzed",  color: "text-[#7c5cfc]", bg: "bg-[#7c5cfc]/10" },
];

const SummaryBox = () => {
  const [expanded, setExpanded] = useState(true);
  const [length, setLength]     = useState("medium");

  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="font-extrabold text-[22px] tracking-tight text-white mb-1">Summary</h1>
        <p className="text-[13px] text-[#8899b4]">AI-generated summary of your document</p>
      </div>

      <div className="bg-[#131a28] border border-white/[0.06] rounded-2xl p-6">
        {/* Card header */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-[15px] text-white">Document Overview</span>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-[#8899b4] hover:text-white transition-colors"
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {expanded && (
          <>
            {/* Length tabs */}
            <div className="flex gap-1 bg-[#0e1420] border border-white/[0.06] rounded-[10px] p-1 mb-5">
              {["short", "medium", "long"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLength(l)}
                  className={`flex-1 py-1.5 rounded-[7px] text-[12px] font-semibold capitalize transition-all duration-200
                    ${length === l
                      ? "bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] text-white shadow-[0_2px_10px_rgba(79,142,247,0.3)]"
                      : "text-[#5a6680] hover:text-[#8899b4]"
                    }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Summary text */}
            <p className="text-[14px] leading-[1.75] text-[#8899b4]">{SUMMARIES[length]}</p>

            {/* Insight chips */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              {INSIGHTS.map(({ icon: Icon, label, color, bg }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-[#0e1420] border border-white/[0.06] rounded-[12px] px-4 py-3.5"
                >
                  <div className={`w-8 h-8 rounded-[8px] ${bg} flex items-center justify-center`}>
                    <Icon size={15} className={color} />
                  </div>
                  <span className="text-[12px] font-medium text-white">{label}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SummaryBox;