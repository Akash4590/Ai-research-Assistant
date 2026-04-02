import React, { useState } from "react";
import { Moon, Bell, User, Trash2 } from "lucide-react";

const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative w-11 h-6 rounded-full border transition-all duration-200 flex items-center
      ${enabled
        ? "bg-[#4f8ef7] border-[#4f8ef7]"
        : "bg-[#0e1420] border-white/10"
      }`}
  >
    <span
      className={`absolute w-4 h-4 rounded-full bg-white shadow transition-transform duration-200
        ${enabled ? "translate-x-6" : "translate-x-1"}`}
    />
  </button>
);

const SettingsCard = ({ icon: Icon, iconColor, title, children, danger }) => (
  <div className={`bg-[#131a28] rounded-2xl overflow-hidden mb-3 border ${danger ? "border-[#f87171]/20" : "border-white/[0.06]"}`}>
    <div className={`flex items-center gap-2.5 px-5 py-4 border-b ${danger ? "border-[#f87171]/20" : "border-white/[0.06]"}`}>
      <Icon size={16} className={iconColor} />
      <span className={`font-semibold text-[14px] ${danger ? "text-[#f87171]" : "text-white"}`}>{title}</span>
    </div>
    <div className="px-5 py-2">{children}</div>
  </div>
);

const SettingsRow = ({ label, right }) => (
  <div className="flex items-center justify-between py-3.5 border-b border-white/[0.06] last:border-b-0">
    <span className="text-[14px] text-white">{label}</span>
    {right}
  </div>
);

const Settings = () => {
  const [darkMode,       setDarkMode]       = useState(true);
  const [compactView,    setCompactView]    = useState(false);
  const [notifications,  setNotifications]  = useState(true);

  return (
    <div className="max-w-[560px]">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="font-extrabold text-[22px] tracking-tight text-white mb-1">Settings</h1>
        <p className="text-[13px] text-[#8899b4]">Manage your account and preferences</p>
      </div>

      {/* Appearance */}
      <SettingsCard icon={Moon} iconColor="text-[#4f8ef7]" title="Appearance">
        <SettingsRow label="Dark Mode"     right={<Toggle enabled={darkMode}    onToggle={() => setDarkMode(d => !d)} />} />
        <SettingsRow label="Compact View"  right={<Toggle enabled={compactView} onToggle={() => setCompactView(c => !c)} />} />
      </SettingsCard>

      {/* Notifications */}
      <SettingsCard icon={Bell} iconColor="text-[#fbbf24]" title="Notifications">
        <SettingsRow label="Email Alerts" right={<Toggle enabled={notifications} onToggle={() => setNotifications(n => !n)} />} />
      </SettingsCard>

      {/* Account */}
      <SettingsCard icon={User} iconColor="text-[#7c5cfc]" title="Account">
        <SettingsRow
          label={<span className="text-[#8899b4]">Email</span>}
          right={<span className="text-[13px] text-white">you@example.com</span>}
        />
        <SettingsRow
          label={<span className="text-[#8899b4]">Plan</span>}
          right={
            <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold bg-[#4f8ef7]/10 text-[#4f8ef7] border border-[#4f8ef7]/20">
              Pro Monthly
            </span>
          }
        />
      </SettingsCard>

      {/* Danger zone */}
      <SettingsCard icon={Trash2} iconColor="text-[#f87171]" title="Danger Zone" danger>
        <div className="py-4">
          <p className="text-[13px] text-[#8899b4] mb-4">
            Permanently delete your account and all associated data.
          </p>
          <button className="px-4 py-2 rounded-[10px] text-[13px] font-semibold bg-[#f87171]/10 text-[#f87171] border border-[#f87171]/20 hover:bg-[#f87171] hover:text-white transition-all duration-200">
            Delete Account
          </button>
        </div>
      </SettingsCard>
    </div>
  );
};

export default Settings;