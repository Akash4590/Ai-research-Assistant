import React, { useState } from "react";

const NoteSaver = () => {
  const [note, setNote]       = useState("");
  const [preview, setPreview] = useState(false);

  const wordCount = note.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="font-extrabold text-[22px] tracking-tight text-white mb-1">Notes</h1>
        <p className="text-[13px] text-[#8899b4]">Write in Markdown. Toggle preview anytime.</p>
      </div>

      <div className="bg-[#131a28] border border-white/[0.06] rounded-2xl p-6">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setPreview(false)}
              className={`px-3.5 py-1.5 rounded-[10px] text-[12px] font-semibold border transition-all duration-200
                ${!preview
                  ? "bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] text-white border-transparent shadow-[0_4px_16px_rgba(79,142,247,0.3)]"
                  : "bg-[#0e1420] text-[#8899b4] border-white/10 hover:text-white"
                }`}
            >
              Edit
            </button>
            <button
              onClick={() => setPreview(true)}
              className={`px-3.5 py-1.5 rounded-[10px] text-[12px] font-semibold border transition-all duration-200
                ${preview
                  ? "bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] text-white border-transparent shadow-[0_4px_16px_rgba(79,142,247,0.3)]"
                  : "bg-[#0e1420] text-[#8899b4] border-white/10 hover:text-white"
                }`}
            >
              Preview
            </button>
          </div>
          <span className="text-[12px] text-[#8899b4]">{wordCount} words</span>
        </div>

        {/* Editor / Preview */}
        {preview ? (
          <div className="min-h-[220px] p-4 bg-[#0e1420] border border-white/[0.06] rounded-[12px] text-[14px] leading-[1.8] text-[#8899b4]">
            {note || <em className="text-[#5a6680]">Nothing to preview yet…</em>}
          </div>
        ) : (
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your notes in Markdown…"
            className="w-full min-h-[220px] p-4 bg-[#0e1420] border border-white/[0.06] rounded-[12px] text-[14px] leading-[1.7] text-white placeholder-[#5a6680] outline-none resize-y focus:border-[#4f8ef7]/35 transition-colors"
          />
        )}

        {/* Footer */}
        <div className="flex justify-end mt-4">
          <button className="px-5 py-2 rounded-[10px] bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] text-white text-[13px] font-semibold shadow-[0_4px_16px_rgba(79,142,247,0.3)] hover:opacity-90 hover:-translate-y-px transition-all">
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteSaver;