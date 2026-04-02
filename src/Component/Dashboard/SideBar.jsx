import React, { useState } from "react";
import {
  MessageSquare, FileUp, FileText, Layers,
  BookOpen, Settings as SettingsIcon, Sparkles, Menu,
} from "lucide-react";

const NAV_ITEMS = [
  { key: "chat",     label: "Chat",       icon: MessageSquare },
  { key: "upload",   label: "Upload",     icon: FileUp },
  { key: "pdf",      label: "PDF Review", icon: FileText },
  { key: "summary",  label: "Summary",    icon: Layers },
  { key: "notes",    label: "Notes",      icon: BookOpen },
  { key: "settings", label: "Settings",   icon: SettingsIcon },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`relative z-10 flex flex-col h-screen bg-[#0e1420] border-r border-white/[0.06] p-4 transition-all duration-300 ${
        collapsed ? "w-[72px] min-w-[72px]" : "w-60 min-w-[240px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-8 px-2 overflow-hidden whitespace-nowrap">
        <div className="w-[34px] h-[34px] min-w-[34px] rounded-[10px] bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] flex items-center justify-center shadow-[0_0_20px_rgba(79,142,247,0.35)]">
          <Sparkles size={16} color="white" />
        </div>
        <span
          className={`font-extrabold text-[17px] tracking-tight text-white transition-all duration-300 ${
            collapsed ? "opacity-0 w-0" : "opacity-100"
          }`}
        >
          Mind<span className="text-[#4f8ef7]">scribe</span>
        </span>
      </div>

      {/* Section label */}
      <p
        className={`mb-1.5 px-2 text-[10px] tracking-[1.5px] uppercase font-semibold text-[#5a6680] whitespace-nowrap transition-opacity duration-200 ${
          collapsed ? "opacity-0" : "opacity-100"
        }`}
      >
        Workspace
      </p>

      {/* Nav items */}
      <nav className="flex flex-col gap-0.5">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`relative flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium whitespace-nowrap w-full text-left transition-all duration-200 overflow-hidden border
              ${
                activeTab === key
                  ? "bg-gradient-to-br from-[#4f8ef7]/15 to-[#7c5cfc]/10 text-[#4f8ef7] border-[#4f8ef7]/20"
                  : "text-[#8899b4] border-transparent hover:bg-[#131a28] hover:text-white hover:border-white/[0.06]"
              }`}
          >
            {activeTab === key && (
              <span className="absolute left-0 top-[20%] bottom-[20%] w-0.5 bg-[#4f8ef7] rounded-r" />
            )}
            <Icon size={17} className="min-w-[17px]" />
            <span
              className={`transition-all duration-200 ${
                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>

      <div className="flex-1" />

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed((c) => !c)}
        className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium text-[#8899b4] border border-transparent hover:bg-[#131a28] hover:text-white hover:border-white/[0.06] transition-all duration-200 mt-2 w-full whitespace-nowrap"
      >
        <Menu size={17} className="min-w-[17px]" />
        <span className={`transition-all duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
          Collapse
        </span>
      </button>

      <div className="h-px bg-white/[0.06] my-2" />

      {/* User card */}
      <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] cursor-pointer hover:bg-[#131a28] transition-colors overflow-hidden whitespace-nowrap">
        <div className="w-8 h-8 min-w-[32px] rounded-full bg-gradient-to-br from-[#4f8ef7] to-[#7c5cfc] flex items-center justify-center text-[13px] font-bold text-white border-2 border-[#4f8ef7]/30">
          M
        </div>
        <div className={`overflow-hidden transition-all duration-200 ${collapsed ? "opacity-0 w-0" : "opacity-100"}`}>
          <p className="text-[13px] font-semibold text-white">You</p>
          <p className="text-[11px] text-[#8899b4]">Pro Plan</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;