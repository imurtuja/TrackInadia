import { useEffect } from 'react';
import { courierServices } from '../data/courierServices';

const Services = () => {
  useEffect(() => {
    document.title = "Services | TrackFlow by Murtuja";
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              Track packages across all major Indian courier services with real-time updates, 
              professional tracking, and comprehensive delivery status information.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courierServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-700/50 overflow-hidden transform hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-700 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-colors">
                    <img 
                      src={service.logo} 
                      alt={service.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg hidden">
                      {service.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">Service Type:</span>
                    <span className="text-sm text-slate-400">
                      {service.description}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">Website:</span>
                    <a 
                      href={service.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center"
                    >
                      Visit Site
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">Status:</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="text-sm text-emerald-400 font-medium">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose TrackFlow?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional tracking solutions with comprehensive coverage and real-time updates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Updates</h3>
              <p className="text-slate-300">Get instant notifications and real-time tracking updates for all your packages</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">100% Accurate</h3>
              <p className="text-slate-300">Direct integration with official courier APIs ensures accurate tracking data</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Private</h3>
              <p className="text-slate-300">Your tracking data is encrypted and never stored on our servers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 