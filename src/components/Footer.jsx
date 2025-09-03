import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-teal-600/5 to-cyan-600/5"></div>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 order-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                TrackIndia
              </h3>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 mb-4 sm:mb-6 max-w-md leading-relaxed">
              The most comprehensive package tracking platform for Indian
              courier services. Track your packages across all major courier
              companies with real-time updates.
            </p>

            {/* Updated Social Media Links */}
            <div className="flex space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              {/* Facebook */}
              <a
                href="https://facebook.com/trackindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/80 backdrop-blur-sm hover:bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-slate-600 shadow-md group"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/trackindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/80 backdrop-blur-sm hover:bg-gray-500/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-slate-600 shadow-md group"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-gray-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/trackindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/80 backdrop-blur-sm hover:bg-pink-500/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-slate-600 shadow-md group"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-pink-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Quick Links and Support - Side by side on mobile */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 order-2">
            <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 order-3">
            <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-white">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/help"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col items-center space-y-3">
            <p className="text-slate-400 text-xs sm:text-sm text-center">
              © 2024 TrackIndia. All rights reserved.
            </p>

            {/* Cool Animated Tagline - Centered under copyright */}
            <motion.div
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="flex items-center justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span
                  className="text-xs sm:text-sm text-purple-300 font-medium"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(168, 85, 247, 0.5)",
                      "0 0 10px rgba(168, 85, 247, 0.8)",
                      "0 0 5px rgba(168, 85, 247, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Made with
                </motion.span>
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-red-400 text-sm sm:text-base"
                >
                  ❤️
                </motion.span>
                <motion.span
                  className="text-xs sm:text-sm text-pink-300 font-medium"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(236, 72, 153, 0.5)",
                      "0 0 10px rgba(236, 72, 153, 0.8)",
                      "0 0 5px rgba(236, 72, 153, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  by
                </motion.span>
                <motion.span
                  className="text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Murtuja
                </motion.span>
              </motion.div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                  System Status: Online
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-500">
                Version 1.4.3
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
