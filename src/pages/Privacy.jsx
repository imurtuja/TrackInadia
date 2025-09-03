import { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | TrackIndia by Murtuja";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-cyan-600/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl mb-8 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information 
              when you use TrackIndia's package tracking services.
            </p>
            <div className="text-sm text-slate-400">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-24">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              TrackIndia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website and use our package tracking services.
            </p>
            <p className="text-slate-300 leading-relaxed">
              By using TrackIndia, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our service.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Tracking Information</h3>
                <p className="text-slate-300 mb-3">When you use our tracking service, we may collect:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Tracking numbers you enter</li>
                  <li>Selected courier service information</li>
                  <li>Tracking request timestamps</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Usage Information</h3>
                <p className="text-slate-300 mb-3">We automatically collect certain information about your device and usage:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookies and Tracking Technologies</h3>
                <p className="text-slate-300">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, 
                  and improve our services. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">Provide and maintain our package tracking services</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">Process tracking requests and display results</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">Improve our website functionality and user experience</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">Analyze usage patterns and optimize performance</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">Detect and prevent fraud or abuse</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">Comply with legal obligations and enforce our terms</p>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Data Protection and Security</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Security Measures</h3>
                <p className="text-slate-300 mb-3">We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>SSL encryption for all data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage practices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Data Retention</h3>
                <p className="text-slate-300">
                  We do not store your tracking numbers or personal information on our servers. 
                  Tracking requests are processed in real-time and not retained after processing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Third-Party Services</h3>
                <p className="text-slate-300">
                  We may use third-party services for analytics and performance monitoring. 
                  These services have their own privacy policies and data handling practices.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300"><strong>Access:</strong> Request information about what data we have about you</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300"><strong>Correction:</strong> Request correction of inaccurate information</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300"><strong>Deletion:</strong> Request deletion of your personal information</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300"><strong>Portability:</strong> Request a copy of your data in a portable format</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300"><strong>Objection:</strong> Object to processing of your personal data</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            
            <p className="text-slate-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-300">Email: privacy@trackindia.in</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-300">Address: TrackIndia Technologies Pvt. Ltd., 123 Tech Park, Sector 62, Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
            
            <p className="text-slate-300 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page.
            </p>
            
            <p className="text-slate-300">
              Your continued use of TrackIndia after any changes to this Privacy Policy constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 