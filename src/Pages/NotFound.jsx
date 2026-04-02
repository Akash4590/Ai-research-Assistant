// src/pages/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/notFoundImage.webp" // Add your 404 image here

const NotFound = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">
      {/* Image Section for 404 */}
      <div className="hidden md:flex w-1/2 justify-center items-center p-8 animate-fade-in">
        <img
          src={notFoundImage}
          alt="Page Not Found"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* 404 Message & Navigation */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-6 bg-white dark:bg-slate-800">
        <div className="max-w-md text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-300 mb-8">
            It seems like the page you're looking for doesn't exist. Let's get you back on track!
          </p>

          <div className="space-x-4">
            <Link
              to="/"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Go to Home
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
