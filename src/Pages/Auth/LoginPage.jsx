// src/pages/Auth/Login.jsx

import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image.jpg";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Image section for Desktop */}
      <div className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center">
        <img
          src={image}
          alt="Login Illustration"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Form section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-8 py-10 bg-gray-50 dark:bg-slate-800">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <Link to="/forgot-password" className="hover:underline">
            Forgot password?
          </Link>
          <Link to="/register" className="hover:underline">
            Don’t have an account?
          </Link>
        </div>

        {/* Mobile Image Section */}
        <div className="mt-8 md:hidden">
          <img
            src={image}
            alt="Login Illustration Mobile"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
