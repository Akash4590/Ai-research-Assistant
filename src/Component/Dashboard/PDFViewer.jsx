import React from "react";

const TOOLS = ["Summarize", "Ask AI", "Annotate", "Highlight"];

const PDFViewer = () => {
  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="font-extrabold text-[22px] tracking-tight text-white mb-1">PDF Review</h1>
        <p className="text-[13px] text-[#8899b4]">Select text to trigger AI actions</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        {TOOLS.map((label, i) => (
          <button
            key={label}
            className={`px-4 py-2 rounded-[10px] text-[13px] font-medium border transition-all duration-200
              ${i === 0
                ? "bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] text-white border-transparent shadow-[0_4px_16px_rgba(79,142,247,0.3)] hover:opacity-90"
                : "bg-[#131a28] text-[#8899b4] border-white/10 hover:bg-[#4f8ef7]/10 hover:text-[#4f8ef7] hover:border-[#4f8ef7]/30"
              }`}
          >
            {label}
          </button>
        ))}

        {/* Pagination */}
        <div className="ml-auto flex items-center gap-1">
          {["←", "Page 1 of 12", "→"].map((item, i) => (
            <button
              key={i}
              className="px-3 py-2 rounded-[10px] text-[13px] font-medium bg-[#131a28] text-[#8899b4] border border-white/10 hover:text-white hover:bg-[#0e1420] transition-all"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* PDF page */}
      <div className="max-w-2xl bg-[#131a28] border border-white/[0.06] rounded-2xl px-12 py-10">
        <p className="font-bold text-base text-white mb-4">Executive Summary</p>

        <p className="text-[14px] leading-[1.8] text-[#8899b4] mb-4">
          This document provides a comprehensive overview of the{" "}
          <mark className="bg-[#fbbf24]/20 text-[#fbbf24] px-0.5 rounded not-italic">
            machine learning pipeline
          </mark>{" "}
          implemented across the organization's data infrastructure.
        </p>

        <p className="text-[14px] leading-[1.8] text-[#8899b4] mb-4">
          The results demonstrate a{" "}
          <mark className="bg-[#fbbf24]/20 text-[#fbbf24] px-0.5 rounded not-italic">
            37% improvement
          </mark>{" "}
          in prediction accuracy compared to the baseline model established in Q3 2024. Key
          performance indicators show sustained growth across all measured dimensions.
        </p>

        <p className="text-[14px] leading-[1.8] text-[#8899b4]">
          Stakeholders are encouraged to review the appendix for detailed technical specifications.
          The{" "}
          <mark className="bg-[#fbbf24]/20 text-[#fbbf24] px-0.5 rounded not-italic">
            methodology section
          </mark>{" "}
          provides context for the experimental design and validation procedures used throughout the
          study.
        </p>
      </div>
    </div>
  );
};

export default PDFViewer;