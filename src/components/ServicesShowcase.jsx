import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { courierServices } from '../data/courierServices';

const ServicesShowcase = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Get only the top 3 Indian courier companies
  const topCourierServices = courierServices.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          className="text-center mb-10 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-xl"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Top Indian Courier Services
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Track your packages across India's leading courier and logistics services
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {topCourierServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 overflow-hidden transform hover:scale-105 hover:border-emerald-500/30"
              variants={cardVariants}
              whileHover="hover"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="p-4 sm:p-6">
                {/* Header with Logo and Name */}
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-700/80 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-emerald-500/20 transition-all duration-300 border border-slate-600/50 flex-shrink-0">
                    <img
                      src={service.logo}
                      alt={service.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm hidden">
                      {service.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-1 truncate">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 truncate">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs text-emerald-400 font-medium">Active</span>
                </div>

                {/* Service Details */}
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                  <div className="bg-slate-700/50 rounded-lg p-2 sm:p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm text-slate-300">Service Type</span>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-400 font-medium truncate block">
                      {service.description}
                    </span>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-2 sm:p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm text-slate-300">Coverage</span>
                    </div>
                    <span className="text-xs sm:text-sm text-emerald-400 font-medium">Pan India</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-600/50">
                  <a
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center group/link"
                  >
                    Visit Website
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs text-slate-400">Real-time Tracking</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10 sm:mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <a
            href="/services"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
          >
            View All Services
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesShowcase; 