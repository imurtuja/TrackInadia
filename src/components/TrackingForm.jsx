import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { courierServices, getTrackingUrl } from "../data/courierServices";
import { trackPackage } from "../services/purpleDroneApi";
import TrackingResults from "./TrackingResults";

const TrackingForm = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [selectedCourier, setSelectedCourier] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [trackingResults, setTrackingResults] = useState(null);
  const [showResults, setShowResults] = useState(false);


  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const formRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-50px" });

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      showToastMessage("Please enter tracking number", "error");
      return;
    }

    setIsLoading(true);
    setShowResults(true);
    setTrackingResults(null);

    try {
      // Use real API only
      const result = await trackPackage(trackingNumber);

      if (result.success) {
        setTrackingResults(result);
        showToastMessage(
          "Tracking information loaded successfully!",
          "success"
        );
      } else {
        setTrackingResults(null);
        showToastMessage(result.error || "Failed to track package", "error");
      }
    } catch (error) {
      console.error("Tracking error:", error);
      setTrackingResults(null);
      showToastMessage(
        "An error occurred while tracking your package",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickTrack = (courierId) => {
    if (!trackingNumber.trim()) {
      showToastMessage("Please enter a tracking number first", "error");
      return;
    }

    setIsLoading(true);
    const trackingUrl = getTrackingUrl(courierId, trackingNumber);

    if (trackingUrl) {
      setTimeout(() => {
        window.open(trackingUrl, "_blank");
        setIsLoading(false);
        showToastMessage(
          `Opened ${
            courierServices.find((c) => c.id === courierId)?.name
          } tracking`,
          "success"
        );
      }, 500);
    } else {
      setIsLoading(false);
      showToastMessage("Unable to open tracking page", "error");
    }
  };

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setTrackingResults(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border ${
              toastType === "success"
                ? "bg-emerald-500/90 border-emerald-400 text-white"
                : "bg-red-500/90 border-red-400 text-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              {toastType === "success" ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              <span className="font-medium text-sm sm:text-base">
                {toastMessage}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-teal-600/5 to-cyan-600/5"></div>
        <motion.div
          className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute top-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-teal-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4"
              variants={itemVariants}
            >
              Track Your Package
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
              variants={itemVariants}
            >
              Track packages across all major Indian courier services with
              real-time updates
            </motion.p>

            <motion.div
              ref={formRef}
              className="max-w-lg sm:max-w-2xl mx-auto px-4"
              variants={itemVariants}
            >
              <motion.div
                className="bg-slate-800/60 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl border border-slate-700/50 p-6 sm:p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <form onSubmit={handleTrack} className="space-y-4 sm:space-y-6">
                  <div>
                    <label
                      htmlFor="trackingNumber"
                      className="block text-sm font-semibold text-slate-200 mb-2"
                    >
                      Tracking Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="trackingNumber"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        placeholder="Enter your tracking number"
                        className="w-full px-3 sm:px-4 py-3 sm:py-3 border-2 border-slate-600 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 text-sm sm:text-base bg-slate-700/50 backdrop-blur-sm text-white placeholder-slate-400"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="courier"
                      className="block text-sm font-semibold text-slate-200 mb-2"
                    >
                      Select Courier Service (Optional)
                    </label>
                    <div className="relative">
                      <select
                        id="courier"
                        value={selectedCourier}
                        onChange={(e) => setSelectedCourier(e.target.value)}
                        className="w-full px-3 sm:px-4 py-3 sm:py-3 border-2 border-slate-600 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 text-sm sm:text-base bg-slate-700/50 backdrop-blur-sm text-white appearance-none"
                      >
                        <option value="" className="text-slate-400">
                          Choose your courier service (optional)
                        </option>
                        <option value="purpledrone" className="text-slate-900">
                          PurpleDrone (Integrated)
                        </option>
                        {courierServices.map((courier) => (
                          <option
                            key={courier.id}
                            value={courier.id}
                            className="text-slate-900"
                          >
                            {courier.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 pointer-events-none">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading || !trackingNumber.trim()}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:from-emerald-600 hover:to-teal-700 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:shadow-none flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <motion.svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
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
                        </motion.svg>
                        <span className="text-sm sm:text-base">
                          Tracking...
                        </span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 sm:w-4 sm:h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span className="text-sm sm:text-base">Track Now</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className="mt-12 sm:mt-16 grid grid-cols-3 gap-6 sm:gap-8 px-4"
              variants={statsVariants}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
            >
              {[
                {
                  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                  number: "13+",
                  label: "Courier Services",
                  color: "emerald",
                },
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  number: "24/7",
                  label: "Real-time Tracking",
                  color: "teal",
                },
                {
                  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                  number: "100%",
                  label: "Free to Use",
                  color: "cyan",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-lg sm:rounded-xl mb-3 sm:mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={stat.icon}
                      />
                    </svg>
                  </motion.div>
                  <div
                    className={`text-2xl sm:text-3xl font-bold text-${stat.color}-400 mb-1`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-slate-300 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Quick Track Section */}
      {trackingNumber.trim() && (
        <motion.div
          className="bg-gradient-to-br from-slate-800 to-slate-900 py-12 sm:py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-slate-800/60 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl border border-slate-700/50 p-6 sm:p-8"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Try with Different Couriers
                </h2>
                <p className="text-sm sm:text-base text-slate-300">
                  Your tracking number:{" "}
                  <span className="font-mono text-emerald-400 bg-slate-700 px-2 py-1 rounded-lg text-xs sm:text-sm">
                    {trackingNumber}
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {courierServices.map((courier, index) => (
                  <motion.button
                    key={courier.id}
                    onClick={() => handleQuickTrack(courier.id)}
                    disabled={isLoading}
                    className="group bg-slate-700/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-600 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 disabled:opacity-50 transform hover:scale-105"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-600 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-emerald-500/20 transition-colors">
                        <img
                          src={courier.logo}
                          alt={courier.name}
                          className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md items-center justify-center text-white font-bold text-xs hidden">
                          {courier.name.charAt(0)}
                        </div>
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <div className="font-semibold text-white text-xs group-hover:text-emerald-400 transition-colors truncate">
                          {courier.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 truncate">
                          {courier.description}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Tracking Results Modal */}
      <AnimatePresence>
        {showResults && (
          <TrackingResults
            trackingData={trackingResults}
            isLoading={isLoading}
            error={trackingResults ? null : "Failed to load tracking data"}
            onClose={handleCloseResults}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrackingForm;
