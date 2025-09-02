import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-teal-600/5 to-cyan-600/5"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
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
            <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 max-w-md leading-relaxed">
              The most comprehensive package tracking platform for Indian
              courier services. Track your packages across all major courier
              companies with real-time updates.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a
                href="https://twitter.com/trackflow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/80 backdrop-blur-sm hover:bg-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-slate-600 shadow-md"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/trackflow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/80 backdrop-blur-sm hover:bg-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-slate-600 shadow-md"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com/trackflow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/80 backdrop-blur-sm hover:bg-emerald-500/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-slate-600 shadow-md"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-3.743 1.406-3.743s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
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
          <div>
            <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-white">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/help"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 group flex items-center text-xs sm:text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 group-hover:scale-150 transition-transform"></span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-xs sm:text-sm">
              © 2024 TrackIndia. All rights reserved.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-0">
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
