import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react";

export default function Login() {
      // State management for form inputs and validation
      const [formData, setFormData] = useState({
            email: "",
            password: "",
      });

      const [errors, setErrors] = useState({
            email: "",
            password: "",
      });

      const [showPassword, setShowPassword] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const [rememberMe, setRememberMe] = useState(false);

      // Handle input changes
      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value,
            });

            // Clear error when user starts typing
            if (errors[name]) {
                  setErrors({
                        ...errors,
                        [name]: "",
                  });
            }
      };

      // Toggle password visibility
      const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
      };

      // Form validation
      const validateForm = () => {
            let valid = true;
            const newErrors = { email: "", password: "" };

            // Email validation
            if (!formData.email) {
                  newErrors.email = "Email is required";
                  valid = false;
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                  newErrors.email = "Email address is invalid";
                  valid = false;
            }

            // Password validation
            if (!formData.password) {
                  newErrors.password = "Password is required";
                  valid = false;
            } else if (formData.password.length < 6) {
                  newErrors.password = "Password must be at least 6 characters";
                  valid = false;
            }

            setErrors(newErrors);
            return valid;
      };

      // Handle form submission
      const handleSubmit = (e) => {
            e.preventDefault();

            if (validateForm()) {
                  setIsLoading(true);

                  // Simulate API call
                  setTimeout(() => {
                        console.log("Login successful:", formData);
                        setIsLoading(false);
                        alert("Login successful!\n\nThis is where you would redirect to the dashboard or home page.");
                  }, 1500);
            }
      };

      return (
            <div className="bg-gray-100 p-6 rounded-lg w-full overflow-hidden shadow-lg text-black">
                  <h2 className="text-2xl font-bold mb-2">Log in form</h2>
                  <p className="text-gray-600 mb-6">Sign in to your account to continue</p>

                  <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email Address
                              </label>
                              <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                          <Mail size={18} className="text-gray-500" />
                                    </div>
                                    <input
                                          className={`shadow appearance-none border ${
                                                errors.email ? "border-red-500" : "border-gray-300"
                                          } rounded-md w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500`}
                                          id="email"
                                          type="text"
                                          name="email"
                                          placeholder="johndoe@example.com"
                                          value={formData.email}
                                          onChange={handleChange}
                                    />
                              </div>
                              {errors.email && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center">
                                          <AlertCircle size={12} className="mr-1" />
                                          {errors.email}
                                    </p>
                              )}
                        </div>

                        {/* Password Field */}
                        <div className="mb-6">
                              <div className="flex items-center justify-between mb-2">
                                    <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                                          Password
                                    </label>
                                    <a
                                          href="#forgot-password"
                                          className="text-xs text-blue-600 hover:text-blue-800"
                                          onClick={(e) => {
                                                e.preventDefault();
                                                alert("Password reset functionality would go here");
                                          }}
                                    >
                                          Forgot password?
                                    </a>
                              </div>
                              <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                          <Lock size={18} className="text-gray-500" />
                                    </div>
                                    <input
                                          className={`shadow appearance-none border ${
                                                errors.password ? "border-red-500" : "border-gray-300"
                                          } rounded-md w-full py-2 pl-10 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500`}
                                          id="password"
                                          type={showPassword ? "text" : "password"}
                                          name="password"
                                          placeholder="••••••••"
                                          value={formData.password}
                                          onChange={handleChange}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                          <button
                                                type="button"
                                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                                onClick={togglePasswordVisibility}
                                          >
                                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                          </button>
                                    </div>
                              </div>
                              {errors.password && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center">
                                          <AlertCircle size={12} className="mr-1" />
                                          {errors.password}
                                    </p>
                              )}
                        </div>

                        {/* Remember Me Checkbox */}
                        <div className="mb-6">
                              <label className="flex items-center">
                                    <input
                                          type="checkbox"
                                          className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                                          checked={rememberMe}
                                          onChange={() => setRememberMe(!rememberMe)}
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Remember me</span>
                              </label>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col space-y-3">
                              <button
                                    type="submit"
                                    className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full flex justify-center items-center ${
                                          isLoading ? "opacity-75 cursor-not-allowed" : ""
                                    }`}
                                    disabled={isLoading}
                              >
                                    {isLoading ? (
                                          <>
                                                <svg
                                                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                >
                                                      <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                      ></circle>
                                                      <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                      ></path>
                                                </svg>
                                                Signing in...
                                          </>
                                    ) : (
                                          "Sign In"
                                    )}
                              </button>

                              <button
                                    type="button"
                                    className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
                                    onClick={() => alert("Sign up functionality would go here")}
                              >
                                    Create Account
                              </button>
                        </div>
                  </form>

                  {/* Social Login Options */}
                  <div className="mt-6 pt-4 border-t border-gray-300">
                        <p className="text-center text-sm text-gray-600 mb-3">Or continue with</p>
                        <div className="flex justify-center space-x-3">
                              <button
                                    type="button"
                                    className="bg-[#4267B2] text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4267B2]"
                                    onClick={() => alert("Facebook login would go here")}
                              >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                              </button>
                              <button
                                    type="button"
                                    className="bg-[#1DA1F2] text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2]"
                                    onClick={() => alert("Twitter login would go here")}
                              >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.986 13.986 0 011.64 3.162a4.929 4.929 0 001.523 6.574 4.932 4.932 0 01-2.229-.616v.061a4.928 4.928 0 003.95 4.827 4.938 4.938 0 01-2.224.084 4.927 4.927 0 004.6 3.42 9.873 9.873 0 01-6.116 2.105 10.08 10.08 0 01-1.174-.068 13.952 13.952 0 007.55 2.213c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.016-.63A9.936 9.936 0 0024 4.59z" />
                                    </svg>
                              </button>
                              <button
                                    type="button"
                                    className="bg-[#EA4335] text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EA4335]"
                                    onClick={() => alert("Google login would go here")}
                              >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                    </svg>
                              </button>
                        </div>
                  </div>
            </div>
      );
}
