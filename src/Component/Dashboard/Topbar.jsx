import React, { useState, useEffect } from "react";
import { Bell, Search } from "lucide-react";

const TAB_LABELS = {
  chat:     "Chat",
  upload:   "Upload",
  pdf:      "PDF Review",
  summary:  "Summary",
  notes:    "Notes",
  settings: "Settings",
};

const Topbar = ({ activeTab }) => {
  const [search, setSearch] = useState("");
  const [, setDebounced] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 500);
    return () => clearTimeout(t);
  }, [search]);

  return (
    <header className="flex items-center gap-4 px-6 h-[60px] min-h-[60px] bg-[#0e1420] border-b border-white/[0.06]">
      {/* Page title */}
      <span className="font-extrabold text-base tracking-tight text-white shrink-0">
        {TAB_LABELS[activeTab] ?? "Dashboard"}
      </span>

      {/* Search */}
      <div className="relative flex-1 max-w-xs">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6680]" />
        <input
          type="text"
          placeholder="Search anything…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full py-2 pl-9 pr-4 bg-[#131a28] border border-white/[0.06] rounded-[10px] text-[13px] text-white placeholder-[#5a6680] outline-none focus:border-[#4f8ef7]/40 transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        {/* Notification bell */}
        <div className="relative w-9 h-9 rounded-[10px] bg-[#131a28] border border-white/[0.06] flex items-center justify-center cursor-pointer text-[#8899b4] hover:text-white hover:bg-[#080c14] transition-all">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-400 rounded-full border border-[#0e1420]" />
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] flex items-center justify-center text-[13px] font-bold text-white border-2 border-[#4f8ef7]/30 cursor-pointer">
          M
        </div>
      </div>
    </header>
  );
};

export default Topbar;