import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ChatAgent from "../component/Dashboard/ChatAgent";
import UploadPanel from "../component/Dashboard/UploadPanel";
import PDFViewer from "../component/Dashboard/PDFViewer";
import SummaryBox from "../component/Dashboard/SummaryBox";
import NoteSaver from "../component/Dashboard/NoteSaver";
import Settings from "../component/Dashboard/Settings";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<ChatAgent />} />
        <Route path="chat" element={<ChatAgent />} />
        <Route path="upload" element={<UploadPanel />} />
        <Route path="pdfviewer" element={<PDFViewer />} />
        <Route path="summary" element={<SummaryBox />} />
        <Route path="notes" element={<NoteSaver />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
