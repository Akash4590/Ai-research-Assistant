import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ChatAgent from "./ChatAgent";
import UploadPanel from "./UploadPanel";
import PDFViewer from "./PDFViewer";
import SummaryBox from "./SummaryBox";
import NoteSaver from "./NoteSaver";
import Settings from "./Settings";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("chat");

  const renderContent = () => {
    switch (activeTab) {
      case "chat":
        return <ChatAgent />;
      case "upload":
        return <UploadPanel />;
      case "pdf":
        return <PDFViewer />;
      case "summary":
        return <SummaryBox />;
      case "notes":
        return <NoteSaver />;
      case "settings":
        return <Settings />;
      default:
        return <ChatAgent />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-4 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
