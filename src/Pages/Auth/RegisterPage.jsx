// src/pages/Auth/Register.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image2 from "../../assets/image2.jpg";
import { registerUser } from "../../api/authapi"; // 🔗 Import register API
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'; // For password toggle (install @heroicons/react if not present)

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await registerUser(formData);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Image Section for Desktop */}
      <div className="hidden md:flex w-1/2 bg-indigo-600 items-center justify-center">
        <img
          src={image2}
          alt="Signup Illustration"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-8 py-10 bg-gray-50 dark:bg-slate-800">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
          Create Account
        </h2>

        {error && (
          <p className="mb-4 text-red-600 bg-red-100 p-2 rounded border border-red-300 animate-shake" role="alert">{error}</p>
        )}
        {success && (
          <p className="mb-4 text-green-600 bg-green-100 p-2 rounded border border-green-300" role="status">{success}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
            autoFocus
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10"
              required
              minLength={6}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition flex items-center justify-center ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
            ) : null}
            Register
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login here
          </Link>
        </div>

        {/* Mobile Image Section */}
        <div className="mt-8 md:hidden">
          <img
            src={image2}
            alt="Signup Illustration Mobile"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
