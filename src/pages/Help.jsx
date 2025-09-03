import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Help = () => {
  useEffect(() => {
    document.title = "Help Center | trackindia by Murtuja";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl mb-8 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Help Center
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              Find answers to common questions, troubleshooting guides, and get the support you need 
              to make the most of trackindia's package tracking services.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-16">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Search for Help</h2>
            <p className="text-slate-300">Find answers quickly by searching our knowledge base</p>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or troubleshooting guides..."
              className="w-full px-6 py-4 border-2 border-slate-600 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-500 bg-slate-700/50 backdrop-blur-sm text-white placeholder-slate-400 text-lg"
            />
            <button className="absolute right-2 top-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-500">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Quick Help Categories</h2>
          <p className="text-slate-300">Choose a category to find relevant help articles</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Getting Started</h3>
            <p className="text-slate-300 text-sm mb-4">Learn how to track your first package and use trackindia effectively</p>
            <Link to="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View Articles →</Link>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Courier Services</h3>
            <p className="text-slate-300 text-sm mb-4">Information about supported courier services and their features</p>
            <Link to="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View Articles →</Link>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Troubleshooting</h3>
            <p className="text-slate-300 text-sm mb-4">Common issues and their solutions for tracking problems</p>
            <Link to="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View Articles →</Link>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Account & Settings</h3>
            <p className="text-slate-300 text-sm mb-4">Manage your account, preferences, and notification settings</p>
            <Link to="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View Articles →</Link>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Privacy & Security</h3>
            <p className="text-slate-300 text-sm mb-4">Learn about data protection, privacy policies, and security measures</p>
            <Link to="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View Articles →</Link>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6 hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Contact Support</h3>
            <p className="text-slate-300 text-sm mb-4">Get in touch with our support team for personalized help</p>
            <Link to="/contact" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">Contact Us →</Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-300">Find quick answers to the most common questions</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-3">How do I track a package?</h3>
              <p className="text-slate-300">Simply enter your tracking number in the search box on the homepage and select your courier service. Click "Track Now" to get real-time updates on your package.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Which courier services are supported?</h3>
              <p className="text-slate-300">trackindia supports 13+ major Indian courier services including Blue Dart, Delhivery, DTDC, India Post, FedEx, DHL, and many more. Check our Services page for the complete list.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Is my tracking data secure?</h3>
              <p className="text-slate-300">Yes, we take security seriously. Your tracking data is encrypted and never stored on our servers. We only forward your request to the official courier websites.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-3">What if my tracking number doesn't work?</h3>
              <p className="text-slate-300">Make sure you've selected the correct courier service and entered the tracking number exactly as provided. If it still doesn't work, the package might not be in the system yet or there might be a delay.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Is trackindia free to use?</h3>
              <p className="text-slate-300">Yes, trackindia is completely free to use. There are no hidden charges or subscription fees. We provide this service to make package tracking easier for everyone.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-500 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </Link>
            <a 
              href="mailto:support@trackindia.in" 
              className="inline-flex items-center px-8 py-4 bg-slate-700/80 backdrop-blur-sm text-white rounded-2xl font-semibold text-lg hover:bg-slate-600/80 transition-all duration-500 transform hover:scale-105 border border-slate-600"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help; 