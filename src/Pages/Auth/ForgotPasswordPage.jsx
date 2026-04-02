// src/pages/Auth/ForgotPassword.jsx

import React from "react";
import { Link } from "react-router-dom";
import forgetpassword from "../../assets/forgetpassword.jpg"

const ForgotPassword = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Form Section */}
      <div className="flex items-center justify-center w-full md:w-1/2 px-6 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-md w-full p-8 bg-white dark:bg-slate-800 rounded shadow">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Reset Password
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">
            Enter your email to receive password reset instructions.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Send Reset Link
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-500">
            Remembered your password?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Section */}
      <div className="hidden md:flex w-1/2 animate-fade-in">
        <img
          src={forgetpassword}
          alt="Reset Password Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
