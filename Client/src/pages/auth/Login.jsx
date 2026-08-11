import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  ShieldCheck,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login
    // We will connect this to Node.js + PostgreSQL later.
    console.log("Login data:", formData);

    navigate("/admin");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-8">

      {/* Login Card */}
      <div className="relative w-full max-w-lg ">

        <div className="relative bg-slate-900 border border-blue-900/50 shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
              <ShieldCheck
                size={36}
                className="text-white"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mt-6">

            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Sign in to your admin account
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Email */}
            <div>

              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    bg-slate-800
                    border border-slate-700
                    text-white
                    placeholder-slate-500
                    rounded-xl
                    py-3
                    pl-10
                    pr-4
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                  "
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Password
              </label>

              <div className="relative">

                <Lock
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="
                    w-full
                    bg-slate-800
                    border border-slate-700
                    text-white
                    placeholder-slate-500
                    rounded-xl
                    py-3
                    pl-10
                    pr-12
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-500
                    hover:text-blue-400
                    transition
                  "
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between gap-3">

              <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">

                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600"
                />

                Remember me

              </label>

              <button
                type="button"
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                active:bg-blue-800
                text-white
                py-3
                rounded-xl
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                transition
                duration-200
                shadow-lg
                shadow-blue-600/20
              "
            >
              <LogIn size={20} />
              Sign In
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 text-center">

            <p className="text-xs sm:text-sm text-slate-500">
              Staff Feedback Management System
            </p>

            <p className="text-xs text-slate-600 mt-2">
              © 2026 ADDIS MESOB Organization
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;