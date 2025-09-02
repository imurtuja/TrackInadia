import { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service | TrackFlow by Murtuja";
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              These terms and conditions govern your use of TrackFlow's package tracking services. 
              Please read them carefully before using our platform.
            </p>
            <div className="text-sm text-slate-400">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-24">
        <div className="space-y-12">
          {/* Acceptance of Terms */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              By accessing and using TrackFlow ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-slate-300 leading-relaxed">
              These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, 
              merchants, and/or contributors of content.
            </p>
          </div>

          {/* Description of Service */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">2. Description of Service</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              TrackFlow is a package tracking platform that provides users with the ability to track packages across multiple Indian courier services 
              through a unified interface. Our service aggregates tracking information from various courier companies and presents it in a user-friendly format.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">Real-time package tracking across multiple courier services</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">Unified interface for all supported courier companies</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-slate-300">Direct links to official courier tracking pages</p>
              </div>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">3. User Responsibilities</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Accurate Information</h3>
                <p className="text-slate-300">
                  You are responsible for providing accurate tracking numbers and selecting the correct courier service. 
                  We are not liable for tracking errors resulting from incorrect information provided by users.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Acceptable Use</h3>
                <p className="text-slate-300 mb-3">You agree not to use the Service to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the service for any commercial purpose without permission</li>
                  <li>Interfere with or disrupt the service</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Prohibited Activities</h3>
                <p className="text-slate-300">
                  You may not use automated systems, bots, or scripts to access the service in a manner that could 
                  interfere with or disrupt the service for other users.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">4. Intellectual Property Rights</h2>
            
            <div className="space-y-4">
              <p className="text-slate-300">
                The Service and its original content, features, and functionality are and will remain the exclusive property of 
                TrackFlow Technologies Pvt. Ltd. and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-slate-300">
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
              <p className="text-slate-300">
                All courier service logos and trademarks displayed on our platform belong to their respective owners. 
                We do not claim ownership of these third-party trademarks.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">5. Privacy Policy</h2>
            <p className="text-slate-300 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
              to understand our practices regarding the collection and use of your information.
            </p>
            <p className="text-slate-300">
              By using the Service, you consent to the collection and use of information in accordance with our Privacy Policy.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">6. Disclaimers and Limitations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Service Availability</h3>
                <p className="text-slate-300">
                  We strive to maintain high availability of our service, but we do not guarantee uninterrupted access. 
                  The service may be temporarily unavailable due to maintenance, updates, or technical issues.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Tracking Information</h3>
                <p className="text-slate-300">
                  We provide tracking information as received from courier services. We do not guarantee the accuracy, 
                  completeness, or timeliness of tracking information. Users should verify tracking details with the respective courier service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Third-Party Services</h3>
                <p className="text-slate-300">
                  Our service integrates with third-party courier services. We are not responsible for the availability, 
                  accuracy, or content of these third-party services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Limitation of Liability</h3>
                <p className="text-slate-300">
                  In no event shall TrackFlow Technologies Pvt. Ltd. be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising out of or relating to your use of the Service.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">7. Termination</h2>
            
            <div className="space-y-4">
              <p className="text-slate-300">
                We may terminate or suspend your access to the Service immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-slate-300">
                Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, 
                you may simply discontinue using the Service.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">8. Governing Law</h2>
            <p className="text-slate-300">
              These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. 
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">9. Changes to Terms</h2>
            
            <div className="space-y-4">
              <p className="text-slate-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-slate-300">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service 
                after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">10. Contact Information</h2>
            
            <p className="text-slate-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-300">Email: legal@trackflow.in</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-300">Address: TrackFlow Technologies Pvt. Ltd., 123 Tech Park, Sector 62, Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 