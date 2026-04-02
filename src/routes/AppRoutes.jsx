// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import ForgotPasswordPage from '../pages/Auth/ForgotPasswordPage';
import Dashboard from '../pages/Dashboard';
import LandingPage from '../pages/LandingPage';
import NotFound from '../pages/NotFound';
import AuthRoutes from './AuthRoutes'; // ✅ Correct import

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />
      <Route path="/auth/*" element={<AuthRoutes />} /> {/* ✅ Nested routing for auth */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
