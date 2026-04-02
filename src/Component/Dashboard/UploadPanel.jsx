import React, { useState } from "react";
import { UploadCloud, FileText, CheckCircle2 } from "lucide-react";

const UploadPanel = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

  const simulateUpload = (selectedFile) => {
    if (!selectedFile || selectedFile.type !== "application/pdf") return;
    setFile(selectedFile);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + 8;
      });
    }, 100);
  };

  const handleChange = (e) => simulateUpload(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    simulateUpload(e.dataTransfer.files[0]);
  };

  return (
    <div>
      {/* Page header */}
      <div className="mb-6">
        <h1 className="font-extrabold text-[22px] tracking-tight text-white mb-1">Upload Document</h1>
        <p className="text-[13px] text-[#8899b4]">Supported formats: PDF, DOCX, TXT</p>
      </div>

      {/* Drop zone */}
      <label
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`cursor-pointer flex flex-col items-center justify-center w-full rounded-[20px] px-10 py-16 border-2 border-dashed text-center transition-all duration-200
          ${dragging
            ? "border-[#4f8ef7] bg-[#4f8ef7]/[0.08]"
            : "border-white/10 bg-[#131a28] hover:border-[#4f8ef7] hover:bg-[#4f8ef7]/[0.04]"
          }`}
      >
        {/* Icon */}
        <div className="w-[72px] h-[72px] rounded-[20px] bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110 hover:rotate-[-3deg]">
          <UploadCloud size={30} className="text-[#4f8ef7]" />
        </div>

        <p className="font-bold text-[18px] text-white mb-1.5">Drop files here</p>
        <p className="text-[13px] text-[#8899b4] mb-5">or click to browse from your computer</p>

        <span className="px-5 py-2.5 rounded-[10px] bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] text-white text-[13px] font-semibold shadow-[0_4px_16px_rgba(79,142,247,0.3)] hover:opacity-90 transition-opacity">
          Browse Files
        </span>

        <input type="file" accept="application/pdf" className="hidden" onChange={handleChange} />
      </label>

      {/* File progress card */}
      {file && (
        <div className="mt-5 bg-[#131a28] border border-white/[0.06] rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-[38px] h-[38px] rounded-[10px] bg-[#4f8ef7]/10 border border-[#4f8ef7]/20 flex items-center justify-center">
                <FileText size={18} className="text-[#4f8ef7]" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-white max-w-[260px] truncate">{file.name}</p>
                <p className="text-[12px] text-[#8899b4]">{(file.size / 1024).toFixed(1)} KB</p>
              </div>
            </div>
            {progress === 100 && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20">
                <CheckCircle2 size={10} /> Done
              </span>
            )}
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-[#0e1420] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4f8ef7] to-[#7c5cfc] rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress < 100 && (
            <p className="text-[11px] text-[#8899b4] mt-1.5 text-right">{progress}%</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadPanel;