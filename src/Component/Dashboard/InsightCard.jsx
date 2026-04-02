import React from "react";

const InsightCard = ({ icon: Icon, label, value, color, bg }) => {
  return (
    <div className="flex items-center gap-3.5 bg-[#131a28] border border-white/[0.06] rounded-2xl px-5 py-[18px]">
      <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center ${bg}`}>
        {Icon && <Icon size={18} className={color} />}
      </div>
      <div>
        <p className="font-bold text-[22px] text-white leading-none">{value}</p>
        <p className="text-[12px] text-[#8899b4] mt-1">{label}</p>
      </div>
    </div>
  );
};

export default InsightCard;