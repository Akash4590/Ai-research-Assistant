import React from "react";
import DashboardLayout from "../component/Dashboard/DashboardLayout";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Outlet /> {/* Will render nested route components */}
    </DashboardLayout>
  );
};

export default Dashboard;
